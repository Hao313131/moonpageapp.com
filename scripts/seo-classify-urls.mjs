#!/usr/bin/env node
/**
 * Classify a bulk list of URLs (e.g. exported from Google Search Console's
 * "Coverage" / indexing report) against the STATIC BUILD in `out/`.
 *
 * Why: GSC only shows 10 example URLs per issue in the UI, but the real counts
 * are 68 / 63 / 30 / … . To fix ALL of them you need the full list. Export each
 * issue's URLs (CSV or plain text, one URL per line) and run this to learn,
 * per URL, whether it:
 *   - VALID      → resolves to a real built page (200)
 *   - REDIRECT   → a "no-slash" clean URL (GitHub Pages 301s /foo → /foo/) or an
 *                 http:// variant (GitHub Pages 301s http → https). These are the
 *                 "Page with redirect" + "Alternate page" reports; they self-heal
 *                 after the trailingSlash/https fixes are live and re-crawled.
 *   - 404        → no matching built file at all. This is a STALE/legacy slug
 *                 (old sitemap, dead backlink). Add a 301 for it in public/_redirects.
 *
 * Usage:
 *   node scripts/seo-classify-urls.mjs <file-with-urls.txt>
 *   # or pipe:  cat gsc.csv | node scripts/seo-classify-urls.mjs -
 *
 * Accepts plain URL-per-line or a CSV where the first http(s) token on each
 * line is treated as the URL.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join } from "path";

const OUT = new URL("../out/", import.meta.url).pathname;
const DOMAIN = "https://moonpageapp.com";

// Index every real file + every dir that has index.html (served as /dir/).
const files = new Set();
const dirIndexes = new Set();
(function walk(dir, rel) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    const r = rel ? rel + "/" + name : name;
    if (st.isDirectory()) {
      if (readdirSync(full).includes("index.html")) dirIndexes.add("/" + r + "/");
      walk(full, r);
    } else {
      files.add("/" + r);
    }
  }
})(OUT, "");

function classify(raw) {
  const scheme = raw.startsWith("http://") ? "http" : "https";
  let p = raw.replace(/^https?:\/\//, "").replace(/^[^/]+/, "");
  p = p.split("#")[0].split("?")[0];
  if (p === "" || p === "/") {
    // http://apex is still a 301 (http→https); https://apex is fine.
    return { scheme, status: scheme === "http" ? "REDIRECT" : "VALID" };
  }
  let pathStatus;
  if (p.endsWith("/")) {
    pathStatus =
      files.has(p + "index.html") || dirIndexes.has(p) ? "VALID" : "404";
  } else if (files.has(p)) {
    pathStatus = "VALID"; // e.g. /icon.png
  } else if (dirIndexes.has(p + "/")) {
    pathStatus = "REDIRECT"; // no-slash clean URL → /foo/
  } else {
    pathStatus = "404";
  }
  // An http:// URL is ALWAYS a 301 to its https twin, even when the path is
  // valid — that's exactly the "Alternate page with proper canonical" report.
  if (scheme === "http" && pathStatus !== "404") return { scheme, status: "REDIRECT" };
  return { scheme, status: pathStatus };
}

// Read input: file arg, or stdin when arg is "-"
let text;
if (process.argv[2] === "-") {
  text = readFileSync(0, "utf8");
} else if (process.argv[2]) {
  text = readFileSync(process.argv[2], "utf8");
} else {
  console.error("usage: node scripts/seo-classify-urls.mjs <urls.txt|->");
  process.exit(1);
}

const results = [];
for (const line of text.split(/\r?\n/)) {
  const m = line.match(/https?:\/\/[^\s,"]+/);
  if (!m) continue;
  results.push({ url: m[0], ...classify(m[0]) });
}

const by = { VALID: [], REDIRECT: [], "404": [] };
for (const r of results) by[r.status].push(r);

console.log(`Total URLs classified: ${results.length}\n`);
console.log(`VALID    : ${by.VALID.length}  (real pages — no action)`);
console.log(`REDIRECT : ${by.REDIRECT.length}  (no-slash / http → self-heals after re-crawl)`);
console.log(`404      : ${by["404"].length}  (stale slugs → add 301 in public/_redirects)\n`);

if (by["404"].length) {
  console.log("=== 404 STALE SLUGS — add a 301 for each to public/_redirects ===");
  for (const r of by["404"]) {
    const slash = r.url.endsWith("/") ? r.url : r.url + "/";
    const target = slash.includes("/stories/") ? "/stories/" : slash.includes("/guides/") ? "/guides/" : slash.includes("/collections/") ? "/collections/" : "/";
    console.log(`${r.url}  ->  301 to ${target}`);
  }
}
if (by.REDIRECT.length) {
  console.log("\n=== REDIRECT samples (scheme shown; these are the redirect/alternate reports) ===");
  const httpCount = by.REDIRECT.filter((r) => r.scheme === "http").length;
  console.log(`http:// variants: ${httpCount} (external http→https, fades after re-crawl)`);
  console.log(`https:// no-slash variants: ${by.REDIRECT.length - httpCount} (covered by trailingSlash fix)`);
}
