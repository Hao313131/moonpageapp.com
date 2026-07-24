const FAQS = [
  {
    q: "What ages is MoonPage for?",
    a: "MoonPage is designed for children ages 3 and up, meant to be enjoyed together with a parent or guardian.",
  },
  {
    q: "Do I need an internet connection?",
    a: "Once MoonPage is installed, stories work offline — including illustrations and narration. An internet connection is only needed to download or update the app, or to manage your subscription.",
  },
  {
    q: "Is there any advertising in the app?",
    a: "No. MoonPage contains no third-party ads, and we don't build advertising profiles on you or your child.",
  },
  {
    q: "Are any stories free?",
    a: "Yes — some stories are free to read. You can unlock a few more by sharing MoonPage or following us. MoonPage Premium is an auto-renewing subscription for ongoing access to our continually updated library (current Premium titles plus new stories we add while you subscribe).",
  },
  {
    q: "Do I need to create an account?",
    a: "No — MoonPage never requires an account or login. Purchases are tied to your App Store or Google Play account and restore automatically wherever you're signed in.",
  },
  {
    q: "Can I record my own voice for a story?",
    a: "Yes — every story can be read by a professional narrator, or recorded in your own voice from within the story. Recordings stay on your device.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Manage or cancel anytime from your App Store or Google Play account settings (on iPhone/iPad: Settings → your name → Subscriptions; on Android: Play Store → profile → Payments & subscriptions). Deleting the app does not cancel a subscription — see our Support page for details.",
  },
];

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="page-gutter mx-auto max-w-4xl py-12 sm:py-16 md:py-20">
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl md:text-4xl">
        Questions, answered
      </h2>
      <div className="mt-6 divide-y divide-wood/20 rounded-2xl border border-wood/20 bg-paper sm:mt-8 sm:rounded-3xl">
        {FAQS.map((f) => (
          <details key={f.q} className="group p-4 open:pb-4 sm:p-5 sm:open:pb-5">
            <summary className="cursor-pointer list-none font-display text-base font-semibold text-ink marker:hidden sm:text-lg">
              <span className="flex items-start justify-between gap-3 sm:items-center sm:gap-4">
                <span className="min-w-0">{f.q}</span>
                <span className="shrink-0 text-accent-strong transition-transform group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-2 text-base leading-relaxed text-ink-muted">
              {f.a}
            </p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
