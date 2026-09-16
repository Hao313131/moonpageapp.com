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
  path: "/bedtime-routine-chart",
  title: "Bedtime Routine Chart: A Calmer Order for Bedtime",
  description:
    "A bedtime routine chart you can copy onto paper tonight — the step order by age, what belongs on it, and what to drop when the chart stops working.",
  keywords: [
    "bedtime routine chart",
    "bedtime chart for toddlers",
    "bedtime routine chart for kids",
    "kids bedtime chart",
    "bedtime routine steps",
    "toddler bedtime routine chart",
    "nighttime routine chart",
    "bedtime chart for preschoolers",
  ],
});

const FAQS = [
  {
    q: "What should go on a bedtime routine chart?",
    a: "Four to six steps, in the exact order you actually do them: bath, pyjamas, teeth, story, lights, door. Nothing aspirational. A chart that lists steps you skip half the time stops being a chart and becomes a nightly argument.",
    category: "Getting started" as const,
  },
  {
    q: "How many steps is too many?",
    a: "More than six. Under three years old, four is the ceiling — a two-year-old can hold a short sequence in mind but not a long one, and a chart they can't remember can't be followed.",
    category: "Getting started" as const,
  },
  {
    q: "Should the chart use pictures or words?",
    a: "Pictures below four, words above five. The point of the chart is that your child can run it themselves, so it has to be readable at their level — a sticker or a drawing they recognise beats a sentence they can't.",
    category: "Getting started" as const,
  },
  {
    q: "The chart worked for a month and now it doesn't. Why?",
    a: "This is the normal life cycle, not a failure. A chart works while it is novel and while it is doing the remembering for you; once the sequence is habit, the chart is just decoration. When it stops helping, drop it rather than adding stickers — see the guide on bedtime charts and rewards for why adding more reward usually makes it worse.",
    category: "Getting started" as const,
  },
];

const RELATED_GUIDES = [
  { slug: "bedtime-charts-and-rewards", label: "Do bedtime charts & rewards work?" },
  { slug: "bedtime-routine-for-toddlers", label: "The 20-minute routine that sticks" },
  { slug: "what-time-should-a-toddler-go-to-bed", label: "What time should bedtime be?" },
  { slug: "toddler-wont-stay-in-bed", label: "When they won't stay in bed" },
  { slug: "falling-asleep-independently", label: "Falling asleep without you" },
] as const;

/**
 * The routine-order chart lives on this page rather than in a PDF download.
 * That is deliberate: a static export has nowhere to put a gated asset, and an
 * ungated PDF would be a file nobody links to. An HTML table is crawlable,
 * copyable, and — more to the point — the section that answers the question
 * ("what order, and how many steps") is the part a parent actually needs.
 *
 * This page must not promise a printable. There isn't one, and a download
 * button that lands nowhere costs more trust than the page earns.
 */
export default function BedtimeRoutineChartPage() {
  const sample = [
    ...storiesByTag("bedtime"),
    ...storiesByTag("patience"),
    ...storiesByTag("family"),
    ...storiesByTag("feelings"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = hubJsonLd({
    path: "/bedtime-routine-chart",
    name: "Bedtime Routine Chart",
    faqs: FAQS,
    items: [
      { name: "Bedtime stories", url: `${SITE.domain}/bedtime-stories` },
      { name: "Short bedtime stories", url: `${SITE.domain}/short-bedtime-stories` },
      { name: "Sleep stories for kids", url: `${SITE.domain}/sleep-stories-for-kids` },
      { name: "Bedtime routine for toddlers", url: `${SITE.domain}/guides/bedtime-routine-for-toddlers` },
    ],
  });

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-5xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            A bedtime routine chart that ends the nightly negotiation
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            A bedtime routine chart does one job: it takes the sequence out of
            your mouth and puts it somewhere your child can point at. That is
            the whole trick. You stop being the person who says &quot;teeth
            first&quot; and become the person who reads the chart with them —
            and a rule that lives on the wall is much harder to argue with than
            a rule that lives in a tired parent.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Below is the chart itself — the step order that works at each age,
            what to leave off it, and how to tell when it has done its job and
            should be retired. Copy it onto a sheet of paper and stick it at
            your child&apos;s eye level tonight.
          </p>

          <section className="mt-8 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-10 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              The chart
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              Four to six steps, always the same order, always ending the same
              way. The column on the right is the part parents forget.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[38rem] border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-wood/30">
                    <th className="py-2 pr-4 font-display font-semibold text-ink">
                      #
                    </th>
                    <th className="py-2 pr-4 font-display font-semibold text-ink">
                      Step
                    </th>
                    <th className="py-2 pr-4 font-display font-semibold text-ink">
                      Ages 2–3
                    </th>
                    <th className="py-2 font-display font-semibold text-ink">
                      Ages 4–7
                    </th>
                  </tr>
                </thead>
                <tbody className="text-ink-muted">
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">1</td>
                    <td className="py-2 pr-4 text-ink">Wind-down</td>
                    <td className="py-2 pr-4">5 min, screens already off</td>
                    <td className="py-2">10 min, quiet play or drawing</td>
                  </tr>
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">2</td>
                    <td className="py-2 pr-4 text-ink">Bath or wash</td>
                    <td className="py-2 pr-4">Same order every night</td>
                    <td className="py-2">They can start it themselves</td>
                  </tr>
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">3</td>
                    <td className="py-2 pr-4 text-ink">Pyjamas &amp; teeth</td>
                    <td className="py-2 pr-4">You do it, narrate it</td>
                    <td className="py-2">They do it, you check</td>
                  </tr>
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">4</td>
                    <td className="py-2 pr-4 text-ink">Story</td>
                    <td className="py-2 pr-4">One short story, ~5 min</td>
                    <td className="py-2">One story, they may pick it</td>
                  </tr>
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">5</td>
                    <td className="py-2 pr-4 text-ink">Goodnights</td>
                    <td className="py-2 pr-4">Same words, same order</td>
                    <td className="py-2">Same words, same order</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-ink">6</td>
                    <td className="py-2 pr-4 text-ink">Lights &amp; door</td>
                    <td className="py-2 pr-4">Door as you left it</td>
                    <td className="py-2">Door as you left it</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              Step 6 is the one that gets dropped, and dropping it is what
              breaks the chart. If you sometimes leave the door open and
              sometimes closed, the last step becomes negotiable — and if the
              last step is negotiable, so is every step before it.
            </p>
          </section>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Stories to put on step four
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              {STORIES.length} sample titles from the app — short enough to sit
              inside a routine without stretching it.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Making the chart actually work
            </h2>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>
                <span className="font-semibold text-ink">
                  Write the chart from tonight&apos;s real routine, not an ideal one.
                </span>{" "}
                If bath happens three nights a week, bath is not step two. A
                chart that describes a routine you don&apos;t have fails on the
                first night and never recovers.
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Put it where the routine happens, not on the fridge.
                </span>{" "}
                Eye level in the bedroom beats the kitchen door — the chart has
                to be in the room where the sequence is being run.
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Let your child move the marker.
                </span>{" "}
                Ticking the step is the part they own. Doing it themselves is
                what converts the chart from a rule into something they run.
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Keep the reward small or absent.
                </span>{" "}
                The chart is the reward — it removes the arguing. Bolting a
                sticker on top is what turns it into a negotiation about
                stickers.{" "}
                <Link
                  href="/guides/bedtime-charts-and-rewards"
                  className="font-medium text-link underline hover:text-link-hover"
                >
                  When charts and rewards stop working
                </Link>{" "}
                is worth reading before you add anything.
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Retire it when it stops being read.
                </span>{" "}
                Once your child runs the sequence without looking, the chart has
                succeeded. Leaving it on the wall past that point invites them to
                start testing it again.
              </li>
            </ul>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Related hubs &amp; guides
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Bedtime stories
              </Link>
              <Link
                href="/short-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Short bedtime stories
              </Link>
              <Link
                href="/sleep-stories-for-kids"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Sleep stories for kids
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
              Bedtime routine chart FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="bedtime_routine_chart"
            title="Step four, sorted every night"
            body="Download is free and some stories are free to read now. Premium unlocks the full library — so the story step never runs out of something new."
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
