import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { BackHomeLink } from "@/components/BackLink";
import { SITE } from "@/lib/site";

export function LegalLayout({
  title,
  path,
  updated,
  children,
}: {
  title: string;
  /** Route path (e.g. "/privacy") — used only to build BreadcrumbList JSON-LD. */
  path: string;
  updated: string;
  children: ReactNode;
}) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: `${SITE.domain}${path}`,
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="page-gutter mx-auto max-w-2xl py-10 sm:py-14 md:py-20">
        <BackHomeLink />
        <h1 className="mt-4 font-display text-xl font-semibold text-ink sm:text-2xl">
          {title}
        </h1>
        <p className="mt-2 max-w-prose text-sm text-ink-muted">
          Last updated: {updated}. This document applies to the {SITE.name} app
          operated by {SITE.operator}.
        </p>

        <div className="mt-6 space-y-4 sm:mt-8">{children}</div>

        <footer className="mt-10 border-t border-wood/20 pt-6 text-sm text-ink-muted sm:mt-12">
          <p>
            © {new Date().getFullYear()} {SITE.operator} ·{" "}
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="font-medium text-link underline hover:text-link-hover"
            >
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
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
      <h2 className="font-display text-base font-semibold text-ink">
        {title}
      </h2>
      <div className="mt-2 max-w-prose space-y-3 text-sm leading-relaxed text-ink-muted">
        {children}
      </div>
    </section>
  );
}
