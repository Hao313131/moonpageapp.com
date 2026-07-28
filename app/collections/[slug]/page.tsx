import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreButtons } from "@/components/StoreButtons";
import { StoryGrid } from "@/components/StoryGrid";
import { SampleShelfNotice } from "@/components/SampleShelfNotice";
import { COLLECTIONS, getCollection } from "@/lib/collections";
import { storiesByTag } from "@/lib/stories";
import { storyCoverUrl } from "@/lib/storyCover";
import { SITE, pageMetadata } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};
  return pageMetadata({
    path: `/collections/${collection.slug}`,
    title: collection.title,
    description: collection.description,
  });
}

export default async function CollectionPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const stories = storiesByTag(collection.tag);
  const url = `${SITE.domain}/collections/${collection.slug}`;
  const others = COLLECTIONS.filter((c) => c.slug !== collection.slug).slice(
    0,
    4,
  );

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: collection.title,
    description: collection.description,
    url,
    itemListElement: stories.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Book",
        bookFormat: "https://schema.org/EBook",
        name: s.title,
        description: s.hook,
        image: storyCoverUrl(SITE.domain, s.file),
        inLanguage: "en",
        audience: { "@type": "PeopleAudience", suggestedMinAge: 2 },
        publisher: { "@type": "Organization", name: SITE.operator },
      },
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
        name: "Collections",
        item: `${SITE.domain}/collections`,
      },
      { "@type": "ListItem", position: 3, name: collection.title, item: url },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-6xl py-10 sm:py-14 md:py-20">
          <Link
            href="/collections"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-link transition-colors hover:text-link-hover sm:text-base"
          >
            <span aria-hidden>←</span> All collections
          </Link>

          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            {collection.title}
          </h1>
          <div className="mt-3 max-w-2xl space-y-3 sm:mt-4 sm:space-y-4">
            {collection.intro.map((text) => (
              <p
                key={text}
                className="text-sm leading-relaxed text-ink-muted sm:text-base"
              >
                {text}
              </p>
            ))}
          </div>

          <SampleShelfNotice className="mt-6 sm:mt-8" />

          <StoryGrid stories={stories} className="mt-6 sm:mt-8" />

          <p className="mt-6 max-w-2xl rounded-2xl border border-wood/20 bg-paper p-4 text-sm leading-relaxed text-ink-muted sm:mt-8 sm:p-5 sm:text-base">
            <span className="font-semibold text-ink">Reading tip:</span>{" "}
            {collection.note}
          </p>

          <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl bg-paper p-6 text-center sm:mt-16 sm:gap-4 sm:rounded-3xl sm:p-10">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Read these tonight
            </h2>
            <p className="max-w-sm text-sm text-ink-muted sm:max-w-md sm:text-base">
              Every story in MoonPage can be read by a professional narrator,
              read aloud by your device, or recorded in your own voice. Some are
              free — no account needed.
            </p>
            <StoreButtons
              campaign={`collection_${collection.slug.replace(/-/g, "_")}`}
              className="justify-center"
            />
          </div>

          <section className="mt-10 border-t border-wood/20 pt-6 sm:mt-12 sm:pt-8">
            <h2 className="font-display text-base font-semibold text-ink sm:text-lg">
              More collections
            </h2>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {others.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/collections/${c.slug}`}
                    className="text-sm font-medium text-link underline hover:text-link-hover sm:text-base"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
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
