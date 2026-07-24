import Image from "next/image";
import Link from "next/link";
import { AppStoreButton } from "./AppStoreButton";
import { SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-wood/20 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/icon.png"
            alt=""
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-xl shadow-sm"
          />
          <span className="font-display text-lg font-semibold text-ink">
            {SITE.name}
          </span>
        </Link>
        <AppStoreButton campaign="website_header" size="md" />
      </div>
    </header>
  );
}
