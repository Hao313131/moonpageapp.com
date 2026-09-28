import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackHomeLink } from "@/components/BackLink";
import { SITE, pageMetadata, withSlash } from "@/lib/site";

/**
 * Press & media kit.
 *
 * Why this page exists: outreach is the one lever left (see
 * docs/关键词排名提升_2026-09-26.md §4.3), and every outreach email needs a
 * destination that a writer can *cite*. Linking a journalist or a roundup
 * author to the homepage asks them to dig; a press page hands them the facts,
 * the boilerplate and the assets in one place. That makes this page a
 * linkable asset rather than a page chasing its own keyword.
 *
 * Every number below is checkable against the live site or the App Store
 * listing. Nothing here is estimated: 45 / 22 / 64 are counted from
 * lib/stories.ts, lib/collections.ts and lib/guides.ts, and the App Store
 * facts come from the public listing for id 6788652725. If a figure changes,
 * change it here — a press page that overstates is worse than no press page,
 * because it is the page a writer will quote.
 */

export const metadata: Metadata = pageMetadata({
  path: "/press",
  title: "Press & Media Kit — MoonPage Facts, Assets, Contact",
  description:
    "Fast facts, ready-to-use boilerplate and brand assets for writing about MoonPage, a bedtime story app for kids ages 2+. Press contact included.",
  keywords: [
    "moonpage press kit",
    "moonpage media kit",
    "moonpage app facts",
    "moonpage brand assets",
    "bedtime story app press",
  ],
});

const INTRO =
  "This page is for journalists, reviewers, roundup authors and anyone else writing about MoonPage. It collects the facts you can quote, the descriptions you can paste, and the images you can use — so you do not have to email us to ask. If something you need is missing, ask and we will add it.";

/** The quotable facts. Each one is verifiable on the live site or the App
 * Store listing; none is an estimate. */
const FACTS: { label: string; value: string }[] = [
  { label: "App name", value: "MoonPage" },
  { label: "Publisher", value: SITE.operator },
  { label: "Released", value: "27 July 2026" },
  { label: "Platform", value: "iPhone and iPad (iOS 16.4 or later). Android is in development." },
  { label: "Category", value: "Books" },
  { label: "Age rating", value: "4+" },
  { label: "Price", value: "Free to start. The full library is unlocked with MoonPage Premium, billed through the App Store." },
  { label: "App Store ID", value: "6788652725" },
  { label: "Bundle ID", value: SITE.bundleId },
  { label: "Language", value: "English" },
  { label: "Stories", value: "45 original illustrated picture books" },
  { label: "Collections", value: "22 themed collections" },
  { label: "Parent guides", value: "64 short guides on sleep, routines and reading aloud" },
  { label: "Ads", value: "None" },
  { label: "Third-party trackers", value: "None" },
  { label: "Account required", value: "No" },
  { label: "Website", value: "moonpageapp.com" },
];

/** Boilerplate in three lengths. Editors paste these verbatim; giving them a
 * ready sentence is the single most useful thing a press page can do. */
const BOILERPLATE: { label: string; note: string; text: string }[] = [
  {
    label: "Short (25 words)",
    note: "For listings, app directories and bylines.",
    text:
      "MoonPage is a bedtime story app for children aged 2 and up, offering original illustrated picture books read aloud by a narrator or in a parent's own recorded voice.",
  },
  {
    label: "Medium (50 words)",
    note: "For roundups and review introductions.",
    text:
      "MoonPage is a bedtime story app for children aged 2 and up. It holds original, illustrated picture books that a child can hear from a professional narrator or in a parent's own recorded voice. There are no ads, no third-party trackers and no account to create.",
  },
  {
    label: "Long (100 words)",
    note: "For features and company mentions.",
    text:
      "MoonPage is a bedtime story app for children aged 2 and up, made by the studio EchoRealm. It holds 45 original, illustrated picture books, sorted into 22 themed collections, that a child can hear from a professional narrator or in a parent's own recorded voice. Stories download to the device and work without a signal. There are no ads and no third-party trackers, no account or login is required, and some stories are free to read now, with the full library unlocked through MoonPage Premium. The site also carries 64 short, practical guides for parents on sleep, bedtime routines and reading aloud.",
  },
];

/** Brand assets, all served from this site so a writer can hotlink or
 * download without asking. Paths are the real public/ files. */
const ASSETS: { name: string; href: string; detail: string }[] = [
  { name: "App icon", href: "/icon.png", detail: "PNG, 1024×1024" },
  { name: "App icon (small)", href: "/icon-192.png", detail: "PNG, 192×192" },
  { name: "Social card", href: "/og-image.png", detail: "PNG, 1200×630 — the image used when MoonPage is shared" },
  { name: "Hero illustration", href: "/hero/wp_b01_31_night_slow.webp", detail: "WebP, 1024×768 — the night scene used on the homepage" },
  { name: "Cover sample — The Blue Sea", href: "/covers/wp_b01_1_blue_sea_cover.webp", detail: "WebP, 800×588 — one of the 45 story covers" },
  { name: "Cover sample — The Window Moon", href: "/covers/wp_b05_1_window_moon_cover.webp", detail: "WebP, 800×588 — one of the 45 story covers" },
];

/** Naming rules. Small, but a press page that does not state them gets its
 * own brand spelled three different ways across three articles. */
const BRAND_RULES = [
  "The name is one word with a capital M and a capital P: MoonPage. Not Moon Page, Moonpage or moonpage.",
  "The app is MoonPage; the company behind it is EchoRealm. They are not the same name and should not be used interchangeably.",
  "Please do not recolour, crop, stretch or add effects to the app icon, and do not place it on a background that makes it hard to see.",
  "A mention of MoonPage is welcome and needs no permission. A claim that MoonPage endorses your product does need one — email us first.",
];

export default function PressPage() {
  const url = withSlash(`${SITE.domain}/press`);

  // ContactPage is the precise type here — this page exists to route people to
  // the right contact — and it hangs off the same Organization the /about page
  // and the root layout already describe, so the entity graph keeps one
  // answer to "who is behind this".
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Press & Media Kit",
    url,
    inLanguage: "en",
    description:
      "Fast facts, boilerplate and brand assets for writing about MoonPage, plus the press contact address.",
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: withSlash(SITE.domain),
    },
    mainEntity: {
      "@type": "Organization",
      name: SITE.operator,
      url: withSlash(SITE.domain),
      sameAs: [SITE.instagramUrl, SITE.tiktokUrl, SITE.appStoreUrl],
      contactPoint: {
        "@type": "ContactPoint",
        email: SITE.contactEmail,
        contactType: "press",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: withSlash(SITE.domain) },
      { "@type": "ListItem", position: 2, name: "Press & Media Kit", item: url },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <article className="page-gutter mx-auto max-w-2xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Press &amp; media kit
          </h1>

          <div id="page-intro" className="mt-6 space-y-4 sm:mt-8">
            <p className="text-base leading-relaxed text-ink sm:text-lg">
              {INTRO}
            </p>
          </div>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl md:text-2xl">
              Fast facts
            </h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              Everything in this table can be checked against the live site or
              the App Store listing. Nothing here is an estimate.
            </p>
            <dl className="mt-4 divide-y divide-wood/20 border-y border-wood/20">
              {FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="grid gap-1 py-3 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-4"
                >
                  <dt className="text-sm font-semibold text-ink sm:text-base">
                    {fact.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-ink-muted sm:text-base">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl md:text-2xl">
              Ready-to-use descriptions
            </h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              Three lengths of the same description. Paste whichever fits your
              word count — no attribution needed.
            </p>
            <div className="mt-4 space-y-6">
              {BOILERPLATE.map((block) => (
                <div
                  key={block.label}
                  className="rounded-2xl border border-wood/20 bg-cream-deep/40 p-4 sm:p-5"
                >
                  <p className="font-display text-sm font-semibold text-ink sm:text-base">
                    {block.label}
                  </p>
                  <p className="mt-1 text-xs text-ink-muted sm:text-sm">
                    {block.note}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink sm:text-base">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl md:text-2xl">
              Brand assets
            </h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              Free to use in coverage of MoonPage. Link to them directly or
              download and host them yourself — both are fine.
            </p>
            <ul className="mt-4 space-y-3">
              {ASSETS.map((asset) => (
                <li key={asset.href}>
                  <a
                    href={asset.href}
                    className="text-sm font-medium text-link underline hover:text-link-hover sm:text-base"
                  >
                    {asset.name}
                  </a>
                  <span className="ml-2 text-xs text-ink-muted sm:text-sm">
                    {asset.detail}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl md:text-2xl">
              How to write about MoonPage
            </h2>
            <ul className="mt-3 space-y-3">
              {BRAND_RULES.map((rule) => (
                <li
                  key={rule}
                  className="max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base"
                >
                  {rule}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 border-t border-wood/20 pt-6 sm:mt-12 sm:pt-8">
            <h2 className="font-display text-base font-semibold text-ink sm:text-lg">
              Press contact
            </h2>
            <p className="mt-2 max-w-prose text-sm text-ink-muted sm:text-base">
              For interviews, review copies, screenshots we have not published,
              or anything factual you want confirmed, email{" "}
              <a
                href={`mailto:${SITE.contactEmail}`}
                className="text-link underline hover:text-link-hover"
              >
                {SITE.contactEmail}
              </a>
              . We are a small team and we read everything.
            </p>
            <p className="mt-3 max-w-prose text-sm text-ink-muted sm:text-base">
              Reviewing the app?{" "}
              <a
                href={SITE.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link underline hover:text-link-hover"
              >
                The App Store listing
              </a>{" "}
              has the screenshots and the current version history.
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm font-medium text-link underline hover:text-link-hover sm:text-base"
                >
                  About MoonPage and how our guides are written
                </Link>
              </li>
              <li>
                <Link
                  href="/bedtime-stories-app"
                  className="text-sm font-medium text-link underline hover:text-link-hover sm:text-base"
                >
                  What the app does, in detail
                </Link>
              </li>
              <li>
                <Link
                  href="/stories"
                  className="text-sm font-medium text-link underline hover:text-link-hover sm:text-base"
                >
                  Browse all 45 stories
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm font-medium text-link underline hover:text-link-hover sm:text-base"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
