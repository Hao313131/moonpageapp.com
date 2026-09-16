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

// `/get` is the paid-traffic landing page (it carries its own
// `robots: { index: false }` — this is belt and braces, because a noindex tag
// only works if a crawler is allowed to fetch the page and read it).
//
// `/404` is not a real page: `app/not-found.tsx` is exported twice by the
// static build, once as `404.html` (what GitHub Pages serves for a missing
// path) and once as `404/index.html`, which IS a fetchable URL that would
// otherwise sit in the index as a near-duplicate of the homepage's chrome.
const DISALLOW = ["/get", "/404"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: DISALLOW,
      })),
      ...SEARCH_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: DISALLOW,
      })),
    ],
    sitemap: `${SITE.domain}/sitemap.xml`,
  };
}
