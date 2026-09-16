/**
 * The "clue trail" wiring between the three content layers.
 *
 * The site has three kinds of page that talk about the same thing from
 * different angles:
 *
 *   collections/<slug>  →  a theme shelf   ("Animal Bedtime Stories")
 *   stories/<slug>      →  one book        ("Slow Down, Seal!")
 *   guides/<slug>       →  a parent's problem ("Why Toddlers Wake at Night")
 *
 * Before this file, the three layers barely knew about each other. A story
 * page linked to a couple of other stories and exactly one guide; a
 * collection linked to its stories and to four other collections; a guide
 * linked only to other guides. The result was that a guide like
 * `bedtime-for-twins` sat two clicks deep with only two internal links
 * pointing at it — the classic "orphan-adjacent" shape where Google has
 * little reason to treat the page as part of a topic rather than as a stray.
 *
 * The fix is one hand-written map keyed by story tag. From it, three derived
 * helpers cover every direction:
 *
 *   stories    → guides      (this story's theme, explained for the parent)
 *   collections → guides     (same, for a whole shelf)
 *   guides     → collections (the shelf where the advice gets used)
 *
 * It is deliberately keyed by tag rather than by slug, because the tag list
 * is small (25), stable (it mirrors the app's `story-tags.ts`), and already
 * the thing that decides which collection a story belongs to. One map, three
 * uses, no chance of the three drifting apart.
 *
 * Every guide slug here is resolved at build time and silently dropped if it
 * doesn't exist, so a renamed guide degrades to "one fewer link" instead of
 * breaking the build.
 */

import { COLLECTIONS, type Collection } from "./collections";
import { getGuide, type Guide } from "./guides";
import type { StoryTag } from "./stories";

/**
 * For each theme: the guides that genuinely answer the question a parent has
 * *after* they've picked a story in that theme. Chosen by reading the guide
 * list, not by keyword overlap — "animals" maps to reading-aloud advice
 * because animal voices are what makes read-aloud land, not because the word
 * "animal" appears in the guide.
 */
const TAG_GUIDES: Record<StoryTag, string[]> = {
  boy: [
    "bedtime-stories-for-3-year-olds",
    "bedtime-stories-for-4-year-olds",
    "read-aloud-to-toddlers",
  ],
  girl: [
    "bedtime-stories-for-3-year-olds",
    "stories-about-big-feelings-at-bedtime",
    "reading-aloud-with-expression",
  ],
  animals: [
    "read-aloud-to-toddlers",
    "bedtime-stories-for-2-year-olds",
    "reading-aloud-with-expression",
  ],
  objects: [
    "how-to-make-up-a-bedtime-story",
    "building-a-home-library",
    "toddler-who-wont-sit-still-for-books",
  ],
  kindness: [
    "stories-about-big-feelings-at-bedtime",
    "books-that-reflect-your-family",
    "choosing-bedtime-books",
  ],
  friendship: [
    "starting-preschool-and-sleep",
    "books-that-reflect-your-family",
    "toddler-who-wont-sit-still-for-books",
  ],
  courage: [
    "bedtime-stories-for-anxious-kids",
    "scared-of-the-dark",
    "stories-about-big-feelings-at-bedtime",
  ],
  feelings: [
    "stories-about-big-feelings-at-bedtime",
    "bedtime-stories-for-anxious-kids",
    "toddler-night-waking",
  ],
  patience: [
    "how-long-to-read-at-bedtime",
    "bedtime-routine-for-toddlers",
    "toddler-wont-stay-in-bed",
  ],
  sharing: [
    "bedtime-with-two-kids",
    "toddler-sharing-room-with-baby",
    "books-that-reflect-your-family",
  ],
  honesty: [
    "books-that-reflect-your-family",
    "stories-about-big-feelings-at-bedtime",
    "raising-a-child-who-loves-reading",
  ],
  curiosity: [
    "why-picture-books-matter",
    "nonfiction-for-preschoolers",
    "choosing-bedtime-books",
  ],
  family: [
    "books-that-reflect-your-family",
    "grandparents-reading-from-far-away",
    "bedtime-with-two-kids",
  ],
  confidence: [
    "raising-a-child-who-loves-reading",
    "toddler-who-wont-sit-still-for-books",
    "stories-about-big-feelings-at-bedtime",
  ],
  creativity: [
    "why-picture-books-matter",
    "building-a-home-library",
    "how-to-make-up-a-bedtime-story",
  ],
  music: [
    "lullabies-for-babies-and-toddlers",
    "rhyming-books-and-language",
    "white-noise-and-bedtime-sounds",
  ],
  bedtime: [
    "bedtime-routine-for-toddlers",
    "what-makes-a-good-bedtime-story",
    "what-time-should-a-toddler-go-to-bed",
  ],
  sea: [
    "summer-bedtime-light-evenings",
    "how-to-make-up-a-bedtime-story",
    "choosing-bedtime-books",
  ],
  forest: [
    "cozy-bedroom-for-better-sleep",
    "how-to-make-up-a-bedtime-story",
    "why-picture-books-matter",
  ],
  garden: [
    "building-a-home-library",
    "how-to-make-up-a-bedtime-story",
    "choosing-bedtime-books",
  ],
  town: [
    "library-visits-with-toddlers",
    "building-a-home-library",
    "books-that-reflect-your-family",
  ],
  snow: [
    "holiday-routine-disruption",
    "cozy-bedroom-for-better-sleep",
    "how-to-make-up-a-bedtime-story",
  ],
  rain: [
    "white-noise-and-bedtime-sounds",
    "cozy-bedroom-for-better-sleep",
    "audiobooks-vs-reading-aloud",
  ],
  night: [
    "scared-of-the-dark",
    "lullabies-for-babies-and-toddlers",
    "white-noise-and-bedtime-sounds",
  ],
  magic: [
    "how-to-make-up-a-bedtime-story",
    "why-picture-books-matter",
    "wordless-picture-books",
  ],
};

/** Resolve slugs to guides, dropping any that no longer exist. */
function resolve(slugs: string[]): Guide[] {
  return slugs
    .map(getGuide)
    .filter((g): g is Guide => Boolean(g));
}

/**
 * Guides that go deeper on a theme — for story pages and collection pages.
 * `limit` is applied after resolution so a stale slug never shortens the row.
 */
export function guidesForTag(tag: StoryTag, limit = 2): Guide[] {
  return resolve(TAG_GUIDES[tag] ?? []).slice(0, limit);
}

/**
 * The reverse direction: given a guide, which theme shelves is it about?
 *
 * Derived from the same map, so a guide can never claim to be about a theme
 * the theme doesn't claim it for. Ordered by how many of the tag's guide
 * slots this guide fills — no, simpler and more predictable: by the tag
 * order in `TAG_GUIDES`, which is stable and hand-curated.
 */
export function collectionsForGuide(guideSlug: string, limit = 2): Collection[] {
  const tags = (Object.keys(TAG_GUIDES) as StoryTag[]).filter((tag) =>
    TAG_GUIDES[tag].includes(guideSlug),
  );
  const byTag = new Map(COLLECTIONS.map((c) => [c.tag, c]));
  return tags
    .map((tag) => byTag.get(tag))
    .filter((c): c is Collection => Boolean(c))
    .slice(0, limit);
}

/** Guides for a collection page, by the collection's own tag. */
export function guidesForCollection(collection: Collection, limit = 3): Guide[] {
  return guidesForTag(collection.tag, limit);
}
