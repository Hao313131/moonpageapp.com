#!/usr/bin/env node
/**
 * Size every image in public/ for the slot it actually renders in.
 *
 * Run after adding or replacing art:  npm run optimize:images
 *
 * Deliberately NOT part of `npm run build`: the results are committed, and a
 * build-time re-encode would recompress already-lossy files on every deploy.
 */

import { readdirSync, statSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { optimizeCover, formatKb } from "./lib/images.mjs";

const SITE_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = join(SITE_ROOT, "public");

/** Hero art renders at ~512px CSS wide, but it's the LCP element on the
 * homepage, so it keeps enough pixels for a 2x display and no more. */
const HERO_WIDTH = 1280;
const HERO_QUALITY = 76;

/** The favicon/app-icon source. Only the 1024px original needs to stay big
 * (Organization JSON-LD logo); it just doesn't need to be a 1.5MB PNG. */
const ICON_WIDTH = 1024;

async function optimizeCovers() {
  const dir = join(PUBLIC, "covers");
  const files = readdirSync(dir).filter((f) => f.endsWith(".webp"));
  let before = 0;
  let after = 0;
  let touched = 0;
  for (const f of files) {
    const r = await optimizeCover(join(dir, f));
    before += r.before;
    after += r.after;
    if (!r.skipped) touched += 1;
  }
  console.log(
    `[covers] ${touched}/${files.length} re-encoded — ${formatKb(before)} → ${formatKb(after)}`,
  );
}

async function optimizeHero() {
  const dir = join(PUBLIC, "hero");
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".webp"))) {
    const path = join(dir, f);
    const before = statSync(path).size;
    const out = await sharp(path)
      .resize({ width: HERO_WIDTH, withoutEnlargement: true })
      .webp({ quality: HERO_QUALITY })
      .toBuffer();
    if (out.length >= before * 0.92) {
      console.log(`[hero] ${f} already optimized (${formatKb(before)})`);
      continue;
    }
    writeFileSync(path, out);
    console.log(`[hero] ${f} — ${formatKb(before)} → ${formatKb(out.length)}`);
  }
}

async function optimizeIcons() {
  const src = join(PUBLIC, "icon.png");
  const before = statSync(src).size;
  const base = sharp(src).resize({ width: ICON_WIDTH, withoutEnlargement: true });
  const out = await base.png({ compressionLevel: 9, effort: 10 }).toBuffer();
  if (out.length < before * 0.92) {
    writeFileSync(src, out);
    console.log(`[icon] icon.png — ${formatKb(before)} → ${formatKb(out.length)}`);
  }
  // Derived sizes: 192 is the <link rel=icon> and the in-page logo, 180 is
  // the iOS home-screen icon. Regenerated from the master so they never drift.
  for (const [name, size] of [
    ["icon-192.png", 192],
    ["apple-touch-icon.png", 180],
  ]) {
    const buf = await sharp(src)
      .resize(size, size)
      .png({ compressionLevel: 9, effort: 10 })
      .toBuffer();
    writeFileSync(join(PUBLIC, name), buf);
    console.log(`[icon] ${name} — ${formatKb(buf.length)}`);
  }
}

await optimizeCovers();
await optimizeHero();
await optimizeIcons();
