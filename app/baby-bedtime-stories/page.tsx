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
  path: "/baby-bedtime-stories",
  title: "Baby Bedtime Stories: What to Read Before Age 2",
  description:
    "What to read to a baby at bedtime, how long it should take, and when picture stories start to land. Written for the 0–24 month stretch.",
  keywords: [
    "baby bedtime stories",
    "bedtime stories for babies",
    "stories for babies",
    "baby bedtime routine stories",
    "what to read to a baby",
    "reading to a newborn at bedtime",
    "board books for bedtime",
    "stories for 1 year olds",
  ],
});

const FAQS = [
  {
    q: "What age is MoonPage for?",
    a: "MoonPage is built for children ages 2 and up — that is the age where an illustrated story with a plot starts doing real work. Below two, the same bedtime routine matters but the story part works differently, which is what this page covers.",
    category: "Getting started" as const,
  },
  {
    q: "When should I start reading to a baby?",
    a: "Earlier than most parents expect. There is no minimum age — a newborn gets rhythm and voice long before meaning. The practical start is whenever you want a bedtime routine, even if the \"story\" is one board book held open for thirty seconds.",
    category: "Getting started" as const,
  },
  {
    q: "How long should a baby's bedtime story be?",
    a: "Under a minute at first. The story is the signal that the day is ending, not the entertainment — a baby who is done after one page has still had the routine. Length grows on its own once they start pointing at pictures.",
    category: "Stories & narration" as const,
  },
  {
    q: "Do board books matter, or can I read from a screen?",
    a: "For this age, physical books are doing something a screen can't: they get grabbed, chewed, and turned by the baby, which is the beginning of handling a book. Keep board books for the hands-on part and use an app later, once the child is following a story rather than a texture.",
    category: "Devices & offline" as const,
  },
];

const RELATED_GUIDES = [
  { slug: "when-to-start-reading-to-a-baby", label: "When to start reading to a baby" },
  { slug: "bedtime-stories-for-babies", label: "Bedtime stories for babies" },
  { slug: "lullabies-for-babies-and-toddlers", label: "Lullabies that work" },
  { slug: "sleep-regressions-by-age", label: "Sleep regressions by age" },
  { slug: "teething-and-sleep", label: "Teething and sleep" },
] as const;

/**
 * This page has a scope trap and the copy has to be explicit about it: the
 * product is for ages 2+, but "baby bedtime stories" is a large, genuine query
 * cluster. The honest way to serve it is to answer the question properly for
 * the 0–24 month stretch — what actually works, how long, when stories with
 * plots start landing — and to say plainly that MoonPage's own shelf begins at
 * two. That earns the page its place in the results; claiming the app is for
 * babies would not survive the first disappointed download.
 */
export default function BabyBedtimeStoriesPage() {
  const sample = [
    ...storiesByTag("bedtime"),
    ...storiesByTag("night"),
    ...storiesByTag("family"),
    ...storiesByTag("animals"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = hubJsonLd({
    path: "/baby-bedtime-stories",
    name: "Baby Bedtime Stories",
    faqs: FAQS,
    items: [
      { name: "Lullaby bedtime stories", url: `${SITE.domain}/lullaby-bedtime-stories` },
      { name: "Toddler bedtime stories", url: `${SITE.domain}/toddler-bedtime-stories` },
      { name: "Sleep stories for kids", url: `${SITE.domain}/sleep-stories-for-kids` },
      { name: "Bedtime stories by age", url: `${SITE.domain}/bedtime-stories-by-age` },
    ],
  });

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-5xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Baby bedtime stories: what to read before age two
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Reading to a baby looks like nothing much: thirty seconds of a board
            book, a page chewed instead of turned, a voice doing the same three
            lines it did last night. It is not nothing. What a baby is taking in
            at bedtime is rhythm, tone, and the fact that this happens every
            night — meaning arrives much later, and it arrives because the
            routine came first.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            One thing to say plainly before the rest:{" "}
            <span className="font-semibold text-ink">
              MoonPage&apos;s library starts at age two
            </span>
            , because that is when an illustrated story with a plot begins to
            work. This page covers the stretch before that — what to read, for
            how long, and what changes at each stage.
          </p>

          <section className="mt-8 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-10 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              What works at each stage
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[38rem] border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-wood/30">
                    <th className="py-2 pr-4 font-display font-semibold text-ink">
                      Age
                    </th>
                    <th className="py-2 pr-4 font-display font-semibold text-ink">
                      What they get from it
                    </th>
                    <th className="py-2 pr-4 font-display font-semibold text-ink">
                      What to read
                    </th>
                    <th className="py-2 font-display font-semibold text-ink">
                      How long
                    </th>
                  </tr>
                </thead>
                <tbody className="text-ink-muted">
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">0–3 months</td>
                    <td className="py-2 pr-4">Your voice, the rhythm of speech</td>
                    <td className="py-2 pr-4">Anything read slowly and quietly</td>
                    <td className="py-2">30 seconds to a minute</td>
                  </tr>
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">3–6 months</td>
                    <td className="py-2 pr-4">High-contrast shapes, faces</td>
                    <td className="py-2 pr-4">Board books, one image per page</td>
                    <td className="py-2">1–2 minutes</td>
                  </tr>
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">6–12 months</td>
                    <td className="py-2 pr-4">Holding, grabbing, turning pages</td>
                    <td className="py-2 pr-4">Sturdy books they can handle</td>
                    <td className="py-2">2–3 minutes</td>
                  </tr>
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">12–18 months</td>
                    <td className="py-2 pr-4">Naming, pointing, repetition</td>
                    <td className="py-2 pr-4">The same book, over and over</td>
                    <td className="py-2">3–5 minutes</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-ink">18–24 months</td>
                    <td className="py-2 pr-4">Simple sequences, a small story</td>
                    <td className="py-2 pr-4">Short illustrated stories begin to land</td>
                    <td className="py-2">5 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              The row that surprises parents is 12–18 months. Reading the same
              book forty nights in a row is not a phase to be broken up — the
              repetition is what the child is using to learn the book. Rotating
              in something new because you are bored is the more common mistake.
            </p>
          </section>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Where the shelf picks up at two
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              {STORIES.length} sample titles from the app — the point where a
              baby&apos;s bedtime becomes a story&apos;s bedtime.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Building the routine before the stories
            </h2>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>
                <span className="font-semibold text-ink">
                  Pick the order now, keep it forever.
                </span>{" "}
                Bath, bottle, book, bed — the specific steps matter less than
                that they never change. The routine is the message; the book is
                just the loudest part of it.{" "}
                <Link
                  href="/bedtime-routine-chart"
                  className="font-medium text-link underline hover:text-link-hover"
                >
                  The bedtime routine chart
                </Link>{" "}
                lays the same sequence out age by age.
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Sing as much as you read.
                </span>{" "}
                Before words carry meaning, melody does. A lullaby and a board
                book are doing the same job with different tools — see{" "}
                <Link
                  href="/guides/lullabies-for-babies-and-toddlers"
                  className="font-medium text-link underline hover:text-link-hover"
                >
                  lullabies that work
                </Link>
                .
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Don&apos;t chase attention you don&apos;t have.
                </span>{" "}
                A baby who turns away after one page has finished the story.
                Pressing on because the book has more pages is how reading
                becomes something to resist.
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Expect it to break at the usual points.
                </span>{" "}
                Four-month, eight-month, and eighteen-month sleep changes will
                interrupt whatever you build. The routine is what you return to
                — see{" "}
                <Link
                  href="/guides/sleep-regressions-by-age"
                  className="font-medium text-link underline hover:text-link-hover"
                >
                  sleep regressions by age
                </Link>
                .
              </li>
            </ul>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Related hubs &amp; guides
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
                href="/sleep-stories-for-kids"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Sleep stories for kids
              </Link>
              <Link
                href="/bedtime-routine-chart"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Bedtime routine chart
              </Link>
              <Link
                href="/bedtime-stories-by-age"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Bedtime stories by age
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
              Baby bedtime stories FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="baby_bedtime_stories"
            title="Ready when they turn two"
            body="Download is free and some stories are free to read now. MoonPage's illustrated library starts at age 2 — with narration, and the option to record your own voice."
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
