/**
 * Centering audit for the built static site.
 *
 * The bug this exists to prevent: a CTA block whose copy is centered but whose
 * button hangs off to the left. It is invisible on a phone (the single store
 * badge centers below 768px) and only shows up on desktop, so it survived a
 * lot of page-by-page review.
 *
 * For every CTA-ish element on every built page, at several viewport widths:
 *   1. walk up to the nearest ancestor that is a centered context
 *      (`text-align:center`, a row flex with `justify-content:center`,
 *      a column flex with `align-items:center`, or a grid centered either way)
 *   2. if that ancestor exists, the element's horizontal center must match the
 *      ancestor's content-box center within TOLERANCE
 *   3. if no centered ancestor exists, the block is left-aligned by design —
 *      skipped
 *
 * Playwright is a dev-only dependency here, so it is imported leniently: a
 * normal `import` first, then a fallback to whatever tree `PLAYWRIGHT_ROOT`
 * points at (WorkBuddy keeps one outside the repo). Run it with:
 *
 *   PLAYWRIGHT_ROOT=/path/to/tree/with/playwright \
 *     node scripts/audit-cta-centering.mjs [--shots] [--only=<substr>]
 */
import { createRequire } from "node:module";
import { createServer } from "node:http";
import { readFile, mkdir, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

async function loadChromium() {
  try {
    return (await import("playwright")).chromium;
  } catch {
    const root = process.env.PLAYWRIGHT_ROOT;
    if (!root) {
      throw new Error(
        "playwright not resolvable — `npm i -D playwright` or set PLAYWRIGHT_ROOT " +
          "to a directory whose node_modules contains it."
      );
    }
    return createRequire(path.join(root, "noop.js"))("playwright").chromium;
  }
}

const chromium = await loadChromium();

const ROOT = process.cwd();
const OUT = path.join(ROOT, "out");
const TOLERANCE = 2; // px
const WIDTHS = [390, 768, 1024, 1280, 1440];

const argv = process.argv.slice(2);
const SHOTS = argv.includes("--shots");
const onlyArg = argv.find((a) => a.startsWith("--only="));
const ONLY = onlyArg ? onlyArg.slice("--only=".length) : null;
const SHOT_DIR = path.join(ROOT, ".cta-audit");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

async function walk(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...(await walk(full)));
    else if (entry.name === "index.html") found.push(full);
  }
  return found;
}

function serve(root) {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      let urlPath = decodeURIComponent(req.url.split("?")[0]);
      if (urlPath.endsWith("/")) urlPath += "index.html";
      const filePath = path.join(root, urlPath);
      if (!filePath.startsWith(root) || !existsSync(filePath)) {
        res.writeHead(404);
        res.end("not found");
        return;
      }
      try {
        const info = await stat(filePath);
        if (!info.isFile()) {
          res.writeHead(404);
          res.end("not found");
          return;
        }
        res.writeHead(200, {
          "content-type": MIME[path.extname(filePath)] ?? "application/octet-stream",
        });
        res.end(await readFile(filePath));
      } catch {
        res.writeHead(500);
        res.end("error");
      }
    });
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

/** Runs in the page. Returns one record per CTA element that sits inside a
 *  centered context but is not itself horizontally centered. */
const PROBE = (tolerance) => {
  const SELECTOR =
    'a.store-badge-glow, a[data-umami-event="section-cta"], a[data-umami-event="download-click"]';

  const isCenteredContext = (el) => {
    const cs = getComputedStyle(el);
    if (cs.textAlign === "center") return "text-align:center";
    if (cs.display.includes("flex")) {
      const column = cs.flexDirection.startsWith("column");
      if (column && cs.alignItems === "center") return "flex-column align-items:center";
      if (!column && cs.justifyContent === "center") return "flex-row justify-content:center";
    }
    if (cs.display.includes("grid")) {
      if (cs.justifyContent === "center") return "grid justify-content:center";
      if (cs.justifyItems === "center") return "grid justify-items:center";
    }
    return null;
  };

  const out = [];
  for (const el of document.querySelectorAll(SELECTOR)) {
    const box = el.getBoundingClientRect();
    if (box.width === 0 || box.height === 0) continue;
    if (box.bottom < 0 || box.top > 20000) continue;

    let node = el.parentElement;
    let ctx = null;
    while (node && node !== document.documentElement) {
      const reason = isCenteredContext(node);
      if (reason) {
        ctx = { node, reason };
        break;
      }
      node = node.parentElement;
    }
    if (!ctx) continue;

    const cs = getComputedStyle(ctx.node);
    const ctxBox = ctx.node.getBoundingClientRect();
    const contentCenter =
      ctxBox.left +
      parseFloat(cs.borderLeftWidth) +
      parseFloat(cs.paddingLeft) +
      (ctxBox.width -
        parseFloat(cs.borderLeftWidth) -
        parseFloat(cs.borderRightWidth) -
        parseFloat(cs.paddingLeft) -
        parseFloat(cs.paddingRight)) /
        2;

    const elCenter = box.left + box.width / 2;
    const delta = Math.round((elCenter - contentCenter) * 10) / 10;
    if (Math.abs(delta) <= tolerance) continue;

    out.push({
      text: (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 60),
      href: el.getAttribute("href"),
      delta,
      elCenter: Math.round(elCenter),
      contentCenter: Math.round(contentCenter),
      elWidth: Math.round(box.width),
      contextReason: ctx.reason,
      contextClass: (ctx.node.className || "").toString().slice(0, 120),
      elClass: (el.className || "").toString().slice(0, 160),
    });
  }
  return out;
};

const files = (await walk(OUT))
  .map((f) => path.relative(OUT, f))
  .map((f) => "/" + f.replace(/index\.html$/, ""))
  .filter((p) => (ONLY ? p.includes(ONLY) : true))
  .sort();

const server = await serve(OUT);
const port = server.address().port;
const browser = await chromium.launch();
const page = await browser.newPage();

if (SHOTS) await mkdir(SHOT_DIR, { recursive: true });

const problems = [];
let checked = 0;

for (const route of files) {
  await page.setViewportSize({ width: WIDTHS[0], height: 900 });
  await page.goto(`http://127.0.0.1:${port}${route}`, { waitUntil: "load" });
  for (const width of WIDTHS) {
    await page.setViewportSize({ width, height: 900 });
    await page.waitForTimeout(60);
    const hits = await page.evaluate(PROBE, TOLERANCE);
    checked += hits.length;
    for (const hit of hits) problems.push({ route, width, ...hit });
    if (SHOTS && width === 1280) {
      const name = (route === "/" ? "home" : route.replace(/^\/|\/$/g, "").replace(/\//g, "__")) + ".png";
      await page.screenshot({
        path: path.join(SHOT_DIR, name),
        fullPage: true,
      });
    }
  }
}

await browser.close();
server.close();

if (problems.length === 0) {
  console.log(`✅ ${files.length} pages × ${WIDTHS.length} widths — no off-center CTA found.`);
  process.exit(0);
}

console.log(`❌ ${problems.length} off-center CTA instance(s):\n`);
const byRoute = new Map();
for (const p of problems) {
  if (!byRoute.has(p.route)) byRoute.set(p.route, []);
  byRoute.get(p.route).push(p);
}
for (const [route, list] of byRoute) {
  console.log(route);
  for (const p of list) {
    console.log(
      `   @${p.width}px  Δ${p.delta > 0 ? "+" : ""}${p.delta}px  "${p.text}"\n` +
        `        element center ${p.elCenter} (w=${p.elWidth}) vs container center ${p.contentCenter}\n` +
        `        container: ${p.contextReason}  class="${p.contextClass}"`
    );
  }
}
console.log(`\n${byRoute.size} route(s) affected.`);
process.exit(1);
