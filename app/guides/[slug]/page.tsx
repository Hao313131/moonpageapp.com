import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreButtons } from "@/components/StoreButtons";
import { GUIDES, getGuide, type GuideBlock } from "@/lib/guides";
import { SITE, pageMetadata } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMetadata({
    path: `/guides/${guide.slug}`,
    title: guide.title,
    description: guide.description,
  });
}

export default async function GuidePage({ params }: { params: Params }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const url = `${SITE.domain}/guides/${guide.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    inLanguage: "en",
    datePublished: guide.updated,
    dateModified: guide.updated,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: SITE.operator },
    publisher: {
      "@type": "Organization",
      name: SITE.operator,
      logo: { "@type": "ImageObject", url: `${SITE.domain}/icon.png` },
    },
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
      { "@type": "ListItem", position: 3, name: guide.title, item: url },
    ],
  };

  const related = guide.related
    .map((s) => getGuide(s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <>
      <Header />
      <main>
        <article className="page-gutter mx-auto max-w-2xl py-10 sm:py-14 md:py-20">
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-link transition-colors hover:text-link-hover sm:text-base"
          >
            <span aria-hidden>←</span> All guides
          </Link>

          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-accent-strong">
            {guide.category}
          </p>
          <h1 className="mt-2 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-3 text-xs text-ink-muted sm:text-sm">
            {guide.readingMinutes} min read
          </p>

          <div className="mt-6 space-y-4 sm:mt-8">
            {guide.intro.map((text) => (
              <p
                key={text}
                className="text-base leading-relaxed text-ink sm:text-lg"
              >
                {text}
              </p>
            ))}
          </div>

          {guide.sections.map((section) => (
            <section key={section.heading} className="mt-10 sm:mt-12">
              <h2 className="font-display text-lg font-semibold text-ink sm:text-xl md:text-2xl">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
                {section.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>
            </section>
          ))}

          <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl bg-paper p-6 text-center sm:mt-16 sm:gap-4 sm:rounded-3xl sm:p-10">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Tonight&apos;s story, ready to read
            </h2>
            <p className="max-w-sm text-sm text-ink-muted sm:max-w-md sm:text-base">
              Original illustrated bedtime stories for ages 3+, narrated by a
              pro or recorded in your own voice. Some are free — no account
              needed.
            </p>
            <StoreButtons
              campaign={`guide_${guide.slug.replace(/-/g, "_")}`}
              className="justify-center"
            />
          </div>

          {related.length > 0 && (
            <section className="mt-10 border-t border-wood/20 pt-6 sm:mt-12 sm:pt-8">
              <h2 className="font-display text-base font-semibold text-ink sm:text-lg">
                Keep reading
              </h2>
              <ul className="mt-3 space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/guides/${r.slug}`}
                      className="text-sm font-medium text-link underline hover:text-link-hover sm:text-base"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/faq"
                    className="text-sm font-medium text-link underline hover:text-link-hover sm:text-base"
                  >
                    Frequently asked questions about MoonPage
                  </Link>
                </li>
              </ul>
            </section>
          )}
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}

function Block({ block }: { block: GuideBlock }) {
  if (block.type === "p") {
    return (
      <p className="max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
        {block.text}
      </p>
    );
  }

  const items = (
    <>
      {block.items.map((item) => (
        <li key={item} className="pl-1">
          {item}
        </li>
      ))}
    </>
  );

  const className =
    "max-w-prose space-y-2 pl-5 text-sm leading-relaxed text-ink-muted sm:text-base";

  return block.type === "ol" ? (
    <ol className={`list-decimal ${className}`}>{items}</ol>
  ) : (
    <ul className={`list-disc ${className}`}>{items}</ul>
  );
}
