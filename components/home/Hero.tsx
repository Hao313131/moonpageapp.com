import Image from "next/image";
import { AppStoreButton } from "@/components/AppStoreButton";
import { NotifyForm } from "@/components/NotifyForm";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Bedtime stories that actually get them to sleep.
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink-muted">
            Hand-picked original picture books to gently ease little ones to
            sleep — narrated by a pro, or read in your own voice.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <AppStoreButton campaign="website_hero" />
          </div>

          <div className="mt-5 max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted/70">
              On Android? MoonPage is on its way.
            </p>
            <div className="mt-2">
              <NotifyForm />
            </div>
          </div>
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
            className="absolute -bottom-6 -right-4 h-24 w-24 rounded-3xl bg-accent shadow-lg sm:h-28 sm:w-28"
          />
          <div
            aria-hidden
            className="absolute -top-5 -left-4 h-16 w-16 rounded-2xl bg-sage/80 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
