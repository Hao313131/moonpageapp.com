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
      className={`inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 font-display text-sm font-semibold text-ink shadow-md transition-colors hover:bg-accent-dark sm:px-6 sm:py-3 sm:text-base ${className}`}
    >
      {children}
    </Link>
  );
}
