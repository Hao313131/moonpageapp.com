import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { StoryShowcase } from "@/components/home/StoryShowcase";
import { Trust } from "@/components/home/Trust";
import { Testimonials } from "@/components/home/Testimonials";
import { Pricing } from "@/components/home/Pricing";
import { GuidePreview } from "@/components/home/GuidePreview";
import { Faq } from "@/components/home/Faq";

/**
 * Curated inner-hub links kept directly on the homepage. 哥飞's internal-link
 * playbook stresses "把新内容/热门页面在首页列出来" — surfacing top hubs here
 * speeds their crawl and lets homepage authority flow one hop straight to the
 * orchard instead of stopping at /bedtime-stories. Anchors are descriptive
 * (not "click here") so they carry topical relevance.
 */
const TOPIC_HUBS: { href: string; label: string }[] = [
  { href: "/toddler-bedtime-stories", label: "Toddler bedtime stories (ages 1–3)" },
  { href: "/preschool-bedtime-stories", label: "Preschool bedtime stories (ages 3–5)" },
  { href: "/cozy-bedtime-stories", label: "Cozy bedtime stories" },
  { href: "/short-bedtime-stories", label: "Short 5-minute bedtime stories" },
  { href: "/read-aloud-bedtime-stories", label: "Read-aloud bedtime stories" },
  { href: "/lullaby-bedtime-stories", label: "Lullaby bedtime stories" },
  { href: "/bedtime-stories-by-age", label: "Bedtime stories by age" },
  { href: "/free-bedtime-stories", label: "Free bedtime stories" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <StoryShowcase />
        <section className="page-gutter mx-auto max-w-6xl py-10 sm:py-14">
          <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
            Popular bedtime story topics
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-ink-muted sm:text-base">
            Jump straight to the shelf that fits tonight — by age, mood, or how
            much time you have before lights-out.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {TOPIC_HUBS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                {t.label}
              </Link>
            ))}
          </div>
        </section>
        <Trust />
        <Testimonials />
        <Pricing />
        <GuidePreview />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
