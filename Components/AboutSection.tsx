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
              My passion for space and spacecraft began in childhood, sparked by a fascination with rockets, satellites, 
              and the idea of humanity exploring beyond Earth, and it has steadily grown into a lifelong pursuit. Over the years, 
              that curiosity evolved into a commitment to engineering, where I have developed a hands-on, detail-oriented 
              approach to solving complex technical problems. I enjoy tackling challenges that require both creativity with analytical 
              thinking, and I am particularly motivated by projects that bring together mechanical design, controls, and embedded 
              systems into a single working solution.
              <br></br>
              My core experience is working as the Control Systems Lead for MetRocketry which has been a defining experience 
              in my development, allowing me to work closely with multidisciplinary teams while contributing to the design and implementation of real flight hardware. 
              The role has strengthened my technical abilities while also teaching me leadership, collaboration, and the importance 
              of clear communication and system-level thinking under real project constraints. Through these experiences, I continue 
              to grow as an engineer who is driven, adaptable, and passionate about contributing to the future of aerospace and space technology.
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
              <li>• Embedded systems (STM32, Circut design, Programming)</li>
              <li>• Simulation & analysis (MATLAB/Simulink, basic CFD/FEA)</li>
              <li>• Mechanical Design (DFM/DFA, GD&T, CAD)</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white/90 p-6 shadow-sm backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
              Software skills
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "MATLAB/Simulink",
                "C/C++",
                "Solidworks",
                "KiCad",
                "ANSYS Fluent",
                "Ansys Mechanical",
                "Ansys LSDYNA",
                "Altium",
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
              Developing the flight computer for the canard control bay for MetRocketry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
