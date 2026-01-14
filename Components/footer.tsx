"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Footer() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojjqeyn";

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
    <footer className="mt-24 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Contact me</h3>
            <p className="mt-3 text-black/70">
             I’m currently seeking new graduate engineering
            opportunities. If you’re a recruiter, engineer, or team looking for
            someone with experience in mechancial design/analysis, control systems, and embedded electronics, I’d love to connect.
            </p>
            <p className="mt-3 text-black/70">
            You can reach me using the form here or connect with me on LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/in/ranvir-singh-752566197/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-lg bg-black px-5 py-2 text-white transition hover:bg-black/80"
            >
              Connect on LinkedIn
            </a>
          </div>

          {/* Right: Form */}
          <div className="rounded-3xl bg-white/90 p-6 shadow-sm">
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
                    className="mt-2 w-full rounded-xl bg-black/5 px-4 py-2 outline-none focus:bg-black/10"
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
                    className="mt-2 w-full rounded-xl bg-black/5 px-4 py-2 outline-none focus:bg-black/10"
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
                  className="mt-2 min-h-[120px] w-full resize-y rounded-xl bg-black/5 px-4 py-2 outline-none focus:bg-black/10"
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
                  className="rounded-lg bg-black px-5 py-2 text-white transition hover:bg-black/80 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : status === "sent" ? "Sent!" : "Send message"}
                </button>

                {status === "sent" && (
                  <span className="text-sm text-black/70">
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

        <div className="mt-12 text-sm text-black/50">
          © {new Date().getFullYear()} Ranvir Singh. 
        </div>
      </div>
    </footer>
  );
}
