"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Footer() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjwzqwy";

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send. Please try again.");
      }

      setStatus("sent");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Failed to send. Please try again.");
    }
  }

  return (
    <footer
      id="contact"
      className="relative scroll-mt-28 bg-navy"
    >
      {/* Accent rule along the top edge */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gold" />

      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              03 — Get in touch
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Contact me
            </h3>
            <div className="accent-rule mt-4 bg-gold" />
            <p className="mt-5 text-ice">
             I’m currently seeking new graduate engineering
            opportunities. If you’re a recruiter, engineer, or team looking for
            someone with experience in mechancial design/analysis, control systems, and embedded electronics, I’d love to connect.
            </p>
            <p className="mt-3 text-ice">
            You can reach me using the form here or connect with me on LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/in/ranvir-singh-752566197/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-lg bg-gold px-5 py-2 font-semibold text-navy transition hover:bg-flame"
            >
              Connect on LinkedIn
            </a>
          </div>

          {/* Right: Form */}
          <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-navy/40">
            <form onSubmit={onSubmit} className="space-y-4">
              {/* Honeypot (spam reduction) */}
              <input type="text" name="_gotcha" className="hidden" />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="mt-2 w-full rounded-xl bg-ice/15 px-4 py-2 outline-none ring-1 ring-ocean/15 transition focus:bg-white focus:ring-2 focus:ring-ocean"
                    placeholder="Your name"
                    required
                    maxLength={80}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="mt-2 w-full rounded-xl bg-ice/15 px-4 py-2 outline-none ring-1 ring-ocean/15 transition focus:bg-white focus:ring-2 focus:ring-ocean"
                    placeholder="you@email.com"
                    required
                    maxLength={120}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-2 min-h-[120px] w-full resize-y rounded-xl bg-ice/15 px-4 py-2 outline-none ring-1 ring-ocean/15 transition focus:bg-white focus:ring-2 focus:ring-ocean"
                  placeholder="Message"
                  required
                  maxLength={2000}
                />
              </div>

              {/* Optional: email subject in your inbox */}
              <input type="hidden" name="_subject" value="New message from portfolio site" />

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="rounded-lg bg-ocean px-5 py-2 font-medium text-white shadow-lg shadow-ocean/30 transition hover:bg-navy disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : status === "sent" ? "Sent!" : "Send message"}
                </button>

                {status === "sent" && (
                  <span className="text-sm font-medium text-ocean">
                    Thanks — your message was sent.
                  </span>
                )}

                {status === "error" && (
                  <span className="text-sm text-red-600">{error}</span>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-sm text-ice/70">
          © {new Date().getFullYear()} Ranvir Singh. 
        </div>
      </div>
    </footer>
  );
}
