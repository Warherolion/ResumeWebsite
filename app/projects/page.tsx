import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Projects
          </h1>
          <p className="mt-2 text-black/70">
            All projects and case studies. Click a card to read more.
          </p>
        </div>

      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group overflow-hidden rounded-3xl bg-white/90 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
          >
            {/* Thumbnail */}
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-semibold leading-snug">{p.title}</h2>
                {p.year && (
                  <span className="shrink-0 rounded-full bg-black/5 px-3 py-1 text-xs text-black/70">
                    {p.year}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm text-black/70">{p.subtitle}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 text-sm font-medium text-black/80">
                <span className="inline-block transition group-hover:translate-x-0.5">
                  Read case study →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
