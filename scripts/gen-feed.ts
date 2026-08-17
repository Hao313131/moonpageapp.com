/**
 * Write public/feed.xml — an RSS 2.0 feed of every story, guide and
 * collection on the site.
 *
 * Why: an RSS feed is a second discovery surface. Feed readers subscribe to it,
 * and some search engines (Bing in particular) ingest feeds as a freshness
 * signal. It also doubles as a clean, crawlable index of the whole catalog.
 *
 * Run by `npm run gen:feed` (wired into the build chain). Uses tsx so it can
 * import the site's TypeScript data modules directly — no duplication of the
 * catalog here.
 */
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { SITE } from "../lib/site";
import { STORIES } from "../lib/stories";
import { GUIDES } from "../lib/guides";
import { COLLECTIONS } from "../lib/collections";
import { storyCoverUrl } from "../lib/storyCover";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

type Item = {
  title: string;
  link: string;
  description: string;
  category: string;
  pubDate?: string;
  /** Cover art for the item — shows as a thumbnail in feed readers. */
  image?: string;
};

const items: Item[] = [
  ...STORIES.map((s) => ({
    title: s.title,
    link: `${SITE.domain}/stories/${s.slug}`,
    description: s.hook,
    category: "Story",
    image: storyCoverUrl(SITE.domain, s.file),
  })),
  ...GUIDES.map((g) => ({
    title: g.title,
    link: `${SITE.domain}/guides/${g.slug}`,
    description: g.description,
    category: "Guide",
    pubDate: new Date(g.updated).toUTCString(),
  })),
  ...COLLECTIONS.map((c) => ({
    title: c.title,
    link: `${SITE.domain}/collections/${c.slug}`,
    description: c.description,
    category: "Collection",
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(`${SITE.name} — bedtime stories & guides`)}</title>
    <link>${SITE.domain}</link>
    <description>${esc(SITE.description)}</description>
    <language>en</language>
    <image>
      <url>${SITE.domain}/og-image.png</url>
      <title>${esc(SITE.name)}</title>
      <link>${SITE.domain}</link>
    </image>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE.domain}/feed.xml" rel="self" type="application/rss+xml" />
${items
  .map(
    (it) =>
      `    <item>\n      <title>${esc(it.title)}</title>\n      <link>${it.link}</link>\n      <guid isPermaLink="true">${it.link}</guid>\n      <description>${esc(it.description)}</description>\n      <category>${esc(it.category)}</category>${
        it.pubDate ? `\n      <pubDate>${it.pubDate}</pubDate>` : ""
      }${
        it.image ? `\n      <image>${esc(it.image)}</image>` : ""
      }\n    </item>`,
  )
  .join("\n")}
  </channel>
</rss>
`;

writeFileSync(join(ROOT, "public", "feed.xml"), xml);
console.log(`[gen-feed] wrote public/feed.xml with ${items.length} items`);
