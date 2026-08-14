import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Fredoka, Nunito } from "next/font/google";
import Script from "next/script";
import { StickyCta } from "@/components/StickyCta";
import { OG_IMAGE, SITE } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#d4c8b0",
};

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
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
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
  alternates: { canonical: SITE.domain },
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
  sameAs: [SITE.instagramUrl],
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
  url: SITE.domain,
  description:
    "Original cozy bedtime stories for kids ages 2+ — a phone and tablet storybook app trusted by thousands of moms. Read-aloud narration, picture books, no ads, no login required.",
  inLanguage: "en",
  publisher: { "@type": "Organization", name: SITE.operator },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: SITE.name,
  url: SITE.domain,
  image: `${SITE.domain}/icon.png`,
  operatingSystem: "iOS, Android",
  applicationCategory: "EducationalApplication",
  description:
    "A bedtime stories app for kids ages 2+ — original illustrated picture storybooks, cozy and lullaby-style sleepy tales, trusted by thousands of moms. Hear them by a professional narrator or in your own recorded voice.",
  publisher: { "@type": "Organization", name: SITE.operator },
  offers: { "@type": "Offer", category: "subscription" },
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
        {/* Umami Cloud Analytics — website-id is public by design (same as GA measurement ID). */}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="ad139af4-45c9-424c-8098-038e82ef66d7"
          strategy="afterInteractive"
        />
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
