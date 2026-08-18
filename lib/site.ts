import { HUB_FAQS } from "./hubFaqs";

/**
 * Central site config. Placeholders are marked TODO and mirror the same
 * placeholder pattern already used in moonpage-app/constants/links.ts.
 */

export const SITE = {
  name: "MoonPage",
  /**
   * Homepage <title>. Brand-first and short enough to survive Google's ~60
   * char truncation intact — the old version trailed the whole trust line and
   * got cut off mid-sentence in results.
   */
  title: "MoonPage: Cozy Bedtime Stories App for Kids",
  /** Short social-proof line used in the hero and near download CTAs. */
  trustLine:
    "Trusted by thousands of moms for calmer bedtime routines and cozy stories.",
  /** App Store subtitle (30 char limit). Deliberately shares no words with
   * `title` above — repeated terms buy nothing in Apple's search index. */
  subtitle: "Sleepy Picture Storybooks",
  /**
   * The homepage meta/OG description — the snippet under the title in search
   * results and the caption on a shared link, so it has to sell on its own.
   *
   * Kept under ~155 characters on purpose: Google truncates around there, and
   * the previous 384-character version was being cut off mid-sentence, which
   * spent the whole snippet on keywords and none of it on a reason to tap.
   * The long-tail terms it used to carry (toddlers, preschoolers, lullaby,
   * picture storybooks) all live on their own hub pages, which is where they
   * actually rank.
   */
  description:
    "Original illustrated bedtime stories for kids ages 2+, read aloud by a narrator or in your own recorded voice. No ads, no login — free to start tonight.",
  // Used for metadataBase/OG/sitemap. Point DNS at GitHub Pages
  // (Settings → Pages → Custom domain).
  domain: "https://moonpageapp.com",
  contactEmail: "moonpageapp@gmail.com",
  instagramUrl: "https://www.instagram.com/moonpageapp/",
  instagramHandle: "@moonpageapp",
  tiktokUrl: "https://www.tiktok.com/@moonpageapp",
  tiktokHandle: "@moonpageapp",
  operator: "EchoRealm",
  bundleId: "com.echorealmmedia.moonpage",
  /**
   * Single source of truth for structured-data pricing. MissingWitness shipped
   * a real bug — its homepage JSON-LD claimed AUD while its case pages claimed
   * USD, so Google saw two currencies for one product. We keep the currency in
   * exactly one place and read it everywhere (appJsonLd, future Product/Offer
   * blocks) so that drift can never happen.
   */
  priceCurrency: "AUD",
  /** MoonPage is free to start — the structured-data Offer states this honestly. */
  freeTier: true,
  // TODO: create a Buttondown account (buttondown.com) and replace with the
  // real username — see README for why Buttondown and how this wires up.
  buttondownUsername: "moonpage",
} as const;

/**
 * The shared-link card. Facebook, X, LinkedIn, WhatsApp and iMessage all
 * render `summary_large_image` at 1.91:1 and center-crop anything else, so
 * this must stay 1200x630 — regenerate with `npm run make:og`.
 *
 * Declaring width/height matters: without them a scraper has to fetch and
 * measure the file before it will commit to the large card, and several fall
 * back to the small thumbnail rather than wait.
 */
export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "MoonPage — cozy bedtime stories for kids ages 2+, read aloud by a narrator or in your own voice.",
} as const;

const APP_STORE_ID = "6788652725";

// TODO: fill in once created in App Store Connect → Analytics → Acquisition →
// Campaigns. Until then we omit `pt` so the link stays a clean global App Store URL.
const ASC_PROVIDER_TOKEN = "";

/**
 * Global App Store link (no country code). Apple geo-redirects to the visitor's
 * storefront from the stable app id. Pass a short slug per placement, e.g.
 * "website_hero", "website_footer", "get_lp_hero".
 */
export function appStoreLink(campaign: string): string {
  const params = new URLSearchParams({
    ct: campaign,
    mt: "8",
  });
  if (ASC_PROVIDER_TOKEN) {
    params.set("pt", ASC_PROVIDER_TOKEN);
  }
  return `https://apps.apple.com/app/id${APP_STORE_ID}?${params.toString()}`;
}

/**
 * Google Play's equivalent of a campaign link — the `referrer` param is read
 * by the Play Install Referrer API and shows up in Play Console's
 * acquisition reports, same idea as Apple's pt/ct above.
 */
export function playStoreLink(campaign: string): string {
  const referrer = `utm_source=website&utm_medium=cta&utm_campaign=${campaign}`;
  const params = new URLSearchParams({
    id: SITE.bundleId,
    referrer,
  });
  return `https://play.google.com/store/apps/details?${params.toString()}`;
}

/**
 * Reference keyword list for this app category — not injected into meta tags
 * (Google has ignored the `keywords` meta tag for years), but used to keep
 * visible page copy — FAQ, headings, descriptions — grounded in the terms
 * parents actually search for. Grouped by intent so new copy can be checked
 * against gaps rather than guessed at.
 */
export const ASO_KEYWORDS = {
  category: [
    "bedtime stories app",
    "kids story app",
    "children's book app",
    "read aloud app",
    "picture book app",
    "storybook app for kids",
  ],
  audience: [
    "toddlers",
    "preschool",
    "preschoolers",
    "kids ages 2+",
    "2+",
    "baby",
    "babies",
    "children",
    "parents",
  ],
  intent: [
    "moonpage",
    "bedtime stories for toddlers",
    "bedtime stories for preschoolers",
    "bedtime stories for kids",
    "children's bedtime stories",
    "kids sleepy stories",
    "cozy bedtime tales",
    "cozy bedtime stories",
    "lullaby stories for kids",
    "lullaby bedtime stories",
    "picture storybooks for children",
    "read aloud picture books",
    "sleepy time",
    "bedtime reading",
    "wind down routine",
    "screen time",
    "story books",
    "kids storybooks",
    "children narration",
    "parent bedtime stories",
  ],
  feature: [
    "narration",
    "read aloud",
    "record your own voice",
    "offline stories",
    "no ads kids app",
    "lullaby",
    "cozy tales",
  ],
  platform: [
    "phone & tablet app",
    "bedtime stories app for phone",
    "kids story app for tablet",
    "iPad app",
    "iPhone app",
    "Android app",
  ],
} as const;

/**
 * Build a comprehensive, content-grounded keyword list for the `keywords` meta
 * tag. Every page gets the brand + category + audience + intent baseline so the
 * tag is never empty (a missing/threadbare keywords meta is the classic "5/10"
 * failure), plus any page-specific terms for relevance. Deduplicated and capped
 * so we never cross into stuffing (which trips a mild spam signal). Google
 * ignores the tag for ranking, but a complete, relevant one is what a "10/10"
 * keywords-meta audit expects, and the same terms double as a checklist for the
 * visible copy.
 */
export function pageKeywords(extra: string[] = []): string[] {
  const base = [
    "moonpage",
    "bedtime stories for kids",
    "bedtime stories app",
    "kids storybook app",
    "cozy bedtime stories",
    "read aloud picture books",
    "toddler bedtime stories",
    "preschool bedtime stories",
    "lullaby bedtime tales",
    "children's picture storybooks",
    "parent child bedtime routine",
    "children narration app",
  ];
  const merged = [...base, ...extra].map((k) => k.toLowerCase().trim());
  return Array.from(new Set(merged)).slice(0, 18);
}

/**
 * Force a trailing slash on an internal content URL. The site is built with
 * `trailingSlash: true`, so every real page lives at `/foo/` and the canonical
 * tag points there. Next.js auto-normalizes the <head> canonical/og:url for us,
 * but JSON-LD strings are emitted verbatim — a no-slash URL in structured data
 * makes Googlebot 301-redirect to the real `/foo/` page, which Search Console
 * logs as "Page with redirect" + "Alternate page with proper canonical". Keep
 * these in lockstep with the canonical.
 *
 * Assets (anything with a file extension) and already-slashed URLs pass through
 * untouched.
 */
function withSlash(url: string): string {
  if (url.endsWith("/")) return url;
  // Strip the scheme+host so we only judge the PATH. A bare domain
  // (https://moonpageapp.com) has an empty path -> add the slash. A real asset
  // is a path segment ending in .ext (e.g. /icon.png, /feed.xml,
  // /covers/x.webp) -> leave it alone. This avoids the trap of treating the TLD
  // dot (moonpageapp.com) as a file extension.
  const path = url.replace(/^https?:\/\/[^/]+/, "");
  if (path === "") return url + "/";
  if (/\.[a-z0-9]+$/i.test(path)) return url;
  return url + "/";
}

/**
 * Shared per-page metadata: sets title/description AND a matching canonical
 * URL + full OpenGraph/Twitter block. Next.js metadata merging is shallow —
 * a page-level `openGraph: {title}` would silently drop the parent layout's
 * `images`/`siteName`/`type`, so every field is repeated in full here rather
 * than partially overridden.
 */
export function pageMetadata({
  path,
  title,
  description,
  keywords,
  image,
  /**
   * OG object type. Content pages (stories, guides) are `article` so social
   * graphs show publish/modified times; hub/landing pages stay `website`.
   */
  type = "website",
  /** Article timing for `og:type: article` — drives richer share cards. */
  article,
}: {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  /**
   * Custom Open Graph / Twitter card image. Pass the full object with
   * `width`/`height`/`alt` so social scrapers commit to the large-card format
   * instead of waiting to measure the file (and often falling back to a small
   * thumbnail). Story covers are 800×588 — declare those exact numbers.
   * A bare URL string is accepted for backwards compatibility but loses the
   * dimensions, so prefer the object form for any custom image.
   */
  image?:
    | string
    | { url: string; width: number; height: number; alt: string };
  type?: "website" | "article";
  article?: { publishedTime?: string; modifiedTime?: string };
}) {
  const url = `${SITE.domain}${path}`;
  const images = image ? [image] : [OG_IMAGE];
  return {
    title,
    description,
    // Guarantee a complete, relevant keywords meta on EVERY page: baseline
    // brand/category/audience/intent terms merged with any page-specific ones.
    keywords: pageKeywords(keywords ?? []),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      images,
      type,
      // Next reads publish/modified times as TOP-LEVEL OpenGraph fields
      // (it serializes them to og:article:published_time / og:article:modified_time),
      // NOT nested under an `article` sub-object — nesting silently emits nothing.
      ...(article?.publishedTime ? { publishedTime: article.publishedTime } : {}),
      ...(article?.modifiedTime ? { modifiedTime: article.modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images,
    },
  };
}

/** Breadcrumb + optional FAQPage + optional ItemList JSON-LD for SEO hub pages. */
export function hubJsonLd({
  path,
  name,
  faqs,
  items,
}: {
  path: string;
  name: string;
  faqs?: { q: string; a: string }[];
  /**
   * Visible on-page links (collections, sibling hubs, related guides). Emitted
   * as an ItemList so the hub reads to crawlers as a real directory of related
   * pages, not just a pile of <a> tags — this is what earns collection-style
   * rich results for the hub's target keywords. Only pass links that are
   * actually rendered on the page.
   */
  items?: { name: string; url: string }[];
}) {
  // Hubs don't pass `faqs` inline; pull the per-hub FAQ from hubFaqs.ts so the
  // FAQPage rich result is emitted without editing every hub page. Pages that
  // do pass `faqs` keep their explicit set.
  const resolvedFaqs = faqs ?? HUB_FAQS[path];
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: withSlash(SITE.domain) },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: withSlash(`${SITE.domain}${path}`),
      },
    ],
  };
  const blocks: object[] = [breadcrumb];
  if (resolvedFaqs?.length) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: resolvedFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  if (items?.length) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${name} — related pages`,
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        url: withSlash(it.url),
      })),
    });
  }
  return blocks;
}
