/**
 * Single source of truth for FAQ copy, shared by the homepage teaser
 * (components/home/Faq.tsx — featured entries only) and the full /faq page.
 *
 * Wording stays grounded in the terms parents actually search for — see
 * ASO_KEYWORDS in lib/site.ts before adding or rewording an entry.
 */

export type FaqCategory =
  | "Getting started"
  | "Stories & narration"
  | "Privacy & safety"
  | "Devices & offline"
  | "Pricing & subscription";

/** Section order on /faq. */
export const FAQ_CATEGORIES: FaqCategory[] = [
  "Getting started",
  "Stories & narration",
  "Privacy & safety",
  "Devices & offline",
  "Pricing & subscription",
];

export type FaqItem = {
  q: string;
  a: string;
  category: FaqCategory;
  /**
   * Shown on the homepage. Kept to five — the questions parents ask before
   * downloading (who it's for, what's different, is it safe, does it work
   * offline, what does it cost). Everything else lives on /faq.
   */
  featured?: boolean;
};

export const FAQS: FaqItem[] = [
  {
    q: "What ages is MoonPage for?",
    a: "MoonPage is designed for children ages 3 and up, meant to be enjoyed together with a parent or guardian.",
    category: "Getting started",
    featured: true,
  },
  {
    q: "Is MoonPage good for toddlers and preschoolers?",
    a: "Yes — MoonPage's stories are written for children ages 3 and up, which covers toddlers through early preschool and beyond. Each story uses simple, gentle language and calm pacing that's easy to follow right before sleep.",
    category: "Getting started",
  },
  {
    q: "Do I need to create an account?",
    a: "No — MoonPage never requires an account or login. Purchases are tied to your App Store or Google Play account and restore automatically wherever you're signed in.",
    category: "Getting started",
  },
  {
    q: "Is MoonPage an educational app or a story app?",
    a: "MoonPage is focused on bedtime story reading and listening, not games or quizzes. It's designed to wind a child down for sleep rather than stimulate them with interactive activities.",
    category: "Getting started",
  },
  {
    q: "Can grandparents or other caregivers use MoonPage too?",
    a: "Yes — anyone caring for your child can open MoonPage and read a story together, or use the voice-recording feature so your child can hear a familiar voice even when that person isn't there.",
    category: "Getting started",
  },

  {
    q: "Can I record my own voice for a story?",
    a: "Yes — every story can be read by a professional narrator, or recorded in your own voice from within the story. Recordings stay on your device.",
    category: "Stories & narration",
    featured: true,
  },
  {
    q: "What makes MoonPage different from other bedtime story apps?",
    a: "MoonPage lets you record your own voice as the narrator for any story, so a parent working late or traveling can still be the voice their child falls asleep to. Stories are original and hand-picked rather than licensed reprints, and the app has no ads, no login, and no third-party tracking.",
    category: "Stories & narration",
  },
  {
    q: "What kind of stories does MoonPage have?",
    a: "Original, illustrated bedtime stories built around gentle themes like kindness, courage, and curiosity — the kind of stories meant to end the day on a calm note, not an exciting one.",
    category: "Stories & narration",
  },
  {
    q: "Can my child listen to a story instead of reading it?",
    a: "Yes — every story can be read aloud by a professional narrator, read aloud by your device, or narrated in your own recorded voice. You choose which one plays.",
    category: "Stories & narration",
  },
  {
    q: "Will there be more stories added over time?",
    a: "Yes — MoonPage's library is added to on an ongoing basis. See the Stories page for a sample of what's on the shelf right now.",
    category: "Stories & narration",
  },

  {
    q: "Is MoonPage safe for young children to use?",
    a: "MoonPage is parent-directed and built with children's privacy in mind: no ads, no third-party trackers, no account or login required, and no personalised advertising. See our Privacy Policy for full details.",
    category: "Privacy & safety",
    featured: true,
  },
  {
    q: "Is there any advertising in the app?",
    a: "No. MoonPage contains no third-party ads, and we don't build advertising profiles on you or your child.",
    category: "Privacy & safety",
  },
  {
    q: "Does MoonPage collect my child's personal data?",
    a: "MoonPage doesn't require an account, so we don't collect an Apple ID, Google account, or email through the app. A child's first name and profile details, if you enter them, stay on your device. Full details are in our Privacy Policy.",
    category: "Privacy & safety",
  },

  {
    q: "Do I need an internet connection?",
    a: "Once MoonPage is installed, stories work offline — including illustrations and narration. An internet connection is only needed to download or update the app, or to manage your subscription.",
    category: "Devices & offline",
    featured: true,
  },
  {
    q: "Does MoonPage work on iPad and tablets?",
    a: "Yes — MoonPage is designed for a full-screen, landscape reading experience and works well on both phones and tablets, including iPad.",
    category: "Devices & offline",
  },
  {
    q: "Is MoonPage available on Android?",
    a: "Yes — MoonPage is available on both iOS through the App Store and Android through Google Play.",
    category: "Devices & offline",
  },
  {
    q: "Can I use MoonPage on more than one device?",
    a: "Yes — your subscription is tied to your App Store or Google Play account and restores automatically on any device signed into that account. Locally saved items like reading progress and voice recordings stay on the device where you created them.",
    category: "Devices & offline",
  },

  {
    q: "Is MoonPage free to download?",
    a: "Yes — downloading MoonPage is free. Some stories are free to read right away, and MoonPage Premium is the paid option for full access to the complete, continually updated story library.",
    category: "Pricing & subscription",
  },
  {
    q: "How much does MoonPage cost?",
    a: "MoonPage Premium is a monthly or yearly auto-renewing subscription. Exact pricing is shown in the App Store or Google Play before you subscribe — we don't list a fixed price here since it can vary by region.",
    category: "Pricing & subscription",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — MoonPage Premium includes a 3-day free trial with full access to all features and the complete story library.",
    category: "Pricing & subscription",
  },
];

/** The five shown on the homepage, in the order they're declared above. */
export const FEATURED_FAQS = FAQS.filter((f) => f.featured);
