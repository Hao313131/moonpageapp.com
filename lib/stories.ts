/**
 * The public story catalog for the website — a sample of the app's library,
 * not the whole shelf.
 *
 * Titles and cover filenames are verified against
 * moonpage-app/data/stories/*.ts book by book. `hook` and `shortHook` are
 * original marketing copy written from the story text — never quotes from
 * the stories themselves.
 *
 * `tags` drive the themed collection pages (see lib/collections.ts). Tag a
 * story only if the theme is genuinely central to it; a collection page that
 * over-promises is worse than a shorter one.
 */

export type StoryTag =
  | "animals"
  | "sleepy"
  | "kindness"
  | "big-feelings"
  | "adventure"
  | "sea"
  | "winter"
  | "friendship"
  | "courage";

export type Story = {
  /** URL segment for /stories/<slug>. */
  slug: string;
  /** Cover filename in public/covers — matches the app asset name exactly. */
  file: string;
  title: string;
  /** Two-line hook used on /stories and the collection pages. */
  hook: string;
  /** Tighter one-line variant for the homepage grid. Falls back to `hook`. */
  shortHook?: string;
  tags: StoryTag[];
  /**
   * Story page body: [what happens, why it works at bedtime]. Written from
   * the story text in moonpage-app/data/stories/*.ts — a description of the
   * book, never lines quoted out of it.
   */
  summary: [string, string];
};

export const STORIES: Story[] = [
  {
    slug: "slow-down-seal",
    file: "wp_b01_1_blue_sea_cover.webp",
    title: "Slow Down, Seal!",
    hook: "Sully never stops zooming — until one wise old turtle shows him what he's been missing all along.",
    shortHook:
      "A speedy little seal learns that the best things are easy to miss in a hurry.",
    tags: ["animals", "sea", "big-feelings"],
    summary: [
      "Sully is the fastest little seal in the bay, and he knows it. He zooms past the crabs, past the silver fish, past a coral garden he never even looks at — and bumps his head, and splashes a baby otter, and keeps on going. Then a wise old turtle suggests something Sully is sure will be boring: going slow. Drifting through the same water at half the speed, he starts to find shells and seahorses and warm sunlight he'd been swimming straight past, and circles back to apologize to the otter.",
      "A gentle story about slowing down and noticing things, which happens to be exactly the trick you're trying to pull off at bedtime. The last pages wind all the way down — the sea goes quiet, the sun sets, and Sully falls asleep tucked up beside Mama.",
    ],
  },
  {
    slug: "leos-museum-day",
    file: "wp_b02_1_loved_ask_cover.webp",
    title: "Leo's Museum Day",
    hook: "One giant dinosaur, a hundred questions, and a museum day Leo will never forget.",
    shortHook:
      "A curious afternoon of questions, wonder, and one very big dinosaur.",
    tags: ["adventure"],
    summary: [
      "Leo asks questions about everything, so a rainy morning at the museum is close to perfect. There's a dinosaur skeleton tall enough to whisper at, a hidden archway behind its tail, and a dark room where the gems glow like little lanterns. He can't touch them, which is its own small lesson. Up on the ramp he looks down at a model of the whole world, finds the dot where his house is, and feels tiny and enormous at once.",
      "For the child who wants something to happen at bedtime. The curiosity is the point rather than the excitement — there's no peril anywhere in it — and the story closes with puddles, a sticker, and Leo asleep dreaming of bones and shiny rocks.",
    ],
  },
  {
    slug: "brunos-snow-day",
    file: "wp_b03_1_woke_hush_cover.webp",
    title: "Bruno's Snow Day",
    hook: "Bruno wakes to a strange hush outside his door — and finds the whole world turned white.",
    shortHook:
      "A quiet, snowy morning turns into a small adventure just outside the door.",
    tags: ["animals", "winter", "friendship"],
    summary: [
      "Something has changed outside — it's too quiet — and when Bruno the bear cub looks, the first snow of the year has covered everything. What follows is a whole snow day at a toddler's pace: crunching paws, a sled down the big hill, wobbly skating on the frozen pond, and a shivering bird he builds a nook of pine needles for. His friend Rabbit turns up, more friends arrive, and they roll a snow-bear with berry eyes.",
      "A winter story with the shape you want at bedtime: out into the cold, then home again. It ends with cocoa, a soft blanket, and Bruno curled up dreaming of snow — indoors and warm on the very last page.",
    ],
  },
  {
    slug: "noras-kind-cookies",
    file: "wp_b04_1_maple_street_cover.webp",
    title: "Nora's Kind Cookies",
    hook: "Nora bakes a batch of cookies — but the sweetest part isn't the taste, it's who she shares them with.",
    shortHook:
      "One batch of cookies, shared just right, teaches a sweet lesson in kindness.",
    tags: ["kindness"],
    summary: [
      "Mr. Reed lives next door on Maple Street and reads on his porch every day, and one cold morning Nora notices him shivering. So she and Mama bake: flour and butter and sugar, dough cut into stars, a card drawn while the kitchen fills with a warm smell. Nora carries the basket next door and knocks, a little shy. What she gets back is warm milk by the fire, stories about when Mr. Reed was a boy, and a small carved wooden bird.",
      "Kindness stories often arrive with a moral attached; this one keeps it inside the plot — a child notices something, does something small about it, and the day is warmer for both of them. Quiet from start to finish, and it ends with Nora being tucked in.",
    ],
  },
  {
    slug: "a-secret-in-the-night",
    file: "wp_b05_1_window_moon_cover.webp",
    title: "A Secret in the Night",
    hook: "Something magical is happening after dark, and only the sleepiest eyes will catch it.",
    shortHook: "A gentle nighttime mystery, perfect for winding down before sleep.",
    tags: ["sleepy"],
    summary: [
      "Pip the bunny can't sleep — the night feels too big and too quiet — and then there's a tiny sound in the garden. Behind the old flowerpot sits a firefly whose glow has gone dim and who can't find the way home. Pip carries it, cupped in two paws, past a sleepy snail and over a little wooden bridge, following the brightest star to a hollow log full of worried fireflies. The rest of the book is the days that follow: a ladybug helped onto the right leaf, snails walked around puddles, moon cookies baked and shared.",
      "The sleepiest story on the shelf, and the one to reach for on a wired night. It's lit by moonlight and lantern flowers all the way through, nothing louder than a whisper happens in it, and it closes with Pip waving from the window and drifting off.",
    ],
  },
  {
    slug: "sams-park-friend",
    file: "wp_b06_1_went_park_cover.webp",
    title: "Sam's Park Friend",
    hook: "Sam is too shy to say hello — until a new friend at the park makes the first move.",
    tags: ["friendship", "big-feelings"],
    summary: [
      "There's a new boy at the park, sitting alone on a bench looking at his shoes. Sam walks over slowly and says hi; Jin says he just moved here and doesn't know anyone. \"You know me now,\" says Sam, and sits down. From there it's a sandcastle, water poured on the towers, a ladybug on the wall, swings pumped high, crackers split two ways, and a dog that fetches a stick — and then, at gold-and-pink o'clock, an arrangement to meet at the same bench tomorrow.",
      "For a shy child, or one starting somewhere new. It's specific about how a friendship actually starts — walk over, say your name, sit down — which is more useful to a three-year-old than being told to be friendly.",
    ],
  },
  {
    slug: "the-trapped-firefly",
    file: "wp_b07_1_summer_night_cover.webp",
    title: "The Trapped Firefly",
    hook: "A tiny firefly is lost and glowing. Can a little patience light the way back home?",
    tags: ["animals", "kindness", "sleepy"],
    summary: [
      "Glo flies higher than any of the other fireflies, and she isn't watching where she's going — which is how she ends up inside an old glass jar with the lid rolled shut. Her friends blink sadly outside; they're far too small to lift it. Then Bo the beetle arrives and starts pushing, and the jar wobbles, then rolls, all the way to the edge of a tree stump. It tips, falls soft into the grass, and the lid pops off.",
      "A warm summer-night rescue with a friend who simply keeps pushing. The whole book is set under a big round moon, and it ends with Glo asleep in the leaves and her glow gone gentle again.",
    ],
  },
  {
    slug: "maya-waits-for-the-cake",
    file: "wp_b08_1_loved_help_cover.webp",
    title: "Maya Waits for the Cake",
    hook: "The cake isn't ready yet, and Maya is not good at waiting — until she finds out why it's worth it.",
    tags: ["big-feelings"],
    summary: [
      "Maya and Papa are baking a birthday cake for Mama: two warm eggs from the henhouse, a bowl of red berries, batter stirred round and round, flour puffing up like a cloud. Then the pan goes in the oven and Papa sets the timer, and the hard part starts. \"Is it ready yet?\" So they fill the time — a book about a bear waiting for spring, flowers picked in the garden, clouds watched from the porch step, napkins folded, a banner taped above the window — and then, at last, ding.",
      "The most practical story here for a child who finds waiting unbearable, because it shows the strategy rather than just the virtue: waiting gets easier when your hands are busy. It ends with candlelight, singing, and Maya deciding it was worth it.",
    ],
  },
  {
    slug: "champion",
    file: "wp_b09_1_green_pond_cover.webp",
    title: "Champion",
    hook: "Everyone wants to win. This gentle story asks a bigger question: what really makes a champion?",
    tags: ["animals", "big-feelings", "friendship"],
    summary: [
      "Jumping Day is tomorrow and Hop, the smallest frog in the pond, wants the gold leaf. The trouble is that Big Frog can clear the whole pond and Tall Frog can clear the cattails, and Hop falls short every time he practises. Grandpa Frog tells him to do his best, which isn't what Hop wanted to hear. On the day, Hop doesn't jump the farthest — he jumps farther than he ever has — and then spots a tadpole stuck in the mud and doesn't even stop to think.",
      "A losing-well story that doesn't pretend the wanting-to-win isn't real. Good for competitive children and for the week after something didn't go their way; it ends with Hop asleep, dreaming of his best jump.",
    ],
  },
  {
    slug: "penguin-friends",
    file: "wp_b10_1_white_ice_cover.webp",
    title: "Penguin Friends",
    hook: "It's the coldest day of the year — but two penguins are about to discover something warmer than the sun.",
    tags: ["animals", "winter", "kindness", "friendship"],
    summary: [
      "Pim and Pax watch the pink sunrise from the top of the snow hill, slide down on their tummies, and dive for fish — until a chilly wind comes up and there is nowhere warm to be found. Pim has one soft red scarf, so they share it. Then they find a baby penguin alone, and share it again. Then another penguin, shivering by the fishing hole. One by one the group grows until everyone is in one big circle with the wind whooshing harmlessly around the outside.",
      "A cozy-ending winter story about the arithmetic of sharing, where the answer keeps coming out as more rather than less. The last pages are stars, yawns, and a whole huddle of penguins falling asleep.",
    ],
  },
  {
    slug: "mias-secret-meadow",
    file: "wp_b11_1_woods_explorer_cover.webp",
    title: "Mia's Secret Meadow",
    hook: "A little copper compass, a note that says \"walk slow, look close\" — and a meadow nobody has found before.",
    tags: ["adventure", "courage"],
    summary: [
      "In the woods behind Grandma's house, something shiny is lying between the ferns: a copper compass on a green ribbon, with a note that says to walk slow and look close. The compass keeps pulling Mia sideways, through a gap between two old oaks, along mossy stones, into soft mist that is quiet rather than frightening. What she finds is a hidden sunny meadow with one old apple tree in the middle — and when she gets home and shows Grandma her drawing of it, Grandma says her own mother showed her that place.",
      "A first-adventure story where the bravery is small and real: one step, then another. The generational ending is the part parents tend to like, and it finishes with Mia asleep dreaming of butterflies and golden light.",
    ],
  },
  {
    slug: "the-starry-fish",
    file: "wp_b12_1_deep_sea_cover.webp",
    title: "The Starry Fish",
    hook: "Twinkle the starfish has never once seen a star. One kind dolphin decides that simply won't do.",
    tags: ["animals", "sea", "kindness", "sleepy"],
    summary: [
      "Twinkle has five arms, just like a star, and lives too far down in the deep blue water to have ever seen one. The other fish tell her the stars are too high and she can't reach them, which she believes, and which makes her sad. Then a dolphin overhears her wishing, offers his back, and carries her up and up through water that gets lighter and lighter — until she breaks the surface under a whole sky full of them.",
      "A sea-and-stars story with a lovely quiet payoff: the thing she wanted to see turns out to look exactly like her. Moonlight on silver water, a wave rocking soft and slow, and Twinkle carried back down to fall asleep on the sea floor.",
    ],
  },
  {
    slug: "bunnys-big-feelings",
    file: "wp_b13_1_garden_kite_cover.webp",
    title: "Bunny's Big Feelings",
    hook: "Bunny's brand-new kite is stuck in a tree, and the feeling in his chest is much too big to hold.",
    tags: ["animals", "big-feelings"],
    summary: [
      "The kite goes up beautifully — over the sunflower patch, two bright tails fluttering — and then Bunny gives the string one great big tug, and it dips and catches in a tall tree, and the string goes slack. He stamps. He kicks a pinecone down the path. His chest feels tight, like a balloon with too much air in it. Mama doesn't tell him not to be angry; she tells him big feelings aren't bad, and takes him for a walk: smell the flower, blow the candle, breathe by the cool water.",
      "The most directly useful story here for a child in the middle of tantrums, because it hands them a technique they can actually use — and names the thing that's happening. Big feelings come and go like clouds, and the kite does come down.",
    ],
  },
  {
    slug: "the-sharing-tree",
    file: "wp_b14_1_apple_tree_cover.webp",
    title: "The Sharing Tree",
    hook: "Clara's basket is full of red apples — and somehow every hungry friend who comes along makes it feel fuller.",
    tags: ["kindness", "friendship"],
    summary: [
      "Clara climbs the big apple tree in the middle of the green field and fills her basket right to the top — more than she could ever eat. Then a bird asks for one, and a hedgehog comes snuffling along, and a squirrel, and a deer stepping softly out of the woods, and she says yes every time. Which is how she ends up with an empty basket, empty hands, and a rumbling tummy. The animals haven't forgotten, though, and come back with berries, nuts, a fat plum, and a patch of ripe pears.",
      "A sharing story with actual stakes — she really does run out — which makes the ending land instead of just being nice. It closes with a picnic under the tree and a walk home at sunset.",
    ],
  },
  {
    slug: "the-sleepy-bear",
    file: "wp_b15_1_when_autumn_cover.webp",
    title: "The Sleepy Bear",
    hook: "The leaves are turning gold and Bramble the bear has one long, cozy winter's sleep to get ready for.",
    tags: ["animals", "sleepy", "winter"],
    summary: [
      "Autumn arrives, the leaves come down swish-swish, and Bramble the bear yawns an enormous yawn: winter is coming, and bears sleep the whole way through it. But first there are things to do. A fish caught at the river, a bush of ripe berries eaten up munch-munch, a dry cave found at the foot of a hill, and armful after armful of soft leaves carried in to make a bed. Then goodnight to the birds flying south, goodnight to the squirrel with her nuts, goodnight to the last flower of fall.",
      "A hibernation story that is essentially one long, gentle bedtime routine — get warm, get fed, make the bed, say goodnight to everything. Snow starts falling on the last few pages and the forest goes still and white.",
    ],
  },
  {
    slug: "the-coolest-dragon",
    file: "wp_b16_1_valley_drake_cover.webp",
    title: "The Coolest Dragon",
    hook: "Every dragon in the valley can breathe fire except Drake — who turns out to have a gift none of them have.",
    tags: ["courage", "big-feelings"],
    summary: [
      "The big dragons breathe hot orange fire, roast marshmallows with it and light up the night. Drake takes the biggest breath he can manage and produces one small puff of gray smoke. The other young dragons giggle, and he goes and hides behind a rock. Then a fog rolls into the valley so thick that nobody can see their own claws and the little animals can't find their way home — and the big dragons' fire only makes more smoke. Drake takes the deepest breath of his life and blows something else entirely.",
      "For the child who is sure they're the only one who can't do the thing everyone else can. The gift turns out to be the useful one, and on the last page Drake is blowing soft breezes to rock his friends to sleep.",
    ],
  },
  {
    slug: "theos-hidden-cove",
    file: "wp_b17_1_loved_shore_cover.webp",
    title: "Theo's Hidden Cove",
    hook: "A green glass bottle, a rolled-up map, and a path through the dunes with something waiting at the end.",
    tags: ["adventure", "sea", "courage"],
    summary: [
      "At low tide the beach feels brand-new, and something is glinting near the tide line: a green glass bottle with a rolled-up map inside. Theo and Papa follow it into the tall dune grass, swish-swish, until the path splits and Theo walks a little ahead — far enough that he can't see Papa behind him. He calls out, loud and clear, and Papa is there in a moment. Then they follow the map together, down between the dunes, to a small round cove with clear water and a trickling waterfall.",
      "A treasure-map adventure whose real subject is asking for help, which the story frames as the brave thing rather than the failure. Theo leaves the bottle on a sunny rock for the next explorer, and falls asleep with the cove still in his dreams.",
    ],
  },
  {
    slug: "the-brave-little-boat",
    file: "wp_b18_1_little_harbor_cover.webp",
    title: "The Brave Little Boat",
    hook: "Bo is the smallest boat in the harbor — until a cry for help comes from far out on the water.",
    tags: ["courage", "sea", "kindness"],
    summary: [
      "Bo is a small red boat with a cheerful little flag who watches the big ships go out to sea and stays close to the calm, safe shore. One afternoon dark clouds roll in, the wind gets up, the waves grow tall — and a tiny voice calls for help from far out: a duck stuck on a rock, with nobody else near. Bo's heart goes thump, thump, thump. \"I am little,\" he says, \"but I can try.\" Up and down through the waves he goes, bumpity-bump, and does not turn back.",
      "The clearest definition of courage on the shelf, said out loud by the character: he was scared and tried anyway. The storm blows over on the way home and the book ends with the harbor calm and Bo rocking gently in it.",
    ],
  },
  {
    slug: "counting-sheep",
    file: "wp_b19_1_bedtime_moon_cover.webp",
    title: "Counting Sheep",
    hook: "Little Lamb is wide awake, so Mama teaches her the oldest bedtime trick there is. One fluffy sheep. Two...",
    tags: ["sleepy", "animals"],
    summary: [
      "The moon is up, the stars are out, and Little Lamb is wide, wide awake — wiggling left, wiggling right, unable to rest. Mama sits softly by the bed and suggests counting sheep. So Lamb closes her eyes, and one fluffy sheep hops over a meadow fence, and two cross a little wooden bridge over a moonlit stream, and three, and four go up a hill of clouds. Somewhere around eight, floating over a moonlit pond, her breathing has gone slow and deep.",
      "This is the one to read when nothing else is working. It's built as a wind-down rather than a story: the counting sets the rhythm, each page is quieter than the last, and it's designed so that a child may well not hear the end of it. Read it slowly, and let your voice trail off.",
    ],
  },
  {
    slug: "the-rainbow-umbrella",
    file: "wp_b20_1_gray_rainy_cover.webp",
    title: "The Rainbow Umbrella",
    hook: "Lottie's umbrella has every color in it — and just enough room underneath for one wet little kitten.",
    tags: ["kindness", "animals"],
    summary: [
      "It's a gray, drippy day, and Lottie has an umbrella as bright as a rainbow — red and orange, yellow and green, blue and purple. Out she goes to splash in the shiny puddles, and then she hears a small mew: a kitten under the garden bench, wet and shivering. There's room, so the kitten comes under. Then a lost duckling paddling in circles. Then a mucky puppy with droopy ears. Then a shivering lamb by a fence. Lottie walks every one of them home, one by one.",
      "A rainy-day kindness story with a repeating pattern young children love to join in on — there's always room for one more. The rain stops at the end, a real rainbow comes out, and Lottie skips home warm and dry.",
    ],
  },
];

/** Homepage grid: the first five, with their tighter hooks. */
export const FEATURED_STORIES = STORIES.slice(0, 5);

export function storiesByTag(tag: StoryTag): Story[] {
  return STORIES.filter((s) => s.tags.includes(tag));
}

export function getStory(slug: string): Story | undefined {
  return STORIES.find((s) => s.slug === slug);
}

/** Human label for a tag — used in nav pills and on story pages. */
export const TAG_LABELS: Record<StoryTag, string> = {
  animals: "Animals",
  sleepy: "Sleepy",
  kindness: "Kindness",
  "big-feelings": "Big feelings",
  adventure: "Adventure",
  sea: "Sea",
  winter: "Winter",
  friendship: "Friendship",
  courage: "Courage",
};
