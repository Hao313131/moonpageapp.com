/**
 * Themed story collections — landing pages for the "bedtime stories for X"
 * and "X stories for kids" searches that the single /stories page can't all
 * rank for at once.
 *
 * Tags match moonpage-app/data/story-tags.ts. Each collection lists every
 * story on the site that carries that tag (30 in the current sample catalog).
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
    tag: "bedtime",
    title: "Sleepy Bedtime Stories for Toddlers and Preschoolers",
    description:
      "Slow, quiet picture books written to end the day — counting sheep, hibernating bears, and nights that fade out gently. A small sample from a much larger app library.",
    intro: [
      "Some picture books are built for the middle of the day and some are built for the last ten minutes of it. These are the second kind: stories where the plot settles instead of building, the last page is quieter than the first, and nothing exciting happens right before lights out.",
      "In this sample you'll find Pip helping a firefly home under the moon, Bramble the bear making his hibernation bed leaf by leaf, and Little Lamb counting fluffy sheep over a meadow fence — each one lit from the inside by bedtime rather than tagged onto the end.",
    ],
    note: "Read these last if you're reading more than one. Drop your voice and slow your pace as you go; by the final page you should be close to a whisper.",
  },
  {
    slug: "animal-bedtime-stories",
    tag: "animals",
    title: "Animal Bedtime Stories for Kids",
    description:
      "Bears, penguins, seals, turtles, and a lighthouse cormorant — gentle animal picture books for toddlers and preschoolers, ages 3 and up.",
    intro: [
      "Animal characters are the shortcut into a story for a three-year-old. A seal who won't slow down or a bunny whose feelings got too big is a version of themselves at one step's distance — close enough to recognize, far enough to be comfortable talking about.",
      "Most of the stories on this site star animals: Sully the seal, Bruno the bear cub, Pim and Pax the penguins, Tibo the turtle, Cora the cormorant, and many more. Illustrated, calm, and written for reading aloud at ages 3 and up.",
    ],
    note: "Animal stories are the easiest place to do voices. You don't need a whole cast — one soft voice for the small animal and one slower voice for the grown-up one is plenty.",
  },
  {
    slug: "kindness-stories-for-kids",
    tag: "kindness",
    title: "Stories About Kindness and Sharing",
    description:
      "Picture books where sharing, helping, and noticing someone else is the whole point — cookies, apples, umbrellas, lanterns, and one red scarf.",
    intro: [
      "Kindness is hard to teach directly and easy to absorb sideways. Told at bedtime, a story where someone shares the last apple or makes room under their umbrella does more than a conversation about being nice does — it gives your child a picture to think in.",
      "These stories keep the lesson inside the plot rather than tacking a moral on the end. Nora bakes for a shivering neighbor, Lottie fits everyone under her rainbow umbrella, and Cora keeps her lighthouse lamp burning for a lost duckling family — nobody gets a lecture.",
    ],
    note: "Worth one question at the end, if it's not too late: \"What would you have done?\" Keep it to one, though — a long conversation will wake them right back up.",
  },
  {
    slug: "stories-about-big-feelings",
    tag: "feelings",
    title: "Stories About Big Feelings — Anger, Waiting, and Shyness",
    description:
      "Gentle picture books about frustration, impatience, shyness, and losing — feelings toddlers and preschoolers can't name yet, given a story shape.",
    intro: [
      "Three- and four-year-olds have adult-sized feelings and toddler-sized words for them. A story that shows a character in the middle of one — the chest that feels too tight, the waiting that feels impossible — hands your child language for something they've felt but couldn't describe.",
      "Bunny's kite gets stuck in a tree and the feeling in his chest is much too big to hold; Little Lamb is wide awake when the moon is already up; Fern doesn't feel well and wants to be outside in the sun. These stories don't rush the feeling or fix it in a sentence.",
    ],
    note: "If your child recognizes themselves in one of these, expect them to ask for it repeatedly. That's the story doing its job — let them have it as many nights as they want.",
  },
  {
    slug: "friendship-stories-for-kids",
    tag: "friendship",
    title: "Friendship Stories for Toddlers and Preschoolers",
    description:
      "Making a first friend, sharing with one, and being a good one — gentle picture books about friendship for ages 3 and up.",
    intro: [
      "Friendship at three and four is mostly logistics: how you say hello to someone you don't know, what happens when you both want the same thing, what to do when a friend is having a bad day. It's genuinely difficult, and the stories that help are the ones that stay that concrete.",
      "Sam says hello to Jin at the park, Glo's firefly friends push her jar off a stump, and Sam the snail arrives late to Bunny's party to find cake still waiting. A too-shy hello, a rescue under the stars, a scarf shared on the coldest day.",
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
      "Mia walks into the mist behind Grandma's woods; Bo crosses tall waves to reach a duck on a rock; Drake blows cool mist when fire won't work; Rusty leads friends through fog with Papa's lantern. None of them ask your child to stop being scared first.",
    ],
    note: "Point out the moment the character is still scared and does it anyway — that's the part worth naming out loud, and it's usually one sentence.",
  },
  {
    slug: "curiosity-stories-for-kids",
    tag: "curiosity",
    title: "Curious Adventure Stories for Preschoolers",
    description:
      "Small adventures at a bedtime pace — a museum dinosaur, a compass in the woods, a map in a bottle, a turtle on a hill. Exciting without being winding-up.",
    intro: [
      "Not every child wants a quiet story. Some want something to happen — and a wind-down routine that bans all excitement tends to lose them entirely.",
      "These are adventures built at bedtime pace: Leo's hundred questions at a museum, Mia's copper compass in the woods, Theo's green glass bottle at low tide, Twinkle the starfish carried up to see the sky, Tibo the turtle reaching the top of a hill. Real curiosity and a real discovery, but no peril and an ending that lands softly.",
    ],
    note: "If your child is easily wound up, read the adventure first and finish with something from the bedtime collection. Order matters more than content.",
  },
  {
    slug: "ocean-and-sea-stories",
    tag: "sea",
    title: "Ocean and Sea Stories for Kids",
    description:
      "Seals, starfish, harbors, lighthouses, and tide-line discoveries — calm ocean picture books for toddlers and preschoolers, ages 3 and up.",
    intro: [
      "There's a reason so many bedtime books end up underwater. Water moves slowly, sounds soften, and light goes blue and dim — an ocean setting is halfway to a lullaby before anything happens in it.",
      "These stories live by the sea: Sully learning to slow down in the bay, Twinkle carried up to see the stars, Bo the little red boat in a big harbor, Theo's hidden cove at low tide, and Cora the cormorant keeping her lamp spinning for boats and ducklings alike.",
    ],
    note: "Read the water sounds slowly — the splashes and swishes in these stories are written to be said out loud, and they're the part toddlers join in on.",
  },
  {
    slug: "winter-and-snow-stories",
    tag: "snow",
    title: "Winter and Snow Stories for Toddlers",
    description:
      "Snow days, hibernation, and the coldest day of the year — cozy winter picture books for ages 3 and up.",
    intro: [
      "Winter stories do something specific at bedtime: nearly all of them end indoors, warm, under a blanket. That shape — out into the cold, then home to something cozy — is almost exactly the shape of the evening you're trying to have.",
      "Bruno wakes to the first snow and builds a snow-bear with friends; Pim and Pax share one red scarf on the coldest day; Bramble gathers leaves for his hibernation bed while the forest goes still and white.",
    ],
    note: "These are good on any night, not just cold ones — the cozy ending does the work regardless of the weather outside.",
  },
  {
    slug: "family-stories-for-kids",
    tag: "family",
    title: "Family Stories for Bedtime",
    description:
      "Stories about parents, grandparents, siblings, and the small rituals that hold a family together — for ages 3 and up.",
    intro: [
      "Bedtime is when family shows up in a story — not as a lesson about togetherness, but as the person who bakes the cake, waits by the pond, or reads in a silly voice when you're not feeling well.",
      "Maya and Papa bake for Mama's birthday, Leo finds his house on a museum map, Ella tells Grandma the truth about a broken vase, and Fern's whole family tends to her on a cozy sick day. These are the stories that mirror the room your child is sitting in.",
    ],
    note: "If you record your own voice in MoonPage, family stories are the ones children ask for on repeat — hearing someone they know say the words matters as much as the plot.",
  },
  {
    slug: "patience-stories-for-kids",
    tag: "patience",
    title: "Stories About Patience and Waiting",
    description:
      "Picture books for children who find waiting unbearable — cakes in the oven, nests half-built, parties far away, and hills at turtle speed.",
    intro: [
      "Patience is one of the hardest virtues to explain and one of the easiest to show. A character who checks the oven every thirty seconds, or who gives up on a nest because a bee said it would take forever, is doing something your child will recognize immediately.",
      "Maya fills the wait with flowers and cloud-watching; Stella weaves her nest one blade of grass at a time; Tibo crosses the world step by slow step; Sam the snail slides all evening to reach a party that waited for him. Each story shows the strategy, not just the virtue.",
    ],
    note: "These pair well with real waiting — timer on the oven, shoes by the door. Name what the character does with their hands while they wait.",
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
