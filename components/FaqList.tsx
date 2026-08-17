import type { FaqItem } from "@/lib/faq";

/** Shared accordion used by both the homepage teaser and the full /faq page. */
export function FaqList({
  items,
  className = "",
  speakable = false,
}: {
  items: FaqItem[];
  className?: string;
  /**
   * When true, marks the block with `js-speakable` so the page's FAQPage
   * JSON-LD can point Google's voice-search (Speakable) feature at this exact
   * Q&A text. Only set on the /faq page, which actually emits FAQPage.
   */
  speakable?: boolean;
}) {
  return (
    <div
      className={`divide-y divide-wood/20 rounded-2xl border border-wood/20 bg-paper sm:rounded-3xl ${className} ${
        speakable ? "js-speakable" : ""
      }`}
    >
      {items.map((f) => (
        <details key={f.q} className="group p-4 open:pb-4 sm:p-5 sm:open:pb-5">
          <summary className="cursor-pointer list-none font-display text-sm font-semibold text-ink marker:hidden sm:text-base">
            <span className="flex items-start justify-between gap-3 sm:items-center sm:gap-4">
              <span className="min-w-0">{f.q}</span>
              <span className="shrink-0 text-accent-strong transition-transform group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}
