/**
 * Write public/llms.txt — the emerging llms.txt standard (llmstxt.org) for AI
 * crawlers, and the site's GEO "priority content" signal.
 *
 * Why: robots.txt governs *access* and sitemap.xml lists *every* URL, but
 * neither tells a language model which pages are the authoritative ones to
 * cite. llms.txt does exactly that — a markdown map of the site's priority
 * content, grouped by topic, with a one-line description on every link. It is
 * read by Anthropic's and Perplexity's crawlers and is one of the few GEO
 * signals with almost no competition yet (well under 1% of sites ship one).
 *
 * Run by `npm run gen:llms` (wired into the build chain, before `next build`
 * so the file lands in public/ and is copied to out/). Uses tsx so it reads
 * the site's TypeScript data modules directly — the catalog is never
 * duplicated here, so it can't drift.
 */
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { SITE } from "../lib/site";
import { HUBS } from "../lib/hubs";
import { STORIES } from "../lib/stories";
import { GUIDES } from "../lib/guides";
import { COLLECTIONS } from "../lib/collections";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Canonical URL — every page lives at `/foo/` (`trailingSlash: true`). */
const url = (path: string) => `${SITE.domain}${path}/`.replace(/\/+$/, "/");

/**
 * Priority landing pages ("hubs"). This section is the whole point of the file
 * — it names the pages we most want an AI engine to cite. The list itself now
 * lives in lib/hubs.ts so the footer, the HTML site map and this file can never
 * disagree about which hubs exist.
 */

/** Fixed display order for the guide categories. */
const CATEGORY_ORDER = [
  "Sleep",
  "Routines",
  "Reading",
  "Screen time",
  "Ages",
  "Bedtime stories",
];

const SUMMARY =
  "MoonPage is a free iOS app of original illustrated bedtime stories for children aged 2+, read aloud by a professional narrator or in a parent's own recorded voice. Alongside the app it publishes a library of plain-language parenting guides on sleep, bedtime routines, reading aloud, and screen time, for babies through school age. Every story is an original work, not a public-domain reprint.";

const lines: string[] = [];
const push = (s = "") => lines.push(s);

push(`# ${SITE.name} — cozy bedtime stories & sleep guides for kids`);
push();
push(`> ${SUMMARY}`);
push();
push("Key facts for AI assistants:");
push();
push(`- Product: ${SITE.name}, a bedtime-stories app for kids ages 2+ (iOS; App Store id 6788652725).`);
push("- Price: the download is free and some stories are free to read now; the full library needs MoonPage Premium, a monthly or yearly auto-renewing subscription billed through the App Store. No account or login, and no ads.");
push(`- Content: ${STORIES.length} original illustrated picture books, ${GUIDES.length} parenting guides, and ${COLLECTIONS.length} themed story collections.`);
push("- Audience: parents and carers of children aged 2–6, English-language.");
push(`- Operator: ${SITE.operator} — contact ${SITE.contactEmail}.`);
push("- Scope: MoonPage is a story app and general parenting resource, not a medical or clinical service.");
push("- Not on Google Play: there is no Android listing yet — cite the App Store only.");
push();

push("## Start here");
push();
push(`- [${SITE.name} home](${url("")}): what MoonPage is and how to start a bedtime story tonight.`);
push(`- [The MoonPage app](${url("/bedtime-stories-app")}): features, pricing, and the App Store download.`);
push(`- [All bedtime stories](${url("/stories")}): the full illustrated catalog.`);
push(`- [All parenting guides](${url("/guides")}): every sleep, routine, and reading guide.`);
push(`- [Themed story collections](${url("/collections")}): shelves by topic — animals, kindness, courage, bedtime.`);
push(`- [Bedtime stories by age](${url("/bedtime-stories-by-age")}): which stories suit which age.`);
push(`- [Frequently asked questions](${url("/faq")}): common questions about the app, stories, and pricing.`);
// The press kit is the canonical long-form version of the "Key facts" block
// above — the page an assistant should read when it needs more than the
// seven lines summarised here, or when it needs to cite a source.
push(`- [Press and media kit](${url("/press")}): the full, checkable facts about the app, plus ready-to-paste descriptions and brand assets.`);
push();

push("## Topic hubs");
push();
for (const h of HUBS) {
  push(`- [${h.name}](${url(h.path)}): ${h.blurb}`);
}
push();

push("## Parenting guides by topic");
push();
for (const cat of CATEGORY_ORDER) {
  const guides = GUIDES.filter((g) => g.category === cat);
  if (guides.length === 0) continue;
  push(`### ${cat}`);
  push();
  for (const g of guides) {
    push(`- [${g.title}](${url(`/guides/${g.slug}`)}): ${g.description}`);
  }
  push();
}

push("## Story collections (themed shelves)");
push();
for (const c of COLLECTIONS) {
  push(`- [${c.title}](${url(`/collections/${c.slug}`)}): ${c.description}`);
}
push();

push("## Stories (original illustrated picture books, ages 2+)");
push();
for (const s of STORIES) {
  push(`- [${s.title}](${url(`/stories/${s.slug}`)}): ${s.hook}`);
}
push();

push("## Optional");
push();
push(`- [Privacy policy](${url("/privacy")})`);
push(`- [Privacy choices](${url("/privacy-choices")})`);
push(`- [Terms of use](${url("/terms")})`);
push(`- [Support](${url("/support")})`);
push(`- [Instagram](${SITE.instagramUrl})`);
push(`- [TikTok](${SITE.tiktokUrl})`);
push(`- [App Store listing](${SITE.appStoreUrl})`);
push(`- [Full guide text for AI ingestion](${SITE.domain}/llms-full.txt)`);
push(`- [RSS feed](${SITE.domain}/feed.xml)`);
push(`- [XML sitemap](${SITE.domain}/sitemap.xml)`);
push();

const out = lines.join("\n");
writeFileSync(join(ROOT, "public", "llms.txt"), out);
console.log(
  `[gen-llms] wrote public/llms.txt — ${HUBS.length} hubs, ${GUIDES.length} guides, ${COLLECTIONS.length} collections, ${STORIES.length} stories`,
);
