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
 * Phrases FormSubmit uses when it *refused* a submission while still answering
 * 200. Measured live: `{"success":"false","message":"This form needs
 * Activation..."}`. Kept as a fallback for responses that carry no decisive
 * `success` flag.
 */
const REJECTION_HINTS = [
  "needs activation",
  "not formatted correctly",
  "not a valid",
  "captcha",
  "blacklist",
  "blocked",
  "too many requests",
  "rate limit",
];

/** Normalise the many ways a relay can say yes or no. `null` = no opinion. */
function verdict(value: unknown): boolean | null {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  if (typeof value === "string") {
    const v = value.trim().toLowerCase();
    if (["true", "1", "yes", "ok", "success", "accepted"].includes(v)) return true;
    if (["false", "0", "no", "error", "fail", "failed", "rejected"].includes(v)) {
      return false;
    }
  }
  return null;
}

/**
 * Did the provider actually accept it?
 *
 * Stricter than `res.ok` on purpose. FormSubmit answers 200 with
 * `success: "false"` when the inbox has not been activated, and treating that
 * as success would tell a parent their review was received when it was thrown
 * away.
 *
 * But also deliberately *looser* than an exact match on `"true"`. We have only
 * ever measured the refusal shape live — the acceptance shape is documented
 * but cannot be triggered without an activated inbox. If it turns out to be
 * `true` (boolean) rather than `"true"` (string), an exact-match check would
 * make every real submission show a permanent error, which is the worst
 * possible failure for a form whose whole job is to not lose reviews. So we
 * accept any reasonable encoding of "yes", and when a response carries no
 * decisive flag we fall back to the refusal phrases we have actually seen.
 *
 * The mailto fallback still catches everything this returns false for.
 */
export function responseAccepted(endpoint: ReviewEndpoint, body: string): boolean {
  // Submission is switched off; `buildReviewRequest` returns null for this
  // kind, so reaching here means something called us out of order.
  if (endpoint.kind === "none") return false;

  // A custom endpoint's contract is the HTTP status, which the caller already
  // checked. Nothing to parse.
  if (endpoint.kind === "json") return true;

  const raw = body.trim();
  if (!raw) return false;

  let parsed: unknown = null;
  try {
    parsed = JSON.parse(raw);
  } catch {
    parsed = null;
  }

  if (parsed !== null && typeof parsed === "object" && !Array.isArray(parsed)) {
    const record = parsed as Record<string, unknown>;
    // `success` is FormSubmit's field; `ok`/`status` cover other relays and any
    // Apps Script deployment we get pointed at later.
    for (const flag of [record.success, record.ok, record.status]) {
      const v = verdict(flag);
      if (v !== null) return v;
    }
  }

  // No decisive flag, or not JSON at all: trust the 2xx unless the body spells
  // out a refusal we recognise.
  const lower = raw.toLowerCase();
  return !REJECTION_HINTS.some((hint) => lower.includes(hint));
}
