"use client";

/**
 * Print one region of the page, not the whole page.
 *
 * Why this exists: /printable-bedtime-stories/ is a marketing page wrapped
 * around two things a parent actually wants on paper — a routine chart and a
 * sheet of story-starter cards. Sending the whole page to the printer spends
 * the sheet on the header, the footer and the CTA.
 *
 * Mechanism: set `data-print="<id>"` on <html>, print, then clear it. The
 * matching CSS lives in app/globals.css under `@media print`; everything
 * outside [data-print-id="<id>"] is hidden while the attribute is set.
 *
 * Clearing matters as much as setting: a stale attribute would leave the page
 * permanently print-blanked for the rest of the session. `afterprint` covers
 * the normal path and the timeout covers Safari, which does not fire it
 * reliably — both are idempotent.
 */
export function PrintButton({
  target,
  children,
  className,
}: {
  /** Must match a [data-print-id] on the same page. */
  target: string;
  children: React.ReactNode;
  className?: string;
}) {
  function handlePrint() {
    const root = document.documentElement;
    root.setAttribute("data-print", target);

    let cleared = false;
    const clear = () => {
      if (cleared) return;
      cleared = true;
      root.removeAttribute("data-print");
    };

    window.addEventListener("afterprint", clear, { once: true });
    window.print();
    // Safari returns from print() before the dialog closes and skips
    // afterprint entirely, so clear on a timer as well.
    window.setTimeout(clear, 3000);
  }

  return (
    <button
      type="button"
      onClick={handlePrint}
      className={
        className ??
        "no-print inline-flex items-center gap-2 rounded-full bg-accent-strong px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link sm:text-base"
      }
    >
      {children}
    </button>
  );
}
