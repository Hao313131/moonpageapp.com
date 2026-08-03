import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackHomeLink } from "@/components/BackLink";
import { FaqList } from "@/components/FaqList";
import { SampleShelfNotice } from "@/components/SampleShelfNotice";
import { SeoHubCta } from "@/components/SeoHubCta";
import { StoryGrid } from "@/components/StoryGrid";
import { hubJsonLd, pageMetadata } from "@/lib/site";
import { storiesByTag } from "@/lib/stories";

export const metadata: Metadata = pageMetadata({
  path: "/cozy-bedtime-stories",
  title: "Cozy Bedtime Stories for Kids",
  description:
    "Cozy bedtime stories and sleepy tales for kids, toddlers, and preschoolers — soft pacing, warm endings, and lullaby-style picture storybooks for a calm bedtime routine.",
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
