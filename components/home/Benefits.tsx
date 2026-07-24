import type { SVGProps } from "react";

const BENEFITS = [
  {
    title: "Kindness · Courage · Curiosity",
    body: "Original picture stories, each with a gentle lesson your little one grows with.",
    color: "bg-accent-strong",
    Icon: HeartIcon,
  },
  {
    title: "A library that keeps growing",
    body: "New original tales are always being added, in a warm storybook style.",
    color: "bg-sage",
    Icon: BookIcon,
  },
  {
    title: "No ads. No login. No tracking.",
    body: "No account is ever required, and MoonPage doesn't build advertising profiles on you or your child.",
    color: "bg-gold",
    Icon: ShieldIcon,
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
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map(({ title, body, color, Icon }) => (
          <div
            key={title}
            className="rounded-3xl border border-wood/25 bg-paper p-6 shadow-sm transition-transform hover:-translate-y-1"
          >
            <span
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${color} text-white`}
            >
              <Icon className="h-5.5 w-5.5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink">
              {title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-ink-muted">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 21s-7.5-4.6-10-9.3C.4 8 2 4.5 5.4 4c2-.3 3.9.6 5 2.2A5.9 5.9 0 0 1 15.4 4c3.4.5 5 4 3.4 7.7C19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

function BookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" />
      <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z" />
    </svg>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
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
