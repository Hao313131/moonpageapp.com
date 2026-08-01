/**
 * Shared image re-encoding helpers.
 *
 * Everything under public/ is served byte-for-byte — `images.unoptimized` is
 * on because a static export has no image server — so whatever ships in the
 * repo is exactly what a phone on 4G downloads. These helpers exist so the
 * art is sized for its largest real display slot before it lands in public/.
 */

import { statSync, writeFileSync } from "fs";
import sharp from "sharp";

/** Widest CSS slot a shelf cover ever occupies is 368px (3-col grid at
 * max-w-6xl) / 360px (story page), so 800px still covers a 2x display. */
export const COVER_WIDTH = 800;
export const COVER_QUALITY = 75;

/**
 * Re-encode a cover in place, but only when it would actually get smaller.
 *
 * The size guard matters: covers are lossy WebP already, and re-encoding a
 * file that's fine costs quality for nothing. Skipping when the result isn't
 * meaningfully smaller keeps repeated runs (and repeated `sync:covers`)
 * from slowly degrading the art.
 */
export async function optimizeCover(path) {
  const before = statSync(path).size;
  const out = await sharp(path)
    .resize({ width: COVER_WIDTH, withoutEnlargement: true })
    .webp({ quality: COVER_QUALITY })
    .toBuffer();
  if (out.length >= before * 0.92) return { path, before, after: before, skipped: true };
  writeFileSync(path, out);
  return { path, before, after: out.length, skipped: false };
}

export function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(0)}KB`;
}
