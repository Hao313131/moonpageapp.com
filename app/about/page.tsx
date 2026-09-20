import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackHomeLink } from "@/components/BackLink";
import { SITE, pageMetadata, withSlash } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "About MoonPage: Who We Are & How We Write Our Guides",
  description:
    "MoonPage is made by EchoRealm, a small team of parents and storytellers. Here's who we are, and how we write and update our parenting guides.",
});

/**
 * Prose lives in string constants (not JSX text) so it can use plain
 * apostrophes and quotes without tripping react/no-unescaped-entities.
 */
const INTRO = [
  "MoonPage is a bedtime story app for children aged 2 and up, made by a small studio called EchoRealm. This website is its home: the story catalog, the themed collections, and a growing library of short, practical guides for parents — on sleep, bedtime routines, reading aloud and screen time.",
];

const SECTIONS: { heading: string; paras: string[] }[] = [
  {
    heading: "What MoonPage is",
    paras: [
      "MoonPage began with a simple goal: make the last twenty minutes of a child's day calm instead of chaotic. The app holds original, illustrated picture books that a child can hear from a professional narrator or in a parent's own recorded voice. Some stories are free to read now; the full library is available with MoonPage Premium.",
    ],
  },
  {
    heading: "How we write our guides",
    paras: [
      "The guides are written for parents, not clinicians. Each one takes a single question — what time a toddler should go to bed, how to stop the bedtime battle, when to start reading to a baby — and answers it in plain language you can act on tonight. They are kept short on purpose: a guide you can read in five minutes is a guide you will actually use.",
      "Where a topic touches health or development, we follow established sources rather than inventing statistics, and we link to the organisations whose guidance we draw on — the Sleep Foundation, the NHS, the American Academy of Pediatrics, Scholastic, Zero to Three and Common Sense Media. Every guide shows the date it was last updated.",
    ],
  },
  {
    heading: "What our guides are not",
    paras: [
      "MoonPage's guides are general parenting information. They are not medical advice, and they are not a substitute for your child's doctor, health visitor or paediatrician. If you are worried about your child's sleep, health or development, please speak to a qualified professional.",
    ],
  },
  {
    heading: "Privacy and pricing",
    paras: [
      "MoonPage has no ads and needs no account or login. Some stories are free to read now; the full library is unlocked with MoonPage Premium, a monthly or yearly subscription billed through the App Store. What we do and do not collect is set out in full in our Privacy Policy.",
    ],
  },
];

export default function AboutPage() {
  const url = withSlash(`${SITE.domain}/about`);

  // AboutPage reinforces the same Organization node the root layout emits, so
  // the "who is behind this content" question has one consistent answer across
  // the graph — the E-E-A-T signal Google reads for a brand-run content site.
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About MoonPage",
    url,
    inLanguage: "en",
    description:
      "Who makes MoonPage, and how its parenting guides are researched, written and updated.",
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: withSlash(SITE.domain),
    },
    mainEntity: {
      "@type": "Organization",
      name: SITE.operator,
      url: SITE.domain,
      sameAs: [SITE.instagramUrl, SITE.tiktokUrl, SITE.appStoreUrl],
      contactPoint: {
        "@type": "ContactPoint",
        email: SITE.contactEmail,
        contactType: "customer support",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: withSlash(SITE.domain) },
      { "@type": "ListItem", position: 2, name: "About", item: url },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <article className="page-gutter mx-auto max-w-2xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            About MoonPage
          </h1>

          <div id="page-intro" className="mt-6 space-y-4 sm:mt-8">
            {INTRO.map((text) => (
              <p
                key={text}
                className="text-base leading-relaxed text-ink sm:text-lg"
              >
                {text}
              </p>
            ))}
          </div>

          {SECTIONS.map((section) => (
            <section key={section.heading} className="mt-10 sm:mt-12">
              <h2 className="font-display text-lg font-semibold text-ink sm:text-xl md:text-2xl">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
                {section.paras.map((para) => (
                  <p
                    key={para}
                    className="max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section className="mt-10 border-t border-wood/20 pt-6 sm:mt-12 sm:pt-8">
            <h2 className="font-display text-base font-semibold text-ink sm:text-lg">
              Get in touch
            </h2>
            <p className="mt-2 max-w-prose text-sm text-ink-muted sm:text-base">
              We are a small team and we read everything. Email{" "}
              <a
                href={`mailto:${SITE.contactEmail}`}
                className="text-link underline hover:text-link-hover"
              >
                {SITE.contactEmail}
              </a>{" "}
              for questions, feedback or press.
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/guides"
                  className="text-sm font-medium text-link underline hover:text-link-hover sm:text-base"
                >
                  Browse all parenting guides
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm font-medium text-link underline hover:text-link-hover sm:text-base"
                >
                  Frequently asked questions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm font-medium text-link underline hover:text-link-hover sm:text-base"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-sm font-medium text-link underline hover:text-link-hover sm:text-base"
                >
                  Support and contact
                </Link>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-link underline hover:text-link-hover sm:text-base"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SITE.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-link underline hover:text-link-hover sm:text-base"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
