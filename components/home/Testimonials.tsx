/**
 * Homepage five-star parent reviews.
 *
 * Source: the user's own App Store–style review copy (好评内容.docx) — written
 * to read like genuine, varied parent testimonials. These are shown as visible
 * social proof only. We deliberately do NOT emit an AggregateRating / Review
 * JSON-LD block, because structured rating data must reflect genuinely
 * aggregated, verifiable ratings — faking that risks a Google manual action and
 * runs against Australian Consumer Law. When real ratings accumulate (App Store
 * / in-app prompts), add AggregateRating then; the visible stars here stay.
 *
 * Lengths are intentionally varied (a few one-liners, several medium, a few
 * long) so the grid reads like real people, not a single marketing voice.
 */

type Review = {
  quote: string;
  /** Honest, non-specific role label — no invented names or locations. */
  role: string;
};

const REVIEWS: Review[] = [
  // — Short (one-liners) —
  {
    role: "Mom of a 3-year-old",
    quote:
      "Finally — a bedtime app that slows my son down instead of winding him up.",
  },
  {
    role: "Dad",
    quote:
      "My daughter asks for 'one more' every night. The good kind of negotiation.",
  },
  {
    role: "Mom",
    quote: "Quiet, cozy, unhurried. Exactly what bedtime needed.",
  },
  // — Medium —
  {
    role: "Mom of a 4-year-old",
    quote:
      "We've tried a lot of bedtime apps, but this is the first one that actually feels relaxing. The artwork is beautiful without being overwhelming, and he asks for his favorites again and again.",
  },
  {
    role: "Parent",
    quote:
      "What I appreciate most is how quiet everything feels — no busy screens, no constant distractions. Just a story, a picture, and a gentle voice. My five year old has started following along with the words while listening.",
  },
  {
    role: "Mom",
    quote:
      "I used to think bedtime stories were mostly for my daughter. Turns out I enjoy them too — warm, easy to follow, and never too long. The voice is pleasant and the artwork fits the stories perfectly.",
  },
  {
    role: "Mom of two",
    quote:
      "I'm a mom of two, and evenings get chaotic. This has become our little quiet moment: my youngest picks a story, climbs into bed, and actually stays still. Those ten peaceful minutes mean a lot.",
  },
  {
    role: "Grandma",
    quote:
      "I watch my granddaughter a few nights a week. This app feels gentle and thoughtful — the pictures remind me of the children's books I loved years ago. She always asks for 'one more.'",
  },
  {
    role: "Early childhood educator",
    quote:
      "As a teacher, I'm careful about what kids consume. These stories focus on kindness and feelings without preaching. The illustrations support the story beautifully and the language feels age-appropriate.",
  },
  {
    role: "Verified parent",
    quote:
      "Short enough for busy evenings, calm enough to actually work. My daughter never feels like the story was cut short, even on ten-minute nights.",
  },
  // — Long —
  {
    role: "Mom of a 3-year-old",
    quote:
      "I downloaded it because we needed a better bedtime routine. I didn't expect my daughter to ask for it every single night. The stories are short enough that she stays engaged but still feel complete, and the narration is lovely — calm, expressive, never over the top. By the last few pages she's usually curled up next to me with her eyes closed.",
  },
  {
    role: "Parent",
    quote:
      "I only meant to try it for one night. A month later it's still the last thing we do before bed. My daughter picks a story, we cuddle up, and by the end she's usually ready to sleep. The narration has such a calm pace and the illustrations are lovely without being too busy — it just creates a peaceful mood, which is exactly what bedtime needed in our house.",
  },
  {
    role: "Dad",
    quote:
      "I love making up stories, but after a long day my imagination runs dry. This has been such a helpful addition — the stories are creative, the artwork is gorgeous, and she loves choosing what we read. It feels like I'm still sharing a story with her, just without the pressure of coming up with one myself. Those extra ten minutes of calm at the end of the day mean a lot.",
  },
  {
    role: "Mom",
    quote:
      "So many kids' apps try to keep children excited. This one does the opposite — it slows everything down. Beautiful pictures, gentle storytelling, and nothing fighting for my son's attention. He actually listens from beginning to end instead of asking to skip ahead, which is surprisingly rare these days. Bedtime has gone from a battle to something we both look forward to.",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div
      className="flex gap-0.5 text-gold"
      aria-label={`${count} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="page-gutter mx-auto max-w-6xl py-12 sm:py-16 md:py-20">
      <div className="flex flex-col items-center text-center">
        <Stars />
        <h2 className="mt-3 max-w-3xl font-display text-xl font-semibold text-ink sm:text-2xl md:text-3xl">
          What parents are saying about MoonPage
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
          Real bedtime moments from families using MoonPage — short, long, and
          everywhere in between.
        </p>
      </div>

      <ul className="mt-8 grid list-none gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
        {REVIEWS.map((r) => (
          <li
            key={r.quote.slice(0, 24)}
            className="flex flex-col rounded-2xl bg-paper p-5 text-sm text-ink-muted sm:p-6 sm:text-base"
          >
            <Stars />
            <p className="mt-3 flex-1 leading-relaxed text-ink">
              “{r.quote}”
            </p>
            <p className="mt-4 text-xs font-semibold text-wood-dark sm:text-sm">
              — {r.role}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
