import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { StoreButtons } from "@/components/StoreButtons";
import { MinimalFooter } from "@/components/Footer";
import { storyCoverSrc } from "@/lib/storyCover";

export const metadata: Metadata = {
  title: "Make bedtime feel calm again",
  description:
    "Gentle, original bedtime stories — no ads, no login. Try MoonPage free tonight.",
  robots: { index: false, follow: true }, // ad landing page, not meant to rank organically
};

const OUTCOMES = [
  {
    title: "A calmer bedtime",
    body: "One gentle story, every night — a routine that actually winds them down.",
  },
  {
    title: "Real time together",
    body: "Read along together, or let them hear it in your own recorded voice.",
  },
  {
    title: "Safe, always",
    body: "No ads, no login, no tracking. Built for parents who check these things.",
  },
];

const SHOTS = [
  { file: "wp_b39_1_one_special_night_the_cover.webp", alt: "Friends in pajamas gazing at the moon from a cozy treehouse" },
  { file: "wp_b03_1_woke_hush_cover.webp", alt: "Warm illustration of a little bear in bed by lamplight" },
  { file: "wp_b05_1_window_moon_cover.webp", alt: "Cover art from “A Secret in the Night”" },
];

/**
 * Dedicated ad-traffic landing page — deliberately shorter than the home page
 * so the headline can message-match ad creative. Sticky header still carries
 * IG follow on every scroll.
 */
export default function GetPage() {
  return (
    <>
      <Header />
      <main className="page-gutter flex min-h-screen flex-col items-center py-10 text-center sm:py-14 md:py-20">
        <h1 className="max-w-xl font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
          Make bedtime feel calm again.
        </h1>
        <p className="mt-3 max-w-md text-sm text-ink-muted sm:mt-4 sm:max-w-lg sm:text-base">
          Gentle, original illustrated stories for little ones — free to
          start tonight.
        </p>

        <div className="mt-7 flex w-full justify-center sm:mt-8">
          <StoreButtons campaign="get_lp_hero" className="justify-center" />
        </div>

        {/* phone: horizontal scroll strip · tablet+: 3-up grid */}
        <div className="-mx-1 mt-10 flex w-full max-w-3xl gap-3 overflow-x-auto px-1 pb-2 sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0">
          {SHOTS.map((s) => (
            <div
              key={s.file}
              className="relative aspect-[4/3] w-[72vw] max-w-xs shrink-0 overflow-hidden rounded-2xl shadow-md sm:w-auto sm:max-w-none"
            >
              <Image
                src={storyCoverSrc(s.file)}
                alt={s.alt}
                fill
                sizes="(min-width: 640px) 33vw, 72vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 grid w-full max-w-3xl gap-4 text-left sm:mt-14 sm:grid-cols-3 sm:gap-6">
          {OUTCOMES.map((o) => (
            <div key={o.title} className="rounded-2xl bg-paper p-4 sm:p-5">
              <h2 className="font-display text-sm font-semibold text-ink sm:text-base">
                {o.title}
              </h2>
              <p className="mt-1 text-sm text-ink-muted">{o.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex w-full justify-center sm:mt-14">
          <StoreButtons campaign="get_lp_footer" className="justify-center" />
        </div>
      </main>
      <MinimalFooter />
    </>
  );
}
