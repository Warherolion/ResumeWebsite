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
    <section ref={sectionRef} className="mx-auto max-w-6xl px-4 py-24">
      {/* 12-row grid so we can offset vertically */}
     <div className="flex flex-col md:flex-row gap-8 items-center">
    {/* IMAGE — LEFT */}
        <div
            ref={imgRef}
            className="relative w-full md:w-1/2 shrink-0 h-[70vh] min-h-[520px] overflow-hidden rounded-3xl will-change-transform"
        >
            <Image
            src="/Rnvir 1.jpg"
            alt="Profile picture"
            fill
            className="object-cover"
            priority
            />
        </div>

        {/* TEXT — RIGHT */}
        <div
            ref={textRef}
            className="w-full md:w-1/2 rounded-3xl bg-white/90 p-10 shadow-xl backdrop-blur will-change-transform flex flex-col justify-center"
        >
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Hi, I’m Ranvir
            </h1>

            <p className="mt-4 text-lg text-black/70">
            I am an Aerospace Engineering Graduate from Toronto Metropolitan University with a strong interest in 
            mechanical design and analysis, as well as embedded and control systems development.
            </p>

            <p className="mt-4 text-black/70">
            This site documents my most notable projects and my expansive skill set.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
            <Link
                href="/resume"
                className="rounded-lg bg-black px-5 py-2 text-white transition hover:bg-black/80"
            >
                View Resume
            </Link>
            </div>
        </div>
        </div>

    </section>
  );
}
