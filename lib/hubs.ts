/**
 * The keyword hub registry — the single source of truth for the site's
 * top-level landing pages.
 *
 * Why this file exists: the hub list used to be hand-maintained in three
 * separate places (the footer's "Stories" column, the HTML site map page, and
 * the llms.txt generator). Two of the three silently fell behind, so the two
 * newest hubs — `/goodnight-bedtime-stories` and `/bedtime-story-ideas` — ended
 * up with 2 and 6 inbound internal links while every sibling hub had 161. A
 * missing entry here is now a missing entry everywhere, which is loud instead
 * of silent.
 *
 * Adding a hub is a one-line change to this array (plus the real route).
 * Order is meaningful: it is the order the footer and site map render in.
 */
export type Hub = {
  /** Site-relative path, no trailing slash: "/cozy-bedtime-stories". */
  path: string;
  /** Full name — used by the HTML site map and the llms.txt index. */
  name: string;
  /** Short anchor text for the footer, where the column is narrow. */
  footerLabel: string;
  /** One-line description for llms.txt. Never keyword-stuffed. */
  blurb: string;
};

export const HUBS: Hub[] = [
  {
    path: "/bedtime-stories",
    name: "Bedtime stories for kids",
    footerLabel: "Bedtime stories for kids",
    blurb:
      "The main landing page for bedtime stories — how MoonPage's originals work and where to start.",
  },
  {
    path: "/toddler-bedtime-stories",
    name: "Toddler bedtime stories",
    footerLabel: "Toddler bedtime stories",
    blurb: "Bedtime stories and settling tips pitched at toddlers (ages 2–3).",
  },
  {
    path: "/preschool-bedtime-stories",
    name: "Preschool bedtime stories",
    footerLabel: "Preschool bedtime stories",
    blurb:
      "Bedtime stories for preschoolers (ages 3–5), with slightly longer plots.",
  },
  {
    path: "/read-aloud-bedtime-stories",
    name: "Read-aloud bedtime stories",
    footerLabel: "Read-aloud bedtime stories",
    blurb:
      "Read-aloud bedtime stories — narration, pacing, and reading in your own voice.",
  },
  {
    path: "/cozy-bedtime-stories",
    name: "Cozy bedtime stories",
    footerLabel: "Cozy bedtime tales",
    blurb: "Cozy, low-stimulation bedtime stories for winding down.",
  },
  {
    path: "/lullaby-bedtime-stories",
    name: "Lullaby bedtime stories",
    footerLabel: "Lullaby bedtime stories",
    blurb:
      "Lullaby-style bedtime stories and songs for the youngest listeners.",
  },
  {
    path: "/goodnight-bedtime-stories",
    name: "Goodnight bedtime stories",
    footerLabel: "Goodnight stories",
    blurb:
      "Good-night stories, and the goodnight ritual that closes the day.",
  },
  {
    path: "/bedtime-story-ideas",
    name: "Bedtime story ideas",
    footerLabel: "Bedtime story ideas",
    blurb:
      "Bedtime story ideas and prompts for when you want to make one up.",
  },
  {
    path: "/bedtime-stories-by-age",
    name: "Bedtime stories by age",
    footerLabel: "Bedtime stories by age",
    blurb:
      "Which stories and routines suit which age, from babies through school age.",
  },
  {
    path: "/short-bedtime-stories",
    name: "Short bedtime stories",
    footerLabel: "Short bedtime stories",
    blurb: "Short bedtime stories for nights when you need to be quick.",
  },
  {
    path: "/free-bedtime-stories",
    name: "Free bedtime stories",
    footerLabel: "Free bedtime stories",
    blurb:
      "Which MoonPage stories are free, and what 'free to start' actually includes.",
  },
  {
    path: "/sleep-stories-for-kids",
    name: "Sleep stories for kids",
    footerLabel: "Sleep stories for kids",
    blurb: "Sleep-focused stories written to help children fall asleep.",
  },
  {
    path: "/baby-bedtime-stories",
    name: "Baby bedtime stories",
    footerLabel: "Bedtime stories for babies",
    blurb: "Bedtime stories for babies — gentle, rhythmic, and short.",
  },
  {
    path: "/picture-books-for-kids",
    name: "Picture books for kids",
    footerLabel: "Picture books for kids",
    blurb:
      "What makes a good picture book, and how MoonPage's originals compare.",
  },
  {
    path: "/bedtime-routine-chart",
    name: "Bedtime routine chart",
    footerLabel: "Bedtime routine chart",
    blurb: "A printable bedtime routine chart, and how to use one.",
  },
  {
    path: "/bedtime-stories-in-your-voice",
    name: "Bedtime stories in your voice",
    footerLabel: "Stories in your voice",
    blurb:
      "Recording bedtime stories in your own voice, and when to use it.",
  },
  {
    path: "/bedtime-stories-for-anxious-kids",
    name: "Bedtime stories for anxious kids",
    footerLabel: "Stories for anxious kids",
    blurb:
      "Bedtime stories and reassurance for anxious or sensitive children.",
  },
  {
    path: "/offline-bedtime-stories",
    name: "Offline bedtime stories",
    footerLabel: "Offline bedtime stories",
    blurb:
      "Reading MoonPage stories offline — on a flight, in the car, or with no signal.",
  },
  {
    path: "/bedtime-stories-for-siblings",
    name: "Bedtime stories for siblings",
    footerLabel: "Stories for siblings",
    blurb:
      "Bedtime stories that work when two or more children share a room.",
  },
  {
    path: "/winter-bedtime-stories",
    name: "Winter bedtime stories",
    footerLabel: "Winter bedtime stories",
    blurb: "Winter and snow bedtime stories for the darker months.",
  },
  {
    path: "/bedtime-stories-app",
    name: "The MoonPage app",
    footerLabel: "Bedtime stories app",
    blurb:
      "The app itself — features, pricing, and the App Store download.",
  },
];
