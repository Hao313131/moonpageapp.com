const FAQS = [
  {
    q: "What ages is MoonPage for?",
    a: "MoonPage is designed for children ages 3 and up, meant to be enjoyed together with a parent or guardian.",
  },
  {
    q: "Is MoonPage good for toddlers and preschoolers?",
    a: "Yes — MoonPage's stories are written for children ages 3 and up, which covers toddlers through early preschool and beyond. Each story uses simple, gentle language and calm pacing that's easy to follow right before sleep.",
  },
  {
    q: "What makes MoonPage different from other bedtime story apps?",
    a: "MoonPage lets you record your own voice as the narrator for any story, so a parent working late or traveling can still be the voice their child falls asleep to. Stories are original and hand-picked rather than licensed reprints, and the app has no ads, no login, and no third-party tracking.",
  },
  {
    q: "What kind of stories does MoonPage have?",
    a: "Original, illustrated bedtime stories built around gentle themes like kindness, courage, and curiosity — the kind of stories meant to end the day on a calm note, not an exciting one.",
  },
  {
    q: "Will there be more stories added over time?",
    a: "Yes — MoonPage's library is added to on an ongoing basis. See the Stories page for a sample of what's on the shelf right now.",
  },
  {
    q: "Can I record my own voice for a story?",
    a: "Yes — every story can be read by a professional narrator, or recorded in your own voice from within the story. Recordings stay on your device.",
  },
  {
    q: "Can my child listen to a story instead of reading it?",
    a: "Yes — every story can be read aloud by a professional narrator, read aloud by your device, or narrated in your own recorded voice. You choose which one plays.",
  },
  {
    q: "Do I need an internet connection?",
    a: "Once MoonPage is installed, stories work offline — including illustrations and narration. An internet connection is only needed to download or update the app, or to manage your subscription.",
  },
  {
    q: "Does MoonPage work on iPad and tablets?",
    a: "Yes — MoonPage is designed for a full-screen, landscape reading experience and works well on both phones and tablets, including iPad.",
  },
  {
    q: "Is MoonPage available on Android?",
    a: "Yes — MoonPage is available on both iOS through the App Store and Android through Google Play.",
  },
  {
    q: "Is there any advertising in the app?",
    a: "No. MoonPage contains no third-party ads, and we don't build advertising profiles on you or your child.",
  },
  {
    q: "Is MoonPage safe for young children to use?",
    a: "MoonPage is parent-directed and built with children's privacy in mind: no ads, no third-party trackers, no account or login required, and no personalised advertising. See our Privacy Policy for full details.",
  },
  {
    q: "Does MoonPage collect my child's personal data?",
    a: "MoonPage doesn't require an account, so we don't collect an Apple ID, Google account, or email through the app. A child's first name and profile details, if you enter them, stay on your device. Full details are in our Privacy Policy.",
  },
  {
    q: "Do I need to create an account?",
    a: "No — MoonPage never requires an account or login. Purchases are tied to your App Store or Google Play account and restore automatically wherever you're signed in.",
  },
  {
    q: "Can grandparents or other caregivers use MoonPage too?",
    a: "Yes — anyone caring for your child can open MoonPage and read a story together, or use the voice-recording feature so your child can hear a familiar voice even when that person isn't there.",
  },
  {
    q: "Is MoonPage an educational app or a story app?",
    a: "MoonPage is focused on bedtime story reading and listening, not games or quizzes. It's designed to wind a child down for sleep rather than stimulate them with interactive activities.",
  },
  {
    q: "Are any stories free?",
    a: "Yes — some stories are free to read. You can unlock a few more by sharing MoonPage or following us. MoonPage Premium is an auto-renewing subscription for ongoing access to our continually updated library (current Premium titles plus new stories we add while you subscribe).",
  },
  {
    q: "How much does MoonPage cost?",
    a: "MoonPage Premium is a monthly or yearly auto-renewing subscription. Exact pricing is shown in the App Store or Google Play before you subscribe — we don't list a fixed price here since it can vary by region.",
  },
  {
    q: "Is there a free trial?",
    a: "If a free trial is available in your region, it will be shown — along with exact pricing — before you confirm your subscription in the App Store or Google Play.",
  },
  {
    q: "Can I use MoonPage on more than one device?",
    a: "Yes — your subscription is tied to your App Store or Google Play account and restores automatically on any device signed into that account. Locally saved items like reading progress and voice recordings stay on the device where you created them.",
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
      <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl md:text-3xl">
        Questions, answered
      </h2>
      <div className="mt-6 divide-y divide-wood/20 rounded-2xl border border-wood/20 bg-paper sm:mt-8 sm:rounded-3xl">
        {FAQS.map((f) => (
          <details key={f.q} className="group p-4 open:pb-4 sm:p-5 sm:open:pb-5">
            <summary className="cursor-pointer list-none font-display text-sm font-semibold text-ink marker:hidden sm:text-base">
              <span className="flex items-start justify-between gap-3 sm:items-center sm:gap-4">
                <span className="min-w-0">{f.q}</span>
                <span className="shrink-0 text-accent-strong transition-transform group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted">
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
