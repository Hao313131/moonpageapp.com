import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqList } from "@/components/FaqList";
import { StoreButtons } from "@/components/StoreButtons";
import { StoryGrid } from "@/components/StoryGrid";
import { SampleShelfNotice } from "@/components/SampleShelfNotice";
import { COLLECTIONS, getCollection } from "@/lib/collections";
import { guidesForCollection } from "@/lib/internalLinks";
import { storiesByTag } from "@/lib/stories";
import { storyCoverUrl } from "@/lib/storyCover";
import { SITE, pageMetadata, pageKeywords, withSlash } from "@/lib/site";

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
    keywords: pageKeywords([
      collection.title,
      "kids story collections",
      "bedtime stories by theme",
      "themed bedtime stories",
      "toddler story collection",
      "preschool story collection",
    ]),
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
  const url = withSlash(`${SITE.domain}/collections/${collection.slug}`);
  const others = COLLECTIONS.filter((c) => c.slug !== collection.slug).slice(
    0,
    4,
  );
  // Theme shelf → the parent-facing guides for the same theme. This is the
  // link direction the site was missing entirely: 22 collection pages each
  // pointed only at stories and at other collections, so the guide cluster
  // got no internal links from the pages most likely to rank for the theme.
  const relatedGuides = guidesForCollection(collection, 3);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#stories`,
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
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: withSlash(SITE.domain) },
      {
        "@type": "ListItem",
        position: 2,
        name: "Collections",
        item: withSlash(`${SITE.domain}/collections`),
      },
      { "@type": "ListItem", position: 3, name: collection.title, item: url },
    ],
  };

  // The page itself, declared as what it actually is: a themed collection of
  // books. Before this, the 22 shelf pages emitted only an ItemList and a
  // BreadcrumbList — a list of things with no statement about the page that
  // holds them, which is the shape that earns a *directory* result rather than
  // a *collection* one. /collections/ has declared
  // `["ItemList", "CollectionPage"]` since it was written; the shelves it links
  // to never did. `mainEntity` / `breadcrumb` point at the two nodes above by
  // @id so the three blocks read as one graph instead of three orphaned
  // islands — the same @id wiring the guide pages use for mainEntityOfPage.
  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: collection.title,
    description: collection.description,
    url,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: withSlash(SITE.domain),
    },
    audience: { "@type": "PeopleAudience", suggestedMinAge: 2 },
    ...(relatedGuides.length
      ? {
          significantLink: relatedGuides.map((g) =>
            withSlash(`${SITE.domain}/guides/${g.slug}`),
          ),
        }
      : {}),
    mainEntity: { "@id": `${url}#stories` },
    breadcrumb: { "@id": `${url}#breadcrumb` },
  };

  // The guides rendered above, declared as a list so the shelf reads to a
  // crawler as part of a topic cluster (shelf + advice) rather than as a
  // standalone grid of covers.
  const relatedGuidesJsonLd = relatedGuides.length
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `${collection.title} — bedtime guides`,
        itemListElement: relatedGuides.map((g, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: g.title,
          url: withSlash(`${SITE.domain}/guides/${g.slug}`),
        })),
      }
    : null;

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
              or in your own recorded voice. Some are free — no account needed.
            </p>
            <StoreButtons
              campaign={`collection_${collection.slug.replace(/-/g, "_")}`}
            />
          </div>

          {relatedGuides.length > 0 && (
            <section className="mt-10 border-t border-wood/20 pt-6 sm:mt-12 sm:pt-8">
              <h2 className="font-display text-base font-semibold text-ink sm:text-lg">
                Bedtime advice for this theme
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
                The reading-around-the-story part — routines, settling, and how
                to read these out loud so they land.
              </p>
              <ul className="mt-3 space-y-2">
                {relatedGuides.map((g) => (
                  <li key={g.slug}>
                    <Link
                      href={`/guides/${g.slug}`}
                      className="text-sm font-medium text-link underline hover:text-link-hover sm:text-base"
                    >
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {collection.faqs?.length ? (
            <section className="mt-10 border-t border-wood/20 pt-6 sm:mt-12 sm:pt-8">
              <h2 className="font-display text-base font-semibold text-ink sm:text-lg">
                {collection.title} — questions parents ask
              </h2>
              <FaqList items={collection.faqs} className="mt-4" />
            </section>
          ) : null}

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {relatedGuidesJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(relatedGuidesJsonLd),
          }}
        />
      )}
      {collection.faqs?.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: collection.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      ) : null}
    </>
  );
}
