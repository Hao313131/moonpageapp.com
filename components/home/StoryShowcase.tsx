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
  {
    file: "wp_b06_1_went_park_cover.webp",
    title: "Sam's Park Friend",
    hook: "A shy afternoon at the park turns into the start of a new friendship.",
  },
];

export function StoryShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        A peek at the bookshelf
      </h2>
      <p className="mt-3 max-w-xl text-ink-muted">
        Original, beautifully illustrated stories — the shelf keeps growing.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
        {STORIES.map((s) => (
          <figure key={s.file} className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
              <Image
                src={`/covers/${s.file}`}
                alt={`Cover art for "${s.title}"`}
                fill
                sizes="(min-width: 1024px) 16vw, 45vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <figcaption className="mt-2">
              <p className="font-display text-base font-semibold text-ink">
                {s.title}
              </p>
              <p className="text-sm leading-snug text-ink-muted">{s.hook}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <Link
        href="/stories"
        className="mt-8 inline-flex items-center gap-1.5 font-semibold text-accent-strong hover:underline"
      >
        See the full shelf →
      </Link>
    </section>
  );
}
