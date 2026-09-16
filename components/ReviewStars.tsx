/**
 * Presentational star rating. Renders `value` out of 5 as filled/empty stars.
 * Server-renderable (no client JS) — used both in the visible review section
 * and anywhere a static rating needs to show.
 *
 * Accessibility: the stars are decorative; the real value is in the adjacent
 * text ("4.7 out of 5") and in `aria-label` on the wrapper, so screen readers
 * announce the number once rather than five glyphs.
 */
export function ReviewStars({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) {
  const rounded = Math.round(value);
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${value.toFixed(1)} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem] ${
            n <= rounded ? "text-gold" : "text-wood/30"
          }`}
          fill="currentColor"
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.1l-4.94 2.6.94-5.5-4-3.9 5.53-.8z" />
        </svg>
      ))}
    </span>
  );
}
