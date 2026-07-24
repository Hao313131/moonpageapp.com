# MoonPage website

Marketing site for [MoonPage](https://github.com/echorealmmedia/moonpage-app) — a
children's bedtime-story app. Built with Next.js (App Router) + TypeScript +
Tailwind CSS v4. See the full plan this was built from at
`/Users/vinco/.claude/plans/app-app-tender-island.md` (repo/site strategy,
tech-stack rationale, phase 2/3 roadmap).

## Pages

- `/` — brand home page (organic/social traffic)
- `/get` — short single-CTA landing page for paid ad traffic (`noindex`)
- `/privacy`, `/privacy-choices`, `/terms`, `/support` — legal & support,
  ported verbatim from the `moonpage-legal` repo

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build + typecheck
npm run lint
```

## Before this goes live — TODO

These are placeholder values checked into the code on purpose (same
convention as `moonpage-app/constants/links.ts`), grep for `TODO` to find
them all:

- **App Store ID** (`lib/site.ts`, `app/layout.tsx`): still `id0000000000` /
  `app-id=0000000000`. Replace once iOS review approves and the app has a
  real numeric ID.
- **App Store Connect Campaign Link provider token** (`lib/site.ts` →
  `ASC_PROVIDER_TOKEN`): create campaigns in App Store Connect → Analytics →
  Acquisition → Campaigns (e.g. `website_hero`, `website_footer`,
  `get_lp_hero`) and paste the real `pt=` token.
- **Domain** (`lib/site.ts` → `SITE.domain`): still `https://moonpage.app` as
  a placeholder — not purchased yet. Update once a real domain is bought and
  wired up in Netlify.
- **Cloudflare Web Analytics** (`app/layout.tsx`, commented out): sign up at
  dash.cloudflare.com → Web Analytics and paste the beacon token — works on
  any host, no DNS change required.
- **OG image** (`public/og-image.png`): currently just the app icon padded
  onto a cream background via `sips`. A real designed OG image (with
  tagline text) would look better shared on social.
- **Hero visual** (`components/home/Hero.tsx`): currently uses story cover
  art in a device frame as a placeholder. Swap for a real landscape
  screenshot of the reader screen once available.

## Deploy

Not yet deployed anywhere. Plan is Netlify (free tier explicitly allows
commercial use, unlike Vercel's Hobby plan — see the plan doc §3). `netlify.toml`
is already set up with the official `@netlify/plugin-nextjs`. This repo is
local-only so far (no GitHub remote, no Netlify site connected) — both need
an authenticated account to set up.

## Legal content

`/privacy`, `/privacy-choices`, and `/terms` are ported **verbatim** from the
`moonpage-legal` repo (`Hao313131/moonpage-legal`) — wording must not drift
between the two. If the legal text is ever amended there, re-port the exact
changes here too rather than editing independently.
