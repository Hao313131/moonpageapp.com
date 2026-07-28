import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

/**
 * Same chrome as the App Store / Google Play badges — dark, rounded-2xl,
 * bold type, equal height — for in-site section CTAs.
 */
export function SectionCtaButton({ href, children, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex h-full w-full min-h-[3.5rem] items-center justify-center rounded-2xl bg-ink px-4 py-3 text-center font-display text-lg font-bold tracking-tight text-white shadow-[0_4px_0_0_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_2px_0_0_rgba(0,0,0,0.25)] sm:min-h-[4.25rem] sm:px-6 sm:py-3.5 sm:text-xl sm:shadow-[0_8px_0_0_rgba(0,0,0,0.25)] ${className}`}
    >
      {children}
    </Link>
  );
}
