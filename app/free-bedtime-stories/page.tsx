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
  path: "/free-bedtime-stories",
  title: "Free Bedtime Stories for Kids (Read Free Tonight)",
  description:
    "Some MoonPage stories are free to read right now — no account, no ads, no card. What's free, what isn't, and where else to find free stories.",
  keywords: [
    "free bedtime stories",
    "free bedtime stories for kids",
    "bedtime stories free online",
    "free online bedtime stories",
    "free kids stories to read",
    "read bedtime stories free",
    "free story books for kids online",
    "no cost bedtime stories",
  ],
});

const FAQS = [
  {
    q: "Are the bedtime stories actually free?",
    a: "Yes — a sample of MoonPage's illustrated stories is free to open and read, with no account, no email, and no card. The full library is an optional subscription, and the free stories never expire or get taken away.",
    category: "Pricing & subscription" as const,
  },
  {
    q: "Do I have to sign up or hand over an email?",
    a: "No. There is no account and no login anywhere in MoonPage. Nothing is gated behind an email address, which also means there is no marketing list to be added to.",
    category: "Privacy & safety" as const,
  },
  {
    q: "Why are some stories paid if others are free?",
    a: "Every story is an original, illustrated picture book made for this app, and new ones are added continuously — that is what the subscription funds. The free sample is the real thing, not a stripped-down demo.",
    category: "Pricing & subscription" as const,
  },
  {
    q: "Are free bedtime stories online safe to read to my child?",
    a: "That depends entirely on the source. The two things worth checking are whether the page is wrapped in ads that autoplay or move, and whether the text was written for children. MoonPage has no ads and no third-party trackers, and every story is written for ages 2+.",
    category: "Privacy & safety" as const,
  },
];

const RELATED_GUIDES = [
  { slug: "choosing-bedtime-books", label: "Choosing bedtime books" },
  { slug: "building-a-home-library", label: "Building a home library" },
  { slug: "library-visits-with-toddlers", label: "Library visits with toddlers" },
  { slug: "screen-time-before-bed", label: "Screen time before bed" },
  { slug: "how-long-to-read-at-bedtime", label: "How long should reading take?" },
] as const;

/**
 * Free is the single biggest long-tail cluster in this category, and it is one
 * where most competing pages are junk — ad-wrapped scrapes of public-domain
 * text. The honest differentiator is that MoonPage's free tier is real, so the
 * page spends most of its words on what is free, what is not, and where else a
 * parent can legitimately find free stories (library apps, public-domain
 * archives) — which is useful whether or not they ever install anything.
 */
export default function FreeBedtimeStoriesPage() {
  const sample = [
    ...storiesByTag("kindness"),
    ...storiesByTag("friendship"),
    ...storiesByTag("animals"),
    ...storiesByTag("bedtime"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = hubJsonLd({
    path: "/free-bedtime-stories",
    name: "Free Bedtime Stories",
    faqs: FAQS,
    items: [
      { name: "Bedtime stories", url: `${SITE.domain}/bedtime-stories` },
      { name: "Short bedtime stories", url: `${SITE.domain}/short-bedtime-stories` },
      { name: "Bedtime stories by age", url: `${SITE.domain}/bedtime-stories-by-age` },
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
            Free bedtime stories you can read tonight
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Parents search for free bedtime stories for a good reason: bedtime
            is a nightly cost, and nobody wants to commit to a subscription
            before they know whether the stories are any good. A sample of
            MoonPage&apos;s illustrated stories is free to open right now — no
            account, no email, no card, no ads.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            The rest of this page is honest about the boundary: what&apos;s
            free, what isn&apos;t, and where else to look if you want free
            stories without installing anything at all. There is no shortage of
            free bedtime stories online — there is a shortage of free bedtime
            stories that aren&apos;t wrapped in autoplaying ads or scraped
            together from text nobody wrote for a child.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Stories you can read free right now
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              {STORIES.length} sample titles from the app library — the free
              ones open without any purchase.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
          </section>

          <section className="mt-10 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-12 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              What&apos;s free in MoonPage, and what isn&apos;t
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[34rem] border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-wood/30">
                    <th className="py-2 pr-4 font-display font-semibold text-ink">
                      Feature
                    </th>
                    <th className="py-2 pr-4 font-display font-semibold text-ink">
                      Free
                    </th>
                    <th className="py-2 font-display font-semibold text-ink">
                      MoonPage Premium
                    </th>
                  </tr>
                </thead>
                <tbody className="text-ink-muted">
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">Sample illustrated stories</td>
                    <td className="py-2 pr-4">Yes</td>
                    <td className="py-2">Full library</td>
                  </tr>
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">Professional narration</td>
                    <td className="py-2 pr-4">On the free stories</td>
                    <td className="py-2">Every story</td>
                  </tr>
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">Offline reading</td>
                    <td className="py-2 pr-4">Yes</td>
                    <td className="py-2">Yes</td>
                  </tr>
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">Account or email required</td>
                    <td className="py-2 pr-4">No</td>
                    <td className="py-2">No</td>
                  </tr>
                  <tr className="border-b border-wood/15">
                    <td className="py-2 pr-4 text-ink">Ads or third-party trackers</td>
                    <td className="py-2 pr-4">None</td>
                    <td className="py-2">None</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-ink">
                      Record a story in your own voice
                    </td>
                    <td className="py-2 pr-4">—</td>
                    <td className="py-2">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              The subscription is monthly or yearly and is billed through the
              App Store, so it cancels the same way any other app subscription
              does — see{" "}
              <Link href="/support" className="font-medium text-link underline hover:text-link-hover">
                Support
              </Link>{" "}
              for the cancel and restore steps.
            </p>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Where else to find free bedtime stories
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
              If you&apos;d rather not install anything, these are the sources
              that hold up — all free, all legitimate, none of them ad-farms:
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>
                <span className="font-semibold text-ink">
                  Your public library&apos;s app.
                </span>{" "}
                A library card usually gets you free access to a large digital
                picture-book collection through apps such as Libby or BorrowBox.
                This is the single best free option, and almost nobody uses it.
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Storyline Online.
                </span>{" "}
                Free videos of actors reading published picture books aloud,
                produced by the SAG-AFTRA Foundation. Useful as a treat, less
                useful as a nightly routine — it&apos;s a screen.
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Public-domain archives.
                </span>{" "}
                Project Gutenberg and the Internet Archive hold thousands of
                out-of-copyright children&apos;s books. Free and legal, but the
                language is often a century old and the scans are plain.
              </li>
              <li>
                <span className="font-semibold text-ink">
                  Your own shelf, rotated.
                </span>{" "}
                A dozen picture books cycled in a different order each week
                feels new to a three-year-old. See{" "}
                <Link
                  href="/guides/building-a-home-library"
                  className="font-medium text-link underline hover:text-link-hover"
                >
                  building a home library
                </Link>
                .
              </li>
            </ul>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
              What to avoid: pages that look like story collections but are
              mostly ad inventory, and any story site that autoplays video or
              audio you didn&apos;t ask for. Both are worse than no story at all
              at bedtime, because the interruption is what wakes a child back up.
            </p>
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
                href="/sleep-stories-for-kids"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Sleep stories for kids
              </Link>
              <Link
                href="/bedtime-stories-by-age"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Bedtime stories by age
              </Link>
              <Link
                href="/bedtime-stories-app"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Bedtime stories app
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
              Free bedtime stories FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="free_bedtime_stories"
            title="Start with the free stories — no account needed"
            body="Download is free and a sample of stories is free to read tonight. Premium unlocks ongoing access to the whole library, narrated or in your own voice."
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
