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
  path: "/sleep-stories-for-kids",
  title: "Sleep Stories for Kids: Calm Bedtime Listening",
  description:
    "Sleep stories built for children, not adults — slow pacing, quiet endings, and a voice that settles. What makes one work, and how to use it at bedtime.",
  keywords: [
    "sleep stories for kids",
    "sleep stories for children",
    "children's sleep stories",
    "bedtime sleep stories",
    "sleep story for toddlers",
    "calm sleep stories kids",
    "stories to help kids fall asleep",
    "listening stories before sleep",
  ],
});

const FAQS = [
  {
    q: "What is a sleep story?",
    a: "A sleep story is a story written to be listened to while falling asleep rather than to be finished — the plot stays low-stakes, the pacing slows as it goes, and the ending fades out. The term became popular with adult relaxation apps; children's versions work the same way.",
    category: "Stories & narration" as const,
  },
  {
    q: "Is a sleep story different from a bedtime story?",
    a: "Slightly. A bedtime story still has a beginning, a small problem, and a resolution — it ends and you close the book. A sleep story is designed to be left unfinished: if your child is asleep before the last page, it did its job.",
    category: "Stories & narration" as const,
  },
  {
    q: "What age are sleep stories suitable for?",
    a: "MoonPage's sleep stories are written for ages 2 and up. Below two, the same calm voice works but the words matter less than the rhythm — a lullaby or a repeated phrase does more than a plot.",
    category: "Getting started" as const,
  },
  {
    q: "Should I play a sleep story or read it myself?",
    a: "Whichever ends the night calmly. A recorded narration means the routine still happens on the nights you have nothing left; your own voice is the stronger signal when you have the energy. MoonPage lets you record your own for any story, so the choice isn't permanent.",
    category: "Stories & narration" as const,
  },
];

const RELATED_GUIDES = [
  { slug: "falling-asleep-independently", label: "Falling asleep without you" },
  { slug: "white-noise-and-bedtime-sounds", label: "White noise & sleep sounds" },
  { slug: "lullabies-for-babies-and-toddlers", label: "Lullabies that work" },
  { slug: "audiobooks-vs-reading-aloud", label: "Audiobooks vs reading aloud" },
  { slug: "toddler-night-waking", label: "Toddler night waking" },
] as const;

/**
 * "Sleep stories" is a high-volume, adult-app-dominated phrase (Calm owns the
 * term). A children's page can win it honestly, but only by answering the
 * question the phrase actually raises — what makes a story send a child to
 * sleep — rather than by repeating the keyword. The sleep-story/bedtime-story
 * distinction is the section that earns the ranking: it is the thing a parent
 * searching this phrase genuinely doesn't know yet.
 */
export default function SleepStoriesForKidsPage() {
  const sample = [
    ...storiesByTag("bedtime"),
    ...storiesByTag("night"),
    ...storiesByTag("patience"),
    ...storiesByTag("music"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = hubJsonLd({
    path: "/sleep-stories-for-kids",
    name: "Sleep Stories for Kids",
    faqs: FAQS,
    items: [
      { name: "Lullaby bedtime stories", url: `${SITE.domain}/lullaby-bedtime-stories` },
      { name: "Cozy bedtime stories", url: `${SITE.domain}/cozy-bedtime-stories` },
      { name: "Short bedtime stories", url: `${SITE.domain}/short-bedtime-stories` },
      { name: "Moon and stars stories", url: `${SITE.domain}/collections/moon-and-stars-stories` },
    ],
  });

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-5xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Sleep stories for kids that end the day, not the story
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            A sleep story is not just a bedtime story read quietly. It is built
            the other way around: low stakes from the first page, pacing that
            gets slower rather than faster, and no cliff to hang on. If your
            child is asleep before the last page, the story succeeded.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            MoonPage&apos;s stories are written to that brief. Nothing exciting
            happens in the last five pages, no character is in danger, and the
            ending is quieter than the opening. You can read one aloud in about
            five minutes or let the narrator do it while you sit with your child.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Sleep stories to play or read tonight
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              {STORIES.length} sample titles from the app — each one written to
              settle rather than excite.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
          </section>

          <section className="mt-10 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-12 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Sleep story or bedtime story — which does your child need?
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[36rem] border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-wood/30">
                    <th className="py-2 pr-4 font-display font-semibold text-ink">
                      &nbsp;
                    </th>
                    <th className="py-2 pr-4 font-display font-semibold text-ink">
                      Bedtime story
                    </th>
                    <th className="py-2 font-display font-semibold text-ink">
                      Sleep story
                    </th>
                  </tr>
                </thead>
                <tbody className="text-ink-muted">
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">Shape</td>
                    <td className="py-2 pr-4">Problem, then resolution</td>
                    <td className="py-2">No problem to solve</td>
                  </tr>
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">Pace</td>
                    <td className="py-2 pr-4">Steady, with a lift in the middle</td>
                    <td className="py-2">Slows from page one</td>
                  </tr>
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">Ending</td>
                    <td className="py-2 pr-4">Closes — &quot;the end&quot;</td>
                    <td className="py-2">Fades out mid-sentence if needed</td>
                  </tr>
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">Success looks like</td>
                    <td className="py-2 pr-4">They followed it and settled</td>
                    <td className="py-2">They fell asleep before it finished</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-ink">Best for</td>
                    <td className="py-2 pr-4">A calm, alert child</td>
                    <td className="py-2">An overtired or wired child</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              Most families need both, and which one you reach for should depend
              on the night rather than the calendar. A child who has been
              travelling or overstimulated wants the sleep story; a child who is
              calm and curious wants the one with a plot.
            </p>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              What makes a story send a child to sleep
            </h2>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>
                <span className="font-semibold text-ink">A voice that gets slower.</span>{" "}
                Pace is the signal, not the words. Dropping your reading speed
                across the last two pages tells a child&apos;s body more than any
                line about being sleepy.
              </li>
              <li>
                <span className="font-semibold text-ink">Predictable rhythm.</span>{" "}
                Repetition — the same phrase at the end of each page, or the same
                order of events — lets attention switch off while still following
                along.
              </li>
              <li>
                <span className="font-semibold text-ink">Nothing unresolved.</span>{" "}
                A cliffhanger at bedtime costs you twenty minutes. Every MoonPage
                story closes its own question before the last page.
              </li>
              <li>
                <span className="font-semibold text-ink">Dim, warm settings.</span>{" "}
                Moonlight, lamps, hibernation, rain on a window — the setting
                does half the work before the plot starts.{" "}
                <Link
                  href="/collections/moon-and-stars-stories"
                  className="font-medium text-link underline hover:text-link-hover"
                >
                  Moon and stars stories
                </Link>{" "}
                are the clearest example.
              </li>
              <li>
                <span className="font-semibold text-ink">A length that fits the night.</span>{" "}
                A story that runs past the point of tiredness undoes itself.{" "}
                <Link
                  href="/short-bedtime-stories"
                  className="font-medium text-link underline hover:text-link-hover"
                >
                  Short bedtime stories
                </Link>{" "}
                are the tool for that.
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
                href="/cozy-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Cozy bedtime stories
              </Link>
              <Link
                href="/short-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Short bedtime stories
              </Link>
              <Link
                href="/bedtime-stories-by-age"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Bedtime stories by age
              </Link>
              <Link
                href="/collections/moon-and-stars-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Moon and stars stories
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
              Sleep stories FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="sleep_stories_for_kids"
            title="A story that ends when they do"
            body="Download is free and some stories are free to read now. Premium unlocks the full sleepy library — narrated, or recorded in your own voice."
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
