import { InstagramLink } from "./SocialLinks";

/**
 * Plain HTML form POST straight to Buttondown's embed-subscribe endpoint —
 * no JS, no backend of our own. `target="popupwindow"` is a native HTML
 * form attribute (Buttondown's own documented embed pattern).
 *
 * Email capture is paused for now (early-stage store-first funnel). Restore
 * the form below when waitlist / Android launch / Web2App needs it.
 */
// const ACTION = (username: string) =>
//   `https://buttondown.com/api/emails/embed-subscribe/${username}`;

/** Instagram follow CTA — email subscribe paused. */
export const FOLLOW_HEADLINE =
  "Follow for parenting tips and story updates";

/** @deprecated Use FOLLOW_HEADLINE — kept so older imports keep working. */
export const SUBSCRIBE_HEADLINE = FOLLOW_HEADLINE;

type Tone = "cream" | "night";

/**
 * Follow copy + IG glyph. IG box matches BrandMark icon height so the header
 * row aligns. Email form kept commented below for a later restore.
 */
export function SubscribeCluster({
  className = "",
  tone = "cream",
  inputId: _inputId,
  igSize = "md",
}: {
  className?: string;
  tone?: Tone;
  /** Unused while email is paused; kept so Header/Footer call sites stay stable. */
  inputId: string;
  igSize?: "md" | "lg";
}) {
  const night = tone === "night";

  return (
    <div
      className={`inline-flex min-w-0 max-w-full items-center gap-2.5 sm:gap-3 ${className}`}
    >
      <p
        className={`max-w-[13rem] text-right text-xs font-semibold leading-snug sm:max-w-[15rem] sm:text-sm ${
          night ? "text-night-ink" : "text-ink"
        }`}
      >
        {FOLLOW_HEADLINE}
      </p>
      <InstagramLink size={igSize} title={FOLLOW_HEADLINE} />

      {/*
      Email subscribe (Buttondown) — restore when needed:

      <div className="inline-flex min-w-0 max-w-full flex-col gap-1.5 sm:gap-2">
        <p className={`text-center text-base font-semibold ...`}>
          Subscribe/follow for parenting tips and story updates
        </p>
        <div className="flex w-full items-center gap-2 sm:gap-3">
          <form
            action={ACTION(SITE.buttondownUsername)}
            method="post"
            target="popupwindow"
            className="flex h-12 min-w-0 flex-1 ..."
          >
            ...
          </form>
          <InstagramLink size="responsive" />
        </div>
      </div>
      */}
    </div>
  );
}
