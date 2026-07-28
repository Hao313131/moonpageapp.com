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
            text: "MoonPage is built entirely around that last stretch: original illustrated stories written to end the day quietly, read by a narrator or in your own recorded voice, with no ads and no login to break the mood.",
          },
        ],
      },
    ],
    related: ["same-story-every-night", "read-aloud-to-toddlers"],
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
            text: "If you're building a routine around this, MoonPage's stories are written for read-aloud pacing at ages 2+ — short sentences, one calm idea per page — and can be read by you, by a professional narrator, or in your own recorded voice.",
          },
        ],
      },
    ],
    related: ["same-story-every-night", "bedtime-routine-for-toddlers"],
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
            text: "Some families sing; some read; plenty do both, story then song. MoonPage covers the story half — original illustrated bedtime stories, narrated or recorded in your own voice — and the song at the end is yours.",
          },
        ],
      },
    ],
    related: ["bedtime-routine-for-toddlers", "toddler-wont-stay-in-bed"],
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
        heading: "The third option",
        blocks: [
          {
            type: "p",
            text: "There's a middle version that gets overlooked: your voice, recorded. It has the familiarity of you and the repeatability of audio, and for a child whose parent travels or works nights it's often better than either alone. MoonPage is built around exactly this — professional narration, device read-aloud, or your own recorded voice on any story, all offline.",
          },
        ],
      },
    ],
    related: ["screen-time-before-bed", "bedtime-when-youre-away"],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
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
