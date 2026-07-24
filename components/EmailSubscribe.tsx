import { SITE } from "@/lib/site";

/**
 * Plain HTML form POST straight to Buttondown's embed-subscribe endpoint —
 * no JS, no backend of our own. `target="popupwindow"` is a native HTML
 * form attribute (Buttondown's own documented embed pattern): the browser
 * opens the confirmation in a small popup instead of navigating away, with
 * zero client-side code required. See README for account setup.
 */
const ACTION = (username: string) =>
  `https://buttondown.com/api/emails/embed-subscribe/${username}`;

export function EmailSubscribeCompact({ className = "" }: { className?: string }) {
  return (
    <form
      action={ACTION(SITE.buttondownUsername)}
      method="post"
      target="popupwindow"
      className={`flex h-11 items-center overflow-hidden rounded-full bg-paper pl-4 pr-1 shadow-[0_2px_0_0_rgba(0,0,0,0.08)] ${className}`}
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Email for updates"
        className="w-24 min-w-0 bg-transparent text-sm text-ink outline-none placeholder:text-ink-muted/70 sm:w-44"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-transform hover:-translate-y-0.5"
      >
        <ArrowIcon className="h-4 w-4" />
      </button>
    </form>
  );
}

/** Fuller version with a label + supporting line, for the footer / stories page. */
export function EmailSubscribeCard({ className = "" }: { className?: string }) {
  return (
    <form
      action={ACTION(SITE.buttondownUsername)}
      method="post"
      target="popupwindow"
      className={`flex flex-col gap-3 rounded-3xl bg-paper p-6 sm:flex-row sm:items-center sm:justify-between ${className}`}
    >
      <div>
        <p className="font-display text-lg font-semibold text-ink">
          New stories in your inbox
        </p>
        <p className="text-sm text-ink-muted">
          A short, occasional email — new stories, gentle parenting tips, no spam.
        </p>
      </div>
      <div className="flex h-12 items-center overflow-hidden rounded-full bg-cream pl-4 pr-1 shadow-inner">
        <input
          type="email"
          name="email"
          required
          placeholder="you@email.com"
          className="w-40 min-w-0 bg-transparent text-sm text-ink outline-none placeholder:text-ink-muted/70 sm:w-52"
        />
        <button
          type="submit"
          className="flex h-10 shrink-0 items-center justify-center rounded-full bg-ink px-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
