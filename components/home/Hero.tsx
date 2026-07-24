import Image from "next/image";
import { StoreButtons } from "@/components/StoreButtons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Bedtime stories that actually get kids to sleep.
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink-muted">
            Original picture books to gently ease little ones to sleep —
            narrated by a pro, or read in your own voice.
          </p>

          <div id="download" className="mt-8 scroll-mt-24">
            <StoreButtons campaign="website_hero" />
          </div>
          <p className="mt-4 text-base font-medium text-ink-muted">
            No ads. No login required. Just calm, cozy stories.
          </p>
        </div>

        {/* Landscape device mockup — app is used in forced landscape orientation,
            so the hero visual deliberately isn't the usual portrait phone frame.
            TODO: swap the cover art below for a real in-app reader screenshot
            once one is available. */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="aspect-[16/10] w-full rounded-[28px] bg-ink p-3 shadow-2xl">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/covers/wp_b01_1_blue_sea_cover.webp"
                alt="MoonPage storybook illustration"
                fill
                sizes="(min-width: 1024px) 32rem, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div
            aria-hidden
            className="absolute -bottom-6 -right-4 h-24 w-24 rotate-6 rounded-3xl bg-accent shadow-lg sm:h-28 sm:w-28"
          />
          <div
            aria-hidden
            className="absolute -top-5 -left-4 h-16 w-16 -rotate-6 rounded-2xl bg-sage/80 shadow-lg"
          />
          <Sparkle className="absolute -top-8 right-10 h-8 w-8 text-gold" />
          <Sparkle className="absolute bottom-10 -left-7 h-5 w-5 text-accent-strong" />
        </div>
      </div>
    </section>
  );
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0c.6 4.6 2.2 8 5.4 9.6C14.2 11.2 12.6 14.6 12 19.2c-.6-4.6-2.2-8-5.4-9.6C9.8 8 11.4 4.6 12 0z" />
    </svg>
  );
}
