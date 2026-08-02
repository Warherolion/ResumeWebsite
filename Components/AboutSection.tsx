import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-20 md:grid-cols-[3fr_2fr]">
        {/* Left: Heading + summary */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ocean">
            01 — Who I am
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            About
          </h2>
          <div className="accent-rule mt-4 bg-ocean" />
          <p className="mt-5 text-base text-navy/70 text-justify">
              {/*Growing up, I was the kid who took apart every broken remote, clock, and appliance I could get my hands on —
              not always getting them back together, but always learning something in the process. That same curiosity about
              how things work eventually pointed itself at rockets and spacecraft, and it never really let go.
              <br></br>
              Since then, that curiosity has grown into something more deliberate. I gravitate toward problems that sit at the
              intersection of mechanical design, controls, and embedded systems — the kind where everything has to work together
              or nothing works at all. I like the messiness of real hardware and the satisfaction of seeing a system actually
              perform the way you designed it to.
              <br></br>
              Most of that has come to life through MetRocketry, where I lead the control systems development for our active
              control rocket. It has meant long nights debugging firmware, working through system-level trade-offs with a
              team, and learning how to communicate clearly when the stakes are real. It is the kind of work I find genuinely
              exciting, and it is pushing me toward a career in aerospace — specifically in GNC, flight software, and
              spacecraft systems.*/}

              I've always had an engineering instinct as a kid I took apart old electronics and household items, 
              not always reassembling them perfectly but always learning something. That curiosity grew into a fascination
              with nuclear, aviation, and space, the last one especially: the idea of humanity reaching beyond Earth has never stopped compelling me.
              I pursued aerospace engineering to turn that curiosity into practical skill, starting in mechanical design and analysis (FEA, CFD) 
              before moving into control systems system modeling, state estimation, and controller design and more recently embedded systems, 
              including PCB design and STM32/Arduino programming. Those threads came together at MetRocketry, our student high-performance rocketry 
              team, where I led control systems for a canard-based active steering system. The work spanned flight computer PCB design, embedded firmware, 
              mechanical simulation, and modeling for both estimation and control and taught me as much about leadership, communication, and system-level 
              thinking under real constraints as it did about engineering.
          


              
          </p>


          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-ocean px-5 py-2 font-medium text-white shadow-lg shadow-ocean/30 transition hover:bg-navy hover:shadow-navy/30"
            >
              See Projects
            </Link>
            <Link
              href="/blog"
              className="rounded-lg border border-ocean/40 bg-white/70 px-5 py-2 font-medium text-ocean transition hover:border-ocean hover:bg-ice/25"
            >
              Read Blog
            </Link>
          </div>
        </div>

        {/* Right: Skills */}
        <div className="grid grid-cols-2 gap-4 content-start">
          <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-ice/15 p-5 transition hover:border-navy/20 hover:bg-ice/25">
            <span className="absolute inset-x-0 top-0 h-1 bg-flame" />
            <h3 className="text-sm font-semibold uppercase tracking-wide text-navy/60">
              Hardware
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "PCB Design",
                "Soldering",
                "FDM 3D printing",
                "GD&T",
                "DFM / DFA",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white px-3 py-1 text-sm text-navy/80 ring-1 ring-flame/40"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-ice/15 p-5 transition hover:border-navy/20 hover:bg-ice/25">
            <span className="absolute inset-x-0 top-0 h-1 bg-ocean" />
            <h3 className="text-sm font-semibold uppercase tracking-wide text-navy/60">
              Software
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "MATLAB",
                "Simulink",
                "Python",
                "C/C++",
                "SolidWorks",
                "ANSYS Mechanical",
                "ANSYS LS-DYNA",
                "ANSYS Fluent",
                "STK",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white px-3 py-1 text-sm text-navy/80 ring-1 ring-ocean/40"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative col-span-2 overflow-hidden rounded-3xl border border-navy/10 bg-ice/15 p-4 transition hover:border-navy/20 hover:bg-ice/25">
            <span className="absolute inset-x-0 top-0 h-1 bg-navy" />
            <h3 className="text-xs font-semibold uppercase tracking-wide text-navy/60">
              Areas of Interest
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Mechanical design",
                "Fluid Simulations (CFD)",
                "Structural Analysis (FEA)",
                "Active Control Systems",
                "System modeling",
                "Embedded Systems",
                "Satellite Design & Orbital mechanics",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white px-3 py-1 text-sm text-navy/80 ring-1 ring-navy/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative col-span-2 overflow-hidden rounded-3xl border border-navy/10 bg-ice/15 p-4 transition hover:border-navy/20 hover:bg-ice/25">
            <span className="absolute inset-x-0 top-0 h-1 bg-gold" />
            <h3 className="text-xs font-semibold uppercase tracking-wide text-navy/60">
              Certifications
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-navy/70">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>
                  HAM Radio License · Basic with Honours —{" "}
                  <span className="font-semibold text-navy/80">VA3RZE</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
