import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { StoryShowcase } from "@/components/home/StoryShowcase";
import { Trust } from "@/components/home/Trust";
import { Testimonials } from "@/components/home/Testimonials";
import { Pricing } from "@/components/home/Pricing";
import { GuidePreview } from "@/components/home/GuidePreview";
import { Faq } from "@/components/home/Faq";
import { ReviewSection } from "@/components/ReviewSection";
import {
  APP_JSONLD_ID,
  SITE_REVIEW_KEY,
  aggregateRatingNode,
  reviewNodes,
} from "@/lib/reviews";

/**
 * Curated inner-hub links kept directly on the homepage. 哥飞's internal-link
 * playbook stresses "把新内容/热门页面在首页列出来" — surfacing top hubs here
 * speeds their crawl and lets homepage authority flow one hop straight to the
 * orchard instead of stopping at /bedtime-stories. Anchors are descriptive
 * (not "click here") so they carry topical relevance.
 */
const TOPIC_HUBS: { href: string; label: string }[] = [
  { href: "/toddler-bedtime-stories", label: "Toddler bedtime stories (ages 1–3)" },
  { href: "/preschool-bedtime-stories", label: "Preschool bedtime stories (ages 3–5)" },
  { href: "/cozy-bedtime-stories", label: "Cozy bedtime stories" },
  { href: "/short-bedtime-stories", label: "Short 5-minute bedtime stories" },
  { href: "/read-aloud-bedtime-stories", label: "Read-aloud bedtime stories" },
  { href: "/lullaby-bedtime-stories", label: "Lullaby bedtime stories" },
  { href: "/bedtime-stories-by-age", label: "Bedtime stories by age" },
  { href: "/free-bedtime-stories", label: "Free bedtime stories" },
];

/**
 * The homepage is the only page that renders the site-wide review section, so
 * it is also the only page allowed to mark up the site-wide rating.
 *
 * The `MobileApplication` entity itself is declared in app/layout.tsx (it is
 * true on every page). Here we merge the rating into that same entity by `@id`
 * — a plain JSON-LD node merge, not a second competing entity. Keeping the two
 * together is what makes the markup honest: Google requires a rating to be
 * visible on the page that carries it, and this is where a human can read the
 * reviews that produced the number.
 *
 * With an empty store this emits nothing at all — the honest state.
 */
function siteRatingJsonLd(): object | null {
  const rating = aggregateRatingNode(SITE_REVIEW_KEY);
  if (!rating) return null;
  const reviews = reviewNodes(SITE_REVIEW_KEY, 5);
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "@id": APP_JSONLD_ID,
    aggregateRating: rating,
    ...(reviews.length > 0 ? { review: reviews } : {}),
  };
}

export default function Home() {
  const ratingJsonLd = siteRatingJsonLd();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <StoryShowcase />
        <section className="page-gutter mx-auto max-w-6xl py-10 sm:py-14">
          <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
            Popular bedtime story topics
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-ink-muted sm:text-base">
            Jump straight to the shelf that fits tonight — by age, mood, or how
            much time you have before lights-out.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {TOPIC_HUBS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                {t.label}
              </Link>
            ))}
          </div>
        </section>
        <Trust />
        <Testimonials />
        <Pricing />
        <ReviewSection
          reviewKey={SITE_REVIEW_KEY}
          title="MoonPage"
          variant="site"
          className="page-gutter mx-auto max-w-6xl py-12 sm:py-16 md:py-20"
        />
        <GuidePreview />
        <Faq />
      </main>
      <Footer />
      {ratingJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingJsonLd) }}
        />
      )}
    </>
  );
}
