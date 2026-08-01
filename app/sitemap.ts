import type { MetadataRoute } from "next";
import { COLLECTIONS } from "@/lib/collections";
import {
  COLLECTION_DATE,
  ROUTE_DATES,
  STORY_DATE,
} from "@/lib/content-dates";
import { GUIDES } from "@/lib/guides";
import { SITE } from "@/lib/site";
import { STORIES } from "@/lib/stories";

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
function entry(route: string, date: string): MetadataRoute.Sitemap[number] {
  return date
    ? { url: url(route), lastModified: new Date(`${date}T00:00:00Z`) }
    : { url: url(route) };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...ROUTES.map((route) => entry(route, ROUTE_DATES[route] ?? "")),
    ...STORIES.map((s) => entry(`/stories/${s.slug}`, STORY_DATE)),
    ...COLLECTIONS.map((c) => entry(`/collections/${c.slug}`, COLLECTION_DATE)),
    // Guides carry a hand-maintained edit date in their own data.
    ...GUIDES.map((g) => entry(`/guides/${g.slug}`, g.updated)),
  ];
}
