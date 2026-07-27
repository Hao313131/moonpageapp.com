import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackHomeLink } from "@/components/BackLink";
import { StoreButtons } from "@/components/StoreButtons";
import { SITE, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/preschool-bedtime-stories",
  title: "Preschool Bedtime Stories — Picture Storybooks for Ages 3+",
  description:
    "Preschool bedtime stories and picture storybooks for ages 3+ with read-aloud narration, calm pacing, and parent-friendly bedtime themes.",
  keywords: [
    "preschool bedtime stories",
    "preschool picture storybooks",
    "children bedtime story app",
    "narrated bedtime stories for preschoolers",
    "kids bedtime routine stories",
  ],
});

export default function PreschoolBedtimeStoriesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-4xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Preschool bedtime stories for ages 3+
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
            Preschoolers often want story time to be both interesting and calm.
            MoonPage&apos;s picture storybooks balance curiosity with bedtime
            rhythm, so children stay engaged without getting wound up before
            sleep.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
            Browse by theme in{" "}
            <Link
              href="/collections"
              className="font-medium text-link underline hover:text-link-hover"
            >
              bedtime story collections
            </Link>
            , explore the{" "}
            <Link
              href="/stories"
              className="font-medium text-link underline hover:text-link-hover"
            >
              story sample shelf
            </Link>
            , and use the{" "}
            <Link
              href="/guides"
              className="font-medium text-link underline hover:text-link-hover"
            >
              parenting guides
            </Link>{" "}
            for practical bedtime routine support.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl bg-paper p-6 text-center sm:gap-4 sm:rounded-3xl sm:p-10">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Narration options kids actually use
            </h2>
            <p className="max-w-md text-sm text-ink-muted sm:text-base">
              Each story can play with professional narration, device read-aloud,
              or your own recorded parent voice.
            </p>
            <StoreButtons campaign="preschool_bedtime_stories" className="justify-center" />
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE.domain,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Preschool Bedtime Stories",
                item: `${SITE.domain}/preschool-bedtime-stories`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
