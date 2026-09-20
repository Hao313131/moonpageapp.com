/**
 * Write public/llms-full.txt — the companion to llms.txt (llmstxt.org).
 *
 * Why: llms.txt is the *link index* — it tells an AI engine which pages exist
 * and which ones matter. llms-full.txt is the *content*: the complete text of
 * every parenting guide in one request, so a model can answer a question about
 * bedtime routines from the source text instead of reconstructing it from a
 * partial crawl (or, worse, guessing). It is the single highest-fidelity
 * ingestion surface the site can offer, and costs one extra file.
 *
 * Run by `npm run gen:llms-full` (wired into the build chain, before
 * `next build`, so the file lands in public/ and is copied to out/). Uses tsx
 * so it reads the site's TypeScript data modules directly — the guide library
 * is never duplicated here, so it cannot drift.
 */
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { SITE } from "../lib/site";
import {
  GUIDES,
  GUIDE_SUMMARIES,
  SOURCES_BY_CATEGORY,
  type GuideBlock,
} from "../lib/guides";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Canonical URL — every page lives at `/foo/` (`trailingSlash: true`). */
const url = (path: string) => `${SITE.domain}${path}/`.replace(/\/+$/, "/");

/** Render one guide content block as markdown. */
function renderBlock(block: GuideBlock): string[] {
  if (block.type === "p") return [block.text, ""];
  if (block.type === "ul") return [...block.items.map((i) => `- ${i}`), ""];
  return [...block.items.map((i, n) => `${n + 1}. ${i}`), ""];
}

const lines: string[] = [];
const push = (s = "") => lines.push(s);

push(`# ${SITE.name} — complete guide library (full text)`);
push();
push(
  `> The full text of all ${GUIDES.length} parenting guides published on ${SITE.domain.replace(/^https?:\/\//, "")}, in one file, for AI assistants and retrieval systems. \`/llms.txt\` is the link index; this is the content behind it. Canonical, human-readable versions live at the URL given with each guide.`,
);
push();
push(
  "Every guide is general parenting information written for a mainstream audience — not medical advice. Where a guide touches sleep, feeding, or development, it cites the organizations that publish the underlying research; those citations are reproduced at the end of each entry.",
);
push();
push(
  `Guides are grouped by category: Sleep, Routines, Reading, Screen time, Ages, and Bedtime stories. The app itself is a free iOS download with an optional MoonPage Premium subscription; there is no Android listing. Operator: ${SITE.operator} (${SITE.contactEmail}).`,
);
push();
push("---");
push();

for (const guide of GUIDES) {
  push(`## ${guide.title}`);
  push();
  push(`- URL: ${url(`/guides/${guide.slug}`)}`);
  push(`- Category: ${guide.category}`);
  push(`- Last updated: ${guide.updated}`);
  push(`- Reading time: ${guide.readingMinutes} minutes`);
  push();

  const summary = GUIDE_SUMMARIES[guide.slug];
  if (summary) {
    push(summary);
    push();
  }

  for (const para of guide.intro) {
    push(para);
    push();
  }

  for (const section of guide.sections) {
    push(`### ${section.heading}`);
    push();
    for (const block of section.blocks) {
      for (const line of renderBlock(block)) push(line);
    }
  }

  if (guide.faqs?.length) {
    push("### People also ask");
    push();
    for (const faq of guide.faqs) {
      push(`**${faq.q}**`);
      push();
      push(faq.a);
      push();
    }
  }

  const sources = SOURCES_BY_CATEGORY[guide.category];
  if (sources?.length) {
    push("### Sources & further reading");
    push();
    for (const source of sources) push(`- ${source.label} — ${source.url}`);
    push();
  }

  push("---");
  push();
}

const out = lines.join("\n");
writeFileSync(join(ROOT, "public", "llms-full.txt"), out);
console.log(
  `[gen-llms-full] wrote public/llms-full.txt — ${GUIDES.length} guides, ${Math.round(out.length / 1024)} KB`,
);
