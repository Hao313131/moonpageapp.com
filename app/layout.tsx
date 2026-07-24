import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} h-full antialiased`}
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
      </head>
      <body className="flex min-h-full flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
