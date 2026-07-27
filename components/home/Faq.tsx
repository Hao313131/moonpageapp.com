import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { FAQS, FEATURED_FAQS } from "@/lib/faq";

/**
 * Homepage teaser: the five questions parents ask before downloading. The
 * rest — and the FAQPage structured data for the whole set — live on /faq,
 * so the schema isn't duplicated across two URLs.
 */
export function Faq() {
  const remaining = FAQS.length - FEATURED_FAQS.length;

  return (
    <section className="page-gutter mx-auto max-w-4xl py-12 sm:py-16 md:py-20">
      <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl md:text-3xl">
        Questions, answered
      </h2>
      <FaqList items={FEATURED_FAQS} className="mt-6 sm:mt-8" />
      <div className="mt-6 flex flex-col items-center gap-2 sm:mt-8">
        <Link
          href="/faq"
          className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 font-display text-sm font-semibold text-ink shadow-md transition-colors hover:bg-accent-dark sm:px-6 sm:py-3 sm:text-base"
        >
          See all {FAQS.length} questions <span aria-hidden>→</span>
        </Link>
        <p className="text-xs text-ink-muted sm:text-sm">
          {remaining} more on stories, privacy, devices, and subscriptions.
        </p>
      </div>
    </section>
  );
}
