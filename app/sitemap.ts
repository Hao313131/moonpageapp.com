import type { MetadataRoute } from "next";
import { COLLECTIONS } from "@/lib/collections";
import { GUIDES } from "@/lib/guides";
import { SITE } from "@/lib/site";
import { STORIES } from "@/lib/stories";

// Required for `output: "export"` (Next treats MetadataRoute as dynamic otherwise).
export const dynamic = "force-static";

// /get is deliberately excluded — it's an ad-traffic landing page (see its
// own `robots: { index: false }`), not something we want ranking organically.
const ROUTES = [
  "",
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...ROUTES.map((route) => ({
      url: url(route),
      lastModified: now,
    })),
    ...STORIES.map((s) => ({
      url: url(`/stories/${s.slug}`),
      lastModified: now,
    })),
    ...COLLECTIONS.map((c) => ({
      url: url(`/collections/${c.slug}`),
      lastModified: now,
    })),
    ...GUIDES.map((g) => ({
      url: url(`/guides/${g.slug}`),
      // Real edit date, not build time — guides are evergreen and shouldn't
      // claim to have changed every deploy.
      lastModified: new Date(`${g.updated}T00:00:00Z`),
    })),
  ];
}
