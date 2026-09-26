/**
 * Self-contained, front-loaded answers for the hub (landing) pages.
 *
 * Why: the hub pages are the site's highest-priority landing pages (sitemap
 * priority 0.9) and carry the head terms. Each already has a descriptive
 * intro, but a descriptive intro is not an *answer* — AI Mode and featured
 * snippets extract a 40–60 word passage that stands on its own, answers the
 * query in its first sentence, and needs no surrounding context. This is the
 * same treatment the guides get from `GUIDE_SUMMARIES`, applied to the pages
 * that matter most.
 *
 * Rules for every entry:
 *   - 40–60 words, one paragraph, no lists.
 *   - First sentence answers the question directly (no "In this article…").
 *   - General parenting information only — never clinical claims or invented
 *     statistics. Anything health-adjacent points back to a professional.
 *
 * Keyed by route path so `HubLead` can look it up with the same string the
 * page already passes to `hubJsonLd`.
 */
export const HUB_SUMMARIES: Record<string, string> = {
  "/bedtime-stories":
    "Bedtime stories for kids are short, gentle tales read at the end of the day to help a child wind down and fall asleep. MoonPage collects original illustrated stories for ages 2 and up — narrated aloud or read in a parent's own voice — so tonight's tale is ready in under a minute.",
  "/toddler-bedtime-stories":
    "Toddler bedtime stories are short, simple tales with one clear idea, read at the end of the day to help a 2- to 3-year-old settle. MoonPage's toddler shelf keeps the plots gentle and the endings calm, with picture books a toddler can follow just by looking — narrated or in your own voice.",
  "/preschool-bedtime-stories":
    "Preschool bedtime stories suit ages 3 to 5: slightly longer plots, a little more humour, and a clear, comforting ending. MoonPage's preschool shelf is written to be read aloud in one sitting, with pictures that carry the story for a child who is starting to follow along.",
  "/read-aloud-bedtime-stories":
    "Read-aloud bedtime stories are written to be spoken, not just seen: rhythmic text, a natural pause on every page, and a pace that slows toward the end. MoonPage's read-aloud shelf can be narrated by a professional or played in a parent's own recorded voice.",
  "/bedtime-stories-by-age":
    "Which bedtime story suits which age depends on attention span rather than reading level. As a rough guide, babies and one-year-olds do best with very short, rhythmic books; toddlers with one clear idea; preschoolers with a real plot; and school-age children with longer, chapter-like tales.",
  "/cozy-bedtime-stories":
    "Cozy bedtime stories are deliberately low-stimulation: warm, quiet, and free of scares or cliffhangers, so they settle a child rather than wind them up. MoonPage's cozy shelf favours soft illustrations and calm endings, and works well as the last story before lights out.",
  "/lullaby-bedtime-stories":
    "Lullaby bedtime stories are the sleepiest kind: short, musical, and repetitive, closer to a song than a plot. They suit babies and young toddlers, and they work best as the final step of a routine — the same few gentle stories, in the same order, every night.",
  "/bedtime-stories-app":
    "MoonPage is a bedtime stories app for kids ages 2 and up. It holds original illustrated picture books that can be read by a professional narrator or recorded in a parent's own voice, works offline, and needs no account or login. Some stories are free; the full library needs Premium.",
  "/picture-books-for-kids":
    "A picture book for kids pairs a short text with illustrations that carry half the story, so a child can follow the pictures before they can read the words. For bedtime, the best ones have a single clear idea, warm art, and an ending that closes the day.",
  "/short-bedtime-stories":
    "A short bedtime story is one you can finish in about five minutes — long enough to mark the end of the day, short enough to actually happen on a hard night. MoonPage keeps a shelf of them for when bedtime is running late or a child is already fading.",
  "/free-bedtime-stories":
    "Some MoonPage stories are free to read right away, with no account or login. The free selection spans several themes, so you can try the app tonight before deciding. The full library — every story, with narration and own-voice recording — is unlocked with MoonPage Premium.",
  "/sleep-stories-for-kids":
    "Sleep stories for kids are written for one purpose: to help a child fall asleep. They are slow, gentle, and deliberately uneventful, with a rhythm that quietens toward the end. MoonPage's sleep shelf is made to be played or read as the last thing before sleep.",
  "/baby-bedtime-stories":
    "Baby bedtime stories are the simplest kind: very short, rhythmic, and repetitive, often more song than story. What matters at this age is the sound of a familiar voice and the same small ritual each night, not the plot — so the same two or three books on repeat work perfectly.",
  "/bedtime-routine-chart":
    "A bedtime routine chart turns the nightly sequence into a picture checklist a child can follow themselves — bath, pyjamas, teeth, story, lights out. The chart does not change the routine; it hands the running of it to the child, which is what reduces the nightly negotiation.",
  "/printable-bedtime-stories":
    "Printable bedtime stories are prompts and routine sheets you print once and keep beside the bed. This page gives you two free ones: a six-step routine chart a child ticks themselves, and ten story-starter cards to cut out. Nothing to sign up for, nothing to download.",
  "/bedtime-stories-in-your-voice":
    "MoonPage lets a parent record their own voice reading a story, so a child can hear a familiar voice even when you cannot be there — on a night shift, a work trip, or at a grandparent's house. Recordings play in the app alongside the professional narration.",
  "/bedtime-stories-for-anxious-kids":
    "Bedtime can be the hardest part of the day for an anxious child, when the dark and the quiet leave room for worry. The stories that help are calm, predictable, and reassuring, with no peril and a safe ending — plus a routine that stays exactly the same each night.",
  "/offline-bedtime-stories":
    "Offline bedtime stories play without a connection — on a flight, in the car, or anywhere the signal drops. MoonPage stories can be read or played once downloaded, so bedtime does not depend on wifi, and there is no ad or loading screen between a tired child and their story.",
  "/bedtime-stories-for-siblings":
    "Bedtime stories for siblings have to work for two children at once, often of different ages. The trick is a story with a simple enough thread for the youngest and enough wit for the oldest, read together — so sharing a room becomes the ritual rather than the argument.",
  "/winter-bedtime-stories":
    "Winter bedtime stories lean into the season: snow, hibernation, warm burrows, and long dark evenings. They suit the months when bedtime arrives before the light fades, and they give a child a story that makes the dark feel cozy rather than something to fear.",
  "/goodnight-bedtime-stories":
    "Goodnight bedtime stories end with the day being closed — a last goodnight, a light out, a settled child. The goodnight ritual matters more than the plot: the same short ending every night is what tells a child that sleep is next, and that the day is safely over.",
  "/bedtime-story-ideas":
    "When you want to make up a bedtime story instead of reading one, keep it simple: a character your child knows, one small problem, and a calm ending. Repetition helps — the same opening line every night, and a gentle resolution rather than a cliffhanger before sleep.",
};
