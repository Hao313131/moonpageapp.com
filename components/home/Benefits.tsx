import type { SVGProps } from "react";

/**
 * Product experience — kept distinct from Trust (privacy / compliance / restore).
 * These four used to live under “The MoonPage difference.”
 */
const BENEFITS = [
  {
    title: "Hear it in your voice",
    body: "Record yourself reading any story — saved on your device, never uploaded. Away for the night? They can still hear Mom or Dad.",
    color: "bg-accent-strong",
    Icon: MicIcon,
  },
  {
    title: "Narrated by a professional",
    body: "Every story also comes with calm reading by a professional narrator — ready the moment you open the book.",
    color: "bg-sage",
    Icon: WaveIcon,
  },
  {
    title: "Stories that work offline",
    body: "Illustrations and narration travel with the app — bedtime doesn’t depend on Wi‑Fi once MoonPage is installed.",
    color: "bg-gold",
    Icon: OfflineIcon,
  },
  {
    title: "Read together, at their pace",
    body: "An immersive, full-screen reading view — pause, replay, or drift off slowly, page by page.",
    color: "bg-wood",
    Icon: MoonIcon,
  },
];

export function Benefits() {
  return (
    <section className="page-gutter mx-auto max-w-6xl py-12 sm:py-16 md:py-20">
      <div className="max-w-xl">
        <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl md:text-3xl">
          A bedtime stories app built for winding down
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted sm:max-w-lg sm:text-base">
          MoonPage is a read-aloud bedtime stories app for toddlers and
          preschoolers — original, illustrated picture books for ages 2+.
          Instead of screen time that leaves kids wound up, it&apos;s
          built for winding down: calm pacing, soft illustrations, and a
          full-screen reading view with no notifications and nothing else
          competing for attention. Hear it by a professional narrator, or in
          your own recorded voice.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {BENEFITS.map(({ title, body, color, Icon }) => (
          <div
            key={title}
            className="rounded-2xl border border-wood/25 bg-paper p-5 shadow-sm transition-transform hover:-translate-y-1 sm:rounded-3xl sm:p-6"
          >
            <span
              className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ${color} text-ink sm:h-11 sm:w-11`}
            >
              <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5" />
            </span>
            <h3 className="mt-3 font-display text-sm font-semibold text-ink sm:mt-4 sm:text-base">
              {title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted sm:mt-2">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <path d="M12 17v5" />
      <path d="M8 22h8" />
    </svg>
  );
}

function WaveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12h2" />
      <path d="M6 8v8" />
      <path d="M10 5v14" />
      <path d="M14 8v8" />
      <path d="M18 10v4" />
      <path d="M20 12h2" />
    </svg>
  );
}

function OfflineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 2l20 20" />
      <path d="M5.8 5.8A6 6 0 0 0 6 17h10" />
      <path d="M17.5 10a4.5 4.5 0 0 1 2.2 8.3" />
      <path d="M12 6a6 6 0 0 1 5.7 4.1" />
    </svg>
  );
}

function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z" />
    </svg>
  );
}
