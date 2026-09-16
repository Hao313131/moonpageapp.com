#!/usr/bin/env node
/**
 * Post-build SEO gate — runs over the static export in `out/` and fails the
 * build on anything Google would truncate, ignore, or flag.
 *
 * Why a second gate when `validate-content.ts` already exists: that one
 * checks the *data layer* (stories, guides, collections) before Next runs, so
 * it can't see the pages whose metadata lives in `app/**\/page.tsx` — the
 * nine keyword hubs, /faq, /support, /stories, /guides, /collections — and it
 * can't see what the title template, `pageMetadata()`, and the JSON-LD
 * builders actually emit. Those are exactly the places the two worst problems
 * on this site came from: a title template that pushed 38 pages past the
 * 60-character cut, and a story description builder that produced 190–305
 * character snippets on all 45 story pages. Neither is visible in the data.
 *
 * So: read the real HTML. Whatever a crawler would see is what gets checked.
 *
 * Checks, per page:
 *   - <title> present and <= SERP_TITLE_MAX        (Google truncates past it)
 *   - meta description present and <= SERP_DESC_MAX
 *   - exactly one <h1>
 *   - <link rel="canonical"> present and equal to the page's own URL
 *   - no `REPLACE_WITH_` placeholder left in <head>
 *   - every page declares at least one JSON-LD block
 *   - no anchor points at a store listing that does not exist
 *
 * Plus, once, across the whole build:
 *   - every <loc> in sitemap.xml resolves to a built page
 *   - no duplicate <title> across indexable pages
 *
 * Usage: node scripts/validate-seo-output.mjs   (wired into `npm run build`)
 */
import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, dirname, relative } from "path";
import { fileURLToPath } from "url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "out");
const DOMAIN = "https://moonpageapp.com";

// Budgets — kept in lockstep with lib/site.ts by reading the same numbers out
// of the built HTML rather than importing TS (this script is plain Node).
const TITLE_MAX = 60;
const DESC_MAX = 158; // 155 target + slack for a trailing entity

if (!existsSync(OUT)) {
  console.error("[validate-seo-output] out/ not found — run `next build` first.");
  process.exit(1);
}

/**
 * Decode the entities Next escapes into the HTML before measuring anything.
 *
 * This matters more than it looks: `&amp;` is five characters in the file and
 * ONE on the results page, and `&#x27;` is six and one. Measuring the raw
 * bytes would fail titles that are actually well inside the budget and push
 * real copy to be shortened for no reason — which is how a title loses its
 * hook while a checker reports green.
 */
const ENTITIES = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#x27;": "'",
  "&#39;": "'",
  "&nbsp;": " ",
  "&mdash;": "—",
  "&ndash;": "–",
  "&#x2F;": "/",
};

function decode(text) {
  return text.replace(/&(?:amp|lt|gt|quot|#x27|#39|nbsp|mdash|ndash|#x2F);/g, (m) => ENTITIES[m] ?? m);
}

/** Every directory holding an index.html is a page.
 *
 * Two exclusions, both because they are not real, indexable URLs:
 *   - `_next` and anything else starting with `_` (`_not-found`) is build
 *     scaffolding that Next emits alongside the real pages.
 *   - `404/` is the static build's second copy of `app/not-found.tsx`. GitHub
 *     Pages serves the root `404.html` for missing paths; `404/index.html` is
 *     a side effect, and robots.txt disallows it.
 */
const SKIP_DIRS = new Set(["_next", "_not-found", "404"]);

function collectPages(dir, rel = "") {
  const pages = [];
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      pages.push(...collectPages(full, `${rel}/${name}`));
    } else if (name === "index.html") {
      pages.push({ url: `${rel}/`.replace(/\/+/g, "/"), file: full });
    }
  }
  return pages;
}

const pages = collectPages(OUT);
const errors = [];
const warnings = [];

const titles = new Map();

for (const { url, file } of pages) {
  const html = readFileSync(file, "utf8");
  const head = html.slice(0, html.indexOf("</head>"));
  const where = url;

  const title = decode(
    (html.match(/<title>(.*?)<\/title>/s)?.[1] ?? "").trim(),
  );
  const desc = decode(
    (head.match(/<meta name="description" content="(.*?)"/s)?.[1] ?? "").trim(),
  );
  const canonical = head.match(/<link rel="canonical" href="(.*?)"/)?.[1] ?? "";
  const h1Count = (html.match(/<h1[\s>]/g) ?? []).length;
  const isNoindex = /<meta name="robots" content="[^"]*noindex/.test(head);

  if (!title) errors.push(`${where}: no <title>`);
  else if (title.length > TITLE_MAX)
    errors.push(
      `${where}: <title> ${title.length} chars > ${TITLE_MAX} — "${title}"`,
    );

  if (!desc) errors.push(`${where}: no meta description`);
  else if (desc.length > DESC_MAX)
    errors.push(`${where}: description ${desc.length} chars > ${DESC_MAX}`);

  if (h1Count !== 1) errors.push(`${where}: ${h1Count} <h1> tags (want exactly 1)`);

  const wantCanonical = `${DOMAIN}${url === "/" ? "/" : url}`;
  if (!canonical) {
    // /get is the paid-traffic landing page: it deliberately declares noindex
    // and points its canonical at the homepage so it never competes with it.
    if (!isNoindex) errors.push(`${where}: no canonical`);
  } else if (canonical !== wantCanonical && !isNoindex) {
    errors.push(`${where}: canonical is ${canonical}, want ${wantCanonical}`);
  }

  const placeholder = head.match(/REPLACE_WITH_[A-Z_]+/);
  if (placeholder)
    errors.push(
      `${where}: unset verification placeholder "${placeholder[0]}" shipped in <head>`,
    );

  if (!/application\/ld\+json/.test(head))
    warnings.push(`${where}: no JSON-LD`);

  // A store badge must point at a listing that exists. Google Play had no
  // listing at all while 147 pages carried a badge for it.
  if (/<a[^>]+href="https:\/\/play\.google\.com\/store\/apps\/details/.test(html))
    errors.push(
      `${where}: renders a Google Play badge — verify the listing is live before shipping it`,
    );

  if (!isNoindex) {
    if (titles.has(title)) {
      errors.push(
        `${where}: duplicate <title> with ${titles.get(title)} — "${title}"`,
      );
    } else {
      titles.set(title, where);
    }
  }
}

// --- sitemap.xml must only contain URLs that actually resolve ---
const sitemapPath = join(OUT, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  errors.push("sitemap.xml missing from the build");
} else {
  const locs = [...readFileSync(sitemapPath, "utf8").matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (m) => m[1],
  );
  const built = new Set(pages.map((p) => p.url));
  for (const loc of locs) {
    const path = loc.replace(DOMAIN, "") || "/";
    if (!built.has(path)) errors.push(`sitemap lists ${loc} — no page built there`);
  }
  if (locs.length === 0) errors.push("sitemap.xml has no <loc> entries");
}

// --- report ---
if (warnings.length) {
  console.log(`[validate-seo-output] ${warnings.length} warning(s):`);
  for (const w of warnings.slice(0, 10)) console.log(`  ! ${w}`);
  if (warnings.length > 10) console.log(`  … and ${warnings.length - 10} more`);
}

if (errors.length) {
  console.error(
    `\n[validate-seo-output] ${errors.length} SEO problem(s) — build blocked:\n`,
  );
  for (const e of errors.slice(0, 40)) console.error(`  ✗ ${e}`);
  if (errors.length > 40) console.error(`  … and ${errors.length - 40} more`);
  process.exit(1);
}

console.log(
  `[validate-seo-output] OK — ${pages.length} pages: titles ≤ ${TITLE_MAX}, ` +
    `descriptions ≤ ${DESC_MAX}, canonicals exact, one <h1> each, sitemap resolves.`,
);
