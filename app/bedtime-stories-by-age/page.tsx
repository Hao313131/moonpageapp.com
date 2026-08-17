import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { HubFaq } from "@/components/HubFaq";
import { Footer } from "@/components/Footer";
import { BackHomeLink } from "@/components/BackLink";
import { StoreButtons } from "@/components/StoreButtons";
import { SITE, hubJsonLd, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/bedtime-stories-by-age",
  title: "Bedtime Stories by Age: Ages 2–3, 4–5 and 6–7",
  description:
    "How long a bedtime story should be, what kind of book works, and how much sleep children need — in three age bands, from two-year-olds through to seven-year-olds.",
  keywords: [
    "bedtime stories by age",
    "bedtime stories for 2 year olds",
    "bedtime stories for 3 year olds",
    "bedtime stories for 4 year olds",
    "bedtime stories for 5 year olds",
    "bedtime stories for 6 year olds",
    "bedtime stories for 7 year olds",
    "how long should a bedtime story be",
  ],
});

/**
 * The hub for the age-series guides, in three bands rather than one card per
 * year — the advice genuinely changes at those boundaries, and a band keeps
 * each card substantial instead of six near-identical ones. Each band links
 * out to the per-year guides underneath it.
 */
const AGE_BANDS = [
  {
    band: "Ages 2–3",
    length: "5–15 minutes",
    sleep: "10–14 hours per day, including naps",
    what: "This is where reading goes from naming things to following a story. At two it's short board books, one or two sentences a spread, concrete nouns they can point at, and a repeating line they can join in with — expect constant interruption, because the talk around the book is most of the value. By three they can hold a real plot: a small character wants something, tries, and gets there. Keep the problem domestic; three-year-olds have the comprehension for tension and not the regulation to shake it off at lights out.",
    guides: [
      { slug: "bedtime-stories-for-2-year-olds", label: "Full guide: age 2" },
      { slug: "bedtime-stories-for-3-year-olds", label: "Full guide: age 3" },
    ],
  },
  {
    band: "Ages 4–5",
    length: "10–20 minutes",
    sleep: "10–13 hours per day",
    what: "Longer picture books with side characters and jokes that need setup, plus the first illustrated chapter books read a chapter at a time — stop at a calm moment rather than a cliffhanger. This is also when children start arguing with the ending, asking big questions at lights out, and, around five, learning to read at school. Keep decoding practice in the daytime and leave bedtime as reading they simply enjoy.",
    guides: [
      { slug: "bedtime-stories-for-4-year-olds", label: "Full guide: age 4" },
      {
        slug: "bedtime-stories-for-5-year-olds",
        label: "Full guide: ages 5–6",
      },
    ],
  },
  {
    band: "Ages 6–7",
    length: "15–20 minutes",
    sleep: "9–12 hours per night",
    what: "The age reading aloud usually stops, and the age it's most worth keeping — listening comprehension stays years ahead of reading ability, so this is where a child meets stories, vocabulary, and sentences they can't yet decode alone. Alternate who reads, keep the last book calm, and expect the day's worries to arrive at lights out now that school is in the mix.",
    guides: [{ slug: "school-age-bedtime", label: "Full guide: ages 6–9" }],
  },
] as const;

export default function BedtimeStoriesByAgePage() {
  const jsonLd = hubJsonLd({
    path: "/bedtime-stories-by-age",
    name: "Bedtime Stories by Age",
    items: [
      {
        name: "Bedtime stories for babies (guide)",
        url: `${SITE.domain}/guides/bedtime-stories-for-babies`,
      },
      {
        name: "Bedtime stories for 2-year-olds (guide)",
        url: `${SITE.domain}/guides/bedtime-stories-for-2-year-olds`,
      },
      {
        name: "Bedtime stories for 3-year-olds (guide)",
        url: `${SITE.domain}/guides/bedtime-stories-for-3-year-olds`,
      },
      {
        name: "Bedtime stories for 4-year-olds (guide)",
        url: `${SITE.domain}/guides/bedtime-stories-for-4-year-olds`,
      },
      {
        name: "Bedtime stories for 5–6-year-olds (guide)",
        url: `${SITE.domain}/guides/bedtime-stories-for-5-year-olds`,
      },
      {
        name: "Bedtime for school-age children (guide)",
        url: `${SITE.domain}/guides/school-age-bedtime`,
      },
      {
        name: "What makes a good bedtime story (guide)",
        url: `${SITE.domain}/guides/what-makes-a-good-bedtime-story`,
      },
      {
        name: "How long to read at bedtime (guide)",
        url: `${SITE.domain}/guides/how-long-to-read-at-bedtime`,
      },
      {
        name: "Building a bedtime routine (guide)",
        url: `${SITE.domain}/guides/bedtime-routine-for-toddlers`,
      },
    ],
  });

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-4xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Bedtime stories by age
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted sm:mt-4 sm:text-base">
            What holds a child&apos;s attention at bedtime changes fast between
            two and seven — the length, the kind of plot, and how much of the
            reading they want to do themselves. Here&apos;s the short version
            for each stage, with the full guides behind it.
          </p>

          <div className="mt-8 space-y-4 sm:mt-12 sm:space-y-5">
            {AGE_BANDS.map((entry) => (
              <div
                key={entry.band}
                className="flex min-w-0 flex-col rounded-2xl border border-wood/20 bg-paper p-5 sm:rounded-3xl sm:p-6 md:p-8"
              >
                <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
                  {entry.band}
                </h2>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
                  {entry.what}
                </p>
                <dl className="mt-4 space-y-1 text-sm text-ink-muted">
                  <div className="flex flex-wrap gap-x-2">
                    <dt className="font-semibold text-ink">Story length</dt>
                    <dd>{entry.length}</dd>
                  </div>
                  <div className="flex flex-wrap gap-x-2">
                    <dt className="font-semibold text-ink">Sleep needed</dt>
                    <dd>{entry.sleep}</dd>
                  </div>
                </dl>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {entry.guides.map((g) => (
                    <Link
                      key={g.slug}
                      href={`/guides/${g.slug}`}
                      className="text-sm font-semibold text-link underline hover:text-link-hover"
                    >
                      {g.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
            Younger or older than that? There&apos;s a separate guide on{" "}
            <Link
              href="/guides/bedtime-stories-for-babies"
              className="font-medium text-link underline hover:text-link-hover"
            >
              bedtime stories for babies
            </Link>{" "}
            and one on{" "}
            <Link
              href="/guides/school-age-bedtime"
              className="font-medium text-link underline hover:text-link-hover"
            >
              bedtime for school-age children up to nine
            </Link>
            .
          </p>

          <section className="mt-10 sm:mt-14">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl md:text-2xl">
              What doesn&apos;t change with age
            </h2>
            <ul className="mt-4 max-w-prose list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>
                The last story of the night should be the calmest one. Exciting
                books are daytime books at every age.
              </li>
              <li>
                Decide the number of books before you start, and let your child
                choose which ones.
              </li>
              <li>
                Read slower and quieter as the book goes on — by the last page
                you should be close to a whisper.
              </li>
              <li>
                Keep the order of the routine identical. Young children
                can&apos;t read a clock, so the sequence is the clock.
              </li>
            </ul>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              More on all of this in{" "}
              <Link
                href="/guides/what-makes-a-good-bedtime-story"
                className="font-medium text-link underline hover:text-link-hover"
              >
                what makes a good bedtime story
              </Link>
              ,{" "}
              <Link
                href="/guides/how-long-to-read-at-bedtime"
                className="font-medium text-link underline hover:text-link-hover"
              >
                how long bedtime reading should take
              </Link>
              , and{" "}
              <Link
                href="/guides/bedtime-routine-for-toddlers"
                className="font-medium text-link underline hover:text-link-hover"
              >
                building a bedtime routine that holds
              </Link>
              .
            </p>
          </section>

          <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl bg-paper p-6 text-center sm:mt-16 sm:gap-4 sm:rounded-3xl sm:p-10">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Stories written for ages 2+
            </h2>
            <p className="max-w-md text-sm text-ink-muted sm:text-base">
              MoonPage&apos;s illustrated bedtime stories are short, calm, and
              built to end the day — read them aloud yourself, play the
              professional narration, or record them in your own voice. No ads,
              no login, works offline.
            </p>
            <StoreButtons
              campaign="bedtime_stories_by_age"
              className="justify-center"
            />
          </div>
        </div>
      <HubFaq path="/bedtime-stories-by-age" />
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
