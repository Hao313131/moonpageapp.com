import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Deliberately permissive for every user-agent, including AI/LLM crawlers
// (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, CCBot, etc.) — we want
// this content discoverable and citable, not just indexed for search.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/get" }],
    sitemap: `${SITE.domain}/sitemap.xml`,
  };
}
