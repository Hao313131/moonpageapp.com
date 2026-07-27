import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackHomeLink } from "@/components/BackLink";
import { SampleShelfNotice } from "@/components/SampleShelfNotice";
import { StoreButtons } from "@/components/StoreButtons";
import { COLLECTIONS } from "@/lib/collections";
import { SITE, pageMetadata } from "@/lib/site";
import { STORIES } from "@/lib/stories";

export const metadata: Metadata = pageMetadata({
  path: "/bedtime-stories",
  title:
    "Bedtime Stories for Kids, Toddlers & Preschoolers — Sleepy Picture Storybooks",
  description:
    "Browse bedtime stories for kids with cozy sleepy tales, read-aloud picture storybooks, and narration options for toddlers, preschoolers, and parents building a calm bedtime routine.",
  keywords: [
    "kids bedtime stories",
    "sleepy toddler stories",
    "preschool bedtime storybooks",
    "children narration bedtime books",
    "cozy bedtime tales",
    "parent bedtime routine stories",
    "lullaby style stories",
    "picture books for children",
  ],
});

export default function BedtimeStoriesLandingPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bedtime Stories",
        item: `${SITE.domain}/bedtime-stories`,
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-5xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Bedtime stories for kids, toddlers, and preschoolers
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:mt-4 sm:text-base">
            MoonPage collects cozy bedtime tales, sleepy picture storybooks,
            and gentle children&apos;s stories for families with little kids.
            If you&apos;re searching for bedtime stories for toddlers,
            preschool bedtime stories, children&apos;s storybook narration, or
            calm read-aloud stories for parent-and-child wind-down routines,
            you&apos;re in the right place.
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-8 rounded-2xl border border-wood/20 bg-paper p-5 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              What you can find here
            </h2>
            <ul className="mt-3 grid gap-2 text-sm text-ink-muted sm:grid-cols-2 sm:text-base">
              <li>Bedtime stories for kids ages 3+</li>
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
              Some stories are free. Narration can be professional, device
              read-aloud, or your own parent voice. No ads, no login, and works
              offline for kids.
            </p>
            <StoreButtons campaign="bedtime_stories_landing" className="justify-center" />
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
