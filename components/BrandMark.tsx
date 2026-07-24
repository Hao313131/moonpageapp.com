import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

/**
 * App icon + “MoonPage” wordmark. Brand lettering stays on Fredoka (the rounded
 * display we used before Fraunces); section headlines keep the serif display font.
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
  const icon = size === "lg" ? 56 : 48;
  const nameClass =
    size === "lg"
      ? "font-brand text-3xl font-semibold tracking-tight sm:text-4xl"
      : "font-brand text-2xl font-semibold tracking-tight";
  const color = tone === "night" ? "text-night-ink" : "text-ink";

  const inner = (
    <>
      <Image
        src="/icon.png"
        alt=""
        width={icon}
        height={icon}
        priority
        className={`rounded-2xl shadow-sm ${size === "lg" ? "h-14 w-14" : "h-12 w-12"}`}
      />
      <span className={`${nameClass} ${color}`}>{SITE.name}</span>
    </>
  );

  if (!href) {
    return <span className={`inline-flex items-center gap-3 ${color}`}>{inner}</span>;
  }

  return (
    <Link href={href} className={`inline-flex items-center gap-3 ${color}`}>
      {inner}
    </Link>
  );
}
