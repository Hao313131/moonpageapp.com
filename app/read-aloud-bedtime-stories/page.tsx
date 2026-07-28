import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackHomeLink } from "@/components/BackLink";
import { SampleShelfNotice } from "@/components/SampleShelfNotice";
import { StoreButtons } from "@/components/StoreButtons";
import { SITE, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/read-aloud-bedtime-stories",
  title: "Read-Aloud Bedtime Stories for Children — Narration & Parent Voice",
  description:
    "Read-aloud bedtime stories for children with narration choices: by a professional narrator, or in your own recorded voice.",
  keywords: [
    "read aloud bedtime stories",
    "children narration stories",
    "parent voice bedtime stories",
    "storybook narration app",
    "kids bedtime read aloud",
  ],
});

export default function ReadAloudBedtimeStoriesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-4xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Read-aloud bedtime stories with flexible narration
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
            Families search for read-aloud bedtime stories for different reasons:
            busy nights, travel nights, co-parenting schedules, or simply
            helping a child settle with a familiar voice. MoonPage supports
            reading by a professional narrator or in your own recorded voice
            for each story.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
            If your child relaxes best with predictable sound and pacing, pair
            read-aloud stories with a stable routine from our{" "}
            <Link
              href="/guides/bedtime-routine-for-toddlers"
              className="font-medium text-link underline hover:text-link-hover"
            >
              bedtime routine guide
            </Link>
            .
          </p>

          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <div className="mt-10 rounded-2xl border border-wood/20 bg-paper p-5 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Common parent searches we cover
            </h2>
            <ul className="mt-3 grid gap-2 text-sm text-ink-muted sm:grid-cols-2 sm:text-base">
              <li>Kids bedtime read-aloud stories</li>
              <li>Narrated children&apos;s storybooks</li>
              <li>Parent voice bedtime storytelling</li>
              <li>Cozy sleepy tales before bed</li>
              <li>Toddler storybook narration</li>
              <li>Preschool bedtime listening stories</li>
            </ul>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl bg-paper p-6 text-center sm:gap-4 sm:rounded-3xl sm:p-10">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Start free, then unlock the full library
            </h2>
            <p className="max-w-md text-sm text-ink-muted sm:text-base">
              Download is free and some stories are free to read right now.
              Premium unlocks full ongoing access to the complete story shelf.
            </p>
            <StoreButtons campaign="read_aloud_bedtime_stories" className="justify-center" />
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
                name: "Read-Aloud Bedtime Stories",
                item: `${SITE.domain}/read-aloud-bedtime-stories`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
