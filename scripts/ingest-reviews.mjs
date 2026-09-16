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
 *   1. Submissions POST to the review endpoint (see docs/评价endpoint部署.md)
 *      and arrive as email / spreadsheet rows.
 *   2. Copy them into an inbox file — JSON, or the one-line-per-review text
 *      format below, whichever is faster for you.
 *   3. `npm run reviews:ingest` validates, de-dupes, and merges them into
 *      data/reviews.json.
 *   4. Commit data/reviews.json and push — the build then emits the visible
 *      review section AND the matching aggregateRating JSON-LD.
 *
 * Usage:
 *   npm run reviews:ingest                    # merge data/reviews-inbox.json
 *   npm run reviews:ingest -- path/to.json    # merge a specific file
 *   npm run reviews:ingest -- --template      # write a starter inbox file
 *
 * Text format (one review per line, `|` separated):
 *
 *   key | rating | author | date | text
 *
 * Only `key`, `rating` and `text` are required. `author` defaults to
 * "A parent", `date` defaults to today. `site` is accepted as an alias for the
 * site-wide key. Examples:
 *
 *   brunos-snow-day | 5 | Sarah M | 2026-09-20 | My daughter asks for this one every night.
 *   site | 4 | A dad | | The app finally made bedtime calm in our house.
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
const arg = process.argv[2];
const SITE_KEY = "__site__";

if (arg === "--template") {
  const target = resolve(root, "data/reviews-inbox.json");
  if (existsSync(target)) {
    console.error(`[reviews:ingest] ${target} already exists — not overwriting.`);
    process.exit(1);
  }
  writeFileSync(
    target,
    JSON.stringify(
      {
        reviews: [
          {
            key: "brunos-snow-day",
            rating: 5,
            author: "Sarah M",
            text: "Replace me with a real review. Delete this example.",
            date: new Date().toISOString().slice(0, 10),
          },
        ],
      },
      null,
      2,
    ) + "\n",
    "utf8",
  );
  console.log(`[reviews:ingest] wrote a starter inbox to ${target}`);
  process.exit(0);
}

/** Default inbox: JSON if present, otherwise the text format, otherwise the
 * JSON path (so the "no inbox file" error names the file you probably want). */
const defaultJson = resolve(root, "data/reviews-inbox.json");
const defaultTxt = resolve(root, "data/reviews-inbox.txt");
const inboxPath = arg
  ? resolve(process.cwd(), arg)
  : existsSync(defaultJson)
    ? defaultJson
    : existsSync(defaultTxt)
      ? defaultTxt
      : defaultJson;

/** Story slugs, read straight out of the catalog source so a typo'd key is
 * caught here instead of silently producing a review that renders nowhere. */
function knownStorySlugs() {
  try {
    const src = readFileSync(resolve(root, "lib/stories.ts"), "utf8");
    return new Set(
      [...src.matchAll(/^[ \t]*slug:[ \t]*"([^"]+)"/gm)].map((m) => m[1]),
    );
  } catch {
    return null;
  }
}

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

/** Parse the one-line-per-review text format into review objects. */
function parseTextInbox(source) {
  const out = [];
  const problems = [];
  const today = new Date().toISOString().slice(0, 10);

  source.split(/\r?\n/).forEach((line, i) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const parts = trimmed.split("|").map((p) => p.trim());
    if (parts.length < 3) {
      problems.push(`line ${i + 1}: needs at least "key | rating | text"`);
      return;
    }

    const key = parts[0].toLowerCase() === "site" ? SITE_KEY : parts[0];
    const rating = Number(parts[1]);

    // The optional date is recognised by its shape, and everything after it
    // (or after the author, when there is no date) is the review body — so a
    // body that itself contains "|" survives intact.
    let author = "A parent";
    let date = today;
    let textParts;

    if (parts.length >= 5) {
      author = parts[2] || author;
      date = parts[3] || today;
      textParts = parts.slice(4);
    } else if (parts.length === 4) {
      author = parts[2] || author;
      if (/^\d{4}-\d{2}-\d{2}$/.test(parts[3])) {
        date = parts[3];
        textParts = [];
      } else {
        textParts = parts.slice(3);
      }
    } else {
      textParts = parts.slice(2);
    }

    out.push({
      key,
      rating,
      author,
      text: textParts.join(" | ").trim(),
      date,
    });
  });

  return { out, problems };
}

if (!existsSync(inboxPath)) {
  console.error(
    `[reviews:ingest] No inbox file at ${inboxPath}.\n` +
      `Put submissions there — either a JSON array of {key,rating,author,text,date},\n` +
      `or one review per line as "key | rating | author | date | text".\n` +
      `Run \`npm run reviews:ingest -- --template\` for a starter file.`,
  );
  process.exit(1);
}

const store = JSON.parse(readFileSync(storePath, "utf8"));
const existing = Array.isArray(store.reviews) ? store.reviews : [];

const rawInbox = readFileSync(inboxPath, "utf8");
let inbox;
const parseProblems = [];
if (inboxPath.endsWith(".json")) {
  const parsed = JSON.parse(rawInbox);
  inbox = Array.isArray(parsed) ? parsed : parsed.reviews;
  if (!Array.isArray(inbox)) {
    console.error(
      "[reviews:ingest] JSON inbox must be an array, or an object with a `reviews` array.",
    );
    process.exit(1);
  }
} else {
  const { out, problems } = parseTextInbox(rawInbox);
  inbox = out;
  parseProblems.push(...problems);
}

const slugs = knownStorySlugs();
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
  // A key that matches no story still renders — it just renders nowhere,
  // which looks like the review vanished. Flag it loudly.
  if (slugs && review.key !== SITE_KEY && !slugs.has(review.key)) {
    console.warn(
      `[reviews:ingest] unknown key "${review.key}" — no story has that slug, ` +
        `so this review will not appear on any page. Check for a typo.`,
    );
  }
  const fp = fingerprint(review);
  if (seen.has(fp)) {
    skippedDup++;
    continue;
  }
  seen.add(fp);
  existing.push(review);
  added++;
}

for (const p of parseProblems) console.warn(`[reviews:ingest] ${p}`);

existing.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
writeFileSync(
  storePath,
  JSON.stringify({ reviews: existing }, null, 2) + "\n",
  "utf8",
);

const byKey = new Map();
for (const r of existing) byKey.set(r.key, (byKey.get(r.key) ?? 0) + 1);

console.log(
  `[reviews:ingest] +${added} added, ${skippedDup} duplicate, ` +
    `${skippedInvalid} malformed. Store now holds ${existing.length} review(s) ` +
    `across ${byKey.size} key(s).`,
);
if (byKey.size > 0) {
  for (const [k, n] of [...byKey.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${k}: ${n}`);
  }
}
