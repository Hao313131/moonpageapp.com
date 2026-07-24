"use client";

import { useState } from "react";

/**
 * "Notify me when Android launches" — Netlify Forms, zero backend code.
 * Netlify's build step scans the deployed static HTML for a <form
 * data-netlify="true"> with a matching hidden form-name input, so this form
 * must stay server-renderable (it is — only the *submit handling* is client-side).
 * Optional/secondary per the plan — primary CTA is always the App Store button.
 */
export function NotifyForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="text-sm text-ink-muted">
        You&apos;re on the list — we&apos;ll email you the moment Android is ready.
      </p>
    );
  }

  return (
    <form
      name="notify-android"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 sm:flex-row"
    >
      <input type="hidden" name="form-name" value="notify-android" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      <input
        type="email"
        name="email"
        required
        placeholder="you@email.com"
        className="w-full rounded-xl border border-wood/40 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-accent focus:outline-none sm:w-64"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-xl bg-wood px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-wood-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Notify me"}
      </button>
      {status === "error" && (
        <span className="text-sm text-accent-strong">
          Something went wrong — try again?
        </span>
      )}
    </form>
  );
}
