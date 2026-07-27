import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackHomeLink } from "@/components/BackLink";
import { StoreButtons } from "@/components/StoreButtons";
import { SITE, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/toddler-bedtime-stories",
  title: "Toddler Bedtime Stories (Ages 3+) — Calm, Sleepy, Cozy Tales",
  description:
    "Toddler bedtime stories with simple language, gentle pacing, and cozy endings. Explore sleepy picture storybooks and read-aloud stories for ages 3+.",
  keywords: [
    "toddler bedtime stories",
    "sleepy toddler tales",
    "cozy bedtime stories for toddlers",
    "read aloud toddler storybooks",
    "bedtime stories age 3",
  ],
});

export default function ToddlerBedtimeStoriesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-4xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Toddler bedtime stories that settle, not stimulate
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
            For toddlers, the best bedtime stories use short sentences, warm
            repetition, and a gentle emotional arc. MoonPage&apos;s toddler
            storybooks are built for read-aloud bedtime routines: sleepy pacing,
            cozy endings, and themes little kids understand.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
            Start with{" "}
            <Link
              href="/collections/sleepy-bedtime-stories"
              className="font-medium text-link underline hover:text-link-hover"
            >
              sleepy bedtime stories
            </Link>
            , then browse{" "}
            <Link
              href="/collections/stories-about-big-feelings"
              className="font-medium text-link underline hover:text-link-hover"
            >
              big feelings stories
            </Link>{" "}
            for nights when emotions are running high.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl bg-paper p-6 text-center sm:gap-4 sm:rounded-3xl sm:p-10">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Free to download, built for bedtime
            </h2>
            <p className="max-w-md text-sm text-ink-muted sm:text-base">
              Download MoonPage free, read free stories right away, and unlock
              the full toddler-and-preschool library with Premium.
            </p>
            <StoreButtons campaign="toddler_bedtime_stories" className="justify-center" />
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
                name: "Toddler Bedtime Stories",
                item: `${SITE.domain}/toddler-bedtime-stories`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
