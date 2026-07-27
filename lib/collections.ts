/**
 * Themed story collections — landing pages for the "bedtime stories for X"
 * and "X stories for kids" searches that the single /stories page can't all
 * rank for at once.
 *
 * These are only worth publishing because each one lists real stories from
 * the library with real cover art and its own written introduction. A
 * collection with two thin entries and boilerplate copy is a doorway page;
 * don't add one unless the tag genuinely has stories behind it and there's
 * something specific to say about the theme.
 */

import type { StoryTag } from "./stories";
import { storiesByTag } from "./stories";

export type Collection = {
  slug: string;
  tag: StoryTag;
  /** <h1> — phrased the way a parent would search for it. */
  title: string;
  /** Meta description + hub card blurb. */
  description: string;
  /** Body copy above the grid. Written per collection, never templated. */
  intro: string[];
  /** Short practical note under the grid — reading tips for this theme. */
  note: string;
};

export const COLLECTIONS: Collection[] = [
  {
    slug: "sleepy-bedtime-stories",
    tag: "sleepy",
    title: "Sleepy Bedtime Stories for Toddlers and Preschoolers",
    description:
      "Slow, quiet picture books written to end the day — counting sheep, hibernating bears, and nights that fade out gently. For ages 3 and up.",
    intro: [
      "Some picture books are built for the middle of the day and some are built for the last ten minutes of it. These are the second kind: stories where the plot settles instead of building, the last page is quieter than the first, and nothing exciting happens right before lights out.",
      "They're the ones to reach for on the nights when your child is overtired and wired at the same time — the moon is already up inside the story, so the story is doing some of the settling for you.",
    ],
    note: "Read these last if you're reading more than one. Drop your voice and slow your pace as you go; by the final page you should be close to a whisper.",
  },
  {
    slug: "animal-bedtime-stories",
    tag: "animals",
    title: "Animal Bedtime Stories for Kids",
    description:
      "Bears, penguins, seals, bunnies, and one starfish — gentle animal picture books for toddlers and preschoolers, ages 3 and up.",
    intro: [
      "Animal characters are the shortcut into a story for a three-year-old. A bear cub who doesn't want the day to end or a bunny whose feelings got too big is a version of themselves at one step's distance — close enough to recognize, far enough to be comfortable talking about.",
      "These are the animal stories in the MoonPage library: seals, bears, penguins, a firefly, a starfish, a lamb who can't fall asleep. Illustrated, calm, and written for reading aloud at ages 3 and up.",
    ],
    note: "Animal stories are the easiest place to do voices. You don't need a whole cast — one soft voice for the small animal and one slower voice for the grown-up one is plenty.",
  },
  {
    slug: "kindness-stories-for-kids",
    tag: "kindness",
    title: "Stories About Kindness and Sharing",
    description:
      "Picture books where sharing, helping, and noticing someone else is the whole point — cookies, apples, umbrellas, and one red scarf.",
    intro: [
      "Kindness is hard to teach directly and easy to absorb sideways. Told at bedtime, a story where someone shares the last apple or makes room under their umbrella does more than a conversation about being nice does — it gives your child a picture to think in.",
      "These stories keep the lesson inside the plot rather than tacking a moral on the end. Nobody gets a lecture; someone just quietly makes a better choice, and the story is warmer for it.",
    ],
    note: "Worth one question at the end, if it's not too late: \"What would you have done?\" Keep it to one, though — a long conversation will wake them right back up.",
  },
  {
    slug: "stories-about-big-feelings",
    tag: "big-feelings",
    title: "Stories About Big Feelings — Anger, Waiting, and Shyness",
    description:
      "Gentle picture books about frustration, impatience, shyness, and losing — feelings toddlers and preschoolers can't name yet, given a story shape.",
    intro: [
      "Three- and four-year-olds have adult-sized feelings and toddler-sized words for them. A story that shows a character in the middle of one — the chest that feels too tight, the waiting that feels impossible — hands your child language for something they've felt but couldn't describe.",
      "These stories don't rush the feeling or fix it in a sentence. The character gets angry, or jealous, or shy, and comes out the other side, which is the part that's genuinely reassuring.",
    ],
    note: "If your child recognizes themselves in one of these, expect them to ask for it repeatedly. That's the story doing its job — let them have it as many nights as they want.",
  },
  {
    slug: "adventure-stories-for-kids",
    tag: "adventure",
    title: "Gentle Adventure Stories for Preschoolers",
    description:
      "Small adventures at a bedtime pace — a museum dinosaur, a compass in the woods, a map in a bottle. Exciting without being winding-up.",
    intro: [
      "Not every child wants a quiet story. Some want something to happen — and a wind-down routine that bans all excitement tends to lose them entirely.",
      "These are adventures built at bedtime pace: real curiosity and a real discovery, but no peril, no cliffhangers, and an ending that lands softly instead of leaving your child buzzing. A found map, a path through the dunes, a hundred questions at a museum.",
    ],
    note: "If your child is easily wound up, read the adventure first and finish with something from the sleepy collection. Order matters more than content.",
  },
  {
    slug: "ocean-and-sea-stories",
    tag: "sea",
    title: "Ocean and Sea Stories for Kids",
    description:
      "Seals, starfish, harbors, and tide-line discoveries — calm ocean picture books for toddlers and preschoolers, ages 3 and up.",
    intro: [
      "There's a reason so many bedtime books end up underwater. Water moves slowly, sounds soften, and light goes blue and dim — an ocean setting is halfway to a lullaby before anything happens in it.",
      "These stories live by the sea: a seal who won't slow down, a starfish who has never seen a star, a small boat in a big harbor, and a low-tide morning with something glinting on the sand.",
    ],
    note: "Read the water sounds slowly — the splashes and swishes in these stories are written to be said out loud, and they're the part toddlers join in on.",
  },
  {
    slug: "winter-and-snow-stories",
    tag: "winter",
    title: "Winter and Snow Stories for Toddlers",
    description:
      "Snow days, hibernation, and the coldest day of the year — cozy winter picture books for ages 3 and up.",
    intro: [
      "Winter stories do something specific at bedtime: nearly all of them end indoors, warm, under a blanket. That shape — out into the cold, then home to something cozy — is almost exactly the shape of the evening you're trying to have.",
      "Snow days, a bear getting ready to sleep through the whole season, and two penguins with one scarf between them.",
    ],
    note: "These are good on any night, not just cold ones — the cozy ending does the work regardless of the weather outside.",
  },
  {
    slug: "friendship-stories-for-kids",
    tag: "friendship",
    title: "Friendship Stories for Toddlers and Preschoolers",
    description:
      "Making a first friend, sharing with one, and being a good one — gentle picture books about friendship for ages 3 and up.",
    intro: [
      "Friendship at three and four is mostly logistics: how you say hello to someone you don't know, what happens when you both want the same thing, what to do when a friend is having a bad day. It's genuinely difficult, and the stories that help are the ones that stay that concrete.",
      "A too-shy hello at the park, a scarf shared on the coldest day, a race that turns out not to be about winning.",
    ],
    note: "These pair well with whatever happened at nursery that day — a story is often an easier way into it than a direct question.",
  },
  {
    slug: "stories-about-courage",
    tag: "courage",
    title: "Stories About Courage for Little Kids",
    description:
      "Brave-in-a-small-way picture books — one more step down a shadowy path, a little boat in a big storm, a dragon who can't breathe fire.",
    intro: [
      "Courage in a book for three-year-olds shouldn't look like fearlessness. It looks like doing the next small thing anyway: taking one more step, calling out for help, trying the thing you're not good at while everyone watches.",
      "These stories keep the stakes small and the bravery real, and none of them ask your child to stop being scared first.",
    ],
    note: "Point out the moment the character is still scared and does it anyway — that's the part worth naming out loud, and it's usually one sentence.",
  },
];

export function getCollection(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}

/** Collections with their stories resolved, skipping any that came up thin. */
export function collectionsWithStories() {
  return COLLECTIONS.map((c) => ({ ...c, stories: storiesByTag(c.tag) })).filter(
    (c) => c.stories.length >= 3,
  );
}
