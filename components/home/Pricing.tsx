import { AppStoreButton } from "@/components/AppStoreButton";

export function Pricing() {
  return (
    <section className="bg-cream-deep/60">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Simple pricing
        </h2>
        <p className="mt-4 text-ink-muted">
          A monthly or yearly MoonPage Premium plan unlocks the full library.
          Cancel anytime from your App Store account — exact pricing (and any
          free trial) is shown before you subscribe.
        </p>
        <div className="mt-8 flex justify-center">
          <AppStoreButton campaign="website_pricing" />
        </div>
      </div>
    </section>
  );
}
