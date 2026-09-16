import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackHomeLink } from "@/components/BackLink";
import { FaqList } from "@/components/FaqList";
import { SampleShelfNotice } from "@/components/SampleShelfNotice";
import { SeoHubCta } from "@/components/SeoHubCta";
import { StoryGrid } from "@/components/StoryGrid";
import { SITE, hubJsonLd, pageMetadata, speakableJsonLd } from "@/lib/site";
import { storiesByTag } from "@/lib/stories";

export const metadata: Metadata = pageMetadata({
  path: "/winter-bedtime-stories",
  title: "Winter Bedtime Stories for Kids — Snow & Cozy Nights",
  description:
    "Cozy winter bedtime stories for kids ages 2+ — snow days, hibernation, and long dark evenings, read aloud in about five minutes. No ads, works offline.",
  keywords: [
    "winter bedtime stories",
    "winter bedtime stories for kids",
    "snow day stories for kids",
    "hibernation story for kids",
    "cozy winter stories",
    "bedtime stories for long nights",
    "snow stories for toddlers",
    "winter stories for preschoolers",
    "bedtime stories for dark evenings",
    "holiday bedtime stories",
  ],
});

const FAQS = [
  {
    q: "What makes a story a good winter bedtime story?",
    a: "The same thing that makes any bedtime story work, plus a colder, quieter setting. Winter nights are long and dark, so stories that slow down into snow, hibernation, or a warm room at the end fit the season — Bruno curling up after his first snow day, Bramble settling in for a whole winter's sleep.",
    category: "Stories & narration" as const,
  },
  {
    q: "Do you have Christmas or holiday bedtime stories?",
    a: "MoonPage's stories are seasonal rather than tied to one holiday — snow, hibernation, and cold-evening tales you can read all winter. For the nights when the routine itself gets disrupted by visitors, late meals, and excitement, the holiday routine guide covers how to protect enough of bedtime to survive the season.",
    category: "Getting started" as const,
  },
  {
    q: "My child won't settle when it gets dark so early. Any advice?",
    a: "Early darkness can pull bedtime earlier than a child is ready for, and the light changes around daylight saving move wake-ups too. Keep the routine's shape steady and let the clock move a little — the daylight saving and toddler sleep guide walks through the adjustment, and the cozy bedroom guide covers the room itself.",
    category: "Getting started" as const,
  },
  {
    q: "Are winter stories different from the rest of the library?",
    a: "They are the same short, calm, illustrated stories — roughly five minutes read aloud — just drawn from the snow, moon-and-stars, and sleepy shelves. Every one can be read by a professional narrator or in your own recorded voice, and works offline.",
    category: "Stories & narration" as const,
  },
];

const RELATED_GUIDES = [
  { slug: "holiday-routine-disruption", label: "Keep bedtime alive through the holidays" },
  { slug: "daylight-saving-and-toddler-sleep", label: "Daylight saving & toddler sleep" },
  { slug: "cozy-bedroom-for-better-sleep", label: "A cozy bedroom for better sleep" },
  { slug: "white-noise-and-bedtime-sounds", label: "White noise & bedtime sounds" },
  { slug: "early-morning-waking", label: "Early morning waking" },
] as const;

export default function WinterBedtimeStoriesPage() {
  const sample = [
    ...storiesByTag("snow"),
    ...storiesByTag("night"),
    ...storiesByTag("bedtime"),
    ...storiesByTag("family"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = [
    ...hubJsonLd({
      path: "/winter-bedtime-stories",
      name: "Winter Bedtime Stories",
      faqs: FAQS,
      items: [
        { name: "Bedtime stories", url: `${SITE.domain}/bedtime-stories` },
        { name: "Snow & winter stories", url: `${SITE.domain}/collections/winter-and-snow-stories` },
        { name: "Moon & stars stories", url: `${SITE.domain}/collections/moon-and-stars-stories` },
        { name: "Sleepy bedtime stories", url: `${SITE.domain}/collections/sleepy-bedtime-stories` },
        { name: "Bedtime routine chart", url: `${SITE.domain}/bedtime-routine-chart` },
      ],
    }),
    speakableJsonLd({
      path: "/winter-bedtime-stories",
      name: "Winter Bedtime Stories",
      cssSelectors: ["#page-intro"],
    }),
  ];

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-5xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Winter bedtime stories for long, cozy nights
          </h1>
          <p
            id="page-intro"
            className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base"
          >
            Winter is the easiest season to get bedtime right and the easiest to
            let it slip. The nights are long, the room is warm, and a story about
            snow or a bear going to sleep for the winter lands differently in
            December than it does in June. This is the shelf for those nights —
            snow days, hibernation, and cold-evening tales for kids ages 2+.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Every story here is short by design — read aloud in roughly five
            minutes — with an ending that settles rather than excites. Read it
            yourself, let the narrator read it, or record it in your own voice
            for the nights someone else is doing bedtime.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Winter bedtime stories to read tonight
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              A sample from the app&apos;s snow, moon-and-stars, and sleepy
              shelves — each one short enough for a cold-evening bedtime window.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
          </section>

          <section className="mt-10 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-12 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              How to keep bedtime steady through winter
            </h2>
            <ol className="mt-3 space-y-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>
                <span className="font-semibold text-ink">1. Lean into the dark.</span>{" "}
                Early darkness is a gift — dim the room an hour before bed and
                let the story do the rest. It is the light evenings of summer
                that fight you, not these.
              </li>
              <li>
                <span className="font-semibold text-ink">2. Keep the routine&apos;s shape, not its clock.</span>{" "}
                Holiday visitors and late meals will move the timings. Hold the
                order — bath, book, song, lights — even when it runs twenty
                minutes late.
              </li>
              <li>
                <span className="font-semibold text-ink">3. Watch the clocks you didn&apos;t change.</span>{" "}
                Daylight saving shifts wake-ups for a week or two. Expect it,
                adjust bedtime by fifteen minutes, and don&apos;t chase it.
              </li>
              <li>
                <span className="font-semibold text-ink">4. Warm, dark, quiet, done.</span>{" "}
                The same three conditions every winter night — a cozy room, a
                dim light, and a story that ends before tiredness does.
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
                href="/collections/winter-and-snow-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Snow &amp; winter stories
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
              Winter bedtime stories FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="winter_bedtime_stories"
            title="Snowy nights, one calm story"
            body="Download is free and some stories are free to read now. Premium unlocks the whole library — narrated, or recorded in your own voice, and working offline."
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
