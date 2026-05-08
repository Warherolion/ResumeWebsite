import type { Metadata } from "next";
import Image from "@/Components/ZoomableImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Attitude Control System - On-Orbit Servicer | Ranvir Singh",
};

const TAGS = [
  "AOCS",
  "MATLAB/Simulink",
  "Reaction Wheels",
  "Thruster Control",

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

        {/*<div className="flex flex-wrap gap-2">
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
        </div>*/}
      </div>

      {/* Header */}
      <header className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-sm font-medium text-black/60">2025 • Capstone Project</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Attitude Control System for an On-Orbit Servicing Spacecraft
          </h1>
          <p className="mt-4 text-lg text-black/70">
            Design and simulation of a closed-loop 3-axis AOCS using reaction wheels and thrusters
            for an autonomous spacecraft performing rendezvous and docking operations in GEO.
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <span
                key={t}
                className="rounded-full px-3 py-1 text-sm text-black/70"
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
                <dd className="text-black/80">Completed</dd>
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
          Figure 1 - Servicer sub scale render.
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
              My role in this capstone was to design and simulate the complete Attitude and Orbit Control
              System (AOCS) for GEO-DUDe, an autonomous on-orbit servicing spacecraft tasked with
              rendezvous, proximity operations, and docking with a defunct geostationary satellite. The
              AOCS was built in MATLAB and Simulink through progressive iterations: starting from a
              simple rigid-body dynamics model with an ideal controller, then adding realistic actuator
              models, disturbance torques, sensor noise, and state estimation in successive layers,
              validating each addition before building on it.
            </p>
            <p className="mt-4 text-black/70">
              The project also included a physical sub-scale docking simulator. My responsibility on the
              hardware side was tuning the 1D reaction wheel, iterating on controller gains through bench
              testing until the system reliably locked orientation onto the client satellite mock-up
              during the docking demonstration.
            </p>
          </section>

          {/* ── SPACECRAFT DYNAMICS ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Spacecraft Dynamics</h2>
            <p className="mt-4 text-black/70">
              Development started with a basic rigid-body dynamics model using Euler's equations of
              motion, driven by ideal torque inputs to verify the kinematics before adding actuators.
              Early runs with Euler angles exposed gimbal-lock issues during large-angle manoeuvres,
              which drove a switch to a full quaternion representation — quaternion kinematics propagate
              attitude from angular velocity, Euler's equations propagate angular velocity from applied
              torques, with no singularities at any attitude.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Reaction Wheel Model</h3>
            <p className="mt-3 text-black/70">
              Once base dynamics were validated, a four-reaction-wheel model in a pyramidal configuration
              was added. The first version treated wheels as ideal torque sources; after validating basic
              control authority the model was refined to include individual moments of inertia, spin rate
              limits, torque saturation, and wheel angular momenta coupled into the spacecraft's total
              momentum budget. Saturation events that appeared during extended simulation runs then drove
              the addition of thruster-based momentum dumping to keep wheel speeds bounded over the full
              mission duration.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Wheel Configuration</h4>
                <p className="mt-2 text-sm text-black/70">
                  A pyramidal four-wheel arrangement was selected — three wheels provide primary 3-axis
                  control, the fourth provides redundancy against a single-wheel failure.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Torque Allocation</h4>
                <p className="mt-2 text-sm text-black/70">
                  A pseudo-inverse mapping distributes the commanded 3-axis body torque across the four
                  wheels, minimising wheel speed while meeting the torque demand.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Thruster Desaturation</h4>
                <p className="mt-2 text-sm text-black/70">
                  Desaturation logic fires thruster pairs to dump stored angular momentum when wheel
                  speeds approach saturation, while the wheels compensate for the resulting body torque.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Thruster Model</h4>
                <p className="mt-2 text-sm text-black/70">
                  Attitude thrusters are modelled as on/off devices with fixed thrust and moment arms,
                  with a PWM scheme converting continuous torque demands into thruster fire times.
                </p>
              </div>
            </div>

            <div className="mt-6 relative h-[260px] w-full overflow-hidden rounded-3xl">
               <Image src="/RWModel.png" alt="Simulink spacecraft dynamics block diagram" fill className="object-contain" sizes="(max-width: 768px) 100vw, 800px" /> 
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 2 - Simulink model showing rigid-body dynamics, reaction wheel coupling, and actuator interfaces.</p>
          </section>

          {/* ── DISTURBANCE ENVIRONMENT ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Disturbance Environment</h2>
            <p className="mt-4 text-black/70">
              With the dynamics and actuator models validated, environmental disturbance torques were
              added incrementally starting with gravity gradient (dominant for GEO-DUDe's elongated
              geometry), then solar radiation pressure, magnetic torque, and aerodynamic drag. Adding
              each disturbance in isolation revealed its effect on steady-state pointing error and wheel
              speed build-up before layering the next, making it clear which terms were driving the
              station-keeping and desaturation requirements.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Gravity Gradient</h4>
                <p className="mt-2 text-sm text-black/70">
                  Computed from the inertia tensor and local vertical — the dominant disturbance torque
                  for GeoDude's elongated geometry due to the variation in Earth's gravitational field.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Solar Radiation Pressure</h4>
                <p className="mt-2 text-sm text-black/70">
                  Photon pressure torque on the solar arrays and bus surfaces, modelled as a function of
                  surface area, reflectivity, and the offset between centre of pressure and centre of mass.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Magnetic Torque</h4>
                <p className="mt-2 text-sm text-black/70">
                  Interaction between the spacecraft's residual magnetic dipole and Earth's field.
                  Small at GEO but included to keep the simulation accurate.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Aerodynamic Drag</h4>
                <p className="mt-2 text-sm text-black/70">
                  Negligible at GEO but modelled to keep the simulation extensible to lower-orbit
                  mission scenarios.
                </p>
              </div>
            </div>
          </section>

          {/* ── SENSOR SELECTION ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Sensor Selection</h2>
            <p className="mt-4 text-black/70">
              Sensor selection was driven by the accuracy, update rate, and fault-tolerance requirements
              of a GEO rendezvous mission. The goal was a three-sensor suite that provides high-accuracy
              steady-state attitude knowledge, high-rate propagation between updates, and an independent
              coarse reference for initial acquisition — without relying on any single measurement source.
              Each sensor was evaluated against its noise characteristics, GEO availability, and how well
              it complemented the others before being incorporated into the simulation.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Selected Sensors</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Star Tracker</h4>
                <p className="mt-2 text-sm text-black/70">
                  Selected as the primary attitude reference for its arc-second accuracy and
                  quaternion output. Low update rate makes it unsuitable for high-bandwidth control
                  alone, but ideal as the high-accuracy anchor for the state estimator.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Gyroscope (IMU)</h4>
                <p className="mt-2 text-sm text-black/70">
                  Chosen for its high sample rate to propagate attitude between star tracker updates.
                  Bias drift over time was the key limitation — addressed through the state estimator
                  rather than by switching sensors.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Sun Sensor</h4>
                <p className="mt-2 text-sm text-black/70">
                  Included as an independent coarse reference for initial acquisition and safe-mode
                  recovery, when the star tracker may not yet be converged or available.
                </p>
              </div>
            </div>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">State Estimator</h3>
            <p className="mt-3 text-black/70">
              With the sensor suite defined, a nonlinear state estimator was designed to fuse all three
              measurements into a single optimal attitude and rate estimate. The state vector covers
              quaternion attitude, angular rate, and gyroscope bias. Because quaternion kinematics are
              nonlinear, the estimator linearises at each timestep via the propagation Jacobian. Star
              tracker and sun sensor updates correct accumulated gyro drift, and process and measurement
              noise covariances were tuned against sensor datasheets through several iterations to
              achieve well-conditioned innovations throughout the simulation.
            </p>

          </section>

          {/* ── CONTROL LAW ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Control Law</h2>
            <p className="mt-4 text-black/70">
              The control law went through the most iteration of any component. Development started with
              a simple proportional controller on quaternion error — working in quaternion space from
              the outset to avoid the singularities that had already caused problems in the dynamics
              model. Once basic stabilisation was confirmed, a derivative term on angular rate was added,
              and both gains were tuned in simulation against pointing accuracy and slew rate targets.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Reaction Wheel Control</h3>
            <p className="mt-3 text-black/70">
              Gain tuning with the full disturbance and sensor noise model in the loop revealed that a
              linear PD gain was insufficient for large-angle slews — wheel torques saturated before the
              manoeuvre completed. A nonlinear gain scaling was added to reduce the proportional term
              during large slews and keep torques within hardware limits, then restore full bandwidth for
              fine pointing. Multiple tuning rounds were needed to balance slew speed against saturation
              margin across the full range of manoeuvres required during rendezvous operations.
            </p>
            <h3 className="mt-8 text-xl font-semibold tracking-tight">Closed-Loop Performance</h3>
            <p className="mt-3 text-black/70">
              Final verification ran the fully integrated model dynamics, disturbances, sensor noise,
              state estimator, and both control modes across three scenarios: steady-state pointing under
              continuous GEO disturbances, a 90° slew manoeuvre, and wheel desaturation while holding
              attitude. Each scenario exposed remaining issues that fed back into one more round of
              gain or covariance adjustment before the design was locked. Performance was evaluated
              against pointing error, slew time, and peak wheel speed to confirm the system met
              mission requirements.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative h-[220px] overflow-hidden rounded-3xl">
                <Image src="/QuaternionRep.png" alt="Quaternion error vs. time — slew manoeuvre" fill className="object-contain" sizes="(max-width: 768px) 100vw, 800px" /> 
              </div>
              <div className="relative h-[220px] overflow-hidden rounded-3xl">
               <Image src="/RWSpeeds.png" alt="Reaction wheel speeds vs. time" fill className="object-contain" sizes="(max-width: 768px) 100vw, 800px" />
              </div>
            </div>
            <p className="mt-2 text-sm text-black/50">Figures 6-7 - Quaternion error convergence during a slew and wheel speeds throughout the manoeuver.</p>



           {/*} <h3 className="mt-8 text-xl font-semibold tracking-tight">Spacecraft animation</h3>
            <p className="mt-3 text-black/70">
              In order to show the spacecrafts attitude control a 
            </p>

            <div className="mt-4 relative h-[260px] w-full overflow-hidden rounded-3xl">
              {/* <Image src="" alt="Closed-loop Simulink block diagram — quaternion controller" fill className="object-contain" sizes="(max-width: 768px) 100vw, 800px" /> 
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 8 - Simulink closed-loop control block diagram showing estimator → controller → actuator allocation → dynamics.</p>
        */}
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
              <li>• State estimator design & tuning</li>
              <li>• Disturbance environment modelling</li>
              <li>• MATLAB/Simulink simulation</li>
            </ul>
          </div>

        </aside>
      </section>

    </main>
  );
}
