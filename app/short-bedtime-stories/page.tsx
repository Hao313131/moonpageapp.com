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
  path: "/short-bedtime-stories",
  title: "Short Bedtime Stories for Kids (5 Minutes or Less)",
  description:
    "Some nights there is no room for a long book. Every MoonPage story is short by design — read one aloud in about five minutes and still end the night calm.",
  keywords: [
    "short bedtime stories",
    "short bedtime stories for kids",
    "5 minute bedtime stories",
    "very short bedtime stories",
    "quick bedtime stories",
    "short stories for toddlers",
    "one minute bedtime story",
    "short bedtime story for kids",
    "bedtime stories under 5 minutes",
  ],
});

const FAQS = [
  {
    q: "How long is a short bedtime story?",
    a: "In MoonPage every story is built to be read aloud in roughly five minutes — around 28 to 35 illustrated pages. That is short enough for an overtired child and long enough to actually settle them.",
    category: "Stories & narration" as const,
  },
  {
    q: "Are short bedtime stories as good as long ones?",
    a: "For winding down, usually yes. A story that ends while your child is still calm finishes the night on a good note. A story that runs long past the point of tiredness is where bedtime starts going backwards.",
    category: "Getting started" as const,
  },
  {
    q: "My child always asks for one more. How do I stop at one?",
    a: "Make the end of the story the end of the routine — story, then lights, in the same order every night. A predictable finish is easier to accept than a rule invented at the moment. The bedtime routine guide walks through the full sequence.",
    category: "Getting started" as const,
  },
  {
    q: "What if even five minutes feels like too much tonight?",
    a: "Read one page and narrate the rest. MoonPage can play the professional narration while you sit with your child, so the routine still happens on the nights you have nothing left to give.",
    category: "Stories & narration" as const,
  },
];

const RELATED_GUIDES = [
  { slug: "how-long-to-read-at-bedtime", label: "How long should bedtime reading take?" },
  { slug: "choosing-bedtime-books", label: "Choosing bedtime books" },
  { slug: "bedtime-routine-for-toddlers", label: "Bedtime routine for toddlers" },
  { slug: "toddler-wont-stay-in-bed", label: "When they won't stay in bed" },
  { slug: "dropping-the-nap", label: "Dropping the nap" },
] as const;

export default function ShortBedtimeStoriesPage() {
  const sample = [
    ...storiesByTag("bedtime"),
    ...storiesByTag("patience"),
    ...storiesByTag("objects"),
    ...storiesByTag("animals"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = hubJsonLd({
    path: "/short-bedtime-stories",
    name: "Short Bedtime Stories",
    faqs: FAQS,
    items: [
      { name: "Bedtime stories", url: `${SITE.domain}/bedtime-stories` },
      { name: "Bedtime stories by age", url: `${SITE.domain}/bedtime-stories-by-age` },
      { name: "Free bedtime stories", url: `${SITE.domain}/free-bedtime-stories` },
      { name: "Cozy bedtime stories", url: `${SITE.domain}/cozy-bedtime-stories` },
    ],
  });

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-5xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Short bedtime stories that still end the night calmly
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Parents search for short bedtime stories for a specific reason: the
            night has already gone long, and what&apos;s needed is a story that
            finishes before the calm does. Every MoonPage story is built that
            way — roughly five minutes read aloud, 28 to 35 illustrated pages,
            with an ending that settles rather than excites.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            &quot;Short&quot; here isn&apos;t a compromise. It&apos;s the design.
            A story that stops while your child is still enjoying it makes the
            handover to sleep easy. A story that drags past tiredness is where
            bedtime starts unravelling — which is why we don&apos;t publish
            long ones.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Short bedtime stories to read tonight
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              {STORIES.length} sample titles from the app — each one short enough
              for a five-minute bedtime window.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
          </section>

          <section className="mt-10 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-12 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              How to run a five-minute bedtime story
            </h2>
            <ol className="mt-3 space-y-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>
                <span className="font-semibold text-ink">1. Pick before you sit down.</span>{" "}
                Let your child choose from two options, not the whole shelf. An
                open-ended choice is what turns five minutes into twenty.
              </li>
              <li>
                <span className="font-semibold text-ink">2. Say the length out loud.</span>{" "}
                &quot;One story, then lights.&quot; Naming the end before you
                start is what makes the end unsurprising.
              </li>
              <li>
                <span className="font-semibold text-ink">3. Slow down at the last page.</span>{" "}
                Drop your reading pace as the story closes. It signals sleep
                better than the words do.
              </li>
              <li>
                <span className="font-semibold text-ink">4. Finish the routine, not just the story.</span>{" "}
                Story, water, light, door — same order every night. The
                repetition is doing most of the work.
              </li>
            </ol>
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
                href="/free-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Free bedtime stories
              </Link>
              <Link
                href="/bedtime-stories-by-age"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Bedtime stories by age
              </Link>
              <Link
                href="/cozy-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Cozy bedtime stories
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
              Short bedtime stories FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="short_bedtime_stories"
            title="Short stories, every night, no ads"
            body="Download is free and some stories are free to read now. Premium unlocks ongoing access to the whole library — narrated, or recorded in your own voice."
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
