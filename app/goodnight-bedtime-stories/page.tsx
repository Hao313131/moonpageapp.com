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
  path: "/goodnight-bedtime-stories",
  title: "Goodnight Stories for Kids: A Calm End to the Day",
  description:
    "Gentle goodnight stories for kids — the kiss, the tuck-in, and a story that ends in sleep. Read aloud or play calm narration; free to start.",
  keywords: [
    "goodnight stories",
    "goodnight stories for kids",
    "good night bedtime stories",
    "bedtime goodnight stories",
    "goodnight book for kids",
    "calm goodnight tales",
    "say goodnight story",
    "kids sleep stories",
  ],
});

const FAQS = [
  {
    q: "What is a goodnight story?",
    a: "A story built around the ritual of ending the day: saying goodnight to the room, the toys, the moon; a kiss; then sleep. It mirrors the real routine so the book becomes part of the wind-down rather than a separate event.",
    category: "Stories & narration" as const,
  },
  {
    q: "Are goodnight stories different from bedtime stories?",
    a: "They overlap. “Bedtime” is the whole moment; “goodnight” leans on the tuck-in ritual and the act of saying goodnight. MoonPage's calm tales fit both — this page gathers the ones that end with a clear goodnight.",
    category: "Stories & narration" as const,
  },
  {
    q: "What age are goodnight stories for?",
    a: "Toddlers love the repetition of saying goodnight to things; preschoolers enjoy spotting what gets said goodnight to next; babies do best with the shortest, singsong-simplest versions. MoonPage writes for ages 2+.",
    category: "Getting started" as const,
  },
  {
    q: "How do I make goodnight stick as the sleep cue?",
    a: "Same order every night: story, kiss, lights. The predictability is what makes “goodnight” mean sleep instead of “one more.” The bedtime routine guide walks through the full sequence.",
    category: "Getting started" as const,
  },
];

export default function GoodnightBedtimeStoriesPage() {
  // Night / family / snow / bedtime — the tales whose endings are literally a
  // goodnight. Distinct from cozy's snow/family/garden mix by leading on "night".
  const sample = [
    ...storiesByTag("night"),
    ...storiesByTag("family"),
    ...storiesByTag("snow"),
    ...storiesByTag("bedtime"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = hubJsonLd({
    path: "/goodnight-bedtime-stories",
    name: "Goodnight Bedtime Stories",
    faqs: FAQS,
    items: [
      {
        name: "Bedtime stories",
        url: `${SITE.domain}/bedtime-stories`,
      },
      {
        name: "Cozy bedtime stories",
        url: `${SITE.domain}/cozy-bedtime-stories`,
      },
      {
        name: "Lullaby bedtime stories",
        url: `${SITE.domain}/lullaby-bedtime-stories`,
      },
      {
        name: "Sleep stories for kids",
        url: `${SITE.domain}/sleep-stories-for-kids`,
      },
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
        name: "Short bedtime stories",
        url: `${SITE.domain}/short-bedtime-stories`,
      },
      {
        name: "Free bedtime stories",
        url: `${SITE.domain}/free-bedtime-stories`,
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
            Goodnight stories for kids — a calm end to the day
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            A goodnight story is the last step of the day made into a ritual:
            the kiss, the tuck-in, the room gone quiet. MoonPage collects
            gentle tales that end with a clear goodnight — soft pacing, warm
            scenes, and a closing line that tells a child sleep is next. For
            toddlers, preschoolers, and little kids ages 2+.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Read them aloud, or play the calm narration when you have nothing
            left to give. Some stories are free to start tonight — no account,
            no ads, no card.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Goodnight tales to read tonight
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              Stories chosen because they end with sleep, not a cliffhanger.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              What makes a goodnight story
            </h2>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              A goodnight story leans on the ritual itself so the book and the
              real routine become the same thing. The marks of one:
            </p>
            <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>Saying goodnight to things — the room, the toys, the moon.</li>
              <li>A kiss or a tuck-in written into the last pages.</li>
              <li>A closing line that names sleep, not a twist to explain.</li>
              <li>Repetition a child can half-say along with you, eyes already closing.</li>
            </ul>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Goodnight stories by age
            </h2>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              The right goodnight story changes as your child grows. Pick by
              age so the wind-down matches attention span:
            </p>
            <p className="mt-3 text-sm text-ink-muted sm:text-base">
              <Link
                href="/toddler-bedtime-stories"
                className="font-medium text-link underline hover:text-link-hover"
                title="Goodnight stories for toddlers"
              >
                goodnight stories for toddlers
              </Link>
              ,{" "}
              <Link
                href="/preschool-bedtime-stories"
                className="font-medium text-link underline hover:text-link-hover"
                title="Goodnight stories for preschoolers"
              >
                goodnight stories for preschoolers
              </Link>
              , and{" "}
              <Link
                href="/baby-bedtime-stories"
                className="font-medium text-link underline hover:text-link-hover"
                title="Goodnight stories for babies"
              >
                goodnight stories for babies
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
              Goodnight, lullaby, and cozy — how they differ
            </h2>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              Three quiet words, three slightly different jobs. Knowing which
              one your child needs tonight helps you pick faster:
            </p>
            <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>
                <span className="font-semibold text-ink">Goodnight</span> — the
                tuck-in ritual and saying goodnight.
              </li>
              <li>
                <span className="font-semibold text-ink">Lullaby</span> — sung,
                rhythm-led settling; see{" "}
                <Link
                  href="/lullaby-bedtime-stories"
                  className="font-medium text-link underline hover:text-link-hover"
                  title="Lullaby bedtime stories"
                >
                  lullaby bedtime stories
                </Link>
                .
              </li>
              <li>
                <span className="font-semibold text-ink">Cozy</span> — warm,
                low-energy scenes; see{" "}
                <Link
                  href="/cozy-bedtime-stories"
                  className="font-medium text-link underline hover:text-link-hover"
                  title="Cozy bedtime stories"
                >
                  cozy bedtime stories
                </Link>
                .
              </li>
              <li>
                <span className="font-semibold text-ink">Sleep stories</span> —
                the broadest, for any night; see{" "}
                <Link
                  href="/sleep-stories-for-kids"
                  className="font-medium text-link underline hover:text-link-hover"
                  title="Sleep stories for kids"
                >
                  sleep stories for kids
                </Link>
                .
              </li>
            </ul>
          </section>

          <section className="mt-10 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-12 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              A goodnight routine that ends in sleep
            </h2>
            <ol className="mt-3 space-y-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>
                <span className="font-semibold text-ink">1. Pick the story together.</span>{" "}
                Two options, not the whole shelf — an open choice is what turns
                five minutes into twenty.
              </li>
              <li>
                <span className="font-semibold text-ink">2. Say it out loud.</span>{" "}
                “One story, then goodnight.” Naming the end before you start
                makes the end unsurprising.
              </li>
              <li>
                <span className="font-semibold text-ink">3. Slow down on the last page.</span>{" "}
                Drop your pace as the story closes; it signals sleep better than
                the words.
              </li>
              <li>
                <span className="font-semibold text-ink">4. Kiss, lights, door — same order.</span>{" "}
                The repetition is what makes “goodnight” mean sleep.
              </li>
            </ol>
            <p className="mt-4 text-sm text-ink-muted sm:text-base">
              More on the full sequence in the{" "}
              <Link
                href="/guides/bedtime-routine-for-toddlers"
                className="font-medium text-link underline hover:text-link-hover"
              >
                bedtime routine guide
              </Link>
              .
            </p>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              More goodnight hubs
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/cozy-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Cozy bedtime stories
              </Link>
              <Link
                href="/lullaby-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Lullaby bedtime stories
              </Link>
              <Link
                href="/sleep-stories-for-kids"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Sleep stories for kids
              </Link>
              <Link
                href="/toddler-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Toddler bedtime stories
              </Link>
              <Link
                href="/bedtime-stories-by-age"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Bedtime stories by age
              </Link>
              <Link
                href="/short-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Short bedtime stories
              </Link>
              <Link
                href="/free-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Free bedtime stories
              </Link>
              <Link
                href="/read-aloud-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Read-aloud bedtime stories
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
              Goodnight stories FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="goodnight_bedtime_stories"
            title="Read a goodnight story tonight"
            body="MoonPage is free to download — gentle goodnight tales with narration, own-voice recording, and offline reading for kids ages 2+."
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
