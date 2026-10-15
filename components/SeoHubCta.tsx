"use client";

import { StoreButtons } from "@/components/StoreButtons";

/** Shared download CTA block used on keyword SEO hub pages. */
export function SeoHubCta({
  title,
  body,
  campaign,
  voiceIntent = false,
}: {
  title: string;
  body: string;
  campaign: string;
  /**
   * When true, a click that lands on a store link inside this block also
   * fires a semantic `voice_cta_click` event — alongside the `download_click`
   * the badge already emits on its own. Used on the voice-feature hub so
   * voice-intent installs can be funnelled separately from generic ones.
   */
  voiceIntent?: boolean;
}) {
  return (
    <div
      className="mt-12 flex flex-col items-center gap-3 rounded-2xl bg-paper p-6 text-center sm:mt-16 sm:gap-4 sm:rounded-3xl sm:p-10"
      onClick={
        voiceIntent
          ? (e) => {
              const ph = (
                window as unknown as {
                  posthog?: { capture: (e: string, p?: Record<string, unknown>) => void };
                }
              ).posthog;
              if (!ph) return;
              const target = e.target as HTMLElement;
              if (target.closest("a")) {
                ph.capture("voice_cta_click", { placement: campaign });
              }
            }
          : undefined
      }
    >
      <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
        {title}
      </h2>
      <p className="max-w-md text-sm text-ink-muted sm:text-base">{body}</p>
      <StoreButtons campaign={campaign} />
    </div>
  );
}
