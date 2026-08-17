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
  path: "/preschool-bedtime-stories",
  title: "Preschool Bedtime Stories (Ages 3–5)",
  description:
    "Preschool bedtime stories and illustrated picture storybooks for ages 3–5 with calm read-aloud narration, cozy themes, and parent-friendly wind-down routines.",
  keywords: [
    "preschool bedtime stories",
    "bedtime stories for preschoolers",
    "preschool picture storybooks",
    "children bedtime story app",
    "narrated bedtime stories for preschoolers",
    "kids bedtime routine stories",
    "picture books for preschool",
  ],
});

const FAQS = [
  {
    q: "How are preschool bedtime stories different from toddler ones?",
    a: "Preschoolers (roughly 3–5) can follow a longer plot, side characters, and gentle jokes — but bedtime still needs a calm ending. MoonPage keeps curiosity without the cliffhangers that delay sleep.",
    category: "Stories & narration" as const,
  },
  {
    q: "How long should preschool bedtime reading be?",
    a: "About 10–20 minutes works for most preschoolers. Two picture storybooks, or one slightly longer book ending on a quiet note, is a solid default.",
    category: "Stories & narration" as const,
  },
  {
    q: "Do preschoolers need narration or parent reading?",
    a: "Both help. Live read-aloud builds connection; professional narration or a recorded parent voice covers busy nights, travel, and shared-custody evenings without dropping the routine.",
    category: "Stories & narration" as const,
  },
  {
    q: "Can MoonPage replace screen time before bed?",
    a: "It's built as a wind-down alternative: full-screen story reading, no ads, no feed, and pacing meant to settle — not stimulate — before sleep.",
    category: "Getting started" as const,
  },
];

const RELATED_GUIDES = [
  { slug: "bedtime-stories-for-4-year-olds", label: "Stories for 4-year-olds" },
  { slug: "bedtime-stories-for-5-year-olds", label: "Stories for 5–6 year olds" },
  { slug: "starting-preschool-and-sleep", label: "Starting preschool & sleep" },
  { slug: "why-picture-books-matter", label: "Why picture books matter" },
  { slug: "choosing-bedtime-books", label: "Choosing bedtime books" },
] as const;

export default function PreschoolBedtimeStoriesPage() {
  const sample = [
    ...storiesByTag("curiosity"),
    ...storiesByTag("friendship"),
    ...storiesByTag("kindness"),
    ...storiesByTag("bedtime"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = hubJsonLd({
    path: "/preschool-bedtime-stories",
    name: "Preschool Bedtime Stories",
    faqs: FAQS,
    items: [
      { name: "All bedtime stories", url: `${SITE.domain}/stories` },
      { name: "Collections", url: `${SITE.domain}/collections` },
      {
        name: "Toddler bedtime stories",
        url: `${SITE.domain}/toddler-bedtime-stories`,
      },
      {
        name: "Picture books for kids",
        url: `${SITE.domain}/picture-books-for-kids`,
      },
      {
        name: "Read-aloud bedtime stories",
        url: `${SITE.domain}/read-aloud-bedtime-stories`,
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
            Preschool bedtime stories for ages 3–5
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Preschool bedtime stories have to do two jobs at once: hold a
            curious child&apos;s attention and still lead them toward sleep.
            MoonPage&apos;s picture storybooks balance gentle adventure with
            cozy endings — friendship, kindness, courage, and big feelings —
            so story time stays interesting without winding kids up.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Parents can read aloud, play narration by a professional, or record
            their own voice. The library is built for kids ages 2+, with themes
            preschoolers ask for night after night.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Sample preschool picture storybooks
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              Curiosity, friendship, kindness, and sleepy tales from the{" "}
              {STORIES.length}-story sample shelf.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
            <p className="mt-4 text-sm text-ink-muted sm:text-base">
              Explore more in{" "}
              <Link
                href="/collections"
                className="font-semibold text-link underline hover:text-link-hover"
              >
                bedtime story collections
              </Link>{" "}
              or the full{" "}
              <Link
                href="/stories"
                className="font-medium text-link underline hover:text-link-hover"
              >
                sample shelf
              </Link>
              .
            </p>
          </section>

          <section className="mt-10 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-12 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Themes preschoolers ask for at bedtime
            </h2>
            <ul className="mt-3 grid gap-2 text-sm text-ink-muted sm:grid-cols-2 sm:text-base">
              <li>Friendship and first-day-of-preschool feelings</li>
              <li>Kindness, sharing, and noticing someone else</li>
              <li>Courage without scary cliffhangers</li>
              <li>Big feelings — waiting, frustration, shyness</li>
              <li>Animal characters they can point to and name</li>
              <li>Cozy sleepy endings that cue lights out</li>
            </ul>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Related hubs &amp; parenting guides
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/toddler-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Toddler bedtime stories
              </Link>
              <Link
                href="/picture-books-for-kids"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Picture books for kids
              </Link>
              <Link
                href="/read-aloud-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Read-aloud stories
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
              Preschool bedtime FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="preschool_bedtime_stories"
            title="Narration preschoolers actually use"
            body="Download free. Every story can play by a professional narrator or in your own recorded voice — calm pacing for kids ages 2+."
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
