import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { HubLead } from "@/components/HubLead";
import { Footer } from "@/components/Footer";
import { BackHomeLink } from "@/components/BackLink";
import { FaqList } from "@/components/FaqList";
import { PrintButton } from "@/components/PrintButton";
import { SampleShelfNotice } from "@/components/SampleShelfNotice";
import { SeoHubCta } from "@/components/SeoHubCta";
import { SITE, hubJsonLd, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/printable-bedtime-stories",
  title: "Printable Bedtime Stories & Story Cards (Free to Print)",
  description:
    "Free printable bedtime story starters, a routine chart and read-aloud prompts — print one sheet tonight. No sign-up, no email, nothing to install.",
  keywords: [
    "printable bedtime stories",
    "bedtime stories to print",
    "free printable bedtime stories",
    "printable bedtime story cards",
    "bedtime story pdf",
    "printable bedtime routine chart",
    "bedtime story prompts printable",
    "story starters for kids printable",
  ],
});

const FAQS = [
  {
    q: "Are these printables actually free?",
    a: "Yes. Both sheets — the routine chart and the ten story-starter cards — print straight from this page. There is no download gate, no email address to enter, and no account. Print them once, or print a fresh copy every time the last one goes missing.",
    category: "Getting started" as const,
  },
  {
    q: "What size paper do they print on?",
    a: "They are laid out to work on A4 and on US Letter. Print in portrait at 100% scale with margins set to default — shrinking to fit will make the chart's tick boxes too small for a child to use. Black and white is fine; nothing on either sheet depends on colour.",
    category: "Getting started" as const,
  },
  {
    q: "Should I print the stories themselves?",
    a: "MoonPage's stories are illustrated picture books, so a plain printout loses the half of the story the pictures carry. Print the prompts and the chart, and read the stories from the app or a book — the paper is for the parts a child can hold, point at and tick.",
    category: "Stories & narration" as const,
  },
  {
    q: "The printable chart stopped working after a few weeks. Why?",
    a: "That is the normal life cycle rather than a failure. A chart earns its place while it is doing the remembering for you; once the order is habit, the sheet is decoration and the ticks start to feel like a test. When that happens, retire it instead of adding stickers.",
    category: "Getting started" as const,
  },
];

const RELATED_GUIDES = [
  { slug: "bedtime-routine-for-toddlers", label: "The 20-minute routine that sticks" },
  { slug: "how-to-make-up-a-bedtime-story", label: "Making up a story on the spot" },
  { slug: "bedtime-charts-and-rewards", label: "Do bedtime charts actually work?" },
  { slug: "bedtime-gratitude-and-goodnight-rituals", label: "Goodnight rituals" },
  { slug: "same-story-every-night", label: "Why they want the same story" },
] as const;

/** The chart prints as one sheet, so six steps is the ceiling — see the FAQ. */
const ROUTINE_STEPS = [
  "Bath or wash",
  "Pyjamas",
  "Teeth",
  "Story",
  "Goodnight",
  "Lights out",
] as const;

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

/**
 * Ten prompts rather than ten plots. A prompt gives a parent a starting
 * situation and lets the child supply the middle, which is the part they
 * actually want to be in charge of — and it means the same card is a different
 * story on Tuesday than it was on Sunday.
 */
const STORY_STARTERS = [
  {
    title: "The Very Slow Race",
    prompt:
      "Everyone lines up for a race, and the rule is that the slowest one wins. Who finds the cleverest way to dawdle?",
  },
  {
    title: "The Lost Sock",
    prompt:
      "One sock is missing from the laundry basket. Where has it been all day, and who did it meet?",
  },
  {
    title: "The Moon's Lost Button",
    prompt:
      "The moon has lost a button from its coat. Somebody small finds it. What do they do next?",
  },
  {
    title: "The Cloud Who Couldn't Rain",
    prompt:
      "A little cloud practises raining over the garden and nothing comes out — until it stops trying so hard.",
  },
  {
    title: "The Sleepy Lighthouse",
    prompt:
      "The lighthouse keeps nodding off. The boats need it awake for one more night. Who stays up with it?",
  },
  {
    title: "The Bear Who Counted Stars",
    prompt:
      "A bear decides to count every star in the sky. Somewhere around forty, something else happens instead.",
  },
  {
    title: "The Noisy Teapot",
    prompt:
      "The teapot whistles at exactly the wrong moment every single evening. Can anyone teach it to wait?",
  },
  {
    title: "The Borrowed Blanket",
    prompt:
      "Someone borrows a blanket without asking. Saying sorry turns out to be the easy part.",
  },
  {
    title: "The Door That Wouldn't Close",
    prompt:
      "One door in the house refuses to shut. Nobody can see what is keeping it open.",
  },
  {
    title: "The Garden That Grew at Night",
    prompt:
      "Every morning there is something new outside the window, and nobody planted it.",
  },
] as const;

/**
 * Printable is one of the few genuinely under-served clusters in this category:
 * the pages that rank for "printable bedtime stories" are mostly PDF dumps of
 * public-domain text behind a download gate. A page that just prints is a real
 * differentiator, and paper is the one format a bedtime story site can offer
 * that no subscription and no screen can.
 *
 * It is also the site's most linkable asset. Teachers, childminders and
 * parenting roundups link printables far more readily than they link app
 * landing pages, which matters more here than on-page polish — the domain is
 * young and the binding constraint is authority, not word count.
 */
export default function PrintableBedtimeStoriesPage() {
  const jsonLd = hubJsonLd({
    path: "/printable-bedtime-stories",
    name: "Printable bedtime stories",
    faqs: FAQS,
    items: [
      { name: "Bedtime routine chart", url: `${SITE.domain}/bedtime-routine-chart` },
      { name: "Bedtime story ideas", url: `${SITE.domain}/bedtime-story-ideas` },
      { name: "Free bedtime stories", url: `${SITE.domain}/free-bedtime-stories` },
      { name: "Short bedtime stories", url: `${SITE.domain}/short-bedtime-stories` },
    ],
  });

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-5xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Printable bedtime stories and story cards
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Two sheets, both free, both printable straight from this page: a
            bedtime routine chart a child can tick themselves, and ten
            story-starter cards for the nights when nobody can think of one.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            There is nothing to sign up for and nothing to download. Print the
            sheet you want, stick it on the wall or the fridge, and let the
            paper do the remembering for the next few weeks.
          </p>

          <HubLead path="/printable-bedtime-stories" />
          <SampleShelfNotice className="mt-5 sm:mt-6" />

          {/* ── Printable 1: the routine chart ─────────────────────────── */}
          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Print the bedtime routine chart
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
              Six steps, seven nights, and a box for each one. The point of the
              chart is that your child can run it without being told what comes
              next — which is why it holds six steps and not twelve, and why the
              order is the order you actually do things in, not the order you
              wish you did.
            </p>
            <div className="no-print mt-4 flex flex-wrap items-center gap-3">
              <PrintButton target="routine-chart">Print the chart</PrintButton>
              <span className="text-xs text-ink-muted sm:text-sm">
                A4 or US Letter, portrait, 100% scale.
              </span>
            </div>

            <div
              className="print-block mt-6 rounded-2xl border border-wood/25 bg-paper p-5 sm:rounded-3xl sm:p-7"
              data-print-id="routine-chart"
            >
              <div className="print-sheet">
                <h3 className="print-title font-display text-base font-semibold text-ink sm:text-lg">
                  My bedtime routine
                </h3>
                <p className="print-note mt-1 text-xs text-ink-muted sm:text-sm">
                  Name: ______________________ &nbsp;&nbsp; Tick a box each night
                  you finish the whole step.
                </p>

                <div className="mt-5 overflow-x-auto">
                  <table className="w-full min-w-[30rem] border-collapse text-left text-xs sm:text-sm">
                    <caption className="sr-only">
                      A week of bedtime routine steps with a tick box for each
                      night
                    </caption>
                    <thead>
                      <tr className="border-b border-wood/40">
                        <th className="py-2 pr-3 font-display font-semibold text-ink">
                          Step
                        </th>
                        {DAYS.map((d) => (
                          <th
                            key={d}
                            className="py-2 px-1 text-center font-display font-semibold text-ink"
                          >
                            {d}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {ROUTINE_STEPS.map((step, i) => (
                        <tr key={step} className="border-b border-wood/20">
                          <td className="py-3 pr-3 text-ink">
                            <span className="font-semibold">{i + 1}.</span>{" "}
                            {step}
                          </td>
                          {DAYS.map((d) => (
                            <td key={d} className="py-3 px-1 text-center">
                              <span
                                aria-hidden="true"
                                className="inline-block h-5 w-5 rounded border border-wood-dark/60 align-middle"
                              />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="print-note mt-5 text-xs leading-relaxed text-ink-muted sm:text-sm">
                  When every box in a row is ticked, that step is a habit — cross
                  it off the chart and keep going with the rest.
                </p>
              </div>
            </div>
          </section>

          {/* ── Printable 2: story-starter cards ───────────────────────── */}
          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Print the ten story-starter cards
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
              Each card is a starting situation, not a plot. You read the prompt
              out loud and your child supplies what happens next, which is the
              part they actually want to be in charge of. The same card becomes a
              different story every time you draw it.
            </p>
            <div className="no-print mt-4 flex flex-wrap items-center gap-3">
              <PrintButton target="story-cards">Print the cards</PrintButton>
              <span className="text-xs text-ink-muted sm:text-sm">
                Two to a row — cut along the lines if you want a deck.
              </span>
            </div>

            <div
              className="print-block mt-6 rounded-2xl border border-wood/25 bg-paper p-5 sm:rounded-3xl sm:p-7"
              data-print-id="story-cards"
            >
              <h3 className="print-title font-display text-base font-semibold text-ink sm:text-lg">
                Ten bedtime story starters
              </h3>
              <p className="print-note mt-1 text-xs text-ink-muted sm:text-sm">
                Draw one, read it out, and let them finish it.
              </p>

              <ol className="print-grid mt-5 grid gap-3 sm:grid-cols-2">
                {STORY_STARTERS.map((card, i) => (
                  <li
                    key={card.title}
                    className="print-card rounded-xl border border-wood/30 bg-cream/40 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent-strong">
                      Card {i + 1}
                    </p>
                    <p className="mt-1 font-display text-sm font-semibold text-ink sm:text-base">
                      {card.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-muted sm:text-sm">
                      {card.prompt}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ── Why paper ─────────────────────────────────────────────── */}
          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Why paper still earns its place at bedtime
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
              A printed sheet is visible from the bed, needs no unlocking, and
              does not light up. That matters more at bedtime than it sounds:
              the reason a routine drifts is almost never that nobody knows the
              steps — it is that the steps live in an adult&apos;s head, and an
              adult at 7:30pm is exactly the person least able to hold six of
              them in order.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
              Paper also fails quietly. If the chart gets lost, ignored or
              scribbled on, nothing breaks — you print another one. A screen
              that becomes the routine, on the other hand, has to be handed over
              and taken back every single night, and that negotiation is its own
              bedtime problem. If screens are already part of your evenings, the
              guide on{" "}
              <Link
                href="/guides/screen-time-before-bed"
                className="font-medium text-link underline hover:text-link-hover"
              >
                screen time before bed
              </Link>{" "}
              covers where the line usually goes.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
              What paper cannot do is tell the story. The illustrations are half
              of a picture book, and a home printout turns them into a grey
              smudge — so use the sheets for the parts a child can hold and tick,
              and read the actual stories from a book or from the app.
            </p>
          </section>

          {/* ── How to use them ───────────────────────────────────────── */}
          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Getting the most out of the two sheets
            </h2>
            <ul className="mt-3 max-w-3xl space-y-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>
                <span className="font-semibold text-ink">
                  Introduce the chart in daylight.
                </span>{" "}
                A new chart explained at bedtime is a change to bedtime, and
                changes to bedtime get resisted. Show it after breakfast, hang it
                where they can reach it, and let them tick the first box
                themselves.
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Cut the cards out and keep them in a jar.
                </span>{" "}
                Drawing one is the fun part, and drawing one is also a decision
                the child gets to make instead of you — which removes the most
                common stall in the whole routine.
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Keep the last two steps sacred.
                </span>{" "}
                Whatever gets dropped on a bad night, goodnight and lights out
                should not be. The ending is what closes the day; see the guide
                on{" "}
                <Link
                  href="/guides/bedtime-gratitude-and-goodnight-rituals"
                  className="font-medium text-link underline hover:text-link-hover"
                >
                  goodnight rituals
                </Link>
                .
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Reprint rather than repair.
                </span>{" "}
                A crumpled, half-ticked, three-week-old chart is worse than a
                fresh one. The sheet is disposable by design.
              </li>
            </ul>
          </section>

          {/* ── Related ───────────────────────────────────────────────── */}
          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Related hubs &amp; guides
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/bedtime-routine-chart"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Bedtime routine chart
              </Link>
              <Link
                href="/bedtime-story-ideas"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Bedtime story ideas
              </Link>
              <Link
                href="/free-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Free bedtime stories
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
              Printable bedtime stories FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="printable_bedtime_stories"
            title="Paper for the routine, stories for the reading"
            body="MoonPage holds original illustrated bedtime stories for ages 2+ — narrated or in your own voice, offline, no ads and no login. Free to start tonight."
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
