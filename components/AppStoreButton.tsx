import { appStoreLink } from "@/lib/site";

/**
 * Primary download CTA. There is only one real download destination today
 * (iOS) — Android isn't released yet (see moonpage-app/.env.example, RevenueCat
 * Android key is still a placeholder), so this intentionally does NOT do
 * user-agent sniffing/platform routing. Once Android ships, upgrade this to
 * pick a platform per visitor; until then, always sending everyone to the
 * App Store is the correct behavior, not a simplification to fix later.
 */
export function AppStoreButton({
  campaign,
  size = "lg",
}: {
  /** Distinct per placement so App Store Connect can attribute clicks — see lib/site.ts */
  campaign: string;
  size?: "lg" | "md";
}) {
  const padding = size === "lg" ? "px-6 py-3.5" : "px-5 py-2.5";
  return (
    <a
      href={appStoreLink(campaign)}
      className={`inline-flex items-center gap-2.5 rounded-2xl bg-ink text-white ${padding} shadow-[0_8px_0_0_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_3px_0_0_rgba(0,0,0,0.25)]`}
    >
      <AppleGlyph className="h-7 w-7 shrink-0" />
      <span className="leading-tight">
        <span className="block text-[11px] opacity-80">Download on the</span>
        <span className="block font-display text-xl font-semibold tracking-tight">
          App Store
        </span>
      </span>
    </a>
  );
}

export function AndroidComingSoon() {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-2xl border-2 border-dashed border-wood/60 px-5 py-2.5 text-ink-muted">
      <span className="text-sm">Android — coming soon</span>
    </div>
  );
}

function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" className={className} fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}
