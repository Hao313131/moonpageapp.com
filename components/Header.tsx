import { BrandMark } from "./BrandMark";
import { InstagramLink } from "./SocialLinks";
import { SubscribeCluster } from "./EmailSubscribe";

/**
 * Sticky chrome: brand + follow/IG cluster.
 * MoonPage icon and IG glyph share the same height (BrandMark md).
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-wood/20 bg-cream/90 backdrop-blur">
      <div className="page-gutter mx-auto flex max-w-6xl flex-nowrap items-center justify-between gap-2 py-3 sm:gap-3 sm:py-3.5">
        <BrandMark />
        <SubscribeCluster
          inputId="moonpage-header-email"
          igSize="md"
          className="hidden min-[520px]:inline-flex"
        />
        <InstagramLink size="md" className="min-[520px]:hidden" />
      </div>
    </header>
  );
}
