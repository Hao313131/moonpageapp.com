import type { Metadata } from "next";
import { Fraunces, Fredoka, Nunito } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

/** Soft optical serif for section headlines. */
const fraunces = Fraunces({
  variable: "--font-fraunces",
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
  description:
    "Hand-picked original picture books to gently ease little ones to sleep — with professional narration, original music, or your very own voice.",
  openGraph: {
    title: SITE.title,
    description: SITE.subtitle,
    siteName: SITE.name,
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.subtitle,
    images: ["/og-image.png"],
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
  logo: `${SITE.domain}/icon.png`,
  sameAs: [SITE.instagramUrl],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.domain,
  publisher: { "@type": "Organization", name: SITE.operator },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: SITE.name,
  operatingSystem: "iOS, Android",
  applicationCategory: "EducationalApplication",
  description:
    "Original, illustrated bedtime stories for toddlers and preschoolers — professional narration, device read-aloud, or your own recorded voice.",
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
      className={`${fraunces.variable} ${fredoka.variable} ${nunito.variable} h-full antialiased`}
    >
      <head>
        {/*
          Apple Smart App Banner — shows a native "Get" banner in mobile Safari
          pointing straight at the App Store, no JS required.
          TODO: replace the placeholder app id once iOS review approves
          (same id0000000000 placeholder used in moonpage-app/constants/links.ts).
        */}
        <meta name="apple-itunes-app" content="app-id=0000000000" />
        {/* Cloudflare Web Analytics — free, cookieless, works on any host.
            TODO: sign up at dash.cloudflare.com → Web Analytics, paste the
            generated beacon token below (works without moving DNS to Cloudflare). */}
        {/* <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "REPLACE_ME"}'></script> */}
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
      </body>
    </html>
  );
}
