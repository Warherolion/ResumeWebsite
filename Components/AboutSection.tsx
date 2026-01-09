export default function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Left: Heading + summary */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            About
          </h2>
          <p className="mt-4 text-lg text-black/70">
            I’m Ranvir, an Aerospace Engineering student focused on control
            systems, embedded electronics, and flight software. I like building
            end-to-end systems—simulation → hardware → testing → iteration.
          </p>

          <p className="mt-4 text-black/70">
            Recently I’ve been working on actively controlled model rocketry,
            sensor fusion, and system-level design for space missions. This site
            is where I document projects, write technical notes, and share what
            I learn.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/projects"
              className="rounded-lg bg-black px-5 py-2 text-white transition hover:bg-black/80"
            >
              See Projects
            </a>
            <a
              href="/blog"
              className="rounded-lg bg-white/70 px-5 py-2 transition hover:bg-white"
            >
              Read Blog
            </a>
          </div>
        </div>

        {/* Right: Skills / highlights */}
        <div className="grid gap-4">
          <div className="rounded-3xl bg-white/90 p-6 shadow-sm backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
              What I work on
            </h3>
            <ul className="mt-4 space-y-2 text-black/80">
              <li>• Control systems (PID/LQR, gain scheduling, stability)</li>
              <li>• Embedded systems (STM32, sensors, comms, power)</li>
              <li>• Simulation & analysis (MATLAB/Simulink, basic CFD/FEA)</li>
              <li>• Space systems thinking (budgets, trades, verification)</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white/90 p-6 shadow-sm backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
              Tooling
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "MATLAB/Simulink",
                "C/C++",
                "STM32",
                "KiCad",
                "ANSYS",
                "SolidWorks",
                "Git/GitHub",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-black/5 px-3 py-1 text-sm text-black/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white/90 p-6 shadow-sm backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
              Currently
            </h3>
            <p className="mt-4 text-black/70">
              Building a portfolio of flight hardware + controls work and writing
              clear project breakdowns (goals, design decisions, results, and
              what I’d improve).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
