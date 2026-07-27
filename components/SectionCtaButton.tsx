import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

/** Centered pill CTA — matches the homepage FAQ "See all" button. */
export function SectionCtaButton({ href, children, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex h-full min-h-12 w-full items-center justify-center rounded-full bg-accent px-4 py-2.5 text-center font-display text-base font-bold leading-tight text-ink shadow-md transition-colors hover:bg-accent-dark sm:min-h-14 sm:px-5 sm:py-3 sm:text-lg ${className}`}
    >
      {children}
    </Link>
  );
}
