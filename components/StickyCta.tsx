"use client";

import { useEffect, useState } from "react";
import { StoreButtons } from "./StoreButtons";

/** Show once the hero (and its download buttons) have scrolled away. */
const SHOW_AFTER = 520;
/** Stand down near the page end so the bar never covers the footer's own CTA. */
const BOTTOM_GUARD = 320;

/**
 * Persistent download bar for phones.
 *
 * On a phone the hero CTA leaves the viewport after roughly one swipe, and
 * on the long pages — a guide, a collection, /stories — the next store badge
 * can be several screens away. Desktop doesn't have this problem (the sticky
 * header is always in view), so this is `md:hidden`.
 *
 * It reports its own placement to Umami through the campaign slug, so its
 * share of downloads is measurable rather than assumed.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const atBottom =
        y + window.innerHeight >=
        document.documentElement.scrollHeight - BOTTOM_GUARD;
      setVisible(y > SHOW_AFTER && !atBottom);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      // `inert` rather than unmounting: keeps the bar out of the tab order and
      // off the accessibility tree while it's slid away, without remounting
      // the store links on every scroll direction change.
      inert={!visible}
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-wood/25 bg-cream/95 backdrop-blur transition-transform duration-200 motion-reduce:transition-none md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="page-gutter mx-auto flex max-w-6xl flex-col gap-1.5 pt-2">
        <p className="text-center text-xs font-semibold text-ink-muted">
          Free to start tonight — no ads, no login.
        </p>
        <StoreButtons campaign="website_sticky" size="sm" />
      </div>
    </div>
  );
}
