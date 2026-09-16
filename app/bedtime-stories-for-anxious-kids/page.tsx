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
  path: "/bedtime-stories-for-anxious-kids",
  title: "Bedtime Stories for Anxious Kids",
  description:
    "Gentle, predictable bedtime stories that help anxious kids wind down — calm arcs, soft endings, read in a voice they know. Free to try in MoonPage.",
  keywords: [
    "bedtime stories for anxious kids",
    "calming bedtime stories",
    "bedtime stories for scared kids",
    "soothing bedtime tales",
    "bedtime stories separation anxiety",
    "stories for anxious toddlers",
    "gentle bedtime stories",
    "bedtime stories for worried children",
  ],
});

const FAQS = [
  {
    q: "What makes a bedtime story good for an anxious child?",
    a: "Calm pacing, a gentle problem that resolves, and an ending that lands softly — no sudden scares, no cliffhangers. MoonPage stories are built around kindness, courage and curiosity, the sort of arcs that settle rather than spike.",
    category: "Stories & narration" as const,
  },
  {
    q: "My child is scared of the dark — which stories help?",
    a: "Look for the cozy and lullaby-style tales, and the ones about bravery in small, ordinary moments. Reading them in your own voice also helps; a familiar voice is its own kind of reassurance at the end of the day.",
    category: "Stories & narration" as const,
  },
  {
    q: "Is it okay to read the same calming story every night?",
    a: "For an anxious child, repetition is often exactly what helps — a story they know end-to-end is one less unknown at bedtime. MoonPage keeps every story short so the routine stays easy to finish.",
    category: "Getting started" as const,
  },
  {
    q: "Can a recorded voice story help on hard nights?",
    a: "Yes — when you can't be there, a story recorded in your voice still carries the calm. Playback works offline, so it's there even without signal.",
    category: "Devices & offline" as const,
  },
];

const RELATED_GUIDES = [
  { slug: "bedtime-stories-for-anxious-kids", label: "Stories for anxious kids" },
  { slug: "scared-of-the-dark", label: "Scared of the dark" },
  { slug: "separation-anxiety-at-bedtime", label: "Separation anxiety at bedtime" },
  { slug: "stories-about-big-feelings-at-bedtime", label: "Big feelings at bedtime" },
  { slug: "nightmares-and-bad-dreams", label: "Nightmares and bad dreams" },
] as const;

export default function AnxiousKidsBedtimeStoriesPage() {
  const sample = [
    ...storiesByTag("courage"),
    ...storiesByTag("feelings"),
    ...storiesByTag("kindness"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = hubJsonLd({
    path: "/bedtime-stories-for-anxious-kids",
    name: "Bedtime Stories for Anxious Kids",
    faqs: FAQS,
    items: [
      { name: "Bedtime stories", url: `${SITE.domain}/bedtime-stories` },
      { name: "Cozy bedtime stories", url: `${SITE.domain}/cozy-bedtime-stories` },
      { name: "Lullaby bedtime stories", url: `${SITE.domain}/lullaby-bedtime-stories` },
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
            Bedtime stories for anxious kids
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            An anxious child needs the opposite of excitement at the end of the
            day. The right bedtime story is quiet and predictable — a small
            worry that gets gently sorted, an ending that arrives without a
            jolt. MoonPage&apos;s tales are written around kindness, courage and
            curiosity, the kind of arcs that help a child settle instead of
            spindle them tighter.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Reading them in your own voice adds the reassurance an anxious
            child is really listening for. The story is the same; the familiar
            voice is what does the calming.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Calming stories to read tonight
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              {STORIES.length} sample titles from the app — gentle arcs and soft
              endings, each one short enough to finish before the calm does.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
          </section>

          <section className="mt-10 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-12 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Choosing a story for an anxious child
            </h2>
            <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-ink-muted sm:grid-cols-2 sm:text-base">
              <li>Pick calm arcs — a small problem, a gentle fix, no scares.</li>
              <li>Favor soft endings over exciting ones.</li>
              <li>Repeat a known story; the familiar is its own comfort.</li>
              <li>Read in your own voice when you can — it carries the calm.</li>
              <li>Keep it short so the routine ends on time.</li>
              <li>A cozy or lullaby-style tale suits most nervous nights.</li>
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
              Anxious-kids bedtime stories FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="bedtime_stories_for_anxious_kids"
            title="A calmer story, every night"
            body="Download is free and some stories are free to read now. Premium unlocks the full library of gentle, reassuring tales."
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
