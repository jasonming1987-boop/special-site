"use client";

import { useState } from "react";
import type { SubscriberStream } from "@/lib/types";

export function SignupForm({
  stream,
  theme,
  copy,
}: {
  stream: SubscriberStream;
  theme: "site-a" | "site-b";
  copy: { placeholder: string; button: string; consent: string };
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, stream }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p
        className={
          theme === "site-a"
            ? "text-sm text-site-a-fg"
            : "text-sm text-site-b-fg"
        }
      >
        Check your inbox to confirm — double opt-in keeps this list defensible under the
        Australian Spam Act (and keeps sending providers happy).
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={copy.placeholder}
          className={
            theme === "site-a"
              ? "flex-1 rounded-lg border border-black/10 bg-white px-4 py-2 text-sm text-site-a-fg outline-none focus:border-site-a-accent"
              : "flex-1 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-site-b-fg outline-none focus:border-site-b-accent"
          }
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={
            theme === "site-a"
              ? "rounded-lg bg-site-a-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
              : "rounded-lg bg-site-b-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
          }
        >
          {status === "loading" ? "..." : copy.button}
        </button>
      </div>
      <p className={theme === "site-a" ? "text-xs text-neutral-400" : "text-xs text-white/40"}>
        {copy.consent}
      </p>
      {status === "error" && (
        <p className="text-xs text-red-500">Something went wrong — try again.</p>
      )}
    </form>
  );
}
