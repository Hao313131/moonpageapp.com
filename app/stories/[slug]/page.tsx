import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreButtons } from "@/components/StoreButtons";
import { StoryGrid } from "@/components/StoryGrid";
import { COLLECTIONS } from "@/lib/collections";
import {
  STORIES,
  TAG_LABELS,
  TAG_MORE_HEADINGS,
  getStory,
  storiesByTag,
} from "@/lib/stories";
import { storyCoverSrc, storyCoverUrl } from "@/lib/storyCover";
import { SITE, pageMetadata } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return STORIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  return pageMetadata({
    path: `/stories/${story.slug}`,
    title: `${story.title} — Bedtime Story`,
    description: `${story.hook} Open it free in MoonPage tonight — illustrated, narrated, offline. No ads, no login.`,
    keywords: [
      story.title.toLowerCase(),
      "bedtime story",
      "picture book for kids",
      "read aloud storybook",
      ...story.tags.slice(0, 3).map((t) => TAG_LABELS[t].toLowerCase()),
    ],
    // Stable cover URL without cache-bust query — better for OG crawlers.
    image: `${SITE.domain}/covers/${story.file}`,
  });
}

export default async function StoryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const url = `${SITE.domain}/stories/${story.slug}`;
  const image = storyCoverUrl(SITE.domain, story.file);

  // Other stories that share this one's strongest theme.
  const primaryTag = story.tags[0];
  const alsoLike = storiesByTag(primaryTag)
    .filter((s) => s.slug !== story.slug)
    .slice(0, 5);
  const collectionByTag = new Map(COLLECTIONS.map((c) => [c.tag, c]));
  const shownTags = story.tags.slice(0, 3);
  const tagPillClass =
    "rounded-full border border-wood/30 bg-paper px-3 py-1 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm";

  const bookJsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    bookFormat: "https://schema.org/EBook",
    name: story.title,
    description: story.hook,
    image,
    url,
    inLanguage: "en",
    genre: "Children's picture book",
    audience: { "@type": "PeopleAudience", suggestedMinAge: 2 },
    publisher: { "@type": "Organization", name: SITE.operator },
    isPartOf: {
      "@type": "CreativeWorkSeries",
      name: `${SITE.name} bedtime stories`,
      url: `${SITE.domain}/stories`,
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
        name: "Stories",
        item: `${SITE.domain}/stories`,
      },
      { "@type": "ListItem", position: 3, name: story.title, item: url },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-4xl py-10 sm:py-14 md:py-20">
          <Link
            href="/stories"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-link transition-colors hover:text-link-hover sm:text-base"
          >
            <span aria-hidden>←</span> All stories
          </Link>

          <div className="mt-5 grid gap-6 sm:mt-6 sm:gap-8 md:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
            {/* 4:3 landscape, same as the app's cover art and the grids. */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg sm:rounded-2xl">
              <Image
                src={storyCoverSrc(story.file)}
                alt={`Cover art for the children's bedtime story "${story.title}"`}
                fill
                sizes="(min-width: 768px) 360px, 92vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="min-w-0">
              <h1 className="font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
                {story.title}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-ink sm:text-base">
                {story.hook}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                {story.bedtimeNote}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {shownTags.map((tag) => {
                  const collection = collectionByTag.get(tag);
                  const label = TAG_LABELS[tag];
                  if (collection) {
                    return (
                      <Link
                        key={tag}
                        href={`/collections/${collection.slug}`}
                        className={tagPillClass}
                      >
                        {label}
                      </Link>
                    );
                  }
                  return (
                    <span key={tag} className={tagPillClass}>
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl bg-paper p-6 text-center sm:mt-12 sm:gap-4 sm:rounded-3xl sm:p-10">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Read “{story.title}” tonight
            </h2>
            <p className="max-w-sm text-sm text-ink-muted sm:max-w-md sm:text-base">
              Free to start in MoonPage — illustrated, narrated, fully offline.
              No ads, no login.
            </p>
            <StoreButtons
              campaign={`story_${story.slug.replace(/-/g, "_")}`}
              className="justify-center"
            />
          </div>

          {alsoLike.length > 0 && (
            <section className="mt-12 sm:mt-16">
              <h2 className="font-display text-lg font-semibold text-ink sm:text-xl md:text-2xl">
                More {TAG_MORE_HEADINGS[primaryTag]}
              </h2>
              <p className="mt-2 max-w-prose text-sm text-ink-muted sm:text-base">
                More like this live in the app — this site shows only part of
                MoonPage&apos;s library, and new stories keep being added.
              </p>
              <StoryGrid stories={alsoLike} className="mt-4 sm:mt-6" />
            </section>
          )}

          <p className="mt-10 text-sm text-ink-muted sm:text-base">
            Not sure what to read tonight?{" "}
            <Link
              href="/guides/choosing-bedtime-books"
              className="font-medium text-link underline hover:text-link-hover"
            >
              How to choose a bedtime book
            </Link>{" "}
            walks through it, or{" "}
            <Link
              href="/collections"
              className="font-medium text-link underline hover:text-link-hover"
            >
              browse every theme
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
