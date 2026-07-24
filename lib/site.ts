/**
 * Central site config. Placeholders are marked TODO and mirror the same
 * placeholder pattern already used in moonpage-app/constants/links.ts.
 */

export const SITE = {
  name: "MoonPage",
  title: "MoonPage: Bedtime Stories",
  subtitle: "Kids Books & Read Aloud",
  // TODO: replace once a domain is purchased (see plan §7 — candidates:
  // moonpage.app, getmoonpage.com, moonpageapp.com). Used for metadataBase/OG/sitemap.
  domain: "https://moonpage.app",
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

export const FREE_BOOKS = 2;
export const SHARE_UNLOCK_BOOKS = 2; // books 3–4

export const ASO_KEYWORDS = [
  "bedtime stories",
  "read aloud",
  "sleepy time",
  "toddlers",
  "preschool",
  "story books",
  "narration",
  "bedtime reading",
] as const;
