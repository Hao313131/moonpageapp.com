import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackHomeLink } from "@/components/BackLink";
import { COLLECTIONS } from "@/lib/collections";
import { GUIDES } from "@/lib/guides";
import { STORIES } from "@/lib/stories";
import { SITE, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/sitemap",
  title: "Site map — MoonPage bedtime stories & guides",
  description:
    "Every bedtime story, themed collection, and parenting guide on MoonPage, in one place.",
});

// The keyword hub pages — kept in sync with the real routes.
const HUBS = [
  { slug: "bedtime-stories", label: "Bedtime stories for kids" },
  { slug: "toddler-bedtime-stories", label: "Toddler bedtime stories" },
  { slug: "preschool-bedtime-stories", label: "Preschool bedtime stories" },
  { slug: "read-aloud-bedtime-stories", label: "Read-aloud bedtime stories" },
  { slug: "cozy-bedtime-stories", label: "Cozy bedtime tales" },
  { slug: "lullaby-bedtime-stories", label: "Lullaby bedtime stories" },
  { slug: "picture-books-for-kids", label: "Picture books for kids" },
  { slug: "bedtime-stories-app", label: "Bedtime stories app" },
  { slug: "bedtime-stories-by-age", label: "Bedtime stories by age" },
];

const OTHER = [
  { slug: "stories", label: "Browse all stories" },
  { slug: "collections", label: "All themes" },
  { slug: "guides", label: "Parenting guides" },
  { slug: "faq", label: "FAQ" },
  { slug: "search", label: "Search" },
  { slug: "support", label: "Support" },
  { slug: "privacy", label: "Privacy Policy" },
  { slug: "privacy-choices", label: "Privacy Choices" },
  { slug: "terms", label: "Terms of Use" },
];

export default function SiteMapPage() {
  const allLinks = [
    ...HUBS.map((h) => ({ name: h.label, url: `${SITE.domain}/${h.slug}` })),
    ...OTHER.map((o) => ({ name: o.label, url: `${SITE.domain}/${o.slug}` })),
    ...COLLECTIONS.map((c) => ({
      name: c.title,
      url: `${SITE.domain}/collections/${c.slug}`,
    })),
    ...GUIDES.map((g) => ({
      name: g.title,
      url: `${SITE.domain}/guides/${g.slug}`,
    })),
    ...STORIES.map((s) => ({
      name: s.title,
      url: `${SITE.domain}/stories/${s.slug}`,
    })),
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
      {
        "@type": "ListItem",
        position: 2,
        name: "Site map",
        item: `${SITE.domain}/sitemap`,
      },
    ],
  };

  const siteNavJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "MoonPage site map",
    url: `${SITE.domain}/sitemap`,
    description:
      "Every bedtime story, themed collection, and parenting guide on MoonPage.",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allLinks.length,
      itemListElement: allLinks.map((l, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: l.name,
        url: l.url,
      })),
    },
  };

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-4xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Site map
          </h1>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted sm:mt-4 sm:text-base">
            Every page on MoonPage in one place — bedtime story hubs, themed
            collections, parenting guides, and the full story library.
          </p>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Bedtime story hubs
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {HUBS.map((h) => (
                <li key={h.slug}>
                  <Link
                    href={`/${h.slug}`}
                    className="font-medium text-link underline hover:text-link-hover"
                  >
                    {h.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Themed collections
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {COLLECTIONS.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/collections/${c.slug}`}
                    className="font-medium text-link underline hover:text-link-hover"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Parenting guides
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {GUIDES.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guides/${g.slug}`}
                    className="font-medium text-link underline hover:text-link-hover"
                  >
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Story library ({STORIES.length})
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 sm:gap-x-6">
              {STORIES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/stories/${s.slug}`}
                    className="font-medium text-link underline hover:text-link-hover"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              More
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {OTHER.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/${o.slug}`}
                    className="font-medium text-link underline hover:text-link-hover"
                  >
                    {o.label}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavJsonLd) }}
      />
    </>
  );
}
