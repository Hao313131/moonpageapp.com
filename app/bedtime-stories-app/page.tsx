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
import { FEATURED_STORIES, STORIES } from "@/lib/stories";

export const metadata: Metadata = pageMetadata({
  path: "/bedtime-stories-app",
  title: "Bedtime Stories App for Kids Ages 2+",
  description:
    "MoonPage is a bedtime stories app for kids, toddlers, and preschoolers — cozy picture storybooks, read-aloud narration, parent voice recording, offline, no ads. Free to start.",
  keywords: [
    "bedtime stories app",
    "kids story app",
    "children's book app",
    "storybook app for kids",
    "read aloud app",
    "picture book app",
    "toddler bedtime stories app",
    "kids bedtime stories app",
    "moonpage",
    "no ads kids app",
  ],
});

const FAQS = [
  {
    q: "What is the best bedtime stories app for kids?",
    a: "Look for calm pacing, original illustrated stories, no ads, offline use, and narration options parents trust. MoonPage is built specifically for wind-down — not for endless video-style feeds.",
    category: "Getting started" as const,
  },
  {
    q: "Does MoonPage work offline?",
    a: "Yes. Once stories are on your device, illustrations and narration work without Wi‑Fi — useful for travel, flights, and rooms with weak signal.",
    category: "Devices & offline" as const,
  },
  {
    q: "Is MoonPage free?",
    a: "Download is free and some stories are free to read. MoonPage Premium unlocks the full ongoing library. No account or login required to start.",
    category: "Pricing & subscription" as const,
  },
  {
    q: "iPhone, iPad, and Android?",
    a: "Yes — MoonPage is available on the App Store and Google Play for phones and tablets.",
    category: "Devices & offline" as const,
  },
];

const FEATURES = [
  {
    title: "Original picture storybooks",
    body: "Illustrated bedtime stories written for ages 2+ — cozy, sleepy, and themed for kindness, animals, family, and big feelings.",
  },
  {
    title: "Read-aloud narration",
    body: "Hear every story by a professional narrator, or record your own parent voice once and reuse it on busy nights.",
  },
  {
    title: "No ads, no login",
    body: "A parent-directed kids app without ad interruptions or account walls — privacy-minded and COPPA/GDPR-K aware.",
  },
  {
    title: "Works offline",
    body: "Bedtime shouldn't depend on Wi‑Fi. Download stories and keep the routine steady anywhere.",
  },
] as const;

export default function BedtimeStoriesAppPage() {
  const jsonLd = hubJsonLd({
    path: "/bedtime-stories-app",
    name: "Bedtime Stories App",
    faqs: FAQS,
    items: [
      { name: "All bedtime stories", url: `${SITE.domain}/stories` },
      { name: "Bedtime stories", url: `${SITE.domain}/bedtime-stories` },
      {
        name: "Toddler bedtime stories",
        url: `${SITE.domain}/toddler-bedtime-stories`,
      },
      {
        name: "Preschool bedtime stories",
        url: `${SITE.domain}/preschool-bedtime-stories`,
      },
      {
        name: "Read-aloud bedtime stories",
        url: `${SITE.domain}/read-aloud-bedtime-stories`,
      },
      { name: "Cozy bedtime stories", url: `${SITE.domain}/cozy-bedtime-stories` },
      {
        name: "Picture books for kids",
        url: `${SITE.domain}/picture-books-for-kids`,
      },
      { name: "FAQ", url: `${SITE.domain}/faq` },
    ],
  });

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-5xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            MoonPage: a bedtime stories app for kids ages 2+
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Looking for a bedtime stories app that actually helps kids wind
            down? MoonPage is a phone and tablet storybook app for toddlers,
            preschoolers, and little kids — original cozy picture books,
            lullaby-style sleepy tales, and read-aloud narration parents can
            trust. Trusted by thousands of moms for calmer bedtime routines and
            cozy stories.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Free to download. No ads. No login. Works offline. Hear stories by
            a professional narrator, or in your own recorded voice.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-wood/20 bg-paper p-5 sm:rounded-3xl sm:p-6"
              >
                <h2 className="font-display text-base font-semibold text-ink sm:text-lg">
                  {f.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {f.body}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Preview stories before you download
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              {STORIES.length} sample titles on the website — a taste of the
              full app library.
            </p>
            <StoryGrid stories={FEATURED_STORIES} className="mt-6" />
            <p className="mt-4 text-sm text-ink-muted sm:text-base">
              <Link
                href="/stories"
                className="font-semibold text-link underline hover:text-link-hover"
              >
                Browse the full sample shelf
              </Link>
              , or start from{" "}
              <Link
                href="/bedtime-stories"
                className="font-medium text-link underline hover:text-link-hover"
              >
                bedtime stories for kids
              </Link>
              .
            </p>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Built for the searches parents make
            </h2>
            <ul className="mt-3 grid gap-2 text-sm text-ink-muted sm:grid-cols-2 sm:text-base">
              <li>Bedtime stories app for toddlers &amp; preschoolers</li>
              <li>Kids storybook / picture book app</li>
              <li>Read-aloud &amp; narration app for children</li>
              <li>Cozy sleepy tales &amp; lullaby-style stories</li>
              <li>Offline kids stories without ads</li>
              <li>Parent voice bedtime storytelling</li>
            </ul>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Explore by audience
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/toddler-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Toddlers
              </Link>
              <Link
                href="/preschool-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Preschool
              </Link>
              <Link
                href="/read-aloud-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Read-aloud
              </Link>
              <Link
                href="/cozy-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Cozy tales
              </Link>
              <Link
                href="/picture-books-for-kids"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Picture books
              </Link>
              <Link
                href="/faq"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                App FAQ
              </Link>
            </div>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Bedtime stories app FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="bedtime_stories_app"
            title="Download the MoonPage bedtime stories app"
            body="Free on the App Store and Google Play. Start with free stories tonight — Premium unlocks the full library."
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
