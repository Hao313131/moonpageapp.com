import Image from "next/image";
import Link from "next/link";

/**
 * Real cover art + real titles from moonpage-app/data/stories/*.ts — the hook
 * lines below are original one-line summaries written for marketing, not
 * quotes from the stories themselves.
 */
const STORIES = [
  {
    file: "wp_b01_1_blue_sea_cover.webp",
    title: "Slow Down, Seal!",
    hook: "A speedy little seal learns that the best things are easy to miss in a hurry.",
  },
  {
    file: "wp_b02_1_loved_ask_cover.webp",
    title: "Leo's Museum Day",
    hook: "A curious afternoon of questions, wonder, and one very big dinosaur.",
  },
  {
    file: "wp_b03_1_woke_hush_cover.webp",
    title: "Bruno's Snow Day",
    hook: "A quiet, snowy morning turns into a small adventure just outside the door.",
  },
  {
    file: "wp_b04_1_maple_street_cover.webp",
    title: "Nora's Kind Cookies",
    hook: "One batch of cookies, shared just right, teaches a sweet lesson in kindness.",
  },
  {
    file: "wp_b05_1_window_moon_cover.webp",
    title: "A Secret in the Night",
    hook: "A gentle nighttime mystery, perfect for winding down before sleep.",
  },
];

export function StoryShowcase() {
  return (
    <section className="page-gutter mx-auto max-w-6xl py-12 sm:py-16 md:py-20">
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl md:text-4xl">
        Just a few of our stories
      </h2>
      <p className="mt-3 max-w-2xl text-base text-ink-muted sm:max-w-3xl sm:text-lg">
        A small sample of original, beautifully illustrated bedtime stories —
        new ones keep arriving.
      </p>
      {/* phone 2 → tablet 3 → desktop 5 */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
        {STORIES.map((s) => (
          <figure key={s.file} className="group min-w-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-md sm:rounded-2xl">
              <Image
                src={`/covers/${s.file}`}
                alt={`Cover art for "${s.title}"`}
                fill
                sizes="(min-width: 1024px) 18vw, (min-width: 768px) 22vw, (min-width: 640px) 30vw, 45vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <figcaption className="mt-2">
              <p className="font-display text-base font-semibold text-ink sm:text-lg">
                {s.title}
              </p>
              <p className="text-sm leading-snug text-ink-muted sm:text-base">
                {s.hook}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
      <Link
        href="/stories"
        className="mt-6 inline-flex items-center gap-1.5 text-base font-bold text-link hover:text-link-hover hover:underline sm:mt-8 sm:text-lg"
      >
        See more stories →
      </Link>
    </section>
  );
}
