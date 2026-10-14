# MoonPage

Marketing site for **MoonPage**, a children's bedtime-story app. It is live at
[https://moonpageapp.com](https://moonpageapp.com).

Built with Next.js (App Router) + TypeScript + Tailwind CSS v4, exported as a
fully static site and deployed to GitHub Pages.

## Status

- **Live:** [https://moonpageapp.com](https://moonpageapp.com) (GitHub Pages,
  custom domain).
- **iOS:** the App Store link points to the published listing
  (`apps.apple.com/app/id6788652725`).
- **Android:** the Google Play build is not yet released — the Play badge and
  related copy are gated behind `SITE.androidLive` in `lib/site.ts`.

## Pages

- `/` — brand home page (organic/social traffic)
- `/get/` — short single-CTA landing page for paid ad traffic (`noindex`)
- `/privacy`, `/privacy-choices`, `/terms`, `/support` — legal & support,
  ported verbatim from the `moonpage-legal` repo

## Tech stack

- Next.js `output: "export"` — `npm run build` writes a fully static site into
  `out/` (no Node server at runtime)
- Tailwind CSS v4
- Structured data (JSON-LD): `Book`, `FAQPage`, `Speakable`, `HowTo`,
  `BreadcrumbList`, `CollectionPage`, `Article`, plus `WebSite`/Sitemap
- `app/sitemap.ts` reads each page's real last-modified date from git history
  (`scripts/gen-content-dates.mjs`) so `lastmod` stays accurate

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → out/ (+ typecheck)
npm run start    # preview the static export locally
npm run lint
```

## Deploy (GitHub Pages)

Pushing to `master` runs
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml),
which builds the static export and deploys `out/` to GitHub Pages (custom
domain `moonpageapp.com`).

One-time setup in the GitHub repo:

1. **Settings → Pages → Build and deployment → Source**: GitHub Actions
2. **Custom domain**: add `moonpageapp.com`, then set DNS to GitHub's
   Pages records and enable "Enforce HTTPS"
3. If you publish under a **project URL** like
   `https://USER.github.io/moonpageapp.com/` (no custom domain), add
   `basePath: "/moonpageapp.com"` and `assetPrefix: "/moonpageapp.com"`
   in `next.config.ts` before deploying

Local check: `npm run build && npm run start`

## Legal content

`/privacy`, `/privacy-choices`, and `/terms` are ported **verbatim** from the
[`moonpage-legal`](https://github.com/Hao313131/moonpage-legal) repo — wording
must not drift between the two. If the legal text is ever amended there,
re-port the exact changes here rather than editing independently.
