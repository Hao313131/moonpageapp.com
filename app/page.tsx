import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
