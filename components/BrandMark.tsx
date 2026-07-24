import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

/**
 * App icon + “MoonPage” wordmark. Brand lettering stays on Fredoka; section
 * headlines use the formal display serif.
 */
export function BrandMark({
  href = "/",
  size = "md",
  tone = "ink",
}: {
  href?: string | null;
  size?: "md" | "lg";
  tone?: "ink" | "night";
}) {
  const icon = size === "lg" ? 80 : 68;
  const nameClass =
    size === "lg"
      ? "font-brand text-4xl font-semibold tracking-tight sm:text-5xl"
      : "font-brand text-3xl font-semibold tracking-tight sm:text-4xl";
  const iconClass =
    size === "lg"
      ? "h-16 w-16 rounded-2xl shadow-sm sm:h-20 sm:w-20 sm:rounded-3xl"
      : "h-14 w-14 rounded-2xl shadow-sm sm:h-16 sm:w-16";
  const gap = size === "lg" ? "gap-3 sm:gap-3.5" : "gap-2.5 sm:gap-3";
  const color = tone === "night" ? "text-night-ink" : "text-ink";

  const inner = (
    <>
      <Image
        src="/icon.png"
        alt=""
        width={icon}
        height={icon}
        priority
        className={iconClass}
      />
      <span className={`${nameClass} ${color}`}>{SITE.name}</span>
    </>
  );

  if (!href) {
    return <span className={`inline-flex items-center ${gap} ${color}`}>{inner}</span>;
  }

  return (
    <Link href={href} className={`inline-flex min-w-0 items-center ${gap} ${color}`}>
      {inner}
    </Link>
  );
}
