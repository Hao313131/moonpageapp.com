import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { SocialLinks } from "./SocialLinks";
import { SubscribeCluster } from "./EmailSubscribe";

/**
 * Sticky chrome: brand + primary nav + follow/social cluster.
 *
 * The nav isn't only for readers. Google builds search-result sitelinks
 * largely from a site's main navigation, so these labels are single words,
 * identical on every page, and each one matches its destination's H1.
 * MoonPage icon and the social glyphs share the same height (BrandMark md).
 */
const NAV = [
  { href: "/bedtime-stories", label: "Bedtime" },
  { href: "/stories", label: "Stories" },
  { href: "/collections", label: "Themes" },
  { href: "/guides", label: "Guides" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-wood/20 bg-cream/90 backdrop-blur">
      <div className="page-gutter mx-auto flex max-w-6xl flex-nowrap items-center justify-between gap-2 py-3 sm:gap-3 sm:py-3.5">
        <BrandMark />
        <nav
          aria-label="Main"
          className="hidden min-w-0 items-center gap-5 md:flex lg:gap-7"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-semibold text-ink transition-colors hover:text-link lg:text-base"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Wrapper, not a className on SubscribeCluster: that component sets
            its own `inline-flex`, which wins over a passed-in `hidden` and
            left both this and the standalone icon showing on phones. */}
        <span className="hidden min-[520px]:contents">
          <SubscribeCluster inputId="moonpage-header-email" igSize="md" />
        </span>
        <SocialLinks size="md" className="min-[520px]:hidden" />
      </div>

      {/* Phone/tablet: the same links on their own scrollable row, so the nav
          is present (and crawlable) at every width. */}
      <nav
        aria-label="Main"
        className="page-gutter mx-auto flex max-w-6xl gap-5 overflow-x-auto pb-2 md:hidden"
      >
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-sm font-semibold text-ink transition-colors hover:text-link"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
