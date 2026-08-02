import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/lib/projects";

export default function ProjectsSection() {
  return (
    <section className="bg-ice/25">
      <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-flame">
            02 — Selected work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Projects
          </h2>
          <div className="accent-rule mt-4 bg-flame" />
          <p className="mt-4 text-navy/70">
            A few of the projects I have worked on recently.
          </p>
        </div>

        <Link
          href="/projects"
          className="hidden rounded-lg bg-ocean px-5 py-2 font-medium text-white shadow-lg shadow-ocean/30 transition hover:bg-navy hover:shadow-navy/30 md:inline-block"
        >
          View all
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.slice(0, 3).map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group relative overflow-hidden rounded-3xl bg-white shadow-sm shadow-navy/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/25"
          >
            {/* Accent bar that fills in on hover */}
            <span className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-ocean transition-transform duration-300 group-hover:scale-x-100" />

            {/* Image area */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                {p.year && (
                  <span className="shrink-0 rounded-full bg-gold/15 px-3 py-1 text-xs text-navy/70 ring-1 ring-gold/40">
                    {p.year}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm text-navy/70">{p.subtitle}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-ocean/10 px-3 py-1 text-xs text-navy/70 ring-1 ring-ocean/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 text-sm font-medium text-navy/80">
                <span className="inline-block transition group-hover:translate-x-1">
                  Read more →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 md:hidden">
        <Link
          href="/projects"
          className="inline-block rounded-lg bg-ocean px-5 py-2 font-medium text-white shadow-lg shadow-ocean/30 transition hover:bg-navy"
        >
          View all projects
        </Link>
      </div>
      </div>
    </section>
  );
}
