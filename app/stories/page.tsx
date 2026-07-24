import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreButtons } from "@/components/StoreButtons";
import { BackHomeLink } from "@/components/BackLink";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Just a Few of Our Stories",
  description:
    "A small sample of original bedtime stories for kids — new ones keep arriving on MoonPage.",
};

/**
 * A sample, not the full catalog — framed as a small selection of stories.
 * Hooks are written to pull a reader in, not just summarize — original copy,
 * not quotes from the stories themselves. Titles/cover art verified against
 * moonpage-app/data/stories/*.ts book-by-book.
 */
const STORIES = [
  {
    file: "wp_b01_1_blue_sea_cover.webp",
    title: "Slow Down, Seal!",
    hook: "Sully never stops zooming — until one wise old turtle shows him what he's been missing all along.",
  },
  {
    file: "wp_b02_1_loved_ask_cover.webp",
    title: "Leo's Museum Day",
    hook: "One giant dinosaur, a hundred questions, and a museum day Leo will never forget.",
  },
  {
    file: "wp_b03_1_woke_hush_cover.webp",
    title: "Bruno's Snow Day",
    hook: "The snow is falling, the world is hushed, and just outside the door, an adventure is waiting.",
  },
  {
    file: "wp_b04_1_maple_street_cover.webp",
    title: "Nora's Kind Cookies",
    hook: "Nora bakes a batch of cookies — but the sweetest part isn't the taste, it's who she shares them with.",
  },
  {
    file: "wp_b05_1_window_moon_cover.webp",
    title: "A Secret in the Night",
    hook: "Something magical is happening after dark, and only the sleepiest eyes will catch it.",
  },
  {
    file: "wp_b06_1_went_park_cover.webp",
    title: "Sam's Park Friend",
    hook: "Sam is too shy to say hello — until a new friend at the park makes the first move.",
  },
  {
    file: "wp_b07_1_summer_night_cover.webp",
    title: "The Trapped Firefly",
    hook: "A tiny firefly is lost and glowing. Can a little patience light the way back home?",
  },
  {
    file: "wp_b08_1_loved_help_cover.webp",
    title: "Maya Waits for the Cake",
    hook: "The cake isn't ready yet, and Maya is not good at waiting — until she finds out why it's worth it.",
  },
  {
    file: "wp_b09_1_green_pond_cover.webp",
    title: "Champion",
    hook: "Everyone wants to win. This gentle story asks a bigger question: what really makes a champion?",
  },
  {
    file: "wp_b10_1_white_ice_cover.webp",
    title: "Penguin Friends",
    hook: "It's the coldest day of the year — but two penguins are about to discover something warmer than the sun.",
  },
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
          <BackHomeLink />
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Just a few of our stories
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            This is only a small sample — MoonPage adds new, original bedtime
            stories all the time. Gentle tales about kindness, courage, and
            curiosity, read aloud by a narrator, your device, or your own
            voice.
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
                  <p className="font-display text-base font-semibold text-ink">
                    {s.title}
                  </p>
                  <p className="text-base leading-snug text-ink-muted">
                    {s.hook}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl bg-paper p-10 text-center">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Read tonight&apos;s story in MoonPage
            </h2>
            <p className="max-w-md text-ink-muted">
              Start with 2 stories completely free — no account needed, and
              new ones keep arriving.
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
