import { ReviewForm } from "@/components/ReviewForm";
import { ReviewStars } from "@/components/ReviewStars";
import {
  REVIEWS_FALLBACK_EMAIL,
  aggregateFor,
  reviewsFor,
} from "@/lib/reviews";

/**
 * Visible on-site reviews for one key, plus the submission form.
 *
 * This is the page-visible half of the review system — and it is not optional
 * decoration. Google's review-snippet guidelines require that any rating we
 * mark up is also visible to a human on the page; markup without visible
 * reviews is a policy violation, not a shortcut. So the same `reviewsFor()`
 * data that feeds the `aggregateRating` JSON-LD is rendered here, always.
 *
 * When there are no reviews yet (the current state) the section simply says so
 * and offers the form — no stars, no markup, nothing invented.
 */
export function ReviewSection({
  reviewKey,
  title,
  className = "",
}: {
  reviewKey: string;
  /** Human label used in the heading, e.g. the story title. */
  title: string;
  className?: string;
}) {
  const reviews = reviewsFor(reviewKey);
  const agg = aggregateFor(reviewKey);

  return (
    <section className={`mt-10 sm:mt-12 ${className}`} id="reviews">
      <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
        Parent reviews for “{title}”
      </h2>

      {agg ? (
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
          <ReviewStars value={agg.average} />
          <span className="text-sm font-semibold text-ink sm:text-base">
            {agg.average.toFixed(1)} out of 5
          </span>
          <span className="text-sm text-ink-muted sm:text-base">
            · {agg.count} {agg.count === 1 ? "review" : "reviews"}
          </span>
        </div>
      ) : (
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
          No reviews yet — be the first to say how this one went down at
          bedtime.
        </p>
      )}

      {reviews.length > 0 && (
        <ul className="mt-5 space-y-5">
          {reviews.slice(0, 10).map((r, i) => (
            <li
              key={`${r.author}-${r.date}-${i}`}
              className="border-t border-wood/20 pt-4 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <ReviewStars value={r.rating} className="text-sm" />
                <span className="text-sm font-semibold text-ink sm:text-base">
                  {r.author}
                </span>
                <time
                  dateTime={r.date}
                  className="text-xs text-ink-muted sm:text-sm"
                >
                  {new Date(r.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
                {r.text}
              </p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 rounded-2xl border border-wood/20 bg-paper p-5 sm:rounded-3xl sm:p-7">
        <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
          Leave a review
        </h3>
        <div className="mt-3">
          <ReviewForm reviewKey={reviewKey} fallbackEmail={REVIEWS_FALLBACK_EMAIL} />
        </div>
      </div>
    </section>
  );
}
