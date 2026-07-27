import { FaqList } from "@/components/FaqList";
import { SectionCtaButton } from "@/components/SectionCtaButton";
import { FAQS, FEATURED_FAQS } from "@/lib/faq";

/**
 * Homepage teaser: the five questions parents ask before downloading. The
 * rest — and the FAQPage structured data for the whole set — live on /faq,
 * so the schema isn't duplicated across two URLs.
 */
export function Faq() {
  return (
    <section className="page-gutter mx-auto max-w-4xl py-12 sm:py-16 md:py-20">
      <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl md:text-3xl">
        Questions, answered
      </h2>
      <FaqList items={FEATURED_FAQS} className="mt-6 sm:mt-8" />
      <div className="mt-6 flex flex-col items-center sm:mt-8">
        <SectionCtaButton href="/faq">
          See all {FAQS.length} questions
        </SectionCtaButton>
      </div>
    </section>
  );
}
