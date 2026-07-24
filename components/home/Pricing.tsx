import { StoreButtons } from "@/components/StoreButtons";

export function Pricing() {
  return (
    <section className="bg-cream-deep/60">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Simple pricing
        </h2>
        <p className="mt-4 text-ink-muted">
          MoonPage Premium is an auto-renewing monthly or yearly subscription
          for ongoing access to our continually updated story library — current
          titles plus new stories we add while you&apos;re subscribed. Cancel
          anytime from your App Store or Google Play account — exact pricing
          (and any free trial) is shown before you subscribe.
        </p>
        <div className="mt-8 flex justify-center">
          <StoreButtons campaign="website_pricing" />
        </div>
      </div>
    </section>
  );
}
