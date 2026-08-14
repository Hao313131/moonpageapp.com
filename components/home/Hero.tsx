import type { CSSProperties } from "react";
import Image from "next/image";
import { StoreButtons } from "@/components/StoreButtons";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="page-gutter mx-auto grid max-w-6xl items-center gap-10 py-12 sm:gap-12 sm:py-16 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:gap-10 md:py-20 lg:gap-14 lg:py-24">
        <div className="min-w-0 text-center md:text-left">
          {/* No pill/background: the filled badge fought the hero art. Kept on
              `text-link` (deep burnt orange) so it reads as a separate voice
              from the ink-brown headline below it. */}
          <p className="max-w-xl text-base font-extrabold tracking-wide text-link sm:max-w-2xl sm:text-lg md:text-xl">
            {SITE.trustLine}
          </p>
          <h1 className="mt-2 max-w-xl font-display text-[1.875rem] font-semibold leading-[1.12] text-ink sm:mt-3 sm:max-w-2xl sm:text-4xl md:max-w-none lg:text-5xl">
            One more story, and off to sleep.
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink-muted sm:mt-4 sm:max-w-lg sm:text-base md:mx-0">
            Cozy bedtime stories and illustrated picture books for kids ages
            2+ — read aloud by a professional narrator, or in your own recorded
            voice. Free to start tonight.
          </p>

          <div
            id="download"
            className="mt-6 flex scroll-mt-24 justify-center sm:mt-7 md:justify-start"
          >
            <StoreButtons campaign="website_hero" hidePlay />
          </div>
          <p className="mt-3 max-w-sm text-sm font-medium text-ink-muted sm:text-base md:max-w-md">
            No ads. No login. Just open, read, and lights out.
          </p>
        </div>

        {/* iPad-proportioned device mockup (4:3 landscape) — app is used in
            forced landscape orientation and supports tablets, so the hero
            visual deliberately isn't the usual portrait phone frame.
            object-contain (not cover) so the full illustration always shows,
            never cropped, regardless of its native aspect ratio.
            TODO: swap the cover art below for a real in-app reader screenshot
            once one is available. */}
        <div className="relative mx-auto w-full max-w-md px-2 sm:max-w-lg sm:px-0 md:mx-0 md:max-w-none md:justify-self-end">
          <div className="aspect-[4/3] w-full rounded-[20px] bg-ink p-2.5 shadow-2xl sm:rounded-[28px] sm:p-3">
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-ink sm:rounded-2xl">
              <Image
                src="/hero/wp_b01_31_night_slow.webp"
                alt="Little seal Sully snuggled close to Mama under the quiet night sea"
                fill
                sizes="(min-width: 1024px) 32rem, (min-width: 640px) 32rem, 90vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
          {/* Decorative twinkling stars — same 4-point shape at a few sizes.
              The two large ones replace the old colored blocks. */}
          <Sparkle
            className="absolute -bottom-5 -right-3 h-16 w-16 text-accent sm:-bottom-8 sm:-right-6 sm:h-24 sm:w-24 md:h-28 md:w-28"
            rotate={6}
            duration="3.6s"
          />
          <Sparkle
            className="absolute -top-4 -left-3 h-12 w-12 text-sage sm:-top-6 sm:-left-5 sm:h-16 sm:w-16 md:h-20 md:w-20"
            rotate={-6}
            duration="4.4s"
            delay="0.8s"
          />
          <Sparkle
            className="absolute -top-6 right-6 h-6 w-6 text-gold sm:-top-8 sm:right-10 sm:h-8 sm:w-8"
            duration="2.8s"
            delay="1.4s"
          />
          <Sparkle
            className="absolute bottom-8 -left-4 h-4 w-4 text-accent-strong sm:bottom-10 sm:-left-7 sm:h-5 sm:w-5"
            duration="3.1s"
            delay="0.4s"
          />
        </div>
      </div>
    </section>
  );
}

function Sparkle({
  className,
  rotate = 0,
  duration,
  delay,
}: {
  className?: string;
  rotate?: number;
  duration?: string;
  delay?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`sparkle-twinkle ${className ?? ""}`}
      style={
        {
          "--sparkle-rotate": `${rotate}deg`,
          ...(duration ? { "--sparkle-duration": duration } : {}),
          ...(delay ? { "--sparkle-delay": delay } : {}),
        } as CSSProperties
      }
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0c.6 4.6 2.2 8 5.4 9.6C14.2 11.2 12.6 14.6 12 19.2c-.6-4.6-2.2-8-5.4-9.6C9.8 8 11.4 4.6 12 0z" />
    </svg>
  );
}
