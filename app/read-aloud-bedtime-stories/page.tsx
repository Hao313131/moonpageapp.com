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
  path: "/read-aloud-bedtime-stories",
  title: "Read-Aloud Bedtime Stories for Kids",
  description:
    "Read-aloud bedtime stories and narrated picture books for children. Hear each story by a professional narrator, or in your own recorded parent voice — offline, no ads.",
  keywords: [
    "read aloud bedtime stories",
    "read aloud picture books",
    "children narration stories",
    "parent voice bedtime stories",
    "storybook narration app",
    "kids bedtime read aloud",
    "narrated children's books",
    "read aloud stories for kids",
  ],
});

const FAQS = [
  {
    q: "What does read-aloud mean in MoonPage?",
    a: "Every illustrated story can be heard by a professional narrator, played while you follow along, or recorded once in your own voice so your child hears Mom or Dad even when you're away.",
    category: "Stories & narration" as const,
  },
  {
    q: "Is parent-recorded narration stored in the cloud?",
    a: "No. Your voice recordings stay on your device and are never uploaded. That's intentional for privacy and for nights without Wi‑Fi.",
    category: "Privacy & safety" as const,
  },
  {
    q: "Who benefits most from narrated bedtime stories?",
    a: "Busy parents, travel nights, co-parenting schedules, grandparents who want a consistent routine, and kids who settle better with a familiar voice and predictable pacing.",
    category: "Getting started" as const,
  },
  {
    q: "Can kids follow along with the pictures while listening?",
    a: "Yes — MoonPage is a full-screen picture storybook experience. Narration and page turns are paced for winding down, not for a video-style feed.",
    category: "Stories & narration" as const,
  },
];

const RELATED_GUIDES = [
  { slug: "read-aloud-to-toddlers", label: "How to read aloud to toddlers" },
  { slug: "reading-aloud-with-expression", label: "Reading aloud with expression" },
  { slug: "audiobooks-vs-reading-aloud", label: "Audiobooks vs reading aloud" },
  { slug: "bedtime-when-youre-away", label: "Bedtime when you're away" },
  { slug: "grandparents-reading-from-far-away", label: "Grandparents reading from afar" },
] as const;

export default function ReadAloudBedtimeStoriesPage() {
  const sample = [
    ...storiesByTag("bedtime"),
    ...storiesByTag("family"),
    ...storiesByTag("music"),
    ...storiesByTag("night"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = hubJsonLd({
    path: "/read-aloud-bedtime-stories",
    name: "Read-Aloud Bedtime Stories",
    faqs: FAQS,
    items: [
      {
        name: "Bedtime stories app",
        url: `${SITE.domain}/bedtime-stories-app`,
      },
      {
        name: "Lullaby bedtime stories",
        url: `${SITE.domain}/lullaby-bedtime-stories`,
      },
      {
        name: "Toddler bedtime stories",
        url: `${SITE.domain}/toddler-bedtime-stories`,
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
            Read-aloud bedtime stories with flexible narration
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Families look for read-aloud bedtime stories and narrated picture
            books for different nights: when you&apos;re tired, traveling,
            sharing custody, or simply want a child to settle with a familiar
            voice. MoonPage is built for that — original children&apos;s
            storybooks with calm read-aloud narration, plus the option to record
            your own parent voice for any story.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Unlike a random YouTube playlist, there&apos;s no ads, no autoplay
            rabbit hole, and no social feed — just illustrated pages paced for
            sleep. Works offline once stories are on the device.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Sample read-aloud picture storybooks
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              {STORIES.length} sample titles parents can preview before
              downloading — each available with narration in the app.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
          </section>

          <section className="mt-10 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-12 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Narration choices parents search for
            </h2>
            <ul className="mt-3 grid gap-2 text-sm text-ink-muted sm:grid-cols-2 sm:text-base">
              <li>Kids bedtime read-aloud stories</li>
              <li>Narrated children&apos;s picture books</li>
              <li>Parent voice bedtime storytelling</li>
              <li>Cozy sleepy tales before bed</li>
              <li>Toddler storybook narration</li>
              <li>Preschool bedtime listening stories</li>
              <li>Read-aloud picture books for children</li>
              <li>Offline story narration for travel</li>
            </ul>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Related hubs &amp; guides
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/bedtime-stories-app"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Bedtime stories app
              </Link>
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
              Read-aloud FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="read_aloud_bedtime_stories"
            title="Start free, unlock the full narrated library"
            body="Download is free and some stories are free to read now. Premium unlocks ongoing access to the complete story shelf — with narration and own-voice recording."
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
