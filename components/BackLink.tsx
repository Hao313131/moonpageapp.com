import Link from "next/link";

/** Explicit "back to home" affordance for standalone pages (legal, stories) —
 * not everyone reads "click the logo" as navigation, so this spells it out. */
export function BackHomeLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-1.5 text-lg font-semibold text-link transition-colors hover:text-link-hover ${className}`}
    >
      <span aria-hidden>←</span> Back to MoonPage
    </Link>
  );
}
