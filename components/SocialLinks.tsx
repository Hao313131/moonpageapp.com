import { InstagramGlyph } from "./icons";
import { SITE } from "@/lib/site";

const TIPS_COPY = "Follow us on Instagram for more parenting tips";

/** Instagram glyph only — no accompanying copy. */
export function InstagramLink({
  className = "",
  size = "lg",
  tone = "cream",
}: {
  className?: string;
  size?: "md" | "lg";
  tone?: "cream" | "night";
}) {
  const box = size === "lg" ? "h-12 w-12" : "h-10 w-10";
  const glyph = size === "lg" ? "h-7 w-7" : "h-5 w-5";
  const surface =
    tone === "night"
      ? "bg-white/15 text-night-ink hover:bg-white/25 hover:text-white"
      : "bg-ink text-white hover:bg-ink/90";
  return (
    <a
      href={SITE.instagramUrl}
      aria-label={`${SITE.name} on Instagram`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex ${box} shrink-0 items-center justify-center rounded-2xl ${surface} shadow-[0_4px_0_0_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5 ${className}`}
    >
      <InstagramGlyph className={glyph} />
    </a>
  );
}

/**
 * Tips / contact email — uses the former Instagram footer line.
 * `compact` shrinks it for the sticky header.
 */
export function TipsEmailLink({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={`mailto:${SITE.contactEmail}?subject=${encodeURIComponent("Parenting tips")}`}
      title={TIPS_COPY}
      className={`inline-flex items-center justify-center rounded-2xl bg-accent font-semibold text-ink shadow-[0_4px_0_0_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5 ${
        compact
          ? "max-w-[11rem] px-3 py-1.5 text-left text-xs leading-snug sm:max-w-[14rem] sm:text-sm"
          : "px-5 py-3 text-center text-base leading-snug"
      } ${className}`}
    >
      {TIPS_COPY}
    </a>
  );
}
