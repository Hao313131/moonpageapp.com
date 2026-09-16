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
  path: "/bedtime-stories-for-siblings",
  title: "Bedtime Stories for Siblings",
  description:
    "One story that works for two (or three) kids at bedtime — same book, different ages, fewer arguments. Browse cozy tales free in MoonPage.",
  keywords: [
    "bedtime stories for siblings",
    "bedtime stories for two kids",
    "bedtime stories brother and sister",
    "stories for siblings sharing a room",
    "bedtime routine two kids",
    "bedtime stories new baby",
    "bedtime stories for older and younger child",
    "sharing bedtime story",
  ],
});

const FAQS = [
  {
    q: "How do I pick one bedtime story for different ages?",
    a: "Choose a story with a simple arc and warm pictures — it reads well to a toddler and still holds a five-year-old. MoonPage's tales are written for ages 2+, so one book tends to fit the whole shelf.",
    category: "Getting started" as const,
  },
  {
    q: "Can siblings share the same story without fighting?",
    a: "Let them take turns choosing who holds the device or turns the page, and keep the order the same each night. A predictable finish is easier to share than a rule made up in the moment.",
    category: "Getting started" as const,
  },
  {
    q: "What about a new baby and an older sibling at bedtime?",
    a: "A short, calm story works as the quiet activity while the baby settles. MoonPage keeps stories around five minutes, so the older child's routine doesn't drag.",
    category: "Getting started" as const,
  },
  {
    q: "Can each child hear a different recorded voice?",
    a: "Any caregiver can record a voice version on their own device, so a child can hear the parent or grandparent they're closest to, even on the same story.",
    category: "Stories & narration" as const,
  },
];

const RELATED_GUIDES = [
  { slug: "bedtime-with-two-kids", label: "Bedtime with two kids" },
  { slug: "new-baby-bedtime", label: "New baby at bedtime" },
  { slug: "toddler-sharing-room-with-baby", label: "Sharing a room with baby" },
  { slug: "bedtime-for-twins", label: "Bedtime for twins" },
] as const;

export default function SiblingsBedtimeStoriesPage() {
  const sample = [
    ...storiesByTag("friendship"),
    ...storiesByTag("family"),
    ...storiesByTag("sharing"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = hubJsonLd({
    path: "/bedtime-stories-for-siblings",
    name: "Bedtime Stories for Siblings",
    faqs: FAQS,
    items: [
      { name: "Bedtime stories", url: `${SITE.domain}/bedtime-stories` },
      { name: "Toddler bedtime stories", url: `${SITE.domain}/toddler-bedtime-stories` },
      { name: "Preschool bedtime stories", url: `${SITE.domain}/preschool-bedtime-stories` },
      { name: "Free bedtime stories", url: `${SITE.domain}/free-bedtime-stories` },
    ],
  });

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-5xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Bedtime stories for siblings
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Two kids, one bedtime, and a story that fits both — that&apos;s the
            goal. MoonPage&apos;s tales are written for ages 2+, with simple arcs
            and warm pictures that read as well to a toddler as to an
            older sibling, so the same book can close the night for the whole
            shelf.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Short by design, every story finishes in about five minutes — long
            enough to settle them, short enough that a second child&apos;s turn
            doesn&apos;t push bedtime past tired.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Stories the whole shelf can share
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              {STORIES.length} sample titles from the app — gentle enough for
              the youngest, engaging enough for the oldest.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
          </section>

          <section className="mt-10 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-12 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              One story, two kids
            </h2>
            <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-ink-muted sm:grid-cols-2 sm:text-base">
              <li>Pick a simple arc that works at every age.</li>
              <li>Let them take turns with the device or the page.</li>
              <li>Keep the order the same so it isn't a nightly negotiation.</li>
              <li>A short story means the older child isn't kept up.</li>
              <li>A recorded voice helps a child who needs their person.</li>
              <li>The routine, not the book, is what settles them.</li>
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
                href="/toddler-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Toddler bedtime stories
              </Link>
              <Link
                href="/preschool-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Preschool bedtime stories
              </Link>
              <Link
                href="/free-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Free bedtime stories
              </Link>
              <Link
                href="/baby-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Bedtime stories for babies
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
              Sibling bedtime stories FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="bedtime_stories_for_siblings"
            title="One story, the whole shelf"
            body="Download is free and some stories are free to read now. Premium unlocks the full library for every age at bedtime."
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
