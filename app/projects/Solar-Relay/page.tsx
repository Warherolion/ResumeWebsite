import Link from "next/link";

const TAGS = [
  "Space Systems",
  "Mission Design",
  "Orbital Mechanics",
  "Link Budget",
  "Power Systems",
  "MATLAB",
  "STK",
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
          <p className="text-sm font-medium text-black/60">2025 • Space Systems Design</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Solar Monitoring Relay Network
          </h1>
          <p className="mt-4 text-lg text-black/70">
            Small-satellite relay constellation for continuous solar weather monitoring and data downlink
          </p>

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
                <dd className="text-black/80">Systems Designer</dd>
              </div>
              <div className="flex items-start justify-between gap-6">
                <dt className="text-black/60">Goal</dt>
                <dd className="text-black/80">Continuous solar monitoring with &lt;15 min data latency</dd>
              </div>
              <div className="flex items-start justify-between gap-6">
                <dt className="text-black/60">Stack</dt>
                <dd className="text-black/80">MATLAB, STK, Systems Tool Kit</dd>
              </div>
              <div className="flex items-start justify-between gap-6">
                <dt className="text-black/60">Status</dt>
                <dd className="text-black/80">Completed</dd>
              </div>
            </dl>
          </div>
        </aside>
      </header>

      {/* Hero image placeholder */}
      <section className="mt-12">
        <div className="relative h-[360px] w-full overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-black/30 md:h-[460px]">
          [ Constellation orbit diagram ]
        </div>
        <p className="mt-3 text-sm text-black/50">
          Figure 1 — Relay constellation orbital configuration showing coverage geometry.
        </p>
      </section>

      {/* Body */}
      <section className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <article className="lg:col-span-8 space-y-16">

          {/* ── MISSION OVERVIEW ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Mission Overview</h2>
            <p className="mt-4 text-black/70">
              The Solar Monitoring Relay Network is a space systems design project for a small-satellite
              constellation that provides continuous monitoring of solar weather phenomena — including solar
              flares, coronal mass ejections (CMEs), and solar wind — and relays that data to ground stations
              with minimal latency. Early warning of space weather events is critical for protecting satellite
              infrastructure, power grids, and crewed spacecraft.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Mission Objectives</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-black/70">
              <li>Provide continuous (100% duty cycle) solar observation from multiple vantage points</li>
              <li>Relay solar weather data to ground with end-to-end latency under 15 minutes</li>
              <li>Operate for a minimum mission lifetime of 5 years</li>
              <li>Minimize constellation size while meeting coverage and link margin requirements</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Concept of Operations</h3>
            <p className="mt-3 text-black/70">
              Each satellite in the constellation carries a solar monitoring payload (EUV and X-ray imager)
              and a relay radio. Observation satellites in a sun-synchronous or halo orbit near L1 continuously
              image the sun and buffer data. Relay satellites in MEO/HEO bridge the gap between the
              observation assets and ground stations, ensuring no data is held longer than the latency budget
              allows.
            </p>

            <div className="mt-4 relative h-[240px] w-full overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
              [ Mission concept of operations diagram ]
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 2 — End-to-end ConOps from solar observation to ground downlink.</p>
          </section>

          {/* ── ORBIT DESIGN ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Orbit Design</h2>
            <p className="mt-4 text-black/70">
              Orbit selection was driven by three competing requirements: continuous line-of-sight to the
              sun, link geometry to ground stations, and the radiation environment. STK was used to model
              coverage and access intervals for candidate orbits.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Observation Orbit</h3>
            <p className="mt-3 text-black/70">
              The observation satellites are placed in a halo orbit around the Sun-Earth L1 Lagrange point,
              approximately 1.5 million km from Earth. L1 provides an unobstructed view of the sun at all
              times and is used by operational solar weather missions (DSCOVR, SOHO). The halo orbit
              amplitude and phasing were selected to minimise exclusion zone constraints with Earth
              ground stations.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative h-[220px] overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
                [ L1 halo orbit geometry ]
              </div>
              <div className="relative h-[220px] overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
                [ Ground station access intervals ]
              </div>
            </div>
            <p className="mt-2 text-sm text-black/50">Figures 3–4 — L1 halo orbit and resulting ground station access windows.</p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Relay Orbit & Coverage Analysis</h3>
            <p className="mt-3 text-black/70">
              Relay satellites are placed in a highly elliptical orbit (HEO) chosen to maximise apogee
              dwell time over mid-latitude ground stations. STK coverage analysis was used to determine
              the minimum number of relay satellites required to maintain continuous visibility between
              the L1 observation asset and at least one ground station, subject to minimum elevation
              angle constraints.
            </p>

            <div className="mt-4 relative h-[240px] w-full overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
              [ STK coverage gap analysis — relay constellation ]
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 5 — Coverage gap analysis showing relay satellite handoff intervals.</p>
          </section>

          {/* ── COMMUNICATIONS & LINK BUDGET ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Communications & Link Budget</h2>
            <p className="mt-4 text-black/70">
              Two RF links were sized: the observation-to-relay crosslink at L1 range, and the relay-to-ground
              downlink. Both budgets were computed in MATLAB accounting for free-space path loss, antenna
              gain, transmit power, noise temperature, and required E<sub>b</sub>/N<sub>0</sub> for the selected modulation scheme.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">L1 Crosslink</h3>
            <p className="mt-3 text-black/70">
              The crosslink operates in X-band. The free-space path loss at 1.5 million km is the dominant
              link budget driver. High-gain parabolic antennas on both ends are required to close the link
              at the required data rate. Pointing accuracy requirements were derived from the antenna
              half-power beamwidth and the relative orbital dynamics at L1.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Frequency Band</h4>
                <p className="mt-2 text-sm text-black/70">X-band (8–12 GHz) selected for high data rate capability and heritage with deep-space missions.</p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Modulation</h4>
                <p className="mt-2 text-sm text-black/70">QPSK with rate-1/2 convolutional coding, balancing spectral efficiency against link margin.</p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Required Margin</h4>
                <p className="mt-2 text-sm text-black/70">3 dB minimum link margin maintained across all pointing and range scenarios.</p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Data Rate</h4>
                <p className="mt-2 text-sm text-black/70">Sized to downlink one full-resolution solar image per observation cadence within the latency budget.</p>
              </div>
            </div>

            <div className="mt-6 relative h-[240px] w-full overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
              [ Link budget table — crosslink and downlink ]
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 6 — Link budget summary for L1 crosslink and relay-to-ground downlink.</p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Ground Downlink</h3>
            <p className="mt-3 text-black/70">
              The relay-to-ground downlink operates in S-band to leverage existing ground station
              infrastructure. Elevation angle constraints and atmospheric losses were included in the
              budget. The downlink was sized to drain the onboard buffer within each ground contact window,
              ensuring no data is older than the 15-minute latency requirement at handoff.
            </p>
          </section>

          {/* ── POWER SUBSYSTEM ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Power Subsystem</h2>
            <p className="mt-4 text-black/70">
              Solar array and battery sizing were performed for both the observation satellite (always in
              sunlight at L1) and the relay satellite (subject to Earth eclipse periods). The power budget
              accounts for all subsystem loads across operational and safe modes.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Solar Array Sizing</h3>
            <p className="mt-3 text-black/70">
              At L1, the solar constant is approximately 1361 W/m². Array area was sized using the
              beginning-of-life (BOL) and end-of-life (EOL) efficiency of triple-junction GaAs cells,
              with an EOL degradation factor accounting for 5 years of radiation exposure in the solar
              wind environment. The L1 satellite benefits from no eclipse periods, simplifying the sizing
              relative to the relay satellites.
            </p>
            <p className="mt-3 text-black/70">
              The HEO relay satellites experience eclipse periods at perigee. Battery capacity was sized
              to maintain full operation through the maximum eclipse duration with a 20% depth-of-discharge
              margin, using Li-ion cells selected for their energy density and heritage in LEO/MEO missions.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative h-[220px] overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
                [ Power budget — observation satellite ]
              </div>
              <div className="relative h-[220px] overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
                [ Power budget — relay satellite (eclipse sizing) ]
              </div>
            </div>
            <p className="mt-2 text-sm text-black/50">Figures 7–8 — Power budgets for observation and relay satellites across operational modes.</p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Radiation Environment</h3>
            <p className="mt-3 text-black/70">
              The L1 environment exposes the observation satellites to the full solar wind particle flux
              without the benefit of Earth's magnetosphere. Total ionising dose (TID) and displacement
              damage from protons were estimated over the 5-year mission life to drive component shielding
              requirements and establish minimum radiation tolerance levels for all electronics.
            </p>

            <div className="mt-4 relative h-[220px] w-full overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
              [ TID accumulation vs. shielding thickness ]
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 9 — Total ionising dose over mission life as a function of aluminium shielding thickness.</p>
          </section>

        </article>

        {/* Right sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl bg-white/90 p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
              Skills demonstrated
            </h3>
            <ul className="mt-4 space-y-2 text-black/70">
              <li>• Mission architecture & ConOps design</li>
              <li>• Orbit selection & coverage analysis (STK)</li>
              <li>• RF link budget sizing</li>
              <li>• Power subsystem & battery sizing</li>
              <li>• Radiation environment analysis</li>
              <li>• Systems-level trade studies</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white/90 p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
              Key figures
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-black/60">Orbit</dt>
                <dd className="font-medium text-black/80">L1 halo + HEO relay</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-black/60">Latency target</dt>
                <dd className="font-medium text-black/80">&lt;15 min</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-black/60">Mission life</dt>
                <dd className="font-medium text-black/80">5 years</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-black/60">Link band</dt>
                <dd className="font-medium text-black/80">X-band crosslink / S-band downlink</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-black/60">Link margin</dt>
                <dd className="font-medium text-black/80">≥3 dB</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

    </main>
  );
}
