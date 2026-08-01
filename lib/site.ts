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
   * The homepage meta/OG description. A full sentence, not a fragment: this
   * is the snippet under the title in search results and the caption on a
   * shared link, so it has to sell on its own.
   */
  description:
    "MoonPage is a cozy bedtime stories app for kids, toddlers, preschoolers, and parents — original illustrated picture storybooks, lullaby-style sleepy tales, and read-aloud narration. Trusted by thousands of moms for calmer bedtime routines and cozy stories. Hear stories by a professional narrator or in your own recorded voice. No ads, no login, works offline — free to start tonight.",
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
  // TODO: create a Buttondown account (buttondown.com) and replace with the
  // real username — see README for why Buttondown and how this wires up.
  buttondownUsername: "moonpage",
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
  image = "/og-image.png",
}: {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  /** Absolute path or full URL for OG/Twitter image (defaults to site OG). */
  image?: string;
}) {
  const url = `${SITE.domain}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      images: [image],
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [image],
    },
  };
}

/** Breadcrumb + optional FAQPage JSON-LD for SEO hub pages. */
export function hubJsonLd({
  path,
  name,
  faqs,
}: {
  path: string;
  name: string;
  faqs?: { q: string; a: string }[];
}) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `${SITE.domain}${path}`,
      },
    ],
  };
  if (!faqs?.length) return [breadcrumb];
  return [
    breadcrumb,
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
}
