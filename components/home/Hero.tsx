import Image from "next/image";
import { StoreButtons } from "@/components/StoreButtons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="page-gutter mx-auto grid max-w-6xl items-center gap-10 py-12 sm:gap-12 sm:py-16 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:gap-10 md:py-20 lg:gap-14 lg:py-24">
        <div className="min-w-0 text-center md:text-left">
          <h1 className="max-w-xl font-display text-[1.875rem] font-semibold leading-[1.15] text-ink sm:max-w-2xl sm:text-4xl md:max-w-none lg:text-5xl">
            Bedtime stories that actually get kids to sleep.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-muted sm:mt-5 sm:max-w-2xl sm:text-lg md:mx-0">
            Original picture books to gently ease little ones to sleep —
            narrated by a pro, or recorded in your own voice.
          </p>

          <div
            id="download"
            className="mt-7 flex scroll-mt-24 justify-center sm:mt-8 md:justify-start"
          >
            <StoreButtons campaign="website_hero" />
          </div>
          <p className="mt-4 text-base font-medium text-ink-muted sm:text-lg">
            No ads. No login required. Just calm, cozy stories.
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
                src="/covers/wp_b01_1_blue_sea_cover.webp"
                alt="Illustration from the MoonPage bedtime story “Slow Down, Seal!,” a smiling seal leaping through ocean waves"
                fill
                sizes="(min-width: 1024px) 32rem, (min-width: 640px) 32rem, 90vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div
            aria-hidden
            className="absolute -bottom-4 -right-2 h-16 w-16 rotate-6 rounded-2xl bg-accent shadow-lg sm:-bottom-6 sm:-right-4 sm:h-24 sm:w-24 sm:rounded-3xl md:h-28 md:w-28"
          />
          <div
            aria-hidden
            className="absolute -top-3 -left-2 h-12 w-12 -rotate-6 rounded-xl bg-sage/80 shadow-lg sm:-top-5 sm:-left-4 sm:h-16 sm:w-16 sm:rounded-2xl"
          />
          <Sparkle className="absolute -top-6 right-6 h-6 w-6 text-gold sm:-top-8 sm:right-10 sm:h-8 sm:w-8" />
          <Sparkle className="absolute bottom-8 -left-4 h-4 w-4 text-accent-strong sm:bottom-10 sm:-left-7 sm:h-5 sm:w-5" />
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
