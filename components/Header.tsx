import { BrandMark } from "./BrandMark";
import { AppStoreIcon, PlayStoreIcon } from "./StoreButtons";
import { InstagramLink } from "./SocialLinks";
import { EmailSubscribeCompact } from "./EmailSubscribe";

/**
 * Everything here is pinned to h-12 (48px, matching BrandMark's icon) and the
 * row never wraps to a second line, even on narrow screens — full-size store
 * badges and the fuller subscribe card live in the Hero/Footer instead, where
 * there's room for them.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-wood/20 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-nowrap items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-5">
        <BrandMark />
        <div className="flex flex-nowrap items-center gap-2 sm:gap-2.5">
          <EmailSubscribeCompact className="hidden h-12 md:flex" />
          <InstagramLink size="lg" />
          <AppStoreIcon campaign="website_header" className="h-12 w-12" />
          <PlayStoreIcon campaign="website_header" className="h-12 w-12" />
        </div>
      </div>
    </header>
  );
}
