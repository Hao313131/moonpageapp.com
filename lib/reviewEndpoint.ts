import { SITE } from "./site";

/**
 * Where a review submission is sent — and the shape it has to be sent in.
 *
 * This lives in its own module (not in lib/reviews.ts) on purpose: that file
 * imports `data/reviews.json` and builds the whole review store at module
 * scope, so importing anything from it drags the store and every review body
 * into the client bundle. The form only needs a URL and a payload shape.
 *
 * WHY THERE IS A DEFAULT
 *
 * A form that silently discards submissions is worse than no form. So rather
 * than shipping a disabled form and waiting for the owner to wire a backend,
 * we default to FormSubmit — a relay that needs no account, no signup and no
 * server: you POST to it and it emails you the fields. The destination inbox
 * is the same one the mailto fallback already used (SITE.contactEmail), so no
 * data goes anywhere it was not already going.
 *
 * ONE-TIME ACTIVATION (important): FormSubmit sends a confirmation email on
 * the *first* submission and ignores submissions until that link is clicked.
 * Trigger it deliberately after a deploy — see docs/评价endpoint部署.md.
 *
 * UPGRADING: set NEXT_PUBLIC_REVIEWS_ENDPOINT to your own URL (a Google Apps
 * Script web app, a Cloudflare Worker, anything that accepts a POST) and it
 * takes over automatically; the provider is detected from the URL.
 */

/** FormSubmit's AJAX endpoint. Returns JSON instead of redirecting. */
const FORMSUBMIT_AJAX_HOST = "formsubmit.co";

export type ReviewEndpoint =
  | { kind: "formsubmit"; url: string; email: string }
  | { kind: "appsscript"; url: string }
  | { kind: "json"; url: string }
  | { kind: "none" };

/** The relay used when the owner has not configured an endpoint yet. */
export const DEFAULT_REVIEWS_ENDPOINT = `https://${FORMSUBMIT_AJAX_HOST}/ajax/${SITE.contactEmail}`;

/**
 * Resolve the configured endpoint. `NEXT_PUBLIC_REVIEWS_ENDPOINT` wins when
 * set; otherwise we fall back to the zero-config relay. Set the variable to
 * `"none"` to explicitly disable submission (useful while debugging).
 */
export function reviewEndpoint(): ReviewEndpoint {
  const configured = (process.env.NEXT_PUBLIC_REVIEWS_ENDPOINT ?? "").trim();
  const url = configured || DEFAULT_REVIEWS_ENDPOINT;
  if (!url || url.toLowerCase() === "none") return { kind: "none" };
  if (url.includes(FORMSUBMIT_AJAX_HOST)) {
    return { kind: "formsubmit", url, email: SITE.contactEmail };
  }
  if (url.includes("script.google.com") || url.includes("script.googleusercontent.com")) {
    return { kind: "appsscript", url };
  }
  return { kind: "json", url };
}

/** The fields every provider receives, before provider-specific shaping. */
export type ReviewPayload = {
  key: string;
  rating: number;
  author: string;
  text: string;
  date: string;
};

/**
 * Phrases FormSubmit drops on sight. Cheap bot filtering, and it costs nothing
 * to leave on: a dropped submission never reaches the inbox, and a submission
 * that does reach it still has to survive `npm run reviews:ingest` before it
 * can appear on the site.
 */
const BLACKLIST = [
  "http://",
  "https://",
  "seo services",
  "buy now",
  "casino",
  "viagra",
  "crypto",
  "loan",
  "telegram",
];

/** Build the request for a given provider. Returns null when disabled. */
export function buildReviewRequest(
  endpoint: ReviewEndpoint,
  payload: ReviewPayload,
): { url: string; init: RequestInit } | null {
  if (endpoint.kind === "none") return null;

  if (endpoint.kind === "formsubmit") {
    // FormSubmit reads a normal form body; multipart is the safest shape and
    // avoids any charset ambiguity in the review text.
    const form = new FormData();
    form.set("key", payload.key);
    form.set("rating", String(payload.rating));
    form.set("author", payload.author);
    form.set("text", payload.text);
    form.set("date", payload.date);
    // Underscore-prefixed fields are FormSubmit's own controls.
    form.set("_subject", `MoonPage review — ${payload.key} — ${payload.rating}/5`);
    form.set("_template", "table");
    form.set("_captcha", "false");
    form.set("_blacklist", BLACKLIST.join(", "));
    return { url: endpoint.url, init: { method: "POST", body: form } };
  }

  if (endpoint.kind === "appsscript") {
    return {
      url: endpoint.url,
      init: {
        method: "POST",
        // Apps Script web apps cannot answer a CORS preflight, so we send a
        // "simple" content type that needs none and let the script parse the
        // JSON body itself. Switching this to application/json breaks it.
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
        redirect: "follow",
      },
    };
  }

  return {
    url: endpoint.url,
    init: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    },
  };
}

/**
 * Did the provider actually accept it?
 *
 * This is stricter than `res.ok` on purpose. FormSubmit answers 200 with a
 * body that says `success: "false"` when the inbox has not been activated, and
 * treating that as success would tell a parent their review was received when
 * it was thrown away. When in doubt we return false, and the form offers the
 * mailto fallback so the review still has somewhere to go.
 */
export function responseAccepted(endpoint: ReviewEndpoint, body: string): boolean {
  if (endpoint.kind === "formsubmit" || endpoint.kind === "appsscript") {
    try {
      const parsed = JSON.parse(body) as Record<string, unknown>;
      const ok = parsed.success ?? parsed.ok;
      return ok === true || ok === "true";
    } catch {
      return false;
    }
  }
  // A custom endpoint: 2xx is the contract. An empty body is fine.
  return true;
}
