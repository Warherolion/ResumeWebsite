import Image from "next/image";
import Link from "next/link";

const TAGS = [
  "Control Systems",
  "STM32",
  "MATLAB/Simulink",
  "SolidWorks",
  "ANSYS",
  "Sensor Fusion",
  "Testing",
];

const LINKS = [
  // Add/remove as needed
  { label: "GitHub", href: "https://github.com/..." },
  { label: "Design Doc (PDF)", href: "/docs/metrocketry.pdf" },
  { label: "Video", href: "https://youtube.com/..." },
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
          <p className="text-sm font-medium text-black/60">2025–2026 • MetRocketry</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Active Control Rocket (Canard Stabilization)
          </h1>
          <p className="mt-4 text-lg text-black/70">
            A canard based roll control system for a high preformance supersonic rocket
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
                <dd className="text-black/80">Control Systems Lead</dd>
              </div>

              <div className="flex items-start justify-between gap-6">
                <dt className="text-black/60">Goal</dt>
                <dd className="text-black/80">
                  Stabalize rockets roll with the use of canards.
                </dd>
              </div>

              <div className="flex items-start justify-between gap-6">
                <dt className="text-black/60">Stack</dt>
                <dd className="text-black/80">
                  Matlab/Simulink, Solidworks, Ansys
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
          {/* Put an image at public/projects/metrocket-hero.jpg */}
          <Image
            src="/projects/metrocket-hero.jpg"
            alt="Active control rocket hero image"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="mt-3 text-sm text-black/50">
          Figure 1 — Placeholder for a hero photo (rocket render, avionics bay, or flight test).
        </p>
      </section>

      {/* Body */}
      <section className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Main write-up */}
        <article className="lg:col-span-8 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
            <p className="mt-3 text-black/70">
              {/* Write-up goes here */}
              The goal of this project is to develop a canard based control system that will be mounted towards the top of the rocket, this is done with the user 
              of an active control system. The control system uses a gain scheduled non linear controller along with kalman filtering for state estimation. 
              A 6DoF model of the rockets flight was also developed for testing and tuning of the control system.
              The control system and model were designed in Matlab and Simulink. The Canard bay itself was designed in solidworks. Additionally an intensive CFD simulation campaign was preformed in Ansys Fluent
              as part of the control system to corelate side force to deflection.
            </p>
          </section>

          {/* <section>
            <h2 className="text-2xl font-semibold tracking-tight">Requirements</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-black/70">
              <li>0 Deg/Sec roll rate</li>
              <li>Low</li>
              <li>Sensor noise</li>
              <li>Safety + fail-safe behavior</li>
            </ul>
          </section> */}

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">System architecture</h2>
            <p className="mt-3 text-black/70">
              Describe major subsystems (airframe, canards, avionics, sensors, power, software).
              Include a diagram image below.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h3 className="font-semibold">Control loop</h3>
                <p className="mt-2 text-sm text-black/70">
                  Estimator → controller → actuator mixing → canards/servos.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h3 className="font-semibold">Avionics</h3>
                <p className="mt-2 text-sm text-black/70">
                  MCU, IMU, GPS (optional), logging, power regulation, connectors.
                </p>
              </div>
            </div>

            {/* Diagram placeholder */}
            <div className="mt-6 relative h-[280px] w-full overflow-hidden rounded-3xl bg-black/5">
              <Image
                src="/projects/metrocket-arch.jpg"
                alt="System architecture diagram"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-black/50">
              Figure 2 — Placeholder for system diagram (block diagram, wiring, or software architecture).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Design & implementation</h2>
            <p className="mt-3 text-black/70">
              Detail the hard parts: modeling assumptions, control law choice, tuning,
              gain scheduling, filtering, and embedded implementation details.
            </p>

            <div className="mt-6 rounded-3xl bg-white/90 p-6 shadow-sm">
              <h3 className="font-semibold">What I did</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-black/70">
                <li>Built a 6-DoF (or 2/3-DoF) sim model and validated against expected flight regimes</li>
                <li>Designed controller (PID/LQR/whatever) + actuator mixing for canards</li>
                <li>Implemented on STM32 with timing budget + logging</li>
                <li>Bench-tested sensors and actuators for latency and noise</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Results</h2>
            <p className="mt-3 text-black/70">
              Add plots, key metrics, and test outcomes. Mention what improved and what didn’t.
            </p>

            {/* Results images */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="relative h-[240px] overflow-hidden rounded-3xl bg-black/5">
                <Image
                  src="/projects/metrocket-result1.jpg"
                  alt="Result plot or test photo 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[240px] overflow-hidden rounded-3xl bg-black/5">
                <Image
                  src="/projects/metrocket-result2.jpg"
                  alt="Result plot or test photo 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-3 text-sm text-black/50">
              Figures 3–4 — Placeholder for plots (angle error, rate response) or test rig photos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Lessons learned</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-black/70">
              <li>What surprised you (sensor noise, servo deadband, structural flex, etc.)</li>
              <li>What you would do differently next time</li>
              <li>Biggest risk reduction steps you took</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Next steps</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-black/70">
              <li>Add improved estimator (e.g., EKF) and characterize sensor biases</li>
              <li>More ground tests + HIL testing</li>
              <li>Flight validation and post-flight analysis pipeline</li>
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
              <li>• Control design & stability analysis</li>
              <li>• Embedded integration & sensor bring-up</li>
              <li>• Verification plan + test iteration</li>
              <li>• Clear documentation & trade-offs</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white/90 p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
              Photo gallery
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                "/projects/metrocket-g1.jpg",
                "/projects/metrocket-g2.jpg",
                "/projects/metrocket-g3.jpg",
                "/projects/metrocket-g4.jpg",
              ].map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-2xl bg-black/5">
                  <Image src={src} alt="Gallery image" fill className="object-cover" />
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs text-black/50">
              Replace these with test photos, CAD renders, PCB shots, and plots.
            </p>
          </div>
        </aside>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 rounded-3xl bg-white/90 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">Want the details?</h2>
        <p className="mt-3 text-black/70">
          If you’d like to see the full report, simulation model, or test data, feel free to reach out
          via the contact form below.
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
