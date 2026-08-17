import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackHomeLink } from "@/components/BackLink";
import { SearchClient } from "@/components/SearchClient";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/search",
  title: "Search MoonPage — bedtime stories & guides",
  description:
    "Search MoonPage for cozy bedtime stories, themed collections, and parenting bedtime guides for kids ages 2+.",
});

export default function SearchPage() {
  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-3xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Search MoonPage
          </h1>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted sm:mt-4 sm:text-base">
            Find a specific bedtime story, a themed collection, or a parenting
            guide. Everything on the site is one search away.
          </p>
          <Suspense fallback={<div className="mt-6 h-12" />}>
            <SearchClient />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
