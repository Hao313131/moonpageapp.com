import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackHomeLink } from "@/components/BackLink";
import { FaqList } from "@/components/FaqList";
import { SampleShelfNotice } from "@/components/SampleShelfNotice";
import { SeoHubCta } from "@/components/SeoHubCta";
import { StoryGrid } from "@/components/StoryGrid";
import { SITE, hubJsonLd, pageMetadata } from "@/lib/site";
import { STORIES, storiesByTag } from "@/lib/stories";

export const metadata: Metadata = pageMetadata({
  path: "/picture-books-for-kids",
  title: "Picture Books for Kids Ages 2+",
  description:
    "Illustrated picture books and children's storybooks for kids ages 2+ — cozy bedtime picture storybooks with read-aloud narration for toddlers, preschoolers, and parents.",
  keywords: [
    "picture books for kids",
    "picture storybooks for children",
    "children's picture books",
    "kids storybooks",
    "read aloud picture books",
    "illustrated storybooks for kids",
    "toddler picture books",
    "preschool picture books",
    "children's storybook app",
  ],
});

const FAQS = [
  {
    q: "What's the difference between a picture book and a storybook in MoonPage?",
    a: "Every MoonPage title is an illustrated picture storybook — full-page art plus a short, readable text arc designed for ages 2+. They're built for reading aloud or listening with narration.",
    category: "Stories & narration" as const,
  },
  {
    q: "Are these physical books or a digital storybook app?",
    a: "MoonPage is a digital storybook app for phone and tablet. Stories are original illustrated picture books you can read aloud, play with narration, or hear in a parent's recorded voice.",
    category: "Getting started" as const,
  },
  {
    q: "Do picture books help at bedtime?",
    a: "Yes — when you choose calm ones. Picture books with soft pacing and quiet endings make a stronger wind-down cue than long chapter cliffhangers or stimulating screen videos.",
    category: "Stories & narration" as const,
  },
];

export default function PictureBooksForKidsPage() {
  const sample = [
    ...storiesByTag("animals"),
    ...storiesByTag("kindness"),
    ...storiesByTag("curiosity"),
    ...storiesByTag("bedtime"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = hubJsonLd({
    path: "/picture-books-for-kids",
    name: "Picture Books for Kids",
    faqs: FAQS,
    items: [
      { name: "All bedtime stories", url: `${SITE.domain}/stories` },
      { name: "Collections", url: `${SITE.domain}/collections` },
      {
        name: "Why picture books matter (guide)",
        url: `${SITE.domain}/guides/why-picture-books-matter`,
      },
      {
        name: "Choosing bedtime books (guide)",
        url: `${SITE.domain}/guides/choosing-bedtime-books`,
      },
      {
        name: "Wordless picture books (guide)",
        url: `${SITE.domain}/guides/wordless-picture-books`,
      },
      {
        name: "Read-aloud bedtime stories",
        url: `${SITE.domain}/read-aloud-bedtime-stories`,
      },
      {
        name: "Preschool bedtime stories",
        url: `${SITE.domain}/preschool-bedtime-stories`,
      },
      {
        name: "Bedtime stories app",
        url: `${SITE.domain}/bedtime-stories-app`,
      },
      { name: "Cozy bedtime stories", url: `${SITE.domain}/cozy-bedtime-stories` },
    ],
  });

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-5xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Picture books and storybooks for kids ages 2+
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            MoonPage is a library of original illustrated picture storybooks
            for children — the kind parents want for bedtime and quiet reading:
            short arcs, warm art, and language toddlers and preschoolers can
            follow. Search for kids storybooks, children&apos;s picture books,
            or read-aloud picture books, and you&apos;ll find the same idea
            here: stories made to be shared.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Browse themes like animals, kindness, friendship, and sleepy
            nights. Then open any book with professional narration or your own
            parent voice.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Sample illustrated picture storybooks
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              A selection from {STORIES.length} sample titles on the website.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
            <p className="mt-4 text-sm text-ink-muted sm:text-base">
              See every sample on{" "}
              <Link
                href="/stories"
                className="font-semibold text-link underline hover:text-link-hover"
              >
                the stories shelf
              </Link>{" "}
              or browse{" "}
              <Link
                href="/collections"
                className="font-medium text-link underline hover:text-link-hover"
              >
                themes
              </Link>
              .
            </p>
          </section>

          <section className="mt-10 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-12 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Why picture books still win at bedtime
            </h2>
            <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>Art gives toddlers something to point at while language grows.</li>
              <li>Short page counts fit real bedtime windows (5–20 minutes).</li>
              <li>Shared looking builds connection better than autoplay video.</li>
              <li>Calm endings teach the body that story time leads to sleep.</li>
            </ul>
            <p className="mt-4 text-sm text-ink-muted sm:text-base">
              Parent guides:{" "}
              <Link
                href="/guides/why-picture-books-matter"
                className="font-medium text-link underline hover:text-link-hover"
              >
                why picture books matter
              </Link>
              ,{" "}
              <Link
                href="/guides/choosing-bedtime-books"
                className="font-medium text-link underline hover:text-link-hover"
              >
                choosing bedtime books
              </Link>
              ,{" "}
              <Link
                href="/guides/wordless-picture-books"
                className="font-medium text-link underline hover:text-link-hover"
              >
                wordless picture books
              </Link>
              .
            </p>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Related hubs
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/read-aloud-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Read-aloud bedtime stories
              </Link>
              <Link
                href="/preschool-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Preschool bedtime stories
              </Link>
              <Link
                href="/bedtime-stories-app"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Bedtime stories app
              </Link>
              <Link
                href="/cozy-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Cozy bedtime stories
              </Link>
            </div>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Picture books FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="picture_books_for_kids"
            title="Open a picture storybook in MoonPage"
            body="Free to download — illustrated kids storybooks with narration, parent voice, and offline reading for ages 2+."
          />
        </div>
      </main>
      <Footer />
      {jsonLd.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
