import type { Metadata } from "next";
import Image from "next/image";
import { StoreButtons } from "@/components/StoreButtons";
import { MinimalFooter } from "@/components/Footer";
import { SITE } from "@/lib/site";

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
  "wp_b01_1_blue_sea_cover.webp",
  "wp_b05_1_window_moon_cover.webp",
  "wp_b04_1_maple_street_cover.webp",
];

/**
 * Dedicated ad-traffic landing page — deliberately shorter than the home page
 * and stripped of nav, so the headline can message-match ad creative and the
 * only path forward is the single CTA (see plan §2 "/get 广告落地页").
 */
export default function GetPage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center px-5 py-14 text-center sm:py-20">
        <Image
          src="/icon.png"
          alt={SITE.name}
          width={56}
          height={56}
          className="rounded-2xl shadow-sm"
        />
        <h1 className="mt-6 max-w-lg font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          Make bedtime feel calm again.
        </h1>
        <p className="mt-4 max-w-md text-lg text-ink-muted">
          Gentle, original illustrated stories for little ones — free to
          start tonight.
        </p>

        <div className="mt-8">
          <StoreButtons campaign="get_lp_hero" />
        </div>

        <div className="mt-14 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
          {SHOTS.map((f) => (
            <div
              key={f}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src={`/covers/${f}`}
                alt=""
                fill
                sizes="(min-width: 640px) 33vw, 90vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-14 grid w-full max-w-3xl gap-6 text-left sm:grid-cols-3">
          {OUTCOMES.map((o) => (
            <div key={o.title} className="rounded-2xl bg-paper p-5">
              <h2 className="font-display text-lg font-semibold text-ink">
                {o.title}
              </h2>
              <p className="mt-1 text-base text-ink-muted">{o.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <StoreButtons campaign="get_lp_footer" />
        </div>
      </main>
      <MinimalFooter />
    </>
  );
}
