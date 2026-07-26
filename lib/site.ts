/**
 * Central site config. Placeholders are marked TODO and mirror the same
 * placeholder pattern already used in moonpage-app/constants/links.ts.
 */

export const SITE = {
  name: "MoonPage",
  title: "MoonPage: Bedtime Stories",
  subtitle: "Kids Books & Read Aloud",
  // Used for metadataBase/OG/sitemap. Point DNS at GitHub Pages
  // (Settings → Pages → Custom domain).
  domain: "https://moonpageapp.com",
  contactEmail: "moonpageapp@gmail.com",
  instagramUrl: "https://www.instagram.com/moonpageapp/",
  instagramHandle: "@moonpageapp",
  operator: "EchoRealm",
  bundleId: "com.echorealmmedia.moonpage",
  // TODO: create a Buttondown account (buttondown.com) and replace with the
  // real username — see README for why Buttondown and how this wires up.
  buttondownUsername: "moonpage",
} as const;

// TODO: replace with the real App Store numeric id once iOS review approves
// (moonpage-app/constants/links.ts has the same id0000000000 placeholder today).
const APP_STORE_ID = "id0000000000";
const APP_STORE_SLUG = "moonpage-bedtime-stories";

// TODO: fill in once created in App Store Connect → Analytics → Acquisition →
// Campaigns. Until then this produces a syntactically valid but non-attributed link.
const ASC_PROVIDER_TOKEN = "REPLACE_WITH_ASC_PROVIDER_TOKEN";

/**
 * App Store Connect Campaign Link — lets ASC attribute downloads to the specific
 * CTA that produced them (see plan §4). Pass a short slug per placement, e.g.
 * "website_hero", "website_footer", "get_lp_hero".
 */
export function appStoreLink(campaign: string): string {
  const params = new URLSearchParams({
    pt: ASC_PROVIDER_TOKEN,
    ct: campaign,
    mt: "8",
  });
  return `https://apps.apple.com/app/${APP_STORE_SLUG}/${APP_STORE_ID}?${params.toString()}`;
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
  category: ["bedtime stories app", "kids story app", "children's book app", "read aloud app"],
  audience: ["toddlers", "preschool", "preschoolers", "kids ages 3 and up", "ages 3+"],
  intent: [
    "bedtime stories for toddlers",
    "sleepy time",
    "bedtime reading",
    "wind down routine",
    "screen time",
    "story books",
  ],
  feature: [
    "narration",
    "read aloud",
    "record your own voice",
    "offline stories",
    "no ads kids app",
  ],
  platform: ["iPad app", "iPhone app", "Android app"],
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
}: {
  path: string;
  title: string;
  description: string;
}) {
  const url = `${SITE.domain}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      images: ["/og-image.png"],
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}
