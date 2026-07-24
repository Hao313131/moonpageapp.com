const FACTS = [
  "No account or login required — just download and start reading.",
  "No ads, no third-party trackers, no advertising profiles built on you or your child.",
  "Restore purchases anytime from Settings using the same App Store account.",
  "Parent-directed by design, with COPPA and GDPR-K–conscious data practices.",
];

/**
 * MoonPage is pre-launch with no real reviews yet — deliberately fact-based
 * instead of testimonials/star ratings (see plan §5). Swap in real quotes
 * and a rating badge once there's genuine App Store data to show.
 */
export function Trust() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        Built to earn your trust, not just your download
      </h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {FACTS.map((f) => (
          <li
            key={f}
            className="flex items-start gap-3 rounded-2xl bg-paper p-5 text-sm text-ink-muted"
          >
            <span className="mt-0.5 text-accent-strong" aria-hidden>
              ✓
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
