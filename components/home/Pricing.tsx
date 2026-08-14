import { StoreButtons } from "@/components/StoreButtons";

export function Pricing() {
  return (
    <section className="bg-cream-deep/60">
      <div className="page-gutter mx-auto max-w-4xl py-12 text-center sm:py-16 md:py-20">
        <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl md:text-3xl">
          Made so parents can breathe easy
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-muted sm:mt-4 sm:max-w-lg sm:text-base">
          MoonPage is bedtime software — calm stories, no ads, no account to
          manage — so tonight feels simpler, not like another thing to pay for.
          Premium keeps the full, growing library ready whenever you need it.
          Cancel anytime from your App Store account; exact
          pricing (and any free trial) is shown before you continue.
        </p>
        <div className="mt-7 flex justify-center sm:mt-8">
          <StoreButtons campaign="website_pricing" className="justify-center" hidePlay />
        </div>
      </div>
    </section>
  );
}
