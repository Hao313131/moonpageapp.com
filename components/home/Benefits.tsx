const BENEFITS = [
  {
    title: "Kindness · Courage · Curiosity",
    body: "42 original picture stories, each with a gentle lesson your little one grows with.",
  },
  {
    title: "New stories, monthly",
    body: "Original tales, hand-painted in a warm storybook style — the library keeps growing.",
  },
  {
    title: "No ads. No login. No tracking.",
    body: "No account is ever required, and MoonPage doesn't build advertising profiles on you or your child.",
  },
  {
    title: "Read together, at their pace",
    body: "An immersive, full-screen reading view — pause, replay, or drift off slowly, page by page.",
  },
];

export function Benefits() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((b) => (
          <div
            key={b.title}
            className="rounded-3xl border border-wood/25 bg-paper p-6 shadow-sm"
          >
            <h3 className="font-display text-lg font-semibold text-ink">
              {b.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {b.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
