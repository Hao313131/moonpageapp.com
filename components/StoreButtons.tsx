import { appStoreLink, playStoreLink } from "@/lib/site";

const BADGE =
  "store-badge-glow inline-flex h-full w-full items-center justify-center gap-2 rounded-2xl bg-ink text-white shadow-[0_4px_0_0_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_2px_0_0_rgba(0,0,0,0.25)]";

type StoreSize = "lg" | "md" | "sm";

/**
 * Both platforms are presented as equal, real CTAs — MoonPage is launching
 * iOS first but Android is right behind it, and the site deliberately never
 * singles one out in copy (see plan follow-up: "都写或者都不写").
 *
 * Size "lg" scales down on phone so two badges can sit side-by-side from
 * ~400px up; below that they stack full-width. Paired badges always share
 * the same width and height.
 */
function storeChrome(size: StoreSize) {
  // Height lives here rather than on BADGE: "sm" is the sticky phone bar,
  // where a 3.5rem badge would eat a fifth of the viewport. 2.75rem still
  // clears the 44px minimum tap target.
  const height =
    size === "lg"
      ? "min-h-[3.5rem] sm:min-h-[4.25rem]"
      : size === "md"
        ? "min-h-[3.5rem]"
        : "min-h-11";
  const padding =
    size === "lg"
      ? "gap-2 px-4 py-3 shadow-[0_6px_0_0_rgba(0,0,0,0.25)] sm:gap-2.5 sm:px-6 sm:py-3.5 sm:shadow-[0_8px_0_0_rgba(0,0,0,0.25)]"
      : size === "md"
        ? "px-4 py-2.5 sm:px-5"
        : "px-3 py-1.5";
  const icon =
    size === "sm" ? "h-5 w-5" : size === "lg" ? "h-6 w-6 sm:h-7 sm:w-7" : "h-7 w-7";
  const label =
    size === "sm" ? "text-xs font-bold" : "text-sm font-bold sm:text-base";
  const title =
    size === "sm"
      ? "font-display text-sm font-bold tracking-tight"
      : size === "lg"
        ? "font-display text-lg font-bold tracking-tight sm:text-xl"
        : "font-display text-xl font-bold tracking-tight";
  return { height, padding, icon, label, title };
}

const STORE_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

/**
 * Umami auto-tracks clicks on any element carrying `data-umami-event`, and
 * turns `data-umami-event-*` into event properties. Store clicks are the
 * site's only real conversion, so every badge reports which store it sent to
 * and which block on the page it was in — otherwise the analytics can say how
 * many people arrived but nothing about what made them download.
 */
function trackProps(store: "ios" | "android", campaign: string) {
  return {
    "data-umami-event": "download-click",
    "data-umami-event-store": store,
    "data-umami-event-placement": campaign,
  };
}

export function AppStoreLink({
  campaign,
  size = "lg",
  className = "",
}: {
  campaign: string;
  size?: StoreSize;
  className?: string;
}) {
  const { height, padding, icon, label, title } = storeChrome(size);
  return (
    <a
      href={appStoreLink(`${campaign}_ios`)}
      {...STORE_LINK_PROPS}
      {...trackProps("ios", campaign)}
      className={`${BADGE} ${height} ${padding} ${className}`}
    >
      <AppleGlyph className={`${icon} shrink-0`} />
      <span className="leading-tight text-left">
        <span className={`block ${label} opacity-90`}>Download on the</span>
        <span className={`block ${title}`}>App Store</span>
      </span>
    </a>
  );
}

export function PlayStoreLink({
  campaign,
  size = "lg",
  className = "",
}: {
  campaign: string;
  size?: StoreSize;
  className?: string;
}) {
  const { height, padding, icon, label, title } = storeChrome(size);
  return (
    <a
      href={playStoreLink(`${campaign}_android`)}
      {...STORE_LINK_PROPS}
      {...trackProps("android", campaign)}
      className={`${BADGE} ${height} ${padding} ${className}`}
    >
      <PlayGlyph className={`${icon} shrink-0`} />
      <span className="leading-tight text-left">
        <span className={`block ${label} opacity-90`}>Download on the</span>
        <span className={`block ${title}`}>Google Play</span>
      </span>
    </a>
  );
}

/**
 * Equal-size pair: same column widths and shared row height so Apple and
 * Google badges match exactly wherever they appear together.
 */
export function StoreButtons({
  campaign,
  size = "lg",
  className = "",
  hidePlay = false,
}: {
  campaign: string;
  size?: StoreSize;
  className?: string;
  /** When true, only the App Store badge renders — centered on its own.
   *  Used on the homepage while Android / Google Play isn't live yet. Flip it
   *  back to false (or drop the prop) to restore the paired badges. */
  hidePlay?: boolean;
}) {
  const layout = hidePlay
    ? // Single centered badge — no empty column beside it.
      "grid-cols-1 justify-items-center"
    : // "sm" is the sticky bar — it has to fit two badges on the narrowest
      // phone, so it never gets the stacked single-column treatment.
      size === "sm"
      ? "grid-cols-2 gap-2"
      : "grid-cols-1 min-[400px]:grid-cols-2";
  return (
    <div className={`grid w-full max-w-xl gap-3 ${layout} ${className}`}>
      <AppStoreLink
        campaign={campaign}
        size={size}
        className={hidePlay ? "max-w-[15rem] sm:max-w-xs" : ""}
      />
      {!hidePlay && <PlayStoreLink campaign={campaign} size={size} />}
    </div>
  );
}

const ICON_BADGE =
  "inline-flex shrink-0 items-center justify-center rounded-2xl bg-ink text-white shadow-[0_4px_0_0_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-0.5";

/** Icon-only badges — for tight spaces like the sticky header, where the full
 * two-line badge would force a wrap. Full badges stay in Hero/Footer/Pricing. */
export function AppStoreIcon({
  campaign,
  className = "h-11 w-11",
}: {
  campaign: string;
  className?: string;
}) {
  return (
    <a
      href={appStoreLink(`${campaign}_ios`)}
      {...STORE_LINK_PROPS}
      {...trackProps("ios", campaign)}
      aria-label="Download on the App Store"
      className={`${ICON_BADGE} ${className}`}
    >
      <AppleGlyph className="h-5 w-5" />
    </a>
  );
}

export function PlayStoreIcon({
  campaign,
  className = "h-11 w-11",
}: {
  campaign: string;
  className?: string;
}) {
  return (
    <a
      href={playStoreLink(`${campaign}_android`)}
      {...STORE_LINK_PROPS}
      {...trackProps("android", campaign)}
      aria-label="Download on the Google Play"
      className={`${ICON_BADGE} ${className}`}
    >
      <PlayGlyph className="h-5 w-5" />
    </a>
  );
}

function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" className={className} fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="currentColor" aria-hidden="true">
      <path d="M96 60 L96 452 L340 256 Z" />
    </svg>
  );
}
