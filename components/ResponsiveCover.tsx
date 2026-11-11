import { storyCoverSrc, storyCoverSrcSet } from "@/lib/storyCover";

/**
 * A cover image with a REAL srcSet.
 *
 * `images.unoptimized: true` (static export) makes next/image emit no srcSet,
 * which turned every `sizes="…"` on the site into dead code and shipped an
 * 800x588 original into slots as small as ~180 CSS px. A plain <img> restores
 * browser-native width selection without an image server.
 *
 * The caller owns the box: it renders an aspect-ratio container with
 * `relative`/`absolute inset-0`, so width/height here are only the intrinsic
 * ratio for the parser — they never introduce layout shift. Keep the alt text
 * descriptive: these are the images a screen-reader user browses the shelf by.
 */
/* eslint-disable @next/next/no-img-element */
export function ResponsiveCover({
  file,
  alt,
  sizes,
  className = "",
  priority = false,
}: {
  file: string;
  alt: string;
  sizes: string;
  className?: string;
  /** Eager + fetchpriority=high for covers that are above the fold. */
  priority?: boolean;
}) {
  return (
    <img
      src={storyCoverSrc(file)}
      srcSet={storyCoverSrcSet(file)}
      sizes={sizes}
      width={800}
      height={588}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={className}
    />
  );
}
