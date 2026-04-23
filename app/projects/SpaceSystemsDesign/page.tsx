import Image from "next/image";
import Link from "next/link";

const TAGS = [
  "Space Systems",
  "Mission Design",
  "GNC",
  "Orbital Mechanics",
  "Systems Engineering",
  "Trade Studies",
];

const LINKS: { label: string; href: string }[] = [
  // { label: "Report (PDF)", href: "/docs/capstone-servicer.pdf" },
];

export default function ProjectDeepDive() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* Top nav */}
      <div className="flex items-center justify-between gap-4">
        <Link href="/projects" className="text-sm text-black/70 hover:text-black">
          ← Back to Projects
        </Link>

        <div className="flex flex-wrap gap-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-lg bg-black px-4 py-2 text-sm text-white transition hover:bg-black/80"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-sm font-medium text-black/60">2025 • Capstone Project</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            On-Orbit Spacecraft Servicer
          </h1>
          <p className="mt-4 text-lg text-black/70">
            Capstone design of an autonomous vehicle capable of rendezvous, proximity operations,
            and docking with defunt spacecraft to replace its attitude control module.
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <span
                key={t}
                className="rounded-full bg-black/5 px-3 py-1 text-sm text-black/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Quick facts */}
        <aside className="lg:col-span-5">
          <div className="rounded-3xl bg-white/90 p-6 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-black/60">
              Quick facts
            </h2>

            <dl className="mt-4 grid grid-cols-1 gap-4 text-sm">
              <div className="flex items-start justify-between gap-6">
                <dt className="text-black/60">Role</dt>
                <dd className="text-black/80">AOCS and Communications</dd>
              </div>

              <div className="flex items-start justify-between gap-6">
                <dt className="text-black/60">Goal</dt>
                <dd className="text-black/80">
                  Develop an accurate closed loop 3 Axis reaction wheel based Control system
                </dd>
              </div>

              <div className="flex items-start justify-between gap-6">
                <dt className="text-black/60">Tools</dt>
                <dd className="text-black/80">
                  MATLAB, Simulink
                </dd>
              </div>

              <div className="flex items-start justify-between gap-6">
                <dt className="text-black/60">Status</dt>
                <dd className="text-black/80">In progress</dd>
              </div>
            </dl>
          </div>
        </aside>
      </header>

      {/* Hero image */}
      <section className="mt-12">
        <div className="relative h-[360px] w-full overflow-hidden rounded-3xl bg-black/5 md:h-[460px]">
          <Image
            src="/projects/cerberus.jpg"
            alt="On-orbit spacecraft servicer concept"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="mt-3 text-sm text-black/50">
          Figure 1 — Servicer concept render / mission diagram placeholder.
        </p>
      </section>

      {/* Body */}
      <section className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Main write-up */}
        <article className="lg:col-span-8 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
            <p className="mt-3 text-black/70">
              This capstone project involves the full conceptual design of an autonomous on-orbit
              servicing spacecraft targeting a geostationary client satellite. The servicer must
              perform rendezvous and proximity operations, in order to dock with a defunct spacecraft and provide a new
              attitude control module. My role as part of the group was to develop a closed loop attitude control system for our spacecraft.
              This includes modeling of the spacecraft and reaction wheel dynamics along with modeling of the sensors and disturbancse 
              and development of quaternion based control law. This was conducted in Simulink with the aid of Matlab. 
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Design requirements</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-black/70">
              <li>Accurately model spacecraft and reaction wheel dynamics</li>
              <li>Develop disturbance model, inculding gravity gradient, solar radiation presure, etc</li>
              <li>Develop accuratly biased sensor model for spacecraft sensors</li>
              <li>Impliment extended Kalman filter algorithem for sensor fusion and state estimation</li>
              <li>Impliment control law</li>
              <li>Finalize closed loop system model and control system</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Model overview</h2>
            <p className="mt-3 text-black/70">
              Here explain what the model does 
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h3 className="font-semibold">Sensor model</h3>
                <p className="mt-2 text-sm text-black/70">
         
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h3 className="font-semibold">Disturbances</h3>
                <p className="mt-2 text-sm text-black/70">
               
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h3 className="font-semibold">Dynamics</h3>
                <p className="mt-2 text-sm text-black/70">
                
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h3 className="font-semibold">Control law</h3>
                <p className="mt-2 text-sm text-black/70">
              
                </p>
              </div>
            </div>

            <div className="mt-6 relative h-[280px] w-full overflow-hidden rounded-3xl bg-black/5">
              <Image
                src="/projects/cerberus.jpg"
                alt="System architecture diagram"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-black/50">
              Figure 2 — Placeholder for system block diagram or ConOps illustration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Design & trade studies</h2>
            <p className="mt-3 text-black/70">
              Key design decisions were made through structured trade studies using a weighted
              scoring matrix covering mass, cost, complexity, and heritage.
            </p>

            <div className="mt-6 rounded-3xl bg-white/90 p-6 shadow-sm">
              <h3 className="font-semibold">Key trades</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-black/70">
                <li>Bipropellant vs. electric propulsion for main ΔV — selected bipropellant for mission timeline constraints</li>
                <li>Active vs. passive thermal control — passive radiators selected for simplicity</li>
                <li>Robotic arm vs. probe-and-drogue docking — probe-and-drogue selected for lower mass and complexity</li>
                <li>Star tracker vs. sun sensor attitude determination — star tracker for GEO lighting conditions</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">GNC architecture</h2>
            <p className="mt-3 text-black/70">
              The guidance, navigation, and control architecture is divided into three phases:
              far-field rendezvous, proximity operations, and docking. Each phase uses a different
              sensor and actuator configuration.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-black/70">
              <li>Far-field: GPS + star tracker, impulsive maneuver planning via Clohessy-Wiltshire equations</li>
              <li>Proximity (&lt; 1 km): LiDAR ranging + monocular camera, continuous thrust RCS control</li>
              <li>Final approach (&lt; 10 m): stereo vision pose estimation, force-torque feedback on capture</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Lessons learned</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-black/70">
              <li>GEO rendezvous ΔV budgets are highly sensitive to phasing orbit assumptions</li>
              <li>Non-cooperative docking adds significant complexity to the GNC sensor suite</li>
              <li>Mass budget margin must be held at &gt; 20% early in the design cycle for servicer missions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Next steps</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-black/70">
              <li>Detailed structural and thermal analysis of the servicer bus</li>
              <li>High-fidelity simulation of the RPO corridor in MATLAB/GMAT</li>
              <li>Prototype capture mechanism testing and contact dynamics modelling</li>
            </ul>
          </section>
        </article>

        {/* Right sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl bg-white/90 p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
              Skills demonstrated
            </h3>
            <ul className="mt-4 space-y-2 text-black/70">
              <li>• Orbital mechanics & maneuver planning</li>
              <li>• Systems engineering & trade studies</li>
              <li>• GNC architecture design</li>
              <li>• Mass & power budget analysis</li>
              <li>• Technical report writing</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white/90 p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
              Photo gallery
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                "/projects/cerberus.jpg",
                "/projects/cerberus.jpg",
                "/projects/cerberus.jpg",
                "/projects/cerberus.jpg",
              ].map((src, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-2xl bg-black/5">
                  <Image src={src} alt="Gallery image" fill className="object-cover" />
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs text-black/50">
              Replace with concept renders, trade study charts, and simulation plots.
            </p>
          </div>
        </aside>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 rounded-3xl bg-white/90 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">Want the details?</h2>
        <p className="mt-3 text-black/70">
          If you'd like to see the full capstone report, trade study matrices, or simulation
          results, feel free to reach out.
        </p>
        <div className="mt-6">
          <a
            href="#contact"
            className="rounded-lg bg-black px-5 py-2 text-white transition hover:bg-black/80"
          >
            Contact me
          </a>
        </div>
      </section>
    </main>
  );
}
