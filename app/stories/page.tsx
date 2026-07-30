import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreButtons } from "@/components/StoreButtons";
import { BackHomeLink } from "@/components/BackLink";
import { SampleShelfNotice } from "@/components/SampleShelfNotice";
import { StoryGrid } from "@/components/StoryGrid";
import { COLLECTIONS } from "@/lib/collections";
import { STORIES, TAG_LABELS } from "@/lib/stories";
import { storyCoverUrl } from "@/lib/storyCover";
import { SITE, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/stories",
  title: "Bedtime Stories for Kids Ages 2+ — Original Picture Books",
  description:
    "A sample from MoonPage's growing library of original illustrated bedtime stories for kids ages 2+. Trusted by thousands of moms for calmer bedtime routines and cozy stories. Read on phone or tablet by a professional narrator, or in your own recorded voice.",
  keywords: [
    "bedtime stories for kids",
    "bedtime stories ages 2+",
    "children picture storybooks",
    "kids narration stories",
    "cozy bedtime tales",
  ],
});

export default function StoriesPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MoonPage bedtime stories",
    itemListElement: STORIES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Book",
        bookFormat: "https://schema.org/EBook",
        name: s.title,
        description: s.hook,
        image: storyCoverUrl(SITE.domain, s.file),
        inLanguage: "en",
        audience: {
          "@type": "PeopleAudience",
          suggestedMinAge: 2,
        },
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
        name: "Stories",
        item: `${SITE.domain}/stories`,
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-6xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Bedtime stories for kids
          </h1>
          <p className="mt-3 max-w-md text-sm text-ink-muted sm:mt-4 sm:max-w-2xl sm:text-base">
            A handful of MoonPage&apos;s original, illustrated picture books —
            the library they come from is much larger, and it keeps growing.
            Gentle tales about kindness, courage, and curiosity for ages 2+,
            read aloud by a professional narrator or in your own recorded
            voice.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <nav aria-label="Story collections" className="mt-6 sm:mt-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Browse by theme
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {COLLECTIONS.map((c) => (
                <Link
                  key={c.slug}
                  href={`/collections/${c.slug}`}
                  className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
                >
                  {TAG_LABELS[c.tag]}
                </Link>
              ))}
            </div>
          </nav>

          <StoryGrid stories={STORIES} className="mt-8 sm:mt-12" />

          <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl bg-paper p-6 text-center sm:mt-16 sm:gap-4 sm:rounded-3xl sm:p-10">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Read tonight&apos;s story in MoonPage
            </h2>
            <p className="max-w-sm text-sm text-ink-muted sm:max-w-md sm:text-base">
              Some stories are free to read — no account needed, and new ones
              keep arriving.
            </p>
            <StoreButtons campaign="stories_page" className="justify-center" />
          </div>

          <p className="mt-8 text-sm text-ink-muted sm:text-base">
            New to bedtime reading? Start with our{" "}
            <Link
              href="/guides/read-aloud-to-toddlers"
              className="font-medium text-link underline hover:text-link-hover"
            >
              read-aloud guide
            </Link>{" "}
            or the{" "}
            <Link
              href="/guides/bedtime-routine-for-toddlers"
              className="font-medium text-link underline hover:text-link-hover"
            >
              bedtime routine guide
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
