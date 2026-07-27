import Image from "next/image";
import Link from "next/link";
import type { Story } from "@/lib/stories";
import { storyCoverSrc } from "@/lib/storyCover";

/** Cover grid shared by /stories, the story pages and the collection pages.
 * Every cover links to its own story page — that's what makes those pages
 * reachable, and it's most of their crawl value. */
export function StoryGrid({
  stories,
  className = "",
}: {
  stories: Story[];
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6 ${className}`}
    >
      {stories.map((s) => (
        <figure key={s.file} className="group min-w-0">
          <Link href={`/stories/${s.slug}`} className="block">
            {/* 4:3 landscape, matching the app's own cover art — the covers
                are 800×588, so a portrait crop cut them off. */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md sm:rounded-2xl">
              <Image
                src={storyCoverSrc(s.file)}
                alt={`Cover art for the children's picture book "${s.title}"`}
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
                {s.hook}
              </p>
            </figcaption>
          </Link>
        </figure>
      ))}
    </div>
  );
}
