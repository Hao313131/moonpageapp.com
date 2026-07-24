import Link from "next/link";
import { AppStoreButton, AndroidComingSoon } from "./AppStoreButton";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-night-top text-night-ink">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-xl font-semibold">{SITE.name}</p>
            <p className="mt-1 max-w-sm text-sm text-night-muted">
              Bedtime stories for little ones — hand-picked, hand-painted, and
              read in a voice they know.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <AppStoreButton campaign="website_footer" size="md" />
            <AndroidComingSoon />
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 text-sm text-night-muted sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/privacy-choices" className="hover:text-white">
              Privacy Choices
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>
            <Link href="/support" className="hover:text-white">
              Support
            </Link>
          </nav>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href={SITE.instagramUrl} className="hover:text-white">
              {SITE.instagramHandle}
            </a>
            <a href={`mailto:${SITE.contactEmail}`} className="hover:text-white">
              {SITE.contactEmail}
            </a>
          </div>
        </div>
        <p className="pt-8 text-xs text-night-muted/70">
          © {new Date().getFullYear()} {SITE.operator}. Made with care, one
          story at a time.
        </p>
      </div>
    </footer>
  );
}

/** Stripped-down footer for the /get ad landing page — legal links only, no
 * navigation away from the single conversion goal (see plan §2, /get spec). */
export function MinimalFooter() {
  return (
    <footer className="mt-auto border-t border-wood/20 bg-cream-deep/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-6 text-xs text-ink-muted">
        <Link href="/privacy" className="hover:text-ink">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-ink">
          Terms of Use
        </Link>
        <a href={`mailto:${SITE.contactEmail}`} className="hover:text-ink">
          {SITE.contactEmail}
        </a>
      </div>
    </footer>
  );
}
