import Image from "next/image";
import Link from "next/link";

const TAGS = [
  "AOCS",
  "MATLAB/Simulink",
  "Reaction Wheels",
  "Thruster Control",
  "Kalman Filter",
  "Quaternion Dynamics",
  "Space Systems",
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
        <div className="relative h-[360px] w-full overflow-hidden rounded-3xl md:h-[460px]">
          <Image
            src="/GeoDude.png"
            alt="On-orbit spacecraft servicer concept"
            fill
            className="object-contain"
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
        <article className="lg:col-span-8 space-y-16">

          {/* ── OVERVIEW ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Overview</h2>
            <p className="mt-4 text-black/70">
              This capstone project involves the conceptual design of an autonomous on-orbit servicing
              spacecraft (GeoDude) targeting a geostationary client satellite. The servicer must perform
              rendezvous and proximity operations and dock with a defunct spacecraft to replace its attitude
              control module. My role was to design and simulate the complete Attitude and Orbit Control
              System (AOCS) for GeoDude — covering spacecraft dynamics modelling, disturbance environment,
              sensor modelling, state estimation, and the closed-loop control law — all built and verified
              in MATLAB and Simulink.
            </p>
          </section>

          {/* ── SPACECRAFT DYNAMICS ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Spacecraft Dynamics</h2>
            <p className="mt-4 text-black/70">
              The rotational dynamics of GeoDude are governed by Euler's equations of motion for a rigid
              body. To avoid the singularities inherent in Euler angle representations at certain attitudes,
              orientation is represented using unit quaternions throughout the model. The quaternion
              kinematics propagate the attitude state given the angular velocity, while Euler's equations
              propagate the angular velocity given the applied torques.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Reaction Wheel Model</h3>
            <p className="mt-3 text-black/70">
              GeoDude uses a four-reaction-wheel assembly in a pyramidal configuration, providing full
              three-axis control with redundancy. Each wheel is modelled with its own moment of inertia,
              spin rate, and torque limits. The wheel angular momenta are included in the spacecraft's
              total angular momentum, so the coupling between wheel spin-up and spacecraft body rotation
              is captured accurately. A momentum management strategy was implemented to prevent wheel
              saturation over long mission durations, using thrusters to desaturate wheels when their
              spin rates approach limits.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Wheel Configuration</h4>
                <p className="mt-2 text-sm text-black/70">
                  Four wheels in a pyramidal arrangement — three provide primary control, the fourth
                  provides redundancy against a single-wheel failure.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Torque Allocation</h4>
                <p className="mt-2 text-sm text-black/70">
                  A pseudo-inverse mapping distributes the commanded 3-axis body torque across the four
                  wheels, minimising wheel speed while satisfying the torque demand.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Thruster Desaturation</h4>
                <p className="mt-2 text-sm text-black/70">
                  When wheel speeds approach saturation limits, thrusters fire in pairs to dump stored
                  angular momentum while the wheels compensate for the resulting body torque.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Thruster Model</h4>
                <p className="mt-2 text-sm text-black/70">
                  Attitude thrusters are modelled as on/off devices with fixed thrust magnitude and moment
                  arms. A pulse-width modulation scheme converts continuous torque demands into thruster
                  fire times.
                </p>
              </div>
            </div>

            <div className="mt-6 relative h-[260px] w-full overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
              [ Simulink spacecraft dynamics block diagram ]
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 2 — Simulink model showing rigid-body dynamics, reaction wheel coupling, and actuator interfaces.</p>
          </section>

          {/* ── DISTURBANCE ENVIRONMENT ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Disturbance Environment</h2>
            <p className="mt-4 text-black/70">
              In GEO the dominant environmental disturbance torques were modelled and included in the
              simulation to ensure the control system is sized and tuned against realistic conditions.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Gravity Gradient</h4>
                <p className="mt-2 text-sm text-black/70">
                  Torque arising from the variation in Earth's gravitational field across the spacecraft
                  body. Computed from the inertia tensor and local vertical direction — dominant for
                  elongated spacecraft geometries.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Solar Radiation Pressure</h4>
                <p className="mt-2 text-sm text-black/70">
                  Torque from photon pressure acting on the solar arrays and bus surfaces. Magnitude
                  depends on surface area, reflectivity, and the offset between the centre of pressure
                  and the centre of mass.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Magnetic Torque</h4>
                <p className="mt-2 text-sm text-black/70">
                  Interaction between the spacecraft's residual magnetic dipole and Earth's magnetic
                  field. Relatively small at GEO altitude but included for completeness.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Aerodynamic Drag</h4>
                <p className="mt-2 text-sm text-black/70">
                  Negligible at GEO but modelled to keep the simulation extensible to lower orbit
                  missions.
                </p>
              </div>
            </div>

            <div className="mt-6 relative h-[220px] w-full overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
              [ Disturbance torque magnitudes vs. time ]
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 3 — Simulated disturbance torque components over one orbit.</p>
          </section>

          {/* ── SENSOR MODEL & STATE ESTIMATION ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Sensor Model & State Estimation</h2>
            <p className="mt-4 text-black/70">
              Realistic sensor models were developed for each attitude sensor, including noise, bias, and
              scale factor errors. These models feed an Extended Kalman Filter (EKF) that fuses the
              measurements into an optimal attitude and angular rate estimate.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Sensors Modelled</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Star Tracker</h4>
                <p className="mt-2 text-sm text-black/70">
                  High-accuracy quaternion measurement with low noise but limited update rate. Primary
                  attitude reference in steady-state.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Gyroscope (IMU)</h4>
                <p className="mt-2 text-sm text-black/70">
                  High-rate angular rate measurement with additive white noise and slowly varying bias.
                  Propagates attitude between star tracker updates.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Sun Sensor</h4>
                <p className="mt-2 text-sm text-black/70">
                  Provides sun vector direction for coarse attitude knowledge and aids EKF convergence
                  during initial acquisition.
                </p>
              </div>
            </div>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Extended Kalman Filter</h3>
            <p className="mt-3 text-black/70">
              The EKF state vector consists of the quaternion attitude, angular rate, and gyroscope bias.
              Because quaternion kinematics are nonlinear, the filter linearises the system at each
              timestep via the Jacobian of the propagation equations. Measurement updates from the star
              tracker and sun sensor correct the propagated state and reduce accumulated gyro drift.
              Process and measurement noise covariances were tuned to match the sensor datasheets and
              yield well-conditioned filter innovations.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative h-[220px] overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
                [ EKF quaternion estimate vs. true attitude ]
              </div>
              <div className="relative h-[220px] overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
                [ Gyro bias estimate convergence ]
              </div>
            </div>
            <p className="mt-2 text-sm text-black/50">Figures 4–5 — EKF attitude estimate accuracy and gyro bias convergence over a simulation run.</p>
          </section>

          {/* ── CONTROL LAW ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Control Law</h2>
            <p className="mt-4 text-black/70">
              A quaternion feedback control law drives GeoDude to a commanded attitude while simultaneously
              regulating angular rate to zero. Operating directly in quaternion space avoids the singularities
              of Euler angle representations and is well-suited to large-angle slew manoeuvres required
              during rendezvous and docking operations.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Reaction Wheel Control</h3>
            <p className="mt-3 text-black/70">
              The primary control mode uses reaction wheels for fine attitude control. A proportional
              term on the quaternion error provides restoring torque toward the commanded attitude, and
              a derivative term on the angular rate provides damping. The gains were designed to meet
              pointing accuracy and slew rate requirements while keeping wheel torques within hardware
              limits. A nonlinear modification scales the proportional gain during large-angle slews to
              prevent wheel saturation while maintaining adequate bandwidth during fine pointing.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Thruster Control Mode</h3>
            <p className="mt-3 text-black/70">
              During wheel desaturation or large initial acquisition manoeuvres, thrusters take over
              attitude control. The same quaternion error signal drives a bang-bang controller that
              selects which thruster pairs to fire. A dead-band around zero error prevents excessive
              thruster cycling when attitude errors are small. The transition between wheel and thruster
              control is handled by a mode logic block in Simulink that monitors wheel speeds and
              commanded torque magnitudes.
            </p>

            <div className="mt-4 relative h-[260px] w-full overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
              [ Closed-loop Simulink block diagram — quaternion controller ]
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 6 — Simulink closed-loop control block diagram showing EKF → controller → actuator allocation → dynamics.</p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Closed-Loop Performance</h3>
            <p className="mt-3 text-black/70">
              The closed-loop system was verified in simulation across several scenarios: steady-state
              pointing under continuous disturbances, a 90° slew manoeuvre, and wheel desaturation
              while maintaining attitude. Key performance metrics are pointing error, slew time, and
              maximum wheel speed reached.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative h-[220px] overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
                [ Quaternion error vs. time — slew manoeuvre ]
              </div>
              <div className="relative h-[220px] overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
                [ Reaction wheel speeds vs. time ]
              </div>
            </div>
            <p className="mt-2 text-sm text-black/50">Figures 7–8 — Quaternion error convergence during a slew and wheel speeds throughout the manoeuvre.</p>
          </section>

        </article>

        {/* Right sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl bg-white/90 p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
              Skills demonstrated
            </h3>
            <ul className="mt-4 space-y-2 text-black/70">
              <li>• Quaternion attitude dynamics & kinematics</li>
              <li>• Reaction wheel modelling & torque allocation</li>
              <li>• Thruster control & desaturation logic</li>
              <li>• Extended Kalman Filter design & tuning</li>
              <li>• Disturbance environment modelling</li>
              <li>• MATLAB/Simulink simulation</li>
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

    </main>
  );
}
