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
import { storiesByTag } from "@/lib/stories";

export const metadata: Metadata = pageMetadata({
  path: "/cozy-bedtime-stories",
  title: "Cozy Bedtime Stories for a Calm, Quiet Wind-Down",
  description:
    "The coziest bedtime stories for kids — soft pacing, warm endings, lullaby-style picture books that make winding down the easiest part of the day.",
  keywords: [
    "cozy bedtime stories",
    "cozy bedtime tales",
    "kids sleepy stories",
    "sleepy bedtime stories",
    "cozy stories for children",
    "wind down bedtime stories",
    "calm bedtime tales",
    "cozy picture books",
  ],
});

const FAQS = [
  {
    q: "What is a cozy bedtime story?",
    a: "A story that settles instead of stimulating — warm scenes, soft language, gentle repetition, and an ending that feels like tucking in. Cozy tales are the opposite of adventure cliffhangers.",
    category: "Stories & narration" as const,
  },
  {
    q: "When should I choose a cozy story vs a daytime book?",
    a: "Save the funny, chase-y, or high-energy picture books for daytime. At bedtime, pick the quietest book last so the routine itself teaches kids that story time ends in sleep.",
    category: "Stories & narration" as const,
  },
  {
    q: "Do cozy stories work for toddlers and preschoolers?",
    a: "Yes. Toddlers need short cozy arcs; preschoolers can handle slightly more plot as long as the last pages stay calm. MoonPage writes for ages 2+ with sleepy endings in mind.",
    category: "Getting started" as const,
  },
];

export default function CozyBedtimeStoriesPage() {
  // Atmosphere / warm ending — snow & family first; avoid music so we don't
  // mirror the lullaby hub's rhythm-led sample.
  const sample = [
    ...storiesByTag("snow"),
    ...storiesByTag("family"),
    ...storiesByTag("garden"),
    ...storiesByTag("night"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = hubJsonLd({
    path: "/cozy-bedtime-stories",
    name: "Cozy Bedtime Stories",
    faqs: FAQS,
    items: [
      {
        name: "Sleepy bedtime stories",
        url: `${SITE.domain}/collections/sleepy-bedtime-stories`,
      },
      {
        name: "Lullaby bedtime stories",
        url: `${SITE.domain}/lullaby-bedtime-stories`,
      },
      {
        name: "A cozy bedroom for better sleep (guide)",
        url: `${SITE.domain}/guides/cozy-bedroom-for-better-sleep`,
      },
      {
        name: "What makes a good bedtime story (guide)",
        url: `${SITE.domain}/guides/what-makes-a-good-bedtime-story`,
      },
      {
        name: "Toddler bedtime stories",
        url: `${SITE.domain}/toddler-bedtime-stories`,
      },
      { name: "Bedtime stories", url: `${SITE.domain}/bedtime-stories` },
      {
        name: "Toddler bedtime stories",
        url: `${SITE.domain}/toddler-bedtime-stories`,
      },
      {
        name: "Preschool bedtime stories",
        url: `${SITE.domain}/preschool-bedtime-stories`,
      },
      {
        name: "Bedtime stories for babies",
        url: `${SITE.domain}/baby-bedtime-stories`,
      },
      {
        name: "Bedtime stories by age",
        url: `${SITE.domain}/bedtime-stories-by-age`,
      },
      {
        name: "Read-aloud bedtime stories",
        url: `${SITE.domain}/read-aloud-bedtime-stories`,
      },
      {
        name: "Short bedtime stories",
        url: `${SITE.domain}/short-bedtime-stories`,
      },
      {
        name: "Free bedtime stories",
        url: `${SITE.domain}/free-bedtime-stories`,
      },
      {
        name: "Bedtime stories for anxious kids",
        url: `${SITE.domain}/bedtime-stories-for-anxious-kids`,
      },
      {
        name: "Bedtime stories for siblings",
        url: `${SITE.domain}/bedtime-stories-for-siblings`,
      },
      {
        name: "Winter bedtime stories",
        url: `${SITE.domain}/winter-bedtime-stories`,
      },
      {
        name: "Goodnight bedtime stories",
        url: `${SITE.domain}/goodnight-bedtime-stories`,
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
            Cozy bedtime stories and sleepy tales for kids
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Cozy bedtime stories are the ones parents reach for when the day
            has been loud and everyone needs the room to get quiet. MoonPage
            collects sleepy, lullaby-style picture storybooks — soft pacing,
            warm scenes, and endings that feel like a blanket — for toddlers,
            preschoolers, and little kids ages 2+.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Browse cozy tales by theme, read them aloud, or play calm narration.
            Trusted by thousands of moms for calmer bedtime routines and cozy
            stories.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Sample cozy endings &amp; warm scenes
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              Snowy nights, family rituals, gardens, and quiet moonlight — stories
              chosen for how they end, not how loud they start.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
            <p className="mt-4 text-sm text-ink-muted sm:text-base">
              Prefer a full theme page? See{" "}
              <Link
                href="/collections/sleepy-bedtime-stories"
                className="font-semibold text-link underline hover:text-link-hover"
              >
                sleepy bedtime stories
              </Link>{" "}
              and{" "}
              <Link
                href="/lullaby-bedtime-stories"
                className="font-medium text-link underline hover:text-link-hover"
              >
                lullaby bedtime stories
              </Link>
              .
            </p>
          </section>

          <section className="mt-10 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-12 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              How to use cozy tales in a bedtime routine
            </h2>
            <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>Dim lights before you open the book so the mood matches the story.</li>
              <li>Read slower and quieter page by page — the last spread should be nearly a whisper.</li>
              <li>Let your child choose among two cozy options, not the whole shelf.</li>
              <li>Keep the same order every night so cozy story time becomes the sleep cue.</li>
            </ul>
            <p className="mt-4 text-sm text-ink-muted sm:text-base">
              More practical help in{" "}
              <Link
                href="/guides/cozy-bedroom-for-better-sleep"
                className="font-medium text-link underline hover:text-link-hover"
              >
                making a cozy bedroom for sleep
              </Link>{" "}
              and{" "}
              <Link
                href="/guides/what-makes-a-good-bedtime-story"
                className="font-medium text-link underline hover:text-link-hover"
              >
                what makes a good bedtime story
              </Link>
              .
            </p>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              What makes a bedtime story feel cozy
            </h2>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              Cozy bedtime stories share a few quiet habits: short, predictable
              sentences; warm, low-contrast scenes; gentle repetition a child
              can half-say along with you; and an ending that returns the
              character safely to bed. They avoid cliffhangers, sudden scares,
              and anything that spikes energy right before sleep. Every cozy
              tale on MoonPage is written for ages 2+ with a sleepy ending in
              mind, and you can hear the calm in the narration or record the
              story in your own voice.
            </p>
            <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>Soft pacing — slow, calm page turns, no rushing plot.</li>
              <li>Warm, quiet scenes — lamplight, beds, familiar rooms.</li>
              <li>A safe, tucked-in ending the child can see coming.</li>
              <li>Repetition you can whisper, not a twist you have to explain.</li>
            </ul>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Cozy bedtime stories by age
            </h2>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              The right cozy story changes as your child grows. Toddlers do best
              with very short, repetitive arcs; preschoolers can follow a little
              more plot as long as the last pages stay calm; babies need the
              shortest, singsong-simplest versions. Pick by age to keep the
              wind-down matched to attention span:
            </p>
            <p className="mt-3 text-sm text-ink-muted sm:text-base">
              <Link
                href="/toddler-bedtime-stories"
                className="font-medium text-link underline hover:text-link-hover"
                title="Cozy bedtime stories for toddlers"
              >
                cozy bedtime stories for toddlers
              </Link>
              ,{" "}
              <Link
                href="/preschool-bedtime-stories"
                className="font-medium text-link underline hover:text-link-hover"
                title="Cozy bedtime stories for preschoolers"
              >
                cozy bedtime stories for preschoolers
              </Link>
              , and{" "}
              <Link
                href="/baby-bedtime-stories"
                className="font-medium text-link underline hover:text-link-hover"
                title="Cozy bedtime stories for babies"
              >
                cozy bedtime stories for babies
              </Link>
              . See the full{" "}
              <Link
                href="/bedtime-stories-by-age"
                className="font-medium text-link underline hover:text-link-hover"
                title="Bedtime stories by age"
              >
                bedtime stories by age
              </Link>{" "}
              index.
            </p>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Short and free cozy stories for tired nights
            </h2>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              Some nights there&apos;s no energy left for a long book. That&apos;s
              when the shortest cozy tales earn their place — and because
              MoonPage is free to start, you can keep a small shelf of calm{" "}
              <Link
                href="/read-aloud-bedtime-stories"
                className="font-medium text-link underline hover:text-link-hover"
                title="Read-aloud cozy bedtime stories"
              >
                read-aloud cozy bedtime stories
              </Link>{" "}
              ready without buying a new book each week.
            </p>
            <p className="mt-3 text-sm text-ink-muted sm:text-base">
              Browse{" "}
              <Link
                href="/short-bedtime-stories"
                className="font-medium text-link underline hover:text-link-hover"
                title="Short cozy bedtime stories"
              >
                short cozy bedtime stories
              </Link>{" "}
              and{" "}
              <Link
                href="/free-bedtime-stories"
                className="font-medium text-link underline hover:text-link-hover"
                title="Free cozy bedtime stories"
              >
                free cozy bedtime stories
              </Link>{" "}
              for the nights that need the lightest touch.
            </p>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Cozy stories for specific moods
            </h2>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              Cozy doesn&apos;t mean same. A nervous child needs a reassuring
              story; two siblings sharing a room need one that fits both; a cold
              winter night asks for snow and lamplight. Match the mood:
            </p>
            <p className="mt-3 text-sm text-ink-muted sm:text-base">
              <Link
                href="/bedtime-stories-for-anxious-kids"
                className="font-medium text-link underline hover:text-link-hover"
                title="Cozy bedtime stories for anxious kids"
              >
                cozy bedtime stories for anxious kids
              </Link>
              ,{" "}
              <Link
                href="/bedtime-stories-for-siblings"
                className="font-medium text-link underline hover:text-link-hover"
                title="Cozy bedtime stories for siblings"
              >
                cozy bedtime stories for siblings
              </Link>
              ,{" "}
              <Link
                href="/winter-bedtime-stories"
                className="font-medium text-link underline hover:text-link-hover"
                title="Winter cozy bedtime stories"
              >
                winter cozy bedtime stories
              </Link>
              , and{" "}
              <Link
                href="/lullaby-bedtime-stories"
                className="font-medium text-link underline hover:text-link-hover"
                title="Lullaby bedtime stories"
              >
                lullaby bedtime stories
              </Link>
              .
            </p>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              More cozy hubs
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/lullaby-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Lullaby bedtime stories
              </Link>
              <Link
                href="/goodnight-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Goodnight bedtime stories
              </Link>
              <Link
                href="/toddler-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Toddler bedtime stories
              </Link>
              <Link
                href="/bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                All bedtime stories
              </Link>
            </div>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Cozy bedtime FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="cozy_bedtime_stories"
            title="Open a cozy story tonight"
            body="MoonPage is free to download — original cozy bedtime tales with narration, own-voice recording, and offline reading for kids ages 2+."
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
