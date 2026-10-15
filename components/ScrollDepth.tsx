"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type PostHogLike = {
  capture: (event: string, props?: Record<string, unknown>) => void;
};

/**
 * Fires a `scroll_depth` event the first time the visitor reaches 50% and
 * 90% of a page. Answers "do people actually read the guides/stories, or
 * bounce after the hero?" — which raw pageviews can't tell you.
 *
 * Robustness notes:
 *  - PostHog loads with `lazyOnload`, so it may not exist at mount. We poll
 *    briefly for `window.posthog` instead of bailing (the stub also queues
 *    calls until the real library arrives).
 *  - On client-side navigation (static export still ships the App Router),
 *    this component lives in the persistent layout, so we key the effect on
 *    `pathname` and reset the fired set per route — otherwise 50%/90% would
 *    only ever fire once for the whole session.
 */
export function ScrollDepth() {
  const pathname = usePathname();
  const firedRef = useRef<Set<number>>(new Set());
  const frameRef = useRef(0);

  useEffect(() => {
    firedRef.current = new Set(); // fresh page → re-arm thresholds
    const thresholds = [50, 90];
    let cancelled = false;
    let poll: ReturnType<typeof setTimeout> | undefined;

    const check = () => {
      frameRef.current = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return; // nothing to scroll (e.g. short page)
      const pct = Math.round((window.scrollY / scrollable) * 100);
      const ph = (window as unknown as { posthog?: PostHogLike }).posthog;
      if (!ph) return;
      for (const t of thresholds) {
        if (!firedRef.current.has(t) && pct >= t) {
          firedRef.current.add(t);
          ph.capture("scroll_depth", { percent: t, path: location.pathname });
        }
      }
    };

    const onScroll = () => {
      if (!frameRef.current) frameRef.current = requestAnimationFrame(check);
    };

    const attach = () => {
      if (cancelled) return;
      const ph = (window as unknown as { posthog?: PostHogLike }).posthog;
      if (!ph) {
        poll = setTimeout(attach, 300); // PostHog not loaded yet
        return;
      }
      check();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
    };
    attach();

    return () => {
      cancelled = true;
      if (poll) clearTimeout(poll);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return null;
}
