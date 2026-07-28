import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackHomeLink } from "@/components/BackLink";
import { StoreButtons } from "@/components/StoreButtons";
import { SITE, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/bedtime-stories-by-age",
  title: "Bedtime Stories by Age: What to Read from Baby to 9",
  description:
    "How long a bedtime story should be, what kind of book works, and how much sleep children need — age by age, from babies through to nine-year-olds.",
  keywords: [
    "bedtime stories by age",
    "bedtime stories for babies",
    "bedtime stories for 2 year olds",
    "bedtime stories for 3 year olds",
    "bedtime stories for 4 year olds",
    "bedtime stories for 5 year olds",
    "how long should a bedtime story be",
  ],
});

/**
 * The hub for the age-series guides. It exists to rank for "bedtime stories
 * for a X-year-old" as a set, and to give the four guides a parent page that
 * isn't the general /guides index.
 */
const AGES = [
  {
    slug: "bedtime-stories-for-babies",
    age: "Under 2",
    length: "2–3 minutes",
    sleep: "11–14 hours per day, including naps",
    what: "Barely a story — a signal. One short board book or the same rhyme twice, in the same position every evening. Rhythm and familiarity are what a baby tracks, not meaning, and the routine is much easier to build now than at two.",
  },
  {
    slug: "bedtime-stories-for-2-year-olds",
    age: "Age 2",
    length: "5–10 minutes",
    sleep: "11–14 hours per day, including naps",
    what: "Short board books with one or two sentences a page, concrete nouns they can point at, and a repeating line they can join in with. Expect interruptions — the talk around the book is most of the value at two.",
  },
  {
    slug: "bedtime-stories-for-3-year-olds",
    age: "Age 3",
    length: "10–15 minutes",
    sleep: "10–13 hours per day, including any nap",
    what: "Real plots for the first time: a small character wants something, tries, and gets there. Keep the problem domestic — three-year-olds have the comprehension for tension and not the regulation to shake it off at lights out.",
  },
  {
    slug: "bedtime-stories-for-4-year-olds",
    age: "Age 4",
    length: "10–15 minutes",
    sleep: "10–13 hours per day",
    what: "Longer picture books with side characters and jokes that need setup, plus first illustrated chapter books a chapter at a time. Stop at a calm moment rather than a cliffhanger.",
  },
  {
    slug: "bedtime-stories-for-5-year-olds",
    age: "Ages 5–6",
    length: "15–20 minutes",
    sleep: "9–12 hours per day",
    what: "Read above their reading level on purpose — illustrated chapter books, folk tales, short story collections. Keep school reading practice in the daytime and leave bedtime as reading they simply enjoy.",
  },
  {
    slug: "school-age-bedtime",
    age: "Ages 6–9",
    length: "15–20 minutes",
    sleep: "9–12 hours per night",
    what: "Keep reading aloud — this is the age it usually stops, and listening comprehension is still years ahead of reading ability. Alternate who reads, and expect the day's worries to arrive at lights out.",
  },
] as const;

export default function BedtimeStoriesByAgePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bedtime Stories by Age",
        item: `${SITE.domain}/bedtime-stories-by-age`,
      },
    ],
  };

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
            the first year and school age — the length, the kind of plot, and
            how much of the reading they want to do themselves. Here&apos;s the
            short version for each age, with a full guide behind every one.
          </p>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
            {AGES.map((entry) => (
              <div
                key={entry.slug}
                className="flex min-w-0 flex-col rounded-2xl border border-wood/20 bg-paper p-5 sm:rounded-3xl sm:p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">
                  {entry.age}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {entry.what}
                </p>
                <dl className="mt-4 space-y-1 text-sm text-ink-muted">
                  <div className="flex gap-2">
                    <dt className="font-semibold text-ink">Story length</dt>
                    <dd>{entry.length}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-ink">Sleep needed</dt>
                    <dd>{entry.sleep}</dd>
                  </div>
                </dl>
                <Link
                  href={`/guides/${entry.slug}`}
                  className="mt-4 text-sm font-semibold text-link underline hover:text-link-hover"
                >
                  Read the full guide
                </Link>
              </div>
            ))}
          </div>

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
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
