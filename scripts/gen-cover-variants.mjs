#!/usr/bin/env node
/**
 * Generate one small width variant per shelf cover so `srcSet` can do its job.
 *
 * Why this exists: the site is a static export (`images.unoptimized: true`),
 * so next/image emits NO srcSet — the `sizes` attribute on every cover grid
 * was dead code, and an 800x588 original was downloaded for a slot that is
 * ~180 CSS px wide on a phone. A real srcSet lets the browser pick the 480w
 * file on small screens and keep the 800w original for wide/retina slots.
 *
 * Runs as part of `npm run build`, right after `sync:covers`. Results are
 * committed and regeneration is skipped while a variant is newer than its
 * source, so a clean build produces no diff. Re-run manually with:
 *   npm run gen:cover-variants
 */

import { existsSync, readdirSync, statSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = join(ROOT, "public/covers");
const WIDTH = 480;
const QUALITY = 74;
const SUFFIX = `-${WIDTH}.webp`;

let generated = 0;
let upToDate = 0;

for (const file of readdirSync(DIR)) {
  // Only the catalog covers; never derive a variant from a variant.
  if (!/^wp_b\d+_\d+_.*_cover\.webp$/.test(file)) continue;
  const src = join(DIR, file);
  const dest = join(DIR, file.replace(/\.webp$/, SUFFIX));
  if (existsSync(dest) && statSync(dest).mtimeMs >= statSync(src).mtimeMs) {
    upToDate += 1;
    continue;
  }
  const out = await sharp(src)
    .resize({ width: WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toBuffer();
  writeFileSync(dest, out);
  generated += 1;
}

console.log(
  `[cover-variants] ${generated} generated, ${upToDate} up to date (${WIDTH}px)`,
);
