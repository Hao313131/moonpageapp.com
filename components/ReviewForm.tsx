"use client";

import { useState } from "react";

/**
 * First-party review submission form.
 *
 * Posts to `NEXT_PUBLIC_REVIEWS_ENDPOINT` (a serverless function / form
 * endpoint the owner controls). The endpoint is read directly from the build
 * env — Next inlines NEXT_PUBLIC_* into the client bundle — so this component
 * never imports lib/reviews (which would drag the whole review store and the
 * hub-FAQ map into the client JS for no reason).
 *
 * When no endpoint is configured the form is replaced by an honest note plus a
 * mailto link. That is deliberate: a form that silently discards submissions is
 * worse than no form, and we would rather collect reviews by email than pretend
 * to collect them.
 */
export function ReviewForm({
  reviewKey,
  fallbackEmail,
}: {
  reviewKey: string;
  fallbackEmail: string;
}) {
  const endpoint = process.env.NEXT_PUBLIC_REVIEWS_ENDPOINT ?? "";
  const [rating, setRating] = useState(0);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  if (!endpoint) {
    const subject = encodeURIComponent(`MoonPage review — ${reviewKey}`);
    const body = encodeURIComponent(
      "My rating (1-5):\n\nWhat I thought:\n",
    );
    return (
      <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
        Reviews open soon. For now, we would genuinely love to hear how bedtime
        went —{" "}
        <a
          href={`mailto:${fallbackEmail}?subject=${subject}&body=${body}`}
          className="font-medium text-link underline hover:text-link-hover"
        >
          email us your review
        </a>
        .
      </p>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rating < 1 || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: reviewKey,
          rating,
          author: author.trim() || "A parent",
          text: text.trim(),
          date: new Date().toISOString().slice(0, 10),
        }),
      });
      setStatus(res.ok ? "sent" : "error");
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

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={rating < 1 || status === "sending"}
          className="rounded-full bg-accent-strong px-5 py-2 text-sm font-semibold text-cream transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
        >
          {status === "sending" ? "Sending…" : "Submit review"}
        </button>
        {status === "error" && (
          <span className="text-sm text-accent-strong" role="alert">
            Something went wrong — please try again.
          </span>
        )}
      </div>
    </form>
  );
}
