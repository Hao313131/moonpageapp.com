#!/usr/bin/env node
/**
 * Merge raw review submissions into the committed review store.
 *
 * The site is a static export with no server, so reviews are collected out of
 * band and merged here — deliberately, so that every rating that reaches
 * structured data has passed a human and is reproducible from the repo (which
 * is exactly what Google's review-snippet policy asks for).
 *
 * Flow:
 *   1. Submissions POST to NEXT_PUBLIC_REVIEWS_ENDPOINT (a form endpoint you
 *      own — see docs/站内评价体系部署.md).
 *   2. Export those submissions to data/reviews-inbox.json (an array).
 *   3. `npm run reviews:ingest` validates, de-dupes, and merges them into
 *      data/reviews.json.
 *   4. Commit data/reviews.json and push — the build then emits the visible
 *      review section AND the matching aggregateRating JSON-LD.
 *
 * Usage:
 *   npm run reviews:ingest                 # merge data/reviews-inbox.json
 *   npm run reviews:ingest -- path/to.json # merge a specific file
 *
 * A submission is only kept if it is well-formed: a known key, a whole-star
 * rating 1–5, a non-empty author and body, and a yyyy-mm-dd date. Anything
 * else is reported and skipped rather than allowed to poison the store.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const storePath = resolve(root, "data/reviews.json");
const inboxPath = process.argv[2]
  ? resolve(process.cwd(), process.argv[2])
  : resolve(root, "data/reviews-inbox.json");

function isValid(r) {
  return (
    r &&
    typeof r === "object" &&
    typeof r.key === "string" &&
    r.key.length > 0 &&
    typeof r.rating === "number" &&
    Number.isFinite(r.rating) &&
    r.rating >= 1 &&
    r.rating <= 5 &&
    typeof r.author === "string" &&
    r.author.trim().length > 0 &&
    typeof r.text === "string" &&
    r.text.trim().length > 0 &&
    typeof r.date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(r.date)
  );
}

/** Stable identity for de-duping: same key + author + date + body = one review. */
function fingerprint(r) {
  return [r.key, r.author.trim().toLowerCase(), r.date, r.text.trim()]
    .join("\u0001")
    .toLowerCase();
}

if (!existsSync(inboxPath)) {
  console.error(
    `[reviews:ingest] No inbox file at ${inboxPath}.\n` +
      `Export submissions there (an array of {key,rating,author,text,date}) and re-run.`,
  );
  process.exit(1);
}

const store = JSON.parse(readFileSync(storePath, "utf8"));
const existing = Array.isArray(store.reviews) ? store.reviews : [];
const inbox = JSON.parse(readFileSync(inboxPath, "utf8"));

if (!Array.isArray(inbox)) {
  console.error("[reviews:ingest] Inbox must be a JSON array.");
  process.exit(1);
}

const seen = new Set(existing.map(fingerprint));
let added = 0;
let skippedInvalid = 0;
let skippedDup = 0;

for (const raw of inbox) {
  if (!isValid(raw)) {
    skippedInvalid++;
    console.warn("[reviews:ingest] skipped malformed:", JSON.stringify(raw));
    continue;
  }
  const review = {
    key: raw.key,
    rating: Math.round(raw.rating),
    author: raw.author.trim(),
    text: raw.text.trim(),
    date: raw.date,
    ...(raw.verified === true ? { verified: true } : {}),
  };
  const fp = fingerprint(review);
  if (seen.has(fp)) {
    skippedDup++;
    continue;
  }
  seen.add(fp);
  existing.push(review);
  added++;
}

existing.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
writeFileSync(
  storePath,
  JSON.stringify({ reviews: existing }, null, 2) + "\n",
  "utf8",
);

console.log(
  `[reviews:ingest] +${added} added, ${skippedDup} duplicate, ` +
    `${skippedInvalid} malformed. Store now holds ${existing.length} review(s).`,
);
