import Link from "next/link";
import Image from "next/image";

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  year?: string;
  image: string; // path in /public
};

const PROJECTS: Project[] = [
  {
    slug: "metrocketry-active-control",
    title: "MetRocketry — Active Control Rocket",
    subtitle:
      "Canard-based stabilization for high preformance rocket",
    tags: ["Control Systems", "Solidworks", "Ansys", "Matlab", "Simulink"],
    year: "2025–2026",
    image: "/projects/metrocket.jpg",
  },
  {
    slug: "flight-computer-pcb",
    title: "Flight Computer PCB",
    subtitle:
      "4-layer mixed-signal PCB design: power, sensors, connectors, ESD/TVS protection, and routing constraints.",
    tags: ["PCB Design", "KiCad", "STM32", "I2C", "SPI"],
    year: "2025",
    image: "/projects/pcb.jpg",
  },
  {
    slug: "cerberus-constellation",
    title: "AIAA Design Competition — Solar Monitoring Spacecraft",
    subtitle:
      "Concept mission design and subsystem trades for multi-point solar event monitoring + comms.",
    tags: ["Space Systems Design", "STK", "Matlab"],
    year: "2025–2026",
    image: "/projects/cerberus.jpg",
  },

];

export default function ProjectsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Projects
          </h2>
          <p className="mt-3 text-black/70">
            A few of the project I have worked recently.
          </p>
        </div>

        <Link
          href="/projects"
          className="hidden rounded-lg bg-black px-5 py-2 text-white transition hover:bg-black/80 md:inline-block"
        >
          View all
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group overflow-hidden rounded-3xl bg-white/90 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
          >
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
                <h3 className="text-lg font-semibold leading-snug">
                  {p.title}
                </h3>
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
                  Read more
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 md:hidden">
        <Link
          href="/projects"
          className="inline-block rounded-lg bg-black px-5 py-2 text-white transition hover:bg-black/80"
        >
          View all projects
        </Link>
      </div>
    </section>
  );
}
