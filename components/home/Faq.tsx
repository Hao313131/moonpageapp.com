const FAQS = [
  {
    q: "What ages is MoonPage for?",
    a: "MoonPage is designed for children ages 3 and up, meant to be enjoyed together with a parent or guardian.",
  },
  {
    q: "Do I need an internet connection?",
    a: "Stories you've opened are available for offline reading — a connection is only needed the first time you open a new story.",
  },
  {
    q: "Is there any advertising in the app?",
    a: "No. MoonPage contains no third-party ads, and we don't build advertising profiles on you or your child.",
  },
  {
    q: "How many stories are free?",
    a: "The first 2 stories are completely free. Sharing MoonPage unlocks 2 more. MoonPage Premium is an auto-renewing subscription for ongoing access to our continually updated library (current Premium titles plus new stories we add while you subscribe).",
  },
  {
    q: "Do I need to create an account?",
    a: "No — MoonPage never requires an account or login. Purchases are tied to your App Store or Google Play account and restore automatically wherever you're signed in.",
  },
  {
    q: "Can I record my own voice for a story?",
    a: "Yes — every story can be read by a professional narrator, read aloud by your device, or recorded in your own voice from within the story. Recordings stay on your device.",
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
    <section className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        Questions, answered
      </h2>
      <div className="mt-8 divide-y divide-wood/20 rounded-3xl border border-wood/20 bg-paper">
        {FAQS.map((f) => (
          <details key={f.q} className="group p-5 open:pb-5">
            <summary className="cursor-pointer list-none font-display text-lg font-semibold text-ink marker:hidden">
              <span className="flex items-center justify-between gap-4">
                {f.q}
                <span className="text-accent-strong transition-transform group-open:rotate-45">
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
