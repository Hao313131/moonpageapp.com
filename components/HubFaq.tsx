import { HUB_FAQS } from "@/lib/hubFaqs";

/**
 * Visible FAQ on keyword SEO hub pages. The exact same Q&A text is also emitted
 * as FAQPage JSON-LD by lib/site.ts `hubJsonLd` (looked up by the same path),
 * which is the requirement for Google to show the rich "People also ask" result.
 *
 * Rendered just before the page footer so it answers objections right above the
 * final download CTA.
 */
export function HubFaq({ path }: { path: string }) {
  const faqs = HUB_FAQS[path];
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-10 sm:mt-12">
      <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
        Common questions
      </h2>
      <dl className="mt-4 space-y-5 sm:mt-6 sm:space-y-6">
        {faqs.map((faq) => (
          <div key={faq.q}>
            <dt className="text-sm font-semibold text-ink sm:text-base">
              {faq.q}
            </dt>
            <dd className="mt-1.5 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              {faq.a}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
