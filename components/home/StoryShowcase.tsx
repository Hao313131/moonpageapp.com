import Image from "next/image";
import Link from "next/link";
import { FEATURED_STORIES as STORIES } from "@/lib/stories";

/** Cover art, titles and hooks all come from lib/stories.ts, which the
 * /stories page and the themed collections share. */
export function StoryShowcase() {
  return (
    <section className="page-gutter mx-auto max-w-6xl py-12 sm:py-16 md:py-20">
      <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl md:text-3xl">
        Just a few of our stories
      </h2>
      <p className="mt-3 max-w-md text-sm text-ink-muted sm:max-w-lg sm:text-base">
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
              <p className="font-display text-sm font-semibold text-ink sm:text-base">
                {s.title}
              </p>
              <p className="text-xs leading-snug text-ink-muted sm:text-sm">
                {s.shortHook ?? s.hook}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 sm:mt-8">
        <Link
          href="/stories"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-link hover:text-link-hover hover:underline sm:text-base"
        >
          See more stories →
        </Link>
        <Link
          href="/collections"
          className="text-sm font-semibold text-link hover:text-link-hover hover:underline sm:text-base"
        >
          Browse by theme
        </Link>
      </div>
    </section>
  );
}
