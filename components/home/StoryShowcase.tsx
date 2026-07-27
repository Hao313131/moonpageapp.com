import Image from "next/image";
import Link from "next/link";
import { FEATURED_STORIES as STORIES } from "@/lib/stories";

/** Cover art, titles and hooks all come from lib/stories.ts, which the
 * /stories page and the themed collections share. */
export function StoryShowcase() {
  return (
    <section className="page-gutter mx-auto max-w-6xl py-12 sm:py-16 md:py-20">
      <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl md:text-3xl">
        Bedtime picture storybooks for kids
      </h2>
      <p className="mt-3 max-w-md text-sm text-ink-muted sm:max-w-xl sm:text-base">
        <span className="font-semibold text-ink">
          The first 20 of many, many more.
        </span>{" "}
        MoonPage&apos;s library holds far more original, beautifully illustrated
        bedtime stories than this site shows — and new ones keep arriving.
      </p>
      {/* phone 2 → tablet and up 3, at the app's own 4:3 cover ratio */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-5">
        {STORIES.map((s) => (
          <figure key={s.file} className="group min-w-0">
            <Link href={`/stories/${s.slug}`} className="block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md sm:rounded-2xl">
                <Image
                  src={`/covers/${s.file}`}
                  alt={`Cover art for "${s.title}"`}
                  fill
                  sizes="(min-width: 640px) 31vw, 46vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-2">
                <p className="font-display text-sm font-semibold text-ink group-hover:text-link sm:text-base">
                  {s.title}
                </p>
                <p className="text-xs leading-snug text-ink-muted sm:text-sm">
                  {s.shortHook ?? s.hook}
                </p>
              </figcaption>
            </Link>
          </figure>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 sm:mt-8">
        <Link
          href="/bedtime-stories"
          className="text-sm font-semibold text-link hover:text-link-hover hover:underline sm:text-base"
        >
          Bedtime stories hub
        </Link>
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
