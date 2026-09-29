import { HUB_SUMMARIES } from "@/lib/hubSummaries";

/**
 * GEO "direct answer" block for the hub pages — the hub-page twin of the
 * guide pages' "The short version" aside.
 *
 * Hub pages carry the head terms, so this is where a self-contained 40–60
 * word answer earns the most: it gives AI Mode / featured snippets one
 * extractable passage that answers the query in its first sentence, instead
 * of making a parser stitch an answer together from a catalog grid.
 *
 * Renders nothing when the page has no summary, so adding a new hub without
 * a `HUB_SUMMARIES` entry is a no-op rather than an empty box.
 */
export function HubLead({ path }: { path: string }) {
  const summary = HUB_SUMMARIES[path];
  if (!summary) return null;
  return (
    // The label matters: hub pages render this alongside SampleShelfNotice,
    // and two unnamed <aside>s are two identical `complementary` landmarks —
    // axe flags that as landmark-unique. Naming one is not enough; both are
    // named, this one after its own visible heading.
    <aside
      aria-labelledby="hub-lead-heading"
      className="mt-6 rounded-2xl border border-accent/30 bg-paper p-5 sm:mt-8 sm:p-6"
    >
      <p
        id="hub-lead-heading"
        className="text-xs font-semibold uppercase tracking-wide text-accent-text"
      >
        The short version
      </p>
      <p className="mt-2 max-w-3xl text-base leading-relaxed text-ink sm:text-lg">
        {summary}
      </p>
    </aside>
  );
}
