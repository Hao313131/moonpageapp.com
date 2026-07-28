import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

/**
 * Accent CTAs with the same type size/weight as the store badge
 * "Download on the" line — color stays on the brand accent pills.
 */
export function SectionCtaButton({ href, children, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex h-full min-h-12 w-full items-center justify-center rounded-full bg-accent px-4 py-2.5 text-center text-sm font-bold leading-tight text-ink shadow-md transition-colors hover:bg-accent-dark sm:min-h-14 sm:px-5 sm:py-3 sm:text-base ${className}`}
    >
      {children}
    </Link>
  );
}
