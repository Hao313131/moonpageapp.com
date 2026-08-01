#!/usr/bin/env node
/**
 * Build public/og-image.png — the card every shared link renders.
 *
 * Run:  npm run make:og
 *
 * The previous og-image was the raw 630x1200 portrait owl. Facebook, X,
 * LinkedIn, WhatsApp and iMessage all render `summary_large_image` at 1.91:1
 * and center-crop anything else, so that art was being served to every
 * sharer as a horizontal band across the owl's middle. This composes a
 * proper 1200x630 card instead: art on the right, the value proposition in
 * type on the left, where the crop can't eat it.
 *
 * Source art stays in public/brand/ so this script is re-runnable — it never
 * reads its own output.
 */

import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const SITE_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = join(SITE_ROOT, "public");

const W = 1200;
const H = 630;

// Brand tokens, mirrored from app/globals.css.
const CREAM = "#d4c8b0";
const PAPER = "#f5ebd8";
const INK = "#5c3a21";
const LINK = "#8a3a0e";

/** Georgia/Helvetica rather than the site's webfonts: librsvg resolves fonts
 * through fontconfig, so only system faces are guaranteed to render here. */
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "Helvetica, Arial, sans-serif";

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const background = Buffer.from(
  `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
     <defs>
       <linearGradient id="wash" x1="0" y1="0" x2="1" y2="1">
         <stop offset="0%" stop-color="${PAPER}"/>
         <stop offset="100%" stop-color="${CREAM}"/>
       </linearGradient>
     </defs>
     <rect width="${W}" height="${H}" fill="url(#wash)"/>
   </svg>`,
);

const text = Buffer.from(
  `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
     <text x="72" y="196" font-family="${SANS}" font-size="34" font-weight="700"
           letter-spacing="1" fill="${LINK}">${escape("MOONPAGE")}</text>
     <text x="72" y="290" font-family="${SERIF}" font-size="60" font-weight="700"
           fill="${INK}">${escape("Cozy bedtime stories")}</text>
     <text x="72" y="360" font-family="${SERIF}" font-size="60" font-weight="700"
           fill="${INK}">${escape("for kids ages 2+")}</text>
     <text x="72" y="440" font-family="${SANS}" font-size="30" fill="${INK}"
           opacity="0.85">${escape("Read aloud by a narrator — or in your own voice")}</text>
     <text x="72" y="486" font-family="${SANS}" font-size="30" fill="${INK}"
           opacity="0.85">${escape("No ads. No login. Works offline.")}</text>
   </svg>`,
);

/** Art panel on the right third. The portrait owl is cropped from the top so
 * the head and book survive — that's the recognisable part at thumbnail size. */
const ART_WIDTH = 430;

const owl = await sharp(join(PUBLIC, "brand/owl-portrait.png"))
  .resize({ width: ART_WIDTH, height: H, fit: "cover", position: "top" })
  .toBuffer();

const card = await sharp(background)
  .composite([
    { input: owl, left: W - ART_WIDTH, top: 0 },
    { input: text, left: 0, top: 0 },
  ])
  .png({ compressionLevel: 9, effort: 10 })
  .toBuffer();

writeFileSync(join(PUBLIC, "og-image.png"), card);
console.log(
  `[og] og-image.png — ${W}x${H}, ${(card.length / 1024).toFixed(0)}KB`,
);
