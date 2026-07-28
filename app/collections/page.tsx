import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreButtons } from "@/components/StoreButtons";
import { BackHomeLink } from "@/components/BackLink";
import { SampleShelfNotice } from "@/components/SampleShelfNotice";
import { collectionsWithStories } from "@/lib/collections";
import { SITE, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/collections",
  title: "Children's Bedtime Stories by Theme",
  description:
    "Browse children's bedtime stories by theme — bedtime, animals, kindness, big feelings, friendship, courage, curiosity, ocean, snow, family, and patience.",
  keywords: [
    "bedtime stories by theme",
    "kids story collections",
    "toddler sleepy stories",
    "preschool friendship stories",
    "children picture story categories",
  ],
});

export default function CollectionsPage() {
  const collections = collectionsWithStories();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
      {
        "@type": "ListItem",
        position: 2,
        name: "Collections",
        item: `${SITE.domain}/collections`,
      },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: collections.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.domain}/collections/${c.slug}`,
      name: c.title,
    })),
  };

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-4xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Bedtime stories by theme
          </h1>
          <p className="mt-3 max-w-md text-sm text-ink-muted sm:mt-4 sm:max-w-xl sm:text-base">
            Sometimes you know exactly what tonight needs: something with
            animals in it, something about a big feeling, or something so quiet
            it puts you to sleep too. Every collection below is drawn from
            MoonPage&apos;s own illustrated library for ages 2+.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
            {collections.map((c) => (
              <Link
                key={c.slug}
                href={`/collections/${c.slug}`}
                className="group flex min-w-0 flex-col rounded-2xl border border-wood/20 bg-paper p-5 transition-colors hover:border-accent sm:rounded-3xl sm:p-6"
              >
                <h2 className="font-display text-base font-semibold leading-snug text-ink group-hover:text-link sm:text-lg">
                  {c.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {c.description}
                </p>
                <p className="mt-3 text-xs text-ink-muted sm:text-sm">
                  {c.stories.length} in this sample · full library in the app
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl bg-paper p-6 text-center sm:mt-16 sm:gap-4 sm:rounded-3xl sm:p-10">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              All of it, in one app
            </h2>
            <p className="max-w-sm text-sm text-ink-muted sm:max-w-md sm:text-base">
              MoonPage holds the whole library — narrated by a pro, read by
              your device, or recorded in your own voice. No ads, no login,
              works offline.
            </p>
            <StoreButtons
              campaign="collections_hub"
              className="justify-center"
            />
          </div>

          <p className="mt-8 text-sm text-ink-muted sm:text-base">
            Or see{" "}
            <Link
              href="/stories"
              className="font-medium text-link underline hover:text-link-hover"
            >
              every story on the site in one list
            </Link>
            .
          </p>
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
