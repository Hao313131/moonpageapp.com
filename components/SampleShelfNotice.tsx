type Props = {
  className?: string;
};

/**
 * Shared callout: the website is a preview shelf, not the app catalog.
 * Used on Stories, Themes, Bedtime hubs, and collection pages — not the homepage.
 */
export function SampleShelfNotice({ className = "" }: Props) {
  return (
    <aside
      className={`flex items-start gap-3 rounded-2xl border-2 border-accent bg-paper p-4 sm:gap-4 sm:p-5 ${className}`}
    >
      <span aria-hidden className="text-xl sm:text-2xl">
        ✨
      </span>
      <p className="text-sm leading-relaxed text-ink sm:text-base">
        <span className="font-display font-semibold">
          This is only a small sample of the app library.
        </span>{" "}
        MoonPage&apos;s app holds many times more original bedtime stories than we
        show on this site, and new ones are added to the library all the time.
        Download the app to see the full shelf.
      </p>
    </aside>
  );
}
