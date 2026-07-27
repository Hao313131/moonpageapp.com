import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreButtons } from "@/components/StoreButtons";
import { BackHomeLink } from "@/components/BackLink";
import { FaqList } from "@/components/FaqList";
import { FAQS, FAQ_CATEGORIES } from "@/lib/faq";
import { SITE, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/faq",
  title: "Bedtime Story App FAQ for Parents",
  description:
    "Everything parents ask about MoonPage — ages, own-voice narration, offline reading, privacy, devices, and subscriptions.",
});

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
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
        name: "FAQ",
        item: `${SITE.domain}/faq`,
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
            Frequently asked questions
          </h1>
          <p className="mt-3 max-w-md text-sm text-ink-muted sm:mt-4 sm:max-w-lg sm:text-base">
            MoonPage is free to download, with some stories free to read now.
            MoonPage Premium unlocks full access to the complete story library.
            Below are the details parents ask most — narration, privacy,
            offline use, devices, and pricing.
          </p>

          <nav
            aria-label="FAQ sections"
            className="mt-6 flex flex-wrap gap-2 sm:mt-8"
          >
            {FAQ_CATEGORIES.map((category) => (
              <a
                key={category}
                href={`#${slugify(category)}`}
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                {category}
              </a>
            ))}
          </nav>

          {FAQ_CATEGORIES.map((category) => {
            const items = FAQS.filter((f) => f.category === category);
            if (items.length === 0) return null;
            return (
              <section
                key={category}
                id={slugify(category)}
                className="mt-10 scroll-mt-24 sm:mt-14"
              >
                <h2 className="font-display text-lg font-semibold text-ink sm:text-xl md:text-2xl">
                  {category}
                </h2>
                <FaqList items={items} className="mt-4 sm:mt-5" />
              </section>
            );
          })}

          <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl bg-paper p-6 text-center sm:mt-16 sm:gap-4 sm:rounded-3xl sm:p-10">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Still have a question?
            </h2>
            <p className="max-w-sm text-sm text-ink-muted sm:max-w-md sm:text-base">
              Email us at{" "}
              <a
                href={`mailto:${SITE.contactEmail}`}
                className="font-medium text-link underline hover:text-link-hover"
              >
                {SITE.contactEmail}
              </a>{" "}
              — or see the{" "}
              <Link
                href="/support"
                className="font-medium text-link underline hover:text-link-hover"
              >
                Support page
              </Link>{" "}
              for subscriptions and restoring purchases.
            </p>
            <p className="max-w-sm text-sm text-ink-muted sm:max-w-md sm:text-base">
              Looking for bedtime advice rather than app answers? Read our{" "}
              <Link
                href="/guides"
                className="font-medium text-link underline hover:text-link-hover"
              >
                bedtime &amp; parenting guides
              </Link>
              .
            </p>
            <StoreButtons campaign="faq_page" className="justify-center" />
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
