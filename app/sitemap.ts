import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// /get is deliberately excluded — it's an ad-traffic landing page (see its
// own `robots: { index: false }`), not something we want ranking organically.
const ROUTES = ["", "/privacy", "/privacy-choices", "/terms", "/support"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE.domain}${route}`,
    lastModified: new Date(),
  }));
}
