import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackHomeLink } from "@/components/BackLink";
import { FaqList } from "@/components/FaqList";
import { SampleShelfNotice } from "@/components/SampleShelfNotice";
import { SeoHubCta } from "@/components/SeoHubCta";
import { StoryGrid } from "@/components/StoryGrid";
import { hubJsonLd, pageMetadata } from "@/lib/site";
import { storiesByTag } from "@/lib/stories";

export const metadata: Metadata = pageMetadata({
  path: "/lullaby-bedtime-stories",
  title: "Lullaby Bedtime Stories for Kids",
  description:
    "Lullaby-style bedtime stories for babies, toddlers, and kids — soft rhythm, sleepy endings, and gentle narration that feels like a lullaby before sleep.",
  keywords: [
    "lullaby bedtime stories",
    "lullaby stories for kids",
    "lullaby stories for toddlers",
    "lullaby for babies",
    "sleepy lullaby stories",
    "gentle bedtime tales",
    "lullaby picture books",
    "kids lullaby stories",
  ],
});

const FAQS = [
  {
    q: "What is a lullaby bedtime story?",
    a: "A story with lullaby-like rhythm: soft language, repeating phrases, and a fade-to-sleep ending. It isn't a sung lullaby track — it's a picture storybook designed to feel like one.",
    category: "Stories & narration" as const,
  },
  {
    q: "Can babies use MoonPage lullaby stories?",
    a: "MoonPage is designed for ages 2+, but parents often start earlier with voice, rhythm, and listening together. For baby-specific advice, see our baby bedtime guides; then graduate into toddler storybooks.",
    category: "Getting started" as const,
  },
  {
    q: "Should I play narration or sing along?",
    a: "Either works. Many parents read or play narration softly, then hum a short lullaby after the last page. Keep lights low and volume down so the sequence stays sleepy.",
    category: "Stories & narration" as const,
  },
];

export default function LullabyBedtimeStoriesPage() {
  // Rhythm / soft repetition — music & bedtime first; skip snow/garden so
  // the sample diverges from the cozy hub's atmosphere-led shelf.
  const sample = [
    ...storiesByTag("music"),
    ...storiesByTag("bedtime"),
    ...storiesByTag("rain"),
    ...storiesByTag("night"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = hubJsonLd({
    path: "/lullaby-bedtime-stories",
    name: "Lullaby Bedtime Stories",
    faqs: FAQS,
  });

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-5xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Lullaby bedtime stories for kids and little ones
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Parents searching for lullaby bedtime stories usually want rhythm
            and softness more than plot twists — the storybook equivalent of a
            lullaby. MoonPage&apos;s sleepy tales use gentle language, warm
            repetition, and quiet endings so toddlers, preschoolers, and little
            kids can drift off after the last page.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Pair a lullaby-style story with soft narration or your own recorded
            voice. No ads interrupt the wind-down, and offline reading keeps
            bedtime steady even without Wi‑Fi.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Sample lullaby rhythm &amp; soft repetition
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              Music, rainy nights, and bedtime-paced tales — chosen for soft
              language and a fade-to-sleep ending.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
          </section>

          <section className="mt-10 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-12 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Lullaby story tips for parents
            </h2>
            <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>Choose the softest story last if you&apos;re reading more than one.</li>
              <li>Keep narration volume lower than daytime reading.</li>
              <li>Repeat the same lullaby-style book for several nights — familiarity is soothing.</li>
              <li>After the last page, add 30–60 seconds of quiet before lights out.</li>
            </ul>
            <p className="mt-4 text-sm text-ink-muted sm:text-base">
              Dig deeper with{" "}
              <Link
                href="/guides/lullabies-for-babies-and-toddlers"
                className="font-medium text-link underline hover:text-link-hover"
              >
                lullabies for babies and toddlers
              </Link>
              ,{" "}
              <Link
                href="/guides/bedtime-stories-for-babies"
                className="font-medium text-link underline hover:text-link-hover"
              >
                bedtime stories for babies
              </Link>
              , and{" "}
              <Link
                href="/guides/white-noise-and-bedtime-sounds"
                className="font-medium text-link underline hover:text-link-hover"
              >
                white noise and bedtime sounds
              </Link>
              .
            </p>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Related hubs
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/cozy-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Cozy bedtime stories
              </Link>
              <Link
                href="/toddler-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Toddler bedtime stories
              </Link>
              <Link
                href="/read-aloud-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Read-aloud stories
              </Link>
              <Link
                href="/collections/sleepy-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Sleepy bedtime collection
              </Link>
            </div>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Lullaby stories FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="lullaby_bedtime_stories"
            title="A lullaby-style story tonight"
            body="Download MoonPage free — sleepy, lullaby-style picture storybooks with calm narration for kids ages 2+."
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
