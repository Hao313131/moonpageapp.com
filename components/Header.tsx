import Image from "next/image";
import Link from "next/link";
import { InstagramGlyph } from "./icons";
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
          <span className="font-display text-xl font-semibold text-ink">
            {SITE.name}
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <a
            href={SITE.instagramUrl}
            aria-label="MoonPage on Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-wood/15 hover:text-ink"
          >
            <InstagramGlyph className="h-5 w-5" />
          </a>
          {/* Neutral label, no single platform named — both real store
              buttons live together at #download (see Hero), keeping this
              header compact. */}
          <a
            href="#download"
            className="rounded-full bg-ink px-5 py-2.5 text-base font-semibold text-white shadow-[0_4px_0_0_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-0.5"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
}
