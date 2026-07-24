import Link from "next/link";
import { StoreButtons } from "./StoreButtons";
import { InstagramGlyph } from "./icons";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-night-top text-night-ink">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-xl font-semibold">{SITE.name}</p>
            <p className="mt-1 max-w-sm text-base text-night-muted">
              Bedtime stories for little ones — original, beautifully
              illustrated, and read in a voice they know.
            </p>
          </div>
          <StoreButtons campaign="website_footer" size="md" />
        </div>

        <div className="flex flex-col gap-6 pt-8 text-base text-night-muted sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/stories" className="hover:text-white">
              Stories
            </Link>
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
            <a
              href={SITE.instagramUrl}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <InstagramGlyph className="h-4 w-4" />
              Follow us on Instagram for more parenting tips
            </a>
            <a href={`mailto:${SITE.contactEmail}`} className="hover:text-white">
              Say hello — {SITE.contactEmail}
            </a>
          </div>
        </div>
        <p className="pt-8 text-sm text-night-muted/70">
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
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-6 text-sm text-ink-muted">
        <Link href="/privacy" className="hover:text-ink">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-ink">
          Terms of Use
        </Link>
        <a href={`mailto:${SITE.contactEmail}`} className="hover:text-ink">
          Say hello — {SITE.contactEmail}
        </a>
      </div>
    </footer>
  );
}
