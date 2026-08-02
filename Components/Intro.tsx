"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;

    const tick = () => {
      const section = sectionRef.current;
      const img = imgRef.current;
      const text = textRef.current;
      if (!section || !img || !text) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      const centerY = rect.top + rect.height / 2;
      const progress = clamp((centerY - vh / 2) / (vh / 2), -1, 1);

      const imgY = progress * -24;
      const textY = progress * -16;

      img.style.transform = `translate3d(0, ${imgY}px, 0)`;
      text.style.transform = `translate3d(0, ${textY}px, 0)`;

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section ref={sectionRef} className="bg-ice/25">
     <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-24 md:flex-row">
    {/* IMAGE — LEFT */}
        <div
            ref={imgRef}
            className="relative w-full md:w-1/2 shrink-0 will-change-transform"
        >
            {/* Soft accent glow behind the portrait */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-ocean/40 blur-2xl" />

            <div className="relative h-[70vh] min-h-[520px] overflow-hidden rounded-3xl shadow-2xl shadow-navy/25 ring-1 ring-white/60">
            <Image
            src="/Rnvir 1.jpg"
            alt="Profile picture"
            fill
            className="object-cover"
            priority
            />
            </div>
        </div>

        {/* TEXT — RIGHT */}
        <div
            ref={textRef}
            className="w-full md:w-1/2 rounded-3xl bg-white p-10 shadow-xl shadow-navy/15 will-change-transform flex flex-col justify-center"
        >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy/70 ring-1 ring-navy/10">
              <span className="h-2 w-2 shrink-0 rounded-full bg-flame" />
              Open to new grad roles
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
            Hi, I’m Ranvir
            </h1>

            <div className="accent-rule mt-4 bg-ocean" />

            <p className="mt-5 text-lg text-navy/70">
            I am an Aerospace Engineering Graduate from Toronto Metropolitan University with a strong interest in
            mechanical design and analysis, as well as embedded and control systems development.
            </p>

            <p className="mt-4 text-navy/70">
            This site documents my most notable projects and my expansive skill set.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
            <Link
                href="/resume"
                className="rounded-lg bg-ocean px-5 py-2 font-medium text-white shadow-lg shadow-ocean/30 transition hover:bg-navy hover:shadow-navy/30"
            >
                View Resume
            </Link>
            <a
                href="#contact"
                className="rounded-lg border border-ocean/40 bg-white/70 px-5 py-2 font-medium text-ocean transition hover:border-ocean hover:bg-ice/25"
            >
                Get in touch
            </a>
            </div>
        </div>
        </div>

    </section>
  );
}
