import raw from "@/data/reviews.json";
import { SITE } from "./site";

/**
 * First-party review store — the single source of truth for on-site ratings.
 *
 * WHY THIS EXISTS (and why it starts empty):
 *
 * MoonPage's App Store listing has a handful of ratings, and the tempting
 * shortcut is to lift them into our JSON-LD as an `aggregateRating`. That is
 * explicitly forbidden: Google's structured-data policy says
 * "Don't aggregate reviews or ratings from other websites." Copying App Store
 * ratings into our own markup is cross-site aggregation and risks a manual
 * action — on a site whose entire growth strategy is organic search.
 *
 * So the only compliant route to a star rating in results is to collect
 * reviews ourselves and mark up OUR OWN data. This module is that pipeline's
 * read side. `data/reviews.json` is the committed aggregate; submissions land
 * via the endpoint in components/ReviewForm.tsx and are merged in by
 * scripts/ingest-reviews.mjs (or by hand) before a rebuild.
 *
 * A key insight that keeps this honest: we emit `aggregateRating` ONLY when
 * `count >= 1` for that key. With an empty store the site ships zero rating
 * markup — which is correct, because we genuinely have zero first-party
 * reviews yet. The moment real reviews arrive, the stars appear, visibly and
 * in structured data at the same time (Google requires the rating to be
 * visible on the page, not just marked up).
 */

/** Key used for a site-wide review (not tied to one story). */
export const SITE_REVIEW_KEY = "__site__";

export type Review = {
  /** A story slug, or SITE_REVIEW_KEY for a site-wide review. */
  key: string;
  /** Whole stars, 1–5. */
  rating: number;
  /** Display name of the reviewer (first name / initial is fine). */
  author: string;
  /** The review body, shown on the page and echoed into JSON-LD. */
  text: string;
  /** ISO date (yyyy-mm-dd) the review was left. */
  date: string;
  /**
   * True only when we can tie the review to a real customer (e.g. it arrived
   * with a store order id we verified). Never set this optimistically — an
   * unverifiable "verified" claim is worse than no claim.
   */
  verified?: boolean;
};

export type Aggregate = {
  count: number;
  /** Mean of the whole stars, rounded to one decimal. */
  average: number;
};

function isValidReview(value: unknown): value is Review {
  if (typeof value !== "object" || value === null) return false;
  const r = value as Record<string, unknown>;
  return (
    typeof r.key === "string" &&
    r.key.length > 0 &&
    typeof r.rating === "number" &&
    Number.isFinite(r.rating) &&
    r.rating >= 1 &&
    r.rating <= 5 &&
    typeof r.author === "string" &&
    r.author.trim().length > 0 &&
    typeof r.text === "string" &&
    r.text.trim().length > 0 &&
    typeof r.date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(r.date)
  );
}

/** Every valid review in the store, newest first. Malformed rows are dropped
 * rather than allowed to break a build. */
export const REVIEWS: Review[] = (raw.reviews as unknown[])
  .filter(isValidReview)
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

/** Reviews left for one key (a story slug, or SITE_REVIEW_KEY). */
export function reviewsFor(key: string): Review[] {
  return REVIEWS.filter((r) => r.key === key);
}

/**
 * Mean rating for a key, or `null` when there is nothing to average. Returning
 * `null` (rather than a zeroed object) is what lets every caller skip the
 * `aggregateRating` node entirely when there are no reviews — the honest state.
 */
export function aggregateFor(key: string): Aggregate | null {
  const items = reviewsFor(key);
  if (items.length === 0) return null;
  const total = items.reduce((sum, r) => sum + r.rating, 0);
  return {
    count: items.length,
    average: Math.round((total / items.length) * 10) / 10,
  };
}

/** How many distinct keys have at least one review — a quick health check. */
export function reviewedKeyCount(): number {
  return new Set(REVIEWS.map((r) => r.key)).size;
}

/**
 * schema.org `AggregateRating` for a key, or `null` when there is nothing to
 * mark up. `ratingValue` is a string to keep one decimal (schema.org accepts
 * either; a string avoids floating-point noise like 4.666666666666667).
 */
export function aggregateRatingNode(key: string): object | null {
  const agg = aggregateFor(key);
  if (!agg) return null;
  return {
    "@type": "AggregateRating",
    ratingValue: agg.average.toFixed(1),
    reviewCount: agg.count,
    bestRating: 5,
    worstRating: 1,
  };
}

/**
 * Up to `limit` individual `Review` nodes for a key. Pairing these with the
 * aggregate gives Google both the summary and the underlying reviews, which is
 * what a review snippet actually renders from.
 */
export function reviewNodes(key: string, limit = 5): object[] {
  return reviewsFor(key)
    .slice(0, limit)
    .map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      datePublished: r.date,
      reviewBody: r.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
    }));
}

/** Fallback contact used by the form when the endpoint rejects a submission. */
export const REVIEWS_FALLBACK_EMAIL = SITE.contactEmail;

/**
 * Stable `@id` for the site-wide app entity.
 *
 * The `MobileApplication` node lives in app/layout.tsx and therefore appears on
 * every page. Its `aggregateRating` must NOT live there: Google requires a
 * marked-up rating to be visible on the page carrying the markup, and the
 * visible site-wide reviews render on the homepage only. So the layout declares
 * the entity by `@id`, and app/page.tsx merges the rating into that same entity
 * on the one page where a human can actually see the reviews.
 */
export const APP_JSONLD_ID = `${SITE.domain}/#app`;

/** Endpoint resolution lives in lib/reviewEndpoint.ts so the client form can
 * import it without pulling this module's review store into the bundle. */
