import Link from "next/link";

/** Explicit "back to home" affordance for standalone pages (legal, stories) —
 * not everyone reads "click the logo" as navigation, so this spells it out. */
export function BackHomeLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-1.5 text-base font-semibold text-ink-muted transition-colors hover:text-ink ${className}`}
    >
      <span aria-hidden>←</span> Back to MoonPage
    </Link>
  );
}
