import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreButtons } from "@/components/StoreButtons";
import { BackHomeLink } from "@/components/BackLink";
import { GUIDES } from "@/lib/guides";
import { SITE, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/guides",
  title: "Bedtime and Parenting Guides for Toddlers",
  description:
    "Practical guides for parents of toddlers and preschoolers — bedtime routines, reading aloud, screen time before bed, and keeping bedtime steady when you're away.",
  keywords: [
    "parenting bedtime guide",
    "toddler bedtime routine",
    "preschool sleep routine",
    "read aloud tips for parents",
    "children bedtime parenting help",
  ],
});

export default function GuidesPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: GUIDES.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.domain}/guides/${g.slug}`,
      name: g.title,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: `${SITE.domain}/guides`,
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-4xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Bedtime &amp; parenting guides
          </h1>
          <p className="mt-3 max-w-md text-sm text-ink-muted sm:mt-4 sm:max-w-xl sm:text-base">
            Short, practical writing for parents of toddlers and preschoolers —
            routines that hold, reading aloud so they actually listen, and what
            to do on the nights that go sideways. No sign-up, no newsletter
            wall.
          </p>

          <p className="mt-4 text-sm text-ink-muted sm:text-base">
            {GUIDES.length} guides so far, covering{" "}
            {[...new Set(GUIDES.map((g) => g.category.toLowerCase()))].join(
              " · ",
            )}
            .
          </p>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
            {GUIDES.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group flex min-w-0 flex-col rounded-2xl border border-wood/20 bg-paper p-5 transition-colors hover:border-accent sm:rounded-3xl sm:p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-accent-strong">
                  {g.category}
                </span>
                <h2 className="mt-2 font-display text-base font-semibold leading-snug text-ink group-hover:text-link sm:text-lg">
                  {g.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {g.description}
                </p>
                <p className="mt-3 text-xs text-ink-muted sm:text-sm">
                  {g.readingMinutes} min read
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl bg-paper p-6 text-center sm:mt-16 sm:gap-4 sm:rounded-3xl sm:p-10">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              The part of the routine we build
            </h2>
            <p className="max-w-sm text-sm text-ink-muted sm:max-w-md sm:text-base">
              MoonPage is a bedtime story app for ages 2+ — original
              illustrated stories, by a professional narrator or in your own recorded
              voice. No ads, no login, works offline.
            </p>
            <StoreButtons campaign="guides_hub" className="justify-center" />
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
