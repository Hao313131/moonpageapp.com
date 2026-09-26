import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { HubLead } from "@/components/HubLead";
import { Footer } from "@/components/Footer";
import { BackHomeLink } from "@/components/BackLink";
import { FaqList } from "@/components/FaqList";
import { SampleShelfNotice } from "@/components/SampleShelfNotice";
import { SeoHubCta } from "@/components/SeoHubCta";
import { StoryGrid } from "@/components/StoryGrid";
import { SITE, hubJsonLd, pageMetadata } from "@/lib/site";
import { storiesByTag } from "@/lib/stories";

export const metadata: Metadata = pageMetadata({
  path: "/bedtime-story-ideas",
  title: "Bedtime Story Ideas: Make Up Your Own Tonight",
  description:
    "Simple bedtime story ideas and prompts any parent can use — plus how MoonPage lets you record your own voice and play it back offline. Free to start.",
  keywords: [
    "bedtime story ideas",
    "make up a bedtime story",
    "bedtime story prompts",
    "own voice bedtime story",
    "creative bedtime stories",
    "storytelling for kids",
    "invent a bedtime story",
    "bedtime imagination",
  ],
});

const FAQS = [
  {
    q: "I'm not creative — can I still make up a bedtime story?",
    a: "Yes. The best made-up stories borrow from the day: a lost toy, a trip to the park, a friend's name. Children don't judge the plot; they love hearing themselves and the people they know inside the story. Our guide to making up a bedtime story walks through a five-minute method anyone can use.",
    category: "Stories & narration" as const,
  },
  {
    q: "How long should a bedtime story be?",
    a: "Shorter than you think. Two to four minutes is plenty — long enough for a small adventure, short enough that the rhythm stays calm. Let the child's eyes decide: when they slow down, end the story and end the day. See bedtime stories by age for length by age.",
    category: "Getting started" as const,
  },
  {
    q: "Can I record my own voice reading a story?",
    a: "MoonPage lets you record your own voice over any story and play it back offline, so a child hears Mom or Dad even on nights you're tired or away. It's the same idea as making up a story — your voice is the comfort, not the performance. See bedtime stories in your voice.",
    category: "Stories & narration" as const,
  },
  {
    q: "What if my child wants the same story every night?",
    a: "That's normal and good. Repetition is what makes a story a sleep cue. Keep the words the same, and once in a while change one small thing — the color of the moon, the name of the train — to stretch their imagination without breaking the routine.",
    category: "Getting started" as const,
  },
];

export default function BedtimeStoryIdeasPage() {
  // Imagination-led tags — the stories whose whole point is "what if?".
  const sample = [
    ...storiesByTag("magic"),
    ...storiesByTag("curiosity"),
    ...storiesByTag("creativity"),
    ...storiesByTag("forest"),
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)
    .slice(0, 9);

  const jsonLd = hubJsonLd({
    path: "/bedtime-story-ideas",
    name: "Bedtime Story Ideas",
    faqs: FAQS,
    items: [
      {
        name: "How to make up a bedtime story",
        url: `${SITE.domain}/guides/how-to-make-up-a-bedtime-story`,
      },
      {
        name: "Bedtime stories in your voice",
        url: `${SITE.domain}/bedtime-stories-in-your-voice`,
      },
      {
        name: "Read-aloud bedtime stories",
        url: `${SITE.domain}/read-aloud-bedtime-stories`,
      },
      {
        name: "Bedtime stories by age",
        url: `${SITE.domain}/bedtime-stories-by-age`,
      },
      {
        name: "Magic and wonder stories",
        url: `${SITE.domain}/collections/magic-and-wonder-stories`,
      },
      {
        name: "Cozy bedtime stories",
        url: `${SITE.domain}/cozy-bedtime-stories`,
      },
      {
        name: "Free bedtime stories",
        url: `${SITE.domain}/free-bedtime-stories`,
      },
      {
        name: "Goodnight bedtime stories",
        url: `${SITE.domain}/goodnight-bedtime-stories`,
      },
    ],
  });

  return (
    <>
      <Header />
      <main>
        <div className="page-gutter mx-auto max-w-5xl py-10 sm:py-14 md:py-20">
          <BackHomeLink />
          <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            Bedtime story ideas you can make up tonight
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            You don&apos;t need a book in hand to tell a great bedtime story.
            The ones children ask for again and again are often the ones you
            invent — about their day, their toys, their questions. Made-up
            stories are free, tailored to your child, and screen-free. And when
            you want a hand, MoonPage lets you record your own voice over its
            illustrated tales.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Below: why invented stories calm kids down, five prompts to start
            with, and how to keep your voice in the loop on tired nights.
          </p>

          <HubLead path="/bedtime-story-ideas" />
          <SampleShelfNotice className="mt-5 sm:mt-6" />

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Imagination-led stories to try tonight
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              The MoonPage tales built on a &quot;what if?&quot; — the easiest
              ones to riff on once you start making up your own.
            </p>
            <StoryGrid stories={sample} className="mt-6" />
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Why made-up stories work at bedtime
            </h2>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              A story you invent does three things a borrowed one can&apos;t:
            </p>
            <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>It stars your child&apos;s real world — their name, their dog, the park — so they lean in instead of tuning out.</li>
              <li>It slows to their pace; you can end the moment their eyes get heavy, no matter where the &quot;plot&quot; was going.</li>
              <li>It becomes a ritual. The same opening line, night after night, teaches &quot;story&quot; to mean &quot;sleep is next.&quot;</li>
            </ul>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Five easy bedtime story prompts
            </h2>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              Stuck? Start from one small, familiar thing and let it wander. A
              full method is in our{" "}
              <Link
                href="/guides/how-to-make-up-a-bedtime-story"
                className="font-medium text-link underline hover:text-link-hover"
                title="How to make up a bedtime story"
              >
                how to make up a bedtime story
              </Link>{" "}
              guide, but these five openers work on night one:
            </p>
            <ol className="mt-3 max-w-prose list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>The toy that wakes up only at night, when the room is quiet.</li>
              <li>A shy little star learning it&apos;s allowed to shine.</li>
              <li>The lost sock that follows a moonlit trail home.</li>
              <li>A train made entirely of pillows, with your child as the driver.</li>
              <li>The moon who forgot to rise — and asks your child for help.</li>
            </ol>
            <p className="mt-4 text-sm text-ink-muted sm:text-base">
              For tales already built around &quot;what if?&quot;, browse the{" "}
              <Link
                href="/collections/magic-and-wonder-stories"
                className="font-medium text-link underline hover:text-link-hover"
                title="Magic and wonder stories"
              >
                magic and wonder stories
              </Link>{" "}
              shelf.
            </p>
          </section>

          <section className="mt-10 rounded-2xl border border-wood/20 bg-paper p-5 sm:mt-12 sm:rounded-3xl sm:p-7">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              How MoonPage keeps your voice in the story
            </h2>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              Some nights you have nothing left to give — and that&apos;s exactly
              when a recorded voice carries the routine. With MoonPage you can:
            </p>
            <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted sm:text-base">
              <li>
                Record your own narration over any tale, then play it back
                offline — see{" "}
                <Link
                  href="/bedtime-stories-in-your-voice"
                  className="font-medium text-link underline hover:text-link-hover"
                  title="Bedtime stories in your voice"
                >
                  bedtime stories in your voice
                </Link>
                .
              </li>
              <li>
                Let a calm professional narrator take over when you&apos;re done,
                on the{" "}
                <Link
                  href="/read-aloud-bedtime-stories"
                  className="font-medium text-link underline hover:text-link-hover"
                  title="Read-aloud bedtime stories"
                >
                  read-aloud bedtime stories
                </Link>{" "}
                you already love.
              </li>
            </ul>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Prompts by age
            </h2>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
              The same prompt lands differently as your child grows. Keep it
              short and repetitive for the youngest, and let bigger kids
              co-write. Match the length to the age in{" "}
              <Link
                href="/bedtime-stories-by-age"
                className="font-medium text-link underline hover:text-link-hover"
                title="Bedtime stories by age"
              >
                bedtime stories by age
              </Link>
              .
            </p>
          </section>

          <p className="mt-10 max-w-prose text-sm leading-relaxed text-ink-muted sm:mt-12 sm:text-base">
            Prefer to have the ideas on paper rather than in your head? Ten of
            the starters above are on{" "}
            <Link
              href="/printable-bedtime-stories"
              className="font-medium text-link underline hover:text-link-hover"
            >
              printable bedtime story cards
            </Link>{" "}
            — cut them out, keep them in a jar, and draw one when nobody can
            think of anything.
          </p>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              More story ideas
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/printable-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Printable bedtime stories
              </Link>
              <Link
                href="/bedtime-stories-in-your-voice"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Bedtime stories in your voice
              </Link>
              <Link
                href="/read-aloud-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Read-aloud bedtime stories
              </Link>
              <Link
                href="/bedtime-stories-by-age"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Bedtime stories by age
              </Link>
              <Link
                href="/collections/magic-and-wonder-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Magic and wonder stories
              </Link>
              <Link
                href="/cozy-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Cozy bedtime stories
              </Link>
              <Link
                href="/free-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Free bedtime stories
              </Link>
              <Link
                href="/goodnight-bedtime-stories"
                className="rounded-full border border-wood/30 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-link sm:text-sm"
              >
                Goodnight bedtime stories
              </Link>
            </div>
          </section>

          <section className="mt-10 sm:mt-12">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Bedtime story ideas FAQ
            </h2>
            <FaqList items={FAQS} className="mt-4" />
          </section>

          <SeoHubCta
            campaign="bedtime_story_ideas"
            title="Tell a story in your own voice tonight"
            body="MoonPage is free to download — original illustrated tales with narration, your own voice recording, and offline reading for kids ages 2+."
          />
        </div>
      </main>
      <Footer />
      {jsonLd.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
