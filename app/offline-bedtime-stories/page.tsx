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
  path: "/offline-bedtime-stories",
  title: "Offline Bedtime Stories for Travel",
  description:
    "Bedtime stories that play with no wifi — for planes, cars, hotels and power cuts. Download once and read anywhere. No ads, free to try.",
  keywords: [
    "offline bedtime stories",
    "bedtime stories no wifi",
    "airplane bedtime stories",
    "travel bedtime stories",
    "bedtime stories for car rides",
    "stories that work offline",
    "download bedtime stories",
    "bedtime stories for hotels",
  ],
});

const FAQS = [
  {
    q: "Do MoonPage stories work without internet?",
    a: "Yes — once a story is on the device, the illustrations and narration play fully offline. An internet connection is only needed to download or update the app.",
    category: "Devices & offline" as const,
  },
  {
    q: "Will bedtime stories work on a plane or in the car?",
    a: "They will. Open any downloaded story and it reads aloud with no signal, so a long flight or a late drive home doesn't mean losing the routine.",
    category: "Devices & offline" as const,
  },
  {
    q: "Can I put the same stories on more than one device?",
    a: "Your library restores on any device signed into the same App Store account, so a child's usual bedtime shelf can follow them between iPad and phone.",
    category: "Devices & offline" as const,
  },
  {
    q: "What if the hotel wifi is down?",
    a: "It doesn't matter — the stories are already on the device. A familiar story in a strange room is often what helps a child settle fastest.",
    category: "Getting started" as const,
  },
];

const RELATED_GUIDES = [
  { slug: "travel-and-jet-lag-with-toddlers", label: "Travel and jet lag" },
  { slug: "bedtime-when-youre-away", label: "Bedtime when you're away" },
  { slug: "holiday-routine-disruption", label: "Holiday routine disruption" },
  { slug: "summer-bedtime-light-evenings", label: "Light evenings in summer" },
] as const;

export default function OfflineBedtimeStoriesPage() {
  const sample = [
    ...storiesByTag("night"),
    ...storiesByTag("snow"),
    ...storiesByTag("bedtime"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = hubJsonLd({
    path: "/offline-bedtime-stories",
    name: "Offline Bedtime Stories",
    faqs: FAQS,
    items: [
      { name: "Bedtime stories", url: `${SITE.domain}/bedtime-stories` },
      { name: "Short bedtime stories", url: `${SITE.domain}/short-bedtime-stories` },
      { name: "Free bedtime stories", url: `${SITE.domain}/free-bedtime-stories` },
      { name: "Sleep stories for kids", url: `${SITE.domain}/sleep-stories-for-kids` },
    ],
  });

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-5xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Offline bedtime stories for travel
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            The bedtime routine is the one thing worth keeping when everything
            else changes. MoonPage stories play with no wifi — download once and
            they&apos;re there for the plane, the back seat, the hotel, or the
            night the power drops. No signal, no streaming, no lost calm.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Every story is original and illustrated, read aloud by a narrator or
            in your own voice, with no ads and no login getting in the way of
            sleep.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Stories to download before you go
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              {STORIES.length} sample titles from the app — each one plays fully
              offline once it&apos;s on the device.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
          </section>

          <section className="mt-10 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-12 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Keep the routine on the road
            </h2>
            <ol className="mt-3 space-y-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>
                <span className="font-semibold text-ink">1. Download before you leave.</span>{" "}
                Open the stories you want while you have wifi, so they&apos;re
                cached on the device.
              </li>
              <li>
                <span className="font-semibold text-ink">2. Bring the same book.</span>{" "}
                A familiar story in a strange room is what helps a child settle
                fastest away from home.
              </li>
              <li>
                <span className="font-semibold text-ink">3. Use your own voice.</span>{" "}
                A recorded voice version travels with the device, so the comfort
                is there even when you&apos;re not.
              </li>
              <li>
                <span className="font-semibold text-ink">4. Same order, anywhere.</span>{" "}
                Story, then lights — the routine is what does the work, not the
                location.
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
                href="/short-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Short bedtime stories
              </Link>
              <Link
                href="/free-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Free bedtime stories
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
              Offline bedtime stories FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="offline_bedtime_stories"
            title="The routine, anywhere"
            body="Download is free and some stories are free to read now. Premium unlocks the full library to take wherever you go."
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
