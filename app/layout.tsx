import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Fredoka, Nunito } from "next/font/google";
import Script from "next/script";
import { StickyCta } from "@/components/StickyCta";
import { APP_JSONLD_ID } from "@/lib/reviews";
import { OG_IMAGE, SITE } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#d4c8b0",
  colorScheme: "light",
};

/**
 * Search-engine verification tokens, read from the build environment. Kept
 * module-level so the intent is obvious at the top of the file rather than
 * buried in JSX, and so a missing token is a visible empty string rather than
 * a silently-shipped placeholder.
 */
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "";
const BING_VERIFICATION = process.env.NEXT_PUBLIC_BING_VERIFICATION ?? "";
const YANDEX_VERIFICATION = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION ?? "";
const PINTEREST_VERIFICATION =
  process.env.NEXT_PUBLIC_PINTEREST_VERIFICATION ?? "";

if (!GSC_VERIFICATION) {
  console.warn(
    "[seo] NEXT_PUBLIC_GSC_VERIFICATION is unset — no google-site-verification " +
      "tag will be emitted. Verify the property (tag or DNS TXT) or Search " +
      "Console stays blind to impressions, position, and CTR.",
  );
}

/** Formal literary serif for section headlines. */
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

/** Rounded brand wordmark — used only for the “MoonPage” name + logo lockup. */
const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: SITE.title,
    /**
     * No brand suffix. This used to be `%s · MoonPage`, which added 11
     * characters to every title and pushed 38 of the site's 153 pages past
     * Google's ~60-character cut — always chopping the tail, which is where
     * the hook lives ("…(Ages 2–7)", "…(The Verdict)"). Google prints the
     * site name above the title anyway, sourced from the WebSite/Organization
     * JSON-LD below, so the suffix was spending the most valuable pixels on
     * the page on a word the searcher already knows.
     *
     * Pages that are short enough to afford branding add it themselves.
     */
    template: `%s`,
  },
  description: SITE.description,
  // Lets the site be installed as a web app and pins the cream theme through
  // the splash/standalone view — small PWA signal, and it keeps the
  // apple-touch-icon we already ship working as a homescreen icon.
  manifest: "/manifest.webmanifest",
  applicationName: SITE.name,
  appleWebApp: {
    capable: true,
    title: SITE.name,
    statusBarStyle: "default",
  },
  formatDetection: { telephone: false },
  // Stable favicon URLs — Google won't show a SERP icon if the href keeps
  // changing (Next's hashed app/icon.png URLs fail that guideline). Both
  // entries are a multiple of 48px square, which is what Google's favicon
  // crawler requires, and the declared `sizes` match the real pixel sizes —
  // the old 512x512 claim pointed at a 1024px, 1.5 MB file, which the crawler
  // is free to skip (and which every visitor was downloading for a 56px logo).
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  keywords: [
    "moonpage",
    "bedtime stories for kids",
    "bedtime stories ages 2+",
    "cozy bedtime stories",
    "kids storybook app",
    "bedtime stories app",
    "read aloud picture books",
    "toddler bedtime stories",
    "preschool bedtime stories",
    "lullaby bedtime tales",
    "children narration app",
    "parent child bedtime routine",
    "children's picture storybooks",
    "sleepy stories for kids",
  ],
  // Trailing slash matches the sitemap (output: "export" + trailingSlash:true).
  // `languages` mirrors `pageMetadata()`: the homepage is the one page that
  // doesn't go through that helper, so without this it was the only indexable
  // page on the site emitting no hreflang at all — including no `x-default`,
  // which is the declaration that matters most on a single-language site.
  alternates: {
    canonical: `${SITE.domain}/`,
    languages: { en: `${SITE.domain}/`, "x-default": `${SITE.domain}/` },
  },
  // Lets Google use a large cover thumbnail next to results and in Discover —
  // the default for a new site is a small one, and cover art is our best asset.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.domain,
    siteName: SITE.name,
    locale: "en_US",
    images: [OG_IMAGE],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [OG_IMAGE],
  },
};

// Structured data for search engines and AI/LLM crawlers — plain facts only,
// deliberately no aggregateRating (MoonPage is pre-launch with no real
// reviews yet; see components/home/Trust.tsx for the same principle).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.operator,
  url: SITE.domain,
  logo: {
    "@type": "ImageObject",
    url: `${SITE.domain}/icon.png`,
    width: 1024,
    height: 1024,
  },
  sameAs: [
    SITE.instagramUrl,
    SITE.tiktokUrl,
    // The store listing is the strongest third-party confirmation that
    // "MoonPage" is one real entity rather than a word several sites use —
    // it ties the site, the app id, and the brand into one knowledge-graph
    // node. The Play listing is only added once it actually exists, so this
    // never points at a 404.
    SITE.appStoreUrl,
    ...(SITE.androidLive ? [SITE.playStoreUrl] : []),
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.contactEmail,
    contactType: "customer support",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  // Google prints a site name above every result. Spelling the variants out
  // here is what lets "moonpage", "moonpage app", and the App Store's own
  // longer listing name resolve to this same entity.
  alternateName: ["MoonPage App", "MoonPage: Cozy Bedtime Stories"],
  url: SITE.domain,
  description:
    "Original cozy bedtime stories for kids ages 2+ — a phone and tablet storybook app with read-aloud narration, picture books, no ads, and no login required.",
  inLanguage: "en",
  publisher: { "@type": "Organization", name: SITE.operator },
  // Sitelinks search box — when Google/Bing show it under our result, the
  // extra row pushes competitors down and lifts our click-through. The target
  // must resolve to a real, working page, so /search is a genuine client-side
  // search over the full catalog (see app/search/page.tsx).
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.domain}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  // Declared by @id so app/page.tsx can merge the site-wide rating into this
  // same entity — on the only page where those reviews are actually visible.
  "@id": APP_JSONLD_ID,
  name: SITE.name,
  url: SITE.domain,
  image: `${SITE.domain}/icon.png`,
  // Single source of truth with SITE.androidLive. Claiming a platform that
  // has no public listing is a factual error in structured data — the one
  // place Google can check a claim against its own store index.
  operatingSystem: SITE.androidLive ? "iOS, Android" : "iOS",
  applicationCategory: "EducationalApplication",
  description:
    "A bedtime stories app for kids ages 2+ — original illustrated picture storybooks, cozy and lullaby-style sleepy tales. Hear them by a professional narrator or in your own recorded voice.",
  publisher: { "@type": "Organization", name: SITE.operator },
  installUrl: SITE.appStoreUrl,
  sameAs: [SITE.appStoreUrl],
  // Honest pricing in one currency (SITE.priceCurrency — see the consistency
  // note there). The free tier is a real, stated offer; the paid subscription
  // is shown in the visible Pricing section, so we don't invent a price here.
  offers: [
    {
      "@type": "Offer",
      category: "free",
      price: "0",
      priceCurrency: SITE.priceCurrency,
      description:
        "Free to start — a sample of original bedtime stories, narrated, no account needed.",
    },
  ],
  // NOTE: no `aggregateRating` here on purpose. This node is emitted on every
  // page, and Google requires a marked-up rating to be visible on the page that
  // carries the markup. The site-wide rating is merged into this entity by
  // app/page.tsx, which is where the visible reviews render. We never borrow
  // the App Store's ratings either: Google's policy forbids aggregating ratings
  // from other websites, and a manual action would cost far more than the stars
  // earn. See lib/reviews.ts for the whole rationale.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${fredoka.variable} ${nunito.variable} h-full antialiased`}
    >
      <head>
        {/*
          Apple Smart App Banner — shows a native "Get" banner in mobile Safari
          pointing straight at the App Store, no JS required.
        */}
        <meta name="apple-itunes-app" content="app-id=6788652725" />
        {/* RSS feed — lets feed readers and some engines (e.g. Bing) discover
            new stories/guides/collections as a stream, not just per-page. */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="MoonPage — bedtime stories & guides"
          href="/feed.xml"
        />
        {/*
          Search-engine / webmaster verification.

          These tags were checked in as literal placeholders
          (`content="REPLACE_WITH_GSC_CODE"`), which means Search Console was
          never actually verified from this file — and an unverified property
          is a blind property: no impressions, no average position, no CTR.
          Every CTR idea in the growth plan is unmeasurable until this is
          filled in.

          They now read from the environment so the value is a build setting
          rather than a code edit, and an unset value emits NO tag at all
          (a wrong token is worse than none — it looks configured).

            NEXT_PUBLIC_GSC_VERIFICATION=...      # google-search-console → Settings → Ownership verification
            NEXT_PUBLIC_BING_VERIFICATION=...     # bing-webmaster-tools → Add site (also feeds Yahoo)
            NEXT_PUBLIC_YANDEX_VERIFICATION=...   # yandex-webmaster (pairs with IndexNow)
            NEXT_PUBLIC_PINTEREST_VERIFICATION=.. # pinterest-business (real parenting/DIY traffic)

          Or verify by DNS TXT record instead — then these can stay unset
          forever. Whichever route, the property has to be claimed before the
          sitemap can be submitted and the striking-distance report (queries
          ranking 4–20) can be pulled.
        */}
        {GSC_VERIFICATION && (
          <meta name="google-site-verification" content={GSC_VERIFICATION} />
        )}
        {BING_VERIFICATION && (
          <meta name="msvalidate.01" content={BING_VERIFICATION} />
        )}
        {YANDEX_VERIFICATION && (
          <meta name="yandex-verification" content={YANDEX_VERIFICATION} />
        )}
        {PINTEREST_VERIFICATION && (
          <meta name="p:domain_verify" content={PINTEREST_VERIFICATION} />
        )}
        {/* Warm up the analytics connection early; a faster first response
            helps Core Web Vitals, which feed ranking. */}
        <link
          rel="preconnect"
          href="https://cloud.umami.is"
          crossOrigin="anonymous"
        />
        {/* Umami Cloud Analytics — website-id is public by design (same as GA measurement ID).
            The tracker is injected by the inline bootstrap below instead of being a plain
            <Script src>, so browser automation can be dropped before it sends anything.

            Why only these checks: Umami already filters bots server-side with `isbot`, and
            the tracker itself is JavaScript — so a crawler that never executes JS can never
            fire an event. That rules out GPTBot / ClaudeBot / PerplexityBot, uptime monitors
            (UptimeRobot, Pingdom) and link-preview fetchers (Twitterbot,
            facebookexternalhit) entirely; listing them here would be dead code. What is
            left, and what this gate targets:
              1. Browser automation — `npm run audit:cta` drives Playwright over all 170
                 built pages x 5 viewport widths on http://127.0.0.1. Playwright advertises
                 itself through `navigator.webdriver`, which no server-side UA filter can see.
              2. JS-rendering crawlers — Googlebot and Applebot render pages in a real
                 browser, so they do reach the tracker (isbot drops them, this saves the trip).

            The gate FAILS OPEN: if anything throws, the tracker loads. A bug here must never
            be able to silently stop collection of real visits — that is exactly the failure
            mode this site was already bitten by once. */}
        <Script id="umami-loader" strategy="lazyOnload">
          {`(function () {
  var ID = "8e0341da-91c9-429c-9804-0af71e3cf155";
  var LOCAL_HOST = /^(localhost|127\\.0\\.0\\.1|0\\.0\\.0\\.0|\\[::1\\]|::1)$/i;
  var NON_PROD_HOST = /\\.local$|\\.localhost$|\\.github\\.io$/i;
  var BOT_UA = /bot[\\/\\s;)]|bot$|crawl|spider|slurp|headless|lighthouse|pagespeed|puppet|playwright|selenium|phantomjs|gtmetrix/i;
  function inject() {
    var s = document.createElement("script");
    s.defer = true;
    s.src = "https://cloud.umami.is/script.js";
    s.setAttribute("data-website-id", ID);
    document.head.appendChild(s);
  }
  var skip;
  try {
    skip =
      navigator.webdriver === true ||
      location.protocol === "file:" ||
      LOCAL_HOST.test(location.hostname) ||
      NON_PROD_HOST.test(location.hostname) ||
      BOT_UA.test(navigator.userAgent || "");
  } catch (e) {
    skip = false;
  }
  if (!skip) inject();
})();`}
        </Script>
        {/* Microsoft Clarity — heatmaps & session recordings (puzzle/id is
            public by design, same as GA measurement ID). Mounted via
            next/script so it loads after hydration, same as Umami above. */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "yaucjablh2");`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-cream text-ink">
        {children}
        <StickyCta />
      </body>
    </html>
  );
}
