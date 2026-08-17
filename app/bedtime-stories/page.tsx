import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackHomeLink } from "@/components/BackLink";
import { SampleShelfNotice } from "@/components/SampleShelfNotice";
import { StoreButtons } from "@/components/StoreButtons";
import { COLLECTIONS } from "@/lib/collections";
import { SITE, hubJsonLd, pageMetadata } from "@/lib/site";
import { STORIES } from "@/lib/stories";

export const metadata: Metadata = pageMetadata({
  path: "/bedtime-stories",
  title: "Bedtime Stories for Kids Ages 2+",
  description:
    "Browse bedtime stories for kids ages 2+ — cozy sleepy tales, lullaby-style picture storybooks, read-aloud narration, and toddler/preschool wind-down stories. MoonPage is trusted by thousands of moms.",
  keywords: [
    "kids bedtime stories",
    "bedtime stories ages 2+",
    "children narration bedtime books",
    "cozy bedtime tales",
    "parent bedtime routine stories",
    "lullaby style stories",
    "picture books for children",
    "sleepy stories for kids",
    "read aloud bedtime stories",
    "toddler bedtime stories",
  ],
});

export default function BedtimeStoriesLandingPage() {
  const jsonLd = hubJsonLd({
    path: "/bedtime-stories",
    name: "Bedtime Stories",
    items: [
      { name: "All stories", url: `${SITE.domain}/stories` },
      { name: "Collections", url: `${SITE.domain}/collections` },
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
        name: "Lullaby bedtime stories",
        url: `${SITE.domain}/lullaby-bedtime-stories`,
      },
      {
        name: "Picture books for kids",
        url: `${SITE.domain}/picture-books-for-kids`,
      },
      {
        name: "Bedtime stories app",
        url: `${SITE.domain}/bedtime-stories-app`,
      },
      {
        name: "Bedtime stories by age",
        url: `${SITE.domain}/bedtime-stories-by-age`,
      },
      {
        name: "Read-aloud strategies (guide)",
        url: `${SITE.domain}/guides/read-aloud-to-toddlers`,
      },
      {
        name: "Bedtime routine guide",
        url: `${SITE.domain}/guides/bedtime-routine-for-toddlers`,
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
            Bedtime stories for kids ages 2+
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:mt-4 sm:text-base">
            MoonPage collects cozy bedtime tales, sleepy picture storybooks,
            and gentle children&apos;s stories for families with little kids.
            Trusted by thousands of moms for calmer bedtime routines and cozy
            stories.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-8 rounded-2xl border border-wood/20 bg-paper p-5 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              What you can find here
            </h2>
            <ul className="mt-3 grid gap-2 text-sm text-ink-muted sm:grid-cols-2 sm:text-base">
              <li>Bedtime stories for kids ages 2+</li>
              <li>Sleepy stories and cozy wind-down tales</li>
              <li>Toddler and preschool picture storybooks</li>
              <li>Narrated stories and read-aloud bedtime books</li>
              <li>Kindness, courage, friendship, and big-feelings stories</li>
              <li>Parenting-friendly bedtime routine guides</li>
            </ul>
          </section>

          <section className="mt-8 sm:mt-10">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Browse bedtime stories by theme
            </h2>
            <p className="mt-2 text-sm text-ink-muted sm:text-base">
              Pick a theme first if your child needs something specific tonight:
              sleepy, gentle, adventurous, comforting, or extra cozy.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {COLLECTIONS.map((c) => (
                <Link
                  key={c.slug}
                  href={`/collections/${c.slug}`}
                  className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
                >
                  {c.title}
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              More bedtime story hubs
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
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
                href="/read-aloud-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Read-aloud bedtime stories
              </Link>
              <Link
                href="/cozy-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Cozy bedtime tales
              </Link>
              <Link
                href="/lullaby-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Lullaby bedtime stories
              </Link>
              <Link
                href="/picture-books-for-kids"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Picture books for kids
              </Link>
              <Link
                href="/bedtime-stories-app"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Bedtime stories app
              </Link>
              <Link
                href="/bedtime-stories-by-age"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Stories by age
              </Link>
            </div>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Storybook sample: {STORIES.length} story intros on the homepage
            </h2>
            <p className="mt-2 text-sm text-ink-muted sm:text-base">
              The website shows a sample shelf so parents can preview style,
              tone, and topics before downloading the app.
            </p>
            <p className="mt-3 text-sm text-ink-muted sm:text-base">
              <Link
                href="/stories"
                className="font-semibold text-link underline hover:text-link-hover"
              >
                Explore all {STORIES.length} featured stories
              </Link>{" "}
              and open any title to read full introductions, bedtime fit notes,
              and related themes.
            </p>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Parenting guides for better bedtime
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
              Stories help most when the routine around them is steady. Our
              guide library covers read-aloud habits, bedtime routines, screen
              time before bed, and toddler sleep resistance with short, practical
              steps for parents.
            </p>
            <p className="mt-3 text-sm text-ink-muted sm:text-base">
              Start with{" "}
              <Link
                href="/guides/read-aloud-to-toddlers"
                className="font-medium text-link underline hover:text-link-hover"
              >
                read-aloud strategies
              </Link>{" "}
              or the{" "}
              <Link
                href="/guides/bedtime-routine-for-toddlers"
                className="font-medium text-link underline hover:text-link-hover"
              >
                bedtime routine guide
              </Link>
              .
            </p>
          </section>

          <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl bg-paper p-6 text-center sm:mt-16 sm:gap-4 sm:rounded-3xl sm:p-10">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Read tonight&apos;s bedtime story in MoonPage
            </h2>
            <p className="max-w-md text-sm text-ink-muted sm:text-base">
              Some stories are free. Every story can be read by a professional
              narrator or in your own recorded voice. No ads, no login, and works
              offline for kids.
            </p>
            <StoreButtons campaign="bedtime_stories_landing" className="justify-center" />
          </div>
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
