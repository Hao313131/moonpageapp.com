import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreButtons } from "@/components/StoreButtons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "All Stories",
  description:
    "Browse original, illustrated bedtime stories for toddlers and preschoolers — gentle tales about kindness, courage, and curiosity, read aloud or in your own voice.",
};

/**
 * Real titles + cover art from moonpage-app/data/stories/*.ts, verified
 * book-by-book against the actual filenames (not just grep order, which
 * doesn't sort numerically). Hooks below are original one-line summaries
 * written for this page, not quotes from the stories themselves.
 */
const STORIES = [
  { file: "wp_b01_1_blue_sea_cover.webp", title: "Slow Down, Seal!", hook: "A speedy little seal learns that the best things are easy to miss in a hurry." },
  { file: "wp_b02_1_loved_ask_cover.webp", title: "Leo's Museum Day", hook: "A curious afternoon of questions, wonder, and one very big dinosaur." },
  { file: "wp_b03_1_woke_hush_cover.webp", title: "Bruno's Snow Day", hook: "A quiet, snowy morning turns into a small adventure just outside the door." },
  { file: "wp_b04_1_maple_street_cover.webp", title: "Nora's Kind Cookies", hook: "One batch of cookies, shared just right, teaches a sweet lesson in kindness." },
  { file: "wp_b05_1_window_moon_cover.webp", title: "A Secret in the Night", hook: "A gentle nighttime mystery, perfect for winding down before sleep." },
  { file: "wp_b06_1_went_park_cover.webp", title: "Sam's Park Friend", hook: "A shy afternoon at the park turns into the start of a new friendship." },
  { file: "wp_b07_1_summer_night_cover.webp", title: "The Trapped Firefly", hook: "A tiny firefly needs help finding its way home, and a little patience goes a long way." },
  { file: "wp_b08_1_loved_help_cover.webp", title: "Maya Waits for the Cake", hook: "Waiting is hard, but Maya discovers the best things are worth it." },
  { file: "wp_b09_1_green_pond_cover.webp", title: "Champion", hook: "A gentle story about trying your best, even when winning isn't everything." },
  { file: "wp_b10_1_white_ice_cover.webp", title: "Penguin Friends", hook: "Two penguins learn that friendship keeps you warm on the coldest days." },
  { file: "wp_b11_1_woods_explorer_cover.webp", title: "Mia's Secret Meadow", hook: "Mia finds a quiet meadow all her own, and learns the joy of sharing it." },
  { file: "wp_b12_1_deep_sea_cover.webp", title: "The Starry Fish", hook: "A little fish who glows like the stars learns there's nothing wrong with being different." },
  { file: "wp_b13_1_garden_kite_cover.webp", title: "Bunny's Big Feelings", hook: "Bunny learns it's okay to feel big feelings, as long as you talk about them." },
  { file: "wp_b14_1_apple_tree_cover.webp", title: "The Sharing Tree", hook: "One tree, many gifts — a sweet lesson in generosity for the whole forest." },
  { file: "wp_b15_1_when_autumn_cover.webp", title: "The Sleepy Bear", hook: "A cozy tale about a bear who just can't seem to find the right spot for a nap." },
  { file: "wp_b16_1_valley_drake_cover.webp", title: "The Coolest Dragon", hook: "Being the coolest isn't about breathing fire — it's about being kind." },
  { file: "wp_b17_1_loved_shore_cover.webp", title: "Theo's Hidden Cove", hook: "Theo discovers a secret cove, and an even better lesson about honesty." },
  { file: "wp_b18_1_little_harbor_cover.webp", title: "The Brave Little Boat", hook: "A small boat sets out on a big sea and learns just how brave it really is." },
  { file: "wp_b19_1_bedtime_moon_cover.webp", title: "Counting Sheep", hook: "The classic bedtime tradition, gently reimagined for tonight's countdown to sleep." },
  { file: "wp_b20_1_gray_rainy_cover.webp", title: "The Rainbow Umbrella", hook: "A rainy day turns colorful with one umbrella and a lot of imagination." },
  { file: "wp_b21_1_willow_home_cover.webp", title: "The Beautiful Nest", hook: "Building a home takes patience, twig by twig, feather by feather." },
  { file: "wp_b22_1_pond_edge_cover.webp", title: "The Big Wide World", hook: "A story about working up the courage to explore just a little further." },
  { file: "wp_b23_1_special_letter_cover.webp", title: "Late to the Party", hook: "Being late isn't the end of the world — sometimes it's the start of a new adventure." },
  { file: "wp_b24_1_late_play_cover.webp", title: "Rusty and the Foggy Path", hook: "Rusty finds his way through the fog, one small brave step at a time." },
  { file: "wp_b25_1_love_stream_cover.webp", title: "Milo's Little Boat", hook: "A handmade boat, a big dream, and the courage to let it sail." },
  { file: "wp_b26_1_smallest_bird_cover.webp", title: "Wren's First Flight", hook: "Every flyer has a first flight — Wren finds the courage for hers." },
  { file: "wp_b27_1_cool_breeze_cover.webp", title: "Chip's Autumn Gift", hook: "A small gift, given at just the right moment, means more than any big one." },
  { file: "wp_b28_1_not_well_cover.webp", title: "A Cozy Sick Day", hook: "A gentle reminder that it's okay to slow down and be looked after." },
  { file: "wp_b29_1_grandma_house_cover.webp", title: "Ella's Honest Answer", hook: "Telling the truth is hard sometimes — Ella finds out it's always worth it." },
  { file: "wp_b30_1_white_lighthouse_cover.webp", title: "The Little Lighthouse", hook: "A small light that guides the way home, no matter how dark the night." },
  { file: "wp_b31_1_meadow_concert_cover.webp", title: "The Meadow Concert", hook: "Every creature has a song to share, if you just listen closely." },
  { file: "wp_b32_1_orchard_camp_cover.webp", title: "Hazel's Apple Sleepout", hook: "A night under the stars, with apples, blankets, and good company." },
  { file: "wp_b33_1_night_pond_cover.webp", title: "The Moon in the Pond", hook: "A curious little tale about chasing reflections — and learning what's real." },
  { file: "wp_b34_1_green_mountain_cover.webp", title: "The Quiet Bell", hook: "Sometimes the quietest sound says the most." },
  { file: "wp_b35_1_fox_bright_cover.webp", title: "The Tangled Kite", hook: "Patience untangles more than string in this breezy little story." },
  { file: "wp_b36_1_young_rabbit_cover.webp", title: "Beni's Blanket Fort", hook: "The coziest fort in the world, built one blanket of imagination at a time." },
  { file: "wp_b37_1_soft_fuzzy_cover.webp", title: "Zoe's Lost Hum", hook: "Zoe loses her favorite little tune, and learns where to find it again." },
  { file: "wp_b38_1_under_a_big_oak_cover.webp", title: "The Brave Little Acorn", hook: "A tiny acorn dreams big about becoming something more." },
  { file: "wp_b39_1_one_special_night_the_cover.webp", title: "The Starlight Picnic", hook: "A midnight picnic under the stars, just for the brave and the curious." },
  { file: "wp_b40_1_every_night_cover.webp", title: "The Midnight Mail", hook: "A gentle mystery about a letter that arrives right on time." },
  { file: "wp_b41_1_lets_bake_cover.webp", title: "The Wobbly Birthday Cake", hook: "Not every cake turns out perfect — and that's exactly what makes it special." },
  { file: "wp_b42_1_built_balloon_cover.webp", title: "Mira's Teacup Balloon", hook: "A tiny teacup, a big imagination, and a journey that only takes a moment to dream up." },
];

export default function StoriesPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: STORIES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: s.title,
        description: s.hook,
        image: `${SITE.domain}/covers/${s.file}`,
      },
    })),
  };

  return (
    <>
      <Header />
      <main>
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            All stories
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Original, illustrated bedtime stories for toddlers and
            preschoolers — gentle tales about kindness, courage, and
            curiosity, read aloud by a narrator, your device, or your own
            voice. The shelf keeps growing, so check back for new ones.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {STORIES.map((s) => (
              <figure key={s.file}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={`/covers/${s.file}`}
                    alt={`Cover art for "${s.title}"`}
                    fill
                    sizes="(min-width: 1024px) 18vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2">
                  <p className="font-display text-sm font-semibold text-ink">
                    {s.title}
                  </p>
                  <p className="text-xs leading-snug text-ink-muted">
                    {s.hook}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl bg-paper p-10 text-center">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Read them all in MoonPage
            </h2>
            <p className="max-w-md text-ink-muted">
              Start with 2 stories completely free — no account needed.
            </p>
            <StoreButtons campaign="stories_page" />
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    </>
  );
}
