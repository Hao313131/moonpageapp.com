#!/usr/bin/env node
/**
 * Turn removed story URLs into redirect stubs, so Google stops landing parents
 * on a 404.
 *
 * THE PROBLEM
 *
 * Search Console (3 months to 2026-09-16) shows 69 impressions still arriving
 * at four story URLs that are no longer in the catalog — /stories/the-tangled-kite/,
 * /stories/milos-little-boat/, /stories/the-meadow-concert/ and
 * /stories/max-and-the-moonflowers/. All four return 404 today. A 404 is the
 * right answer for a URL that never existed; a URL that *did* exist and then
 * moved should send people somewhere real.
 *
 * WHY THIS IS NOT A 301
 *
 * The site is a static export on GitHub Pages. `public/_redirects` is inert
 * there (measured: the legacy slugs still 404 on the live site) and Next.js
 * refuses to emit redirects when `output: "export"`. On this host the only
 * lever left is a real page carrying the two signals Google actually honours:
 * `<link rel="canonical">` and a zero-second meta refresh. Both are documented
 * redirect methods, and together they consolidate the old URL onto the target.
 *
 * Deliberately NO `noindex` on the stub. `noindex` tells Google to drop the URL
 * without consolidating it, which is the opposite of what we want here, and it
 * contradicts the redirect. This is also why the build runs this script AFTER
 * `validate:seo`: the gate requires every page to self-canonicalise, and a
 * redirect stub legitimately points its canonical somewhere else. Stubs are not
 * content pages, so they are not in the sitemap and not in the gate's scope —
 * the target-exists check below is what keeps them honest instead.
 *
 * WHEN CLOUDFLARE IS FRONTED
 *
 * Real 301s become possible. Move data/legacy-slugs.json into a Cloudflare
 * redirect rule list, delete this script and its build step.
 *
 * Usage: node scripts/gen-legacy-redirects.mjs   (last step of `npm run build`)
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "out");
const DOMAIN = "https://moonpageapp.com";
const DATA = join(ROOT, "data", "legacy-slugs.json");

/** Written into every stub so a re-run can tell its own output from a real page. */
const MARKER = "<!-- moonpage:legacy-redirect -->";

if (!existsSync(OUT)) {
  console.error("[legacy-redirects] out/ not found — run `next build` first.");
  process.exit(1);
}

const { redirects } = JSON.parse(readFileSync(DATA, "utf8"));
const errors = [];
/** Normalised [from, to] pairs, reused to regenerate out/_redirects. */
const pairs = [];
let written = 0;
let unchanged = 0;

/** `/stories/x/` -> `out/stories/x/index.html` */
function pageFile(pathname) {
  return join(OUT, pathname.replace(/^\/+/, ""), "index.html");
}

for (const { from, to, impressions, reason } of redirects) {
  // Normalise: every path this script touches is a directory-style URL.
  const src = from.endsWith("/") ? from : `${from}/`;
  const dest = to.endsWith("/") ? to : `${to}/`;

  if (!src.startsWith("/") || !dest.startsWith("/")) {
    errors.push(`${from}: from/to must be root-relative paths`);
    continue;
  }

  // The target must exist in this build. A redirect into a 404 is worse than
  // the 404 it replaced, so this is a hard failure rather than a warning.
  if (!existsSync(pageFile(dest))) {
    errors.push(`${src}: target ${dest} is not in this build`);
    continue;
  }

  // Never clobber a real page. If a story comes back under an old slug, the
  // catalog wins and the stale entry should be deleted from the JSON.
  const target = pageFile(src);
  if (existsSync(target)) {
    const existing = readFileSync(target, "utf8");
    if (!existing.includes(MARKER)) {
      errors.push(
        `${src}: a real page exists there — remove this entry from data/legacy-slugs.json`,
      );
      continue;
    }
  }

  const destUrl = `${DOMAIN}${dest}`;
  pairs.push([src, dest]);
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>This story has moved — MoonPage</title>
${MARKER}
<link rel="canonical" href="${destUrl}">
<meta http-equiv="refresh" content="0; url=${destUrl}">
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<p>That story is no longer in the catalog. <a href="${dest}">Continue to ${dest}</a>.</p>
</body>
</html>
`;

  mkdirSync(dirname(target), { recursive: true });
  if (existsSync(target) && readFileSync(target, "utf8") === html) {
    unchanged += 1;
  } else {
    writeFileSync(target, html);
    written += 1;
  }
  console.log(
    `[legacy-redirects] ${src} -> ${dest}  (${impressions} impressions; ${reason})`,
  );
}

if (errors.length) {
  console.error(`\n[legacy-redirects] ${errors.length} problem(s):\n`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}

/**
 * Keep out/_redirects in step with the stubs.
 *
 * public/_redirects is inert on GitHub Pages, so nothing here changes what the
 * live site does today — but it is the rule list that gets lifted into
 * Cloudflare (or Netlify) when the site is fronted, and a rule list that
 * disagrees with the stubs would silently change behaviour at that moment.
 * Rather than keep two hand-maintained copies of the same fact, append the
 * legacy rules here from data/legacy-slugs.json. Everything above the marker
 * comes from public/_redirects and stays hand-maintained (currently the
 * www→apex rule). Re-running is idempotent: the old block is cut before the
 * new one is written.
 */
const REDIRECTS_MARKER =
  "# --- legacy slugs (generated from data/legacy-slugs.json — do not hand-edit) ---";
const redirectsFile = join(OUT, "_redirects");

if (!existsSync(redirectsFile)) {
  // Not an error: the site works without it, it just has no redirect rules.
  console.warn(
    "[legacy-redirects] out/_redirects not found (public/_redirects missing?) — skipped.",
  );
} else {
  const existing = readFileSync(redirectsFile, "utf8");
  const head = existing.includes(REDIRECTS_MARKER)
    ? existing.slice(0, existing.indexOf(REDIRECTS_MARKER))
    : existing;

  const lines = [head.trimEnd(), "", REDIRECTS_MARKER];
  for (const [src, dest] of pairs) {
    // Both forms: a stale path may be requested with or without the slash.
    lines.push(`${src.replace(/\/$/, "")} ${dest} 301`);
    lines.push(`${src} ${dest} 301`);
  }
  lines.push("");

  const next = lines.join("\n");
  if (next === existing) {
    console.log(`[legacy-redirects] out/_redirects already current (${pairs.length} rules).`);
  } else {
    writeFileSync(redirectsFile, next);
    console.log(
      `[legacy-redirects] out/_redirects rewritten — ${pairs.length} legacy rule(s) ` +
        `(${pairs.length * 2} lines incl. no-slash forms).`,
    );
  }
}

console.log(
  `[legacy-redirects] OK — ${redirects.length} stub(s): ${written} written, ` +
    `${unchanged} already current.`,
);
