import { StoreButtons } from "@/components/StoreButtons";

export function Pricing() {
  return (
    <section className="bg-cream-deep/60">
      <div className="page-gutter mx-auto max-w-4xl py-12 text-center sm:py-16 md:py-20">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl md:text-4xl">
          Made so parents can breathe easy
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-base text-ink-muted sm:mt-4 sm:text-lg">
          MoonPage is bedtime software — calm stories, no ads, no account to
          manage — so tonight feels simpler, not like another thing to pay for.
          Premium keeps the full, growing library ready whenever you need it.
          Cancel anytime from your App Store or Google Play account; exact
          pricing (and any free trial) is shown before you continue.
        </p>
        <div className="mt-7 flex justify-center sm:mt-8">
          <StoreButtons campaign="website_pricing" className="justify-center" />
        </div>
      </div>
    </section>
  );
}
