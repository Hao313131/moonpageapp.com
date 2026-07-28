import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { SubscribeCluster } from "./EmailSubscribe";
import { SITE } from "@/lib/site";

/** Footer link picks. Short anchor text, chosen to describe the destination
 * rather than repeat the page title verbatim. */
const FOOTER_COLLECTIONS = [
  { slug: "sleepy-bedtime-stories", description: "Bedtime stories" },
  { slug: "animal-bedtime-stories", description: "Animal stories" },
  { slug: "kindness-stories-for-kids", description: "Kindness and sharing" },
  { slug: "patience-stories-for-kids", description: "Patience and waiting" },
] as const;

const FOOTER_GUIDES = [
  { slug: "bedtime-routine-for-toddlers", label: "Bedtime routines (ages 2–7)" },
  { slug: "read-aloud-to-toddlers", label: "How to read aloud" },
  { slug: "toddler-wont-stay-in-bed", label: "When they won't stay in bed" },
  { slug: "screen-time-before-bed", label: "Screen time before bed" },
  { slug: "lullabies-for-babies-and-toddlers", label: "Lullabies" },
] as const;

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

        {/* Three real link columns rather than one flat row: this is the
            site's deepest internal linking, and it's how the collection and
            guide pages get crawled from every page on the site. */}
        <div className="grid gap-6 pt-6 text-xs text-night-muted sm:gap-8 sm:pt-8 sm:text-sm md:grid-cols-3">
          <nav aria-label="Stories">
            <p className="font-semibold text-night-ink">Stories</p>
            <ul className="mt-2 space-y-1.5">
              <li>
                <Link href="/bedtime-stories" className="hover:text-white">
                  Bedtime stories for kids
                </Link>
              </li>
              <li>
                <Link href="/toddler-bedtime-stories" className="hover:text-white">
                  Toddler bedtime stories
                </Link>
              </li>
              <li>
                <Link href="/preschool-bedtime-stories" className="hover:text-white">
                  Preschool bedtime stories
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-white">
                  Browse bedtime stories
                </Link>
              </li>
              {FOOTER_COLLECTIONS.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/collections/${c.slug}`}
                    className="hover:text-white"
                  >
                    {c.description}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/collections" className="hover:text-white">
                  All themes
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="For parents">
            <p className="font-semibold text-night-ink">For parents</p>
            <ul className="mt-2 space-y-1.5">
              {FOOTER_GUIDES.map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`} className="hover:text-white">
                    {g.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/guides" className="hover:text-white">
                  All guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="font-semibold text-night-ink">MoonPage</p>
            <ul className="mt-2 space-y-1.5">
              <li>
                <Link href="/support" className="hover:text-white">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-choices" className="hover:text-white">
                  Privacy Choices
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Use
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.contactEmail}`}
                  className="break-all hover:text-white sm:break-normal"
                >
                  {SITE.contactEmail}
                </a>
              </li>
            </ul>
          </nav>
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
