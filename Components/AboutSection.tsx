import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[3fr_2fr]">
        {/* Left: Heading + summary */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            About
          </h2>
          <p className="mt-4 text-base text-black/70 text-justify">
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

              I have always had a deep engineering spirit, growing up I used to tinker, dissassemble and reassemble old electronics 
              and household items, not always putting them perfectly back together but always learnging something in the process. That curiosity 
              also expanded towards an interest in many different engineering industries like Nucular, aviation and space exploration. 
              Space exploration having always been a peticualrly special interest as I've always adored the idea of humanity leaving the 
              bounds of earth to reach the stars. This passion ultimatly culminated in me persuing a degree in Aerospace engineering where I learned 
              how to transform that curiosity into practical engineering skills intially focussing on mechanical design and analysis (FEA, CFD) before
              expanding my work into control systems focusing on system modeling, state estimation and controller design. Recently I have also
              developed my skills in embeded systems working on PCB design, microcontroller programming (STM32 & Arduinos).
              <br></br>
              All these newly developed skills coalessed duing my time at MetRocketery our studetnet run high preformance rocketry team, where I was the
              control systems lead. here I worked on the development of a canard based active control system for the purpose of steering our rocket with the canards.
              This involved flight computer PCB design, embeded programming, Mechanical simulations, and design along with extensive modeling for both state estimation 
              and controller design.The role has strengthened my technical abilities while also teaching me leadership, collaboration, and the 
              importance of clear communication and system-level thinking under real project constraints. Through these experiences, 
              I continue to grow as an engineer who is driven, adaptable, and passionate about contributing to the future of aerospace and space technology.
          


              
          </p>


          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-black px-5 py-2 text-white transition hover:bg-black/80"
            >
              See Projects
            </Link>
            <Link
              href="/blog"
              className="rounded-lg bg-white/70 px-5 py-2 transition hover:bg-white"
            >
              Read Blog
            </Link>
          </div>
        </div>

        {/* Right: Skills */}
        <div className="grid grid-cols-2 gap-4 content-start">
          <div className="rounded-3xl bg-white/90 p-5 shadow-sm backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
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
                <span key={t} className="rounded-full bg-black/5 px-3 py-1 text-sm text-black/80">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white/90 p-5 shadow-sm backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
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
                <span key={t} className="rounded-full bg-black/5 px-3 py-1 text-sm text-black/80">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="col-span-2 rounded-3xl bg-white/90 p-4 shadow-sm backdrop-blur">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-black/60">
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
                <span key={t} className="rounded-full bg-black/5 px-3 py-1 text-sm text-black/80">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="col-span-2 rounded-3xl bg-white/90 p-4 shadow-sm backdrop-blur">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-black/60">
              Certifications
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-black/70">
              <li>• HAM Radio Licence · Basic with Honours</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
