import Link from "next/link";
import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-2xl px-5 py-14 sm:py-20">
      <Link href="/" className="text-base text-ink-muted hover:text-ink">
        ← {SITE.name}
      </Link>
      <h1 className="mt-4 font-display text-3xl font-semibold text-ink">
        {title}
      </h1>
      <p className="mt-2 text-base text-ink-muted">
        Last updated: {updated}. This document applies to the {SITE.name} app
        operated by {SITE.operator}.
      </p>

      <div className="mt-8 space-y-4">{children}</div>

      <footer className="mt-12 border-t border-wood/20 pt-6 text-base text-ink-muted">
        <p>
          © {new Date().getFullYear()} {SITE.operator} ·{" "}
          <a href={`mailto:${SITE.contactEmail}`} className="underline">
            {SITE.contactEmail}
          </a>
        </p>
        <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          <Link href="/privacy" className="hover:text-ink">
            Privacy Policy
          </Link>
          <Link href="/privacy-choices" className="hover:text-ink">
            Privacy Choices
          </Link>
          <Link href="/terms" className="hover:text-ink">
            Terms of Use
          </Link>
          <Link href="/support" className="hover:text-ink">
            Support
          </Link>
        </p>
      </footer>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-wood/20 bg-paper p-5">
      <h2 className="font-display text-lg font-semibold text-ink">
        {title}
      </h2>
      <div className="mt-2 space-y-3 text-base leading-relaxed text-ink-muted">
        {children}
      </div>
    </section>
  );
}
