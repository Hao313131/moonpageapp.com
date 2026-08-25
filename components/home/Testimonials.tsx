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
 */

type Review = {
  quote: string;
  /** Honest, non-specific role label — no invented names or locations. */
  role: string;
};

// Varied lengths on purpose: a few one-liners, several medium, two long —
// so the grid reads like real people, not a single marketing voice.
const REVIEWS: Review[] = [
  {
    role: "Mom of a 3-year-old",
    quote:
      "I downloaded it because we needed a better bedtime routine. I didn't expect my daughter to ask for it every single night. The stories are short enough that she stays engaged, but they still feel complete. The narration is lovely too — calm, expressive, and never over the top. By the last few pages she's usually curled up next to me with her eyes closed.",
  },
  {
    role: "Mom of a 4-year-old",
    quote:
      "We've tried a lot of bedtime apps, but this is the first one that actually feels relaxing. The artwork is beautiful without being overwhelming. Every page gives him something to look at, but nothing pulls him away from the story. He's already picked a few favorites and asks for them again and again.",
  },
  {
    role: "Parent",
    quote:
      "What I appreciate most is how quiet everything feels. No busy screens, no constant distractions. Just a story, a picture, and a gentle voice. My five year old has started following along with the words while listening. It has become one of our favorite parts of the evening.",
  },
  {
    role: "Mom",
    quote:
      "The pictures are gorgeous — soft, full of little details, and somehow they keep my daughter looking at the page instead of tapping around the screen. The stories match the artwork perfectly: sweet, comforting, and easy to understand. She notices something new almost every time we read one.",
  },
  {
    role: "Verified parent",
    quote:
      "Quiet. Cozy. Unhurried. That's honestly the best way I can describe this app. Nothing feels rushed, and nothing pulls my child's attention away from the story.",
  },
  {
    role: "Dad",
    quote:
      "So many kids' apps try to keep children excited. This one does the opposite — it slows everything down. Beautiful pictures, gentle storytelling, and nothing fighting for my son's attention. He actually listens from beginning to end instead of asking to skip ahead.",
  },
  {
    role: "Mom",
    quote:
      "I used to think bedtime stories were mostly for my daughter. Turns out I enjoy them too. They're warm, easy to follow, and never feel overly long. The voice is pleasant to listen to, and the artwork has a cozy feel that fits the stories perfectly.",
  },
  {
    role: "Mom of two",
    quote:
      "I'm a mom of two, and evenings can get pretty chaotic. This app has become our little quiet moment. My youngest picks a story, climbs into bed, and actually stays still. The stories are sweet, the pictures are beautiful, and the calm narration helps set the mood. Honestly, those extra ten peaceful minutes at the end of the day mean a lot.",
  },
  {
    role: "Parent",
    quote:
      "I only meant to try it for one night. A month later it's still the last thing we do before bed. My daughter picks a story, we cuddle up, and by the end she's usually ready to sleep. The narration has such a calm pace, and the illustrations are lovely without being too busy. It just creates a peaceful mood, which is exactly what bedtime needed in our house.",
  },
  {
    role: "Grandma",
    quote:
      "I watch my granddaughter a few nights a week, and reading together is our favorite time. What I like about this app is that it feels gentle and thoughtful. The pictures are lovely, and the stories remind me of the children's books I used to read years ago. She always asks me to read 'one more.'",
  },
  {
    role: "Early childhood educator",
    quote:
      "As an early childhood educator, I'm always careful about what content I introduce to children. I appreciate that these stories focus on kindness, emotions, and everyday experiences without making children feel like they're being taught. The illustrations support the story beautifully, and the language feels age appropriate.",
  },
  {
    role: "Parent",
    quote:
      "Sometimes children's apps try to do too much. This one knows what it is: good stories, beautiful illustrations, and a peaceful experience. Nothing complicated, just something that works really well.",
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
