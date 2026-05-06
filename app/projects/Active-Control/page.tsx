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
        <div className="relative h-[360px] w-full overflow-hidden rounded-3xl md:h-[460px]">
          {/* Put an image at public/projects/metrocket-hero.jpg */}
          <Image
            src="/CadModel2.png"
            alt="Active control rocket hero image"
            fill
            className="object-contain"
            priority
            sizes="100vw"
          />
        </div>
        <p className="mt-3 text-sm text-black/50">
          Figure 1 — Placeholder for a hero photo (rocket render, avionics bay, or flight test).
        </p>
      </section>

      {/* Body */}
      <section className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Main write-up */}
        <article className="lg:col-span-8 space-y-16">

          {/* ── DESIGN ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Design</h2>
            <p className="mt-4 text-black/70">
              The ACS (Active Control System) for Argus is a canard-based roll stabilization system whose
              goal is to null the spin the rocket experiences during ascent — an unintended consequence of
              manufacturing defects in the large static fins that can drive the rocket to spin at hundreds of RPM.
              Roll control was chosen specifically because the worst-case failure mode (no actuation) leaves
              the rocket behaving like any other uncontrolled rocket, eliminating the risk of catastrophic
              divergence from erroneous commands.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Canard Bay</h3>
            <p className="mt-3 text-black/70">
              The canard bay is housed within the nosecone and measures 138.43 mm (5.45 in) tall with a
              121.92 mm (4.8 in) diameter to fit inside the nosecone coupler. It is built from three bulkheads:
              the top and bottom are machined from Al 6061-T6 and fastened to the airframe with six M4
              countersunk screws each; the middle bulkhead is 3D-printed PET-G and is non-structural.
              Four ¼-in threaded rods tie the stack together. The bottom bulkhead mounts the servos and
              canard actuation mechanism; the top bulkhead seats the battery holder.
            </p>
            <p className="mt-3 text-black/70">
              The canard actuation mechanism consists of four parts per canard: a servo shaft adapter
              (connecting the servo horn to a 7 mm shaft), a pillow bearing (offloading axial servo loads),
              an angle limiter (physically hard-stopping deflection at ±10°), and a canard plate (the disk
              that the canard fin bolts into). This mechanical limit provides a hardware backstop independent
              of software, ensuring canards cannot over-deflect under any fault condition.
            </p>

            <div className="mt-4 relative h-[300px] w-full overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center">
              <Image
                src="/CadModel2.png"
                alt="SolidWorks CAD model of canard bay"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 1 — SolidWorks CAD model of the canard bay assembly.</p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Canard Sizing</h3>
            <p className="mt-3 text-black/70">
              Two constraints drove the canard geometry: the Mach angle and control authority.
            </p>
            <p className="mt-3 text-black/70">
              <span className="font-medium text-black/80">Mach angle:</span> As Argus accelerates through transonic and into supersonic flight, the shockwave
              cones from the nosecone narrow. A canard extending beyond these cones develops a supersonic
              leading edge, causing excessive drag and uneven spanwise loading. The Mach angle equation
              was used to find the critical sweep angle at max velocity, yielding a minimum sweep of 25°
              — meaning the canard sweep angle had to exceed 65°.
            </p>
            <p className="mt-3 text-black/70">
              <span className="font-medium text-black/80">Control authority:</span> A MATLAB script computed the angular acceleration about the roll axis
              as a function of canard geometry, using Hembold’s equation for subsonic C<sub>Lα</sub> and an
              empirical supersonic derivation across the flight velocity profile extracted from OpenRocket.
              The sizing target was to null a 4 Hz roll rate (based on prior MetRocketry launches) in under
              1 second at any point in the flight envelope. The final geometry — 40 mm root chord, 18.5 mm
              span, 10° max angle of attack — achieves a time-to-null of 0.644 s.
            </p>

            <div className="mt-4 relative h-[220px] w-full overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
              [ Canard sizing plot — time to null roll vs. velocity ]
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 2 — Time to null a 4 Hz roll rate across the flight velocity range for the selected canard geometry.</p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Structural Validation (FEA)</h3>
            <p className="mt-3 text-black/70">
              ANSYS Mechanical was used to verify the canard actuation mechanism under a conservative
              worst-case canard load of 150 N (actual calculated peak was ~40 N). The minimum safety
              factor of 1.94 occurred on the shaft — comfortably above the 1.5 aerospace standard — confirming
              that both the shaft and surrounding hardware are structurally adequate.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Aerodynamic Analysis (CFD)</h3>
            <p className="mt-3 text-black/70">
              An extensive CFD campaign was conducted to characterize the normal force produced by the
              canards as a function of deflection angle and flight velocity. Simulations were run at deflection
              angles from 1° to 10° at each of several velocities spanning subsonic through the expected
              maximum velocity of Argus. At each velocity, deflection vs. normal force is approximately
              linear; the slope (the control coefficient) is then plotted against velocity, and a polynomial
              line of best fit is generated — three separate polynomials, one for each sonic region.
            </p>
            <p className="mt-3 text-black/70">
              An altitude scaling factor was derived by running simulations at fixed velocity and deflection
              but varying pressure, then fitting a logarithmic curve to the resulting force ratio vs. altitude.
              For example, a 5° deflection at 100 m/s produces 5 N at sea level but only 3.5 N at 10,000 ft
              (effectiveness 0.7), so the control coefficient is scaled by the inverse (1.42) to maintain the
              desired lift force. This effectively implements gain scheduling across the flight envelope without
              a large multidimensional lookup table.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative h-[220px] overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
                [ CFD normal force vs. deflection — subsonic ]
              </div>
              <div className="relative h-[220px] overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
                [ CFD normal force vs. deflection — supersonic ]
              </div>
            </div>
            <p className="mt-2 text-sm text-black/50">Figures 3–4 — Normal force vs. canard deflection at representative subsonic and supersonic conditions.</p>

            <div className="mt-4 relative h-[220px] w-full overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
              [ Control coefficient vs. velocity — polynomial fits per sonic region ]
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 5 — Control coefficient curves used during flight to convert torque demand to canard deflection angle.</p>
          </section>

          {/* ── 6DOF SIMULATION ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">6DoF Simulation</h2>
            <p className="mt-4 text-black/70">
              A six-degree-of-freedom flight simulation was developed in MATLAB/Simulink to serve as the
              primary environment for controller tuning and verification. The controller was first roughed-in
              on a simpler 3DoF Simulink solver with simulated Gaussian sensor noise, then ported into the
              full 6DoF model — which includes aerodynamics, thrust curves, and atmospheric variation —
              for final tuning before embedded implementation.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Model Architecture</h3>
            <p className="mt-3 text-black/70">
              The 6DoF model captures rigid-body translational and rotational equations of motion, with
              aerodynamic forces and moments derived from the CFD control coefficient data and OpenRocket
              aero tables. Motor thrust curves are tabulated and interpolated, and atmospheric density and
              pressure are modelled as functions of altitude. Sensor models add Gaussian noise and gyroscope
              bias to replicate real IMU behaviour, allowing the Kalman filter and controller to be tested
              against realistic measurement conditions.
            </p>
            <p className="mt-3 text-black/70">
              Accurate servo modelling was identified as critical for realistic tuning — the servo transfer
              function was characterised separately and incorporated into the sim so that bandwidth
              limitations and command lag are reflected in closed-loop results.
            </p>

            <div className="mt-4 relative h-[260px] w-full overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
              [ Simulink 6DoF model block diagram ]
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 6 — Top-level Simulink block diagram of the 6DoF flight model with ACS loop closed.</p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Controller Tuning & Verification</h3>
            <p className="mt-3 text-black/70">
              With the full 6DoF aerodynamic environment in the loop, the PD gains were tuned against the
              roll rate convergence time and overshoot targets. The sim confirmed the controller could null
              a 4 Hz initial roll rate within the 1-second authority budget across the post-burnout flight regime,
              while keeping canard deflection within the ±10° mechanical limit.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative h-[220px] overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
                [ Roll rate vs. time — controlled vs. uncontrolled ]
              </div>
              <div className="relative h-[220px] overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
                [ Canard deflection command vs. time ]
              </div>
            </div>
            <p className="mt-2 text-sm text-black/50">Figures 7–8 — Simulated roll rate nulling and corresponding canard deflection history.</p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Sensitivity Analysis</h3>
            <p className="mt-3 text-black/70">
              A sensitivity analysis was performed by perturbing key parameters within realistic bounds
              and measuring their effect on roll rate convergence time, overshoot, steady-state error,
              and attitude tracking accuracy. Parameters studied included IMU noise and bias, barometer
              noise, an accelerated thrust curve (higher-than-predicted peak velocity), and servo response time.
            </p>
            <p className="mt-3 text-black/70">
              The controller and state estimator proved robust to variations in sensor noise and aerodynamic
              environment. The dominant sensitivity was servo response time — a slower servo (from excessive
              friction or high aerodynamic loading) produced effects ranging from a delayed roll-rate response
              to full destabilisation at flight conditions requiring small, precise deflections such as the
              high-Mach regime near max-q. This finding drove the servo selection and torque-margin requirements.
            </p>

            <div className="mt-4 relative h-[220px] w-full overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
              [ Sensitivity analysis — roll rate convergence time vs. servo bandwidth ]
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 9 — Effect of servo response time on closed-loop roll rate convergence.</p>
          </section>

          {/* ── CONTROL SYSTEM ── */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight border-b border-black/10 pb-3">Control System</h2>
            <p className="mt-4 text-black/70">
              The ACS control system is composed of two main components: a state estimator that provides
              real-time roll angle and roll rate, and a torque-based PD controller that drives the canards
              to zero both quantities. A key design principle was keeping the controller itself linear and simple,
              while offloading all aerodynamic nonlinearity into a separate control coefficient look-up derived
              from CFD — reducing computational load on the MCU and simplifying tuning.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">State Estimation</h3>
            <p className="mt-3 text-black/70">
              Two Kalman filters run in parallel. A <span className="font-medium text-black/80">Linear Kalman Filter (LKF)</span> handles altitude
              estimation by fusing accelerometer and barometer data — the accelerometer propagates altitude
              and vertical velocity, while the barometer provides an independent measurement via the barometric
              formula. Vertical dynamics are approximately linear over small timesteps, making an LKF sufficient.
            </p>
            <p className="mt-3 text-black/70">
              An <span className="font-medium text-black/80">Extended Kalman Filter (EKF)</span> handles attitude estimation by fusing gyroscope,
              accelerometer, and magnetometer readings. Attitude kinematics are inherently nonlinear, so the
              EKF linearises the system via a first-order Taylor Series expansion at each timestep.
              Argus’s orientation is represented as a quaternion rather than Euler angles to prevent gimbal
              lock. The gyroscope provides angular velocity (integrated for orientation), but accumulates
              integration bias over time; the accelerometer and magnetometer correct this drift through the
              EKF fusion.
            </p>

            <div className="mt-4 relative h-[220px] w-full overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
              [ EKF attitude estimate vs. raw gyro integration — bench test ]
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 10 — EKF roll angle estimate compared to raw gyro integration, showing bias correction over time.</p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Controller & Control Coefficient</h3>
            <p className="mt-3 text-black/70">
              A static torque-based PD controller observes both roll rate and roll angle from the EKF and
              outputs a torque demand needed to correct both errors. The controller is intentionally kept linear
              — it does not directly account for aerodynamic effects. Those are handled separately by the
              Control Coefficient.
            </p>
            <p className="mt-3 text-black/70">
              The <span className="font-medium text-black/80">Control Coefficient</span> is a set of polynomial equations derived from the CFD campaign.
              Given the current flight velocity, the appropriate polynomial (one of three, one per sonic region)
              is evaluated to find the control force coefficient. The torque demand is converted to a required
              force via the canard moment arm, then divided by the control coefficient to yield the canard
              deflection angle command. An additional altitude scaling factor — a logarithmic function fit to
              CFD results at varying pressures — adjusts the coefficient for the decreasing air density at altitude.
              Together these steps replicate the effect of gain scheduling across the full flight envelope without
              requiring a large multidimensional lookup table or re-linearisation at each operating point.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Roll Angle Error</h4>
                <p className="mt-2 text-sm text-black/70">
                  Proportional term drives the canards to return the rocket to 0° roll, providing
                  restoring force proportional to how far the rocket has rotated.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Roll Rate Error</h4>
                <p className="mt-2 text-sm text-black/70">
                  Derivative term damps out spinning before it accumulates into a large angle error,
                  providing the bulk of active stabilisation authority.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Torque → Deflection</h4>
                <p className="mt-2 text-sm text-black/70">
                  The torque output is converted to canard deflection via the CFD-derived control
                  coefficient and altitude scaling, accounting for varying aerodynamic effectiveness.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h4 className="font-semibold">Deflection Limiting</h4>
                <p className="mt-2 text-sm text-black/70">
                  Software clamps commands to ±10°; mechanical angle limiters provide a hard
                  backstop independent of software state.
                </p>
              </div>
            </div>

            <div className="mt-6 relative h-[260px] w-full overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
              [ ACS control system response plot ]
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 11 — Simulated closed-loop ACS response showing roll rate and canard deflection.</p>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">Flight Software</h3>
            <p className="mt-3 text-black/70">
              The flight software runs on FreeRTOS and follows a state-machine architecture. On power-up,
              hardware buses and peripherals are initialised before the scheduler starts. A high-speed sensor
              reading task feeds a launch detection task that tracks the rocket’s flight state:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-black/70">
              <li><span className="font-medium text-black/80">Launch detection:</span> IMU acceleration exceeding 4 G for 100 ms triggers liftoff and enters the boost state.</li>
              <li><span className="font-medium text-black/80">Burnout detection:</span> After waiting ~10.9 s for the motor to finish, a sharp drop in acceleration confirms burnout.</li>
              <li><span className="font-medium text-black/80">ACS activation:</span> On burnout confirmation the canards deploy and the PD controller takes over.</li>
              <li><span className="font-medium text-black/80">Safety cutoff:</span> If pitch error exceeds 30°, the high-side switch cuts servo power — preventing actuation under an anomalous flight attitude.</li>
            </ul>
            <p className="mt-3 text-black/70">
              Throughout all phases, the system logs state estimation and sensor data to an onboard SD card
              and transmits live attitude and altitude data to the ground station over a 433 MHz LoRa link
              for post-flight analysis and real-time monitoring.
            </p>

            <div className="mt-4 relative h-[260px] w-full overflow-hidden rounded-3xl bg-black/5 flex items-center justify-center text-sm text-black/30">
              [ Flight software functional flow diagram ]
            </div>
            <p className="mt-2 text-sm text-black/50">Figure 12 — Orion flight software state machine from power-on through ACS activation.</p>
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

    </main>
  );
}
