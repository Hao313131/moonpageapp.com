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
  path: "/toddler-bedtime-stories",
  title: "Toddler Bedtime Stories (Ages 2–3)",
  description:
    "Toddler bedtime stories with short sentences, gentle pacing, and cozy endings. Sleepy picture storybooks and read-aloud narration for kids ages 2–3 — trusted by thousands of moms.",
  keywords: [
    "toddler bedtime stories",
    "bedtime stories for toddlers",
    "sleepy toddler tales",
    "cozy bedtime stories for toddlers",
    "read aloud toddler storybooks",
    "bedtime stories age 2",
    "bedtime stories age 3",
    "kids bedtime stories toddlers",
  ],
});

const FAQS = [
  {
    q: "What makes a good toddler bedtime story?",
    a: "Short sentences, warm repetition, one simple problem, and a quiet ending. Toddlers settle best when the last page is calmer than the first — not a cliffhanger.",
    category: "Stories & narration" as const,
  },
  {
    q: "How long should toddler bedtime reading take?",
    a: "About 5–15 minutes is plenty for ages 2–3. One or two short picture storybooks is usually better than one long book that keeps them wired.",
    category: "Stories & narration" as const,
  },
  {
    q: "Can MoonPage help when a parent can't read aloud every night?",
    a: "Yes. Every story can play by a professional narrator, or in a parent's own recorded voice saved on the device — helpful for travel nights, late work, or co-parenting.",
    category: "Stories & narration" as const,
  },
  {
    q: "Are these stories for babies too?",
    a: "MoonPage is built for ages 2+. For babies, start with voice, rhythm, and board-book style listening; see our baby bedtime guides, then move into toddler storybooks as attention grows.",
    category: "Getting started" as const,
  },
];

const RELATED_GUIDES = [
  { slug: "bedtime-stories-for-2-year-olds", label: "Bedtime stories for 2-year-olds" },
  { slug: "bedtime-stories-for-3-year-olds", label: "Bedtime stories for 3-year-olds" },
  { slug: "bedtime-routine-for-toddlers", label: "Toddler bedtime routine" },
  { slug: "read-aloud-to-toddlers", label: "How to read aloud to toddlers" },
  { slug: "toddler-wont-stay-in-bed", label: "Toddler won't stay in bed" },
] as const;

export default function ToddlerBedtimeStoriesPage() {
  const sample = [
    ...storiesByTag("bedtime"),
    ...storiesByTag("family"),
    ...storiesByTag("animals"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = hubJsonLd({
    path: "/toddler-bedtime-stories",
    name: "Toddler Bedtime Stories",
    faqs: FAQS,
    items: [
      { name: "All bedtime stories", url: `${SITE.domain}/stories` },
      {
        name: "Sleepy bedtime stories",
        url: `${SITE.domain}/collections/sleepy-bedtime-stories`,
      },
      {
        name: "Preschool bedtime stories",
        url: `${SITE.domain}/preschool-bedtime-stories`,
      },
      { name: "Cozy bedtime stories", url: `${SITE.domain}/cozy-bedtime-stories` },
      {
        name: "Read-aloud bedtime stories",
        url: `${SITE.domain}/read-aloud-bedtime-stories`,
      },
      {
        name: "Bedtime stories by age",
        url: `${SITE.domain}/bedtime-stories-by-age`,
      },
    ],
  });

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-5xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Toddler bedtime stories that settle, not stimulate
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Parents searching for toddler bedtime stories usually want the same
            thing: a short, cozy tale a two- or three-year-old can follow,
            without a wild plot that wakes them back up. MoonPage&apos;s toddler
            picture storybooks use simple language, gentle pacing, sleepy
            endings, and themes little kids understand — kindness, waiting,
            family, and animals.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Read aloud yourself, play calm narration, or record your own voice
            so they still hear Mom or Dad on nights you can&apos;t sit through
            every page. No ads, no login, and stories work offline once
            downloaded.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Sample toddler bedtime storybooks
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              A small shelf from {STORIES.length}+ sample titles — sleepy,
              animal, and family stories that fit ages 2–3.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
            <p className="mt-4 text-sm text-ink-muted sm:text-base">
              <Link
                href="/stories"
                className="font-semibold text-link underline hover:text-link-hover"
              >
                Browse all sample stories
              </Link>{" "}
              or start with{" "}
              <Link
                href="/collections/sleepy-bedtime-stories"
                className="font-medium text-link underline hover:text-link-hover"
              >
                sleepy bedtime stories
              </Link>
              .
            </p>
          </section>

          <section className="mt-10 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-12 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              What works for toddlers at bedtime
            </h2>
            <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>
                Keep story time to one or two short books — toddlers need
                predictability more than novelty at lights out.
              </li>
              <li>
                Choose cozy, sleepy endings. Save adventure and big laughs for
                daytime picture books.
              </li>
              <li>
                Slow your voice and soften volume on the last pages so the
                story itself becomes the wind-down cue.
              </li>
              <li>
                Pair stories with the same routine every night: bath, pajamas,
                story, lights out.
              </li>
            </ul>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Related bedtime hubs &amp; guides
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/preschool-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Preschool bedtime stories
              </Link>
              <Link
                href="/cozy-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Cozy bedtime tales
              </Link>
              <Link
                href="/read-aloud-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Read-aloud bedtime stories
              </Link>
              <Link
                href="/bedtime-stories-by-age"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Stories by age
              </Link>
              {RELATED_GUIDES.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
                >
                  {g.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Toddler bedtime FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="toddler_bedtime_stories"
            title="Free toddler bedtime stories tonight"
            body="Download MoonPage free, read free stories right away, and unlock the full toddler-and-preschool library with Premium. Narration by a professional, or in your own voice."
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
