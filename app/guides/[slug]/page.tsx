import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreButtons } from "@/components/StoreButtons";
import {
  GUIDES,
  getGuide,
  relatedGuides,
  type GuideBlock,
} from "@/lib/guides";
import { SITE, pageMetadata, pageKeywords } from "@/lib/site";

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
    type: "article",
    article: { publishedTime: guide.updated, modifiedTime: guide.updated },
    keywords: pageKeywords([
      guide.category,
      "parenting",
      "children's sleep",
      "bedtime routine",
      "kids sleep tips",
      "toddler sleep",
      "preschool sleep",
      "parent child bonding",
    ]),
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
    articleSection: guide.category,
    keywords: [
      guide.category,
      "bedtime stories",
      "parenting",
      "children's sleep",
    ],
    datePublished: guide.updated,
    dateModified: guide.updated,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: {
      "@type": "ImageObject",
      url: `${SITE.domain}/og-image.png`,
      width: 1200,
      height: 630,
    },
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

  // Only emitted when the guide actually has questions — an empty FAQPage is
  // a structured-data error, not a neutral no-op.
  const faqJsonLd = guide.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  // HowTo (adopted from MissingWitness's guide pages, which emit HowTo for
  // step-based advice). Built from the guide's ordered lists — which are
  // rendered visibly on the page, so Google sees the same steps it indexes.
  // Guides without any <ol> simply skip HowTo (an empty one is an error).
  const howToSteps = guide.sections
    .flatMap((sec) => sec.blocks)
    .filter((b): b is { type: "ol"; items: string[] } => b.type === "ol")
    .flatMap((b) => b.items.map((text) => ({ text })));
  const howToJsonLd = howToSteps.length
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: guide.title,
        description: guide.description,
        step: howToSteps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          text: s.text,
        })),
      }
    : null;

  const related = relatedGuides(guide);

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
            {" · "}
            <time dateTime={guide.updated}>
              Updated{" "}
              {new Date(guide.updated).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
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

          {guide.faqs && guide.faqs.length > 0 && (
            <section className="mt-10 sm:mt-14">
              <h2 className="font-display text-lg font-semibold text-ink sm:text-xl md:text-2xl">
                Common questions
              </h2>
              <dl className="mt-4 space-y-5 sm:mt-6 sm:space-y-6">
                {guide.faqs.map((faq) => (
                  <div key={faq.q}>
                    <dt className="text-sm font-semibold text-ink sm:text-base">
                      {faq.q}
                    </dt>
                    <dd className="mt-1.5 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
                      {faq.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl bg-paper p-6 text-center sm:mt-16 sm:gap-4 sm:rounded-3xl sm:p-10">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Tonight&apos;s story, ready to read
            </h2>
            <p className="max-w-sm text-sm text-ink-muted sm:max-w-md sm:text-base">
              Original illustrated bedtime stories for ages 2+, by a
              professional narrator or in your own recorded voice. Some are free — no account
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
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}
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
