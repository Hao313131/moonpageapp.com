"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { COLLECTIONS } from "@/lib/collections";
import { GUIDES } from "@/lib/guides";
import { STORIES, TAG_LABELS } from "@/lib/stories";
import { storyCoverSrc } from "@/lib/storyCover";

type Result = {
  kind: "Story" | "Guide" | "Collection";
  title: string;
  href: string;
  snippet: string;
  cover?: string;
};

const KIND_HREF: Record<Result["kind"], string> = {
  Story: "/stories",
  Guide: "/guides",
  Collection: "/collections",
};

export function SearchClient() {
  const router = useRouter();
  const params = useSearchParams();
  const initial = params.get("q") ?? "";
  const [q, setQ] = useState(initial);

  const results = useMemo<Result[]>(() => {
    const term = q.trim().toLowerCase();
    if (term.length < 2) return [];
    const storyHits: Result[] = STORIES.filter(
      (s) =>
        s.title.toLowerCase().includes(term) ||
        s.hook.toLowerCase().includes(term) ||
        s.tags.some((t) => TAG_LABELS[t].toLowerCase().includes(term)),
    ).map((s) => ({
      kind: "Story",
      title: s.title,
      href: `/stories/${s.slug}`,
      snippet: s.hook,
      cover: storyCoverSrc(s.file),
    }));
    const guideHits: Result[] = GUIDES.filter(
      (g) =>
        g.title.toLowerCase().includes(term) ||
        g.description.toLowerCase().includes(term) ||
        g.category.toLowerCase().includes(term),
    ).map((g) => ({
      kind: "Guide",
      title: g.title,
      href: `/guides/${g.slug}`,
      snippet: g.description,
    }));
    const collHits: Result[] = COLLECTIONS.filter(
      (c) =>
        c.title.toLowerCase().includes(term) ||
        c.description.toLowerCase().includes(term),
    ).map((c) => ({
      kind: "Collection",
      title: c.title,
      href: `/collections/${c.slug}`,
      snippet: c.description,
    }));
    return [...storyHits, ...guideHits, ...collHits];
  }, [q]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next = q.trim();
    // Measure on-site search as an engagement signal (what are people
    // actually looking for, and do we have it?). Umami only auto-tracks link
    // clicks; a typed query needs an explicit event.
    if (next.length >= 2 && typeof window !== "undefined") {
      const umami = (
        window as Window & {
          umami?: { track: (e: string, p?: Record<string, unknown>) => void };
        }
      ).umami;
      umami?.track("site-search", { query: next, results: results.length });
    }
    router.replace(
      next ? `/search?q=${encodeURIComponent(next)}` : "/search",
      { scroll: false },
    );
  }

  function clear() {
    setQ("");
    router.replace("/search", { scroll: false });
  }

  const counts = {
    Story: results.filter((r) => r.kind === "Story").length,
    Guide: results.filter((r) => r.kind === "Guide").length,
    Collection: results.filter((r) => r.kind === "Collection").length,
  };

  return (
    <div>
      <form onSubmit={submit} className="flex gap-2" role="search">
        <label htmlFor="site-search" className="sr-only">
          Search MoonPage
        </label>
        <input
          id="site-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search stories, themes, guides…"
          autoComplete="off"
          className="min-w-0 flex-1 rounded-xl border border-wood/30 bg-paper px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-accent"
        />
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
        >
          Search
        </button>
      </form>

      {q.trim().length > 0 && q.trim().length < 2 && (
        <p className="mt-4 text-sm text-ink-muted">
          Type at least 2 characters to search.
        </p>
      )}

      {q.trim().length >= 2 && (
        <div className="mt-6">
          <p className="text-sm text-ink-muted">
            {results.length === 0
              ? `No matches for “${q.trim()}”.`
              : `${results.length} result${results.length === 1 ? "" : "s"}`}
            {results.length > 0 && (
              <>
                {" — "}
                {counts.Story} story{counts.Story === 1 ? "" : "ies"},{" "}
                {counts.Guide} guide{counts.Guide === 1 ? "" : "s"},{" "}
                {counts.Collection} collection{counts.Collection === 1 ? "" : "s"}
              </>
            )}
            {results.length > 0 && (
              <button
                type="button"
                onClick={clear}
                className="ml-2 font-medium text-link underline hover:text-link-hover"
              >
                Clear
              </button>
            )}
          </p>

          <ul className="mt-4 space-y-3">
            {results.map((r) => (
              <li
                key={r.href}
                className="flex items-start gap-3 rounded-2xl border border-wood/20 bg-paper p-3 sm:p-4"
              >
                {r.cover && (
                  <Image
                    src={r.cover}
                    alt=""
                    width={64}
                    height={48}
                    className="mt-0.5 shrink-0 rounded-md object-cover"
                  />
                )}
                <div className="min-w-0">
                  <Link
                    href={r.href}
                    className="font-display text-base font-semibold text-ink hover:text-link sm:text-lg"
                  >
                    {r.title}
                  </Link>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {r.snippet}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent-strong">
                    <Link
                      href={KIND_HREF[r.kind]}
                      className="hover:underline"
                    >
                      {r.kind}
                    </Link>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {q.trim().length === 0 && (
        <div className="mt-6 rounded-2xl border border-wood/20 bg-paper p-5 text-sm text-ink-muted sm:p-6 sm:text-base">
          <p className="font-semibold text-ink">Try searching for:</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {[
              "sleepy",
              "animals",
              "lullaby",
              "toddler",
              "bedtime routine",
              "screen time",
              "kindness",
              "ocean",
            ].map((t) => (
              <li key={t}>
                <button
                  type="button"
                  onClick={() => {
                    setQ(t);
                    router.replace(
                      `/search?q=${encodeURIComponent(t)}`,
                      { scroll: false },
                    );
                  }}
                  className="rounded-full border border-wood/30 px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
                >
                  {t}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
