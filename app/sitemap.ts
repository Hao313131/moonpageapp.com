import type { MetadataRoute } from "next";
import { COLLECTIONS } from "@/lib/collections";
import {
  COLLECTION_DATE,
  ROUTE_DATES,
  STORY_DATE,
} from "@/lib/content-dates";
import { GUIDES } from "@/lib/guides";
import { SITE } from "@/lib/site";
import { STORIES, storiesByTag } from "@/lib/stories";
import { storyCoverUrl } from "@/lib/storyCover";

// Required for `output: "export"` (Next treats MetadataRoute as dynamic otherwise).
export const dynamic = "force-static";

// /get is deliberately excluded — it's an ad-traffic landing page (see its
// own `robots: { index: false }`), not something we want ranking organically.
const ROUTES = [
  "",
  "/bedtime-stories",
  "/toddler-bedtime-stories",
  "/preschool-bedtime-stories",
  "/read-aloud-bedtime-stories",
  "/bedtime-stories-by-age",
  "/cozy-bedtime-stories",
  "/lullaby-bedtime-stories",
  "/bedtime-stories-app",
  "/picture-books-for-kids",
  "/stories",
  "/collections",
  "/faq",
  "/guides",
  "/privacy",
  "/privacy-choices",
  "/terms",
  "/support",
];

/**
 * Priority + recrawl cadence per route (adopted from MissingWitness's sitemap
 * gradient). Next's MetadataRoute omits these by default, so the sitemap was
 * flat before; a gradient tells engines what matters most. Home is king, hubs
 * next, individual stories/collections/guides mid, legal/support low.
 */
type Freq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
const ROUTE_META: Record<string, { priority: number; changeFrequency: Freq }> = {
  "": { priority: 1.0, changeFrequency: "weekly" },
  "/bedtime-stories": { priority: 0.9, changeFrequency: "weekly" },
  "/toddler-bedtime-stories": { priority: 0.9, changeFrequency: "weekly" },
  "/preschool-bedtime-stories": { priority: 0.9, changeFrequency: "weekly" },
  "/read-aloud-bedtime-stories": { priority: 0.9, changeFrequency: "weekly" },
  "/bedtime-stories-by-age": { priority: 0.9, changeFrequency: "weekly" },
  "/cozy-bedtime-stories": { priority: 0.9, changeFrequency: "weekly" },
  "/lullaby-bedtime-stories": { priority: 0.9, changeFrequency: "weekly" },
  "/bedtime-stories-app": { priority: 0.9, changeFrequency: "weekly" },
  "/picture-books-for-kids": { priority: 0.9, changeFrequency: "weekly" },
  "/stories": { priority: 0.9, changeFrequency: "monthly" },
  "/collections": { priority: 0.9, changeFrequency: "monthly" },
  "/faq": { priority: 0.7, changeFrequency: "monthly" },
  "/guides": { priority: 0.85, changeFrequency: "monthly" },
  "/privacy": { priority: 0.3, changeFrequency: "yearly" },
  "/privacy-choices": { priority: 0.3, changeFrequency: "yearly" },
  "/terms": { priority: 0.3, changeFrequency: "yearly" },
  "/support": { priority: 0.4, changeFrequency: "yearly" },
};

/** `trailingSlash: true` in next.config means every canonical ends in "/" —
 * the sitemap has to agree, or every URL in it points at a redirect. */
function url(route: string) {
  return `${SITE.domain}${route}/`.replace(/\/+$/, "/");
}

/**
 * `lastmod` is only worth sending while it stays accurate — Google leans on it
 * to decide what to recrawl, and stops trusting it once a site stamps every
 * URL on every deploy (which is exactly what this file used to do). Dates come
 * from git via scripts/gen-content-dates.mjs; when a date isn't known the
 * entry ships without `lastmod` rather than inventing one.
 */
function entry(
  route: string,
  date: string,
  opts?: { images?: string[]; priority?: number; changeFrequency?: Freq },
): MetadataRoute.Sitemap[number] {
  const base = date
    ? { url: url(route), lastModified: new Date(`${date}T00:00:00Z`) }
    : { url: url(route) };
  // Image sitemap entries — cover art is the site's strongest visual asset, and
  // indexing it in Google Images is a real discovery channel for a story app.
  // Only attached to pages that actually show that artwork.
  return {
    ...base,
    ...(opts?.priority != null ? { priority: opts.priority } : {}),
    ...(opts?.changeFrequency ? { changeFrequency: opts.changeFrequency } : {}),
    ...(opts?.images?.length ? { images: opts.images } : {}),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...ROUTES.map((route) =>
      entry(route, ROUTE_DATES[route] ?? "", ROUTE_META[route]),
    ),
    ...STORIES.map((s) =>
      entry(
        `/stories/${s.slug}`,
        STORY_DATE,
        {
          images: [storyCoverUrl(SITE.domain, s.file)],
          priority: 0.8,
          changeFrequency: "monthly",
        },
      ),
    ),
    ...COLLECTIONS.map((c) => {
      // A collection page is a grid of covers; surface the first few so the
      // image sitemap reflects what's actually on the page without bloating it.
      const covers = storiesByTag(c.tag)
        .slice(0, 4)
        .map((s) => storyCoverUrl(SITE.domain, s.file));
      return entry(`/collections/${c.slug}`, COLLECTION_DATE, {
        images: covers,
        priority: 0.8,
        changeFrequency: "monthly",
      });
    }),
    // Guides carry a hand-maintained edit date in their own data.
    ...GUIDES.map((g) =>
      entry(`/guides/${g.slug}`, g.updated, {
        priority: 0.85,
        changeFrequency: "monthly",
      }),
    ),
  ];
}
