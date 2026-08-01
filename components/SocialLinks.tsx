import type { ReactNode } from "react";
import { InstagramGlyph, TikTokGlyph } from "./icons";
import { SITE } from "@/lib/site";

const TIPS_COPY = "Follow for parenting tips and story updates";

/** Official Instagram brand gradient (yellow → orange → magenta → purple). */
const IG_GRADIENT =
  "bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]";

type SocialSize = "md" | "lg" | "responsive";

// Match BrandMark iconClass: md = h-12/sm:h-14, lg = h-14/sm:h-16, so the
// social tiles stay height-aligned with the MoonPage logo in header/footer.
function boxClass(size: SocialSize) {
  return size === "lg"
    ? "h-14 w-14 rounded-2xl sm:h-16 sm:w-16 sm:rounded-3xl"
    : "h-12 w-12 rounded-2xl sm:h-14 sm:w-14";
}

function glyphClass(size: SocialSize) {
  return size === "lg" ? "h-7 w-7 sm:h-8 sm:w-8" : "h-6 w-6 sm:h-7 sm:w-7";
}

function SocialTile({
  href,
  title,
  network,
  surface,
  className,
  children,
}: {
  href: string;
  title: string;
  /** Reported to Umami so IG vs TikTok pull can be compared. */
  network: string;
  /** Background utility for the tile — each network keeps its own brand fill. */
  surface: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={title}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      data-umami-event="social-click"
      data-umami-event-network={network}
      className={`inline-flex shrink-0 items-center justify-center ${surface} text-white shadow-sm transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </a>
  );
}

/** Instagram glyph on the official gradient. */
export function InstagramLink({
  className = "",
  size = "lg",
  title = TIPS_COPY,
}: {
  className?: string;
  size?: SocialSize;
  /** @deprecated Kept for call-site compatibility; gradient is always used. */
  tone?: "cream" | "night";
  title?: string;
}) {
  return (
    <SocialTile
      href={SITE.instagramUrl}
      title={title}
      network="instagram"
      surface={IG_GRADIENT}
      className={`${boxClass(size)} ${className}`}
    >
      <InstagramGlyph className={glyphClass(size)} />
    </SocialTile>
  );
}

/** TikTok glyph on the brand's black tile. */
export function TikTokLink({
  className = "",
  size = "lg",
  title = TIPS_COPY,
}: {
  className?: string;
  size?: SocialSize;
  title?: string;
}) {
  return (
    <SocialTile
      href={SITE.tiktokUrl}
      title={title}
      network="tiktok"
      surface="bg-[#010101]"
      className={`${boxClass(size)} ${className}`}
    >
      <TikTokGlyph className={glyphClass(size)} />
    </SocialTile>
  );
}

/** Instagram + TikTok side by side — the standard follow lockup. */
export function SocialLinks({
  className = "",
  size = "lg",
  title = TIPS_COPY,
}: {
  className?: string;
  size?: SocialSize;
  title?: string;
}) {
  return (
    <span className={`inline-flex shrink-0 items-center gap-2 ${className}`}>
      <InstagramLink size={size} title={`${title} on Instagram`} />
      <TikTokLink size={size} title={`${title} on TikTok`} />
    </span>
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
