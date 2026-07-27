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
    title: `${story.title} — A Bedtime Story for Ages 3+`,
    description: `${story.hook} An original illustrated bedtime story in MoonPage, read by a narrator or in your own recorded voice.`,
  });
}

export default async function StoryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const url = `${SITE.domain}/stories/${story.slug}`;
  const image = `${SITE.domain}/covers/${story.file}`;

  // Other stories that share this one's strongest theme.
  const primaryTag = story.tags[0];
  const alsoLike = storiesByTag(primaryTag)
    .filter((s) => s.slug !== story.slug)
    .slice(0, 5);
  const themeCollections = COLLECTIONS.filter((c) => story.tags.includes(c.tag));

  const bookJsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    bookFormat: "https://schema.org/EBook",
    name: story.title,
    description: story.summary[0],
    image,
    url,
    inLanguage: "en",
    genre: "Children's picture book",
    audience: { "@type": "PeopleAudience", suggestedMinAge: 3 },
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
                src={`/covers/${story.file}`}
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
              <dl className="mt-4 space-y-1 text-sm text-ink-muted sm:text-base">
                <div className="flex gap-2">
                  <dt className="font-semibold text-ink">Ages</dt>
                  <dd>3 and up, read together</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-ink">Read aloud</dt>
                  <dd>About 5 minutes</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-ink">Narration</dt>
                  <dd>Professional, device read-aloud, or your own voice</dd>
                </div>
              </dl>
              <div className="mt-4 flex flex-wrap gap-2">
                {themeCollections.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/collections/${c.slug}`}
                    className="rounded-full border border-wood/30 bg-paper px-3 py-1 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
                  >
                    {TAG_LABELS[c.tag]}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl md:text-2xl">
              What happens
            </h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              {story.summary[0]}
            </p>
          </section>

          <section className="mt-8 sm:mt-10">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl md:text-2xl">
              Why it works at bedtime
            </h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              {story.summary[1]}
            </p>
          </section>

          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl bg-paper p-6 text-center sm:mt-12 sm:gap-4 sm:rounded-3xl sm:p-10">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Read “{story.title}” tonight
            </h2>
            <p className="max-w-sm text-sm text-ink-muted sm:max-w-md sm:text-base">
              It&apos;s in MoonPage along with the rest of the library — far
              more stories than we show here, with new ones added all the time.
              Illustrated, narrated, fully offline. No ads, no login, and some
              stories are free.
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
                A few of them, anyway — these pages cover only part of
                MoonPage&apos;s library, and more stories keep arriving.
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
