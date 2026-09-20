/**
 * Content-shape audit over the exported site (`out/`).
 *
 * Why: the SEO gate (`validate-seo-output.mjs`) checks length budgets —
 * titles ≤ 60, descriptions ≤ 158 — but it cannot see *duplication*. Two pages
 * with different-length but identical metadata, or a paragraph pasted onto a
 * second page, both pass that gate and still read to Google as thin or
 * duplicated. This is the missing counterpart to `npm run audit:links`.
 *
 * Hard failures (exit 1):
 *   - a missing or duplicated <title>
 *   - a missing or duplicated meta description
 *   - a page whose <html> has no lang attribute
 *
 * Reported, not failed (these are real signals, but they have legitimate
 * causes — a FAQ answer intentionally reused on a hub, a guide description
 * reused as its index card):
 *   - pages with very little prose
 *   - paragraphs that appear verbatim on 2–4 pages
 *
 * Run after a build: `npm run audit:content`.
 */
import { readFileSync, readdirSync, statSync } from "fs";
import { join, relative, dirname } from "path";
import { fileURLToPath } from "url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "out");

/** Not part of the content graph: error pages, ad landing page, redirect stubs. */
const EXCLUDED = new Set([
  "/_not-found/",
  "/404/",
  "/get/",
  "/stories/max-and-the-moonflowers/",
  "/stories/milos-little-boat/",
  "/stories/the-meadow-concert/",
  "/stories/the-tangled-kite/",
  "/collections/stories-about-honesty/",
  "/collections/stories-about-music/",
]);

/**
 * Pages that are legitimately short. Every one of these is either a utility
 * page or is intentionally just a form, so "little prose" is the design.
 */
const SHORT_BY_DESIGN = new Set(["/search/", "/support/", "/privacy-choices/"]);

const PROSE_FLOOR = 200;
const PARAGRAPH_MIN_WORDS = 12;

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, acc);
    else if (entry === "index.html") acc.push(full);
  }
  return acc;
}

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)));

const collapse = (s) => s.replace(/\s+/g, " ").trim();

const files = walk(OUT).filter((f) => !EXCLUDED.has(`/${relative(OUT, f).replace(/index\.html$/, "")}`));

const titles = new Map();
const descriptions = new Map();
const paragraphOwners = new Map();
const noLang = [];
const thin = [];

for (const file of files) {
  const page = `/${relative(OUT, file).replace(/index\.html$/, "")}`;
  const html = readFileSync(file, "utf8");

  if (!/<html[^>]+lang="[a-z-]+"/i.test(html)) noLang.push(page);

  const title = html.match(/<title>([\s\S]*?)<\/title>/);
  const titleText = title ? collapse(decode(title[1])) : "";
  if (titleText) titles.set(titleText, [...(titles.get(titleText) ?? []), page]);
  else titles.set("", [...(titles.get("") ?? []), page]);

  const desc = html.match(/<meta name="description" content="([^"]*)"/);
  const descText = desc ? collapse(decode(desc[1])) : "";
  if (descText) descriptions.set(descText, [...(descriptions.get(descText) ?? []), page]);
  else descriptions.set("", [...(descriptions.get("") ?? []), page]);

  const main = html.split("<main", 2)[1]?.split("</main>", 1)[0] ?? "";
  const body = main.replace(/<script[\s\S]*?<\/script>/g, "");

  const prose = collapse(decode(body.replace(/<[^>]+>/g, " ")));
  const wordCount = prose ? prose.split(" ").length : 0;
  if (wordCount < PROSE_FLOOR && !SHORT_BY_DESIGN.has(page)) thin.push([wordCount, page]);

  const seen = new Set();
  for (const match of body.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)) {
    const text = collapse(decode(match[1].replace(/<[^>]+>/g, " ")));
    if (text.split(" ").length < PARAGRAPH_MIN_WORDS || seen.has(text)) continue;
    seen.add(text);
    if (!paragraphOwners.has(text)) paragraphOwners.set(text, []);
    paragraphOwners.get(text).push(page);
  }
}

console.log(`[audit-content] ${files.length} pages audited`);

let failed = false;

const dupTitles = [...titles].filter(([, p]) => p.length > 1);
const missingTitles = titles.get("")?.length ?? 0;
console.log(`[audit-content] titles — ${titles.size} distinct, ${missingTitles} missing, ${dupTitles.length} duplicated`);
for (const [t, p] of dupTitles) console.log(`    DUPLICATE "${t.slice(0, 70)}" -> ${p.join(", ")}`);
if (dupTitles.length || missingTitles) failed = true;

const dupDescs = [...descriptions].filter(([, p]) => p.length > 1);
const missingDescs = descriptions.get("")?.length ?? 0;
console.log(
  `[audit-content] descriptions — ${descriptions.size} distinct, ${missingDescs} missing, ${dupDescs.length} duplicated`,
);
for (const [d, p] of dupDescs) console.log(`    DUPLICATE "${d.slice(0, 70)}" -> ${p.join(", ")}`);
if (dupDescs.length || missingDescs) failed = true;

console.log(`[audit-content] pages without <html lang>: ${noLang.length}`);
for (const p of noLang) console.log(`    NO-LANG ${p}`);
if (noLang.length) failed = true;

console.log(`[audit-content] pages under ${PROSE_FLOOR} words of prose: ${thin.length} (informational)`);
for (const [n, p] of thin.sort((a, b) => a[0] - b[0])) console.log(`    ${String(n).padStart(4)}  ${p}`);

const repeated = [...paragraphOwners].filter(([, p]) => p.length >= 2 && p.length <= 4);
const unique = [...paragraphOwners.values()].filter((p) => p.length === 1).length;
console.log(
  `[audit-content] paragraphs >= ${PARAGRAPH_MIN_WORDS} words: ${paragraphOwners.size} distinct, ${unique} on exactly one page`,
);
console.log(`[audit-content] paragraphs on 2-4 pages (usually a reused FAQ answer or index card): ${repeated.length}`);
for (const [t, p] of repeated) console.log(`    [${p.length}] ${t.slice(0, 100)}`);

if (failed) {
  console.error("[audit-content] FAIL — see the DUPLICATE / NO-LANG / missing lines above");
  process.exit(1);
}
console.log("[audit-content] OK — titles and descriptions unique, every page declares a language");
