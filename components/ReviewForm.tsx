"use client";

import { useState } from "react";
import {
  buildReviewRequest,
  responseAccepted,
  reviewEndpoint,
} from "@/lib/reviewEndpoint";

/**
 * First-party review submission form.
 *
 * The endpoint resolution (which provider, what payload shape, whether the
 * response counts as accepted) lives in lib/reviewEndpoint.ts — this component
 * stays about the UI and the state machine.
 *
 * Two rules drive the design:
 *
 * 1. A review must never be silently lost. Every failure path — no endpoint,
 *    network error, a provider that answers 200 but rejects the submission —
 *    ends with the parent being offered the mailto fallback, pre-filled with
 *    what they already typed. Losing a parent's kind words is worse than
 *    asking them to send an email.
 *
 * 2. Nothing here claims more than it knows. We only say "thank you, it's in"
 *    when the provider's response actually says so.
 */
export function ReviewForm({
  reviewKey,
  fallbackEmail,
}: {
  reviewKey: string;
  fallbackEmail: string;
}) {
  const endpoint = reviewEndpoint();
  const [rating, setRating] = useState(0);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  /** Pre-filled mailto, used both as the primary path (no endpoint) and as the
   * recovery path (endpoint failed). Carries whatever the parent already typed
   * so switching to email costs them nothing. */
  const mailtoHref = (() => {
    const subject = encodeURIComponent(
      `MoonPage review — ${reviewKey}${rating ? ` — ${rating}/5` : ""}`,
    );
    const body = encodeURIComponent(
      [
        `My rating (1-5): ${rating || ""}`,
        `My name: ${author || ""}`,
        "",
        "What I thought:",
        text || "",
      ].join("\n"),
    );
    return `mailto:${fallbackEmail}?subject=${subject}&body=${body}`;
  })();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rating < 1 || status === "sending") return;

    // Honeypot: a real parent never sees this field, let alone fills it.
    if (honeypot) {
      setStatus("sent");
      return;
    }

    const request = buildReviewRequest(endpoint, {
      key: reviewKey,
      rating,
      author: author.trim() || "A parent",
      text: text.trim(),
      date: new Date().toISOString().slice(0, 10),
    });
    if (!request) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(request.url, request.init);
      const body = await res.text();
      const accepted = res.ok && responseAccepted(endpoint, body);
      setStatus(accepted ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="text-sm font-medium text-ink sm:text-base" role="status">
        Thank you — your review is in. We read every one.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Honeypot. Hidden from sight and from screen readers, and kept out of
          the tab order so it can never trap a keyboard user. */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
        <label htmlFor="review-website">Leave this field empty</label>
        <input
          id="review-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-ink sm:text-base">
          Your rating
        </span>
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRating(n)}
              aria-label={`${n} star${n > 1 ? "s" : ""}`}
              aria-pressed={rating === n}
              className={`text-2xl leading-none transition-colors ${
                n <= rating ? "text-gold" : "text-wood/40 hover:text-gold/70"
              }`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="review-author"
          className="block text-sm font-semibold text-ink sm:text-base"
        >
          Name <span className="font-normal text-ink-muted">(optional)</span>
        </label>
        <input
          id="review-author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          maxLength={40}
          placeholder="A parent"
          className="mt-1 w-full max-w-xs rounded-lg border border-wood/30 bg-cream px-3 py-2 text-sm text-ink outline-none focus:border-accent sm:text-base"
        />
      </div>

      <div>
        <label
          htmlFor="review-text"
          className="block text-sm font-semibold text-ink sm:text-base"
        >
          What did you think?
        </label>
        <textarea
          id="review-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          rows={3}
          maxLength={600}
          className="mt-1 w-full rounded-lg border border-wood/30 bg-cream px-3 py-2 text-sm text-ink outline-none focus:border-accent sm:text-base"
        />
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <button
          type="submit"
          disabled={rating < 1 || status === "sending"}
          className="rounded-full bg-accent-strong px-5 py-2 text-sm font-semibold text-cream transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
        >
          {status === "sending" ? "Sending…" : "Submit review"}
        </button>
        {status === "error" && (
          <span className="text-sm text-ink-muted sm:text-base" role="alert">
            That didn&rsquo;t go through.{" "}
            <a
              href={mailtoHref}
              className="font-medium text-link underline hover:text-link-hover"
            >
              Send it by email instead
            </a>{" "}
            — we&rsquo;ll add it for you.
          </span>
        )}
      </div>
    </form>
  );
}
