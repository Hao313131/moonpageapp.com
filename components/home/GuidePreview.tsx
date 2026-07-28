import Link from "next/link";
import { SectionCtaButton } from "@/components/SectionCtaButton";
import { GUIDES } from "@/lib/guides";

/** Homepage entry point into /guides — three cards, then the hub link.
 * Exists as much for internal linking as for the reader: it's the only
 * path from the highest-authority page into the guide articles. */
export function GuidePreview() {
  const featured = GUIDES.slice(0, 3);

  return (
    <section className="page-gutter mx-auto max-w-6xl py-12 sm:py-16 md:py-20">
      <div className="min-w-0">
        <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl md:text-3xl">
          Bedtime, minus the battle
        </h2>
        <p className="mt-2 max-w-md text-sm text-ink-muted sm:max-w-lg sm:text-base">
          Short, practical guides for parents of toddlers and preschoolers —
          free to read, no sign-up.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-3">
        {featured.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="group flex min-w-0 flex-col rounded-2xl border border-wood/20 bg-paper p-5 transition-colors hover:border-accent sm:rounded-3xl sm:p-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-accent-strong">
              {g.category}
            </span>
            <h3 className="mt-2 font-display text-base font-semibold leading-snug text-ink group-hover:text-link sm:text-lg">
              {g.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {g.description}
            </p>
            <p className="mt-3 text-xs text-ink-muted sm:text-sm">
              {g.readingMinutes} min read
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-6 flex justify-center sm:mt-8">
        <SectionCtaButton href="/guides" className="max-w-xl">
          See all guides
        </SectionCtaButton>
      </div>
    </section>
  );
}
