/**
 * The public story catalog for the website — a sample of the app's library,
 * not the whole shelf.
 *
 * Contents: the app's current books 1–45. Slugs, titles, tags and cover
 * filenames are verified against moonpage-app/data/stories/*.ts book by book
 * — the app has renumbered books before, so re-check rather than assuming a
 * bNN slot still holds the same story. `hook` and `bedtimeNote` are original
 * marketing copy written from the story text, never quotes out of it.
 *
 * `tags` match moonpage-app/data/story-tags.ts and drive the themed
 * collection pages (see lib/collections.ts). Tag a story only if the theme
 * is genuinely central to it; a collection page that over-promises is worse
 * than a shorter one.
 */

/** Matches moonpage-app/data/story-tags.ts — who, about, and where. */
export type StoryTag =
  | "boy"
  | "girl"
  | "animals"
  | "objects"
  | "kindness"
  | "friendship"
  | "courage"
  | "feelings"
  | "patience"
  | "sharing"
  | "honesty"
  | "curiosity"
  | "family"
  | "confidence"
  | "creativity"
  | "music"
  | "bedtime"
  | "sea"
  | "forest"
  | "garden"
  | "town"
  | "snow"
  | "rain"
  | "night"
  | "magic";

export type Story = {
  /** URL segment for /stories/<slug>. */
  slug: string;
  /** Cover filename in public/covers — matches the app asset name exactly. */
  file: string;
  title: string;
  /**
   * The teaser, used everywhere the story appears — grids, collection cards,
   * the story page and its meta description. House style: two or three
   * fragments that set the scene, then the question the book answers. It has
   * to be true to that specific story; a generic hook sells nothing.
   */
  hook: string;
  tags: StoryTag[];
  /** One line on why the book works at the end of the day. */
  bedtimeNote: string;
};

export const STORIES: Story[] = [
  {
    slug: "slow-down-seal",
    file: "wp_b01_1_blue_sea_cover.webp",
    title: "Slow Down, Seal!",
    hook: "The fastest seal in the bay. A whole ocean going past in a blur. What is Sully swimming straight past at top speed?",
    tags: ["animals", "patience", "kindness", "sea", "family"],
    bedtimeNote:
      "The last pages wind all the way down — the sea goes quiet, the sun sets, and Sully falls asleep tucked up beside Mama. Perfect for kids who need permission to settle.",
  },
  {
    slug: "leos-museum-day",
    file: "wp_b02_1_loved_ask_cover.webp",
    title: "Leo's Museum Day",
    hook: "Rain all morning. A dinosaur taller than the room. A hundred questions that won't wait — which one does Leo ask first?",
    tags: ["boy", "curiosity", "family", "town", "rain"],
    bedtimeNote:
      "Curiosity without peril — puddles, a sticker, and Leo asleep dreaming of bones and shiny rocks. For kids who want something to happen at bedtime without getting wound up.",
  },
  {
    slug: "brunos-snow-day",
    file: "wp_b03_1_woke_hush_cover.webp",
    title: "Bruno's Snow Day",
    hook: "Too quiet outside. The whole forest gone white overnight. What does a bear cub do with his very first snow?",
    tags: ["animals", "friendship", "kindness", "snow", "forest"],
    bedtimeNote:
      "Out into the cold, then home again — cocoa, a soft blanket, and Bruno curled up dreaming of snow. The winter bedtime shape parents reach for.",
  },
  {
    slug: "noras-kind-cookies",
    file: "wp_b04_1_maple_street_cover.webp",
    title: "Nora's Kind Cookies",
    hook: "A cold porch. A neighbour who's always out there reading. Can a plate of star-shaped cookies say what Nora means?",
    tags: ["girl", "kindness", "friendship", "family", "town"],
    bedtimeNote:
      "Kindness kept inside the plot — no lecture, just a child who notices and does something small. Ends with Nora being tucked in.",
  },
  {
    slug: "a-secret-in-the-night",
    file: "wp_b05_1_window_moon_cover.webp",
    title: "A Secret in the Night",
    hook: "A night too big to sleep in. One small sound in the garden. Who's out there with their light gone dim?",
    tags: ["animals", "kindness", "courage", "night", "bedtime"],
    bedtimeNote:
      "Lit by moonlight and lantern flowers from start to finish. Nothing louder than a whisper — and Pip drifts off waving from the window.",
  },
  {
    slug: "sams-park-friend",
    file: "wp_b06_1_went_park_cover.webp",
    title: "Sam's Park Friend",
    hook: "A new boy on the bench, looking at his shoes. Nobody has said hello yet. How hard can walking over really be?",
    tags: ["boy", "friendship", "kindness", "family", "town"],
    bedtimeNote:
      "For shy kids, or anyone starting somewhere new. Concrete, useful, and soft enough for bedtime.",
  },
  {
    slug: "the-trapped-firefly",
    file: "wp_b07_1_summer_night_cover.webp",
    title: "The Trapped Firefly",
    hook: "One firefly who flew too high. One glass jar with the lid rolled shut. Who's strong enough to roll her free?",
    tags: ["animals", "friendship", "courage", "kindness", "night"],
    bedtimeNote:
      "Warm summer-night friendship under a big moon. Ends with Glo asleep in the leaves and her glow gone gentle again.",
  },
  {
    slug: "maya-waits-for-the-cake",
    file: "wp_b08_1_loved_help_cover.webp",
    title: "Maya Waits for the Cake",
    hook: "Batter in the pan. Timer set. Mama's birthday cake is in the oven — so how do you survive the waiting?",
    tags: ["girl", "patience", "family", "creativity", "garden"],
    bedtimeNote:
      "Shows the strategy rather than just the virtue: waiting gets easier when your hands are busy. Ends with candlelight, singing, and Maya deciding it was worth it.",
  },
  {
    slug: "champion",
    file: "wp_b09_1_green_pond_cover.webp",
    title: "Champion",
    hook: "Jumping Day tomorrow, and Hop is the smallest frog at the pond. If he can't win the gold leaf, what's left to win?",
    tags: ["animals", "kindness", "friendship", "confidence", "family"],
    bedtimeNote:
      "A losing-well story that never pretends wanting to win isn't real. Ends with Hop asleep, dreaming of his best jump.",
  },
  {
    slug: "penguin-friends",
    file: "wp_b10_1_white_ice_cover.webp",
    title: "Penguin Friends",
    hook: "One cold wind. One soft red scarf. And more little penguins turning up all the time — how far can one scarf stretch?",
    tags: ["animals", "friendship", "sharing", "kindness", "snow"],
    bedtimeNote:
      "Cozy-ending winter magic: stars, yawns, and a whole huddle of penguins falling asleep.",
  },
  {
    slug: "mias-secret-meadow",
    file: "wp_b11_1_woods_explorer_cover.webp",
    title: "Mia's Secret Meadow",
    hook: "A copper compass lying in the ferns. A note that says walk slow and look close. Where is it pulling Mia?",
    tags: ["girl", "curiosity", "courage", "family", "forest"],
    bedtimeNote:
      "A first-adventure story where bravery is small and real. Ends with Mia asleep dreaming of butterflies and golden light.",
  },
  {
    slug: "the-starry-fish",
    file: "wp_b12_1_deep_sea_cover.webp",
    title: "The Starry Fish",
    hook: "A fish who lives too deep to have ever seen a star. Everyone says the sky is out of reach. What if someone offers her a lift?",
    tags: ["animals", "curiosity", "friendship", "sea", "night"],
    bedtimeNote:
      "Sea-and-stars payoff: the thing she wanted to see looks exactly like her. Moonlight, a soft wave, and Twinkle asleep on the sea floor.",
  },
  {
    slug: "bunnys-big-feelings",
    file: "wp_b13_1_garden_kite_cover.webp",
    title: "Bunny's Big Feelings",
    hook: "One great big tug. One kite stuck high in a tree. Bunny's chest goes tight — what do you do with a feeling that size?",
    tags: ["animals", "feelings", "family", "garden"],
    bedtimeNote:
      "Hands kids a technique they can actually use. Big feelings come and go like clouds — and yes, the kite does come down.",
  },
  {
    slug: "the-sharing-tree",
    file: "wp_b14_1_apple_tree_cover.webp",
    title: "The Sharing Tree",
    hook: "A basket filled to the top with apples. One hungry friend after another asking for just one. What's left for Clara at the end?",
    tags: ["girl", "sharing", "kindness", "friendship", "garden"],
    bedtimeNote:
      "A sharing story with real stakes — she really does run out — which makes the ending land. Picnic under the tree, walk home at sunset.",
  },
  {
    slug: "the-sleepy-bear",
    file: "wp_b15_1_when_autumn_cover.webp",
    title: "The Sleepy Bear",
    hook: "Leaves coming down swish-swish. One enormous yawn. Bramble has a whole winter to sleep through — but what has to happen first?",
    tags: ["animals", "patience", "bedtime", "forest", "snow"],
    bedtimeNote:
      "Essentially one long, gentle bedtime routine. Snow starts falling on the last pages and the forest goes still and white.",
  },
  {
    slug: "the-coolest-dragon",
    file: "wp_b16_1_valley_drake_cover.webp",
    title: "The Coolest Dragon",
    hook: "Every dragon breathes hot orange fire. Drake manages one small puff of grey smoke. So what happens when the fog rolls in?",
    tags: ["animals", "confidence", "courage", "friendship", "magic"],
    bedtimeNote:
      "For the child sure they're the only one who can't do the thing. On the last page Drake is blowing soft breezes to rock his friends to sleep.",
  },
  {
    slug: "theos-hidden-cove",
    file: "wp_b17_1_loved_shore_cover.webp",
    title: "Theo's Hidden Cove",
    hook: "A green bottle at low tide with a map rolled up inside. Then the path splits, and Papa is somewhere behind — now what?",
    tags: ["boy", "curiosity", "courage", "family", "sea"],
    bedtimeNote:
      "Asking for help framed as bravery, not failure. Theo leaves the bottle for the next explorer and falls asleep with the cove still in his dreams.",
  },
  {
    slug: "the-brave-little-boat",
    file: "wp_b18_1_little_harbor_cover.webp",
    title: "The Brave Little Boat",
    hook: "A small red boat who always stays close to shore. A storm coming in fast. Someone calling for help far out — is little big enough?",
    tags: ["objects", "courage", "kindness", "friendship", "sea"],
    bedtimeNote:
      "Courage said out loud: he was scared and tried anyway. The storm blows over and the book ends with the harbor calm and Bo rocking gently in it.",
  },
  {
    slug: "counting-sheep",
    file: "wp_b19_1_bedtime_moon_cover.webp",
    title: "Counting Sheep",
    hook: "Moon up. Stars out. One little lamb wide, wide awake — how many sheep does it take?",
    tags: ["animals", "feelings", "family", "bedtime", "night"],
    bedtimeNote:
      "Reach for this when nothing else is working. Built as a wind-down rather than a plot — each page quieter than the last. Read it slowly, and let your voice trail off.",
  },
  {
    slug: "the-rainbow-umbrella",
    file: "wp_b20_1_gray_rainy_cover.webp",
    title: "The Rainbow Umbrella",
    hook: "One grey drippy day. One rainbow umbrella. A kitten, a duckling, a puppy, a lamb — is there room under there for everyone?",
    tags: ["girl", "kindness", "sharing", "rain", "town"],
    bedtimeNote:
      "There's always room for one more. The rain stops, a real rainbow comes out, and Lottie skips home warm and dry.",
  },
  {
    slug: "the-beautiful-nest",
    file: "wp_b21_1_willow_home_cover.webp",
    title: "The Beautiful Nest",
    hook: "One grass stem. One rose petal. One curl of silver vine. Everyone says the nest will take forever — so is it worth the wait?",
    tags: ["animals", "patience", "creativity", "confidence", "forest"],
    bedtimeNote:
      "Patience for kids who want everything finished immediately. The sun climbs, the sun sinks, and the weaving happens by starlight. Ends with Stella curled up snug in the nest she took her time over.",
  },
  {
    slug: "the-big-wide-world",
    file: "wp_b22_1_pond_edge_cover.webp",
    title: "The Big Wide World",
    hook: "The slowest mover at the pond, and hills he's stared at every single evening. What does a turtle see if he stops rushing and starts looking?",
    tags: ["animals", "patience", "courage", "curiosity"],
    bedtimeNote:
      "A patience story dressed as a travel story. Ends with Tibo home by the pond, the sunset still in his eyes, tucked into his shell and asleep.",
  },
  {
    slug: "late-to-the-party",
    file: "wp_b23_1_special_letter_cover.webp",
    title: "Late to the Party",
    hook: "Gold-star invitation. One very slow snail. The sun is already going down — will anyone still be waiting?",
    tags: ["animals", "friendship", "patience", "courage", "garden"],
    bedtimeNote:
      "For kids who worry about being left out or left behind. Ends with Sam sliding home to bed with the party still glowing in his heart.",
  },
  {
    slug: "rusty-and-the-foggy-path",
    file: "wp_b24_1_late_play_cover.webp",
    title: "Rusty and the Foggy Path",
    hook: "Fog over the whole wood. One warm gold circle of lantern light. Rusty isn't the only one lost out here — so who leads everybody home?",
    tags: ["animals", "courage", "kindness", "family", "forest"],
    bedtimeNote:
      "Courage that looks like keeping the light on for someone else while you're still scared. Closes with the lantern hung up and Rusty asleep.",
  },
  {
    slug: "ethans-snow-sled-post",
    file: "wp_b25_1_snow_gate_cover.webp",
    title: "Ethan's Snow Sled Post",
    hook: "Snow on the lane. A sled, three boxes, and one very small delivery round. Ethan pulls it all the way home — so who swept his porch?",
    tags: ["boy", "kindness", "creativity", "snow", "town"],
    bedtimeNote:
      "Kindness that quietly comes back around, with nobody announcing the moral. Ends with cocoa on the step, warm pyjamas, and the empty sled box set by the door for tomorrow.",
  },
  {
    slug: "wrens-first-flight",
    file: "wp_b26_1_smallest_bird_cover.webp",
    title: "Wren's First Flight",
    hook: "Every brother and sister has already flown. The ground looks very far down. How do you start when your wings feel this small?",
    tags: ["animals", "courage", "confidence", "family", "forest"],
    bedtimeNote:
      "For a child facing something that looks impossible from the edge. Strategy broken into steps a three-year-old can copy. Ends dreaming of the sky.",
  },
  {
    slug: "chips-autumn-gift",
    file: "wp_b27_1_cool_breeze_cover.webp",
    title: "Chip's Autumn Gift",
    hook: "A basket packed full before the first frost. Then Mole's empty cupboard, a shivering Mouse, hungry ducklings. What's left for Chip by nightfall?",
    tags: ["animals", "sharing", "kindness", "friendship", "forest"],
    bedtimeNote:
      "Sharing where the arithmetic keeps coming out as more. Ends with a cozy autumn feast and Chip curled in his nest, warm and thankful.",
  },
  {
    slug: "a-cozy-sick-day",
    file: "wp_b28_1_not_well_cover.webp",
    title: "A Cozy Sick Day",
    hook: "Hot, wobbly, and stuck in bed while the sunny garden waits outside. Honey tea, a silly voice, rain on the glass — can a bad day be made soft?",
    tags: ["animals", "family", "feelings", "kindness"],
    bedtimeNote:
      "For upside-down sick days. Nothing scary — just being cared for, slowly, until the sun is back and Fern hops into the garden again.",
  },
  {
    slug: "ellas-honest-answer",
    file: "wp_b29_1_grandma_house_cover.webp",
    title: "Ella's Honest Answer",
    hook: "Grandma's tall blue vase. One elbow. A crash on the rug — and a much easier story Ella could tell instead. What does she say?",
    tags: ["girl", "honesty", "courage", "family", "town"],
    bedtimeNote:
      "Honesty without punishment as the punchline — a hug and a conversation about accidents and trust. Ella leaves lighter, with a drawing of a blue vase on the fridge.",
  },
  {
    slug: "the-little-lighthouse",
    file: "wp_b30_1_white_lighthouse_cover.webp",
    title: "The Little Lighthouse",
    hook: "Thick grey fog rolling in off the water. A duckling family lost somewhere out in it. How bright can one little lighthouse shine?",
    tags: ["animals", "kindness", "courage", "sea", "night"],
    bedtimeNote:
      "A sea-and-night story about being the light for someone else. The fog drifts away, the stars come out, and Cora gives the lamp one last sleepy spin.",
  },
  {
    slug: "the-moons-light",
    file: "wp_b31_1_mouse_looked_cover.webp",
    title: "The Moon's Light",
    hook: "Max the little mouse wished he could keep a bit of the night's soft light. Silver moths circled, then drifted toward the moonflower hill — were they showing him the way? What glows at the top, waiting to be carried home?",
    tags: ["animals", "curiosity", "magic", "garden", "night"],
    bedtimeNote:
      "A quiet, wonder-filled wind-down: a fallen moonflower petal glowing in the hay, the moths drifting away, and Max asleep in his moonlit nest. For kids who love a hush of magic at the end of the day.",
  },
  {
    slug: "hazels-apple-sleepout",
    file: "wp_b32_1_orchard_camp_cover.webp",
    title: "Hazel's Apple Sleepout",
    hook: "A sleepout under the biggest apple tree in the orchard. Then it gets dark, and Bramble misses his own little bed. What does a big sister do?",
    tags: ["animals", "family", "feelings", "garden", "night"],
    bedtimeNote:
      "Permission to miss home, and a soft way through it. They snuggle close on the hilltop, safe beneath the stars.",
  },
  {
    slug: "the-moon-in-the-pond",
    file: "wp_b33_1_night_pond_cover.webp",
    title: "The Moon in the Pond",
    hook: "The moon has fallen into the pond, and Dot is going to rescue it. Except — is it really down there at all?",
    tags: ["animals", "curiosity", "forest", "night"],
    bedtimeNote:
      "Short, luminous, and perfect for winding down. Time for little ducks to sleep.",
  },
  {
    slug: "the-quiet-bell",
    file: "wp_b34_1_green_mountain_cover.webp",
    title: "The Quiet Bell",
    hook: "Clang, clang, clang goes Gus's shiny silver bell. Butterflies scatter, birds fly off, frogs dive. Why won't anyone stay?",
    tags: ["animals", "friendship", "feelings", "kindness", "garden"],
    bedtimeNote:
      "A gentle lesson about volume and belonging. Ends with Gus tinkling soft goodnights as the stars come out.",
  },
  {
    slug: "brave-on-the-pier",
    file: "wp_b35_1_loves_sea_cover.webp",
    title: "Brave on the Pier",
    hook: "He loves the sea, and the long pier makes his knees shake. A wooden gull whistle says: blow at every safe step. How far can Cole get?",
    tags: ["boy", "courage", "feelings", "confidence", "sea"],
    bedtimeNote:
      "Courage measured in careful steps rather than big leaps — and a child who ends up showing younger kids how. Closes with the pier lights blinking soft and slow outside the window.",
  },
  {
    slug: "benis-blanket-fort",
    file: "wp_b36_1_young_rabbit_cover.webp",
    title: "Beni's Blanket Fort",
    hook: "A blanket fort built for storytime, already a little tight. Now Wren needs somewhere dry out of the rain. Can they really fit one more?",
    tags: ["animals", "sharing", "friendship", "creativity", "rain"],
    bedtimeNote:
      "Sharing space as the softest kind of kindness. Ends as the coziest fort ever — warm, dry, and full.",
  },
  {
    slug: "zoes-lost-hum",
    file: "wp_b37_1_soft_fuzzy_cover.webp",
    title: "Zoe's Lost Hum",
    hook: "One morning the roses don't sway and the daisies don't nod. A trail of silent flowers leads off into the mist. Where has the garden's hum gone?",
    tags: ["animals", "music", "curiosity", "garden", "magic"],
    bedtimeNote:
      "A gentle mystery adventure that ends with the garden humming a soft sleepy tune — and Zoe proud, warm, and ready for rest.",
  },
  {
    slug: "the-brave-little-acorn",
    file: "wp_b38_1_under_a_big_oak_cover.webp",
    title: "The Brave Little Acorn",
    hook: "One little acorn who wants a sunny spot of his own. Moss too wet, creek too splashy, clover too shady. Is there anywhere just right?",
    tags: ["objects", "courage", "curiosity", "friendship", "forest"],
    bedtimeNote:
      "A first-step courage story with a snug ending. Noah sleeps warm by the oak roots, happy in the spot he found.",
  },
  {
    slug: "midnight-bread",
    file: "wp_b39_1_family_bakery_cover.webp",
    title: "Midnight Bread",
    hook: "The bakery timer breaks at midnight and the dough is rising too fast. Everyone else is asleep — can Hannah save the morning bread?",
    tags: ["girl", "creativity", "kindness", "family", "town"],
    bedtimeNote:
      "Competence at an age when children rarely get to feel any. Ends with a pale blue street, flour still on her cheek, and dreams of warm rolls and a quiet kitchen.",
  },
  {
    slug: "the-midnight-mail",
    file: "wp_b40_1_every_night_cover.webp",
    title: "The Midnight Mail",
    hook: "Letters delivered, satchel nearly empty. Then the wind lifts the very last one out into the storm. Does Otto go after it?",
    tags: ["animals", "courage", "kindness", "town", "night"],
    bedtimeNote:
      "Why Otto loves his job, and why courage looks like finishing the round. He curls up in his clock-tower nook under the calm moon.",
  },
  {
    slug: "the-wobbly-birthday-cake",
    file: "wp_b41_1_lets_bake_cover.webp",
    title: "The Wobbly Birthday Cake",
    hook: "Eggs, butter, sugar, and a cake for Granny's birthday. Ding! It comes out leaning right over. Is a wobbly cake still the best cake?",
    tags: ["animals", "creativity", "family", "friendship", "confidence"],
    bedtimeNote:
      "Imperfection as love. The burrow glows with party light while Lily and Jake yawn, proud of their wonderful wobbly cake.",
  },
  {
    slug: "miras-teacup-balloon",
    file: "wp_b42_1_built_balloon_cover.webp",
    title: "Mira's Teacup Balloon",
    hook: "A balloon built out of a teacup. Silver clouds, golden windows far below, a meadow floating in the sky. What does Mira bring home from up there?",
    tags: ["animals", "curiosity", "courage", "magic", "night"],
    bedtimeNote:
      "Wonder that still lands soft. Mira ties the balloon safe for tomorrow and closes her bright eyes while the stars blink slowly.",
  },
  {
    slug: "owens-soft-blanket",
    file: "wp_b43_1_mole_lived_cover.webp",
    title: "The Softest Blanket",
    hook: "One soft blue blanket, whooshed out the door by the wind. A trail of blue threads through the root tunnels. Who's tucked up under it at the other end?",
    tags: ["animals", "sharing", "friendship", "kindness", "forest"],
    bedtimeNote:
      "Sharing when it costs something. That night the wind whooshes again outside — but inside, Owen and Paul sleep warm under the mended blanket.",
  },
  {
    slug: "avas-rain-day",
    file: "wp_b44_1_duckling_woke_cover.webp",
    title: "Ava's Rain Day",
    hook: "A silver stream that only runs on rainy days. Yellow boots on, and a path that wasn't there yesterday. Where does it go?",
    tags: ["animals", "curiosity", "kindness", "rain", "garden"],
    bedtimeNote:
      "Each rainy day can hide a new path. Warm soup, a rainbow over the hill, and Ava asleep in Mama's wings dreaming of glowing stones.",
  },
  {
    slug: "the-mirror-garden",
    file: "wp_b45_1_quiet_voice_cover.webp",
    title: "The Mirror Garden",
    hook: "A boy with a quiet voice, and a mirror maze that shows him scared, then too loud, then calm. Can quiet still be heard?",
    tags: ["boy", "confidence", "feelings", "family", "garden"],
    bedtimeNote:
      "For the child who gets talked over. Nothing is raised and nothing is dramatic — just Wade falling asleep proud of his clear, quiet words.",
  },
];

/** How many stories the site sample catalog lists — keep copy in sync sitewide. */
export const SAMPLE_STORY_COUNT = STORIES.length;

/** Homepage showcase: only three stories; full list via buttons below. */
export const FEATURED_STORIES = STORIES.slice(0, 3);

/** 网站故事库顺序与 App 书架完全一致：见 App 的 STORY_ORDER（按 bookNumber 升序，
 * b01 在最前），本数组即 App 可见的前 45 本（b01–b45），顺序、标题、封面文件名
 * 均逐本对齐 App。/stories 页面直接复用 STORIES 即可，无需单独倒序。 */

export function storiesByTag(tag: StoryTag): Story[] {
  return STORIES.filter((s) => s.tags.includes(tag));
}

export function getStory(slug: string): Story | undefined {
  return STORIES.find((s) => s.slug === slug);
}

/** Phrase that follows "More …" in the related-stories heading. Written out
 * per tag because the pill labels don't all pluralize into English ("More
 * animals stories"). */
export const TAG_MORE_HEADINGS: Record<StoryTag, string> = {
  boy: "stories with boys",
  girl: "stories with girls",
  animals: "animal stories",
  objects: "stories with toys & things",
  kindness: "stories about kindness",
  friendship: "friendship stories",
  courage: "stories about courage",
  feelings: "stories about big feelings",
  patience: "stories about patience",
  sharing: "stories about sharing",
  honesty: "stories about honesty",
  curiosity: "curious adventure stories",
  family: "family stories",
  confidence: "stories about being yourself",
  creativity: "stories about making & fixing",
  music: "stories about music",
  bedtime: "sleepy-time stories",
  sea: "stories by the sea",
  forest: "stories in the woods",
  garden: "garden & farm stories",
  town: "home & town stories",
  snow: "snow & winter stories",
  rain: "rainy-day stories",
  night: "moon & stars stories",
  magic: "magic & wonder stories",
};

/** Human label for a tag — mirrors moonpage-app/lib/i18n.ts (English). */
export const TAG_LABELS: Record<StoryTag, string> = {
  boy: "Boys",
  girl: "Girls",
  animals: "Animals",
  objects: "Toys & things",
  kindness: "Kindness",
  friendship: "Friendship",
  courage: "Courage",
  feelings: "Big feelings",
  patience: "Patience",
  sharing: "Sharing",
  honesty: "Honesty",
  curiosity: "Curiosity",
  family: "Family",
  confidence: "Being yourself",
  creativity: "Making & fixing",
  music: "Music",
  bedtime: "Sleepy time",
  sea: "By the sea",
  forest: "In the woods",
  garden: "Garden & farm",
  town: "Home & town",
  snow: "Snow & winter",
  rain: "Rainy day",
  night: "Moon & stars",
  magic: "Magic & wonder",
};
