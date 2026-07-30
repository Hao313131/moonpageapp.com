const FACTS = [
  "No account or login required — just download and start reading.",
  "No ads, no third-party trackers, no advertising profiles built on you or your child.",
  "Restore purchases anytime from Settings using the same App Store or Google Play account.",
  "Parent-directed by design, with COPPA and GDPR-K–conscious data practices.",
];

/**
 * Privacy / compliance / purchase facts — deliberately separate from the
 * product-experience cards in Benefits (voice, narration, offline, pace).
 * Pre-launch: fact-based instead of testimonials (see plan §5).
 */
export function Trust() {
  return (
    <section className="page-gutter mx-auto max-w-6xl py-12 sm:py-16 md:py-20">
      <h2 className="max-w-3xl font-display text-xl font-semibold text-ink sm:text-2xl md:text-3xl">
        Trusted by thousands of moms for calmer bedtime routines and cozy stories.
      </h2>
      <ul className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
        {FACTS.map((f) => (
          <li
            key={f}
            className="flex items-start gap-3 rounded-2xl bg-paper p-4 text-sm text-ink-muted sm:p-5 sm:text-base"
          >
            <span className="mt-0.5 shrink-0 text-accent-strong" aria-hidden>
              ✓
            </span>
            <span className="min-w-0">{f}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
