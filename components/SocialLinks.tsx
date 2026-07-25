import { InstagramGlyph } from "./icons";
import { SITE } from "@/lib/site";

const TIPS_COPY = "Follow for parenting tips and story updates";

/** Official Instagram brand gradient (yellow → orange → magenta → purple). */
const IG_GRADIENT =
  "bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]";

/**
 * Instagram glyph on the official gradient.
 * Box sizes mirror BrandMark app-icon heights (`md` / `lg`) so header/footer
 * lockups stay height-aligned with the MoonPage logo.
 */
export function InstagramLink({
  className = "",
  size = "lg",
  title = TIPS_COPY,
}: {
  className?: string;
  size?: "md" | "lg" | "responsive";
  /** @deprecated Kept for call-site compatibility; gradient is always used. */
  tone?: "cream" | "night";
  title?: string;
}) {
  // Match BrandMark iconClass: md = h-12/sm:h-14, lg = h-14/sm:h-16
  const box =
    size === "lg"
      ? "h-14 w-14 rounded-2xl sm:h-16 sm:w-16 sm:rounded-3xl"
      : "h-12 w-12 rounded-2xl sm:h-14 sm:w-14";
  const glyph =
    size === "lg"
      ? "h-7 w-7 sm:h-8 sm:w-8"
      : "h-6 w-6 sm:h-7 sm:w-7";
  return (
    <a
      href={SITE.instagramUrl}
      aria-label={title}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex ${box} shrink-0 items-center justify-center ${IG_GRADIENT} text-white shadow-sm transition-transform hover:-translate-y-0.5 ${className}`}
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
