/**
 * Parenting / bedtime guides — the site's organic-search content layer.
 *
 * Why this exists: the marketing pages target branded and app-category
 * queries ("bedtime stories app"), which is a thin slice of what parents
 * actually type. These target the problem-shaped searches that come first
 * — bedtime routines, resisting sleep, screen time, reading aloud — and
 * link back to the app pages from inside the answer.
 *
 * Ground rules for anything added here:
 *  - Advice stays general and non-clinical. No invented statistics, no
 *    fabricated study citations, no medical claims. Where sleep problems
 *    could be medical, point parents to their pediatrician.
 *  - Every guide earns its keep as a genuine answer first; the MoonPage
 *    mention is a footnote, not the article.
 *  - Keep wording anchored to ASO_KEYWORDS in lib/site.ts.
 */

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type GuideSection = {
  heading: string;
  blocks: GuideBlock[];
};

/**
 * A question and its answer, rendered visibly at the foot of a guide *and*
 * emitted as FAQPage JSON-LD. Both halves matter: Google only shows the rich
 * result when the same text is visible on the page.
 */
export type GuideFaq = { q: string; a: string };

export type Guide = {
  slug: string;
  /** <h1> and <title> — written as the question a parent would search. */
  title: string;
  /** Meta description; also the card blurb on the hub page. */
  description: string;
  /** Short label for cards and cross-links. */
  category: string;
  /** ISO date — feeds Article JSON-LD only (not shown on the page). */
  updated: string;
  readingMinutes: number;
  intro: string[];
  sections: GuideSection[];
  /** Slugs of related guides, rendered as internal links at the bottom. */
  related: string[];
  /**
   * Optional. The "People also ask" questions this guide should own — kept
   * short and directly answerable, because a rich-result snippet gets a
   * couple of lines, not a paragraph.
   */
  faqs?: GuideFaq[];
};

export const GUIDES: Guide[] = [
  {
    slug: "bedtime-routine-for-toddlers",
    title: "How to Build a Bedtime Routine That Actually Works (Ages 2–7)",
    description:
      "A simple, repeatable bedtime routine for toddlers and preschoolers — how long it should take, what order to do things in, and how to handle the nightly stalling.",
    category: "Routines",
    updated: "2026-07-27",
    readingMinutes: 6,
    intro: [
      "Most bedtime battles aren't really about sleep. They're about transition — a small person being asked to stop doing something fun and switch to doing nothing at all. A routine works because it makes that switch predictable, and predictable is the closest thing toddlers have to comfortable.",
      "Here's what a workable routine looks like for ages two to five, and what to do when it stops working.",
    ],
    sections: [
      {
        heading: "Keep it to 20–30 minutes, and always the same order",
        blocks: [
          {
            type: "p",
            text: "The specific steps matter far less than the order staying identical night after night. Children this age can't read a clock, so the sequence itself becomes the clock. A routine that runs 45 minutes on a good night and 15 on a rushed one teaches nothing; one that always goes bath → pajamas → teeth → two stories → lights out tells your child exactly how much time is left without a single negotiation.",
          },
          {
            type: "p",
            text: "A common shape that works well:",
          },
          {
            type: "ol",
            items: [
              "A clear ending to the day's activity — \"last one, then we're going up.\"",
              "Bath or a warm wash, if it's a bath night.",
              "Pajamas and teeth, in that order (teeth last means no snacks after).",
              "Into bed, lights down low.",
              "Stories — the same number every night.",
              "One short goodnight ritual: a song, a phrase, a kiss. The same one.",
            ],
          },
        ],
      },
      {
        heading: "Dim the room before you think you need to",
        blocks: [
          {
            type: "p",
            text: "Bright overhead light keeps a child alert right through the part of the routine that's supposed to be winding them down. Switching to a lamp at the start of the routine — not at the end — does more work than most parents expect. Warm, low light and a quieter voice signal what's coming long before you say the word bedtime.",
          },
        ],
      },
      {
        heading: "Decide the number of stories in advance, out loud",
        blocks: [
          {
            type: "p",
            text: "\"One more story\" is the most reliable stalling tactic in the world because it's such a reasonable request. The fix isn't refusing — it's setting the count before you start, while everyone is still calm: \"Tonight we're reading two.\" Then, at the end of the first, remind them: \"That was one. One more after this.\"",
          },
          {
            type: "p",
            text: "If they ask for a third anyway, and they will, the answer is the same tomorrow-facing sentence every night: \"That's all for tonight. We'll pick the next one in the morning.\" It's not the refusal that settles this; it's the refusal being identical every time.",
          },
        ],
      },
      {
        heading: "Handle the stalling requests in a batch",
        blocks: [
          {
            type: "p",
            text: "Water, one more hug, the bathroom, a question about dinosaurs — the requests aren't the problem, the drip-feed is. Build them into the routine on purpose so they've already happened: water cup filled and placed, last bathroom trip before stories, hugs at the end of the goodnight ritual. When something new comes up after lights out, answer once, briefly, and without turning the lights back on.",
          },
        ],
      },
      {
        heading: "Expect it to break, and know how to restart",
        blocks: [
          {
            type: "p",
            text: "Travel, illness, a new sibling, daylight saving, a great birthday party — routines fall apart regularly and it isn't a failure. The recovery is the same each time: go back to the exact original sequence for a few nights without renegotiating any of it. Children re-learn a familiar routine much faster than they learn a new one.",
          },
          {
            type: "p",
            text: "One caveat worth naming: routines address the behavior side of bedtime, not the medical side. Loud snoring, long gaps in breathing, sleep that never consolidates, or extreme daytime sleepiness are worth raising with your pediatrician rather than solving with a better schedule.",
          },
        ],
      },
      {
        heading: "Where the story fits",
        blocks: [
          {
            type: "p",
            text: "Stories are the part of the routine doing the actual winding down, which is why what you read matters. Calm-ending stories — small problems, gentle resolutions, a quiet last page — leave a child ready for lights out. Exciting ones leave them wanting to talk about it.",
          },
          {
            type: "p",
            text: "MoonPage is built entirely around that last stretch: original illustrated stories written to end the day quietly, by a professional narrator or in your own recorded voice, with no ads and no login to break the mood.",
          },
        ],
      },
    ],
    related: ["same-story-every-night", "read-aloud-to-toddlers"],
    faqs: [
      {
        q: "How long should a toddler's bedtime routine be?",
        a: "About 20 to 30 minutes, and always in the same order. The specific steps matter far less than the sequence staying identical night after night — children this age can't read a clock, so the sequence becomes the clock.",
      },
      {
        q: "What order should a bedtime routine go in?",
        a: "A shape that works well: a clear end to the day's activity, bath, pajamas and then teeth, into bed with the lights low, stories, and one short goodnight ritual. Keeping teeth last means no snacks afterwards.",
      },
      {
        q: "How do I stop the \"one more story\" negotiation?",
        a: "Set the number out loud before you start, while everyone is calm, and remind them at the end of the first book. When they ask for another, use the same tomorrow-facing sentence every night — the consistency settles it, not the refusal itself.",
      },
      {
        q: "How long does it take to establish a bedtime routine?",
        a: "Usually one to two weeks of the same sequence every night before it starts doing the work for you. The first few nights are the hardest; after that the order itself signals sleep, and resistance tends to drop on its own.",
      },
      {
        q: "Should the weekend bedtime routine be the same?",
        a: "Keep the same steps, but a slightly later weekend bedtime is fine for most children. What matters is the sequence staying familiar — a later start with the same bath-story-goodnight order is far less disruptive than a different routine at the usual time.",
      },
    ],
  },

  {
    slug: "same-story-every-night",
    title: "Why Your Child Wants the Same Story Every Night",
    description:
      "Reading the same picture book for the fortieth time feels like a rut for you and works like learning for them. Here's what repetition is doing, and how to live with it.",
    category: "Reading",
    updated: "2026-07-27",
    readingMinutes: 4,
    intro: [
      "You know every word. You could recite it in the car. Your child still wants that one, tonight, again — and gets genuinely upset when you suggest something else.",
      "This is one of the most universal preschool behaviors there is, and it's worth understanding before you try to redirect it.",
    ],
    sections: [
      {
        heading: "Repetition is how young children get to fluency",
        blocks: [
          {
            type: "p",
            text: "The first read of a story is mostly comprehension — following what's happening. It takes several passes before a child stops working on the plot and starts noticing everything else: the rhythm of the sentences, the word they didn't know, the small detail in the corner of the illustration, the joke they missed. What looks like a rut from the outside is a child moving through a book in layers.",
          },
          {
            type: "p",
            text: "It's also where a lot of early vocabulary comes from. Hearing an unfamiliar word once rarely sticks; hearing it in the same sentence, in the same story, twenty nights in a row is how it becomes a word they own.",
          },
        ],
      },
      {
        heading: "Knowing what comes next is the point at bedtime",
        blocks: [
          {
            type: "p",
            text: "There's a second thing going on after dark. A familiar story has no surprises in it — no suspense to resolve, no new information to process. For a child who is being asked to let go of the day, a story they can predict word for word is genuinely calming in a way a new one isn't. The predictability isn't a limitation of the book; at bedtime it's the feature.",
          },
        ],
      },
      {
        heading: "How to keep your own sanity",
        blocks: [
          {
            type: "ul",
            items: [
              "Read the favorite last. Try something new first, while attention is fresh, then finish with the one they asked for. New books get a fair hearing; the familiar one still ends the night.",
              "Let them carry more of it. Pause before the line they know and let them fill it in — it turns the fortieth read into a different activity for both of you.",
              "Rotate a small shelf, not the whole library. Three or four books in circulation is easier for a child to accept than a new title every night.",
              "Record it once. If you can leave a recorded reading of the favorite, the repeat listens don't all have to be live.",
            ],
          },
        ],
      },
      {
        heading: "When it changes",
        blocks: [
          {
            type: "p",
            text: "The phase ends on its own, usually when a child has genuinely finished with the book rather than because a parent successfully redirected them. Somewhere around the point they can recite it, it quietly stops being requested. Pushing the transition rarely speeds it up and often turns book choice into another bedtime negotiation you don't need.",
          },
          {
            type: "p",
            text: "In MoonPage, every story can be re-read as many nights in a row as your child wants, offline, and recorded in your own voice — so the fortieth read doesn't always have to be a live performance.",
          },
        ],
      },
    ],
    related: ["read-aloud-to-toddlers", "bedtime-routine-for-toddlers"],
    faqs: [
      {
        q: "Why does my child want the same story every night?",
        a: "Repetition is how young children get to fluency. Each rereading frees up attention for a new layer of the same familiar story, and at bedtime knowing exactly what comes next is the point rather than a limitation.",
      },
      {
        q: "Is reading the same book over and over bad for my child?",
        a: "No. Predictability is doing real work at bedtime, and a story with no surprises left in it is the easiest kind to fall asleep to.",
      },
      {
        q: "How do I cope with reading the same book again?",
        a: "Add rather than replace — keep the favorite as the last story and put a new one first, while your child still has patience for something unfamiliar.",
      },
    ],
  },

  {
    slug: "screen-time-before-bed",
    title: "Screen Time Before Bed: What Actually Matters for Kids",
    description:
      "Not all pre-bed screen time affects sleep the same way. What the common guidance is really getting at, and how to think about a story on a tablet.",
    category: "Screen time",
    updated: "2026-07-27",
    readingMinutes: 5,
    intro: [
      "\"No screens for an hour before bed\" is the single most repeated piece of children's sleep advice, and most parents follow it imperfectly and feel bad about it.",
      "It's worth separating what that guidance is actually targeting from the blanket version of it, because they aren't the same thing.",
    ],
    sections: [
      {
        heading: "Three different things get lumped together",
        blocks: [
          {
            type: "p",
            text: "When people say screens hurt sleep, they're usually pointing at one or more of these, which behave very differently:",
          },
          {
            type: "ul",
            items: [
              "Displacement — the screen simply takes up the time sleep was going to happen in. This is the big, boring one, and it applies to anything absorbing, screen or not.",
              "Arousal — fast cuts, loud audio, competitive games, cliffhangers. Content that raises heart rate and attention right before you ask a child to lie still and stop thinking.",
              "Light — bright displays close to the face in an otherwise dark room. Real, but usually the smallest factor of the three at typical brightness and distance.",
            ],
          },
          {
            type: "p",
            text: "A child playing a rewarding game until the moment lights go out is hitting all three. A child listening to a slow story on a dimmed tablet while lying down is hitting close to none of them.",
          },
        ],
      },
      {
        heading: "Content and pacing do more work than the device",
        blocks: [
          {
            type: "p",
            text: "The practical question at bedtime isn't screen or no screen, it's whether the thing you're doing winds down or winds up. An exciting chapter of a paper book can leave a child more alert than a quiet illustrated story on a tablet. Pacing, volume, stimulation, and how the thing ends matter more than the material it's displayed on.",
          },
          {
            type: "p",
            text: "The one clear rule that survives all of this: nothing with an infinite feed, autoplay, or ads in the wind-down hour. Not because of the screen, but because those are specifically engineered so that the session doesn't end.",
          },
        ],
      },
      {
        heading: "If a story is on a device, make the device boring",
        blocks: [
          {
            type: "ul",
            items: [
              "Brightness right down, and warm-tone night mode on.",
              "Do Not Disturb, so a notification can't restart the evening.",
              "Full-screen and single-purpose — nothing to tap away to, nothing that recommends a next thing.",
              "Sit together and read it as a shared activity rather than handing the device over.",
              "Have a clear end: the story finishes, the device leaves the room. No \"one more video\" tail.",
            ],
          },
        ],
      },
      {
        heading: "The best test is your own child",
        blocks: [
          {
            type: "p",
            text: "General guidance is written for populations; you have a sample of one right there. Try a week of the same wind-down and watch how long settling takes and how the night goes. Children vary enormously in how much stimulation they can handle late, and your observation beats any rule of thumb about the format.",
          },
          {
            type: "p",
            text: "MoonPage was designed with this specifically in mind: one story at a time, no ads, no autoplay, no recommendation feed, no login, and it works fully offline in airplane mode. The app ends when the story does.",
          },
        ],
      },
    ],
    related: ["bedtime-routine-for-toddlers", "bedtime-when-youre-away"],
    faqs: [
      {
        q: "Is screen time before bed bad for children?",
        a: "It depends which part you mean. Light, stimulating content, and time displaced from sleep behave very differently — a child playing a rewarding game until lights out hits all three, while a child listening to a slow story on a dimmed tablet hits close to none.",
      },
      {
        q: "Are bedtime story apps the same as watching TV before bed?",
        a: "Not necessarily. Pacing, volume, stimulation, and how the thing ends matter more than the material it's displayed on — an exciting chapter of a paper book can leave a child more alert than a quiet illustrated story on a screen.",
      },
      {
        q: "What's the one screen rule worth keeping at bedtime?",
        a: "Nothing with an infinite feed, autoplay, or ads during the wind-down hour — not because of the screen, but because those are specifically engineered so the session doesn't end.",
      },
      {
        q: "Does blue light from a tablet really keep kids awake?",
        a: "It can, but it's usually the smallest of the three factors — displacement, arousal, and light. Dimming the screen and using warm night mode removes most of the light effect; the bigger wins are ending the session clearly and avoiding fast, loud, or competitive content right before bed.",
      },
      {
        q: "Is it okay to read a bedtime story on a phone or tablet?",
        a: "Yes, if the device is made boring: brightness down, Do Not Disturb on, one story and nothing to tap away to. A slow story on a dimmed screen winds a child down more than an exciting book does — the pacing and a clear end matter more than the format.",
      },
    ],
  },

  {
    slug: "read-aloud-to-toddlers",
    title: "How to Read Aloud So a Toddler Actually Listens",
    description:
      "Practical read-aloud technique for ages 2–7 — pacing, voices, questions, and what to do about the child who won't sit still or keeps turning the pages.",
    category: "Reading",
    updated: "2026-07-27",
    readingMinutes: 5,
    intro: [
      "Reading aloud to a toddler is a performance skill, and nobody teaches it to you. The difference between a book that holds a two-year-old and one that loses them in a page is often delivery, not the book.",
      "A few things that reliably help.",
    ],
    sections: [
      {
        heading: "Slower than feels natural, with real pauses",
        blocks: [
          {
            type: "p",
            text: "Most adults read picture books at roughly conversation speed, which is too fast for a listener who is simultaneously decoding the words, processing the illustration, and following the story. Slow down noticeably and stop at the end of each page for a beat — long enough for them to look at the picture. Those pauses are where most of the noticing happens.",
          },
        ],
      },
      {
        heading: "You don't need character voices, but you do need dynamics",
        blocks: [
          {
            type: "p",
            text: "Distinct voices are fun and entirely optional. What isn't optional is variation: going quieter for a quiet moment, slowing down at the turn of the story, letting a short sentence sit. A flat read loses a toddler faster than an unadventurous one. At bedtime, deliberately drop your volume and pace as the story goes on — by the last page you should be close to a whisper.",
          },
        ],
      },
      {
        heading: "Ask about the picture, not the plot",
        blocks: [
          {
            type: "p",
            text: "\"What happened?\" is a comprehension test and lands like one. \"Where's the cat gone?\" or \"Look at his face — how do you think he feels?\" invites them into the page. Keep it to a couple per book, though: bedtime reading is supposed to settle down, and a running conversation will wake a child right back up. Save the chattier version for daytime reads.",
          },
        ],
      },
      {
        heading: "Let them move, let them turn the pages",
        blocks: [
          {
            type: "p",
            text: "A toddler who is fidgeting, standing up, or wandering back and forth is very often still listening — sitting still is a separate skill from attending. Insisting on stillness usually costs you the story. Similarly, let them turn pages even when the timing is wrong; a page turned early is a child engaged with the book, and you can always narrate the bit you skipped.",
          },
          {
            type: "p",
            text: "If they genuinely leave the story, stop. Ending a read early on a good note beats finishing it against resistance, and it keeps books from becoming something they get made to sit through.",
          },
        ],
      },
      {
        heading: "Same book, same words",
        blocks: [
          {
            type: "p",
            text: "Once a story is a favorite, resist improvising. Children track the exact wording closely and will correct you — that tracking is the point, and it's the same mechanism that makes repeated reading such good vocabulary practice.",
          },
          {
            type: "p",
            text: "If you're building a routine around this, MoonPage's stories are written for read-aloud pacing at ages 2+ — short sentences, one calm idea per page — and can be heard by a professional narrator or in your own recorded voice.",
          },
        ],
      },
    ],
    related: ["same-story-every-night", "bedtime-routine-for-toddlers"],
    faqs: [
      {
        q: "How should I read aloud to a toddler?",
        a: "Slower than feels natural, with real pauses — especially before page turns. Adults default to silent-reading speed, which is too fast for a child following words, plot, and pictures at once.",
      },
      {
        q: "Do I need to do character voices?",
        a: "No. You don't need voices, but you do need dynamics — changes in pace and volume carry a story further than impressions do, and at bedtime the quieter version works better anyway.",
      },
      {
        q: "What should I ask my toddler during a story?",
        a: "Ask about the picture rather than the plot. \"Where's the dog?\" or \"what's he holding?\" is answerable for a toddler in a way that questions about motivation aren't.",
      },
      {
        q: "When should I start reading aloud to my baby?",
        a: "From the early months — babies benefit from hearing language and a calm voice well before they understand words. Keep sessions short and let your child lead; the separate guide on starting reading to a baby covers the first year in detail.",
      },
      {
        q: "How long should read-aloud time be at bedtime?",
        a: "Ten to twenty minutes is plenty for most toddlers, and shorter is fine on hard nights. The aim is a calm, predictable end to the day — a few focused minutes beats a long session that ends in a struggle.",
      },
    ],
  },

  {
    slug: "bedtime-when-youre-away",
    title: "Bedtime When You Can't Be There: Travel, Late Shifts, and Long Distance",
    description:
      "How to keep bedtime steady when a parent is traveling, working late, or living apart — what to hand the caregiver, and how recorded voice helps.",
    category: "Routines",
    updated: "2026-07-27",
    readingMinutes: 5,
    intro: [
      "Work trips, night shifts, deployments, separated households, a grandparent covering while you're at the hospital — plenty of families have nights where the usual person isn't the one doing bedtime.",
      "The goal on those nights isn't to replicate you. It's to keep the routine recognizable enough that your child doesn't have to renegotiate sleep from scratch.",
    ],
    sections: [
      {
        heading: "Protect the sequence, not the person",
        blocks: [
          {
            type: "p",
            text: "What a young child depends on is the order of events and how the night ends — not who performs it. If bath comes before pajamas and there are two stories and one goodnight song, and that holds whoever is on duty, most children handle the substitution far better than parents expect.",
          },
          {
            type: "p",
            text: "Write it down for whoever is covering. Not a description — the actual steps, the actual number of stories, and the exact goodnight phrase you use. That last one matters more than it looks: the closing line is often the piece a child notices missing.",
          },
        ],
      },
      {
        heading: "A live call is good, and it has a catch",
        blocks: [
          {
            type: "p",
            text: "Video calls at bedtime are worth doing, with one caveat: they can be stimulating rather than settling, and they end. A call that finishes right at lights out can leave a child more upset than not calling at all. If you can, place the call earlier in the routine — before the wind-down — and let the caregiver on site handle the actual settling.",
          },
        ],
      },
      {
        heading: "Recorded voice covers the gap a call can't",
        blocks: [
          {
            type: "p",
            text: "A recording has the properties a live call doesn't: it works in a different time zone, it works with no signal, it doesn't depend on your evening being free, and it can be replayed as many times as your child wants without you having to perform it again. Hearing a familiar voice read the same story is often the piece that makes an unusual night feel normal.",
          },
          {
            type: "p",
            text: "Practical notes if you're recording: do a few stories in one sitting while you have the quiet, use the phrasing your child already knows, and keep your bedtime delivery — slow, quiet, trailing off at the end. Record before you leave rather than from a hotel room.",
          },
        ],
      },
      {
        heading: "Two households, one routine",
        blocks: [
          {
            type: "p",
            text: "For separated families, agreeing on a shared bedtime sequence across both homes is one of the highest-value things to coordinate on, and one of the least contentious — it isn't about rules or discipline, just the order of a half hour. Same steps, same story count, same closing phrase, whichever house it is.",
          },
        ],
      },
      {
        heading: "Why MoonPage handles this well",
        blocks: [
          {
            type: "p",
            text: "Own-voice recording is the reason MoonPage exists: any story can be recorded in your voice from inside the app, and recordings stay on the device. Stories work fully offline once installed, and no account or login is required — so a grandparent or a co-parent can open it and read tonight's story without any setup.",
          },
        ],
      },
    ],
    related: ["bedtime-routine-for-toddlers", "screen-time-before-bed"],
    faqs: [
      {
        q: "How do I keep bedtime consistent when I'm away?",
        a: "Protect the sequence rather than the person. If the order of the routine and its ending stay identical, a different adult can run it without bedtime falling apart.",
      },
      {
        q: "Are video calls good for bedtime when a parent is away?",
        a: "They help, with a catch: a live call can wind a child up rather than settle them, and a missed or dropped call is worse than none. Keep it earlier in the routine rather than at lights out.",
      },
      {
        q: "What works better than a call?",
        a: "A recorded story in your own voice. It arrives at exactly the right moment in the routine, replays as often as your child wants, and doesn't depend on signal, time zones, or your schedule.",
      },
    ],
  },

  {
    slug: "lullabies-for-babies-and-toddlers",
    title: "Lullabies: Why They Work, and What to Sing If You Can't Sing",
    description:
      "What a lullaby is actually doing at bedtime, how to pick one, and why your out-of-tune voice beats a recording of a professional.",
    category: "Sleep",
    updated: "2026-07-27",
    readingMinutes: 4,
    intro: [
      "Every culture on earth has lullabies, and they all sound roughly the same: slow, repetitive, narrow in range, and sung quietly by someone close by. That's not a coincidence.",
      "Here's what's going on, and how to use it even if you're convinced you can't sing.",
    ],
    sections: [
      {
        heading: "The tune matters less than the voice singing it",
        blocks: [
          {
            type: "p",
            text: "Babies and toddlers are not evaluating your pitch. What they respond to is a familiar voice, close by, at low volume, doing something predictable — which is exactly the same set of cues that make a familiar story work at bedtime. A shaky rendition from you does more than a flawless recording by a stranger, because the point isn't the music.",
          },
          {
            type: "p",
            text: "If singing genuinely isn't for you, humming works. So does saying the words slowly and softly instead of singing them. So does reading a story with a lot of repetition in it — that rhythm is doing a similar job.",
          },
        ],
      },
      {
        heading: "What makes a good bedtime song",
        blocks: [
          {
            type: "ul",
            items: [
              "Slow — slower than you'd naturally sing it, and slowing down further as you go.",
              "Repetitive, with a small number of lines that come back around.",
              "Quiet, and getting quieter. Trailing off is a feature.",
              "Short enough that you can repeat it, rather than long enough to hold attention.",
              "The same one, night after night. The familiarity is most of the effect.",
            ],
          },
          {
            type: "p",
            text: "Classic lullabies — the traditional ones you half-remember from your own childhood — score well on all of these, which is why they survived. Your child doesn't care that it's old.",
          },
        ],
      },
      {
        heading: "Where a song fits in the routine",
        blocks: [
          {
            type: "p",
            text: "The most useful place for a lullaby is at the very end: after the story, lights already low, as the last thing that happens before you leave. That makes it the signal, not the entertainment. If a song is the fun part of the evening, it wakes them up; if it's the closing ritual, it settles them.",
          },
          {
            type: "p",
            text: "Some families sing; some read; plenty do both, story then song. MoonPage covers the story half — original illustrated bedtime stories, by a professional narrator or in your own recorded voice — and the song at the end is yours.",
          },
        ],
      },
    ],
    related: ["bedtime-routine-for-toddlers", "toddler-wont-stay-in-bed"],
    faqs: [
      {
        q: "Do I need to be able to sing to use lullabies?",
        a: "No. The tune matters much less than the voice singing it — a familiar voice is the active ingredient, and children are famously uncritical of their own parents' singing.",
      },
      {
        q: "What makes a good bedtime song?",
        a: "Slow, repetitive, and short enough to repeat. Predictable songs settle; songs with big dynamic changes or a story to follow keep a child listening rather than drifting.",
      },
      {
        q: "Where does a song fit in the bedtime routine?",
        a: "At the end, after the story — a fixed final marker that says the day is over. Keep it the same one, sung the same way, every night.",
      },
    ],
  },

  {
    slug: "toddler-wont-stay-in-bed",
    title: "When a Toddler Won't Stay in Bed",
    description:
      "The curtain calls, the repeated get-ups, the 'I need water' loop — what's driving it and the calm, boring response that ends it fastest.",
    category: "Sleep",
    updated: "2026-07-27",
    readingMinutes: 6,
    intro: [
      "You finish the story, say goodnight, close the door — and thirty seconds later there are footsteps. Then again. And again.",
      "This is developmentally normal, it peaks somewhere in the toddler and preschool years, and how you respond makes a real difference to how long the phase lasts.",
    ],
    sections: [
      {
        heading: "Work out which of the three it is",
        blocks: [
          {
            type: "ul",
            items: [
              "Not tired yet. Bedtime is earlier than their body is ready for, or the nap ran late. A child who lies quietly for 45 minutes and then gets up is telling you about timing, not testing you.",
              "Not ready to be alone. Separation is the most common driver at this age, and it looks like requests — water, one more hug, a question — rather than like fear.",
              "It works. Getting up produces more time with you, which is genuinely the best thing available. This one is a habit, not a feeling, and it responds to consistency.",
            ],
          },
          {
            type: "p",
            text: "The three call for different fixes, so it's worth a couple of nights of watching before you change anything.",
          },
        ],
      },
      {
        heading: "Make the return trip extremely boring",
        blocks: [
          {
            type: "p",
            text: "The single most effective adjustment most parents make is to stop varying their response. Same short phrase — \"It's sleep time, I'll see you in the morning\" — same low voice, no lights on, no new conversation, walk them straight back. Every time, identically, however many times it takes.",
          },
          {
            type: "p",
            text: "It feels cold the first two nights and it is genuinely not. What you're removing is the reward for getting up, not the reassurance; the reassurance is that you come every time and say the same calm thing. Escalating — negotiating on the first trip, getting annoyed by the fourth — is what teaches a child that persistence pays.",
          },
        ],
      },
      {
        heading: "Pre-empt the requests inside the routine",
        blocks: [
          {
            type: "p",
            text: "Whatever they get up for, build it into the routine so it's already happened: water cup filled and within reach, last bathroom trip after teeth, the goodnight hug given at a fixed moment. Some families add a single \"one free pass\" — one get-up allowed, at the child's discretion — which works surprisingly well for kids old enough to plan, because it puts them in charge of it.",
          },
        ],
      },
      {
        heading: "Check bedtime itself",
        blocks: [
          {
            type: "p",
            text: "If settling takes more than about half an hour night after night, the schedule is the likeliest suspect — usually a nap that's too late or too long, or a bedtime that's drifted earlier than their body clock. Moving bedtime later by fifteen or twenty minutes for a week sounds backwards and often fixes it, because a child who is actually sleepy has much less interest in getting up.",
          },
          {
            type: "p",
            text: "One thing worth separating out: night waking with real distress, screaming, or fear is a different problem from bedtime resistance, and persistent versions are worth raising with your pediatrician rather than treating as a discipline question.",
          },
        ],
      },
      {
        heading: "The story as the last thing",
        blocks: [
          {
            type: "p",
            text: "Ending the routine with a story helps because it gives the goodbye a shape: the story finishes, and finishing means sleep. A story with a genuinely quiet ending helps more than an exciting one — there's nothing left to come out and ask about.",
          },
          {
            type: "p",
            text: "If separation is the driver, a recording of your own voice reading the story can be the bridge. MoonPage lets you record any story in your voice, so the familiar voice is still in the room after you've left it.",
          },
        ],
      },
    ],
    related: ["bedtime-routine-for-toddlers", "lullabies-for-babies-and-toddlers"],
    faqs: [
      {
        q: "Why does my toddler keep getting out of bed?",
        a: "It's usually one of three things: they aren't tired enough yet, they want more of you, or getting up is simply more interesting than lying still. The response differs depending on which one it is.",
      },
      {
        q: "How do I get my toddler to stay in bed?",
        a: "Make the return trip extremely boring — walk them back with minimal words, minimal eye contact, and the same short phrase every time. Any conversation or negotiation is more interesting than lying in the dark.",
      },
      {
        q: "What if they keep asking for water and hugs?",
        a: "Pre-empt the requests inside the routine so they've already happened: water cup filled and placed, last bathroom trip before stories, hugs at the end of the goodnight ritual.",
      },
    ],
  },

  {
    slug: "why-picture-books-matter",
    title: "What Picture Books Actually Do for a Preschooler",
    description:
      "Vocabulary, attention, empathy, and pre-reading skills — what reading picture books aloud is building, in plain terms.",
    category: "Reading",
    updated: "2026-07-27",
    readingMinutes: 5,
    intro: [
      "\"Read to your child\" is advice so universal that it's easy to follow without knowing what it's for. It's worth knowing, because it changes how you read.",
      "In plain terms, here's what a nightly picture book is building.",
    ],
    sections: [
      {
        heading: "Words they'd never hear in conversation",
        blocks: [
          {
            type: "p",
            text: "Everyday talk with a small child runs on a fairly small set of words, because you're mostly coordinating a day: eat, shoes, careful, later. Picture books reach for language conversation doesn't — words like hush, drift, glimmer, brave — and they arrive with a picture and a story attached, which is what makes them stick.",
          },
        ],
      },
      {
        heading: "The idea that print means something",
        blocks: [
          {
            type: "p",
            text: "Long before decoding letters, children learn a set of things about how books work: text goes left to right, pages turn one way, the marks on the page are what the grown-up is saying, a story has a beginning and an end. This is print awareness, and it's the ground floor of learning to read. Running your finger along a line occasionally, or letting them turn the pages, teaches it without a single lesson.",
          },
        ],
      },
      {
        heading: "Practice at other people's insides",
        blocks: [
          {
            type: "p",
            text: "A story is the easiest way to think about someone else's feelings, because the feelings are labeled and the stakes aren't yours. A character who is frustrated, or left out, or scared and does it anyway gives a preschooler a rehearsal of an emotion they'll meet for real. It's also why the same book gets requested after a bad day at nursery.",
          },
        ],
      },
      {
        heading: "Sustained attention, at a manageable size",
        blocks: [
          {
            type: "p",
            text: "Following one narrative for ten minutes is a skill, and picture books are just about the right size to practise it — long enough to require holding a thread, short enough to finish. This is the one that pays off in a classroom later.",
          },
        ],
      },
      {
        heading: "And the part that isn't measurable",
        blocks: [
          {
            type: "p",
            text: "The daily fifteen minutes of undivided attention, warm and unhurried, at the same time every night. Whatever else reading aloud is doing developmentally, this is the part your child will actually remember.",
          },
          {
            type: "p",
            text: "MoonPage's stories are written for this slot specifically: one calm idea per page, short sentences pitched at ages 2+, and endings that wind down rather than up.",
          },
        ],
      },
    ],
    related: ["read-aloud-to-toddlers", "choosing-bedtime-books"],
    faqs: [
      {
        q: "What do picture books actually teach children?",
        a: "Words they'd never hear in everyday conversation, the idea that print carries meaning, practice at understanding other people's feelings, and sustained attention at a manageable size.",
      },
      {
        q: "Are picture books still valuable once a child can read?",
        a: "Yes. Listening comprehension runs years ahead of reading ability, so picture books read aloud give a child richer language and story structure than anything they can decode alone.",
      },
      {
        q: "Why do picture books help with empathy?",
        a: "A story gives a child practice at being inside someone else's head at a safe distance — easier to think about than a real situation involving them.",
      },
    ],
  },

  {
    slug: "choosing-bedtime-books",
    title: "How to Choose a Bedtime Book (and What to Save for Daytime)",
    description:
      "Not every good picture book is a good bedtime book. What to look for in a story meant to end the day, and what reliably backfires.",
    category: "Reading",
    updated: "2026-07-27",
    readingMinutes: 4,
    intro: [
      "A book can be excellent and still be the wrong choice at 7:30pm. The bedtime slot has requirements the rest of the day doesn't.",
      "What to look for, and what to move to the daytime shelf.",
    ],
    sections: [
      {
        heading: "Look at the last two pages first",
        blocks: [
          {
            type: "p",
            text: "This is the fastest test there is. If the story ends with everyone calm, at home, in bed, or quietly resolved, it's a bedtime book. If it ends on a joke, a twist, a cliffhanger, or a rousing finish, it's a daytime book — the ending is the note your child is left holding.",
          },
        ],
      },
      {
        heading: "Small problems, gently solved",
        blocks: [
          {
            type: "p",
            text: "Good bedtime stories tend to have low stakes: a lost mitten, a kite in a tree, waiting for a cake. Big peril is exciting, and exciting is the opposite of what you want twenty minutes before sleep. Look for a problem that's real to a three-year-old but not frightening to one.",
          },
        ],
      },
      {
        heading: "Rhythm you can slow down",
        blocks: [
          {
            type: "p",
            text: "Short sentences, repeated phrases, and one idea per page let you read slowly without the story falling apart. Dense pages of text force you to hurry, and a hurried read is a stimulating read. Rhyme is good, with one caveat — bouncy rhyme is fun to perform and hard to make sleepy.",
          },
        ],
      },
      {
        heading: "What reliably backfires",
        blocks: [
          {
            type: "ul",
            items: [
              "Anything with a monster, a chase, or the dark as a threat, unless your child has specifically asked for it and does fine with it.",
              "Interactive books — flaps, buttons, sound chips, seek-and-find. They're great books and they're games, and games don't wind down.",
              "Anything tied to a screen character your child is very excited about. The excitement arrives with the book.",
              "Brand-new books, on hard nights. New means suspense; suspense means alert.",
            ],
          },
        ],
      },
      {
        heading: "Keep a small bedtime shelf",
        blocks: [
          {
            type: "p",
            text: "The practical version of all of this is a separate short shelf — four or five titles that reliably work — kept apart from the daytime books. It removes the nightly browse, which is one of the more common ways a bedtime routine loses fifteen minutes.",
          },
          {
            type: "p",
            text: "Every MoonPage story is written against these constraints on purpose, and the library is browsable by theme if you want the sleepiest ones specifically.",
          },
        ],
      },
    ],
    related: ["why-picture-books-matter", "bedtime-routine-for-toddlers"],
    faqs: [
      {
        q: "How do I choose a good bedtime book?",
        a: "Look at the last two pages first. If they're louder, faster, or more exciting than the middle of the book, it will wake your child up rather than settle them.",
      },
      {
        q: "What kind of bedtime books backfire?",
        a: "Anything with jeopardy, comic timing that needs a big voice, seek-and-find spreads, or an ending that twists. They're excellent books — just at four in the afternoon.",
      },
      {
        q: "Should I keep bedtime books separate?",
        a: "A small dedicated bedtime shelf is worth having. Sorting your existing books into daytime and bedtime piles usually improves bedtime more than buying anything new.",
      },
    ],
  },

  {
    slug: "cozy-bedroom-for-better-sleep",
    title: "Making a Bedroom Cozy Enough to Sleep In",
    description:
      "Light, sound, temperature, and clutter — the small environmental changes that make a child's room easier to fall asleep in.",
    category: "Sleep",
    updated: "2026-07-27",
    readingMinutes: 4,
    intro: [
      "Bedtime routines get most of the attention, but the room itself is doing a lot of quiet work either way. These are the adjustments that tend to matter, roughly in order of how much difference they make.",
    ],
    sections: [
      {
        heading: "Dark, but not darker than your child likes",
        blocks: [
          {
            type: "p",
            text: "Darkness is the strongest single cue for sleep, and summer evenings or streetlights undo it. Blackout curtains or a blind liner are the highest-value change most families make. The exception is a child who is actively afraid of the dark — for them, a dim warm night light is worth far more than perfect darkness, and the fear is the thing to solve first.",
          },
          {
            type: "p",
            text: "Warm-toned and low is the rule for any light that stays on. Anything bright enough to read by is too bright to sleep next to.",
          },
        ],
      },
      {
        heading: "Consistent sound beats silence",
        blocks: [
          {
            type: "p",
            text: "A perfectly quiet room makes every noise an event — a door, a car, a sibling. A steady low sound, whether that's a fan or a white-noise machine, evens out the peaks. Keep it quiet, keep it unchanging, and keep it on all night rather than switching it off once they're down, so waking briefly doesn't mean waking into a different room.",
          },
        ],
      },
      {
        heading: "Cooler than feels right",
        blocks: [
          {
            type: "p",
            text: "Bodies drop in temperature to fall asleep, and a warm room works against that. Slightly cool with an extra layer on the bed usually beats warm and light. Check the back of their neck rather than their hands, which run cold anyway.",
          },
        ],
      },
      {
        heading: "Fewer things in eyeline",
        blocks: [
          {
            type: "p",
            text: "A visible pile of toys is a visible list of better options. You don't need a bare room — but moving the most interesting things out of the direct view from the pillow, or into a closed box, removes a surprising amount of stalling. The same goes for anything with a light on it.",
          },
        ],
      },
      {
        heading: "One comfort object, always in the same place",
        blocks: [
          {
            type: "p",
            text: "A specific bear or blanket that lives in the bed and is only there is a genuinely powerful cue — it means this place, this time. Worth protecting: don't let it become a daytime toy that goes missing at 7pm.",
          },
          {
            type: "p",
            text: "The story belongs to this list too. Same place, same time, same quiet ending — MoonPage is built to be the calm last step rather than another bright thing in the room.",
          },
        ],
      },
    ],
    related: ["bedtime-routine-for-toddlers", "screen-time-before-bed"],
    faqs: [
      {
        q: "How dark should a child's bedroom be?",
        a: "Dark is the strongest single cue for sleep, so blackout curtains or a blind liner are the highest-value change most families make — except for a child who's afraid of the dark, where a dim warm night light is worth more than perfect darkness.",
      },
      {
        q: "What temperature should a child's room be for sleeping?",
        a: "Slightly cool with an extra layer on the bed beats warm and light, because bodies drop in temperature to fall asleep. Check the back of their neck rather than their hands, which run cold anyway.",
      },
      {
        q: "Is a silent room best for sleep?",
        a: "Not usually. A perfectly quiet room makes every noise an event, so a steady low sound from a fan or white-noise machine evens out the peaks — kept quiet, unchanging, and on all night.",
      },
    ],
  },

  {
    slug: "bedtime-stories-in-two-languages",
    title: "Bedtime Stories in Two Languages",
    description:
      "How bilingual families can use the bedtime story — which language to read in, how to handle a child who answers in the other one, and why repetition helps.",
    category: "Reading",
    updated: "2026-07-27",
    readingMinutes: 5,
    intro: [
      "For families raising a child in more than one language, the bedtime story is one of the few reliably daily, reliably calm slots available — which makes it valuable, and makes it worth being deliberate about.",
    ],
    sections: [
      {
        heading: "Read in the language you're most yourself in",
        blocks: [
          {
            type: "p",
            text: "If you have a choice, read in the language you can be expressive in — the one where you can slow down, do the voices, and improvise a comment about the picture. Warmth and fluency of delivery matter more for a bedtime story than which language it's in, and a stilted read in the \"more useful\" language is the worse trade.",
          },
        ],
      },
      {
        heading: "Repetition is a bigger advantage here",
        blocks: [
          {
            type: "p",
            text: "The same-story-every-night phase is a gift in a bilingual house. Hearing the same sentences in the minority language night after night, with the same pictures anchoring the meaning, is close to ideal language exposure — far better than a wider rotation of books each read once.",
          },
        ],
      },
      {
        heading: "When they answer in the other language",
        blocks: [
          {
            type: "p",
            text: "Very common, and not a failure. The usual advice is to keep going in your language without correcting or requiring a switch: answer their point in yours, keep the story where it is. Bedtime especially is the wrong moment to turn reading into a language lesson — if the story becomes work, you lose the slot altogether.",
          },
        ],
      },
      {
        heading: "Splitting it up",
        blocks: [
          {
            type: "ul",
            items: [
              "One parent, one language, each reading their own nights — the simplest split, and it keeps both consistent.",
              "Two stories, one in each language, if you have the time and your child has the stamina.",
              "The same story on alternating nights, which works well for a book they already know by heart.",
              "Recorded voice for the language that isn't in the house every night — a grandparent's reading is exposure that survives the calendar.",
            ],
          },
        ],
      },
      {
        heading: "Where the app fits",
        blocks: [
          {
            type: "p",
            text: "MoonPage's stories are in English, with professional narration for families who want a native model to read along with, and own-voice recording for the rest — including relatives reading in another language over the same illustrations. Recordings stay on the device.",
          },
        ],
      },
    ],
    related: ["same-story-every-night", "read-aloud-to-toddlers"],
    faqs: [
      {
        q: "Which language should I read bedtime stories in?",
        a: "The one you're most yourself in. Bedtime reading runs on warmth and ease, and a parent reading haltingly in a second language delivers less of both than one reading fluently in their first.",
      },
      {
        q: "What if my child answers in the other language?",
        a: "That's normal and not a failure. Keep reading in your language and let them respond in theirs — comprehension develops well before production in a second language.",
      },
      {
        q: "Can we do bedtime stories in both languages?",
        a: "Yes — many families split it by book, by night, or by parent. What matters is that the split is predictable rather than decided fresh each evening.",
      },
    ],
  },

  {
    slug: "audiobooks-vs-reading-aloud",
    title: "Audio Stories vs Reading Aloud: When Each One Is the Right Call",
    description:
      "Narrated stories aren't a lesser substitute for reading aloud — they're a different tool. What each is good for, at bedtime and in the car.",
    category: "Screen time",
    updated: "2026-07-27",
    readingMinutes: 4,
    intro: [
      "Parents often feel vaguely guilty about letting a narrator do bedtime. It's worth being clearer about what's actually different between the two, because it isn't quality — it's what each one gives your child.",
    ],
    sections: [
      {
        heading: "What reading aloud gives you that audio doesn't",
        blocks: [
          {
            type: "ul",
            items: [
              "Interaction — the pause where they point at something, the question, your answer. This is where a lot of the language learning happens.",
              "Calibration — you slow down when they're lost, skip a scary bit, stop early when they're done.",
              "The closeness. Sitting together with a book is the part they remember.",
            ],
          },
        ],
      },
      {
        heading: "What narrated stories give you that you don't",
        blocks: [
          {
            type: "ul",
            items: [
              "Listening practice without decoding — following a story purely by ear is its own skill, and a good narrator models pacing and expression.",
              "Coverage of the nights you can't be there, or can't face another read.",
              "Repeats on demand. A child can hear the same story six times without anyone having to perform it six times.",
              "Hands-free contexts — the car, a poorly evening, the twenty minutes while you cook.",
            ],
          },
        ],
      },
      {
        heading: "A reasonable split",
        blocks: [
          {
            type: "p",
            text: "Read aloud when you can, and use narration for the rest without ranking them. Practically: live reading as the default for the bedtime story, narration for car journeys, quiet time, second and third listens of a favorite, and the nights when someone else is on duty or you're simply finished.",
          },
          {
            type: "p",
            text: "One thing to keep an eye on: audio at bedtime should end. A story that finishes and stops is settling; a queue that keeps playing means the room never actually goes quiet.",
          },
        ],
      },
      {
        heading: "Your voice, recorded",
        blocks: [
          {
            type: "p",
            text: "There's a middle version that gets overlooked: your voice, recorded. It has the familiarity of you and the repeatability of audio, and for a child whose parent travels or works nights it's often better than either alone. MoonPage is built around exactly this — by a professional narrator, or in your own recorded voice on any story, all offline.",
          },
        ],
      },
    ],
    related: ["screen-time-before-bed", "bedtime-when-youre-away"],
    faqs: [
      {
        q: "Are audiobooks as good as reading aloud to a child?",
        a: "They do different jobs. Reading aloud gives you the back-and-forth conversation and physical closeness; narration gives a consistent performance and works when you can't. Most families are best off using both without ranking them.",
      },
      {
        q: "When should I use narrated stories instead of reading?",
        a: "Car journeys, quiet time, second and third listens of a favorite, nights when someone else is on duty, and the evenings you're simply finished. Set them to end rather than play continuously.",
      },
      {
        q: "Is there a middle option between reading aloud and audiobooks?",
        a: "Your own voice, recorded. It has the familiarity of you and the repeatability of audio, which is often better than either alone for a child whose parent travels or works nights.",
      },
    ],
  },

  {
    slug: "bedtime-stories-for-2-year-olds",
    title: "Bedtime Stories for 2-Year-Olds: What Actually Holds Their Attention",
    description:
      "What to read to a two-year-old at bedtime, how long it should take, and why the book you loved reading last year suddenly gets slammed shut halfway through.",
    category: "Ages",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "Two is the age where reading aloud stops being something you do to a child and starts being something you do with one. They interrupt. They turn the page early. They want the same six pages and nothing else. All of that is the reading working, not failing.",
      "Here's what to pick for a two-year-old at bedtime, and what to expect from the ten minutes it takes.",
    ],
    sections: [
      {
        heading: "Short, and shorter than you think",
        blocks: [
          {
            type: "p",
            text: "A two-year-old's sustained attention for a story runs somewhere between three and eight minutes, and bedtime is at the low end of that range because they're tired. A picture book you can finish in five minutes gets finished; a longer one gets abandoned, which teaches your child that stories are something you give up on.",
          },
          {
            type: "p",
            text: "Two short books beat one long one at this age. If you only have the long one, read the parts you like and narrate the rest in your own words — nobody is grading you on completeness.",
          },
        ],
      },
      {
        heading: "What the text should look like",
        blocks: [
          {
            type: "p",
            text: "The books that work at two share a shape, and once you notice it you can spot a good one in a bookshop in about four seconds:",
          },
          {
            type: "ul",
            items: [
              "One or two sentences per spread, not a paragraph.",
              "Concrete nouns a toddler can point at — moon, cup, dog, boot — rather than abstractions like patience or adventure.",
              "A repeating line that comes back every few pages, so they can join in.",
              "A rhythm you can feel when you read it out loud once. If it trips you, it will trip them.",
              "An ending that stops rather than twists. Surprises are for daytime.",
            ],
          },
        ],
      },
      {
        heading: "Expect interruptions, and let them happen",
        blocks: [
          {
            type: "p",
            text: "A two-year-old who points at the duck and says \"duck!\" for the fourth time is not derailing the story — that is the story, as far as their language development is concerned. Answer, name the thing, and carry on. The research-backed part of reading aloud at this age is the back-and-forth talk around the book, not the number of pages covered.",
          },
          {
            type: "p",
            text: "The one exception is the last book of the night. Once you've moved into wind-down, keep your responses short and your voice low, or the conversation becomes the new activity.",
          },
        ],
      },
      {
        heading: "The same book, again, forever",
        blocks: [
          {
            type: "p",
            text: "Two is peak repetition age. Being asked for the identical story forty nights running is normal, and it's doing real work — each rereading frees up attention for something new in the same familiar frame, first the pictures, then the words, then the rhythm, then the meaning.",
          },
          {
            type: "p",
            text: "If you're going quietly out of your mind, the trick is to add rather than replace: keep the favorite as the last story and put the new one first, while they still have patience for unfamiliar things.",
          },
        ],
      },
      {
        heading: "Books that survive being loved",
        blocks: [
          {
            type: "p",
            text: "At two, a book is also a physical object being handled by someone with no fine motor control and strong opinions. Board books survive; paper ones get repaired with tape. It's worth keeping the fragile ones on a higher shelf for shared reading and letting the sturdy ones live where your child can reach them, because a book they can fetch themselves gets read far more often.",
          },
        ],
      },
      {
        heading: "Where MoonPage fits at this age",
        blocks: [
          {
            type: "p",
            text: "MoonPage's stories are written for ages 2+ with exactly this in mind: short spreads, simple language, calm arcs, and endings that fade out instead of building up. You can read them aloud yourself, play the professional narration, or record your own voice so the story sounds like you even on the nights you can't be there.",
          },
        ],
      },
    ],
    related: [
      "bedtime-stories-for-3-year-olds",
      "same-story-every-night",
      "read-aloud-to-toddlers",
    ],
    faqs: [
      {
        q: "How long should you read to a 2-year-old at bedtime?",
        a: "About five to ten minutes total. Most two-year-olds can follow a single picture book of three to eight minutes, so two short books usually work better than one long one.",
      },
      {
        q: "Should a 2-year-old sit still during a story?",
        a: "No. Pointing, interrupting, turning pages early, and climbing around are all normal at two, and the talk around the book is a large part of its value. Only the final story of the night needs to be kept quiet and low-key.",
      },
      {
        q: "Why does my 2-year-old want the same book every night?",
        a: "Repetition is how toddlers learn. Each reread frees up attention for a new layer of the same familiar story — pictures first, then words, then rhythm and meaning. It usually eases on its own by three or four.",
      },
    ],
  },

  {
    slug: "bedtime-stories-for-3-year-olds",
    title: "Bedtime Stories for 3-Year-Olds: Plots, Questions, and Stalling",
    description:
      "Three-year-olds can finally follow a real story — and have just discovered that questions delay lights out. What to read, and how to keep story time from stretching to forty minutes.",
    category: "Ages",
    updated: "2026-07-28",
    readingMinutes: 6,
    intro: [
      "Somewhere in the third year, a switch flips: your child starts following a plot. They can hold on to what happened at the start of the book by the time you reach the end, they notice when a character is sad, and they ask what happens next instead of just naming the dog.",
      "That's the good news. The other news is that three-year-olds also work out that story time is negotiable, and questions are the most effective delaying device ever invented.",
    ],
    sections: [
      {
        heading: "They can handle a real story now",
        blocks: [
          {
            type: "p",
            text: "At three, a picture book with an actual arc — something goes wrong, someone tries, it works out — lands properly for the first time. You can move on from books that are mostly lists of objects to books where a small character wants something and gets it in the end.",
          },
          {
            type: "p",
            text: "Keep the problem small. A lost mitten, a friend who won't share, a scary noise that turns out to be the cat. Three-year-olds have the comprehension for tension and not yet the regulation to shake it off at lights out, so the stakes should stay domestic.",
          },
        ],
      },
      {
        heading: "Why questions arrive at the end of every page",
        blocks: [
          {
            type: "p",
            text: "Some of the questions are genuine — three is the age of relentless why — and some are strategic. You can usually tell them apart by timing: real curiosity happens mid-story, stalling happens after you close the book.",
          },
          {
            type: "p",
            text: "Answer questions during the story. After the last page, switch to one sentence and a redirect: \"Good question. Tell me in the morning what you think.\" The consistency of the answer does more than its content.",
          },
        ],
      },
      {
        heading: "Set the number before you start",
        blocks: [
          {
            type: "ol",
            items: [
              "Say how many stories before the first one begins, while everyone is calm.",
              "Let them choose which ones — the count is yours, the picks are theirs.",
              "Name the last one out loud as you start it: \"This is the last one tonight.\"",
              "Close the book, lights off, same goodnight line every night.",
            ],
          },
          {
            type: "p",
            text: "Handing over the choice is what makes the fixed count survivable. A three-year-old who picked both books has already had their say and has much less to argue about.",
          },
        ],
      },
      {
        heading: "Let them tell it back",
        blocks: [
          {
            type: "p",
            text: "Three is old enough to retell a story, badly and with enormous confidence, and it's worth encouraging. Ask what happened at the beginning, or hand them a familiar book and let them \"read\" it to you from memory and pictures. This is early literacy doing its most useful work — narrative structure, sequencing, the idea that print carries a fixed story.",
          },
          {
            type: "p",
            text: "Do this earlier in the evening rather than at lights out, though. Performing wakes them up.",
          },
        ],
      },
      {
        heading: "Scary is closer than it used to be",
        blocks: [
          {
            type: "p",
            text: "Three-year-olds have imagination without much of a boundary between imagined and real, which is why a mildly menacing wolf can be fine at four in the afternoon and a problem at eight at night. If the last story of the evening features anything with teeth, expect it back at two in the morning.",
          },
          {
            type: "p",
            text: "Save the exciting books for daytime and keep the last story calm. This is not censorship; it's just scheduling.",
          },
        ],
      },
      {
        heading: "Where MoonPage fits at this age",
        blocks: [
          {
            type: "p",
            text: "MoonPage's stories run on small, solvable problems — a seal who won't slow down, a bear making his winter bed, feelings that got too big — resolved gently and ended quietly. Read them yourself, use the professional narration, or record the story in your own voice for the nights someone else is doing bedtime.",
          },
        ],
      },
    ],
    related: [
      "bedtime-stories-for-2-year-olds",
      "bedtime-stories-for-4-year-olds",
      "bedtime-routine-for-toddlers",
    ],
    faqs: [
      {
        q: "How many bedtime stories should a 3-year-old get?",
        a: "Two is a common, workable number. What matters more than the count is deciding it out loud before the first story starts and keeping it identical every night, while letting your child choose which books.",
      },
      {
        q: "How long should a bedtime story be for a 3-year-old?",
        a: "Five to ten minutes per book. Three-year-olds can follow a full plot, so a picture book with a beginning, a small problem, and a gentle resolution works well.",
      },
      {
        q: "Can 3-year-olds handle slightly scary stories at bedtime?",
        a: "Usually not right before sleep. At three the line between imagined and real is thin, so exciting or frightening books are better read during the day and the last story of the night kept calm.",
      },
    ],
  },

  {
    slug: "bedtime-stories-for-4-year-olds",
    title: "Bedtime Stories for 4-Year-Olds: Longer Books, Bigger Questions",
    description:
      "Four-year-olds can sit through a longer story, argue with the ending, and worry about things at lights out. What to read, when to switch to chapter books, and how to handle the bedtime questions.",
    category: "Ages",
    updated: "2026-07-28",
    readingMinutes: 6,
    intro: [
      "Four is a wonderful age to read to. They can follow a story across ten minutes, remember characters from last night, predict what's coming, and tell you confidently that the ending was wrong and here is what should have happened instead.",
      "It's also the age where bedtime starts collecting the day's worries. A four-year-old lying in the dark has enough imagination to invent problems and not enough perspective to dismiss them, which is why the last story matters more now, not less.",
    ],
    sections: [
      {
        heading: "Longer books, and the first chapter books",
        blocks: [
          {
            type: "p",
            text: "Most four-year-olds can handle a picture book of eight to twelve minutes, which opens up a much bigger shelf: stories with a middle, side characters, and jokes that need setup. Many are also ready for their first illustrated chapter books read one short chapter at a time.",
          },
          {
            type: "p",
            text: "Chapter books at bedtime have one catch worth knowing before you start: a chapter that ends on a cliffhanger is designed to keep a reader going, which is the exact opposite of what you want at lights out. Stop at a calm moment even if the chapter isn't finished, or save serialized books for the afternoon.",
          },
        ],
      },
      {
        heading: "Let them argue with the story",
        blocks: [
          {
            type: "p",
            text: "Four-year-olds have opinions about fairness, and picture books are full of it. Why did he get two? That wasn't kind. Those conversations are worth having — a story gives your child a safe distance to think about behavior that would be hard to discuss if it were about them and their sibling this afternoon.",
          },
          {
            type: "p",
            text: "Keep it to a couple of exchanges at bedtime, though, and put the real discussion on tomorrow's list. Analysis is stimulating.",
          },
        ],
      },
      {
        heading: "When bedtime questions get big",
        blocks: [
          {
            type: "p",
            text: "Around four, the questions at lights out change character: what happens when people die, what if there's a fire, what if you don't come back. They tend to arrive at bedtime because that's the first quiet moment of the day, not because your child is unusually anxious.",
          },
          {
            type: "p",
            text: "Answer briefly, honestly, and calmly, then close it: \"That's a big question and I want to think about it properly with you tomorrow. Right now it's sleep time, and I'm right here.\" Long reassurance at midnight tends to feed the worry rather than settle it.",
          },
        ],
      },
      {
        heading: "Reading together, not just to them",
        blocks: [
          {
            type: "p",
            text: "Many four-year-olds are starting to recognize letters and a few words. Pointing at the odd word as you read is fine; turning bedtime into a lesson is not. Bedtime reading's job is warmth and wind-down, and a child who is being quizzed at eight at night learns that story time comes with a test.",
          },
          {
            type: "p",
            text: "Do the letter work in daylight. At bedtime, just read.",
          },
        ],
      },
      {
        heading: "Keeping the routine from drifting",
        blocks: [
          {
            type: "p",
            text: "Four-year-olds negotiate well. Bedtime routines at this age tend to grow by five minutes a week until they're an hour long and nobody remembers how. It's worth checking every few weeks whether the routine you're actually running is the one you agreed on, and quietly trimming it back to the original shape.",
          },
        ],
      },
      {
        heading: "Where MoonPage fits at this age",
        blocks: [
          {
            type: "p",
            text: "MoonPage's library covers the themes four-year-olds are chewing on — fairness, courage, big feelings, friendship — in stories that stay short enough to end the day rather than restart it. Professional narration is there for the nights your voice is gone, and you can record your own for the nights you're not home.",
          },
        ],
      },
    ],
    related: [
      "bedtime-stories-for-3-year-olds",
      "bedtime-stories-for-5-year-olds",
      "bedtime-stories-for-anxious-kids",
    ],
    faqs: [
      {
        q: "Can a 4-year-old listen to chapter books at bedtime?",
        a: "Many can, one short chapter at a time. Stop at a calm moment rather than a cliffhanger — chapter endings are written to keep a reader going, which works against lights out.",
      },
      {
        q: "How long should bedtime stories be for a 4-year-old?",
        a: "Around eight to twelve minutes of reading in total. Four-year-olds can follow longer plots with side characters, but the final story of the night should still end quietly.",
      },
      {
        q: "Why does my 4-year-old ask big questions at bedtime?",
        a: "Bedtime is often the first quiet, undistracted moment of their day, so worries surface then. Answer briefly and honestly, promise a proper conversation tomorrow, and keep the reassurance short rather than extended.",
      },
    ],
  },

  {
    slug: "bedtime-stories-for-5-year-olds",
    title: "Bedtime Stories for 5- and 6-Year-Olds (Keep Reading to Them)",
    description:
      "Once a child can read a little themselves, bedtime reading aloud often stops. Here's why it shouldn't, what to read at five and six, and how to share the reading without turning it into homework.",
    category: "Ages",
    updated: "2026-07-28",
    readingMinutes: 6,
    intro: [
      "Five is the age when reading aloud quietly disappears from a lot of houses. Your child starts school, starts sounding out words, brings home a reading book — and the bedtime story turns into practice, then into a chore, then into nothing.",
      "It's worth resisting that, because listening comprehension runs years ahead of reading ability. A six-year-old can understand a story far richer than anything they can decode themselves, and reading aloud is how they get to it.",
    ],
    sections: [
      {
        heading: "Keep school reading and bedtime reading separate",
        blocks: [
          {
            type: "p",
            text: "The single most useful thing you can do at this age is keep the two apart. School reading practice is work: they decode, you help, it's short and it's effortful. Bedtime reading is a gift: you read, they listen, nobody is corrected.",
          },
          {
            type: "p",
            text: "Do the practice earlier in the day if you possibly can. When the only reading a child does is the hard kind, books become the thing that's difficult rather than the thing that's warm.",
          },
        ],
      },
      {
        heading: "Read above their level, on purpose",
        blocks: [
          {
            type: "p",
            text: "At five and six, a child can follow a story with more plot, longer sentences, and a wider vocabulary than they could ever read alone. That gap is where the value is: it's where they meet new words in context, where sentences get more complex, and where they discover that books can be genuinely gripping.",
          },
          {
            type: "p",
            text: "Longer picture books, illustrated chapter books, folk tales, and short story collections all work well. So does re-reading old favorites — a five-year-old revisiting a book from when they were three is doing something more like nostalgia than regression.",
          },
        ],
      },
      {
        heading: "Share the reading without making it a test",
        blocks: [
          {
            type: "ul",
            items: [
              "Let them read one page and you read the rest — a page is enough to feel included and not enough to become work.",
              "Give them the repeating line or the dialogue of one character.",
              "Take turns by book rather than by page: they read their short one, you read the long one.",
              "If a word stalls them for more than a couple of seconds, just say it and keep the story moving.",
            ],
          },
          {
            type: "p",
            text: "The rule underneath all of these: bedtime is not the place to correct pronunciation. Fluency comes from volume and enjoyment, and neither survives being interrupted.",
          },
        ],
      },
      {
        heading: "Wind-down still matters at six",
        blocks: [
          {
            type: "p",
            text: "School-age children need roughly nine to eleven hours of sleep, and the transition from a busy day to sleep doesn't get easier just because they're older. If anything a five-year-old carries more home with them — friendships, teachers, things that happened at lunch — and a quiet story is a reliable way to close the day without turning it into a debrief.",
          },
          {
            type: "p",
            text: "Keep the last book calm even now. Exciting chapter books belong to the weekend afternoon.",
          },
        ],
      },
      {
        heading: "Audio has a real place at this age",
        blocks: [
          {
            type: "p",
            text: "Five- and six-year-olds get a lot out of narrated stories: they can follow more complex audio than they can read, and it gives them something to do in bed after lights out that isn't a screen. Set it to finish — a story that ends and leaves the room quiet settles; a queue that keeps rolling doesn't.",
          },
        ],
      },
      {
        heading: "Where MoonPage fits at this age",
        blocks: [
          {
            type: "p",
            text: "MoonPage's stories are written for ages 2+ and stay useful at five and six as the calm last step of the routine — read aloud by you, narrated professionally, or recorded in your own voice. No ads and no login, so nothing interrupts the last ten minutes of the day.",
          },
        ],
      },
    ],
    related: [
      "bedtime-stories-for-4-year-olds",
      "audiobooks-vs-reading-aloud",
      "why-picture-books-matter",
    ],
    faqs: [
      {
        q: "Should I still read aloud to my child once they can read?",
        a: "Yes. Listening comprehension stays well ahead of reading ability for years, so reading aloud gives a five- or six-year-old access to richer stories, harder vocabulary, and more complex sentences than they can decode alone.",
      },
      {
        q: "Should my 5-year-old read their school book at bedtime?",
        a: "Ideally not. Keep decoding practice earlier in the day and leave bedtime as reading they simply enjoy — otherwise books become the effortful thing rather than the comforting one.",
      },
      {
        q: "What should I read to a 5- or 6-year-old at bedtime?",
        a: "Longer picture books, illustrated chapter books, folk tales, and short story collections — pitched above what they can read themselves. Keep the last story of the night calm rather than exciting.",
      },
    ],
  },
  {
    slug: "how-to-make-up-a-bedtime-story",
    title: "How to Make Up a Bedtime Story (When You Have No Book)",
    description:
      "A repeatable formula for inventing a bedtime story on the spot — in the car, in a hotel, in a blackout — even if you're certain you aren't creative.",
    category: "Bedtime stories",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "Every parent eventually ends up somewhere with a tired child and no book: a train, a power cut, a relative's spare room, the ten minutes after you realize the bedtime bag is still at home. Making one up is a skill, not a talent, and it runs on a formula you can learn in about four minutes.",
      "The formula below is deliberately boring. Boring is the point — a bedtime story is not supposed to be a good story, it's supposed to be a calm one.",
    ],
    sections: [
      {
        heading: "The five-beat shape",
        blocks: [
          {
            type: "ol",
            items: [
              "A small character in a cozy place. \"There was a little hedgehog who lived under the garden step.\"",
              "One tiny problem. Something is lost, someone is cold, a friend is missing. Nothing with teeth.",
              "Two attempts that don't quite work. This is the whole middle of the story and it can last as long as you need it to.",
              "Help from someone kind. A neighbor, a parent, a passing owl.",
              "Home, warm, asleep. Always end with the character going to bed.",
            ],
          },
          {
            type: "p",
            text: "That's it. The last beat is the one that does the work: a story that ends with a character falling asleep in a warm place is a bedtime story, whatever happened in the middle.",
          },
        ],
      },
      {
        heading: "Steal the cast from your own day",
        blocks: [
          {
            type: "p",
            text: "You don't have to invent anything. The hero is your child with a different name and ears. The setting is your street, the park you went to, the beach from the summer. The problem is a gentle version of something small that happened today — a toy left behind, a friend who wouldn't share, a scraped knee.",
          },
          {
            type: "p",
            text: "Children love this far more than genuine invention, because they get to recognize things. Just keep the parallel loose enough that it isn't obviously a lecture; if your child says \"that's me,\" you've gone one step too close.",
          },
        ],
      },
      {
        heading: "Slow down instead of adding plot",
        blocks: [
          {
            type: "p",
            text: "The instinct when a made-up story runs thin is to add events. Do the opposite: add detail. What color was the door. What did the soup smell like. How many steps down to the burrow, and were they cold. Description is soporific; plot is stimulating.",
          },
          {
            type: "p",
            text: "This is also how you buy yourself thinking time. A long, slow sentence about moonlight on a windowsill costs you fifteen seconds and gives you a whole new paragraph to work out.",
          },
        ],
      },
      {
        heading: "Let them contribute — but ration it",
        blocks: [
          {
            type: "p",
            text: "Asking \"and what do you think the hedgehog found?\" turns a monologue into a game and a game into a wide-awake child. One or two contributions at the beginning is a nice way to get their buy-in. After that, take the story back and narrate.",
          },
          {
            type: "p",
            text: "A useful phrasing for the handover: \"You choose what animal it is, and I'll tell the rest.\"",
          },
        ],
      },
      {
        heading: "Reuse the same story",
        blocks: [
          {
            type: "p",
            text: "Once you've invented a character your child likes, keep them. A recurring hedgehog with a known burrow means you skip the setup every time and go straight to the slow middle, and your child gets the same comfort from a familiar character that they get from a favorite book.",
          },
          {
            type: "p",
            text: "Families end up with a small private canon this way, and it usually outlasts most of the books on the shelf.",
          },
        ],
      },
      {
        heading: "When you've got nothing left",
        blocks: [
          {
            type: "p",
            text: "Some nights the invention just isn't there, and that's what a ready story is for. MoonPage keeps illustrated bedtime stories on the phone that's already in your pocket — offline, no login, professional narration or your own recorded voice — which covers the hotel room, the delayed flight, and the evening you have simply run out.",
          },
        ],
      },
    ],
    related: [
      "what-makes-a-good-bedtime-story",
      "bedtime-when-youre-away",
      "reading-aloud-with-expression",
    ],
    faqs: [
      {
        q: "How do you make up a bedtime story on the spot?",
        a: "Use a fixed five-beat shape: a small character in a cozy place, one tiny problem, two attempts that don't work, help from someone kind, then home and asleep. Ending with the character falling asleep is what makes it a bedtime story.",
      },
      {
        q: "What should a made-up bedtime story be about?",
        a: "Something small and familiar — a lost toy, a cold neighbor, a friend who wouldn't share. Borrow the setting from your own street or day, and keep the problem gentle enough that it settles rather than excites.",
      },
      {
        q: "How do you make a made-up story last longer?",
        a: "Add description rather than plot. Slow, detailed sentences about smells, colors, and small movements stretch the story and make it sleepier; new events do the opposite.",
      },
    ],
  },

  {
    slug: "what-makes-a-good-bedtime-story",
    title: "What Makes a Good Bedtime Story (And What Makes a Bad One)",
    description:
      "Not every excellent children's book is a good bedtime book. The difference is in the ending, the pacing, and how loud the last page is.",
    category: "Bedtime stories",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "There's a category error hiding in most bedtime routines: treating \"a great picture book\" and \"a great bedtime book\" as the same thing. Plenty of superb children's books are terrible at eight in the evening, because they were written to delight rather than to settle.",
      "Here's what separates the two, so you can look at your own shelf and sort it.",
    ],
    sections: [
      {
        heading: "The arc should descend, not climb",
        blocks: [
          {
            type: "p",
            text: "Most stories build: tension rises, peaks near the end, resolves in the last spread. A bedtime story should do its rising early and spend the back half coming down. By the last few pages nothing should be at stake — you want a slow taxi to the gate, not a landing.",
          },
          {
            type: "p",
            text: "A quick test: read the last two pages on their own. If they're louder or faster than the middle, it's a daytime book.",
          },
        ],
      },
      {
        heading: "Small problems, close to home",
        blocks: [
          {
            type: "p",
            text: "The best bedtime problems are domestic and solvable: a lost mitten, a cold neighbor, a friend who wanted the same swing, a feeling too big to carry. They give the story something to be about without giving a tired child something to worry about.",
          },
          {
            type: "p",
            text: "Peril, villains, and genuine jeopardy all work beautifully at three in the afternoon and come back to visit at three in the morning.",
          },
        ],
      },
      {
        heading: "Language you can slow down",
        blocks: [
          {
            type: "ul",
            items: [
              "Sentences with a steady rhythm — you should be able to drop your pace without the text sounding broken.",
              "Repeated lines your child can anticipate and, if they want, say with you.",
              "Concrete, sensory words: warm, soft, dark, quiet. Bedtime writing is mostly texture.",
              "No jokes that need a big voice. Comic timing wakes children up.",
            ],
          },
        ],
      },
      {
        heading: "Pictures that get quieter too",
        blocks: [
          {
            type: "p",
            text: "Illustration does as much of the settling as the text. Busy, high-contrast spreads with a hundred things to find are wonderful and they are an activity — a child who is searching a page is engaged, not drifting. Bedtime illustration tends toward fewer elements, softer edges, and darker, warmer palettes as the book goes on.",
          },
          {
            type: "p",
            text: "The classic bedtime books almost all do this: the light in the pictures literally goes down page by page.",
          },
        ],
      },
      {
        heading: "The right length is the length you'll finish",
        blocks: [
          {
            type: "p",
            text: "A book that regularly gets abandoned halfway is worse than a shorter one, because the routine's job is to reach a reliable ending. Five minutes at two, up to ten or twelve by four or five, and if you're reading more than one, the shortest and calmest goes last.",
          },
        ],
      },
      {
        heading: "Books that are great, but not at bedtime",
        blocks: [
          {
            type: "p",
            text: "None of this is a criticism of the loud books. Rhyming romps, seek-and-find spreads, monster stories, and anything that makes a four-year-old shriek with laughter are doing important work — just at four in the afternoon. Sorting your shelf into daytime and bedtime piles is usually a bigger improvement to bedtime than buying anything new.",
          },
          {
            type: "p",
            text: "MoonPage's library is deliberately all one pile: original illustrated stories written for the last ten minutes of the day, with small problems, gentle resolutions, and last pages that fade out.",
          },
        ],
      },
    ],
    related: [
      "choosing-bedtime-books",
      "how-to-make-up-a-bedtime-story",
      "why-picture-books-matter",
    ],
    faqs: [
      {
        q: "What makes a story a good bedtime story?",
        a: "A descending arc — tension early, nothing at stake by the last page — plus a small domestic problem, steady rhythmic language, softening illustrations, and a length you can reliably finish.",
      },
      {
        q: "Are exciting picture books bad before bed?",
        a: "They aren't bad books, they're daytime books. Comic timing, jeopardy, and busy seek-and-find spreads all engage a child rather than settle them, so they work better in the afternoon.",
      },
      {
        q: "How can I tell if a book works at bedtime?",
        a: "Read the last two pages on their own. If they're louder, faster, or more exciting than the middle of the book, it will wake your child up rather than wind them down.",
      },
    ],
  },

  {
    slug: "how-long-to-read-at-bedtime",
    title: "How Long Should Bedtime Reading Take?",
    description:
      "How many minutes of bedtime reading is right by age, why story time keeps stretching, and how to shorten it without a fight.",
    category: "Routines",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "Bedtime reading has a natural tendency to expand. It starts at ten minutes, and some months later you're forty minutes in, on the fourth book, wondering how this happened and whether stopping now makes you the villain.",
      "There is no official correct number. But there are useful ranges, and there's a reliable way to shrink a routine that's outgrown itself.",
    ],
    sections: [
      {
        heading: "Rough ranges by age",
        blocks: [
          {
            type: "ul",
            items: [
              "Ages 2–3: five to ten minutes, usually one or two short books.",
              "Ages 3–4: ten to fifteen minutes, two books or one longer one.",
              "Ages 4–6: fifteen to twenty minutes, including a chapter of something longer.",
            ],
          },
          {
            type: "p",
            text: "These are the reading portion only, not the whole routine — bath, teeth, and pajamas sit outside them. And they're descriptive, not prescriptive: a family who reads for half an hour every night and enjoys it has no problem to solve.",
          },
        ],
      },
      {
        heading: "Count books, not minutes",
        blocks: [
          {
            type: "p",
            text: "Children can't judge minutes, so a time limit is invisible to them and feels arbitrary when it lands. A book count is concrete: two books is two books, and everyone can see how many are left. Announce the number before the first one, and let your child choose which.",
          },
        ],
      },
      {
        heading: "Why it keeps growing",
        blocks: [
          {
            type: "p",
            text: "The usual mechanism is entirely reasonable in each instance. One night they're upset and get a third book. One night you're feeling guilty about work and read for longer. One night a grandparent does bedtime and reads four. Each exception is fine; the pattern is what stretches.",
          },
          {
            type: "p",
            text: "The other driver is that reading is the pleasant part for you too. It's often the calmest, warmest ten minutes of the day, and it's genuinely hard to be the one who ends it.",
          },
        ],
      },
      {
        heading: "How to shorten it without a battle",
        blocks: [
          {
            type: "ol",
            items: [
              "Announce the change in daylight, not at bedtime: \"From tonight we're reading two books.\"",
              "Trade length for quality — the last book gets your slowest, quietest reading, so shorter doesn't feel like less.",
              "Move the extra reading to another time of day, and say so: \"We'll read the long one after lunch tomorrow.\"",
              "Keep the goodnight ritual intact. Trim books, never the ending — the last thirty seconds are what actually close the day.",
            ],
          },
          {
            type: "p",
            text: "Expect two or three difficult nights. The routine re-sets faster than you'd think as long as the number doesn't move during them.",
          },
        ],
      },
      {
        heading: "The floor is more important than the ceiling",
        blocks: [
          {
            type: "p",
            text: "On the truly bad nights — late, sick, everyone finished — the useful move isn't to skip reading, it's to have a two-minute version. One very short story, or the same one you always use, keeps the routine's shape intact so tomorrow starts from a routine rather than a rebuild.",
          },
          {
            type: "p",
            text: "MoonPage is often the two-minute version in our own house: a short illustrated story, narrated if your voice is gone, offline and with no login to slow it down.",
          },
        ],
      },
    ],
    related: [
      "bedtime-routine-for-toddlers",
      "how-to-make-up-a-bedtime-story",
      "toddler-wont-stay-in-bed",
    ],
    faqs: [
      {
        q: "How long should bedtime stories take?",
        a: "Roughly five to ten minutes at ages two to three, ten to fifteen at three to four, and fifteen to twenty at four to six — the reading portion only, separate from bath and teeth.",
      },
      {
        q: "How many books should I read at bedtime?",
        a: "Pick a number, say it out loud before the first book, and keep it identical every night. Counting books works better than counting minutes because young children can see how many are left.",
      },
      {
        q: "How do I shorten a bedtime routine that's got too long?",
        a: "Announce the new book count during the day rather than at bedtime, read the final book more slowly to compensate, move extra reading to daytime, and keep the goodnight ritual unchanged. Expect a few hard nights.",
      },
    ],
  },

  {
    slug: "scared-of-the-dark",
    title: "When a Child Is Scared of the Dark (and What's Under the Bed)",
    description:
      "Fear of the dark, monsters in the closet, and the shadow on the wall — why it shows up around three, what helps, and what accidentally makes it worse.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 6,
    intro: [
      "Fear of the dark usually arrives somewhere between two and four, often in a child who was previously fine, and it is not a sign that anything has gone wrong. It's a side effect of imagination coming online: a child who can now picture things that aren't there will, inevitably, picture something in the closet.",
      "It generally fades over months rather than nights. What you do in the meantime makes a real difference to how those months go.",
    ],
    sections: [
      {
        heading: "Take the fear seriously, not literally",
        blocks: [
          {
            type: "p",
            text: "\"There's nothing to be scared of\" is true and completely useless — your child already knows you think that, and it doesn't touch the feeling. What helps is acknowledging the fear as real while staying relaxed about the danger: \"The dark feels scary sometimes. I'm going to sit here a minute; you're safe.\"",
          },
          {
            type: "p",
            text: "Your calm is the actual message. Children read your body language for whether a situation is dangerous long before they process your words.",
          },
        ],
      },
      {
        heading: "Don't hunt monsters",
        blocks: [
          {
            type: "p",
            text: "Monster spray, closet checks, and under-the-bed searches feel kind and often backfire, because they confirm the premise. If we spray for monsters, monsters are the sort of thing that exist and can be sprayed for — and tomorrow the spray will need testing again.",
          },
          {
            type: "p",
            text: "The alternative isn't a debate. It's a matter-of-fact statement and a move on: \"Monsters aren't real. The room is the same room it is in the daytime. Let's turn the little light on and I'll tuck you in.\"",
          },
        ],
      },
      {
        heading: "Adjust the room, not just the child",
        blocks: [
          {
            type: "ul",
            items: [
              "A dim, warm night light — low enough not to keep them awake, steady enough that waking at 2am isn't into blackness.",
              "Look at the room from the pillow with the lights out. Coat hooks, curtains, and a dressing gown on a door make genuinely alarming shapes from three feet up.",
              "Leave the door open at a fixed, agreed width, and don't change it after they're asleep.",
              "Consider what's on the walls. A poster that's friendly at noon can be unsettling in half-light.",
            ],
          },
        ],
      },
      {
        heading: "Give them something to do with the fear",
        blocks: [
          {
            type: "p",
            text: "Fear tends to shrink when a child has an action available. A small, specific job works far better than reassurance: hold this bear, whose job is to keep watch. Squeeze the blanket three times. Say the goodnight rhyme with me. It converts a passive state into something they're doing.",
          },
          {
            type: "p",
            text: "Keep whatever you pick identical night to night. The predictability is doing as much work as the action itself.",
          },
        ],
      },
      {
        heading: "Watch what's going in during the day",
        blocks: [
          {
            type: "p",
            text: "A fear that spikes suddenly often has a source: a film, an older sibling's game, an overheard conversation about something on the news, a story with a wolf in it. Children don't reliably report being frightened by something at the time, and it can surface days later at lights out.",
          },
          {
            type: "p",
            text: "This is a large part of why the last story of the night matters. A calm final book gives their imagination something safe to run on while they drift off.",
          },
        ],
      },
      {
        heading: "When it's more than a phase",
        blocks: [
          {
            type: "p",
            text: "Ordinary fear of the dark fades gradually and stays at bedtime. If it's escalating over months, spilling into daytime, causing panic rather than upset, or your child is regularly not sleeping because of it, that's worth raising with your pediatrician — not because something is wrong, but because there's help available and no reason to spend a year on it alone.",
          },
        ],
      },
    ],
    related: [
      "nightmares-and-bad-dreams",
      "bedtime-stories-for-anxious-kids",
      "cozy-bedroom-for-better-sleep",
    ],
    faqs: [
      {
        q: "Why is my toddler suddenly scared of the dark?",
        a: "Fear of the dark typically appears between two and four as imagination develops — a child who can picture things that aren't there starts picturing them in the closet. It's a normal stage and usually fades over months.",
      },
      {
        q: "Does monster spray work?",
        a: "It often backfires. Checking for or spraying monsters confirms that monsters are the kind of thing that could be there, so the ritual has to be repeated and expanded. A calm, matter-of-fact statement plus a night light works better.",
      },
      {
        q: "Should I leave a night light on?",
        a: "A dim, warm night light is usually helpful, especially for a child who wakes in the night. Keep it low, and keep the door at the same agreed width every night rather than changing it once they're asleep.",
      },
    ],
  },

  {
    slug: "nightmares-and-bad-dreams",
    title: "Nightmares, Night Terrors, and Getting Back to Sleep",
    description:
      "How to tell a nightmare from a night terror, what to do at 2am in each case, and how to handle the next bedtime so the fear doesn't compound.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 6,
    intro: [
      "Bad dreams become common in the preschool years for the same reason fear of the dark does: imagination gets powerful before judgment catches up. Most children have them, most grow out of the worst of it, and the handling is more about the next twenty minutes than about prevention.",
      "One distinction is worth knowing before you're standing in a dark hallway at two in the morning, because the two situations call for opposite responses.",
    ],
    sections: [
      {
        heading: "Nightmares and night terrors are different events",
        blocks: [
          {
            type: "p",
            text: "A nightmare is a bad dream. Your child wakes up, knows you're there, is frightened, wants comfort, and often remembers it in the morning. They usually happen in the second half of the night.",
          },
          {
            type: "p",
            text: "A night terror looks far worse and is easier on the child. They may sit up, scream, thrash, or stare through you — and they aren't awake. They typically happen in the first few hours of sleep, don't respond to comforting, and are almost never remembered the next day.",
          },
        ],
      },
      {
        heading: "What to do in each case",
        blocks: [
          {
            type: "ul",
            items: [
              "Nightmare: go in, keep the lights low, hold or sit with them, say very little. Comfort first, discussion never at 2am — talking through the content wakes them fully and fixes the images in place.",
              "Night terror: don't wake them and don't restrain them. Stay nearby, move anything they could hurt themselves on, wait it out. It usually passes in a few minutes and they go back to sleep on their own.",
              "Either way, get them back into their own bed if that's your norm, without turning the event into a new arrangement.",
            ],
          },
        ],
      },
      {
        heading: "The morning conversation is the useful one",
        blocks: [
          {
            type: "p",
            text: "In daylight, a nightmare is worth a short, unemotional conversation. Let them tell it, don't interrogate, and don't overreact to the content — dreams about being chased or losing a parent are the standard repertoire and rarely mean anything specific.",
          },
          {
            type: "p",
            text: "Some children like giving the dream a different ending, drawing it, or deciding what the monster is scared of. Do that at breakfast, not at bedtime.",
          },
        ],
      },
      {
        heading: "Reduce the fuel",
        blocks: [
          {
            type: "p",
            text: "Nightmares and night terrors both get worse with overtiredness, irregular bedtimes, and stimulation late in the evening. Night terrors in particular cluster in overtired children, so the most effective intervention is often an earlier, more consistent bedtime rather than anything to do with dreams.",
          },
          {
            type: "p",
            text: "The last hour matters too: exciting screens, rough play, and frightening story content all give a preschool imagination material to work with. A quiet, gentle final story is the cheapest prevention available.",
          },
        ],
      },
      {
        heading: "Don't let it rewrite bedtime",
        blocks: [
          {
            type: "p",
            text: "The trap after a bad night is a bedtime that permanently expands — extra checks, staying until they're asleep, a new lights-on rule. Comfort generously in the moment, then return to the usual routine the next night. If you do change something, make it small, deliberate, and temporary, and say when it ends.",
          },
        ],
      },
      {
        heading: "When to ask for help",
        blocks: [
          {
            type: "p",
            text: "Talk to your pediatrician if night terrors are frequent and long-running, if nightmares happen most nights over an extended period, if your child is exhausted during the day, or if there's loud snoring or breathing that stops and starts — disrupted breathing is a common and treatable driver of bad nights.",
          },
        ],
      },
    ],
    related: [
      "scared-of-the-dark",
      "toddler-wont-stay-in-bed",
      "bedtime-stories-for-anxious-kids",
    ],
    faqs: [
      {
        q: "What is the difference between a nightmare and a night terror?",
        a: "A nightmare wakes your child, who recognizes you, wants comfort, and often remembers it in the morning — usually late in the night. A night terror happens earlier, looks dramatic, doesn't respond to comforting, and isn't remembered because your child was never awake.",
      },
      {
        q: "Should you wake a child having a night terror?",
        a: "No. Waking them tends to prolong the episode and leave them confused. Stay nearby, make the space safe, and wait — most pass within a few minutes and the child settles back to sleep.",
      },
      {
        q: "How do you stop nightmares in toddlers?",
        a: "You can't prevent them entirely, but overtiredness, irregular bedtimes, and stimulating or frightening content in the last hour all make them more likely. A consistent, earlier bedtime and a calm final story reduce the frequency.",
      },
    ],
  },

  {
    slug: "bedtime-stories-for-anxious-kids",
    title: "Bedtime Stories for Anxious Children",
    description:
      "What to read to a child whose worries show up at lights out — which stories help, which make it worse, and how to use a story as part of winding down rather than a distraction from it.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 6,
    intro: [
      "Bedtime is when worry arrives, for a simple structural reason: it's the first moment all day with nothing to look at and nobody to talk to. A child who seemed completely fine at dinner can be tearful about school, a friend, or something they overheard within four minutes of lights out.",
      "Stories help with this more than almost anything else in the routine, but only certain stories, used in a particular way.",
    ],
    sections: [
      {
        heading: "Why a story settles an anxious child",
        blocks: [
          {
            type: "p",
            text: "Two things are happening. The first is simple occupation: a mind following a narrative isn't rehearsing tomorrow. The second is co-regulation — your slow voice, steady breathing, and physical presence do more to bring a nervous system down than any words you could choose.",
          },
          {
            type: "p",
            text: "That's why how you read matters as much as what. Slower than feels natural, quieter than feels natural, and without the dramatic voices.",
          },
        ],
      },
      {
        heading: "Stories that name the feeling",
        blocks: [
          {
            type: "p",
            text: "Books where a character is nervous and gets through it give an anxious child two useful things: the vocabulary for what's happening to them, and evidence that it's survivable and ordinary. A story about a small animal who doesn't want to go somewhere new does more work than a conversation about being brave, because it isn't about them.",
          },
          {
            type: "p",
            text: "The important part is the resolution. The character should manage — not by the fear being revealed as silly, but by doing the thing anyway with support. \"There was nothing to worry about\" is a worse ending than \"it was hard and she did it.\"",
          },
        ],
      },
      {
        heading: "What to avoid at lights out",
        blocks: [
          {
            type: "ul",
            items: [
              "Jeopardy, chases, and villains — even resolved ones leave images behind.",
              "Anything about separation, loss, or a missing parent, unless your child is currently working through exactly that and it's daytime.",
              "Books that ask lots of questions or invite discussion. Interactive is the opposite of drowsy.",
              "Cliffhanger chapters. An unfinished story is something to lie awake wondering about.",
            ],
          },
        ],
      },
      {
        heading: "Give the worries a scheduled slot",
        blocks: [
          {
            type: "p",
            text: "Many families find it works better to have a designated worry time earlier in the evening — five minutes at dinner or in the bath where anything can be raised — than to handle it at lights out. That way you're not choosing between dismissing a real concern and holding a twenty-minute conversation at nine at night.",
          },
          {
            type: "p",
            text: "At bedtime itself, keep it short and forward-facing: \"That's on the list for tomorrow morning. Right now it's story time.\" Then read.",
          },
        ],
      },
      {
        heading: "Same story, same order, same everything",
        blocks: [
          {
            type: "p",
            text: "Anxious children get a lot out of predictability, and a bedtime routine is the most controllable predictable thing in their day. Same sequence, same number of books, same goodnight words. If your child asks for the same story every night, that's not a rut — that's them using a tool that works.",
          },
        ],
      },
      {
        heading: "Where MoonPage fits",
        blocks: [
          {
            type: "p",
            text: "MoonPage's stories are built on small feelings handled gently — big emotions, courage, patience, friendship — with calm arcs and quiet endings. Professional narration helps on nights when your own voice is too tight to be steady, and recording your voice means the same familiar reading is there when you're not.",
          },
          {
            type: "p",
            text: "One line worth saying plainly: persistent, escalating anxiety that affects your child's days as well as their nights is worth a conversation with your pediatrician. A good bedtime story is a comfort, not a treatment.",
          },
        ],
      },
    ],
    related: [
      "scared-of-the-dark",
      "nightmares-and-bad-dreams",
      "stories-about-big-feelings-at-bedtime",
    ],
    faqs: [
      {
        q: "Why does my child get anxious at bedtime?",
        a: "Lights out is usually the first quiet, undistracted moment of the day, so worries surface then rather than being caused by bedtime itself. A predictable routine and a calm story give the mind something else to follow.",
      },
      {
        q: "What stories help an anxious child sleep?",
        a: "Stories where a character feels nervous and manages anyway, with support and a gentle resolution. Avoid jeopardy, separation themes, question-heavy interactive books, and unfinished cliffhanger chapters.",
      },
      {
        q: "Should I talk about worries at bedtime?",
        a: "Better to schedule a short worry time earlier in the evening and keep lights out brief and forward-facing. Long reassurance conversations at bedtime tend to extend the routine and reinforce the worry.",
      },
    ],
  },

  {
    slug: "what-time-should-a-toddler-go-to-bed",
    title: "What Time Should a Toddler Go to Bed?",
    description:
      "Typical bedtimes and sleep needs by age, why an earlier bedtime often fixes a child who won't settle, and how to move bedtime without a week of chaos.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 6,
    intro: [
      "Bedtime is one of the few sleep variables you fully control, which makes it the most useful lever in the house. It's also the one most often set by the family's schedule rather than the child's, and a bedtime that's forty minutes late shows up as behavior rather than as yawning.",
      "Here are the usual ranges, and how to change yours if it isn't working.",
    ],
    sections: [
      {
        heading: "Roughly how much sleep, by age",
        blocks: [
          {
            type: "ul",
            items: [
              "1–2 years: about 11–14 hours in 24, including naps.",
              "3–5 years: about 10–13 hours in 24, including any nap.",
              "6+ years: about 9–12 hours, generally all at night.",
            ],
          },
          {
            type: "p",
            text: "Work backwards from when your child has to wake up. If a four-year-old needs to be up at 6:45 and needs around eleven hours, asleep by 7:45 means lights out around 7:15 and the routine starting at 6:45. Written down like that, most \"why won't they settle\" problems become arithmetic problems.",
          },
        ],
      },
      {
        heading: "Overtired doesn't look tired",
        blocks: [
          {
            type: "p",
            text: "The counterintuitive part: a child who has gone past their window usually gets wired rather than sleepy — a second wind, more running, more giggling, more resistance, then a harder crash and often an earlier waking. Parents reasonably read this as \"not tired yet\" and push bedtime later, which makes tomorrow worse.",
          },
          {
            type: "p",
            text: "If bedtime is a fight and mornings are early, the experiment worth running is an earlier bedtime, not a later one.",
          },
        ],
      },
      {
        heading: "Watch for the actual window",
        blocks: [
          {
            type: "p",
            text: "Most toddlers give a fairly reliable signal fifteen to thirty minutes before they're ready: a drop in pace, thumb or blanket, staring, eye rubbing, sudden clinginess, or getting upset about something small. That's the moment to be at the story, not the moment to start running a bath.",
          },
          {
            type: "p",
            text: "Keep an eye on it for a week and you'll usually find the natural bedtime is earlier and more consistent than you assumed.",
          },
        ],
      },
      {
        heading: "How to move bedtime earlier",
        blocks: [
          {
            type: "ol",
            items: [
              "Shift in fifteen-minute steps every two or three nights, not in one jump.",
              "Move the whole routine, not just lights out — dinner, bath, and stories all slide with it.",
              "Get bright light in the morning and dim the house in the evening; light does more of the work than willpower.",
              "Hold the wake-up time steady while you do it, even at weekends, or the shift keeps undoing itself.",
            ],
          },
        ],
      },
      {
        heading: "When a late bedtime is the right call",
        blocks: [
          {
            type: "p",
            text: "Plenty of families have a working parent who gets home at seven, and a bedtime that protects that half hour together is a legitimate trade — as long as total sleep still lands in range, which usually means a slightly later morning or a nap. The failure mode isn't a late bedtime; it's a late bedtime with an early alarm.",
          },
        ],
      },
      {
        heading: "The routine matters more than the exact minute",
        blocks: [
          {
            type: "p",
            text: "A steady, unremarkable routine at 8:00 beats a perfect 7:15 that happens twice a week. Consistency is what the body clock reads, and the story at the end of it is the signal your child actually recognizes.",
          },
        ],
      },
    ],
    related: [
      "bedtime-routine-for-toddlers",
      "early-morning-waking",
      "dropping-the-nap",
    ],
    faqs: [
      {
        q: "What time should a 2-year-old go to bed?",
        a: "Most toddlers do well asleep somewhere between 7 and 8pm, but the useful method is to work backwards: they need roughly 11–14 hours in 24 including naps, so subtract from the time they must wake up.",
      },
      {
        q: "Is my toddler fighting bedtime because they aren't tired?",
        a: "Usually the opposite. Overtired toddlers get a second wind — faster, sillier, more resistant — which reads as not tired. If bedtime is a battle and mornings are early, try moving bedtime earlier.",
      },
      {
        q: "How do I move bedtime earlier?",
        a: "Shift in fifteen-minute steps every two or three nights, move the entire routine rather than just lights out, keep the wake-up time fixed, and use bright morning light with a dim evening house.",
      },
    ],
  },

  {
    slug: "early-morning-waking",
    title: "The 5am Wake-Up: Why It Happens and What Helps",
    description:
      "Early rising is the hardest toddler sleep problem to fix. Here's what actually causes it — light, timing, overtiredness, and habit — and what to change first.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 6,
    intro: [
      "Early waking is the sleep problem parents complain about most and solve last, because the obvious fix — a later bedtime — is usually the wrong one, and everything that does work takes a week or two to show up.",
      "Anything before 6am is generally treated as a night waking rather than morning. Here's the order worth working through.",
    ],
    sections: [
      {
        heading: "Start with light",
        blocks: [
          {
            type: "p",
            text: "It's the most common cause and the easiest to fix. In summer, a 4:45 sunrise through thin curtains is more than enough to end sleep for a child in a light sleep phase. Proper blackout — right to the edges, including the gap at the top of the blind and any bright standby LEDs — solves a meaningful share of early waking on its own.",
          },
          {
            type: "p",
            text: "Sound is the same story: bin collection, birds, a boiler firing, a sibling's alarm. A steady white noise machine can cover the ones you can't remove.",
          },
        ],
      },
      {
        heading: "Then check overtiredness",
        blocks: [
          {
            type: "p",
            text: "Counterintuitively, too little sleep causes early waking. An overtired child sleeps more lightly in the early hours and surfaces fully at the first disturbance. Pushing bedtime later almost always makes this worse, not better.",
          },
          {
            type: "p",
            text: "If you try one thing, try bedtime fifteen to thirty minutes earlier for a week straight. It feels backwards and it works often enough to be the first experiment.",
          },
        ],
      },
      {
        heading: "Then look at the daytime schedule",
        blocks: [
          {
            type: "ul",
            items: [
              "A nap that's too long or too late can shift the whole night earlier.",
              "A nap dropped too soon leaves a child overtired by 4pm, which lands as a 5am start.",
              "The gap between the end of the nap and bedtime is the number to check — too short and they aren't tired, too long and they're wrecked.",
            ],
          },
        ],
      },
      {
        heading: "Don't reward the early start",
        blocks: [
          {
            type: "p",
            text: "Once the cause is handled, some early waking is pure habit, and habits respond to what happens next. If 5:20 means lights on, breakfast, and a parent's full attention, it becomes a good deal. Keeping the room dim and dull until an agreed time — even by twenty minutes at first — takes the shine off it.",
          },
          {
            type: "p",
            text: "A toddler alarm clock that changes color at wake-up time works well from around two and a half, provided you set it to a time they can actually reach and move it later in small steps.",
          },
        ],
      },
      {
        heading: "Give them something to do in bed",
        blocks: [
          {
            type: "p",
            text: "Not every early waking has to become a family event. A couple of books in the cot or bed, or a story they can play themselves without a screen, buys some children another half hour and buys you a shower. This works better the older they are, and better still if it's set up the night before as part of the routine.",
          },
        ],
      },
      {
        heading: "Expect it to take a while",
        blocks: [
          {
            type: "p",
            text: "Early waking is slow to shift — two weeks of consistency before you judge anything is a fair rule, and changing three variables at once means you won't know which one worked. Change one thing, hold it, then reassess.",
          },
          {
            type: "p",
            text: "And as always: heavy snoring, gasping, or long pauses in breathing are worth a pediatrician visit rather than a schedule tweak.",
          },
        ],
      },
    ],
    related: [
      "what-time-should-a-toddler-go-to-bed",
      "dropping-the-nap",
      "cozy-bedroom-for-better-sleep",
    ],
    faqs: [
      {
        q: "Why does my toddler wake up at 5am?",
        a: "The usual causes, in order of how often they're the answer: light coming into the room, overtiredness from a bedtime that's too late, a nap schedule that's off, and habit reinforced by the day starting immediately.",
      },
      {
        q: "Will a later bedtime stop early waking?",
        a: "Rarely — it usually makes it worse. Overtired children sleep more lightly in the early morning hours, so an earlier bedtime is the more reliable experiment.",
      },
      {
        q: "How long does it take to fix early morning waking?",
        a: "Give any single change about two weeks of consistency before judging it, and change one variable at a time so you can tell what worked.",
      },
    ],
  },

  {
    slug: "dropping-the-nap",
    title: "Dropping the Nap Without Wrecking Bedtime",
    description:
      "When toddlers stop napping, how to tell a real nap drop from a phase, and how to survive the messy months in between.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "The nap usually goes somewhere between two and a half and four, and it rarely goes cleanly. You get a fortnight of no nap, then a day where they sleep two hours and are up until nine, then a week of falling asleep in the car at 4:30 and being impossible by dinner.",
      "The transition is easier if you stop treating it as a switch and treat it as a slow negotiation with a moving schedule.",
    ],
    sections: [
      {
        heading: "How to tell it's really going",
        blocks: [
          {
            type: "ul",
            items: [
              "Nap refusal happens most days for several weeks, not just during a holiday or an illness.",
              "When they do nap, bedtime slides dramatically later.",
              "They can get through the late afternoon without falling apart on the days they miss it.",
              "The pattern holds through a normal, boring week rather than an unusual one.",
            ],
          },
          {
            type: "p",
            text: "A few refused naps during a growth spurt, a house move, or a new sibling usually isn't the drop. Wait it out for a couple of weeks before restructuring the day.",
          },
        ],
      },
      {
        heading: "Shorten before you drop",
        blocks: [
          {
            type: "p",
            text: "A gentler path than stopping outright: cap the nap at 45 minutes and pull it earlier, ideally finished by 2pm. That often keeps the late-afternoon meltdown away without pushing bedtime past eight.",
          },
          {
            type: "p",
            text: "Many children live in this middle state for months, napping some days and not others. That's normal and doesn't need resolving.",
          },
        ],
      },
      {
        heading: "Replace the nap with quiet time",
        blocks: [
          {
            type: "p",
            text: "Don't give the slot back to the day. An hour of quiet time — in their room, on the bed, with books and something calm — preserves the rest even if no sleep happens, and it protects your own afternoon, which matters more than anyone admits.",
          },
          {
            type: "p",
            text: "Set it up like a mini bedtime: curtains part-drawn, same start time, a clear end signal. Books, audio stories, and quiet toys are in; screens make it stimulating rather than restful.",
          },
        ],
      },
      {
        heading: "Move bedtime earlier — probably a lot earlier",
        blocks: [
          {
            type: "p",
            text: "Losing a ninety-minute nap doesn't mean a child needs ninety fewer minutes of sleep. Night sleep has to absorb most of it, and a temporary bedtime of 6:30 or 7:00 during the transition is completely reasonable.",
          },
          {
            type: "p",
            text: "Do it before they're wrecked, not after. Starting the routine at the first sign of the late-afternoon slide is far easier than catching up once the second wind arrives.",
          },
        ],
      },
      {
        heading: "Expect the messy middle",
        blocks: [
          {
            type: "p",
            text: "During the transition, evenings get shorter, dinner gets earlier, and some days go badly. It settles within a couple of months. The routine is what carries you through — the same order, the same number of stories, the same ending, even when it's happening ninety minutes earlier than last month.",
          },
        ],
      },
    ],
    related: [
      "what-time-should-a-toddler-go-to-bed",
      "early-morning-waking",
      "bedtime-routine-for-toddlers",
    ],
    faqs: [
      {
        q: "When do toddlers stop napping?",
        a: "Most drop the nap between two and a half and four, usually gradually — napping some days and not others for months rather than stopping all at once.",
      },
      {
        q: "Should bedtime be earlier when a child drops their nap?",
        a: "Yes, often significantly. Night sleep has to absorb most of the lost nap, so a temporary bedtime of 6:30 to 7:00 during the transition is reasonable.",
      },
      {
        q: "What should replace nap time?",
        a: "A quiet hour in their room with books, audio stories, or calm toys — set up like a small version of bedtime, with a fixed start and a clear end. Screens make the slot stimulating rather than restful.",
      },
    ],
  },

  {
    slug: "crib-to-bed-transition",
    title: "Moving from Cot to Bed (Without Losing Bedtime)",
    description:
      "When to make the move, how to do it in a way that doesn't restart every sleep problem you'd solved, and what to do when a newly free toddler keeps walking out.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "The cot is a wonderful piece of equipment because it's a boundary that requires no enforcement. The night you take it away, bedtime becomes something your child can opt out of by simply standing up — which is why this transition undoes so many routines that were working fine.",
      "It goes better when it's late, unhurried, and boring.",
    ],
    sections: [
      {
        heading: "Later is usually better",
        blocks: [
          {
            type: "p",
            text: "There's rarely a prize for moving early. Many children do well staying in a cot until three or so, and the transition is much easier once they can understand and remember a rule about staying in bed. The genuine reasons to move are safety — repeated climbing out — or a real need for the cot.",
          },
          {
            type: "p",
            text: "If a new baby is coming, either move them a couple of months before the birth or wait several months after. Doing it the same week means the bed change and the sibling arrive as one event.",
          },
        ],
      },
      {
        heading: "Change one thing",
        blocks: [
          {
            type: "p",
            text: "Keep everything else identical: same room, same position if you can, same bedding, same comfort object, same routine and story count. A new bed plus a new room plus potty training plus starting preschool is four changes, and the sleep is what pays for them.",
          },
        ],
      },
      {
        heading: "Set the rule before the first night",
        blocks: [
          {
            type: "ol",
            items: [
              "Say the rule in daylight, simply: \"When you're in your bed, you stay in your bed until morning. If you need me, call and I'll come.\"",
              "Practice it once during the day, cheerfully — getting in, lying down, you leaving, you coming back.",
              "Run the normal bedtime routine that evening, nothing special. Excitement about the bed is not your friend at 7pm.",
              "Make the room safe on the assumption they will get up: furniture anchored, stair gate, nothing reachable that shouldn't be.",
            ],
          },
        ],
      },
      {
        heading: "When they keep getting up",
        blocks: [
          {
            type: "p",
            text: "Expect it, and make it dull. Walk them back with minimal talk, minimal eye contact, and the same short phrase every time — \"It's sleep time, back to bed.\" The first few nights can involve a lot of repetitions. The tedium is the method: any conversation, negotiation, or irritation is more interesting than lying still in the dark.",
          },
          {
            type: "p",
            text: "Head off the usual reasons in advance: water on the nightstand, last bathroom trip built into the routine, hugs at the end of the goodnight ritual rather than available on request.",
          },
        ],
      },
      {
        heading: "Keep the story exactly where it was",
        blocks: [
          {
            type: "p",
            text: "The story is the part of the routine your child recognizes most, so it should survive the furniture change untouched — same number, same place in the order, same ending. If anything, this is a good fortnight to be generous with the reading and strict about everything after it.",
          },
        ],
      },
    ],
    related: [
      "toddler-wont-stay-in-bed",
      "bedtime-routine-for-toddlers",
      "new-baby-bedtime",
    ],
    faqs: [
      {
        q: "When should a toddler move from a cot to a bed?",
        a: "There's no need to rush — many children stay in a cot until around three. The real triggers are safety, particularly repeated climbing out, or needing the cot for a new baby.",
      },
      {
        q: "How do I stop my toddler getting out of their new bed?",
        a: "State the rule during the day, then walk them back every single time with almost no talking and the same short phrase. Keeping it boring is the method — conversation and negotiation are more interesting than lying in the dark.",
      },
      {
        q: "Should I move my toddler to a bed before a new baby arrives?",
        a: "Either a couple of months before the birth or several months after. Doing it in the same weeks means the bed change and the new sibling land as a single upheaval.",
      },
    ],
  },

  {
    slug: "new-baby-bedtime",
    title: "Bedtime with a New Baby (and a Jealous Toddler)",
    description:
      "How to protect your older child's bedtime routine when a newborn arrives, what to let go of, and why the story is the last thing you should cut.",
    category: "Routines",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "A new baby lands squarely on the hour of the day you have least capacity for. Cluster feeding, an older child who has noticed that the rules changed, and two people needing settling at once — bedtime is where the whole adjustment shows up.",
      "The goal for the first couple of months isn't a good bedtime. It's a recognizable one.",
    ],
    sections: [
      {
        heading: "Decide the minimum version now",
        blocks: [
          {
            type: "p",
            text: "Before the baby arrives, or this week if they already have, work out the smallest routine you can run one-handed on a bad night: teeth, into bed, one story, the same goodnight line. That's the version you protect. Everything else — bath, the second book, the long chat — is optional and can come and go without it feeling like the routine collapsed.",
          },
          {
            type: "p",
            text: "Children measure consistency by shape, not by length. A five-minute routine in the right order reads as normal; a forty-minute one in a different order doesn't.",
          },
        ],
      },
      {
        heading: "Give the older child something the baby doesn't get",
        blocks: [
          {
            type: "p",
            text: "Most of the difficult behavior around a new sibling is about access to you, and bedtime is the most concentrated access in the day. Ten minutes of undivided attention — door closed, phone down, baby with someone else if that's possible — is worth more than an hour of shared presence with a feed happening.",
          },
          {
            type: "p",
            text: "Say it out loud, too: \"This is our time. The baby doesn't get stories yet.\" Being older is much easier to bear when it comes with privileges.",
          },
        ],
      },
      {
        heading: "When you're settling both at once",
        blocks: [
          {
            type: "ul",
            items: [
              "Read to your toddler with the baby feeding — the baby doesn't mind, and the story goes on.",
              "Recorded or narrated stories cover the nights when you're physically stuck in another room.",
              "Stagger bedtimes if you can: older child first while the baby is with someone, or the baby down early and the toddler last.",
              "Tag-team by night rather than by task, if there are two of you — one takes bedtime completely, the other takes the baby, and you swap on alternate nights.",
            ],
          },
        ],
      },
      {
        heading: "Expect regression, and don't renegotiate",
        blocks: [
          {
            type: "p",
            text: "Night waking, wanting to be carried, asking for a bottle, wanting to sleep in your bed — most older siblings go backwards for a while, and it's a request for reassurance rather than a change of preference. Be warm about it and hold the rules steady. Giving a lot of extra comfort inside the existing routine works better than adding new arrangements you'll have to undo in three months.",
          },
        ],
      },
      {
        heading: "Cut the story last",
        blocks: [
          {
            type: "p",
            text: "When you're triaging, the story is the piece to keep. It's the part your older child associates with having you to themselves, it's the part that actually winds them down, and it's the cheapest to run — you can do it sitting down, one-handed, with a baby on you and your voice at half volume. MoonPage exists partly for exactly these months: a short illustrated story ready on your phone, narrated professionally when your voice is gone, or in your own recorded voice when you're stuck feeding in the next room.",
          },
        ],
      },
    ],
    related: [
      "bedtime-with-two-kids",
      "crib-to-bed-transition",
      "bedtime-routine-for-toddlers",
    ],
    faqs: [
      {
        q: "How do I keep my toddler's bedtime routine after a new baby?",
        a: "Define a minimum version you can run one-handed on a bad night — teeth, bed, one story, the same goodnight words — and protect that shape. Children read consistency by order, not by length.",
      },
      {
        q: "How do you put a toddler and a newborn to bed at the same time?",
        a: "Read to the toddler while the baby feeds, stagger the two bedtimes where possible, use narrated or recorded stories when you're stuck in another room, and if there are two adults, alternate whole bedtimes rather than splitting tasks.",
      },
      {
        q: "Is it normal for an older sibling to regress at bedtime?",
        a: "Yes — night waking, wanting to be carried, and asking for things they'd outgrown are common. Offer extra comfort inside the existing routine rather than adding new arrangements you'll need to undo later.",
      },
    ],
  },

  {
    slug: "bedtime-with-two-kids",
    title: "Bedtime with Two Kids of Different Ages",
    description:
      "Together or separately, same story or two, staggered bedtimes or one — how to run bedtime for siblings without it taking ninety minutes.",
    category: "Routines",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "Two children two years apart want different books, need different amounts of sleep, and are extremely interested in what the other one is getting. Run badly, bedtime becomes ninety minutes of shuttling between rooms. Run well, it's twenty-five minutes and one of the better parts of the day.",
      "There's no single right structure — but there are three that work, and picking one deliberately beats improvising nightly.",
    ],
    sections: [
      {
        heading: "Option one: everything together",
        blocks: [
          {
            type: "p",
            text: "Both children, one routine, one set of stories, same lights out. It's by far the most efficient and it works best when the age gap is small or when one parent is solo.",
          },
          {
            type: "p",
            text: "The cost is that the reading is pitched between them — a bit long for the younger, a bit simple for the older. Compensate by reading the older one their own chapter earlier in the evening, or letting them stay up fifteen minutes with a book of their own after lights out.",
          },
        ],
      },
      {
        heading: "Option two: staggered",
        blocks: [
          {
            type: "p",
            text: "Younger child down first with their own routine, then the older one gets a later bedtime and their own stories. This gives each child undivided time and matches their actual sleep needs, which is usually where the older one's early waking comes from.",
          },
          {
            type: "p",
            text: "It takes longer in total and needs the older one to be occupied during round one. Being older is the sell: the later bedtime is a privilege, not an inconvenience.",
          },
        ],
      },
      {
        heading: "Option three: shared start, separate finish",
        blocks: [
          {
            type: "p",
            text: "Most families end up here. Bath, teeth, and pajamas happen together, then one story everyone hears in the same room, then the younger goes down and the older gets their own second story. It keeps the efficient parts shared and the personal part personal.",
          },
        ],
      },
      {
        heading: "Handling the fairness accounting",
        blocks: [
          {
            type: "ul",
            items: [
              "Alternate who picks the shared story by night, and say whose turn it is out loud.",
              "Fair means appropriate, not identical — it's fine to explain that the older child gets a later bedtime and the younger gets carried upstairs.",
              "Give each child one thing that's exclusively theirs in the routine: their own goodnight phrase, their own song, their own reading light.",
              "Don't use bedtime privileges as a behavior lever during the day. The routine is worth more as a fixed point than as a bargaining chip.",
            ],
          },
        ],
      },
      {
        heading: "Sharing a room",
        blocks: [
          {
            type: "p",
            text: "Room-sharing siblings need the wind-down to be genuinely finished before lights out, because a dark room with two children in it is a party waiting to happen. Put the shared story last, keep talking to a minimum after it, and if they're winding each other up, split them for a few nights rather than escalating night by night.",
          },
          {
            type: "p",
            text: "White noise helps in both directions here — it covers the younger one's stirring and gives the older one less to react to.",
          },
        ],
      },
    ],
    related: [
      "new-baby-bedtime",
      "how-long-to-read-at-bedtime",
      "white-noise-and-bedtime-sounds",
    ],
    faqs: [
      {
        q: "Should siblings have the same bedtime?",
        a: "Not necessarily. A shared bedtime is the most efficient, but staggering — younger down first, older later with their own story — matches their different sleep needs and gives each child undivided attention.",
      },
      {
        q: "How do you read to two children of different ages?",
        a: "A common structure is a shared bath and teeth, one story both children hear, then the younger goes down and the older gets a second story pitched to their level.",
      },
      {
        q: "How do I stop siblings keeping each other awake in a shared room?",
        a: "Finish the wind-down before lights out rather than after, put the shared story last, keep post-story talking minimal, and separate them for a few nights if they're escalating each other.",
      },
    ],
  },

  {
    slug: "daylight-saving-and-toddler-sleep",
    title: "Daylight Saving Time and Toddler Sleep",
    description:
      "How to handle the clocks changing with a small child — the gradual method, the do-nothing method, and which one suits your family.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 4,
    intro: [
      "Adults lose an hour and grumble. Toddlers lose an hour and spend a fortnight waking at five, or refusing to sleep until nine, depending on which direction the clocks went.",
      "There are two reasonable strategies and one thing that definitely doesn't work, which is deciding to deal with it on the Sunday morning.",
    ],
    sections: [
      {
        heading: "The gradual shift",
        blocks: [
          {
            type: "p",
            text: "Starting four to six days beforehand, move the whole day — wake-up, meals, naps, and bedtime — by ten to fifteen minutes in the direction the clocks are going. By the time the change lands, your child is most of the way there and Sunday is unremarkable.",
          },
          {
            type: "p",
            text: "This is the better option for children who are sensitive to schedule changes, which mostly means younger toddlers and anyone whose sleep is currently fragile.",
          },
        ],
      },
      {
        heading: "The do-nothing approach",
        blocks: [
          {
            type: "p",
            text: "Switch the clocks, run the normal routine at the new times, and let the body clock catch up over three to five days. For a lot of children, particularly over three, this is genuinely fine and saves a week of managing.",
          },
          {
            type: "p",
            text: "If you take this route, be strict about the wake-up time for those few days — that's the anchor the rest of the day hangs from.",
          },
        ],
      },
      {
        heading: "Which direction you're facing matters",
        blocks: [
          {
            type: "ul",
            items: [
              "Clocks forward (losing an hour): bedtime feels early and mornings are dark. Get bright light in the morning, and expect a few nights of not being ready to sleep. Usually the easier one.",
              "Clocks back (gaining an hour): you get the 5am wake-up. Blackout curtains matter enormously here, and it's worth pushing bedtime later in small steps rather than accepting a permanent early start.",
            ],
          },
        ],
      },
      {
        heading: "Use light deliberately",
        blocks: [
          {
            type: "p",
            text: "Light does more to move a body clock than schedule discipline does. Bright morning light — outside if possible, curtains wide open if not — pulls the clock earlier. A dim house in the last hour before bed pushes it later. Point both at whichever direction you're trying to go.",
          },
        ],
      },
      {
        heading: "Hold the routine steady",
        blocks: [
          {
            type: "p",
            text: "Whatever the clock says, the sequence shouldn't change. The order of the routine and the story at the end of it are the cues your child actually reads; keeping them identical during a week when the light is wrong is what stops the change turning into a month-long problem.",
          },
        ],
      },
    ],
    related: [
      "what-time-should-a-toddler-go-to-bed",
      "early-morning-waking",
      "bedtime-routine-for-toddlers",
    ],
    faqs: [
      {
        q: "How do I prepare a toddler for daylight saving time?",
        a: "Either shift the whole day — wake-up, meals, naps, bedtime — by ten to fifteen minutes a day for four to six days beforehand, or change the clocks and let them adjust over three to five days while holding the wake-up time firm.",
      },
      {
        q: "Which clock change is harder with young children?",
        a: "Gaining an hour is usually harder, because it produces very early waking. Blackout curtains and pushing bedtime later in small steps are the main tools.",
      },
      {
        q: "How long does it take a toddler to adjust to the time change?",
        a: "Typically three to five days if you keep the routine and wake-up time consistent, and less if you shifted the schedule gradually beforehand.",
      },
    ],
  },

  {
    slug: "reading-aloud-with-expression",
    title: "How to Read Aloud Well (Voices Optional)",
    description:
      "Pace, pauses, volume, and whether you need to do the voices — practical read-aloud technique for parents who feel self-conscious about it.",
    category: "Reading",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "Plenty of parents quietly think they're bad at reading aloud. They're comparing themselves to a professional narrator, which is like comparing home cooking to a restaurant — the comparison is real and completely beside the point.",
      "Reading aloud well is a handful of mechanical habits, none of which require acting ability. And at bedtime, the restrained version is the better one anyway.",
    ],
    sections: [
      {
        heading: "Slow down. Then slow down again",
        blocks: [
          {
            type: "p",
            text: "The single biggest improvement available to most people is pace. Adults read aloud at roughly the speed we read silently, which is much too fast for a three-year-old who is decoding language, following a plot, and looking at a picture at the same time.",
          },
          {
            type: "p",
            text: "Read a page at what feels like an absurdly slow speed. Record yourself once if you can bear it — it will sound normal on playback, which tells you everything about how far off the internal sense of pace is.",
          },
        ],
      },
      {
        heading: "Pauses do the work that volume can't",
        blocks: [
          {
            type: "p",
            text: "A beat before turning the page. A beat after something surprising. A longer one on the last line. Silence is what makes a story feel like an event, and it's the tool that costs you nothing and requires no performance.",
          },
          {
            type: "p",
            text: "It's also how you hold attention without getting louder — useful, because loud is exactly what you don't want at bedtime.",
          },
        ],
      },
      {
        heading: "You don't need voices, but consistency helps",
        blocks: [
          {
            type: "ul",
            items: [
              "One or two distinguishable voices is plenty — a small high one and a slow low one covers most picture books.",
              "Keep each character's voice the same across nights. Children notice, and being corrected is a good sign they're tracking it.",
              "At bedtime, do the voices quieter rather than bigger. A whispered wolf is more interesting than a shouted one, and doesn't wake anyone up.",
              "If voices make you self-conscious, skip them entirely. A steady, warm reading voice is better than a reluctant performance.",
            ],
          },
        ],
      },
      {
        heading: "Let them see the pictures",
        blocks: [
          {
            type: "p",
            text: "A surprising amount of read-aloud quality is just angle. Hold the book so your child can actually see the spread, give them a couple of seconds on each page before you start reading it, and don't turn until they've finished looking. In a picture book roughly half the story is in the illustration, and rushing past it removes half the content.",
          },
        ],
      },
      {
        heading: "Bedtime reading is its own mode",
        blocks: [
          {
            type: "p",
            text: "Daytime reading can be big, funny, and interactive. Bedtime reading should get quieter, slower, and flatter as it goes — by the last page you want to be near a whisper, with the pace almost dragging. Drop your volume gradually across the book rather than all at once and you'll often see the effect on your child before you reach the end.",
          },
          {
            type: "p",
            text: "This is the pattern MoonPage's narration is recorded to follow, for the nights you've been talking since six in the morning and there's nothing left in your voice.",
          },
        ],
      },
    ],
    related: [
      "read-aloud-to-toddlers",
      "what-makes-a-good-bedtime-story",
      "toddler-who-wont-sit-still-for-books",
    ],
    faqs: [
      {
        q: "Do I need to do character voices when reading to my child?",
        a: "No. A warm, steady voice read slowly works well. If you do use voices, one high and one low is plenty — keep each character consistent between readings, and at bedtime make them quieter rather than bigger.",
      },
      {
        q: "How fast should you read a picture book aloud?",
        a: "Considerably slower than feels natural. Adults default to silent-reading speed, which is too fast for a young child following words, plot, and pictures at once. Pauses before page turns matter as much as pace.",
      },
      {
        q: "How do I make bedtime reading calming?",
        a: "Get quieter, slower, and flatter as the book goes on, so the last page is near a whisper. Save the big, funny, interactive reading for daytime.",
      },
    ],
  },

  {
    slug: "toddler-who-wont-sit-still-for-books",
    title: "When Your Toddler Won't Sit Still for a Book",
    description:
      "Page-flipping, wandering off, slamming the book shut — why it happens, why it usually isn't a problem, and how to get reading to stick anyway.",
    category: "Reading",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "You sit down with a book, and within forty seconds your toddler has turned to the last page, climbed off your lap, and started doing something else entirely. It's the point where a lot of parents conclude their child doesn't like books.",
      "Almost always, they do. What they don't like is sitting still, which is a completely different problem and a much easier one.",
    ],
    sections: [
      {
        heading: "Movement doesn't mean they aren't listening",
        blocks: [
          {
            type: "p",
            text: "A two-year-old spinning in circles near you is frequently taking in every word. Attention and stillness are separate skills, and the second one arrives years after the first. If you keep reading while they move around the room, most children drift back within a page or two.",
          },
          {
            type: "p",
            text: "Test it by stopping mid-sentence. The number of wandering toddlers who immediately object is the answer.",
          },
        ],
      },
      {
        heading: "Let them control the book",
        blocks: [
          {
            type: "ul",
            items: [
              "Let them turn the pages, including badly and out of order.",
              "If they flip to the end, read the end. Then go back if they want.",
              "Let them choose the book even when it's the same one for the fortieth time.",
              "Keep a couple of board books they're allowed to handle unsupervised — ownership drives interest more than quality does at this age.",
            ],
          },
          {
            type: "p",
            text: "Control is most of what a toddler wants and almost none of what they get during a normal day. Books are a cheap place to hand some over.",
          },
        ],
      },
      {
        heading: "Shorten and abandon freely",
        blocks: [
          {
            type: "p",
            text: "You do not have to read the words. Narrate the pictures, cut half the text, skip to the pages they like, and stop when they're finished rather than when the book is. A book that ends while your child is still enjoying it makes the next one easier; grinding through to the last page teaches them that story time is longer than they want.",
          },
        ],
      },
      {
        heading: "Pick the moment",
        blocks: [
          {
            type: "p",
            text: "Reading at the wrong time is the most common cause of what looks like disinterest. Right after a nap, after physical play, at a meal, or in the bath are all easier moments than the tail end of a long afternoon.",
          },
          {
            type: "p",
            text: "At bedtime specifically, if they're bouncing, it usually means the wind-down started too late. Move the whole routine earlier and the sitting-still problem often disappears without being addressed directly.",
          },
        ],
      },
      {
        heading: "Give restless hands something to do",
        blocks: [
          {
            type: "p",
            text: "Some children listen far better with their hands occupied — a soft toy, a blanket, a quiet fidget. Others do best being read to while lying down with the lights already low, where there's not much else on offer. Audio stories work particularly well for this kind of child, since there's no book to wrestle with and no sitting position to hold.",
          },
          {
            type: "p",
            text: "MoonPage's stories can be listened to with the screen face-down, which for a wriggler is often the version that finally holds.",
          },
        ],
      },
    ],
    related: [
      "read-aloud-to-toddlers",
      "reading-aloud-with-expression",
      "bedtime-stories-for-2-year-olds",
    ],
    faqs: [
      {
        q: "My toddler won't sit still for books — is that normal?",
        a: "Very. Attention and stillness are different skills, and the second develops much later. Many toddlers listen perfectly well while moving around the room; stopping mid-sentence usually proves it.",
      },
      {
        q: "Should I let my toddler turn the pages out of order?",
        a: "Yes. Letting them control the book — page turns, order, which book, how long — is a large part of what keeps them interested, and reading the pages they land on works fine.",
      },
      {
        q: "Do I have to finish the book?",
        a: "No. Cut text, narrate the pictures, and stop while they're still enjoying it. Grinding to the last page teaches a child that story time outlasts their interest in it.",
      },
    ],
  },

  {
    slug: "stories-about-big-feelings-at-bedtime",
    title: "Using Stories to Talk About Big Feelings",
    description:
      "Anger, jealousy, frustration, and worry are easier to discuss through a character than directly. How to use picture books for it — and when not to.",
    category: "Reading",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "Ask a four-year-old why they threw the cup and you'll get nothing useful, because they genuinely don't know. Ask them why the bear in the story threw his cup and you'll often get a remarkably clear answer.",
      "That gap is the whole reason feelings books work. The distance is what makes the conversation possible.",
    ],
    sections: [
      {
        heading: "Why the character does the work",
        blocks: [
          {
            type: "p",
            text: "A child in trouble is defending themselves. A child hearing about a rabbit who got furious is just thinking about a rabbit — and thinking is where the learning happens. They get to see the feeling from outside, watch it pass, and notice that it had a name and an ending.",
          },
          {
            type: "p",
            text: "Naming is a real part of this. \"Frustrated\" is a much more manageable thing to have than an unnamed storm, and stories are where most young children pick that vocabulary up.",
          },
        ],
      },
      {
        heading: "Don't point the story at them",
        blocks: [
          {
            type: "p",
            text: "The temptation, after a hard day, is to select the book about hitting and read it meaningfully. Children spot this instantly, and the story stops being a story and becomes a telling-off with pictures.",
          },
          {
            type: "p",
            text: "Read feelings books when nothing has happened. The one to reach for on a bad evening is a cozy favorite, not the relevant lesson.",
          },
        ],
      },
      {
        heading: "Ask about the character, not the child",
        blocks: [
          {
            type: "ul",
            items: [
              "\"How do you think he felt when that happened?\"",
              "\"What could she have done instead?\"",
              "\"Have you ever seen someone feel like that?\"",
              "And then stop. If they connect it to themselves, they'll do it on their own, and that's worth ten times more than you making the link.",
            ],
          },
        ],
      },
      {
        heading: "The timing question",
        blocks: [
          {
            type: "p",
            text: "Feelings books are daytime books more often than bedtime books. A story that opens a real conversation about jealousy at 7:50pm is a good story at a bad hour — you end up with a wide-awake child processing something significant.",
          },
          {
            type: "p",
            text: "The exception is the calm sort: stories where a small character has a big feeling, is helped, and settles. Those follow the bedtime shape and can go last, as long as the discussion stays short.",
          },
        ],
      },
      {
        heading: "Recurring characters help more than one-offs",
        blocks: [
          {
            type: "p",
            text: "A character your child already knows and likes carries far more weight than a stranger in an issue book. Once they're invested in someone, that character's difficult afternoon lands as something that happened to a friend.",
          },
          {
            type: "p",
            text: "MoonPage's library leans this way on purpose — big feelings, courage, patience, and friendship handled through small animal characters, in stories written to end quietly rather than to teach a lesson on the last page.",
          },
        ],
      },
    ],
    related: [
      "bedtime-stories-for-anxious-kids",
      "why-picture-books-matter",
      "choosing-bedtime-books",
    ],
    faqs: [
      {
        q: "How do picture books help children with emotions?",
        a: "They provide distance. A child can think clearly about why a character felt angry when they can't yet explain their own behavior, and stories are where most young children first pick up words like frustrated or jealous.",
      },
      {
        q: "Should I read a book about hitting after my child hits?",
        a: "Usually not the same day. Children recognize a targeted story as a telling-off with pictures. Read feelings books when nothing has happened, and reach for a comforting favorite on the hard evenings.",
      },
      {
        q: "Are emotions books good bedtime reading?",
        a: "Only the calm ones — where a small character has a big feeling, gets help, and settles. Books that open a real conversation are better read during the day, since processing something significant at lights out wakes a child up.",
      },
    ],
  },

  {
    slug: "sleep-regressions-by-age",
    title: "Sleep Regressions: What They Are and How Long They Last",
    description:
      "Why a child who slept beautifully suddenly doesn't, which ages it tends to happen at, and the one rule that gets you through it fastest.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "A sleep regression is what it looks like when development outruns sleep. A child who was reliable for months starts waking, resisting bedtime, or getting up at five, and nothing in their life has obviously changed.",
      "The term isn't a medical diagnosis and the ages people quote aren't a schedule. But the pattern is real, and knowing what you're looking at makes it much shorter.",
    ],
    sections: [
      {
        heading: "What's usually behind it",
        blocks: [
          {
            type: "ul",
            items: [
              "A developmental leap — walking, a language explosion, a new physical skill they now want to practice at 11pm.",
              "A nap transition, which throws the whole day's timing off for weeks.",
              "Separation awareness, strongest in the second year, where being left is suddenly a much bigger deal.",
              "Teething, illness, or a growth spurt.",
              "A change in circumstances: a new room, a new sibling, starting nursery, a holiday.",
            ],
          },
        ],
      },
      {
        heading: "The ages people talk about",
        blocks: [
          {
            type: "p",
            text: "Around four months, eight to ten months, eighteen months, and two years are the ones most often named, and two is frequently the hardest for toddlers — it collects language development, separation awareness, the arrival of imagination, and often a nap change all at once.",
          },
          {
            type: "p",
            text: "Treat these as common rather than expected. Plenty of children skip them entirely, and a regression at an unlisted age is not a sign of anything.",
          },
        ],
      },
      {
        heading: "How long it lasts",
        blocks: [
          {
            type: "p",
            text: "Most run two to six weeks. The ones that last longer usually do so because something in the routine changed to accommodate them — a new habit of feeding back to sleep, a parent staying in the room, an earlier morning start that got locked in.",
          },
        ],
      },
      {
        heading: "The one rule: comfort generously, change nothing structurally",
        blocks: [
          {
            type: "p",
            text: "This is the whole strategy. Go to them, reassure, be warm, be patient — and keep the routine, the bedtime, and the sleeping arrangements exactly as they were. Extra comfort inside the existing structure is free; new structures cost you a second, harder transition once the regression ends.",
          },
          {
            type: "p",
            text: "If you do need to change something to survive the fortnight, name it as temporary out loud, keep it small, and unwind it deliberately rather than waiting for it to fade.",
          },
        ],
      },
      {
        heading: "Check the boring explanations first",
        blocks: [
          {
            type: "p",
            text: "Before concluding it's developmental, look at the mechanical possibilities: is the room too light this month, has the nap crept later, is bedtime half an hour later than it was, is anyone ill, has a radiator started coming on at five. These account for a surprising number of apparent regressions and take an evening to rule out.",
          },
          {
            type: "p",
            text: "And the standing caveat: persistent snoring, breathing pauses, or a child who's exhausted during the day belongs with your pediatrician, not with a routine adjustment.",
          },
        ],
      },
    ],
    related: [
      "toddler-wont-stay-in-bed",
      "dropping-the-nap",
      "early-morning-waking",
    ],
    faqs: [
      {
        q: "How long does a sleep regression last?",
        a: "Typically two to six weeks. Ones that run longer are often being sustained by a new habit introduced during the regression, such as a parent staying in the room or a changed bedtime.",
      },
      {
        q: "What ages do sleep regressions happen?",
        a: "Four months, eight to ten months, eighteen months, and two years are the most commonly named — with two often the hardest, since language, separation awareness, imagination, and a nap change tend to arrive together.",
      },
      {
        q: "What should I do during a sleep regression?",
        a: "Comfort generously but change nothing structurally. Keep the routine, bedtime, and sleeping arrangements identical, so you don't have to unwind a new habit once it passes.",
      },
    ],
  },

  {
    slug: "grandparents-reading-from-far-away",
    title: "Long-Distance Bedtime Stories for Grandparents",
    description:
      "How grandparents and away-from-home parents can be part of bedtime from another city — video calls, recorded stories, and what actually works with a small child.",
    category: "Routines",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "Reading to a grandchild over a video call sounds lovely and often goes badly: the child wanders off, the book is at the wrong angle, the connection stutters, and everyone hangs up feeling slightly sad about it.",
      "It works much better with a bit of structure — and for the youngest children, a recording usually beats a live call outright.",
    ],
    sections: [
      {
        heading: "Why video calls are hard for under-fives",
        blocks: [
          {
            type: "p",
            text: "Small children find video calls demanding: they're expected to perform, respond, and stay in frame, all while looking at a face that doesn't quite behave like a face. It's a lot of work, and at bedtime they have nothing left for it.",
          },
          {
            type: "p",
            text: "Reading actually helps here, because it gives the call a job. A story means nobody has to generate conversation, and the child can listen rather than perform.",
          },
        ],
      },
      {
        heading: "Making a story call work",
        blocks: [
          {
            type: "ol",
            items: [
              "Both households get the same book. Two copies removes every camera-angle problem at once — the grandparent reads, the child follows along with their own copy.",
              "Prop the phone rather than holding it, at the child's height, and leave it there.",
              "Keep it to one short book. Ten minutes is a triumph.",
              "Have the parent stay nearby but quiet — a call that's really a three-way conversation stops being a story.",
              "End on the story, not on a drawn-out goodbye. Long farewells are where these calls usually go wrong.",
            ],
          },
        ],
      },
      {
        heading: "Recorded stories are often better",
        blocks: [
          {
            type: "p",
            text: "A recording of a grandparent reading has advantages a live call can't match: it's available at the exact right moment in the routine, it can be replayed as many times as a three-year-old demands, it doesn't depend on a connection or a time zone, and it doesn't require the child to perform.",
          },
          {
            type: "p",
            text: "Children build a real attachment to a recorded voice they hear nightly. For families where a parent travels, works nights, or lives elsewhere, this tends to be the thing that actually sticks.",
          },
        ],
      },
      {
        heading: "Making a good recording",
        blocks: [
          {
            type: "ul",
            items: [
              "Slower than feels natural, and quieter than you'd read in person.",
              "Say the child's name at the start and a goodnight at the end — that's the part they'll wait for.",
              "Record in a quiet room; phone microphones pick up far more than you'd expect.",
              "Don't re-record for small mistakes. The stumbles are what make it sound like a person they know.",
            ],
          },
        ],
      },
      {
        heading: "Where MoonPage fits",
        blocks: [
          {
            type: "p",
            text: "MoonPage lets any grown-up record their own voice reading a story, so a grandparent's version plays with the illustrations at bedtime whether or not anyone is available that evening. It works offline and needs no account, which matters when the person doing bedtime is a babysitter, a grandparent, or a tired parent in a hotel room.",
          },
        ],
      },
    ],
    related: [
      "bedtime-when-youre-away",
      "audiobooks-vs-reading-aloud",
      "reading-aloud-with-expression",
    ],
    faqs: [
      {
        q: "How can grandparents read bedtime stories over video call?",
        a: "Get two copies of the same book so the child can follow along with their own, prop the phone at the child's height, keep it to one short story, and end on the story rather than a long goodbye.",
      },
      {
        q: "Are recorded stories better than video calls for young children?",
        a: "Often, yes. A recording arrives at the right point in the routine, can be replayed endlessly, doesn't depend on connection or time zones, and doesn't ask a tired child to perform.",
      },
      {
        q: "How do you record a good bedtime story for a grandchild?",
        a: "Read slower and quieter than you would in person, use the child's name at the start and a goodnight at the end, record somewhere quiet, and leave the small stumbles in — they're what make it sound like you.",
      },
    ],
  },

  {
    slug: "building-a-home-library",
    title: "Building a Home Library on a Small Budget",
    description:
      "How many books a child actually needs, where to get them cheaply, and why where you put them matters more than how many you own.",
    category: "Reading",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "Books at home are one of the more reliable predictors of a child becoming a reader, which is a slightly uncomfortable fact if new picture books cost what they cost.",
      "The good news is that the number matters much less than the access, and almost none of a good home library has to be bought new.",
    ],
    sections: [
      {
        heading: "Access beats quantity",
        blocks: [
          {
            type: "p",
            text: "Twenty books a child can reach beats two hundred on a high shelf. Young children read what's physically in front of them, so a low basket in the living room, a shelf by the bed, and a few books in the car do more for reading volume than the size of the collection.",
          },
          {
            type: "p",
            text: "Front-facing display helps more than you'd think at this age, because they choose by cover. A picture-ledge or a basket where covers show gets used far more than a shelf of spines.",
          },
        ],
      },
      {
        heading: "Rotate instead of buying",
        blocks: [
          {
            type: "p",
            text: "Keep two thirds of the books away and swap a handful every couple of weeks. A book that's been out of sight for a month comes back as a new book, which costs nothing and works alarmingly well up to about six.",
          },
          {
            type: "p",
            text: "Leave the genuine favorites out permanently. Rotation is for the middle of the collection, not the top of it.",
          },
        ],
      },
      {
        heading: "Where to get books cheaply",
        blocks: [
          {
            type: "ul",
            items: [
              "The library, obviously — and the library's own withdrawn-stock sales, which are usually very cheap.",
              "Charity and thrift shops, where picture books turn over constantly.",
              "Secondhand and marketplace listings, especially job lots from families whose children have outgrown them.",
              "Swaps with other parents. A box exchange with one other family effectively doubles both collections.",
              "School and nursery book sales, and any local book-swap shelf.",
            ],
          },
          {
            type: "p",
            text: "Board books survive secondhand life better than paper ones, which is convenient given who's handling them.",
          },
        ],
      },
      {
        heading: "What a small collection should contain",
        blocks: [
          {
            type: "p",
            text: "Aim for a spread rather than a number: a few bedtime books with calm endings, a few loud funny ones for daytime, some rhyme, at least one nonfiction about something they're currently obsessed with, and a couple that reflect your family and your child back at them. Everything after that is preference.",
          },
        ],
      },
      {
        heading: "Digital fills the gaps, not the shelf",
        blocks: [
          {
            type: "p",
            text: "A phone doesn't replace a home library, but it covers the situations a shelf can't: travel, waiting rooms, hotel rooms, and the nights the right book is at the other house. MoonPage's stories work offline with no login, which is the version of digital that's useful at bedtime — no ads, nothing to browse, and nothing that turns story time into screen time negotiation.",
          },
        ],
      },
    ],
    related: [
      "choosing-bedtime-books",
      "why-picture-books-matter",
      "toddler-who-wont-sit-still-for-books",
    ],
    faqs: [
      {
        q: "How many books should a child have at home?",
        a: "Fewer than you'd think, arranged better. Twenty books a child can reach and choose themselves get read more than a large collection stored out of reach — access matters more than quantity.",
      },
      {
        q: "How do I build a children's library cheaply?",
        a: "Libraries and their withdrawn-stock sales, charity shops, secondhand job lots, book swaps with other families, and nursery or school sales. Board books hold up especially well secondhand.",
      },
      {
        q: "Does rotating books actually work?",
        a: "Yes, up to around age six. Keep most of the collection stored and swap a few every couple of weeks — a book unseen for a month returns as a new one. Leave true favorites permanently available.",
      },
    ],
  },

  {
    slug: "white-noise-and-bedtime-sounds",
    title: "White Noise, Lullabies, and Sleep Sounds: What Helps",
    description:
      "Whether white noise is worth it, how loud is too loud, when music helps and when it keeps a child awake, and how to stop a sound becoming a crutch.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "Sound is the cheapest sleep intervention available and the one most likely to be used slightly wrong. A machine that masks the neighbor's dog is doing something genuinely useful; a playlist that keeps rolling for three hours is doing something else.",
      "Here's what each type of sound is actually for.",
    ],
    sections: [
      {
        heading: "What white noise is for",
        blocks: [
          {
            type: "p",
            text: "Masking, not sedation. Its job is to flatten the difference between a silent room and a sudden noise — a door, a car, a sibling, a bin lorry at 5:40 — so a child in light sleep doesn't surface completely. If you live somewhere quiet and nothing wakes your child, you probably don't need it.",
          },
          {
            type: "p",
            text: "It's most useful in flats, on busy streets, in shared rooms, and during any period of early-morning waking caused by outside noise.",
          },
        ],
      },
      {
        heading: "Volume and placement",
        blocks: [
          {
            type: "ul",
            items: [
              "Roughly the level of a running shower, not louder — if you have to raise your voice over it, it's too loud.",
              "Place it across the room, never in or beside the cot.",
              "Continuous, low-pitched sound works better than anything with a pattern; rain and fans do well, ocean waves that swell and fade less so.",
              "Leave it on all night rather than on a short timer, since the point is to cover disturbances in the second half of the night.",
            ],
          },
        ],
      },
      {
        heading: "Music, lullabies, and stories",
        blocks: [
          {
            type: "p",
            text: "Music is a wind-down tool rather than a sleep-through tool. Something slow and familiar during pajamas and stories helps mark the transition; music with a tune to follow, lyrics to listen to, or dynamic changes keeps an interested child engaged.",
          },
          {
            type: "p",
            text: "Audio stories are the same: excellent for settling, best set to finish. A story that ends and leaves the room quiet lets a child drift off into silence; a queue that plays for two hours means they never get a quiet room to fall asleep in.",
          },
        ],
      },
      {
        heading: "The crutch question",
        blocks: [
          {
            type: "p",
            text: "A sleep association only causes problems if it can't be reproduced when your child wakes at 2am. White noise that runs all night reproduces itself, which is why it's rarely an issue. Being rocked, or a parent lying down next to them, doesn't — which is why those are.",
          },
          {
            type: "p",
            text: "By that test, sound is one of the safer associations to build. If you do want to remove it later, drop the volume gradually over a week or two rather than switching it off one night.",
          },
        ],
      },
      {
        heading: "Silence is also fine",
        blocks: [
          {
            type: "p",
            text: "None of this is required. Plenty of children sleep best in a quiet room and find any added sound irritating. It's worth trying, worth keeping if it helps, and worth dropping without guilt if it doesn't.",
          },
        ],
      },
    ],
    related: [
      "cozy-bedroom-for-better-sleep",
      "lullabies-for-babies-and-toddlers",
      "early-morning-waking",
    ],
    faqs: [
      {
        q: "Is white noise good for toddlers?",
        a: "It helps when there's noise to mask — a busy street, a flat, a shared room, or early-morning disturbances. In an already quiet house it often adds nothing.",
      },
      {
        q: "How loud should white noise be?",
        a: "Roughly the level of a running shower, placed across the room rather than near the cot. If you need to raise your voice over it, turn it down.",
      },
      {
        q: "Should bedtime music or stories play all night?",
        a: "Better to set them to finish. A story or track that ends lets your child fall asleep into a quiet room, whereas continuous playback means the room never actually goes quiet. White noise is the exception, since it's meant to run through the night.",
      },
    ],
  },

  {
    slug: "toddler-night-waking",
    title: "Why Toddlers Wake in the Night (and What to Do at 2am)",
    description:
      "A child who slept through for months starts waking every night. What's usually behind it, what to do in the moment, and how to avoid creating a habit you'll have to undo.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 6,
    intro: [
      "Night waking in toddlers is common, usually temporary, and almost always more about getting back to sleep than about waking up in the first place. Everyone surfaces briefly several times a night — adults included. The difference is whether you can drop off again without help.",
      "That's the useful frame for almost every 2am problem: not \"why did they wake\" but \"what do they need in order to go back down.\"",
    ],
    sections: [
      {
        heading: "Rule out the boring causes first",
        blocks: [
          {
            type: "ul",
            items: [
              "Temperature — rooms swing a lot between midnight and 4am, and toddlers kick blankets off.",
              "Hunger, if dinner was early or light.",
              "Teething, illness, a blocked nose, or an ear that hurts more lying down.",
              "A wet or full nappy, or a bladder during potty training.",
              "Noise and light: heating coming on, a street light, a sibling, an early sunrise.",
            ],
          },
          {
            type: "p",
            text: "These account for a large share of sudden night waking and take one evening to check. It's worth doing before concluding anything about habits or development.",
          },
        ],
      },
      {
        heading: "Then look at the day",
        blocks: [
          {
            type: "p",
            text: "Overtiredness is the most common non-physical cause. A child who went down late or missed a nap sleeps more lightly and surfaces more completely. So does a child who napped too long or too late and isn't carrying enough sleep pressure into the night.",
          },
          {
            type: "p",
            text: "Big days do it too — a party, a first day at nursery, a lot of new people. Consolidation of everything learned happens overnight, and busy brains wake more.",
          },
        ],
      },
      {
        heading: "How you respond matters more than how fast",
        blocks: [
          {
            type: "p",
            text: "The aim at 2am is to be reassuring and profoundly boring. Low light, few words, the same short phrase every time, back into bed. No conversation, no negotiation, no picking up if you can settle them lying down, and nothing that turns the night into an event worth repeating.",
          },
          {
            type: "p",
            text: "This isn't about being cold. It's that a tired child needs help getting back to a sleepy state, and stimulation of any kind — even warm, loving stimulation — moves them the other way.",
          },
        ],
      },
      {
        heading: "Watch what you introduce",
        blocks: [
          {
            type: "p",
            text: "The reason a two-week phase turns into a six-month pattern is usually something added during the hard fortnight: a bottle, a parent lying down until they sleep, coming into your bed, the television at 5am. Each is completely reasonable at the time and quickly becomes the condition your child needs in order to sleep.",
          },
          {
            type: "p",
            text: "A rough test: can this be reproduced when they wake at 3am without you? White noise can. A parent's presence can't. That doesn't make it wrong — plenty of families choose it deliberately — but it's worth choosing rather than drifting into.",
          },
        ],
      },
      {
        heading: "Front-load the reassurance",
        blocks: [
          {
            type: "p",
            text: "Much night waking in the second and third year is about separation rather than sleep. What helps is giving more connection at bedtime rather than more at 2am: a slower routine, an extra story, a few minutes of undivided attention with the door closed, and a consistent goodnight ritual that clearly marks the ending.",
          },
          {
            type: "p",
            text: "A story is doing real work here. It's the longest stretch of calm, undivided attention most children get in a day, and it's why the last ten minutes of the routine are worth protecting even when the nights are hard.",
          },
        ],
      },
      {
        heading: "When to raise it with a doctor",
        blocks: [
          {
            type: "p",
            text: "Loud snoring, pauses in breathing, gasping, mouth-breathing every night, waking in pain, or a child who's exhausted during the day are worth a pediatrician visit rather than a routine adjustment. So is night waking that's severe and unrelenting over months — there's help available and no prize for managing it alone.",
          },
        ],
      },
    ],
    related: [
      "falling-asleep-independently",
      "sleep-regressions-by-age",
      "separation-anxiety-at-bedtime",
    ],
    faqs: [
      {
        q: "Why has my toddler started waking up at night again?",
        a: "Most often overtiredness, a nap that's too long or too late, teething or illness, room temperature, or a developmental leap. Check the physical causes first — they explain a large share of sudden night waking.",
      },
      {
        q: "What should I do when my toddler wakes at 2am?",
        a: "Keep it dull: low light, very few words, the same short phrase every time, and back into bed. Comfort without stimulation — even warm conversation moves a tired child away from sleep.",
      },
      {
        q: "How do I stop night waking becoming a habit?",
        a: "Be careful what you introduce during a hard fortnight. Anything your child can't reproduce alone at 3am — a bottle, a parent lying beside them — tends to become the condition they need to sleep. Add extra connection at bedtime instead.",
      },
    ],
  },

  {
    slug: "falling-asleep-independently",
    title: "Helping a Toddler Fall Asleep Without You in the Room",
    description:
      "If your child can only fall asleep with you lying beside them, here's how to step back gradually — and why the change has to happen at bedtime, not at 3am.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 6,
    intro: [
      "Lots of families end up here, usually through a series of sensible decisions during a bad month. Your child falls asleep with you in the room, and then can't get back to sleep at 1am without you, because the conditions have changed while they slept.",
      "There's nothing wrong with staying if it works for you. But if you want to change it, the method is the same: move slowly, change one thing at a time, and do the work at bedtime rather than in the middle of the night.",
    ],
    sections: [
      {
        heading: "Why bedtime is where the change happens",
        blocks: [
          {
            type: "p",
            text: "Whatever conditions your child falls asleep in at 7:30 are the conditions they'll look for when they surface at 1am. If they went down with you lying next to them and wake to find you gone, that's a genuine change in their environment, and it wakes them fully.",
          },
          {
            type: "p",
            text: "This is why working on night waking directly rarely helps. Fix the falling-asleep conditions and most of the night waking resolves itself.",
          },
        ],
      },
      {
        heading: "Move in small, boring steps",
        blocks: [
          {
            type: "ol",
            items: [
              "Start where you are. If you lie in the bed, sit on the edge of it for several nights.",
              "Then a chair beside the bed. Then the chair a metre back. Then near the door. Then just outside it, in sight.",
              "Hold each position for three to five nights, or until it's genuinely unremarkable — moving on during a bad week undoes the progress.",
              "Say what's happening in daylight, simply: \"Tonight I'm going to sit on the chair instead of the bed.\" No surprises after lights out.",
            ],
          },
          {
            type: "p",
            text: "It's slow on purpose. Done over three or four weeks it's usually undramatic; done in three nights it's a fight.",
          },
        ],
      },
      {
        heading: "Be present but not interactive",
        blocks: [
          {
            type: "p",
            text: "While you're in the room, be quiet and dull. No talking, no back-rubbing that has to continue indefinitely, no answering questions beyond a single short phrase. Your presence is the thing you're weaning, so it should be as low-stimulation as possible while it lasts.",
          },
          {
            type: "p",
            text: "If your child gets up, walk them back with almost no words. The tedium is the method.",
          },
        ],
      },
      {
        heading: "Give them something that stays",
        blocks: [
          {
            type: "p",
            text: "The gap you're leaving is easier to fill than to ignore. A comfort object, a night light that's on all night, white noise, and a fixed door position all persist while your child sleeps, so they're still there at 1am.",
          },
          {
            type: "p",
            text: "A recorded story works particularly well as a bridge — your voice in the room without you in it. Some children go from needing a parent present to needing a familiar voice to needing neither, over a few weeks. MoonPage lets you record any story in your own voice for exactly this.",
          },
        ],
      },
      {
        heading: "The check-in method, if you prefer it",
        blocks: [
          {
            type: "p",
            text: "An alternative to the chair: leave after the goodnight ritual, come back after a couple of minutes, then five, then longer — reassuring briefly each time without staying. Some children settle better with predictable returns than with a parent sitting there.",
          },
          {
            type: "p",
            text: "Neither approach is the correct one. Pick whichever suits your child's temperament and your own tolerance, and then be consistent, because switching methods every few nights is what actually prolongs it.",
          },
        ],
      },
      {
        heading: "Pick your moment",
        blocks: [
          {
            type: "p",
            text: "Don't start during illness, a house move, a new sibling, the week nursery starts, or a holiday. You want three or four boring weeks. If one of those events lands mid-process, hold your current step rather than going backwards — and expect to lose a little ground anyway.",
          },
        ],
      },
    ],
    related: [
      "toddler-night-waking",
      "co-sleeping-transition",
      "separation-anxiety-at-bedtime",
    ],
    faqs: [
      {
        q: "How do I get my toddler to fall asleep without me in the room?",
        a: "Move out in small steps — bed, chair beside the bed, chair further back, doorway, outside — holding each position for three to five nights. Whatever conditions they fall asleep in are the ones they'll look for when they wake at night.",
      },
      {
        q: "How long does it take to stop lying with a toddler at bedtime?",
        a: "Usually three to four weeks if you move gradually and hold each step until it's unremarkable. Done over a few nights it tends to become a fight and take longer overall.",
      },
      {
        q: "Why does my child wake at night if I leave after they're asleep?",
        a: "Because the room has changed. They fell asleep with you there and surface to find you gone, which wakes them fully. Changing the falling-asleep conditions at bedtime usually resolves the night waking too.",
      },
    ],
  },

  {
    slug: "co-sleeping-transition",
    title: "Moving a Toddler Out of the Family Bed",
    description:
      "When you're ready to stop bed-sharing with a toddler, how to make the move gradually, and how to handle the nights they turn up at your door anyway.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "Bed-sharing with a toddler is a normal arrangement in much of the world and a deliberate choice in many families. It also frequently stops working — because of a new baby, a bad back, a partner on shifts, or simply because everyone has stopped sleeping well.",
      "Moving out of it goes best slowly and without any framing that suggests your child has done something wrong. Safe-sleep guidance for babies under one is a separate matter and belongs with your pediatrician; this is about toddlers and older.",
    ],
    sections: [
      {
        heading: "Start with the bed, not the room",
        blocks: [
          {
            type: "p",
            text: "Going straight from your bed to a room down the hall is a large jump. A mattress on your floor, or a toddler bed pushed against yours, keeps the reassurance of your presence while removing the physical sharing — which is often the part that's actually costing everyone sleep.",
          },
          {
            type: "p",
            text: "Many families stay at this stage for weeks or months, and it's a perfectly good place to stop if it's working.",
          },
        ],
      },
      {
        heading: "Make their own bed worth having",
        blocks: [
          {
            type: "ul",
            items: [
              "Let them choose the bedding, and put it on together in daylight.",
              "Do daytime things in it — reading, quiet play — so the bed isn't only associated with being left.",
              "Move a familiar smell in: a blanket from your bed, a worn t-shirt, their long-standing comfort object.",
              "Keep the room warm, dim, and set up the same every night.",
            ],
          },
        ],
      },
      {
        heading: "Move the routine's ending",
        blocks: [
          {
            type: "p",
            text: "If bedtime has been happening in your bed, shift the whole final stretch into theirs — stories, the goodnight ritual, all of it. Falling asleep in the new place is the thing you're actually changing; where they started the routine matters much less.",
          },
          {
            type: "p",
            text: "Then step back from the room gradually rather than leaving on night one.",
          },
        ],
      },
      {
        heading: "The 3am doorway",
        blocks: [
          {
            type: "p",
            text: "Expect visitors. Decide in advance what you're going to do and then do the same thing every time — walking them back, with a few words and no drama, is the version that works fastest. Letting them in on some nights and not others makes it take much longer, because an unpredictable reward is the most persistent kind.",
          },
          {
            type: "p",
            text: "If the walk-back is beyond you at 3am, a mattress on your floor that they're allowed to use is a legitimate middle position — it's a rule, and rules are what you need. Undefined is the only bad option.",
          },
        ],
      },
      {
        heading: "Expect it to take weeks, and to wobble",
        blocks: [
          {
            type: "p",
            text: "Illness, holidays, and hard days will send them back, and that's fine — comfort freely, then return to the arrangement the next night rather than restarting the whole process. And be clear with yourself about what you actually want: plenty of families do this move at four or five rather than two, and there's no deadline you're missing.",
          },
        ],
      },
    ],
    related: [
      "falling-asleep-independently",
      "crib-to-bed-transition",
      "toddler-night-waking",
    ],
    faqs: [
      {
        q: "How do I move my toddler out of our bed?",
        a: "Go in stages rather than all at once — a mattress on your floor or a bed pushed against yours first, then their own room, then stepping back from the room gradually. Move the end of the bedtime routine into the new bed early.",
      },
      {
        q: "What do I do when my toddler comes into our bed at night?",
        a: "Pick one response and use it every single time. Walking them back with few words works fastest; a mattress on your floor they're allowed to use is a fine alternative. Inconsistency is what makes it persist, because unpredictable rewards are the hardest to give up.",
      },
      {
        q: "How long does it take to stop co-sleeping?",
        a: "Usually a few weeks, with setbacks around illness and holidays. Comfort freely during those and return to the arrangement the following night rather than starting over.",
      },
    ],
  },

  {
    slug: "separation-anxiety-at-bedtime",
    title: "Bedtime Separation Anxiety: When They Can't Let You Leave",
    description:
      "The clinging, the calling, the fourth request for a hug — why separation anxiety peaks at bedtime, and what makes leaving the room easier for both of you.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "Separation anxiety is developmentally normal, comes in waves, and lands hardest at bedtime — the one moment of the day when the separation is total, prolonged, and in the dark.",
      "It also tends to be worse in exactly the periods when parents have least patience for it: after a house move, a new sibling, starting nursery, or a stretch of long working days.",
    ],
    sections: [
      {
        heading: "Give connection before it's demanded",
        blocks: [
          {
            type: "p",
            text: "The single most effective change is front-loading. Ten or fifteen minutes of undivided attention earlier in the evening — phone away, door shut, nothing else happening — tends to reduce the extraction problem at lights out considerably more than the same time spent negotiating at the doorway.",
          },
          {
            type: "p",
            text: "Children who are fed on attention stop foraging for it. The bedtime story is the natural place for this, which is another reason not to let it be the thing that gets cut on busy evenings.",
          },
        ],
      },
      {
        heading: "Make the goodbye short and identical",
        blocks: [
          {
            type: "p",
            text: "A long, tender, drawn-out leaving does the opposite of what it's meant to. It signals that leaving is a big deal, and it gives an anxious child a window to escalate. The same three-second ritual every night — one phrase, one kiss, out — is easier to trust precisely because it's unremarkable.",
          },
          {
            type: "p",
            text: "And never sneak out. A child who discovers you vanish when they aren't looking will fight much harder to stay awake.",
          },
        ],
      },
      {
        heading: "Say when you'll be back, and be back",
        blocks: [
          {
            type: "p",
            text: "\"I'm going to put the washing on and I'll come and check on you\" — and then actually come back, before they call. Returning unprompted is far more reassuring than returning in response to crying, and it teaches that you come back without them having to summon you.",
          },
          {
            type: "p",
            text: "Start with a very short gap and stretch it over a couple of weeks.",
          },
        ],
      },
      {
        heading: "Leave something of you in the room",
        blocks: [
          {
            type: "ul",
            items: [
              "A t-shirt you've worn, or a small blanket from your bed.",
              "A photo of the family somewhere they can see it.",
              "A comfort object that lives in the bed and never goes anywhere else.",
              "A recorded story in your voice — the same one, every night, so it becomes part of the ritual rather than entertainment.",
            ],
          },
        ],
      },
      {
        heading: "Don't reason with it at 8pm",
        blocks: [
          {
            type: "p",
            text: "Extended reassurance at bedtime tends to feed anxiety rather than settle it: the more thoroughly you address the worry, the more real and worth discussing it becomes. Acknowledge briefly, be warm, and move on — \"I know. I'll be right in the next room. Goodnight, I love you.\"",
          },
          {
            type: "p",
            text: "If the anxiety is escalating over months, spilling into the daytime, or causing panic rather than upset, that's worth a conversation with your pediatrician — not because something has gone wrong, but because it's a very treatable thing to have help with.",
          },
        ],
      },
    ],
    related: [
      "falling-asleep-independently",
      "bedtime-stories-for-anxious-kids",
      "starting-preschool-and-sleep",
    ],
    faqs: [
      {
        q: "Why does my toddler get so upset when I leave the room at bedtime?",
        a: "Bedtime is the day's longest and most complete separation, and it happens in the dark. Separation anxiety is developmentally normal and comes in waves, usually worse after a change like a new sibling, a move, or starting nursery.",
      },
      {
        q: "Should I sneak out once my child falls asleep?",
        a: "No. A child who discovers you disappear when they aren't watching will fight harder to stay awake. A short, identical goodbye every night is easier to trust.",
      },
      {
        q: "Does checking back in help or make it worse?",
        a: "Returning helps most when you do it unprompted, before they call — it teaches that you come back without needing to be summoned. Start with a very short gap and stretch it over a couple of weeks.",
      },
    ],
  },

  {
    slug: "resetting-after-a-bad-night",
    title: "How to Reset After a Terrible Night",
    description:
      "One bad night doesn't have to become a bad fortnight. What to do the next day, what not to change, and how to get the routine back.",
    category: "Routines",
    updated: "2026-07-28",
    readingMinutes: 4,
    intro: [
      "Every family has them: the night with three hours awake at 1am, or the bedtime that turned into a two-hour standoff. What determines whether it stays a bad night or becomes a bad month is mostly what happens over the next forty-eight hours.",
      "The instinct is to compensate. Compensating is usually what turns one night into ten.",
    ],
    sections: [
      {
        heading: "Protect the morning wake-up",
        blocks: [
          {
            type: "p",
            text: "The temptation after a broken night is to let everyone sleep in. A little is fine; a lot shifts the body clock and makes tonight harder, which is how a single bad night becomes a pattern.",
          },
          {
            type: "p",
            text: "Wake within about half an hour of the normal time, get bright light early, and take the recovery in the form of an earlier bedtime rather than a later start.",
          },
        ],
      },
      {
        heading: "Don't over-nap the day",
        blocks: [
          {
            type: "p",
            text: "A long compensatory nap at 3pm removes the sleep pressure you need at 7pm. If a nap is needed, keep it to the usual length and finish it early. The same goes for the accidental car nap on the way home — often the single biggest cause of a second difficult night.",
          },
        ],
      },
      {
        heading: "Go early, not late",
        blocks: [
          {
            type: "p",
            text: "An overtired child gets wired rather than sleepy, so the night after a bad one usually calls for a bedtime fifteen to thirty minutes earlier than normal — with the routine started earlier to match, not compressed.",
          },
        ],
      },
      {
        heading: "Change nothing structural",
        blocks: [
          {
            type: "p",
            text: "This is the important one. Whatever you did at 2am to survive — a bottle, your bed, lying down with them — treat as a one-off and go back to the usual arrangement tonight. Warmth costs nothing; new arrangements cost you a second transition later.",
          },
          {
            type: "p",
            text: "If your child asks for the exception again, name it as what it was: \"That was because you were poorly. Tonight we're doing our normal bedtime.\"",
          },
        ],
      },
      {
        heading: "Run the routine even when nobody wants to",
        blocks: [
          {
            type: "p",
            text: "On a day when everyone is wrecked, the routine is the thing that carries you. Even a stripped-down version — teeth, bed, one short story, the same goodnight words — re-establishes the shape, and shape is what your child reads as normal.",
          },
          {
            type: "p",
            text: "This is what a two-minute story is for: a short illustrated story, or narration if your voice is gone, so the routine still ends the way it always ends.",
          },
        ],
      },
    ],
    related: [
      "bedtime-routine-for-toddlers",
      "toddler-night-waking",
      "sick-child-and-sleep",
    ],
    faqs: [
      {
        q: "Should I let my toddler sleep in after a bad night?",
        a: "Only a little — around half an hour. A long lie-in shifts the body clock and makes the next night harder. Take the recovery as an earlier bedtime instead.",
      },
      {
        q: "Should bedtime be later after a night of no sleep?",
        a: "Earlier, usually by fifteen to thirty minutes. Overtired children get wired rather than sleepy, so a later bedtime tends to produce a second difficult night.",
      },
      {
        q: "How do I stop one bad night becoming a habit?",
        a: "Treat whatever you did to survive at 2am as a one-off and return to the normal arrangement the next night. Be generous with comfort inside the usual routine rather than adding new arrangements.",
      },
    ],
  },

  {
    slug: "travel-and-jet-lag-with-toddlers",
    title: "Sleep on Holiday: Travel, New Rooms, and Jet Lag",
    description:
      "How to keep a toddler sleeping on holiday — packing the routine rather than the schedule, handling a shared hotel room, and getting through time zones.",
    category: "Routines",
    updated: "2026-07-28",
    readingMinutes: 6,
    intro: [
      "Holidays break toddler sleep in three separate ways: an unfamiliar room, a different schedule, and often a parent sleeping four feet away. Each is manageable; together they're why so many families come home more tired than they left.",
      "The general principle is that you can't take the schedule with you, but you can take the routine.",
    ],
    sections: [
      {
        heading: "Pack the cues, not the furniture",
        blocks: [
          {
            type: "ul",
            items: [
              "The comfort object, obviously — and consider a duplicate if losing it would be catastrophic.",
              "Their own pillowcase or a familiar blanket. Smell does a lot of work.",
              "A travel blackout blind, or binder clips and a dark scarf. Unfamiliar rooms are almost always too light.",
              "White noise, if you use it — a phone app covers corridors, air conditioning, and other guests.",
              "Two or three familiar stories, or the app you already read from, so the ending of the routine is identical.",
            ],
          },
          {
            type: "p",
            text: "The point of all of this is that the last fifteen minutes should feel the same as at home even though nothing else does.",
          },
        ],
      },
      {
        heading: "Sharing a room",
        blocks: [
          {
            type: "p",
            text: "A toddler who can see you will not go to sleep. Put the cot or bed out of the direct line of sight if you can — around a corner, behind a wardrobe, in a dressing area or on a balcony space with the door open.",
          },
          {
            type: "p",
            text: "Then be prepared to sit in the dark or leave the room for a while after lights out. It's the least glamorous part of travelling with small children and it's usually only needed for the first night or two.",
          },
        ],
      },
      {
        heading: "The first night is the worst night",
        blocks: [
          {
            type: "p",
            text: "Expect it and don't respond to it with structural changes. A child who takes an hour to settle in a strange room on night one is generally fine by night three. If you move them into your bed on night one, you'll be doing that all week and probably renegotiating it at home.",
          },
        ],
      },
      {
        heading: "Time zones",
        blocks: [
          {
            type: "ol",
            items: [
              "For trips of one or two hours' difference, don't adjust anything — just run the normal routine at local times and accept a couple of odd days.",
              "For bigger shifts, get outside in daylight at the destination as early as possible. Light resets the clock faster than anything else you can do.",
              "Aim for local meal times and local bedtimes from day one rather than easing in.",
              "Roughly a day per hour of difference is a fair expectation for full adjustment, and children often manage it faster than adults.",
              "For very short trips, sometimes staying on home time is easier than adjusting twice.",
            ],
          },
        ],
      },
      {
        heading: "Accept a worse holiday schedule",
        blocks: [
          {
            type: "p",
            text: "Naps in the buggy, a later bedtime because dinner is at eight, an early start because the sun comes up over the sea — a holiday is not the place to defend a schedule. Protect the routine's shape and total sleep roughly, and let the timings move.",
          },
        ],
      },
      {
        heading: "Coming home",
        blocks: [
          {
            type: "p",
            text: "Go back to the normal routine on the first night home, even if you arrive late and everyone is a mess. The familiar room does most of the work, and a week of gradual re-entry is much harder than one difficult evening.",
          },
        ],
      },
    ],
    related: [
      "bedtime-when-youre-away",
      "holiday-routine-disruption",
      "resetting-after-a-bad-night",
    ],
    faqs: [
      {
        q: "How do I get my toddler to sleep in a hotel room?",
        a: "Bring the cues from home — comfort object, familiar bedding smell, blackout cover, white noise, the same stories — and put the bed out of your child's direct line of sight. Expect the first night to be the hardest.",
      },
      {
        q: "How long does jet lag last for toddlers?",
        a: "Roughly a day per hour of time difference, and often faster than adults. Daylight at the destination is the strongest tool; aim for local meal and bedtimes from the first day.",
      },
      {
        q: "Should I keep my toddler's normal nap schedule on holiday?",
        a: "Not rigidly. Protect the shape of the bedtime routine and the rough daily sleep total, and let the timings move. A holiday is a bad place to defend a schedule.",
      },
    ],
  },

  {
    slug: "sick-child-and-sleep",
    title: "Sleep When Your Child Is Ill",
    description:
      "What to expect from sleep during a cold or a bug, how much to relax the rules, and how to get back to normal once they're better.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 4,
    intro: [
      "Illness rearranges sleep completely: more daytime sleeping, worse nights, and a child who wants you within arm's reach at all times. All of it is normal, and none of it is the moment to worry about habits.",
      "The only thing worth being deliberate about is the week after they recover.",
    ],
    sections: [
      {
        heading: "Do whatever gets everyone through",
        blocks: [
          {
            type: "p",
            text: "Extra cuddles, sleeping in your room, staying with them until they drop off, an unusual nap at four in the afternoon — during an illness, none of this is a problem. A child who feels awful needs comfort, and rules about sleep associations are a peacetime concern.",
          },
          {
            type: "p",
            text: "For anything to do with medicine, fluids, fevers, or symptoms that worry you, follow your pediatrician's advice rather than anything you read on a website — including this one.",
          },
        ],
      },
      {
        heading: "Expect the nights to be broken",
        blocks: [
          {
            type: "p",
            text: "Blocked noses are worse lying flat, coughs are worse at night, and a fever tends to spike in the early hours. Add daytime sleeping and a lack of activity, and a child who wakes repeatedly during a cold is behaving completely predictably.",
          },
        ],
      },
      {
        heading: "Keep the shape where you can",
        blocks: [
          {
            type: "p",
            text: "You don't need the whole routine, but keeping its ending intact helps more than you'd expect — the same goodnight words, the same story, in the same order, even if everything before it has gone out of the window. It's the marker that says this is still bedtime.",
          },
          {
            type: "p",
            text: "This is a week when narrated stories earn their keep: a child who is too miserable to be read to will often still listen, and you can lie there quietly rather than performing.",
          },
        ],
      },
      {
        heading: "Return to normal deliberately",
        blocks: [
          {
            type: "p",
            text: "The habits formed during a week of illness are the main way an illness turns into a month of bad sleep. Once they're clearly better, go back to the usual arrangement in one step rather than tapering — children generally accept a clear return to normal faster than a slow negotiation.",
          },
          {
            type: "p",
            text: "Name it out loud: \"You're all better now, so tonight we're back in your own bed and I'll come and check on you.\" Expect a couple of firm nights.",
          },
        ],
      },
      {
        heading: "Then expect a catch-up",
        blocks: [
          {
            type: "p",
            text: "Children often sleep unusually heavily for a few nights after recovering, and are frequently irritable and clingy for a couple of days before their sleep resettles. An earlier bedtime through that week is worth more than anything else you could do.",
          },
        ],
      },
    ],
    related: [
      "teething-and-sleep",
      "resetting-after-a-bad-night",
      "toddler-night-waking",
    ],
    faqs: [
      {
        q: "Should I keep the bedtime routine when my child is ill?",
        a: "Keep its ending — the same story and the same goodnight words — and let everything else go. Extra comfort during an illness isn't a habit problem; the week after recovery is where habits form.",
      },
      {
        q: "Why is my sick child waking so much at night?",
        a: "Blocked noses are worse lying flat, coughs worsen at night, fevers often spike in the early hours, and daytime sleeping reduces night-time sleep pressure. Broken nights during an illness are expected.",
      },
      {
        q: "How do I get back to normal sleep after an illness?",
        a: "Return to the usual arrangement in one clear step once they're better, rather than tapering, and say so out loud. Expect a couple of firm nights, and use an earlier bedtime through the recovery week.",
      },
    ],
  },

  {
    slug: "teething-and-sleep",
    title: "Teething and Night Waking: How Much Is Really the Teeth?",
    description:
      "Teething gets blamed for months of bad sleep. Here's what it actually disrupts, how long it lasts, and what to check when the teeth aren't the answer.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 4,
    intro: [
      "Teething is the most over-diagnosed cause of bad nights in the toddler years, largely because there's almost always a tooth coming at some point and it's a satisfying explanation.",
      "It does genuinely disrupt sleep — but usually for a few days around each tooth, not for months at a stretch.",
    ],
    sections: [
      {
        heading: "What the pattern usually looks like",
        blocks: [
          {
            type: "p",
            text: "Discomfort tends to cluster in the days immediately before a tooth breaks through, is often worse at night when there's nothing else to focus on, and eases quickly once it's out. Molars, which arrive during the second and third year, are generally the ones that cause the most trouble.",
          },
          {
            type: "p",
            text: "A few rough nights, then a return to normal, fits teething. Six weeks of 2am waking usually doesn't.",
          },
        ],
      },
      {
        heading: "What to check when it isn't the teeth",
        blocks: [
          {
            type: "ul",
            items: [
              "Bedtime that's drifted later, or a nap that's grown or moved.",
              "Room temperature and light — especially seasonal changes.",
              "A developmental leap, or a change like nursery starting.",
              "Ear pain, which is often worse lying down and is easy to mistake for teething.",
              "A habit formed during the last rough patch that's outlived its cause.",
            ],
          },
        ],
      },
      {
        heading: "Comfort without rebuilding the routine",
        blocks: [
          {
            type: "p",
            text: "Extra cuddles and a bit more patience for a few nights are exactly right. What tends to cause the longer problem is what gets introduced during them — a bottle at 2am, a parent lying down until sleep, a night in your bed. Keep the comfort and skip the new arrangements where you can.",
          },
          {
            type: "p",
            text: "For pain relief, teething products, or anything you'd give a child, ask your pediatrician or pharmacist rather than following general advice online.",
          },
        ],
      },
      {
        heading: "Don't attribute everything to teeth",
        blocks: [
          {
            type: "p",
            text: "The practical risk of the teething explanation is that it stops you looking. A high fever, being very unwell, diarrhoea, or a child who seems genuinely ill deserves a proper assessment rather than being written off as teething — that's a conversation for your doctor.",
          },
        ],
      },
    ],
    related: [
      "toddler-night-waking",
      "sick-child-and-sleep",
      "sleep-regressions-by-age",
    ],
    faqs: [
      {
        q: "How long does teething disrupt sleep?",
        a: "Usually a few days around each tooth, worse in the nights just before it breaks through. Weeks of continuous night waking is rarely teething alone and is worth investigating for other causes.",
      },
      {
        q: "How do I know if night waking is teething or something else?",
        a: "Teething fits a pattern of a few rough nights followed by a return to normal. If it persists, check bedtime drift, nap changes, room temperature and light, developmental leaps, ear pain, and habits formed during the last rough patch.",
      },
      {
        q: "Which teeth cause the most trouble?",
        a: "Molars, which arrive through the second and third year, are generally the hardest. For pain relief or teething products, ask your pediatrician or pharmacist rather than following general online advice.",
      },
    ],
  },

  {
    slug: "summer-bedtime-light-evenings",
    title: "Summer Bedtime: Getting Kids to Sleep While It's Still Light",
    description:
      "Long evenings, hot bedrooms, and a 4:45 sunrise. How to keep summer bedtimes from collapsing, and whether to move bedtime later.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "Summer breaks bedtime at both ends: it's broad daylight at 8pm when they're meant to be settling, and broad daylight again at 4:45 when they're meant to still be asleep.",
      "Most of the fix is mechanical rather than behavioral — it's about light and temperature far more than about willpower.",
    ],
    sections: [
      {
        heading: "Blackout is the whole game",
        blocks: [
          {
            type: "p",
            text: "Light reaching the eye is the main signal a body clock reads, so genuinely dark is worth more than any amount of routine adjustment. That means to the edges: a blind that leaves a bright frame of light around it isn't doing much.",
          },
          {
            type: "p",
            text: "Cheap and effective options include stick-on blackout film, a blackout blind fitted inside the recess, or a temporary panel cut to size. Check the room in the evening rather than the middle of the day to see what you're actually dealing with.",
          },
        ],
      },
      {
        heading: "Dim the rest of the house too",
        blocks: [
          {
            type: "p",
            text: "A dark bedroom doesn't help much if the hour before it was spent in a bright kitchen with the garden doors open. Draw curtains downstairs during the routine, use lamps instead of overhead lights, and move the wind-down indoors earlier than feels natural.",
          },
        ],
      },
      {
        heading: "Heat matters as much as light",
        blocks: [
          {
            type: "ul",
            items: [
              "Close curtains and windows during the hottest part of the day, then open up in the evening once the outside air is cooler.",
              "A fan pointed at a wall rather than at your child moves air without a draught, and doubles as white noise.",
              "Lighter bedding and fewer layers — overheating causes more night waking than being slightly cool.",
              "A cooler bath than usual as part of the routine.",
            ],
          },
        ],
      },
      {
        heading: "Should you move bedtime later?",
        blocks: [
          {
            type: "p",
            text: "A modest shift — twenty or thirty minutes across the summer — is reasonable, especially if mornings are also later. What causes trouble is a large shift with an unchanged wake-up, which just removes an hour of sleep per night and shows up as behavior by mid-July.",
          },
          {
            type: "p",
            text: "If you're going to move it, move the whole routine and hold the new time steady rather than deciding fresh each evening based on how light it is.",
          },
        ],
      },
      {
        heading: "Keep the routine intact through the holidays",
        blocks: [
          {
            type: "p",
            text: "Summer usually comes with nursery closures, visitors, late barbecues, and no structure at all. The bedtime sequence is the one bit of scaffolding worth keeping, even when everything else about the day has moved — the same order, and the same story at the end of it.",
          },
        ],
      },
    ],
    related: [
      "cozy-bedroom-for-better-sleep",
      "early-morning-waking",
      "holiday-routine-disruption",
    ],
    faqs: [
      {
        q: "How do I get my child to sleep when it's still light outside?",
        a: "Blackout covering to the edges of the window is the single most effective change, plus dimming the rest of the house during the wind-down. Light reaching the eye is what the body clock reads.",
      },
      {
        q: "Should bedtime be later in summer?",
        a: "A modest shift of twenty to thirty minutes is reasonable, particularly if mornings are also later. A large shift with an unchanged wake-up just costs an hour of sleep a night.",
      },
      {
        q: "How do I keep a hot bedroom cool enough for sleep?",
        a: "Close curtains and windows during the day and open them once the evening air is cooler, use a fan pointed at a wall rather than at your child, and use lighter bedding — overheating causes more waking than being slightly cool.",
      },
    ],
  },

  {
    slug: "holiday-routine-disruption",
    title: "Keeping Bedtime Through the Holidays",
    description:
      "Late nights, relatives, excitement, and a completely different house. How to protect enough of the routine to survive the season without policing it.",
    category: "Routines",
    updated: "2026-07-28",
    readingMinutes: 4,
    intro: [
      "Holiday periods are where bedtime routines go to die: no nursery, visitors staying, meals at strange times, over-excited cousins, and at least one evening that runs three hours long.",
      "Trying to hold the normal schedule through all of that is usually a losing battle. Deciding in advance which parts you'll defend is not.",
    ],
    sections: [
      {
        heading: "Defend the sequence, not the clock",
        blocks: [
          {
            type: "p",
            text: "A routine's power comes from its order, not its timing. Teeth, pajamas, bed, stories, goodnight ritual — run in that order at 9:30pm in someone else's spare room, it still reads as bedtime to your child. Run out of order at the usual time, it doesn't.",
          },
          {
            type: "p",
            text: "Decide the minimum sequence before the season starts and treat it as non-negotiable, however late things run.",
          },
        ],
      },
      {
        heading: "Pick your late nights deliberately",
        blocks: [
          {
            type: "p",
            text: "Two or three genuinely late nights across a fortnight is manageable. Every night running an hour over is not. Choose which events are worth it, and go early and boring on the days in between rather than letting the whole period drift.",
          },
        ],
      },
      {
        heading: "Manage the excitement, not just the timing",
        blocks: [
          {
            type: "ul",
            items: [
              "Get outside during the day — the biggest predictor of a decent night over the holidays is usually how much fresh air and movement happened before 4pm.",
              "Move the exciting parts of the day earlier where you can. New toys at 6pm are a bad idea.",
              "Build in a quiet hour before the routine starts, even if the house is full.",
              "Give relatives a briefing. Grandparents doing bedtime is lovely; grandparents doing four stories and a wrestle is a two-hour bedtime.",
            ],
          },
        ],
      },
      {
        heading: "Sleeping somewhere else",
        blocks: [
          {
            type: "p",
            text: "In another house, bring the comfort object, something that smells of home, and a way to make the room dark. Then keep the routine's ending identical — the same stories, the same goodnight words — because that's the part your child uses to work out that this strange room is still bedtime.",
          },
        ],
      },
      {
        heading: "Plan the re-entry",
        blocks: [
          {
            type: "p",
            text: "Give yourself two quiet evenings at home before nursery or school restarts, with early bedtimes and the full normal routine. It's much easier than trying to reset on the night before term starts, and it's the single most useful thing you can put in the calendar.",
          },
        ],
      },
    ],
    related: [
      "travel-and-jet-lag-with-toddlers",
      "resetting-after-a-bad-night",
      "bedtime-routine-for-toddlers",
    ],
    faqs: [
      {
        q: "How do I keep a bedtime routine over the holidays?",
        a: "Defend the sequence rather than the clock. The same order — teeth, pajamas, bed, stories, goodnight ritual — reads as bedtime even at 9:30pm in a spare room, whereas the right time in the wrong order doesn't.",
      },
      {
        q: "How many late nights can a toddler handle?",
        a: "Two or three across a fortnight is generally manageable if the days in between are early and quiet. Nightly drift is what causes the real problems.",
      },
      {
        q: "How do I get back to normal after the holidays?",
        a: "Plan two quiet evenings at home with early bedtimes and the full routine before nursery or school restarts, rather than trying to reset the night before term begins.",
      },
    ],
  },

  {
    slug: "starting-preschool-and-sleep",
    title: "Starting Nursery or Preschool: What It Does to Sleep",
    description:
      "New settings wreck sleep for a few weeks — more night waking, harder bedtimes, and a child who's exhausted but wired. What's happening and what helps.",
    category: "Sleep",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "Starting nursery or preschool is one of the biggest changes in a small child's life, and sleep is usually where it shows. Expect a few weeks of harder bedtimes, more night waking, and a child who is visibly exhausted and simultaneously incapable of settling.",
      "It settles. In the meantime there are a few things that make a real difference.",
    ],
    sections: [
      {
        heading: "Why an exhausted child can't sleep",
        blocks: [
          {
            type: "p",
            text: "A day full of new people, noise, rules, and social effort leaves a child overstimulated rather than simply tired. On top of that they've been holding themselves together in an unfamiliar place all day, and home is where that finally gets released — which is why the meltdown often arrives at pick-up rather than at nursery.",
          },
          {
            type: "p",
            text: "Overtiredness compounds it. The result is a child who needs sleep badly and is too wound up to get there.",
          },
        ],
      },
      {
        heading: "Move bedtime earlier for a few weeks",
        blocks: [
          {
            type: "p",
            text: "This is the highest-impact change and it feels counterintuitive when bedtime is already a struggle. Thirty minutes earlier, with the routine starting earlier to match, catches them before the second wind arrives.",
          },
          {
            type: "p",
            text: "Nap changes often happen at the same time — some children drop a nap when they start, others start napping again from sheer exhaustion. Follow what's actually happening rather than the schedule you had.",
          },
        ],
      },
      {
        heading: "Protect the hour after pick-up",
        blocks: [
          {
            type: "p",
            text: "Resist filling the late afternoon. No clubs, no shopping, minimal screens, few plans. A quiet hour at home with food and floor-level company does more for the evening than anything else, and it's when a lot of the day's processing happens.",
          },
          {
            type: "p",
            text: "Don't interrogate them about their day, either. Most children this age can't report on it and being asked is more work. Things surface on their own, usually at bedtime.",
          },
        ],
      },
      {
        heading: "Expect separation stuff to resurface",
        blocks: [
          {
            type: "p",
            text: "A child being left somewhere every morning often becomes much harder to leave at night. Front-load connection — undivided attention earlier in the evening, a slightly longer story — rather than negotiating at the doorway.",
          },
          {
            type: "p",
            text: "Regression in other areas is common too: night waking after months of sleeping through, wanting to be carried, potty accidents. It's a load-related wobble, not a step backwards.",
          },
        ],
      },
      {
        heading: "Use the story as the processing space",
        blocks: [
          {
            type: "p",
            text: "Bedtime reading is often where a preschooler actually tells you about their day, precisely because nobody is asking. It's also the most reliable transition out of a busy, social day and into sleep — a familiar story, the same routine, and a room where nothing new is happening.",
          },
        ],
      },
    ],
    related: [
      "separation-anxiety-at-bedtime",
      "sleep-regressions-by-age",
      "resetting-after-a-bad-night",
    ],
    faqs: [
      {
        q: "Why is my child sleeping badly since starting nursery?",
        a: "New settings are overstimulating as well as tiring, and children often hold themselves together all day and release it at home. Expect a few weeks of harder bedtimes, more night waking, and possible regression in other areas.",
      },
      {
        q: "Should bedtime be earlier when a child starts preschool?",
        a: "Yes — around thirty minutes earlier for the first few weeks, with the routine starting earlier to match. It catches them before the overtired second wind.",
      },
      {
        q: "How long does the adjustment take?",
        a: "Typically a few weeks. Protecting a quiet hour after pick-up and front-loading attention at bedtime shortens it more than anything you do at lights out.",
      },
    ],
  },

  {
    slug: "bedtime-snacks-and-food-before-bed",
    title: "Bedtime Snacks: What Helps and What Keeps Them Up",
    description:
      "Whether a bedtime snack is a good idea, what to give, how long before bed, and how to handle the child who is suddenly starving at lights out.",
    category: "Routines",
    updated: "2026-07-28",
    readingMinutes: 4,
    intro: [
      "Two things are usually going on with food at bedtime, and they need opposite responses: genuine hunger, which disrupts sleep and is worth solving, and the strategic hunger that appears eleven seconds after lights out.",
      "Telling them apart is mostly about timing.",
    ],
    sections: [
      {
        heading: "Real hunger is worth taking seriously",
        blocks: [
          {
            type: "p",
            text: "A child who eats dinner at five and goes to bed at half seven can genuinely be hungry, and hunger is a common cause of both trouble settling and waking in the early hours. Toddlers also eat erratically — a day of refusing everything is normal and shows up at 2am.",
          },
          {
            type: "p",
            text: "A small snack built into the routine, before teeth, solves this without any negotiation. Because it's part of the sequence, it doesn't become a bargaining chip.",
          },
        ],
      },
      {
        heading: "What to give",
        blocks: [
          {
            type: "ul",
            items: [
              "Something with a bit of substance rather than pure sugar — toast, oat cereal, yoghurt, banana, cheese.",
              "Small. This is a top-up, not a second dinner, and a full stomach can make settling harder.",
              "Twenty to thirty minutes before bed, so it isn't the last thing that happens.",
              "Always before teeth-brushing, which also stops the snack being used to delay.",
            ],
          },
        ],
      },
      {
        heading: "What to keep away from the evening",
        blocks: [
          {
            type: "p",
            text: "Chocolate contains caffeine, which is worth knowing at 6pm. Fizzy drinks, iced tea and some flavored waters do too. Large amounts of anything sugary right before bed tend to come with a burst of activity that lands exactly when you're trying to wind down.",
          },
          {
            type: "p",
            text: "Drinks generally are worth finishing before the routine starts, especially during potty training — a big cup at 7:25 shows up at 11.",
          },
        ],
      },
      {
        heading: "The strategic hunger",
        blocks: [
          {
            type: "p",
            text: "If the snack is already part of the routine, the request that arrives after lights out is about delay, not food, and it's best handled the way all the other stalling requests are: answered once, briefly, without turning the lights on. \"You had your snack. Breakfast is in the morning.\" The same sentence, every night.",
          },
          {
            type: "p",
            text: "Making a snack available after lights out is the fastest way to make it a nightly fixture.",
          },
        ],
      },
      {
        heading: "If they wake genuinely hungry",
        blocks: [
          {
            type: "p",
            text: "Persistent early-hours hunger in a toddler who eats well is worth mentioning to your pediatrician rather than solving with a night-time bottle — partly because there may be something else going on, and partly because a 2am feed is a habit that's hard to undo once it's established.",
          },
        ],
      },
    ],
    related: [
      "bedtime-routine-for-toddlers",
      "toddler-night-waking",
      "bath-before-bed",
    ],
    faqs: [
      {
        q: "Should toddlers have a snack before bed?",
        a: "A small one built into the routine helps if there's a long gap between dinner and bedtime — hunger disrupts settling and causes early-hours waking. Give it before teeth-brushing so it doesn't become a delaying tactic.",
      },
      {
        q: "What's a good bedtime snack for a child?",
        a: "Something with substance rather than pure sugar — toast, oat cereal, yoghurt, banana, or cheese — small, and twenty to thirty minutes before bed rather than as the last thing that happens.",
      },
      {
        q: "Does sugar before bed keep children awake?",
        a: "Large amounts of sugar right before bed often come with a burst of activity at the worst moment, and chocolate contains caffeine. Finish drinks before the routine starts, especially during potty training.",
      },
    ],
  },

  {
    slug: "bath-before-bed",
    title: "Does a Bath Before Bed Actually Help?",
    description:
      "Why a warm bath makes children sleepy, when it does the opposite, and whether you need one every night.",
    category: "Routines",
    updated: "2026-07-28",
    readingMinutes: 4,
    intro: [
      "The bath is the most universal step in bedtime routines and the one parents most often feel guilty about skipping. It does have a real physiological effect — and it also backfires for a decent number of children.",
      "Whether to keep it is worth deciding on evidence from your own child rather than habit.",
    ],
    sections: [
      {
        heading: "Why it works",
        blocks: [
          {
            type: "p",
            text: "A warm bath brings blood to the surface of the skin, and when you get out, body temperature drops slightly faster than it otherwise would. A falling core temperature is one of the signals the body uses to initiate sleep, which is why a bath twenty to thirty minutes before bed can genuinely help.",
          },
          {
            type: "p",
            text: "The gap matters. Straight from bath to bed skips the cooling part, which is the bit doing the work.",
          },
        ],
      },
      {
        heading: "When it backfires",
        blocks: [
          {
            type: "p",
            text: "For plenty of toddlers a bath is a party: splashing, toys, someone else in there with them, and being cold and cross on the way out. If your child comes out of the bath more wound up than they went in, the bath is working against you.",
          },
          {
            type: "p",
            text: "The fix is usually to change the bath rather than drop it — shorter, dimmer, fewer toys, less talking, warm towel ready. If that doesn't work, move it to the morning or the afternoon.",
          },
        ],
      },
      {
        heading: "You don't need one every night",
        blocks: [
          {
            type: "ul",
            items: [
              "Most young children don't need a daily bath for cleanliness, and frequent bathing can be hard on some children's skin.",
              "A warm wash at the sink triggers a similar transition and takes four minutes.",
              "What the routine needs is a consistent step in that slot — not necessarily water.",
              "Whatever you choose, keep it in the same position in the sequence every night.",
            ],
          },
        ],
      },
      {
        heading: "Where it belongs in the routine",
        blocks: [
          {
            type: "p",
            text: "Near the start, not the end. The order that works for most families is bath, then pajamas, then teeth, then into bed for stories — so the calmest, quietest part of the evening is the part immediately before sleep, and the bath's cooling effect has time to land.",
          },
          {
            type: "p",
            text: "Dim the bathroom while you're at it. A bright overhead light at 7pm undoes some of what the warm water is doing.",
          },
        ],
      },
    ],
    related: [
      "bedtime-routine-for-toddlers",
      "bedtime-snacks-and-food-before-bed",
      "cozy-bedroom-for-better-sleep",
    ],
    faqs: [
      {
        q: "Does a warm bath help children sleep?",
        a: "It can. A bath warms the skin, and the slightly faster drop in body temperature afterwards is one of the signals that initiates sleep. Leave twenty to thirty minutes between the bath and lights out so the cooling has time to work.",
      },
      {
        q: "What if the bath makes my toddler more excited?",
        a: "Change the bath before dropping it — shorter, dimmer, fewer toys, less talking. If it still winds them up, move it to the morning; the routine needs a consistent step in that slot, not necessarily water.",
      },
      {
        q: "Do children need a bath every night?",
        a: "Most young children don't need one daily for cleanliness, and frequent bathing can irritate some children's skin. A quick warm wash marks the same transition in about four minutes.",
      },
    ],
  },

  {
    slug: "toddler-sharing-room-with-baby",
    title: "Putting a Toddler and a Baby in the Same Room",
    description:
      "Whether room-sharing works, how to stagger two bedtimes in one room, and what to do when one wakes the other.",
    category: "Routines",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "Room-sharing is usually driven by space rather than choice, and it works better than most parents expect — mainly because children get used to each other's noise far faster than adults do.",
      "The trick is in the sequencing, and in not moving them in together during the worst possible month.",
    ],
    sections: [
      {
        heading: "Wait for the baby to settle first",
        blocks: [
          {
            type: "p",
            text: "Moving a newborn in with a toddler while the baby is still waking several times a night is the hardest version. If you can, wait until the baby's nights are reasonably consolidated — and follow your pediatrician's guidance on safe sleep arrangements for the baby's first year.",
          },
          {
            type: "p",
            text: "If you can't wait, expect a rough few weeks and know that it generally does settle.",
          },
        ],
      },
      {
        heading: "Stagger the bedtimes",
        blocks: [
          {
            type: "ol",
            items: [
              "Put whichever child settles more easily down first, elsewhere if you have anywhere at all — a travel cot in your room for half an hour is fine.",
              "Do the other child's full routine in the shared room.",
              "Move the first child in once the second is asleep.",
              "Once both are used to it, most families can compress this back into one bedtime.",
            ],
          },
          {
            type: "p",
            text: "It's more work for a few weeks and it avoids the situation where each child's settling wakes the other and nobody sleeps.",
          },
        ],
      },
      {
        heading: "White noise is close to essential",
        blocks: [
          {
            type: "p",
            text: "A steady sound source between them masks stirring, coughing, and the toddler talking to themselves for twenty minutes. It's the single most useful piece of equipment in a shared room.",
          },
          {
            type: "p",
            text: "Set it at about the volume of a running shower, positioned away from either bed, and leave it on all night.",
          },
        ],
      },
      {
        heading: "When one wakes the other",
        blocks: [
          {
            type: "p",
            text: "Go in quickly and quietly for the one who woke, and don't turn on lights. Most of the time the other child stirs and goes back down — children sleep through a surprising amount of each other, and they get better at it with exposure.",
          },
          {
            type: "p",
            text: "If night waking is severe and genuinely waking both every night, split them temporarily rather than grinding on. A few weeks apart and another attempt later is much easier than a month of everyone awake.",
          },
        ],
      },
      {
        heading: "Give the toddler something that's theirs",
        blocks: [
          {
            type: "p",
            text: "Sharing a room with a baby who arrived and took over is easier if there are compensations: their own reading light, their own shelf, their own goodnight ritual, and stories that happen after the baby is down and are only for them.",
          },
          {
            type: "p",
            text: "That last one matters more than the logistics. Ten minutes of undivided attention at bedtime does most of the work of making a shared room feel fair.",
          },
        ],
      },
    ],
    related: [
      "bedtime-with-two-kids",
      "new-baby-bedtime",
      "white-noise-and-bedtime-sounds",
    ],
    faqs: [
      {
        q: "Can a toddler and a baby share a room?",
        a: "Usually yes, and children adapt to each other's noise faster than adults expect. It's easiest once the baby's nights are reasonably consolidated — and safe sleep arrangements for a baby's first year are a question for your pediatrician.",
      },
      {
        q: "How do you put two children to bed in the same room?",
        a: "Stagger it at first: settle the easier child elsewhere, do the other's full routine in the shared room, then move the first one in. Most families can merge it back into one bedtime after a few weeks.",
      },
      {
        q: "What if one child wakes the other?",
        a: "Go in quickly and quietly without turning lights on — most of the time the other child stirs and resettles. If both are genuinely waking every night, separate them for a few weeks and try again rather than grinding on.",
      },
    ],
  },

  {
    slug: "bedtime-for-twins",
    title: "Bedtime with Twins",
    description:
      "One routine or two, same room or separate, and how to read a story to two children who both want to sit on your lap.",
    category: "Routines",
    updated: "2026-07-28",
    readingMinutes: 4,
    intro: [
      "Bedtime with twins is a logistics problem before it's a sleep problem. Everything that's manageable with one child — settling, resettling, the story, the getting up — happens twice, often simultaneously, and usually with only one adult available.",
      "Most of what works is about structure rather than technique.",
    ],
    sections: [
      {
        heading: "One bedtime, run together",
        blocks: [
          {
            type: "p",
            text: "Most families of twins end up on a single synchronized routine, and it's usually the right call: one bath, one set of stories, one lights out. Staggering doubles the length of your evening and rarely improves anyone's sleep.",
          },
          {
            type: "p",
            text: "The exception is a period where one twin is genuinely disruptive to the other — during illness, a regression, or a phase of loud resistance. Splitting temporarily is a reasonable tool, not a failure.",
          },
        ],
      },
      {
        heading: "Sharing a room usually works",
        blocks: [
          {
            type: "p",
            text: "Twins habituate to each other's noise early and often settle better together than apart. White noise helps considerably, and so does accepting a period of chatting and giggling after lights out — as long as it's finite, it isn't a problem worth solving.",
          },
        ],
      },
      {
        heading: "The story, with two of them",
        blocks: [
          {
            type: "ul",
            items: [
              "Sit on the floor with your back against a bed and one child on each side — better than trying to referee a lap.",
              "Hold the book out in front rather than in your lap so both can see equally.",
              "Alternate who chooses by night and say whose turn it is out loud, so it's not renegotiated nightly.",
              "Narrated audio can carry the story while you settle two children at once, on the nights that's the only way it happens.",
            ],
          },
        ],
      },
      {
        heading: "Give each of them something individual",
        blocks: [
          {
            type: "p",
            text: "Twins get a lot of joint attention and relatively little individual attention. A separate goodnight phrase for each, thirty seconds each of one-to-one at the end, and their own comfort object and bedding are small things that do real work.",
          },
          {
            type: "p",
            text: "Where you can, one-to-one reading earlier in the day — even five minutes with one twin while the other is occupied — is worth more than any adjustment to bedtime itself.",
          },
        ],
      },
      {
        heading: "Accept a longer transition",
        blocks: [
          {
            type: "p",
            text: "Milestone changes — cot to bed, dropping the nap — are harder with two, because one is usually ready before the other. Moving them together is generally simpler than running two arrangements, but expect the transition to take longer than it would with a single child, and don't read that as something going wrong.",
          },
        ],
      },
    ],
    related: [
      "bedtime-with-two-kids",
      "toddler-sharing-room-with-baby",
      "white-noise-and-bedtime-sounds",
    ],
    faqs: [
      {
        q: "Should twins have the same bedtime?",
        a: "Usually yes — one synchronized routine keeps the evening manageable and works well for most families. Splitting temporarily is a fine tool during illness or a disruptive phase.",
      },
      {
        q: "Should twins share a room?",
        a: "Most do, and they habituate to each other's noise early — often settling better together than apart. White noise helps, and some chatting after lights out isn't a problem as long as it ends.",
      },
      {
        q: "How do you read a bedtime story to twins?",
        a: "Sit on the floor with your back against a bed and one child either side, hold the book out in front so both can see, and alternate who chooses by night with the turn announced out loud.",
      },
    ],
  },

  {
    slug: "school-age-bedtime",
    title: "Bedtime for School-Age Kids (Ages 6–9)",
    description:
      "How much sleep school-age children need, why bedtime gets harder rather than easier, and how to keep reading part of it.",
    category: "Ages",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "Bedtime doesn't get simpler at six. It gets later, more negotiated, and more crowded — homework, clubs, siblings, screens, and a child who now has a social life to think about at lights out.",
      "The structure that worked at three still works; it just needs updating rather than abandoning.",
    ],
    sections: [
      {
        heading: "How much sleep they need",
        blocks: [
          {
            type: "p",
            text: "School-age children generally need somewhere around nine to twelve hours a night. Work backwards from the school-morning alarm: a 6:45 wake-up and ten hours means asleep by around 8:45, and therefore a routine starting well before that.",
          },
          {
            type: "p",
            text: "Insufficient sleep at this age rarely looks like tiredness. It looks like irritability, poor concentration, emotional volatility, and difficulty at school — which is why it's often diagnosed as everything except a sleep problem.",
          },
        ],
      },
      {
        heading: "Keep a routine, just an older one",
        blocks: [
          {
            type: "p",
            text: "Six-year-olds still benefit from a fixed sequence; they just resent one that's obviously the same as their little sibling's. Shift it towards things they do themselves — laying out tomorrow's clothes, packing the bag, showering, reading — while keeping the order and the end point fixed.",
          },
          {
            type: "p",
            text: "Autonomy inside a fixed structure is the general principle for this age, at bedtime and most other places.",
          },
        ],
      },
      {
        heading: "Screens become the main battleground",
        blocks: [
          {
            type: "ul",
            items: [
              "Set a device curfew at a fixed clock time rather than negotiating each evening.",
              "Charge devices outside the bedroom overnight — it removes the whole category of problem, including the 11pm scroll you'd never know about.",
              "Games and videos with cliffhangers or social feedback are the hardest to stop; a natural stopping point rarely arrives on its own.",
              "Replace rather than just remove: a book, an audio story, or drawing gives the last half hour something to be.",
            ],
          },
        ],
      },
      {
        heading: "Keep reading aloud",
        blocks: [
          {
            type: "p",
            text: "This is the age when read-aloud usually stops, and it's worth keeping. A six- to nine-year-old can follow far richer stories by ear than they can read themselves, and the shared reading is often the moment when things from the school day come out — for exactly the same reason they came out at four.",
          },
          {
            type: "p",
            text: "Alternate: they read to you one night, you read to them the next. Keep school reading practice in the daytime so bedtime stays the enjoyable kind.",
          },
        ],
      },
      {
        heading: "Worries move in",
        blocks: [
          {
            type: "p",
            text: "Friendships, tests, and things that happened at lunch arrive at lights out in this age group. A short worry slot earlier in the evening works better than a long conversation at bedtime, and a quiet story afterwards is a more reliable way to close the day than talking it through.",
          },
        ],
      },
    ],
    related: [
      "bedtime-stories-for-5-year-olds",
      "screen-time-before-bed",
      "audiobooks-vs-reading-aloud",
    ],
    faqs: [
      {
        q: "How much sleep does a 6- to 9-year-old need?",
        a: "Generally around nine to twelve hours a night. Work backwards from the school alarm — and note that not getting enough usually shows up as irritability and poor concentration rather than as obvious tiredness.",
      },
      {
        q: "Should school-age children still have a bedtime routine?",
        a: "Yes, but an older one — shifted towards things they do themselves, like laying out clothes and packing their bag, while keeping the order and end point fixed. Autonomy inside a fixed structure is the principle.",
      },
      {
        q: "Should I still read aloud to a 7-year-old?",
        a: "Yes. Children this age follow far richer stories by ear than they can read alone, and shared reading is often when things from the school day come out. Alternate nights and keep reading practice in the daytime.",
      },
    ],
  },

  {
    slug: "when-only-one-parent-can-do-bedtime",
    title: "\"Only Mummy Can Do It\": Sharing Bedtime with a Partner",
    description:
      "When a child refuses bedtime with anyone but one parent — why it happens, and how to hand it over without a week of screaming.",
    category: "Routines",
    updated: "2026-07-28",
    readingMinutes: 4,
    intro: [
      "It's an exhausting and very common situation: one parent does bedtime every night, because every attempt by the other ends in forty minutes of crying and a handover anyway.",
      "It's rarely about preference in any deep sense. It's about the routine being learned as a specific performance by a specific person, and it can be unlearned.",
    ],
    sections: [
      {
        heading: "Why it happens",
        blocks: [
          {
            type: "p",
            text: "Bedtime is a vulnerable moment and children want the most predictable version of it. If one parent has done it nightly for a year, everything about them is part of the routine — their voice, their pace, the order they do things in, the exact words at the end.",
          },
          {
            type: "p",
            text: "The other parent isn't doing it wrong. They're doing it differently, which at 7:30pm is the same thing to a three-year-old.",
          },
        ],
      },
      {
        heading: "Make the routine transferable",
        blocks: [
          {
            type: "ol",
            items: [
              "Write the routine down — the actual order, the number of stories, the exact goodnight phrase. Most of it is invisible until someone tries to reproduce it.",
              "Have the incoming parent do it the same way at first, wording included. Personal touches can come later.",
              "Start with part of it — the bath, or the first story — with the usual parent still present, then swap the order of who does what.",
              "Move to the incoming parent doing all of it while the other is out of the house. Not upstairs. Out.",
            ],
          },
          {
            type: "p",
            text: "That last point matters more than any other. A child who knows the preferred parent is in the building will hold out for them, sometimes for a very long time.",
          },
        ],
      },
      {
        heading: "Don't rescue",
        blocks: [
          {
            type: "p",
            text: "If the usual parent appears halfway through a difficult handover, the lesson is that crying works and the next attempt is harder. Agree in advance that the evening belongs to whoever started it, short of something genuinely wrong.",
          },
          {
            type: "p",
            text: "Expect two or three bad nights and a real improvement by the end of the first week. It's usually faster than either parent fears.",
          },
        ],
      },
      {
        heading: "Give the new version something of its own",
        blocks: [
          {
            type: "p",
            text: "Once the handover is established, the second parent's bedtime doesn't have to be a copy. A different song, a different book they always read, a particular made-up character — something that only happens with them gives a child a reason to want that version rather than merely tolerate it.",
          },
        ],
      },
      {
        heading: "Then keep it shared",
        blocks: [
          {
            type: "p",
            text: "The pattern re-establishes itself quickly if one parent does it every night again. Alternating nights, or fixed nights each, keeps both versions familiar — which matters enormously the week one of you is ill, working late, or away.",
          },
          {
            type: "p",
            text: "A recorded story in each parent's voice is a useful bridge here too, especially for a child who has strong opinions about who reads.",
          },
        ],
      },
    ],
    related: [
      "bedtime-when-youre-away",
      "separation-anxiety-at-bedtime",
      "bedtime-routine-for-toddlers",
    ],
    faqs: [
      {
        q: "Why will my child only let one parent do bedtime?",
        a: "Because the routine has been learned as a specific performance by a specific person — voice, pace, order, and exact wording included. The other parent isn't doing it wrong, just differently, which at bedtime amounts to the same thing.",
      },
      {
        q: "How do we swap who does bedtime?",
        a: "Write the routine down and have the incoming parent reproduce it exactly at first, hand over one step at a time, and then have the usual parent leave the house rather than stay upstairs. Expect two or three hard nights.",
      },
      {
        q: "Should the usual parent step in if it goes badly?",
        a: "No — rescuing teaches that holding out works and makes the next attempt harder. Agree in advance that the evening belongs to whoever started it, short of something genuinely wrong.",
      },
    ],
  },

  {
    slug: "when-to-start-reading-to-a-baby",
    title: "When Should You Start Reading to a Baby?",
    description:
      "Reading to a newborn feels absurd and isn't. What babies actually get from books at each stage of the first year, and what to read.",
    category: "Ages",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "The honest answer is that you can start whenever you like, including in the first weeks, and that what a baby gets out of it changes completely over the first year.",
      "It also isn't really about the book. In the early months, reading aloud is a delivery mechanism for something else: a lot of language, in a warm voice, aimed directly at your baby.",
    ],
    sections: [
      {
        heading: "The first few months: it's about your voice",
        blocks: [
          {
            type: "p",
            text: "A newborn isn't following a story and can't see the illustrations clearly. What they are getting is a steady stream of speech directed at them, which is one of the most useful things for early language development — and reading aloud is an easy way to produce it when you've run out of things to narrate.",
          },
          {
            type: "p",
            text: "You can read anything at this stage. Your novel, the news, a recipe. The words are for you; the tone is for them.",
          },
        ],
      },
      {
        heading: "Around 3–6 months: high contrast and rhythm",
        blocks: [
          {
            type: "p",
            text: "Vision sharpens and babies start attending to books as objects. Simple, high-contrast images hold attention better than detailed illustrations, and rhythmic, repetitive text — rhymes, songs, chants — is more engaging than plot.",
          },
          {
            type: "p",
            text: "Expect very short sessions. A minute of interest is a success, and there's nothing to be gained from finishing anything.",
          },
        ],
      },
      {
        heading: "6–12 months: books are also for chewing",
        blocks: [
          {
            type: "ul",
            items: [
              "Board books and cloth books, because everything goes in the mouth.",
              "Flaps, textures, and mirrors — the physical interaction is the point at this age.",
              "Naming books: one clear object per page, and you say what it is.",
              "Expect page-grabbing, chewing, and turning three at a time. That's engagement, not disruption.",
            ],
          },
        ],
      },
      {
        heading: "Around a year: the first real back-and-forth",
        blocks: [
          {
            type: "p",
            text: "Pointing arrives, and with it the interaction that does the most for language: your baby points, you name it, they hear the word attached to the thing they were already interested in. Follow their attention rather than the text, and repeat words often — this is the pattern that builds vocabulary.",
          },
        ],
      },
      {
        heading: "Start the bedtime habit early",
        blocks: [
          {
            type: "p",
            text: "The other reason to begin before it makes obvious sense is the routine. A book in the same position every evening becomes a sleep cue long before your baby understands a word of it, and it's much easier to establish it early than to introduce it at two.",
          },
          {
            type: "p",
            text: "Keep it short, keep it last, and keep it the same. That's the whole method for the first year.",
          },
        ],
      },
    ],
    related: [
      "bedtime-stories-for-babies",
      "bedtime-stories-for-2-year-olds",
      "reading-aloud-and-vocabulary",
    ],
    faqs: [
      {
        q: "When should you start reading to a baby?",
        a: "Whenever you like, including the first weeks. Early on the book barely matters — what helps is a steady stream of language in a warm voice directed at your baby, and reading aloud is an easy way to produce it.",
      },
      {
        q: "What books are best for a 6-month-old?",
        a: "Board and cloth books with high-contrast images, textures, flaps, and one clear object per page. Everything goes in the mouth at this stage, so durability matters more than story.",
      },
      {
        q: "Does reading to a baby actually help?",
        a: "The strongest effect is on language exposure and the back-and-forth interaction around the book — following what your baby points at and naming it is the pattern that builds vocabulary.",
      },
    ],
  },

  {
    slug: "bedtime-stories-for-babies",
    title: "Bedtime Stories for Babies: Building the Routine Early",
    description:
      "What to read to a baby at bedtime, how long it should take, and why the story matters even before they understand any of it.",
    category: "Ages",
    updated: "2026-07-28",
    readingMinutes: 4,
    intro: [
      "A bedtime story for a baby isn't really a story. It's a signal — a fixed, recognizable event in a fixed position that tells a pre-verbal child what's about to happen.",
      "That makes it worth starting well before it feels like it's doing anything.",
    ],
    sections: [
      {
        heading: "Keep it very short",
        blocks: [
          {
            type: "p",
            text: "Two or three minutes is plenty in the first year. One short board book, or the same rhyme twice, in the same position every evening. Length adds nothing; consistency adds everything.",
          },
          {
            type: "p",
            text: "If your baby is fussing, stop. A bedtime story that gets forced is a worse sleep cue than no bedtime story.",
          },
        ],
      },
      {
        heading: "What to read",
        blocks: [
          {
            type: "ul",
            items: [
              "Rhythmic, repetitive text — the pattern is what a baby is tracking, not the meaning.",
              "Short board books with a clear image per page.",
              "Goodnight-shaped books, where the light goes down and things settle, work at this age for exactly the reason they work later.",
              "The same one, repeatedly. Familiarity is the active ingredient.",
            ],
          },
        ],
      },
      {
        heading: "How you read it matters more than what",
        blocks: [
          {
            type: "p",
            text: "Slower and quieter than daytime reading, with the lights already low. Babies read tone long before words, so the shift in your voice is doing most of the signalling. If you use a particular phrase at the end — the same goodnight line every night — that becomes recognizable surprisingly fast.",
          },
        ],
      },
      {
        heading: "Where it sits in the routine",
        blocks: [
          {
            type: "p",
            text: "Last, or very nearly. A common shape is feed, bath or wash, pajamas, book, song, into bed — so the book and the song are the final two markers before sleep. Once the order is set, keep it, including on holiday and at other people's houses.",
          },
          {
            type: "p",
            text: "Anything relating to feeding, safe sleep arrangements, or where your baby sleeps is a matter for your pediatrician's guidance rather than a routine article.",
          },
        ],
      },
      {
        heading: "It pays off later",
        blocks: [
          {
            type: "p",
            text: "The real return on a bedtime story at eight months arrives at two, when the routine is already established and the story is already the thing that ends the day. You're not teaching a baby to read. You're building the habit while it's still easy.",
          },
        ],
      },
    ],
    related: [
      "when-to-start-reading-to-a-baby",
      "lullabies-for-babies-and-toddlers",
      "bedtime-stories-for-2-year-olds",
    ],
    faqs: [
      {
        q: "How long should a bedtime story be for a baby?",
        a: "Two or three minutes — one short board book or the same rhyme twice, in the same position every evening. Consistency matters far more than length.",
      },
      {
        q: "What should I read to a baby at bedtime?",
        a: "Rhythmic, repetitive text and short board books with one clear image per page, read slower and quieter than in the daytime. Repeating the same book is a feature, not a problem.",
      },
      {
        q: "Is it worth reading to a baby who doesn't understand it?",
        a: "Yes, for two reasons: language exposure, and establishing the routine while it's easy. A book in a fixed position becomes a sleep cue long before a baby understands any of the words.",
      },
    ],
  },

  {
    slug: "raising-a-child-who-loves-reading",
    title: "How to Raise a Child Who Actually Likes Reading",
    description:
      "The habits that make a reader — and the well-meaning things that quietly put children off books.",
    category: "Reading",
    updated: "2026-07-28",
    readingMinutes: 6,
    intro: [
      "Almost every parent wants a child who reads for pleasure, and quite a lot of the standard advice works against it. Reading logs, levelled books, quizzes about what happened, and a bedtime story that turns into a phonics session all push in the same direction: books as work.",
      "The things that actually seem to produce readers are less structured than that, and mostly cheap.",
    ],
    sections: [
      {
        heading: "Let them choose, including badly",
        blocks: [
          {
            type: "p",
            text: "Children who pick their own books read more. That means tolerating the sticker book, the fourth reading of the same comic, the one about diggers, and the book that's far too easy for them — because choice is most of where the enjoyment comes from.",
          },
          {
            type: "p",
            text: "Re-reading in particular gets a bad reputation and deserves better. Fluency is built by volume, and volume is built by reading things that are comfortable.",
          },
        ],
      },
      {
        heading: "Keep books physically everywhere",
        blocks: [
          {
            type: "ul",
            items: [
              "A basket in the room you actually live in, not only in the bedroom.",
              "Covers facing out where possible — young children choose by cover.",
              "A few in the car, and a couple in the bag you take out.",
              "Books they're allowed to handle unsupervised, even if they get wrecked.",
            ],
          },
        ],
      },
      {
        heading: "Read aloud long after they can read",
        blocks: [
          {
            type: "p",
            text: "This is the single most reliably useful habit and the one most often dropped the moment a child starts decoding. Listening comprehension stays years ahead of reading ability, so reading aloud is where a child meets the stories, vocabulary, and sentence structures that make reading feel worth doing.",
          },
          {
            type: "p",
            text: "Keep it separate from practice. School reading is work; bedtime reading is pleasure. Mixing them is what turns books into homework.",
          },
        ],
      },
      {
        heading: "Stop testing",
        blocks: [
          {
            type: "p",
            text: "Comprehension questions after a story, corrections mid-sentence, and \"what does that word mean?\" all convert reading into an assessment. If you want conversation, offer your own reaction instead — \"I wouldn't have done that\" gets far more out of a child than \"why did he do that?\"",
          },
        ],
      },
      {
        heading: "Let them see you read",
        blocks: [
          {
            type: "p",
            text: "Children copy what adults visibly do. Reading on a phone is invisible as reading; a book, a magazine, or a newspaper in your hands isn't. It's a small thing and it's one of the few household variables that consistently shows up in the research on children's reading habits.",
          },
        ],
      },
      {
        heading: "Protect the pleasure above everything",
        blocks: [
          {
            type: "p",
            text: "Every decision about reading can be checked against one question: does this make books more enjoyable or less? Reward charts, minimum minutes, and levelled schemes usually make them less. A comfortable place, a story you both like, and no obligation to finish anything usually make them more.",
          },
          {
            type: "p",
            text: "That's the whole logic behind a calm bedtime story: it's the daily contact with books that costs a child nothing and gives them something.",
          },
        ],
      },
    ],
    related: [
      "why-picture-books-matter",
      "reading-aloud-and-vocabulary",
      "toddler-who-wont-sit-still-for-books",
    ],
    faqs: [
      {
        q: "How do I get my child to enjoy reading?",
        a: "Let them choose their own books including easy ones and re-reads, keep books physically within reach around the house, keep reading aloud after they can read, and stop asking comprehension questions. Choice and pleasure drive volume; volume drives fluency.",
      },
      {
        q: "Is re-reading the same book bad?",
        a: "No — it builds fluency and confidence. Reading a lot of comfortable material is more useful than struggling through harder books, and comfort is what keeps children coming back.",
      },
      {
        q: "Should I ask my child questions about what they read?",
        a: "Sparingly. Comprehension questions turn reading into an assessment. Offering your own reaction instead — what you liked, what you'd have done — usually gets more conversation and none of the pressure.",
      },
    ],
  },

  {
    slug: "reading-aloud-and-vocabulary",
    title: "What Reading Aloud Actually Does for Language",
    description:
      "Why books contain words conversation doesn't, how the talk around a book matters more than the text, and what that means for how you read.",
    category: "Reading",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "Reading aloud is recommended so universally that the reasons rarely get spelled out. They're worth knowing, because they change how you read — and they explain why a five-minute book can be worth more than an hour of ordinary chatting.",
      "None of this requires doing anything elaborate. It mostly requires talking around the book rather than just through it.",
    ],
    sections: [
      {
        heading: "Books contain words that conversation doesn't",
        blocks: [
          {
            type: "p",
            text: "Everyday talk with a small child is functional and repetitive — shoes, dinner, careful, wait. Even simple picture books reach for words that rarely come up at the kitchen table: enormous, shivering, delighted, meadow, ancient.",
          },
          {
            type: "p",
            text: "Because those words arrive inside a story with pictures, a child gets the meaning from context rather than a definition. That's why reading a book slightly above a child's own level is useful rather than pointless.",
          },
        ],
      },
      {
        heading: "The conversation matters more than the text",
        blocks: [
          {
            type: "p",
            text: "The back-and-forth around a book is where much of the value sits: your child points or comments, you respond, name things, and add a little. It's why a book that takes twenty minutes because of constant interruption is often a better session than one read cleanly in four.",
          },
          {
            type: "p",
            text: "Follow their attention rather than your own agenda. If they want to talk about the dog in the corner of the picture for two minutes, that's the session working.",
          },
        ],
      },
      {
        heading: "Practical things that help",
        blocks: [
          {
            type: "ul",
            items: [
              "Repeat new words rather than explaining them — hearing a word several times in context does more than a definition.",
              "Expand what they say: \"dog!\" becomes \"yes, a big brown dog, running.\"",
              "Ask open questions occasionally rather than yes/no ones — but sparingly at bedtime.",
              "Read the same book many times. Repetition is where words move from recognized to used.",
            ],
          },
        ],
      },
      {
        heading: "Story structure is its own skill",
        blocks: [
          {
            type: "p",
            text: "Alongside vocabulary, stories teach the shape of a narrative: first, then, because, in the end. That shape underpins a child's ability to explain what happened at nursery, and later to write. Children who are read to a lot pick it up without ever being taught it.",
          },
        ],
      },
      {
        heading: "And it survives at bedtime",
        blocks: [
          {
            type: "p",
            text: "One caveat on all of the above: at lights out, the interactive version works against sleep. Do the conversational reading during the day, and let the last story be quiet and uninterrupted. Both versions matter — they just belong at different hours.",
          },
        ],
      },
    ],
    related: [
      "read-aloud-to-toddlers",
      "raising-a-child-who-loves-reading",
      "why-picture-books-matter",
    ],
    faqs: [
      {
        q: "How does reading aloud help language development?",
        a: "Books use words that everyday conversation rarely does, delivered in a context with pictures so children can infer meaning. The back-and-forth talk around the book adds as much as the text itself.",
      },
      {
        q: "Should I explain words my child doesn't know?",
        a: "Usually just repeat them in context rather than defining them. Hearing a word several times inside a story does more than an explanation, which is also why re-reading the same book matters.",
      },
      {
        q: "Is it bad if my child interrupts the story constantly?",
        a: "During the day, no — the conversation around the book is a large part of its value. At bedtime, keep the last story quiet and uninterrupted, since interaction works against settling.",
      },
    ],
  },

  {
    slug: "wordless-picture-books",
    title: "Wordless Picture Books: How to Read a Book with No Words",
    description:
      "Books with no text feel like a trick until you've used one. Why they're unusually good for language, and how to actually read one aloud.",
    category: "Reading",
    updated: "2026-07-28",
    readingMinutes: 4,
    intro: [
      "The first reaction to a wordless picture book is usually that you've been sold an incomplete product. The second, after using one a few times, is that they're some of the most useful books on the shelf.",
      "They just require a different job from the adult.",
    ],
    sections: [
      {
        heading: "Why they work",
        blocks: [
          {
            type: "p",
            text: "With no text to read, the child has to do the narrating — which means producing language rather than receiving it. A wordless book turns a listening activity into a speaking one, and children generally talk far more during them than during a conventional story.",
          },
          {
            type: "p",
            text: "They're also unusually democratic: a two-year-old and a six-year-old can read the same wordless book and get completely different things from it, and a child who can't decode a word yet can be the one telling the story.",
          },
        ],
      },
      {
        heading: "How to read one",
        blocks: [
          {
            type: "ol",
            items: [
              "Look through the whole book once without saying much.",
              "Start narrating yourself the first time, so they hear what the job sounds like.",
              "The next time, ask what's happening and let them lead. Resist correcting their version.",
              "Ask about feelings and motives — \"why do you think he's doing that?\" — which is where the good conversations come from.",
              "Accept that the story will be different every reading. That's the point.",
            ],
          },
        ],
      },
      {
        heading: "Where they're especially useful",
        blocks: [
          {
            type: "ul",
            items: [
              "Bilingual households — the same book works in either language, with no translation problem.",
              "Children who are reluctant to talk, or slower to develop expressive language.",
              "Mixed-age siblings reading together.",
              "Grandparents and caregivers who don't share the child's strongest language.",
            ],
          },
        ],
      },
      {
        heading: "Not usually a bedtime book",
        blocks: [
          {
            type: "p",
            text: "The one caution: a wordless book requires your child to do active work, which is stimulating rather than settling. They're excellent at four in the afternoon and a poor choice as the last story of the night.",
          },
          {
            type: "p",
            text: "Save the participation for daylight, and let bedtime be the version where they only have to listen.",
          },
        ],
      },
    ],
    related: [
      "bedtime-stories-in-two-languages",
      "reading-aloud-and-vocabulary",
      "choosing-bedtime-books",
    ],
    faqs: [
      {
        q: "What is the point of wordless picture books?",
        a: "They shift the narrating job to the child, so reading becomes speaking practice rather than listening. Children typically talk far more during a wordless book than a conventional one.",
      },
      {
        q: "How do you read a wordless picture book to a child?",
        a: "Look through it once quietly, narrate it yourself the first time so they hear the job, then let them lead on later readings without correcting their version. Ask about characters' feelings and motives.",
      },
      {
        q: "Are wordless books good at bedtime?",
        a: "Not really — they require active participation, which stimulates rather than settles. They're excellent during the day and a poor choice for the last story of the night.",
      },
    ],
  },

  {
    slug: "rhyming-books-and-language",
    title: "Why Rhyming Books Matter More Than They Look",
    description:
      "Rhyme and repetition do specific work for early literacy. What they're doing, and why the book you're sick of is the one worth keeping.",
    category: "Reading",
    updated: "2026-07-28",
    readingMinutes: 4,
    intro: [
      "Rhyming picture books tend to get treated as the fluffy end of the shelf — fun, a bit silly, not serious reading. They're doing more than they look.",
      "The thing rhyme trains is the ability to hear that words are made of smaller sounds, which is the foundation everything else in early reading is built on.",
    ],
    sections: [
      {
        heading: "What rhyme is actually training",
        blocks: [
          {
            type: "p",
            text: "To notice that cat and hat rhyme, a child has to hear the word split into parts. That awareness of sound within words develops through play, songs, and rhyme long before letters mean anything, and it's what makes learning to decode possible later.",
          },
          {
            type: "p",
            text: "Nursery rhymes, silly songs, and clapping games are doing the same job. None of it needs to be framed as learning.",
          },
        ],
      },
      {
        heading: "Prediction is the other half",
        blocks: [
          {
            type: "p",
            text: "A strong rhyme lets a child guess the next word — and guessing correctly is enormously satisfying at three. It's also a small act of reading: using the structure of language to anticipate what comes next.",
          },
          {
            type: "p",
            text: "Leaving the last word of a couplet for them to supply is the simplest, most effective read-aloud trick there is.",
          },
        ],
      },
      {
        heading: "How to read rhyme well",
        blocks: [
          {
            type: "ul",
            items: [
              "Trust the meter. Rhyming text has a beat; reading it flat kills it, and reading it slightly rhythmically carries it.",
              "Slow down rather than speeding up, especially at bedtime — rhyme naturally pulls you faster.",
              "Pause before the rhyming word so they can jump in.",
              "Read the same one repeatedly. Rhyme is built for memorization and memorization is where the benefit lands.",
            ],
          },
        ],
      },
      {
        heading: "The one you can no longer stand",
        blocks: [
          {
            type: "p",
            text: "The book your child has memorized and demands nightly is the one doing the most work. A child \"reading\" it back to you from memory, finger on the page, is doing something genuinely useful — matching remembered language to print, which is one of the early steps into actual reading.",
          },
          {
            type: "p",
            text: "Keep it. Add new books alongside rather than trying to replace it.",
          },
        ],
      },
    ],
    related: [
      "same-story-every-night",
      "lullabies-for-babies-and-toddlers",
      "reading-aloud-and-vocabulary",
    ],
    faqs: [
      {
        q: "Why are rhyming books good for children?",
        a: "Rhyme trains children to hear that words are made of smaller sounds, which is the foundation for learning to decode later. It also lets them predict the next word, which is a small act of reading in itself.",
      },
      {
        q: "How should I read a rhyming book aloud?",
        a: "Follow the meter rather than reading flat, slow down rather than speeding up, and pause before the rhyming word so your child can supply it.",
      },
      {
        q: "Is it bad that my child has memorized a book?",
        a: "The opposite. A child reciting a book with a finger on the page is matching remembered language to print, which is one of the earliest steps into reading. Add new books alongside it rather than replacing it.",
      },
    ],
  },

  {
    slug: "library-visits-with-toddlers",
    title: "Taking a Toddler to the Library",
    description:
      "How to make library visits work with a small child, how many books to take, and what to do about the ones that come back destroyed.",
    category: "Reading",
    updated: "2026-07-28",
    readingMinutes: 4,
    intro: [
      "The library is the cheapest way to put a large number of books in front of a child, and the first few visits with a toddler are often chaotic enough that families don't go back.",
      "It gets much easier with a bit of planning and considerably lower expectations.",
    ],
    sections: [
      {
        heading: "Go at the right time, and go short",
        blocks: [
          {
            type: "p",
            text: "Fifteen minutes after a nap and a snack beats an hour at four in the afternoon. Plan a short visit with a clear end — pick books, one story on the floor, home — rather than an open-ended outing that ends in a meltdown near the returns desk.",
          },
          {
            type: "p",
            text: "Frequent short visits also build the habit better than occasional long ones. If the library is on the way home from something, use it.",
          },
        ],
      },
      {
        heading: "Let them choose most of them",
        blocks: [
          {
            type: "p",
            text: "The library's great advantage is that a bad choice costs nothing. Let your child pick whatever they want, including books that are far too old, far too young, or entirely about tractors — and add two or three of your own choosing to the pile.",
          },
          {
            type: "p",
            text: "A useful ratio: they pick five, you pick three. You'll usually find at least one of yours becomes a favorite, and none of the failures matter.",
          },
        ],
      },
      {
        heading: "Practicalities that help",
        blocks: [
          {
            type: "ul",
            items: [
              "Take a bag you can carry with one arm free.",
              "Set a number before you go in, so the leaving isn't a negotiation.",
              "Keep library books in one specific place at home — a single shelf or basket — or you will spend the due date searching the house.",
              "Find out about story sessions; many libraries run them free, and they're a good introduction to being read to in a group.",
              "Ask about the children's librarian. Their recommendations are usually better than any list online.",
            ],
          },
        ],
      },
      {
        heading: "About the damage",
        blocks: [
          {
            type: "p",
            text: "Some libraries are relaxed about ordinary wear on children's books and some aren't. Ask, keep the borrowed books away from the toddler's unsupervised pile, and be honest when something gets chewed — most libraries would rather have a family who visits than a pristine copy of a board book.",
          },
        ],
      },
      {
        heading: "Use it to test before you buy",
        blocks: [
          {
            type: "p",
            text: "The most practical use of a library for a small child is as a filter. Borrow widely, notice which two get requested nightly, and buy those. It's a much better way to build a home collection than choosing from covers in a shop.",
          },
        ],
      },
    ],
    related: [
      "building-a-home-library",
      "choosing-bedtime-books",
      "raising-a-child-who-loves-reading",
    ],
    faqs: [
      {
        q: "How do I take a toddler to the library without it being chaos?",
        a: "Go for fifteen minutes after a nap and a snack, with a clear shape — pick books, one story, home — and set the number of books before you go in so leaving isn't a negotiation.",
      },
      {
        q: "How many library books should we borrow?",
        a: "Decide a number in advance. A ratio that works well is your child picking five and you picking three — bad choices cost nothing, and one of yours often becomes a favorite.",
      },
      {
        q: "What if my child damages a library book?",
        a: "Ask your library about their policy, keep borrowed books separate from the ones your child handles unsupervised, and be upfront if something gets chewed. Most would rather keep the family visiting.",
      },
    ],
  },

  {
    slug: "nonfiction-for-preschoolers",
    title: "Nonfiction for Preschoolers: Books About Real Things",
    description:
      "Diggers, volcanoes, sharks, and the human body. Why fact books hook children that stories don't, and how to use them at bedtime.",
    category: "Reading",
    updated: "2026-07-28",
    readingMinutes: 4,
    intro: [
      "A significant number of children — often the ones described as not liking books — turn out to like books about real things enormously. They just weren't offered any.",
      "Nonfiction is underused with the under-sixes, and it solves a specific problem better than any story can.",
    ],
    sections: [
      {
        heading: "Why it works for some children",
        blocks: [
          {
            type: "p",
            text: "Fact books don't require you to sit through a plot to get to the good bit, and they can be entered anywhere. A child who won't sit for a story will often spend fifteen minutes on a cross-section of a digger, because every page is immediately about the thing they care about.",
          },
          {
            type: "p",
            text: "They also match how preschool obsessions work. When a child is deep in dinosaurs, feeding that obsession is the fastest route to a lot of reading.",
          },
        ],
      },
      {
        heading: "It builds different vocabulary",
        blocks: [
          {
            type: "p",
            text: "Nonfiction brings technical and specific words that stories rarely reach for — habitat, excavate, hibernate, eruption. Children are entirely capable of absorbing precise words when they're attached to something they're interested in, and often use them with startling accuracy.",
          },
        ],
      },
      {
        heading: "How to read it",
        blocks: [
          {
            type: "ul",
            items: [
              "Don't read cover to cover. Follow what they point at, skip what they don't care about.",
              "Read the captions and labels — that's often where the interesting bits are.",
              "It's fine to say you don't know, and better to look it up together.",
              "Let them return to the same three pages indefinitely.",
            ],
          },
        ],
      },
      {
        heading: "At bedtime, with a caveat",
        blocks: [
          {
            type: "p",
            text: "Fact books tend to generate questions, and questions generate a wide-awake child. They're excellent daytime and quiet-time reading and a risky choice for the last story of the night.",
          },
          {
            type: "p",
            text: "The workable compromise is the one families use for chapter books: nonfiction earlier in the routine, and a calm story last so the day still ends quietly.",
          },
        ],
      },
    ],
    related: [
      "toddler-who-wont-sit-still-for-books",
      "choosing-bedtime-books",
      "raising-a-child-who-loves-reading",
    ],
    faqs: [
      {
        q: "Should preschoolers read nonfiction?",
        a: "Yes, and it's underused. Fact books can be entered at any page and feed a child's current obsession directly, which often hooks children who won't sit through a story.",
      },
      {
        q: "How do you read a nonfiction book to a young child?",
        a: "Don't read it cover to cover. Follow what they point at, read the captions and labels, skip freely, and let them return to the same few pages as often as they want.",
      },
      {
        q: "Are fact books good at bedtime?",
        a: "They tend to generate questions, which wakes children up. Read them earlier in the routine and keep a calm story for last.",
      },
    ],
  },

  {
    slug: "bedtime-charts-and-rewards",
    title: "Do Bedtime Charts and Reward Systems Work?",
    description:
      "Sticker charts, reward jars, and bedtime passes — when they help, why they usually stop working, and what to use instead.",
    category: "Routines",
    updated: "2026-07-28",
    readingMinutes: 5,
    intro: [
      "Reward charts are the standard suggestion for a bedtime that's gone wrong, and they work often enough to stay popular and fail often enough to frustrate everyone who tries one.",
      "They're a specific tool for a specific job. The trouble comes from using them for problems they can't solve.",
    ],
    sections: [
      {
        heading: "What they're good for",
        blocks: [
          {
            type: "p",
            text: "Charts work on things a child can actually control and chooses not to do: staying in bed, going up when asked, brushing teeth without a fight, staying quiet after lights out. They give an abstract expectation a visible shape, which is useful for three- to six-year-olds.",
          },
          {
            type: "p",
            text: "They do not work on things outside a child's control. You cannot reward a child into falling asleep, into not being frightened, or into not waking at 3am — and a chart that asks for those creates failure and resentment.",
          },
        ],
      },
      {
        heading: "How to run one that lasts",
        blocks: [
          {
            type: "ol",
            items: [
              "Pick exactly one behavior. Charts with five targets fail immediately.",
              "Make the first win easy and quick — same-day or next-morning reward, not a week away.",
              "Reward with attention rather than objects where you can: choosing breakfast, an extra story, a game with you.",
              "Never remove earned stickers. Taking away what's been won turns the chart into a punishment and kills it.",
              "Plan the ending. Fade it out after a couple of successful weeks rather than running it forever.",
            ],
          },
        ],
      },
      {
        heading: "Why they stop working",
        blocks: [
          {
            type: "p",
            text: "Novelty is doing a lot of the early work, and it wears off. Charts also stop working when the target is too vague, when the reward is too distant, or when the underlying issue isn't motivation at all — an overtired child at a bedtime that's forty minutes too late will not be fixed by stickers.",
          },
          {
            type: "p",
            text: "If a chart isn't working after two weeks, the problem is usually the schedule or the routine, not the child's willingness.",
          },
        ],
      },
      {
        heading: "The bedtime pass",
        blocks: [
          {
            type: "p",
            text: "A variation that works well for repeated getting-up: one card, handed over at bedtime, redeemable for a single legitimate request — one drink, one hug, one question. Once it's spent, that's the end. Some families let an unused pass be traded for a small privilege in the morning.",
          },
          {
            type: "p",
            text: "It works because it gives a child agency over something they were going to take anyway, and it caps it at one.",
          },
        ],
      },
      {
        heading: "What tends to work better",
        blocks: [
          {
            type: "p",
            text: "For most bedtime problems, the higher-yield changes are unglamorous: an earlier bedtime, an unchanging sequence, a fixed number of stories decided in advance, and enough undivided attention earlier in the evening that lights out isn't the only place to get it.",
          },
          {
            type: "p",
            text: "A chart on top of those can help. A chart instead of them rarely does.",
          },
        ],
      },
    ],
    related: [
      "toddler-wont-stay-in-bed",
      "bedtime-routine-for-toddlers",
      "what-time-should-a-toddler-go-to-bed",
    ],
    faqs: [
      {
        q: "Do sticker charts work for bedtime?",
        a: "They work for behaviors a child can control — staying in bed, going up when asked, quiet after lights out. They don't work for falling asleep, night waking, or fear, which aren't matters of choice.",
      },
      {
        q: "Why did our reward chart stop working?",
        a: "Usually novelty wearing off, a target that's too vague, a reward that's too far away, or an underlying schedule problem. If it hasn't worked in two weeks, look at bedtime timing and routine rather than motivation.",
      },
      {
        q: "What is a bedtime pass?",
        a: "One card handed over at lights out, redeemable for a single request — a drink, a hug, a question. Once spent, that's the end. It gives a child agency over something they'd take anyway while capping it at one.",
      },
    ],
  },

  {
    slug: "books-that-reflect-your-family",
    title: "Finding Books That Look Like Your Family",
    description:
      "Why children need to see themselves in stories and to see people unlike them, and how to check what's actually on your shelf.",
    category: "Reading",
    updated: "2026-07-28",
    readingMinutes: 4,
    intro: [
      "Children pick up an enormous amount from who gets to be the main character. A child who never sees a family like theirs in a book learns something from that, and so does a child who only ever sees families like their own.",
      "It's worth an occasional audit, which takes about ten minutes.",
    ],
    sections: [
      {
        heading: "Do the shelf audit",
        blocks: [
          {
            type: "p",
            text: "Pull out twenty books your child actually asks for and look at the main characters. Who is the hero? Which families appear? Who is in the background and who drives the story? Most collections come out narrower than their owners expect, because they were assembled one gift at a time.",
          },
          {
            type: "p",
            text: "This isn't about removing anything. It's about noticing gaps so the next few additions can fill them.",
          },
        ],
      },
      {
        heading: "Two different jobs",
        blocks: [
          {
            type: "ul",
            items: [
              "Books where your child recognizes themselves — their family shape, skin, language, neighborhood, disability, religion. These say: people like you are worth writing about.",
              "Books about people unlike them, told as ordinary life rather than as a lesson. These build the assumption that other people's lives are normal too.",
              "Both matter, and a collection that does only one of them is doing half the job.",
            ],
          },
        ],
      },
      {
        heading: "Prefer ordinary stories over issue books",
        blocks: [
          {
            type: "p",
            text: "A book where a child in a wheelchair goes to a birthday party usually does more than a book about being in a wheelchair. Characters whose difference isn't the plot normalize far more effectively than stories that explain, and they're better bedtime reading because they're just stories.",
          },
        ],
      },
      {
        heading: "Where to look",
        blocks: [
          {
            type: "p",
            text: "Children's librarians are the best resource available and are usually delighted to be asked. Independent bookshops, school and nursery collections, and other families' recommendations tend to surface better options than bestseller lists, which move slowly.",
          },
          {
            type: "p",
            text: "If your family speaks more than one language, books in both are worth the effort — and wordless books sidestep the problem entirely.",
          },
        ],
      },
    ],
    related: [
      "bedtime-stories-in-two-languages",
      "choosing-bedtime-books",
      "building-a-home-library",
    ],
    faqs: [
      {
        q: "Why does representation in children's books matter?",
        a: "Children learn from who gets to be the main character. Seeing families like their own tells them people like them are worth writing about; seeing families unlike their own builds the assumption that other lives are ordinary too.",
      },
      {
        q: "How do I check my child's bookshelf?",
        a: "Pull out twenty books they actually ask for and look at who the main characters are and which families appear. Most collections turn out narrower than expected because they were assembled one gift at a time.",
      },
      {
        q: "Are 'issue' books the best way to introduce difference?",
        a: "Usually not. A story where a character's difference isn't the plot normalizes more effectively than one that explains it — and it makes better bedtime reading, because it's simply a story.",
      },
    ],
  },

  {
    slug: "bedtime-gratitude-and-goodnight-rituals",
    title: "Goodnight Rituals: The Last Two Minutes of the Day",
    description:
      "The small fixed ending after the story — a phrase, a song, three good things — and why it does more work than the rest of the routine.",
    category: "Routines",
    updated: "2026-07-28",
    readingMinutes: 4,
    intro: [
      "Most bedtime advice is about the twenty minutes of routine. The part that children remember, and the part that most reliably ends the day, is usually the last two minutes after the book closes.",
      "It's also the cheapest part to get right, because it doesn't depend on time, energy, or anyone being in a good mood.",
    ],
    sections: [
      {
        heading: "Why the ending matters disproportionately",
        blocks: [
          {
            type: "p",
            text: "A fixed ending gives the routine a full stop. Without one, bedtime just tails off and every night has to be renegotiated about when exactly it's finished. With one, there's an unambiguous moment where the day is over.",
          },
          {
            type: "p",
            text: "It's also portable in a way the rest of the routine isn't. The same words work in a hotel room, at a grandparent's house, on a night that ran ninety minutes late, and with a different adult doing bedtime.",
          },
        ],
      },
      {
        heading: "What to use",
        blocks: [
          {
            type: "ul",
            items: [
              "The same short phrase, said the same way — many families have one they can't remember choosing.",
              "One song, sung badly and identically every night.",
              "Three good things from the day, one each. Keep it fast and don't let it become a debrief.",
              "A fixed physical ritual: a specific tuck, a kiss on the same spot, a hand squeeze.",
              "Naming who's nearby and what happens next: \"I'll be in the kitchen, and I'll see you in the morning.\"",
            ],
          },
        ],
      },
      {
        heading: "Keep it very short",
        blocks: [
          {
            type: "p",
            text: "The failure mode is expansion. A ritual that grows to eight minutes becomes another thing to negotiate, and a child will always find one more item to add. Two minutes, the same every night, is the version that survives.",
          },
          {
            type: "p",
            text: "Say it the same way even when you're irritated, which is most of the value — a consistent ending on a bad night is worth more than a lovely one on a good night.",
          },
        ],
      },
      {
        heading: "The good-things version, briefly",
        blocks: [
          {
            type: "p",
            text: "Naming a couple of good things from the day is a nice habit for the three-and-up age group, and it's worth capping. Two things each, no follow-up questions, no problem-solving. If something difficult comes up, note it warmly and put it on tomorrow's list rather than opening it at 7:45pm.",
          },
        ],
      },
      {
        heading: "Then leave",
        blocks: [
          {
            type: "p",
            text: "The ritual's job is to be the last thing. If it's followed by three more requests, an extra song, and a negotiation about the door, it isn't functioning as an ending. Say your line, and go — the same way, every night.",
          },
        ],
      },
    ],
    related: [
      "bedtime-routine-for-toddlers",
      "separation-anxiety-at-bedtime",
      "toddler-wont-stay-in-bed",
    ],
    faqs: [
      {
        q: "What is a good goodnight ritual?",
        a: "Something short and fixed: the same phrase, one song, a specific tuck, or naming two good things from the day. Two minutes, identical every night, including on the nights you're irritated.",
      },
      {
        q: "Why does the end of the bedtime routine matter so much?",
        a: "It gives the routine a full stop, so there's an unambiguous moment when the day is over rather than a tailing-off that gets renegotiated nightly. It's also portable to hotels, grandparents' houses, and late nights.",
      },
      {
        q: "Should we talk about the day at bedtime?",
        a: "Briefly — two good things each, no follow-up questions. If something difficult surfaces, acknowledge it warmly and put it on tomorrow's list rather than opening a conversation at lights out.",
      },
    ],
  },

];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

/**
 * Category order on the hub. Explicit rather than derived so a new guide
 * can't silently reorder the page by being added in the wrong place.
 */
export const GUIDE_CATEGORIES = [
  "Routines",
  "Sleep",
  "Reading",
  "Bedtime stories",
  "Ages",
  "Screen time",
] as const;

/** Hub sections. Anything with an unlisted category would vanish, so the
 * leftovers are appended rather than dropped. */
export function guidesByCategory(): { category: string; guides: Guide[] }[] {
  const seen = new Set<string>(GUIDE_CATEGORIES);
  const extras = [...new Set(GUIDES.map((g) => g.category))].filter(
    (c) => !seen.has(c),
  );
  return [...GUIDE_CATEGORIES, ...extras]
    .map((category) => ({
      category,
      guides: GUIDES.filter((g) => g.category === category),
    }))
    .filter((section) => section.guides.length > 0);
}

/** `#routines`, `#bedtime-stories` — the hub's in-page anchors. */
export function categoryAnchor(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

/**
 * The "keep reading" links. Starts with the guide's hand-picked `related`,
 * then tops up from the same category so every guide — including ones nobody
 * remembered to link to — ends with a few outbound internal links.
 */
export function relatedGuides(guide: Guide, limit = 4): Guide[] {
  const picked = guide.related
    .map(getGuide)
    .filter((g): g is Guide => Boolean(g));
  const taken = new Set([guide.slug, ...picked.map((g) => g.slug)]);
  const filler = GUIDES.filter(
    (g) => g.category === guide.category && !taken.has(g.slug),
  );
  return [...picked, ...filler].slice(0, limit);
}

/** "2026-07-27" → "July 27, 2026" — matches the legal pages' visible format. */
export function formatGuideDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
