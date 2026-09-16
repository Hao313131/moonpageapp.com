/**
 * FAQ content for the keyword SEO hub pages — emitted as FAQPage JSON-LD by
 * `hubJsonLd` (lib/site.ts) AND rendered visibly by <HubFaq> (components/HubFaq.tsx).
 * Google only shows the rich "People also ask" result when the two match, so the
 * SAME text lives in both places.
 *
 * Previously only /bedtime-stories and /bedtime-stories-by-age had entries; the
 * other seven hubs passed no `faqs` to `hubJsonLd`, so they got no FAQ rich
 * result at all. This file now covers every hub, so all nine category pages earn
 * the expandable FAQ snippet — one of the highest-ROI CTR levers from the SEO plan.
 *
 * Rules:
 *  - Answers stay honest and non-clinical. Every claim is backed by a real product
 *    behaviour (free sample, ages 2+, narrated or own-voice, no ads, no login, offline).
 *  - Phrased like "People also ask" so they win the expandable SERP slot.
 *  - If a hub later gets its own inline FAQ passed to `hubJsonLd`, remove its entry
 *    here to avoid a duplicate FAQPage.
 */
export type HubFaqItem = { q: string; a: string };

export const HUB_FAQS: Record<string, HubFaqItem[]> = {
  "/bedtime-stories": [
    {
      q: "Are MoonPage's bedtime stories free?",
      a: "You can start free — a sample of original bedtime stories is included, narrated and ready to read tonight. No account is needed to try.",
    },
    {
      q: "What ages are the stories for?",
      a: "MoonPage is built for kids ages 2 and up, from toddlers taking their first steps into storytime to preschoolers who want longer plots.",
    },
    {
      q: "Can I record my own voice reading the story?",
      a: "Yes — MoonPage lets you narrate a story in your own voice, so your child hears you even when you're not in the room. A built-in narrator is also available for every story.",
    },
    {
      q: "Do the stories work offline?",
      a: "Yes. Stories download to the device, so bedtime keeps working on a plane, on holiday, or anywhere the wifi drops — no streaming required.",
    },
    {
      q: "Are there ads or in-app purchases I should worry about?",
      a: "No ads and no third-party trackers. A sample of stories is free to start with no account; the full library is an optional subscription.",
    },
    {
      q: "How do I find the right bedtime story fast?",
      a: "Use the by-theme and by-age hubs — pick sleepy, cozy, or adventurous, then filter by age. Most parents find a fit in under a minute.",
    },
  ],
  "/bedtime-stories-by-age": [
    {
      q: "How do I pick the right story for my child's age?",
      a: "Use the by-age hubs: 2-year-olds get short repetitive tales, 3s get simple plots, and 4–6s get longer books with bigger questions.",
    },
    {
      q: "Can I switch difficulty as my child grows?",
      a: "Yes — the same library scales from toddler to preschool, so the stories grow with your child.",
    },
    {
      q: "Are the stories the same across ages, just longer?",
      a: "The same gentle style runs through the library, but plots and language scale: 2-year-olds get short repetitive tales, 3s get simple plots, and 4–6s get longer books with bigger questions, so the stories grow with your child.",
    },
    {
      q: "My child sits between two age bands — which hub do I pick?",
      a: "Start with the younger band; if they're ready for more, move up. Because the library overlaps by design, the same story can be a favorite at either age.",
    },
    {
      q: "What's the best bedtime story length by age?",
      a: "2-year-olds: 2–4 minutes; 3s: 4–6; 4–6s: 6–10 with a small question to chew on. Match length to attention, not the clock.",
    },
  ],
  "/toddler-bedtime-stories": [
    {
      q: "Are these stories right for a 2-year-old?",
      a: "Yes — toddler stories use short sentences, gentle pacing, and cozy endings that hold a wriggly two-year-old's attention without overstimulating.",
    },
    {
      q: "How long should a toddler bedtime story be?",
      a: "Around 2–4 minutes is the sweet spot for ages 2–3: short enough to finish before they lose focus, long enough to feel like a real story.",
    },
    {
      q: "Can I read these on my phone or tablet?",
      a: "Yes. Every story opens on phone or tablet, narrated by a professional voice or your own recorded one, and works offline.",
    },
    {
      q: "Will the stories help my toddler settle?",
      a: "The pacing and soft endings are built to wind a toddler down rather than up, so story time becomes the calm signal that sleep is next.",
    },
  ],
  "/preschool-bedtime-stories": [
    {
      q: "What makes a good preschool bedtime story?",
      a: "A little plot, a gentle problem, and a calm resolution — enough to engage a 3–5 year old without kicking their energy up before bed.",
    },
    {
      q: "How are preschool stories different from toddler ones?",
      a: "They add slightly longer plots and bigger questions, while keeping the cozy pacing that signals wind-down.",
    },
    {
      q: "Do preschoolers outgrow read-aloud?",
      a: "No — kids this age often love being read to most. Keep reading aloud; it builds vocabulary and a routine they look forward to.",
    },
    {
      q: "Are the stories free to try?",
      a: "A sample of original preschool stories is free to open tonight — narrated, no account needed.",
    },
  ],
  "/cozy-bedtime-stories": [
    {
      q: "What makes a bedtime story 'cozy'?",
      a: "Soft pacing, warm artwork, and endings where the world goes quiet — the kind of story that slows a room down instead of speeding it up.",
    },
    {
      q: "Are cozy stories good for anxious kids?",
      a: "Often yes. The calm, predictable tone gives anxious children something steady to land on at the end of the day.",
    },
    {
      q: "Can I play them without wifi?",
      a: "Yes — stories download to the device and play offline, so bedtime stays calm even on holiday or with patchy signal.",
    },
  ],
  "/read-aloud-bedtime-stories": [
    {
      q: "Can I record my own voice reading?",
      a: "Yes — MoonPage lets you narrate a story in your own voice once, then reuse it on busy nights, so your child hears you even when you're not there.",
    },
    {
      q: "Is there a narrator if I'm too tired to read?",
      a: "Every story has a built-in professional narrator, so you can simply press play and cuddle up.",
    },
    {
      q: "Do read-aloud stories help language?",
      a: "Hearing stories read aloud builds vocabulary and listening skills — and a calm voice at bedtime helps kids settle too.",
    },
    {
      q: "Are read-aloud stories free?",
      a: "A sample is free to start, narrated, with no account required.",
    },
  ],
  "/lullaby-bedtime-stories": [
    {
      q: "What is a lullaby bedtime story?",
      a: "A story with soft rhythm and a sleepy ending that feels like a lullaby — gentle narration that slows the room down before sleep.",
    },
    {
      q: "Are lullaby stories only for babies?",
      a: "No — toddlers and older kids enjoy them too, especially on nights when they need help switching off.",
    },
    {
      q: "Do they really help kids fall asleep?",
      a: "The slow pacing and quiet endings are designed to lower energy, making lullaby stories a reliable part of a calm routine.",
    },
    {
      q: "Can I play lullabies offline?",
      a: "Yes — download them once and they play anywhere, no streaming needed.",
    },
  ],
  "/picture-books-for-kids": [
    {
      q: "Are these real illustrated picture books?",
      a: "Yes — every story is an original illustrated picture book with artwork made to keep a child looking at the page, not tapping around.",
    },
    {
      q: "What ages are the picture books for?",
      a: "Ages 2 and up, from simple toddler books to longer preschool tales, all in the same cozy style.",
    },
    {
      q: "Can my child read along?",
      a: "Many kids follow the words while listening — the narration paces the story so early readers can track it.",
    },
    {
      q: "Are there ads in the picture books?",
      a: "No ads and no third-party trackers — just the story, the picture, and a gentle voice.",
    },
  ],
  "/bedtime-stories-app": [
    {
      q: "What is the MoonPage bedtime stories app?",
      a: "A kids' storybook app with original cozy bedtime tales, narrated or in your own voice, offline, with no ads or login.",
    },
    {
      q: "Is MoonPage free?",
      a: "Yes to start — a sample of stories is free to open tonight, no account needed. The full library is an optional subscription.",
    },
    {
      q: "Does it work on iPhone, iPad, and Android?",
      a: "MoonPage is available now on iPhone and iPad through the App Store. An Android version is in development — this page will link to Google Play the day it goes live.",
    },
    {
      q: "Can I use it without wifi at bedtime?",
      a: "Stories download to the device, so bedtime keeps working on a plane, on holiday, or anywhere the wifi drops.",
    },
  ],
};
