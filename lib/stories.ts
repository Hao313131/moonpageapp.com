/**
 * The public story catalog for the website — a sample of the app's library,
 * not the whole shelf.
 *
 * Titles and cover filenames are verified against
 * moonpage-app/data/stories/*.ts book by book. `hook` and `shortHook` are
 * original marketing copy written from the story text — never quotes from
 * the stories themselves.
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
    hook: "He's the fastest seal in the bay — and he's about to discover everything he swam right past.",
    shortHook: "Zoom less. Notice more. One little seal's softest adventure yet.",
    tags: ["animals", "patience", "kindness", "sea", "family"],
    summary: [
      "Sully never stops. He zooms past crabs, silver fish, and a coral garden he never even looks at — until he bumps his head, splashes a baby otter, and keeps going anyway. Then a wise old turtle suggests the one thing Sully is sure will be boring: going slow. At half speed, the same water fills with shells, seahorses, and warm sunlight he'd been racing straight through.",
      "The last pages wind all the way down — the sea goes quiet, the sun sets, and Sully falls asleep tucked up beside Mama. Perfect for kids who need permission to settle.",
    ],
  },
  {
    slug: "leos-museum-day",
    file: "wp_b02_1_loved_ask_cover.webp",
    title: "Leo's Museum Day",
    hook: "One rainy morning. One giant dinosaur. A hundred questions that won't wait until tomorrow.",
    shortHook: "A museum day that turns wonder into the softest kind of excitement.",
    tags: ["boy", "curiosity", "family", "town", "rain"],
    summary: [
      "Leo asks questions about everything, so a rainy museum morning is close to perfect. There's a dinosaur skeleton tall enough to whisper at, a hidden archway behind its tail, and a dark room where gems glow like little lanterns. Up on the ramp he looks down at a model of the whole world, finds the dot where his house is, and feels tiny and enormous at once.",
      "Curiosity without peril — puddles, a sticker, and Leo asleep dreaming of bones and shiny rocks. For kids who want something to happen at bedtime without getting wound up.",
    ],
  },
  {
    slug: "brunos-snow-day",
    file: "wp_b03_1_woke_hush_cover.webp",
    title: "Bruno's Snow Day",
    hook: "The world went white overnight. Bruno steps outside — and the hush is only the beginning.",
    shortHook: "First snow, first sled, first friends — then cocoa and dreams.",
    tags: ["animals", "friendship", "kindness", "snow", "forest"],
    summary: [
      "Something has changed outside — it's too quiet — and when Bruno the bear cub looks, the first snow of the year has covered everything. What follows is a whole snow day at toddler pace: crunching paws, a sled down the big hill, wobbly skating, and a shivering bird he builds a nook of pine needles for. Rabbit turns up, more friends arrive, and they roll a snow-bear with berry eyes.",
      "Out into the cold, then home again — cocoa, a soft blanket, and Bruno curled up dreaming of snow. The winter bedtime shape parents reach for.",
    ],
  },
  {
    slug: "noras-kind-cookies",
    file: "wp_b04_1_maple_street_cover.webp",
    title: "Nora's Kind Cookies",
    hook: "One cold morning, Nora notices her neighbor shivering. What she bakes next changes both their days.",
    shortHook: "Cookies, a shy knock, and the warmest kind of kindness.",
    tags: ["girl", "kindness", "friendship", "family", "town"],
    summary: [
      "Mr. Reed reads on his porch every day, and one cold morning Nora notices him shivering. So she and Mama bake: flour and butter and sugar, dough cut into stars, a card drawn while the kitchen fills with a warm smell. Nora carries the basket next door and knocks, a little shy. What she gets back is warm milk by the fire, stories about when Mr. Reed was a boy, and a small carved wooden bird.",
      "Kindness kept inside the plot — no lecture, just a child who notices and does something small. Ends with Nora being tucked in.",
    ],
  },
  {
    slug: "a-secret-in-the-night",
    file: "wp_b05_1_window_moon_cover.webp",
    title: "A Secret in the Night",
    hook: "Pip can't sleep. Then a tiny glow in the garden asks for help — and the night stops feeling so big.",
    shortHook: "Moonlight, a lost firefly, and the sleepiest rescue on the shelf.",
    tags: ["animals", "kindness", "courage", "night", "bedtime"],
    summary: [
      "Pip the bunny can't sleep — the night feels too big and too quiet — and then there's a tiny sound in the garden. Behind the old flowerpot sits a firefly whose glow has gone dim. Pip carries it past a sleepy snail and over a wooden bridge, following the brightest star to a hollow log full of worried fireflies. The days that follow fill with small kindnesses: a ladybug helped onto the right leaf, snails walked around puddles, moon cookies baked and shared.",
      "Lit by moonlight and lantern flowers from start to finish. Nothing louder than a whisper — and Pip drifts off waving from the window.",
    ],
  },
  {
    slug: "sams-park-friend",
    file: "wp_b06_1_went_park_cover.webp",
    title: "Sam's Park Friend",
    hook: "There's a new kid on the bench looking at his shoes. Sam's next three words change everything.",
    shortHook: "How a friendship actually starts — walk over, say hi, sit down.",
    tags: ["boy", "friendship", "kindness", "family", "town"],
    summary: [
      "There's a new boy at the park, sitting alone looking at his shoes. Sam walks over slowly and says hi; Jin says he just moved here and doesn't know anyone. \"You know me now,\" says Sam, and sits down. From there it's a sandcastle, swings pumped high, crackers split two ways, and an arrangement to meet at the same bench tomorrow.",
      "For shy kids, or anyone starting somewhere new. Concrete, useful, and soft enough for bedtime.",
    ],
  },
  {
    slug: "the-trapped-firefly",
    file: "wp_b07_1_summer_night_cover.webp",
    title: "The Trapped Firefly",
    hook: "Glo flew too high. Now she's stuck in a jar — and her friends are far too small to lift the lid.",
    shortHook: "A summer-night rescue that ends under a big round moon.",
    tags: ["animals", "friendship", "courage", "kindness", "night"],
    summary: [
      "Glo flies higher than any of the other fireflies — which is how she ends up inside an old glass jar with the lid rolled shut. Her friends blink sadly outside; they're far too small to lift it. Then Bo the beetle arrives and starts pushing, and the jar wobbles, then rolls, all the way to the edge of a tree stump. It tips, falls soft into the grass, and the lid pops off.",
      "Warm summer-night friendship under a big moon. Ends with Glo asleep in the leaves and her glow gone gentle again.",
    ],
  },
  {
    slug: "maya-waits-for-the-cake",
    file: "wp_b08_1_loved_help_cover.webp",
    title: "Maya Waits for the Cake",
    hook: "The oven is on. The timer is ticking. Maya is not good at waiting — until she finds out what waiting is really for.",
    shortHook: "Birthday cake magic — and the secret that makes waiting bearable.",
    tags: ["girl", "patience", "family", "creativity", "garden"],
    summary: [
      "Maya and Papa are baking a birthday cake for Mama: eggs from the henhouse, a bowl of red berries, batter stirred round and round. Then the pan goes in and Papa sets the timer — and the hard part starts. So they fill the time: a book about a bear waiting for spring, flowers picked in the garden, clouds watched from the porch, a banner taped above the window — and then, at last, ding.",
      "Shows the strategy rather than just the virtue: waiting gets easier when your hands are busy. Ends with candlelight, singing, and Maya deciding it was worth it.",
    ],
  },
  {
    slug: "champion",
    file: "wp_b09_1_green_pond_cover.webp",
    title: "Champion",
    hook: "Jumping Day is tomorrow. Hop wants the gold leaf more than anything — but winning isn't the twist that matters.",
    shortHook: "He didn't jump farthest. What he did next made him a champion.",
    tags: ["animals", "kindness", "friendship", "confidence", "family"],
    summary: [
      "Jumping Day is tomorrow and Hop, the smallest frog in the pond, wants the gold leaf. Big Frog can clear the whole pond; Tall Frog can clear the cattails; Hop falls short every time he practises. On the day, Hop doesn't jump the farthest — he jumps farther than he ever has — and then spots a tadpole stuck in the mud and doesn't even stop to think.",
      "A losing-well story that never pretends wanting to win isn't real. Ends with Hop asleep, dreaming of his best jump.",
    ],
  },
  {
    slug: "penguin-friends",
    file: "wp_b10_1_white_ice_cover.webp",
    title: "Penguin Friends",
    hook: "One red scarf. A freezing wind. And a huddle that keeps getting warmer — the more they share.",
    shortHook: "The arithmetic of sharing, where more always means warmer.",
    tags: ["animals", "friendship", "sharing", "kindness", "snow"],
    summary: [
      "Pim and Pax watch the pink sunrise, slide down on their tummies, and dive for fish — until a chilly wind comes up and there is nowhere warm to be found. Pim has one soft red scarf, so they share it. Then they find a baby penguin alone, and share it again. Then another. One by one the group grows until everyone is in one big circle with the wind whooshing harmlessly around the outside.",
      "Cozy-ending winter magic: stars, yawns, and a whole huddle of penguins falling asleep.",
    ],
  },
  {
    slug: "mias-secret-meadow",
    file: "wp_b11_1_woods_explorer_cover.webp",
    title: "Mia's Secret Meadow",
    hook: "A copper compass. A note that says walk slow, look close. And a meadow Grandma already knew.",
    shortHook: "One step, then another — into a secret only family remembers.",
    tags: ["girl", "curiosity", "courage", "family", "forest"],
    summary: [
      "In the woods behind Grandma's house, something shiny is lying between the ferns: a copper compass on a green ribbon, with a note that says to walk slow and look close. The compass keeps pulling Mia sideways, through a gap between two old oaks, along mossy stones, into soft mist. What she finds is a hidden sunny meadow with one old apple tree — and when she shows Grandma her drawing, Grandma says her own mother showed her that place.",
      "A first-adventure story where bravery is small and real. Ends with Mia asleep dreaming of butterflies and golden light.",
    ],
  },
  {
    slug: "the-starry-fish",
    file: "wp_b12_1_deep_sea_cover.webp",
    title: "The Starry Fish",
    hook: "Twinkle has five arms like a star — and has never once seen one. Tonight, a dolphin changes that.",
    shortHook: "Up through the dark water… toward a sky that looks just like her.",
    tags: ["animals", "curiosity", "friendship", "sea", "night"],
    summary: [
      "Twinkle lives too far down in the deep blue water to have ever seen a star. The other fish tell her the stars are too high and she can't reach them. Then a dolphin overhears her wishing, offers his back, and carries her up and up through water that gets lighter and lighter — until she breaks the surface under a whole sky full of them.",
      "Sea-and-stars payoff: the thing she wanted to see looks exactly like her. Moonlight, a soft wave, and Twinkle asleep on the sea floor.",
    ],
  },
  {
    slug: "bunnys-big-feelings",
    file: "wp_b13_1_garden_kite_cover.webp",
    title: "Bunny's Big Feelings",
    hook: "The kite is stuck. His chest feels like a balloon with too much air. Mama doesn't say calm down — she shows him how.",
    shortHook: "Big feelings, named and breathed through — then the kite comes down.",
    tags: ["animals", "feelings", "family", "garden"],
    summary: [
      "The kite goes up beautifully — then Bunny gives the string one great big tug, and it catches in a tall tree. He stamps. He kicks a pinecone. His chest feels tight. Mama doesn't tell him not to be angry; she tells him big feelings aren't bad, and takes him for a walk: smell the flower, blow the candle, breathe by the cool water.",
      "Hands kids a technique they can actually use. Big feelings come and go like clouds — and yes, the kite does come down.",
    ],
  },
  {
    slug: "the-sharing-tree",
    file: "wp_b14_1_apple_tree_cover.webp",
    title: "The Sharing Tree",
    hook: "Clara's basket is full of red apples. By sunset it's empty — and somehow that's when the magic starts.",
    shortHook: "She gave every apple away. What came back will surprise you.",
    tags: ["girl", "sharing", "kindness", "friendship", "garden"],
    summary: [
      "Clara climbs the big apple tree and fills her basket right to the top. Then a bird asks for one, and a hedgehog, and a squirrel, and a deer — and she says yes every time. Which is how she ends up with an empty basket, empty hands, and a rumbling tummy. The animals haven't forgotten, though, and come back with berries, nuts, a fat plum, and a patch of ripe pears.",
      "A sharing story with real stakes — she really does run out — which makes the ending land. Picnic under the tree, walk home at sunset.",
    ],
  },
  {
    slug: "the-sleepy-bear",
    file: "wp_b15_1_when_autumn_cover.webp",
    title: "The Sleepy Bear",
    hook: "Winter is coming. Bramble has one enormous yawn — and one long, cozy sleep to get ready for.",
    shortHook: "Berries, a leaf bed, and goodnight to the whole forest.",
    tags: ["animals", "patience", "bedtime", "forest", "snow"],
    summary: [
      "Autumn arrives, the leaves come down swish-swish, and Bramble the bear yawns an enormous yawn: winter is coming, and bears sleep the whole way through it. But first: a fish at the river, ripe berries, a dry cave, armful after armful of soft leaves for a bed. Then goodnight to the birds flying south, goodnight to the squirrel, goodnight to the last flower of fall.",
      "Essentially one long, gentle bedtime routine. Snow starts falling on the last pages and the forest goes still and white.",
    ],
  },
  {
    slug: "the-coolest-dragon",
    file: "wp_b16_1_valley_drake_cover.webp",
    title: "The Coolest Dragon",
    hook: "Every dragon breathes fire except Drake. Then the fog rolls in — and his \"useless\" gift saves everyone.",
    shortHook: "The dragon who couldn't breathe fire turns out to be the hero.",
    tags: ["animals", "confidence", "courage", "friendship", "magic"],
    summary: [
      "The big dragons breathe hot orange fire. Drake takes the biggest breath he can manage and produces one small puff of gray smoke. The other young dragons giggle, and he hides behind a rock. Then fog rolls into the valley so thick that nobody can see — and the big dragons' fire only makes more smoke. Drake takes the deepest breath of his life and blows something else entirely.",
      "For the child sure they're the only one who can't do the thing. On the last page Drake is blowing soft breezes to rock his friends to sleep.",
    ],
  },
  {
    slug: "theos-hidden-cove",
    file: "wp_b17_1_loved_shore_cover.webp",
    title: "Theo's Hidden Cove",
    hook: "A green glass bottle. A rolled-up map. And the moment Theo can't see Papa behind him.",
    shortHook: "Treasure map adventure — where asking for help is the brave part.",
    tags: ["boy", "curiosity", "courage", "family", "sea"],
    summary: [
      "At low tide something is glinting near the water: a green glass bottle with a rolled-up map inside. Theo and Papa follow it into the tall dune grass until the path splits and Theo walks a little ahead — far enough that he can't see Papa. He calls out, loud and clear, and Papa is there in a moment. Together they find a small round cove with clear water and a trickling waterfall.",
      "Asking for help framed as bravery, not failure. Theo leaves the bottle for the next explorer and falls asleep with the cove still in his dreams.",
    ],
  },
  {
    slug: "the-brave-little-boat",
    file: "wp_b18_1_little_harbor_cover.webp",
    title: "The Brave Little Boat",
    hook: "Bo is the smallest boat in the harbor. Then a cry for help comes from far out on the water.",
    shortHook: "\"I am little,\" he says, \"but I can try.\" And he does.",
    tags: ["objects", "courage", "kindness", "friendship", "sea"],
    summary: [
      "Bo is a small red boat with a cheerful little flag who watches the big ships go out and stays close to shore. One afternoon dark clouds roll in, the waves grow tall — and a tiny voice calls for help from far out: a duck stuck on a rock. Bo's heart goes thump, thump, thump. \"I am little,\" he says, \"but I can try.\" Up and down through the waves he goes, and does not turn back.",
      "Courage said out loud: he was scared and tried anyway. The storm blows over and the book ends with the harbor calm and Bo rocking gently in it.",
    ],
  },
  {
    slug: "counting-sheep",
    file: "wp_b19_1_bedtime_moon_cover.webp",
    title: "Counting Sheep",
    hook: "Wide awake. Wiggling. Unable to rest. Mama teaches the oldest bedtime trick there is — one fluffy sheep at a time.",
    shortHook: "The wind-down story built so they may not hear the ending.",
    tags: ["animals", "feelings", "family", "bedtime", "night"],
    summary: [
      "The moon is up, the stars are out, and Little Lamb is wide, wide awake. Mama sits softly by the bed and suggests counting sheep. So Lamb closes her eyes, and one fluffy sheep hops over a meadow fence, and two cross a little wooden bridge, and three, and four go up a hill of clouds. Somewhere around eight, her breathing has gone slow and deep.",
      "Reach for this when nothing else is working. Built as a wind-down rather than a plot — each page quieter than the last. Read it slowly, and let your voice trail off.",
    ],
  },
  {
    slug: "the-rainbow-umbrella",
    file: "wp_b20_1_gray_rainy_cover.webp",
    title: "The Rainbow Umbrella",
    hook: "One bright umbrella. One wet kitten. Then a duckling. Then a puppy. Then a lamb. Is there always room for one more?",
    shortHook: "Rainy-day kindness with a pattern kids love to join in on.",
    tags: ["girl", "kindness", "sharing", "rain", "town"],
    summary: [
      "It's a gray, drippy day, and Lottie has an umbrella as bright as a rainbow. Out she goes to splash in the puddles — and then she hears a small mew: a kitten under the garden bench, wet and shivering. There's room, so the kitten comes under. Then a lost duckling. Then a mucky puppy. Then a shivering lamb. Lottie walks every one of them home, one by one.",
      "There's always room for one more. The rain stops, a real rainbow comes out, and Lottie skips home warm and dry.",
    ],
  },
  {
    slug: "the-beautiful-nest",
    file: "wp_b21_1_willow_home_cover.webp",
    title: "The Beautiful Nest",
    hook: "One soft blade of grass. One rose petal. One downy feather. Stella is building the coziest nest in the world — and she will not rush.",
    shortHook: "A whole day of gathering. A nest woven by starlight.",
    tags: ["animals", "patience", "creativity", "confidence", "forest"],
    summary: [
      "Stella is a little weaver bird with one big dream: the coziest nest in the whole wide world. So she sets out and takes all day, collecting exactly one thing from each place — grass from the meadow, a reed from the river, a rose petal, a downy feather, shining straw, moss, a curl of silvery vine. A bee tells her it'll take forever. She says good things are worth the wait, and keeps going.",
      "Patience for kids who want everything finished immediately. The sun climbs, the sun sinks, and the weaving happens by starlight. Ends with Stella curled up snug in the nest she took her time over.",
    ],
  },
  {
    slug: "the-big-wide-world",
    file: "wp_b22_1_pond_edge_cover.webp",
    title: "The Big Wide World",
    hook: "Tibo dreams of the hills every evening. Getting there will take more steps than he expected — and show him more than he imagined.",
    shortHook: "Slowest turtle. Biggest view. Softest landing home.",
    tags: ["animals", "patience", "courage", "curiosity"],
    summary: [
      "Tibo is the fastest dreamer at the pond's edge and the slowest mover in it — until one morning he sets off to see the hills he's been staring at every evening. A hare zooms past and laughs; a wise old snail suggests he look around instead of ahead. So Tibo goes on purpose: step, and look; step, and listen. By afternoon he's on top of a gentle hill with rivers and forests spread out below.",
      "A patience story dressed as a travel story. Ends with Tibo home by the pond, the sunset still in his eyes, tucked into his shell and asleep.",
    ],
  },
  {
    slug: "late-to-the-party",
    file: "wp_b23_1_special_letter_cover.webp",
    title: "Late to the Party",
    hook: "Gold-star invitation. One very slow snail. The sun is already going down — will anyone still be waiting?",
    shortHook: "Real friends wait. And they save you the best seat.",
    tags: ["animals", "friendship", "patience", "courage", "garden"],
    summary: [
      "Sam the snail gets a letter with a shiny gold star: Bunny's big garden party. Mama says just do your best, and Sam slides off over a wobbly bridge, up a steep hill, through fireflies blinking like tiny road lights — and arrives when it's almost dark, sure the party must be over. But the lights are still on, the music is still playing, and Bunny has saved cake, lemonade, and the best seat.",
      "For kids who worry about being left out or left behind. Ends with Sam sliding home to bed with the party still glowing in his heart.",
    ],
  },
  {
    slug: "rusty-and-the-foggy-path",
    file: "wp_b24_1_late_play_cover.webp",
    title: "Rusty and the Foggy Path",
    hook: "Rusty stayed out too late. The woods are full of fog. His little lantern knows the way — and so do the friends who need it.",
    shortHook: "One warm gold circle of light. Step by step, everyone home.",
    tags: ["animals", "courage", "kindness", "family", "forest"],
    summary: [
      "Rusty the fox stayed too late at play, and a soft grey fog has crept over the woods. Papa's lantern makes a warm gold circle; Rusty takes one step at a time and finds he's not the only one lost — a hedgehog, then a duckling, then an owl. He holds the light high and leads them all, step by step, up a hill where the fog melts away.",
      "Courage that looks like keeping the light on for someone else while you're still scared. Closes with the lantern hung up and Rusty asleep.",
    ],
  },
  {
    slug: "milos-little-boat",
    file: "wp_b25_1_love_stream_cover.webp",
    title: "Milo's Little Boat",
    hook: "All summer he built it. Tonight, under the moon, Milo's leaf-and-twig boat finally sails.",
    shortHook: "Under the bridge, over the waterfall, into starlight.",
    tags: ["animals", "courage", "creativity", "garden", "night"],
    summary: [
      "Milo the mouse has spent all summer building a tiny boat from a curled leaf and twigs, and tonight he pushes off into the stream. The current carries him under a dark stone bridge — drip, drip — and out into moonlight; over a little waterfall that makes his heart thump; into a wide pond where stars float on the water and a frog asks for a ride.",
      "A small night adventure with real stakes and a soft landing. Milo climbs home sleepy and proud, the wide world still waiting in the window.",
    ],
  },
  {
    slug: "wrens-first-flight",
    file: "wp_b26_1_smallest_bird_cover.webp",
    title: "Wren's First Flight",
    hook: "Everyone else has flown. Today is Wren's turn — and the ground looks very, very far down.",
    shortHook: "Hop to that twig. Then the next. Then trust the wind.",
    tags: ["animals", "courage", "confidence", "family", "forest"],
    summary: [
      "All Wren's brothers and sisters have flown away, and Mama says today is her turn — but the ground looks very far down and her wings feel very small. So they start smaller: hop to that twig, then the next, then open your wings and trust the wind. Wren dips, rises, glides over the pond, climbs into pink-and-gold clouds, and lands back in the nest all by herself.",
      "For a child facing something that looks impossible from the edge. Strategy broken into steps a three-year-old can copy. Ends dreaming of the sky.",
    ],
  },
  {
    slug: "chips-autumn-gift",
    file: "wp_b27_1_cool_breeze_cover.webp",
    title: "Chip's Autumn Gift",
    hook: "Chip filled his basket for winter. Then he gave every acorn away — and discovered what winter friends are for.",
    shortHook: "Empty basket. Full heart. An autumn feast under the stars.",
    tags: ["animals", "sharing", "kindness", "friendship", "forest"],
    summary: [
      "The first cool breeze of autumn sends Chip the squirrel scampering up his oak to gather acorns, apples, and hazelnuts — basket full, cupboard ready. Then he meets Mole with an empty cupboard, Mouse shivering in the cold, and a family of hungry ducklings, and says yes every time. By the meadow he has almost nothing left — until his friends arrive with everything they saved for him.",
      "Sharing where the arithmetic keeps coming out as more. Ends with a cozy autumn feast and Chip curled in his nest, warm and thankful.",
    ],
  },
  {
    slug: "a-cozy-sick-day",
    file: "wp_b28_1_not_well_cover.webp",
    title: "A Cozy Sick Day",
    hook: "Fern feels wobbly and hot. Outside is sunny. Mama knows exactly how to make a sick day soft.",
    shortHook: "Honey tea, star soup, and rain on the window — until she's better.",
    tags: ["animals", "family", "feelings", "kindness"],
    summary: [
      "Fern wakes hot and wobbly and does not want to stay in bed — she wants the sunny garden outside. Mama tucks her in, brings honey tea, and big brother reads in a silly voice until she giggles; a friend leaves a tiny flower on the nightstand. Rain taps the window; soup with little stars in it steams on the tray. Fern sleeps and sleeps while the rain comes down.",
      "For upside-down sick days. Nothing scary — just being cared for, slowly, until the sun is back and Fern hops into the garden again.",
    ],
  },
  {
    slug: "ellas-honest-answer",
    file: "wp_b29_1_grandma_house_cover.webp",
    title: "Ella's Honest Answer",
    hook: "Crash. Grandma's favorite blue vase is in pieces. Saying what happened is harder than sweeping them up.",
    shortHook: "The truth is scary. What comes after it is a hug.",
    tags: ["girl", "honesty", "courage", "family", "town"],
    summary: [
      "Grandma's house is full of pretty things, and Ella always walks carefully — until she reaches for the tall blue vase, bumps it with her elbow, and it crashes to the rug. Her tummy goes tight; she wants to say a cat did it. Instead she carries the biggest piece to the kitchen and says, in a small voice, that she broke it.",
      "Honesty without punishment as the punchline — a hug and a conversation about accidents and trust. Ella leaves lighter, with a drawing of a blue vase on the fridge.",
    ],
  },
  {
    slug: "the-little-lighthouse",
    file: "wp_b30_1_white_lighthouse_cover.webp",
    title: "The Little Lighthouse",
    hook: "Fog rolls in off the sea. Somewhere in the mist, a duckling family is lost — and Cora's lamp is their only path home.",
    shortHook: "Click. Glow. One warm yellow path across the water.",
    tags: ["animals", "kindness", "courage", "sea", "night"],
    summary: [
      "Cora lives at the top of a little white lighthouse, and every night she lights the big warm lamp so boats can find their way home. One evening thick grey fog rolls in, and out in the mist a duckling family is lost. Cora turns the beam to its brightest and calls them toward the warm yellow path across the water, cheering on the tired little one at the back.",
      "A sea-and-night story about being the light for someone else. The fog drifts away, the stars come out, and Cora gives the lamp one last sleepy spin.",
    ],
  },
  {
    slug: "the-meadow-concert",
    file: "wp_b31_1_meadow_concert_cover.webp",
    title: "The Meadow Concert",
    hook: "Every night the meadow sings. Fern wants to join more than anything — but her ribbit feels much too small.",
    shortHook: "One shy frog. One brave ribbit. A concert under the stars.",
    tags: ["animals", "music", "confidence", "friendship", "night"],
    summary: [
      "As the sun goes down, the animals gather by the old oak for their bedtime concert — crickets chirping, bees humming, leaves rustling soft. Fern the frog loves the music more than anything, but she hides behind a leaf every night, sure her voice sounds funny. Then Cricket notices her and invites her in. Fern takes one little hop closer, opens her mouth, and sings a small, lovely ribbit that keeps the beat for the whole song.",
      "For kids who need a nudge to try. Ends with Fern hopping home under the stars, the meadow still humming in her heart.",
    ],
  },
  {
    slug: "hazels-apple-sleepout",
    file: "wp_b32_1_orchard_camp_cover.webp",
    title: "Hazel's Apple Sleepout",
    hook: "Camping under the apple tree sounded perfect — until little brother Bramble's lip starts to wobble in the dark.",
    shortHook: "First sleepout. Big feelings. A big sister who knows what to do.",
    tags: ["animals", "family", "feelings", "garden", "night"],
    summary: [
      "Hazel the hedgehog has a wonderful idea: camp out under the biggest apple tree. Little brother Bramble claps — until the orchard grows dark and he misses his own little bed. Hazel doesn't scold. She tucks moss around his feet, finds his leaf blanket, points to the same moon that shines on their burrow, and hums Mama's quiet song while fireflies blink along the creek.",
      "Permission to miss home, and a soft way through it. They snuggle close on the hilltop, safe beneath the stars.",
    ],
  },
  {
    slug: "the-moon-in-the-pond",
    file: "wp_b33_1_night_pond_cover.webp",
    title: "The Moon in the Pond",
    hook: "The moon fell into Dot's pond! Or did it? One little duck is about to learn the night's sweetest trick.",
    shortHook: "A mirror, a giggle, and a moon that was never stuck at all.",
    tags: ["animals", "curiosity", "forest", "night"],
    summary: [
      "Dot the duckling is sure the moon has fallen into her pond — and she will not give up until she saves it. A friend helps her look up, then down, then up again. The pond is like a mirror: it shows the moon, but the real moon is safe above. Dot giggles. The moon wasn't stuck — it was just saying hello.",
      "Short, luminous, and perfect for winding down. Time for little ducks to sleep.",
    ],
  },
  {
    slug: "the-quiet-bell",
    file: "wp_b34_1_green_mountain_cover.webp",
    title: "The Quiet Bell",
    hook: "Clang, clang, clang! Gus loves his loud bell — until every friend flies away. Can a softer sound bring them back?",
    shortHook: "From clang to tink — and a meadow that finally stays.",
    tags: ["animals", "friendship", "feelings", "kindness", "garden"],
    summary: [
      "Gus the goat wears a shiny silver bell and thinks clang-clang is the best sound ever. Butterflies jump. Birds fly off. Bees buzz away. Frogs dive in. Alone and sad, Gus learns from Mama Goat that soft ears need soft steps — tink, tink, tink. He practices walking slowly. A butterfly lands and stays. Soon the bees, birds, and frogs come back.",
      "A gentle lesson about volume and belonging. Ends with Gus tinkling soft goodnights as the stars come out.",
    ],
  },
  {
    slug: "the-tangled-kite",
    file: "wp_b35_1_fox_bright_cover.webp",
    title: "The Tangled Kite",
    hook: "Fly, kite, fly! Then the string slips — and Finn's bright kite is stuck high in a tree. One friend isn't enough. All of them might be.",
    shortHook: "Stuck kite. Good friends. One soft landing into happy paws.",
    tags: ["animals", "friendship", "kindness", "feelings", "forest"],
    summary: [
      "Finn's kite soars — then the string slips from his paws and the kite tangles high in a tree. One friend jumps. Another climbs. The branch is too thin; the reach is too short. Together they figure it out, careful and careful, until the kite floats down soft and slow into Finn's happy paws.",
      "Working together made it easy. The sun sets all orange like Finn's fur — a warm, satisfied close.",
    ],
  },
  {
    slug: "benis-blanket-fort",
    file: "wp_b36_1_young_rabbit_cover.webp",
    title: "Beni's Blanket Fort",
    hook: "The fort is perfect. Storytime is ready. Then one more friend knocks — and there's barely room. Or is there?",
    shortHook: "A fort is always cozier with one more friend inside.",
    tags: ["animals", "sharing", "friendship", "creativity", "rain"],
    summary: [
      "Beni builds a blanket fort and invites friends for storytime. It gets a little tight — then tighter still when Wren needs somewhere dry from the rain. Wait: they can make room. Cushions shift, blankets stretch, and somehow everyone fits. A fort, it turns out, is always cozier with one more friend inside.",
      "Sharing space as the softest kind of kindness. Ends as the coziest fort ever — warm, dry, and full.",
    ],
  },
  {
    slug: "zoes-lost-hum",
    file: "wp_b37_1_soft_fuzzy_cover.webp",
    title: "Zoe's Lost Hum",
    hook: "Dawn arrives and the rose garden is silent. Zoe follows a pale trail of quiet flowers — and finds every song trapped in crystal.",
    shortHook: "The morning song is missing. One careful bee brings it home.",
    tags: ["animals", "music", "curiosity", "garden", "magic"],
    summary: [
      "Every morning Zoe the bee hums and the rose garden wakes up happy — until one dawn the roses do not sway and the daisies do not nod. Beyond the fence, a trail of silent flowers leads into soft mist and a hollow where sticky honey crystals hang like tiny lamps, each trapping a soft buzz. An old bumblebee tells her: warm them gently. Do not break them. Crystal by crystal, Zoe frees the songs with warm wing-light.",
      "A gentle mystery adventure that ends with the garden humming a soft sleepy tune — and Zoe proud, warm, and ready for rest.",
    ],
  },
  {
    slug: "the-brave-little-acorn",
    file: "wp_b38_1_under_a_big_oak_cover.webp",
    title: "The Brave Little Acorn",
    hook: "Noah the acorn leaves his safe leaf pile to find a sunny home of his own. Too wet. Too splashy. Too shady. Then — perfect.",
    shortHook: "One little roll toward the sun, with a squirrel friend beside him.",
    tags: ["objects", "courage", "curiosity", "friendship", "forest"],
    summary: [
      "Under a big oak, in a soft pile of leaves, lives a little acorn named Noah. One bright morning he wants a sunny spot of his own, so he rolls out onto the winding path. Moss is too wet. The creek is too splashy. The clover is soft but shady. Kind squirrel Ivy nudges him along until they reach a warm gold hollow by the oak roots — sunlight pouring onto his shell. Ivy tucks a dry leaf beside him like a blanket.",
      "A first-step courage story with a snug ending. Noah sleeps warm by the oak roots, happy in the spot he found.",
    ],
  },
  {
    slug: "the-starlight-picnic",
    file: "wp_b39_1_one_special_night_the_cover.webp",
    title: "The Starlight Picnic",
    hook: "Once a year the stars put on a sparkling show. Tonight the forest friends climb the hill — muffins, berry juice, and a blanket under the sky.",
    shortHook: "Falling stars, warm muffins, and friends who wait for the show together.",
    tags: ["animals", "friendship", "patience", "forest", "night"],
    summary: [
      "Tonight is the night of the falling stars. Ruby the rabbit packs carrot muffins; Ben the hedgehog brings sweet berry juice; Tilly the turtle carries a big soft blanket. They walk the forest path, climb the grassy hill, spread the blanket, and share the picnic while they wait. The sky begins to sparkle. One by one, the stars put on their show.",
      "Patience wrapped in wonder. They close their eyes under the wide and starry sky, still smiling.",
    ],
  },
  {
    slug: "the-midnight-mail",
    file: "wp_b40_1_every_night_cover.webp",
    title: "The Midnight Mail",
    hook: "When the town falls asleep, Otto the owl flies out with the mail. One letter left — then the storm snatches it into the dark.",
    shortHook: "Tap, tap on sleepy doors. One last letter. One brave dive.",
    tags: ["animals", "courage", "kindness", "town", "night"],
    summary: [
      "Every night Otto the owl flies out with his leather satchel: a letter for Ned the mole, one for the beavers on the houseboat, one for a rabbit on the snowy hill. Satchel almost empty — then the wind rises and the last letter spins out into the storm. Otto dives after it over dark treetops, catches it on a wet bridge rail, and delivers it to Vera the tortoise, who whispers that someone remembered her.",
      "Why Otto loves his job, and why courage looks like finishing the round. He curls up in his clock-tower nook under the calm moon.",
    ],
  },
  {
    slug: "the-wobbly-birthday-cake",
    file: "wp_b41_1_lets_bake_cover.webp",
    title: "The Wobbly Birthday Cake",
    hook: "Ding! The cake is ready — and it leans like a sleepy tower. Can a wobbly cake still be the best cake ever?",
    shortHook: "Pink frosting, one wonky candle, and love that hides the lean.",
    tags: ["animals", "creativity", "family", "friendship", "confidence"],
    summary: [
      "Lily the squirrel and Jake the mouse set out to bake Granny a birthday cake — eggs, butter, sugar, batter stirred round and round. Ding! The cake comes out all leany and wobbly. They look at each other with worried eyes — then decide it is perfect because they made it. Pink frosting in thick happy swirls, red berries on top, one wonky candle that tips left. Granny arrives, eyes twinkling: best cake ever. And she means it.",
      "Imperfection as love. The burrow glows with party light while Lily and Jake yawn, proud of their wonderful wobbly cake.",
    ],
  },
  {
    slug: "miras-teacup-balloon",
    file: "wp_b42_1_built_balloon_cover.webp",
    title: "Mira's Teacup Balloon",
    hook: "A teacup basket. A patched cloth balloon. A tiny mouse rising through silver clouds toward a meadow that shouldn't exist.",
    shortHook: "Up through the stars — and home with one glowing cloud-flower.",
    tags: ["animals", "curiosity", "courage", "magic", "night"],
    summary: [
      "Mira the mouse builds a balloon from a teacup and rises through soft silver clouds past a sleepy town of golden windows. A soft bump lands her on a floating cloud meadow — white grass, tiny glowing flowers, an owl waving from a fencepost of mist. She picks one cloud-flower for her windowsill, weathers a sudden gust with a brave face, and drifts home under the moon's company.",
      "Wonder that still lands soft. Mira ties the balloon safe for tomorrow and closes her bright eyes while the stars blink slowly.",
    ],
  },
  {
    slug: "owens-soft-blanket",
    file: "wp_b43_1_mole_lived_cover.webp",
    title: "Owen's Soft Blanket",
    hook: "Whoosh! The wind steals Owen's favorite blue blanket. The trail of threads leads somewhere unexpected — and to a cold little beetle.",
    shortHook: "Lost blanket. Found friend. Warmth that doubles when shared.",
    tags: ["animals", "sharing", "friendship", "kindness", "forest"],
    summary: [
      "Owen the mole loves one soft blue blanket more than anything. One windy morning it whooshes right out the door. He follows a trail of blue threads through root tunnels and pale mushrooms to a willow by the duck pond — where Paul the beetle has draped the blanket over himself like a tiny tent. Owen takes a deep breath, then smiles: they can share it. Half for each friend, mended with a tuft of warm wool.",
      "Sharing when it costs something. That night the wind whooshes again outside — but inside, Owen and Paul sleep warm under the mended blanket.",
    ],
  },
  {
    slug: "avas-rain-day",
    file: "wp_b44_1_duckling_woke_cover.webp",
    title: "Ava's Rain Day",
    hook: "Drip, drip, drip. A silver stream appears only on rainy days — and Ava in yellow boots is about to follow it somewhere new.",
    shortHook: "Rain boots on. A secret cave. A bunny who needs help.",
    tags: ["animals", "curiosity", "kindness", "rain", "garden"],
    summary: [
      "Ava the duckling wakes to rain and a silver stream running by the fence — a path that only appears on rainy days. In yellow boots she follows it past wet reeds to a low rock wall and a tiny waterfall singing into a shallow cave of glowing stones. Then a sniff from the reed maze: Kate the bunny is stuck. Ava pushes the soft reeds aside, they peek once more at the glowing stones, and hurry home before the stream shrinks away.",
      "Each rainy day can hide a new path. Warm soup, a rainbow over the hill, and Ava asleep in Mama's wings dreaming of glowing stones.",
    ],
  },
  {
    slug: "max-and-the-moonflowers",
    file: "wp_b45_1_mouse_looked_cover.webp",
    title: "Max and the Moonflowers",
    hook: "Max wishes he could keep a bit of night-soft light. Silver moths answer — and lead him up the hill where moonflowers are just opening.",
    shortHook: "One fallen petal. One soft silver glow. One mouse ready for sleep.",
    tags: ["animals", "curiosity", "magic", "garden", "night"],
    summary: [
      "Max the mouse looks up at the big round moon and wishes he could keep a bit of night-soft light. Silver moths dance above the moonlit flowers and lead him up the garden hill, where Hugh the owl knows the moonflower patch. Pale flowers open under the moon; each petal glows with gentle silver shine. Max takes one petal that has already fallen, cups it warm and cool in both paws, and sets it in a tiny dish by his nest.",
      "Some lights like to visit. Max watches the petal glow grow sleepier — then dreams of moths and gentle glowing petals.",
    ],
  },
];

/** How many stories the site sample catalog lists — keep copy in sync sitewide. */
export const SAMPLE_STORY_COUNT = STORIES.length;

/** Homepage showcase: only three stories; full list via buttons below. */
export const FEATURED_STORIES = STORIES.slice(0, 3);

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
