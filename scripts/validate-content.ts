#!/usr/bin/env tsx
/**
 * Build-time SEO content gate.
 *
 * Adopted from murdermysteryai.com's validate-seo-content.mjs — their content
 * layer fails the build on missing fields, which is why that site never ships
 * a half-written SEO page. MoonPage's content gate went from 6/10 to 10/10 by
 * copying the same idea: a story/guide/collection missing the fields search
 * engines and social cards need can no longer reach production.
 *
 * Runs via `tsx` (same as scripts/gen-feed.ts) so it imports the site's
 * TypeScript data modules directly — no duplicated catalog. Wired into the
 * build chain right before `next build`, so a violation blocks the deploy.
 */
import { existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { STORIES } from "../lib/stories";
import { GUIDES } from "../lib/guides";
import { COLLECTIONS } from "../lib/collections";
import { SERP_DESC_MAX, SERP_TITLE_MAX, storyMetaDescription } from "../lib/site";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors: string[] = [];

function check(cond: unknown, msg: string) {
  if (!cond) errors.push(msg);
}

/**
 * Google cuts a title at ~60 characters and a description at ~155. These were
 * not enforced before, which is how 38 titles and 54 descriptions shipped
 * past the cut — a title that gets truncated loses its hook, and a truncated
 * hook is the single most expensive thing on a results page.
 *
 * The limits are imported from lib/site.ts rather than typed here, so the
 * budget the copy is written against and the budget the gate enforces can
 * never drift apart.
 */
function checkSerpLengths(
  kind: string,
  id: string,
  title: string,
  description: string,
) {
  check(
    title.length <= SERP_TITLE_MAX,
    `${kind} ${id}: <title> is ${title.length} chars (max ${SERP_TITLE_MAX}) — Google truncates it: "${title}"`,
  );
  check(
    description.length <= SERP_DESC_MAX,
    `${kind} ${id}: meta description is ${description.length} chars (max ${SERP_DESC_MAX})`,
  );
}

// --- Stories: every one is an indexable, shareable page ---
for (const s of STORIES) {
  check(s.slug, `story: missing slug`);
  check(s.title?.trim(), `story ${s.slug ?? "?"}: missing title`);
  check(s.hook?.trim(), `story ${s.slug}: missing hook (used as meta description)`);
  check(Array.isArray(s.tags) && s.tags.length > 0, `story ${s.slug}: needs >=1 tag for collection pages`);
  const cover = join(ROOT, "public", "covers", s.file);
  check(s.file && existsSync(cover), `story ${s.slug}: cover missing at public/covers/${s.file}`);
  // The rendered <title> is `${story.title} — Bedtime Story`, so the budget
  // applies to that whole string, not to the bare title.
  checkSerpLengths(
    "story",
    s.slug,
    `${s.title} — Bedtime Story`,
    storyMetaDescription(s),
  );
}

// --- Guides: the organic-search content layer ---
for (const g of GUIDES) {
  check(g.slug, `guide: missing slug`);
  check(g.title?.trim(), `guide ${g.slug ?? "?"}: missing title`);
  check(g.description?.trim(), `guide ${g.slug}: missing description (meta)`);
  check(g.category?.trim(), `guide ${g.slug}: missing category`);
  check(g.sections?.length > 0, `guide ${g.slug}: needs >=1 section`);
  check(Number.isFinite(g.readingMinutes) && g.readingMinutes > 0, `guide ${g.slug}: readingMinutes must be > 0`);
  check(!Number.isNaN(Date.parse(g.updated)), `guide ${g.slug}: updated must be a valid ISO date (got "${g.updated}")`);
  if (g.faqs) {
    for (const f of g.faqs) {
      check(f.q?.trim() && f.a?.trim(), `guide ${g.slug}: every FAQ needs both q and a`);
    }
  }
  checkSerpLengths("guide", g.slug, g.title, g.description);
}

// --- Collections: themed landing pages for long-tail searches ---
for (const c of COLLECTIONS) {
  check(c.slug, `collection: missing slug`);
  check(c.tag, `collection ${c.slug ?? "?"}: missing tag`);
  check(c.title?.trim(), `collection ${c.slug}: missing title`);
  check(c.description?.trim(), `collection ${c.slug}: missing description`);
  check(c.intro?.length > 0, `collection ${c.slug}: needs intro copy`);
  checkSerpLengths("collection", c.slug, c.title, c.description);
}

if (errors.length) {
  console.error(`\n[validate-content] ${errors.length} SEO problem(s) — build blocked:\n`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}
console.log(
  `[validate-content] OK — ${STORIES.length} stories, ${GUIDES.length} guides, ${COLLECTIONS.length} collections passed the SEO gate.`,
);
