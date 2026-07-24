import { FREE_BOOKS, SHARE_UNLOCK_BOOKS } from "@/lib/site";

const STEPS = [
  {
    n: "1",
    title: "Start free tonight",
    body: `The first ${FREE_BOOKS} stories are completely free — no trial timer, no card required.`,
  },
  {
    n: "2",
    title: "Share to unlock more",
    body: `${SHARE_UNLOCK_BOOKS} more stories unlock when you share MoonPage with a friend.`,
  },
  {
    n: "3",
    title: "Subscribe for full access",
    body: "A monthly or yearly plan gives ongoing access to our continually updated library, with new stories added regularly.",
  },
];

export function FreeTier() {
  return (
    <section className="bg-cream-deep/60">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Start with 2 stories, completely free.
        </h2>
        <p className="mt-3 max-w-xl text-ink-muted">
          No surprises at bedtime — here&apos;s exactly what&apos;s free and
          what&apos;s part of MoonPage Premium.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-display text-base font-semibold text-ink">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-1 text-base leading-relaxed text-ink-muted">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
