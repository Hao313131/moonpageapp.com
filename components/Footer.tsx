import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { SubscribeCluster } from "./EmailSubscribe";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-night-top text-night-ink">
      <div className="page-gutter mx-auto max-w-6xl py-10 sm:py-14">
        <div className="border-b border-white/10 pb-8 sm:pb-10">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <BrandMark href="/" size="lg" tone="night" />
              <SubscribeCluster
                tone="night"
                inputId="moonpage-footer-email"
                igSize="lg"
                className="shrink-0 self-start sm:self-center"
              />
            </div>
            <p className="max-w-md text-sm text-night-muted sm:max-w-lg sm:text-base">
              Bedtime stories for little ones — original, beautifully
              illustrated, and read in a voice they know.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-6 text-xs text-night-muted sm:gap-6 sm:pt-8 sm:text-sm md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-6">
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
          <a
            href={`mailto:${SITE.contactEmail}`}
            className="break-all text-sm font-medium text-night-ink hover:text-white sm:break-normal sm:text-base"
          >
            {SITE.contactEmail}
          </a>
        </div>
        <p className="pt-6 text-xs text-night-muted sm:pt-8 sm:text-sm">
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
      <div className="page-gutter mx-auto flex max-w-6xl flex-col items-center gap-2 py-5 text-center text-xs text-ink-muted sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2 sm:py-6 sm:text-sm">
        <Link href="/privacy" className="hover:text-ink">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-ink">
          Terms of Use
        </Link>
        <a
          href={`mailto:${SITE.contactEmail}`}
          className="break-all text-sm font-medium text-ink hover:underline sm:break-normal sm:text-base"
        >
          {SITE.contactEmail}
        </a>
      </div>
    </footer>
  );
}
