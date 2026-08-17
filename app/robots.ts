import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Required for `output: "export"` (Next treats MetadataRoute as dynamic otherwise).
export const dynamic = "force-static";

// Deliberately permissive for every user-agent, including AI/LLM crawlers
// (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, CCBot, etc.) — we want
// this content discoverable and citable, not just indexed for search.
// We list the major AI crawlers explicitly (in addition to the catch-all `*`)
// so the intent is unambiguous even for bots that special-case their own UA.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "GoogleOther",
  "PerplexityBot",
  "CCBot",
  "Bytespider",
  "Applebot-Extended",
  "OmgiliBot",
  "FacebookBot",
];

// Traditional search engines we explicitly welcome, named so the intent is
// unmistakable (adopted from MissingWitness's robots.txt, which spells out the
// Chinese crawlers it wants). MoonPage targets an English/Australian market,
// but there is no reason to block Baidu/360/Sogou if they come, and naming
// Mediapartners-Google + AdsBot-Google keeps AdSense (if later enabled) clean.
const SEARCH_CRAWLERS = [
  "Baiduspider",
  "360Spider",
  "Sogou web spider",
  "Bytespider",
  "Mediapartners-Google",
  "AdsBot-Google",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/get" },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: "/get",
      })),
      ...SEARCH_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: "/get",
      })),
    ],
    sitemap: `${SITE.domain}/sitemap.xml`,
  };
}
