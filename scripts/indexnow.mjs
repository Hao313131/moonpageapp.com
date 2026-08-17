#!/usr/bin/env node
/**
 * Push the LIVE sitemap to IndexNow (Bing / Yandex / Seznam / Naver).
 *
 * Adopted from murdermysteryai.com's indexnow.mjs — the single biggest
 * non-i18n gap MoonPage had vs that site (IndexNow was a 2/10, now 10/10).
 *
 * Why it matters: Google discovers via Search Console on its own cadence.
 * IndexNow gets the other engines indexing new/updated URLs within minutes
 * instead of waiting days for a crawl. It does NOT replace Google — that's
 * by design (Google reads sitemap.xml + Search Console).
 *
 * The key file public/indexnow-key.txt must be reachable at
 * https://<host>/indexnow-key.txt or engines return 403. It's committed in
 * public/ and copied into out/ by the static export, so it ships every deploy.
 *
 * Usage:
 *   node scripts/indexnow.mjs            # push every <loc> in the live sitemap
 *   node scripts/indexnow.mjs /guides    # push only URLs containing a substring
 *
 * Runs in the deploy job (URLs already live). It fetches the PUBLISHED
 * sitemap.xml over HTTPS — never the local copy — so it always reflects what
 * is actually on the domain.
 */
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE_DOMAIN = (process.env.SITE_DOMAIN || "https://moonpageapp.com").replace(/\/+$/, "");
const HOST = SITE_DOMAIN.replace(/^https?:\/\//, "");
const SITEMAP_URL = `${SITE_DOMAIN}/sitemap.xml`;
const KEY_FILE = join(ROOT, "public", "indexnow-key.txt");

function fail(msg) {
  console.error(`[indexnow] ${msg}`);
  process.exit(1);
}

let key;
try {
  key = readFileSync(KEY_FILE, "utf8").trim();
} catch {
  fail(`key file not found at ${KEY_FILE}`);
}
if (!key) fail("indexnow key file is empty");

const filters = process.argv.slice(2);

async function main() {
  let xml;
  try {
    const res = await fetch(SITEMAP_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    xml = await res.text();
  } catch (e) {
    fail(`could not fetch ${SITEMAP_URL}: ${e.message}`);
  }

  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
  if (!urls.length) fail(`no <loc> found in ${SITEMAP_URL}`);

  const filtered = filters.length
    ? urls.filter((u) => filters.some((f) => u.includes(f)))
    : urls;
  if (!filtered.length) fail(`no URLs matched filters: ${filters.join(", ")}`);

  console.log(`[indexnow] pushing ${filtered.length}/${urls.length} URLs to IndexNow`);
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key,
      keyLocation: `${SITE_DOMAIN}/indexnow-key.txt`,
      urlList: filtered,
    }),
  });
  const body = await res.text();
  if (res.ok) {
    console.log(`[indexnow] OK (${res.status}) — ${body || "accepted"}`);
  } else {
    console.error(`[indexnow] engine rejected: ${res.status} ${body}`);
    process.exit(1);
  }
}

main();
