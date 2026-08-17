/**
 * FAQ content for the keyword SEO hub pages that do NOT already define their
 * own FAQ inline.
 *
 * Why this file exists: most hubs (toddler, preschool, read-aloud, cozy,
 * lullaby, bedtime-stories-app, picture-books-for-kids) already pass a `faqs`
 * array to `hubJsonLd` and render it visibly with <FaqList>. This file only
 * covers the two hubs that have neither — /bedtime-stories and
 * /bedtime-stories-by-age — so `hubJsonLd` can emit a FAQPage rich result for
 * them via `resolvedFaqs = faqs ?? HUB_FAQS[path]` without editing each page.
 *
 * Rules (mirrors the guides' FAQ discipline):
 *  - The SAME text is rendered visibly (see components/HubFaq.tsx) AND emitted
 *    as FAQPage JSON-LD (lib/site.ts). Google only shows the rich result when
 *    the two match.
 *  - Answers stay honest and non-clinical. Every claim here is backed by a real
 *    product behaviour (free sample, ages 2+, narrated or own-voice, no ads,
 *    no login, offline).
 *
 * If a hub below later gets its own inline FAQ, remove its entry here to avoid
 * a duplicate FAQPage.
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
  ],
};
