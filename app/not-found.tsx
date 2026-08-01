import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionCtaButton } from "@/components/SectionCtaButton";
import { StoreButtons } from "@/components/StoreButtons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/**
 * Static export writes this to out/404.html, which is what GitHub Pages
 * serves for any unmatched path.
 *
 * Next's built-in 404 is an unbranded black-on-white line of text with no
 * header, no footer and no links — a dead end for anyone arriving on a stale
 * URL or a mistyped path. This one keeps the nav, the internal links and the
 * download CTA, so a miss still has somewhere to go.
 */
const ELSEWHERE = [
  { href: "/bedtime-stories", label: "Bedtime stories for kids" },
  { href: "/stories", label: "Browse every story" },
  { href: "/collections", label: "Stories by theme" },
  { href: "/guides", label: "Bedtime guides for parents" },
  { href: "/faq", label: "Questions, answered" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="page-gutter mx-auto flex w-full max-w-3xl flex-col items-center py-14 text-center sm:py-20">
        <p className="font-display text-sm font-bold uppercase tracking-widest text-link">
          Page not found
        </p>
        <h1 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl md:text-4xl">
          This page has drifted off to sleep.
        </h1>
        <p className="mt-3 max-w-md text-sm text-ink-muted sm:mt-4 sm:text-base">
          The link may be out of date, or the story may have moved. Here&apos;s
          where everything else lives.
        </p>

        <nav
          aria-label="Popular pages"
          className="mt-8 grid w-full gap-3 sm:mt-10 sm:grid-cols-2"
        >
          {ELSEWHERE.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-wood/25 bg-paper p-4 text-left font-display text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-base"
            >
              {item.label}
            </Link>
          ))}
          <SectionCtaButton href="/" className="sm:col-span-2">
            Back to the home page
          </SectionCtaButton>
        </nav>

        <div className="mt-10 flex w-full justify-center sm:mt-12">
          <StoreButtons campaign="website_404" className="justify-center" />
        </div>
      </main>
      <Footer />
    </>
  );
}
