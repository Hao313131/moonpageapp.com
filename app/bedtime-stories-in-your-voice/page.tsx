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
  path: "/bedtime-stories-in-your-voice",
  title: "Bedtime Stories in Your Own Voice",
  description:
    "Record yourself reading a bedtime story and play it back any night — even when you're away. Cozy, ad-free, and free to try in MoonPage.",
  keywords: [
    "record your own voice bedtime story",
    "bedtime stories in my voice",
    "personalized bedtime stories",
    "bedtime stories grandma voice",
    "custom bedtime stories",
    "voice recording kids story app",
    "bedtime stories for traveling parent",
    "narrate a story yourself",
  ],
});

const FAQS = [
  {
    q: "Can I really record my own voice for a bedtime story?",
    a: "Yes — every MoonPage story can be read by a professional narrator or in your own recorded voice from inside the app. Recordings stay on your device, so they're private to your family.",
    category: "Stories & narration" as const,
  },
  {
    q: "Will my child hear my voice even when I'm away?",
    a: "Yes. Record a story once and it plays back whenever your child opens it — on a work night, a trip, or any evening you can't be there. It's the same book, read in the voice they know.",
    category: "Stories & narration" as const,
  },
  {
    q: "Can grandparents or a second parent record stories too?",
    a: "Any caregiver who opens the app can record a voice version, so a child can fall asleep to a parent, grandparent, or whoever they usually curl up with. Each person records on their own device.",
    category: "Stories & narration" as const,
  },
  {
    q: "Do voice recordings need the internet?",
    a: "No — once a story and its recording are on the device, playback works offline, including on a plane or somewhere with no signal.",
    category: "Devices & offline" as const,
  },
];

const RELATED_GUIDES = [
  { slug: "how-to-make-up-a-bedtime-story", label: "Making up a bedtime story" },
  { slug: "grandparents-reading-from-far-away", label: "Grandparents reading from far away" },
  { slug: "bedtime-stories-in-two-languages", label: "Stories in two languages" },
  { slug: "bedtime-when-youre-away", label: "Bedtime when you're away" },
] as const;

export default function VoiceBedtimeStoriesPage() {
  const sample = [
    ...storiesByTag("family"),
    ...storiesByTag("patience"),
    ...storiesByTag("objects"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = hubJsonLd({
    path: "/bedtime-stories-in-your-voice",
    name: "Bedtime Stories in Your Voice",
    faqs: FAQS,
    items: [
      { name: "Bedtime stories", url: `${SITE.domain}/bedtime-stories` },
      { name: "Free bedtime stories", url: `${SITE.domain}/free-bedtime-stories` },
      { name: "Short bedtime stories", url: `${SITE.domain}/short-bedtime-stories` },
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
            Bedtime stories in your own voice
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            The voice a child falls asleep to matters more than the words. In
            MoonPage every story can be read by a professional narrator or
            recorded in your own voice — so the parent working late, the
            grandparent in another city, or the traveling caregiver can still be
            the voice their child drifts off to.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            It&apos;s the same calm, original story, just narrated by someone
            they know. Recordings stay on your device, so they&apos;re private
            to your family and play back even with no internet.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Stories to record in your voice tonight
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              {STORIES.length} sample titles from the app — each one short
              enough to record in a few minutes and gentle enough to replay
              every night.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
          </section>

          <section className="mt-10 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-12 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              How to record a voice bedtime story
            </h2>
            <ol className="mt-3 space-y-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>
                <span className="font-semibold text-ink">1. Pick a short one.</span>{" "}
                A five-minute story is easy to record in one sitting and easy to
                replay without the night dragging on.
              </li>
              <li>
                <span className="font-semibold text-ink">2. Record somewhere quiet.</span>{" "}
                You don&apos;t need a studio — a calm room is enough. The point
                is a familiar voice, not a perfect take.
              </li>
              <li>
                <span className="font-semibold text-ink">3. Slow down at the end.</span>{" "}
                Drop your pace on the last page. Your child hears your calm as
                much as your words.
              </li>
              <li>
                <span className="font-semibold text-ink">4. Let it replay.</span>{" "}
                Once recorded, the story plays back any night — including the
                ones you can&apos;t be there.
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
                href="/short-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Short bedtime stories
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
              Voice bedtime stories FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="bedtime_stories_in_your_voice"
            title="Your voice, every night"
            body="Download is free and some stories are free to read now. Record your own narration so your child hears you even when you're away."
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
