import Image from "@/Components/ZoomableImage";
import Link from "next/link";

const TAGS = [
  "Space Systems Mission Design",
  "Orbital Mechanics",
  "STK",
  "Matlab",
  "Satellite Design",
];

export default function SolarRelayProject() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* Top nav */}
      <div className="flex items-center justify-between gap-4">
        <Link href="/projects" className="text-sm text-black/70 hover:text-black">
          ← Back to Projects
        </Link>
      </div>

      {/* Header */}
      <header className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-sm font-medium text-black/60">2025 • Capstone - Space Systems Design</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Cerberus Constellation
          </h1>
          <p className="mt-4 text-lg text-black/70">
            Three-satellite heliocentric constellation at Earth-Sun L4, Earth-Sun L5, and Mars-Sun L5 for continuous solar monitoring and Earth–Mars communication relay.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <span key={t} className="rounded-full bg-black/5 px-3 py-1 text-sm text-black/70">
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
                <dt className="text-black/60">Context</dt>
                <dd className="text-black/80 text-right">AIAA 2025–26 Undergraduate Space Design Competition</dd>
              </div>
              <div className="flex items-start justify-between gap-6">
                <dt className="text-black/60">Role</dt>
                <dd className="text-black/80 text-right">Orbital Analysis lead, power subsystem design lead</dd>
              </div>
              <div className="flex items-start justify-between gap-6">
                <dt className="text-black/60">Tools</dt>
                <dd className="text-black/80">Ansys STK, MATLAB</dd>
              </div>
              <div className="flex items-start justify-between gap-6">
                <dt className="text-black/60">Status</dt>
                <dd className="text-black/80">Completed</dd>
              </div>
            </dl>
          </div>
        </aside>
      </header>

      {/* Hero image */}
      <section className="mt-12">
        <div className="relative h-[360px] w-full overflow-hidden rounded-3xl md:h-[460px]">
         <Image src="/STKPlot.png" alt="Cerberus constellation interplanetary flight path — Sun inertial frame (STK)" fill className="object-contain" sizes="(max-width: 768px) 100vw, 800px" /> 
        </div>
        <p className="mt-3 text-sm text-black/50">
          Figure 1 — Earth-Sun L4, L5 and Mars-Sun L5 interplanetary flight paths visualised in Ansys STK (Sun inertial frame).
        </p>
      </section>

      {/* Body */}
      <section className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <article className="lg:col-span-8 space-y-16">

          {/* ── MISSION OVERVIEW ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Mission Overview</h2>
            <p className="mt-4 text-black/70">
              As orbital analysis lead, I designed the constellation architecture and led all trajectory
              and coverage analysis for Cerberus a three-satellite heliocentric constellation built for
              the AIAA 2025–2026 Undergraduate Team Space Design Competition. The mission requirements
              were uninterrupted solar weather monitoring and continuous Earth–Mars communication relay
              from 2036 to 2049, within a $400M USD budget.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">The Problem I Was Solving</h3>
            <p className="mt-3 text-black/70">
              Earth and Mars experience approximately six super solar conjunctions during the mission
              window events where the Sun blocks all direct radio contact between the planets for days
              to months at a time. My task was to design a satellite architecture that eliminates these
              blackouts entirely, guaranteeing an unbroken relay chain regardless of where Earth and Mars
              sit in their orbits.
            </p>

            <div className="mt-4 relative h-[300px] w-full overflow-hidden rounded-3xl">
              <Image src="/SSC.jpg" alt="Mars and Earth during super solar conjunction" fill className="object-contain" sizes="(max-width: 768px) 100vw, 800px" /> 
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 2 - Mars and Earth during a super solar conjunction, illustrating the communication blackout geometry.</p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Architecture Decision</h3>
            <p className="mt-3 text-black/70">
              I settled on a three-node design Earth-Sun L4 (relay), Earth-Sun L5 (solar observer),
              and Mars-Sun L5 (Mars observer and relay). Placing nodes at these positions guarantees
              continuous heliocentric arc coverage of roughly 240°, keeping adjacent-node separation
              below 90° at all times and maximum inter-satellite range under ~290 million km within
              the capability of the free-space optical link I specified.
            </p>
          </section>

          {/* ── CONSTELLATION & ORBIT DESIGN ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Orbital Trade Study & Constellation Design</h2>
            <p className="mt-4 text-black/70">
              With a 15-year mission life and tight propellant budget, I needed positions that were
              inherently stable rather than relying on continuous station-keeping. I evaluated all five
              Lagrange points for both the Sun–Earth and Sun–Mars systems, ruling out L1/L2/L3 due to
              their saddle-point instabilit they require active correction roughly every 23 days,
              which is unsustainable at interplanetary distances. Mercury-Sun and Venus-Sun L4/L5 were
              also eliminated for excessive thermal loads and ΔV requirements.
            </p>
            <p className="mt-3 text-black/70">
              L4 and L5 are the only Lagrange points where balanced Coriolis and centrifugal forces
              create a true potential well, making small perturbations produce bounded libration rather
              than escape. The Sun–Earth and Sun–Mars mass ratios both exceed the ~24.96 threshold
              required for this stability, so I selected Earth-Sun L4, Earth-Sun L5, and Mars-Sun L5
              as the three station positions each geometrically fixed at 60° offsets in their
              respective planetary orbits with minimal propellant for the full mission window.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Node Roles</h3>
            <p className="mt-3 text-black/70">
              Each node was assigned a specific function, with position chosen to maximise the
              mission's dual objectives:
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Earth-Sun L4</h4>
                <p className="mt-2 text-sm text-black/70">
                  Communication relay. 60° ahead of Earth closes the Earth–Mars relay chain
                  when direct line-of-sight through the Sun is blocked.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Earth-Sun L5</h4>
                <p className="mt-2 text-sm text-black/70">
                  Primary solar observer. 60° behind Earth, it sees 60° of Sun invisible from
                  Earth and delivers 4–5 extra days of CME warning due to solar rotation.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Mars-Sun L5</h4>
                <p className="mt-2 text-sm text-black/70">
                  Mars relay and solar observer. Monitors solar activity toward Mars and bridges
                  the communication gap during Earth–Mars conjunctions.
                </p>
              </div>
            </div>
          </section>

          {/* ── STK COVERAGE & ACCESS ANALYSIS ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">STK Modelling & Coverage Analysis</h2>
            <p className="mt-4 text-black/70">
              I built the full constellation model in Ansys STK, placing all three spacecraft in a
              Sun-centred inertial reference frame and propagating each orbit across the complete
              2036–2049 mission window. The core deliverable was proving that no communication blackout
              would occur that the relay chain between Earth and Mars remained unbroken at every
              point in time, including during all six super solar conjunctions.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Access Analysis</h3>
            <p className="mt-3 text-black/70">
              I ran access computations between all node pairs to extract continuous line-of-sight
              intervals across the mission window. Two access plots were the primary proof of coverage:
              Earth-Sun L4/L5 to Mars-Sun L5 (confirming the interplanetary relay chain is
              uninterrupted), and Earth-Sun L4 to Earth-Sun L5 (confirming constant contact within
              the Earth-local cluster). The results showed maximum adjacent-node separation stayed
              below 90° and maximum inter-satellite range under ~290 million km throughout validating
              the architecture against the communication link budget.
            </p>
 {/*
            <div className="mt-4 relative h-[300px] w-full overflow-hidden rounded-3xl">
              <Image src="" alt="Earth-Sun L4/L5 access plots to Mars-Sun L5" fill className="object-contain" sizes="(max-width: 768px) 100vw, 800px" />
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 5 - STK access plots: Earth-Sun L4/L5 visibility to Mars-Sun L5 across the mission window.</p>

            <div className="mt-4 relative h-[300px] w-full overflow-hidden rounded-3xl">
              {/* <Image src="" alt="Earth-Sun L4 access plots to Earth-Sun L5" fill className="object-contain" sizes="(max-width: 768px) 100vw, 800px" /> 
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 6 - STK access plots: Earth-Sun L4 visibility to Earth-Sun L5, confirming continuous Earth-cluster communication.</p> */}

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Stability Verification</h3>
            <p className="mt-3 text-black/70">
              I propagated each spacecraft's trajectory in STK over the full 15-year mission duration
              to verify bounded libration rather than drift or escape. This confirmed that the L4/L5
              positions produce the stable co-rotating equilibria expected from theory, and that
              station-keeping ΔV requirements remain minimal a critical result for validating the
              propellant budget and mission feasibility within the $400M constraint.
            </p>
          </section>

          {/* ── TRAJECTORY DESIGN ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Trajectory Design & ΔV Optimisation</h2>
            <p className="mt-4 text-black/70">
              I designed all three interplanetary transfer trajectories in STK, using departure true
              anomaly as a free variable and sweeping it to minimise total ΔV while satisfying the
              hard constraint of launch no later than 31 December 2035. The Earth-Sun L4 and L5
              transfers were designed as TLI-analogue escapes from a low-Earth parking orbit;
              the Mars-Sun L5 satellite required a dedicated trans-Mars injection trajectory.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Departure Parking Orbit</h3>
            <p className="mt-3 text-black/70">
              All three spacecraft share the same initial parking orbit before their injection burns.
              The Keplerian elements below define the departure state used as the starting condition
              in STK for each trajectory optimisation.
            </p>

            <div className="mt-4 rounded-3xl bg-white/90 p-6 shadow-sm overflow-x-auto">
              <table className="w-full text-sm text-black/70">
                <thead>
                  <tr className="border-b border-black/10 text-left">
                    <th className="pb-2 font-semibold text-black/80">Parameter</th>
                    <th className="pb-2 font-semibold text-black/80">Earth L5</th>
                    <th className="pb-2 font-semibold text-black/80">Earth L4</th>
                    <th className="pb-2 font-semibold text-black/80">Mars L5</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  {[
                    ["Semi-Major Axis (km)", "6,878.14", "6,878.14", "6,878.14"],
                    ["Eccentricity", "0", "0", "0"],
                    ["Inclination (°)", "23.5", "23.5", "23.5"],
                    ["RAAN (°)", "0", "0", "0"],
                    ["Argument of Perigee (°)", "0", "0", "0"],
                  ].map(([label, ...vals]) => (
                    <tr key={label} className="border-b border-black/5">
                      <td className="py-2 text-black/60">{label}</td>
                      {vals.map((v, i) => <td key={i} className="py-2">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-sm text-black/50">Table 1 - Shared departure Keplerian elements for all three Cerberus transfer trajectories.</p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Transfer Paths & Window Selection</h3>
            <p className="mt-3 text-black/70">
              For the Mars-Sun L5 satellite, I identified six viable Earth–Mars launch windows between
              2031 and 2039 in STK and selected the optimal window to minimise ΔV while meeting the
              deadline. All three trajectories were visualised simultaneously in the Sun-inertial frame
              to verify that the paths don't intersect each other or the Trojan asteroid populations
              at Earth-Sun and Mars-Sun L4/L5 - a non-obvious risk for these specific destinations.
            </p>
 {/*
            <div className="mt-4 relative h-[320px] w-full overflow-hidden rounded-3xl">
              <Image src="" alt="Interplanetary flight paths in Sun inertial frame - STK" fill className="object-contain" sizes="(max-width: 768px) 100vw, 800px" />
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 7 - All three interplanetary transfer trajectories visualised simultaneously in STK (Sun inertial frame).</p>
 */}
            <h3 className="mt-8 text-xl font-semibold tracking-tight">Launch Vehicle Trade</h3>
            <p className="mt-3 text-black/70">
              I led the launch vehicle trade study, evaluating four candidates against the $400M total
              mission budget: Falcon Heavy ($150M/launch, 16.8 t to TMI), New Glenn ($110M/launch,
              10 t to TMI), Vulcan ($150M/launch, 1.3 t to TMI), and Starship (~$10M/launch,
              ~15 t to TMI with one refuelling). Falcon Heavy, New Glenn, and Vulcan each would have
              consumed over half the entire programme budget in launch costs alone, leaving no margin
              for development. Starship was the only vehicle that could deliver the Mars-L5 payload
              mass to trans-Mars injection while keeping launch costs a small fraction of the total
              the decisive factor in selecting it.
            </p>
          </section>

        </article>

        {/* Right sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl bg-white/90 p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
              Skills demonstrated
            </h3>
            <ul className="mt-4 space-y-2 text-black/70">
              <li>• Constellation architecture design</li>
              <li>• Lagrange point orbit mechanics</li>
              <li>• STK orbital modelling & visualisation</li>
              <li>• Interplanetary trajectory design</li>
              <li>• Access & coverage analysis</li>
              <li>• Launch vehicle trade study</li>
              <li>• ΔV budgeting & optimisation</li>
              <li>• Systems-level trade studies</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white/90 p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
              Key figures
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-black/60">Satellites</dt>
                <dd className="font-medium text-black/80">3 (Earth L4, Earth L5, Mars L5)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-black/60">Mission window</dt>
                <dd className="font-medium text-black/80">2036 – 2049</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-black/60">Conjunctions covered</dt>
                <dd className="font-medium text-black/80">~6 super solar conjunctions</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-black/60">Max node separation</dt>
                <dd className="font-medium text-black/80">&lt;90°</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-black/60">Max comm range</dt>
                <dd className="font-medium text-black/80">~290 million km</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-black/60">L5 warning advantage</dt>
                <dd className="font-medium text-black/80">+4–5 days (Earth CME)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-black/60">Budget</dt>
                <dd className="font-medium text-black/80">$400M USD</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

    </main>
  );
}
