import Image from "next/image";
import Link from "next/link";

const TAGS = [
  "PCB Design",
  "STM32",
  "Kicad",
  "SolidWorks",
  "ANSYS",
  "Sensor Fusion",
  "Testing",
];

const LINKS = [
  // Add/remove as needed
  { label: "Flight Computer Code GitHub", href: "https://github.com/Ryerson-Rocketry/Canards-Software" },
  { label: "Design files", href: "https://github.com/Ryerson-Rocketry/Canards-PCB" },
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
            Flight Computer PCB 
          </h1>
          <p className="mt-4 text-lg text-black/70">
             This flight controller was designed as a high-reliability, mixed-signal, 4 layer PCB, using 
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
                  Data Collection, Telemetry and active control of canard motors.
                </dd>
              </div>

              <div className="flex items-start justify-between gap-6">
                <dt className="text-black/60">Relevent Skils</dt>
                <dd className="text-black/80">
                  KiCad, Altium, Routing and Schematic <datalist></datalist>iagrams
                </dd>
              </div>

              <div className="flex items-start justify-between gap-6">
                <dt className="text-black/60">Status</dt>
                <dd className="text-black/80">Version 2 Complete</dd>
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
            src="/pcb.png"
            alt="Flight computer PCB hero image"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="mt-3 text-sm text-black/50">
          Figure 1 — Flight Computer PCB Version 2.
        </p>
      </section>

      {/* Body */}
      <section className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Main write-up */}
        <article className="lg:col-span-8 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
            <p className="mt-3 text-black/70">
              As an aerospace engineering student with limited prior electronics experience, the PCB schematic, layout, and firmware on this project were entirely self-taught from learning KiCad and mixed-signal layout rules to writing embedded C drivers from scratch.
              <br></br><br></br>
              This flight computer was designed from the ground up to work for active control projects, containing a multiude of sensors for altitude, and Attitude estimation
              along with connection for servo motors for use with either canards or airbrakes. This PCB is an STM32F446RE based 4 layer PCB, the choice to go with an STM32 over
              other microcontrollers primarily had to do with the expanded debuging capability that ST microcontrollers bring over Arduino based controllers, additonally the vase user base
              meant there were many support guides and imformation for aiding development. The PCB contains an IMU, Barometer, Magnetometer, and a GPS along with a high side switch to cut power to the servos in emergencies. It also have connections for a Lora 443 MHZ
              radio for telemetry. The PCB originally started as just the flight controller for the canard control system but was then incorporated into our rockets AI vision tracking payload for data and telemtry
              (hense the radio). <br></br><br></br>
              The canard control PCB was programmed with a strong focus on reliability, modularity, and real-time performance. An RTOS was implemented to organize the software into
              dedicated tasks such as sensor polling, state estimation, control calculations, actuator commands, and data logging, ensuring time-sensitive functions were run in a structured manner.
              A watchdog timer was also integrated as a fault-recovery feature, automatically resetting the system if the firmware became unresponsive during operation. Additional features included sensor and
              peripheral communication drivers, flight-state logic, PWM-based servo actuation, onboard data logging, and fault-handling routines to improve robustness. Together, these software features ensured
              the PCB could support stable canard control while maintaining the reliability required for an embedded aerospace application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Requirements</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-black/70">
              <li>Output accurate PWM signals for Servos</li>
              <li>Low latancy sensor data reading</li>
              <li>High frequency guidence and contro loop</li>
              <li>Low EMI and electrical noise</li>
               <li>Package and send telemetry info in structured and timly manner</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Key design decisions</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h3 className="font-semibold">STM32F446RE over Arduino-based controllers</h3>
                <p className="mt-2 text-sm text-black/70">
                  The STM32 was primarily chosen for its larger control over hardware, allowing for dirrect configuration of timers, interupts, the data lines and DMA. Additionally the debugging capability was far superior, providing breakpoints, live register inspection along with the many other tools that come with serial wire debuging.  
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h3 className="font-semibold">4-layer stackup</h3>
                <p className="mt-2 text-sm text-black/70">
                  A 4-layer board (signal / ground / power / signal) was selected to provide a continuous ground reference plane beneath all sensor traces, significantly reducing EMI and crosstalk compared to a 2-layer layout. The added cost was justified by the noise-sensitive IMU and barometer signals.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h3 className="font-semibold">Separate 7.4 V servo rail</h3>
                <p className="mt-2 text-sm text-black/70">
                  The servos selected were capable of running on voltages between 6-8.2V initial itterations attempted to use a buck-boost converter to run the servos at 8.2V to gain the small boost in torque but it was deemed an unnessecary complication and simply running staight off the 7.4V provided by a 2S li ion battery would be simpler
                  and still provide adequate torque. 
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h3 className="font-semibold">RTOS over bare-metal scheduling</h3>
                <p className="mt-2 text-sm text-black/70">
                  An RTOS was chosen over a bare-metal super-loop to enforce deterministic timing across concurrent tasks and simplify adding or removing features without reworking the entire scheduling model.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">System architecture</h2>
            <p className="mt-3 text-black/70">
              The PCB is centred on an STM32F446RE, with dedicated sensor, actuator, and telemetry buses managed by an RTOS.
            </p>

            {/* Flow diagram */}
            <div className="mt-6 rounded-3xl bg-white/90 p-6 shadow-sm overflow-x-auto">
              {/* Power row */}
              <div className="flex justify-center">
                <div className="rounded-xl border border-black/20 px-5 py-2 text-sm font-medium text-black/70 text-center">
                  Power Supply — 3.3 V Regulator &amp; 7.4 V Servo Rail
                </div>
              </div>

              <div className="flex justify-center my-2 text-black/30 text-lg">↓</div>

              {/* MCU */}
              <div className="flex justify-center">
                <div className="rounded-xl bg-black px-8 py-3 text-sm font-bold text-white text-center">
                  STM32F446RE MCU
                </div>
              </div>

              <div className="flex justify-center my-2 text-black/30 text-lg">↓</div>

              {/* RTOS tasks */}
              <div className="flex justify-center">
                <div className="rounded-xl border border-black/20 px-4 py-3 text-center w-full max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-wide text-black/50 mb-2">RTOS Task Scheduler</p>
                  <div className="grid grid-cols-5 gap-2">
                    {["Sensor Poll", "State Estimator", "Control Law", "Actuator Cmd", "Data Logger"].map((t) => (
                      <div key={t} className="rounded-lg bg-black/5 px-2 py-2 text-xs text-center text-black/60 leading-tight">
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Three output columns */}
              <div className="mt-4 grid grid-cols-3 gap-4 text-center text-xs">
                {/* Sensors */}
                <div>
                  <p className="font-semibold text-black/50 uppercase tracking-wide mb-2">Sensors (I²C / SPI)</p>
                  <div className="flex flex-col gap-2">
                    {["IMU", "Barometer", "Magnetometer", "GPS"].map((s) => (
                      <div key={s} className="rounded-lg border border-black/15 px-3 py-2 text-black/70">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actuators */}
                <div>
                  <p className="font-semibold text-black/50 uppercase tracking-wide mb-2">Actuators (PWM)</p>
                  <div className="flex flex-col gap-2">
                    {["Servo Motor ×1", "Servo Motor ×2"].map((s) => (
                      <div key={s} className="rounded-lg border border-black/15 px-3 py-2 text-black/70">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comms & Storage */}
                <div>
                  <p className="font-semibold text-black/50 uppercase tracking-wide mb-2">Comms &amp; Storage</p>
                  <div className="flex flex-col gap-2">
                    {["LoRa 443 MHz Radio", "SD Card (SPI)", "USB / UART Debug"].map((s) => (
                      <div key={s} className="rounded-lg border border-black/15 px-3 py-2 text-black/70">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-black/50">
              Figure 2 — Flight computer block diagram showing MCU, RTOS tasks, sensors, actuators, and comms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Schematic & layout</h2>
            <p className="mt-3 text-black/70">
              The schematic was drawn in KiCad, with separate sheets for power, MCU, sensors, and connectors. The 4-layer layout follows a signal / ground / power / signal stackup with pour zones and stitching vias isolating the servo power domain from the sensor domain.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <div className="relative h-[280px] w-full overflow-hidden rounded-3xl bg-black/5">
                  <Image
                    src="/pcb.png"
                    alt="PCB schematic"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 text-sm text-black/50">Figure 3 — Schematic (replace with schematic screenshot)</p>
              </div>
              <div>
                <div className="relative h-[280px] w-full overflow-hidden rounded-3xl bg-black/5">
                  <Image
                    src="/pcb.png"
                    alt="PCB routing layout"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 text-sm text-black/50">Figure 4 — Routing layout (replace with routing screenshot)</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Design & implementation</h2>

            {/* Version 1 */}
            <div className="mt-6 rounded-3xl bg-white/90 p-6 shadow-sm space-y-5">
              <div>
                <span className="inline-block rounded-full bg-black/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black/60">Version 1</span>
                <h3 className="mt-2 text-lg font-semibold">Initial design</h3>
                <p className="mt-2 text-sm text-black/70">
                  The first version took aproximatly 3 weeks and contained numerous sub revisisons due to new information being learned and also input from more experienced PCB designers. This version seeked to accomplish all the goals set out above but also recognized the likley hood of a mistake or design over
                  sight occuring. Once the PCB was manufactured and recived immediately issues were found, one of the most blatent flaws was the ESD diode packages used for the USB port was wired incorecctly, resulting in ground going to VCC and vice versa
                  as a result the diode began to smoke and the USB lines did not work for that PCB, though power was still delivered due to the wiring method. The two other major flaws were first the external oscilator which was wired incorectly and would not be usable meaning the internal oscilator would need to be used. The third major flaw came with the SD card
                  which was also wired incorrectly. Additionally other ease of life issues also cropped up like the choice to go with micro USB rather than the more common USB-C and issues with wiring the serial wire debug pins for debug.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-black/80 mb-2">What works</h4>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-black/70">
                    <li>STM32 boots and enumerates all sensors over I²C and SPI</li>
                    <li>3.3 V regulator provides stable power under sensor load</li>
                    <li>Sensors were able to return accurate data</li>
                    <li>Radio and GPS were both able to be turned on and could send/recive data</li>
                    <li>High side switch & 7.4V rail worked</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-black/80 mb-2">What needs to change</h4>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-black/70">
                    <li>Ensure proper verification and validation, rereading of data sheets and wiring guides</li>
                    <li>Additonal silkscreen needed for info/debug allowing other to also use the PCB</li>
                    <li>Fix of USB ESD Diode wiring</li>
                    <li>Add reverse polarity protection to 3.3V rail</li>
                    <li>Fix the wiring issues with the Oscilator and SD card  </li>
                    <li>Change Micro USB port to USB C</li>
                    <li>Add more I/O port and also break out a data line (I2C or SPI)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Version 2 */}
            <div className="mt-4 rounded-3xl bg-white/90 p-6 shadow-sm space-y-5">
              <div>
                <span className="inline-block rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">Version 2</span>
                <h3 className="mt-2 text-lg font-semibold">Revised design</h3>
                <p className="mt-2 text-sm text-black/70">
                    Version 2 fixed many of the issue faced in version 1 and is the fligh board that will be used going forward for active control systems. The biggest change came from the verification and validation, an addequate amount of design time was spent making sure the data sheets were followed and check with more experienced individuals were also preformed.
                    This verison also switched out the Inertial measurement unit due to shortages with the original one (BMI088 to ST LSM6DSO32). It aslo contained more information of the board itself making it easier for peopel to hook up the Serial wire debug pins without needing a schematic. The USB port was also switched to a USB-C port which made it much easier to 
                    connect to rather than the now hard to find micro USB. More imporovements were also made to traces and to ESD protection as I learned more in the time between the version, along with actual reverse polarity protection being provied to the 3.3 rail.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-black/80 mb-2">Future plans</h4>
                <ul className="list-disc space-y-1 pl-5 text-sm text-black/70">
                  <li>Validate LoRa telemetry link end-to-end with the ground station</li>
                  <li>Conduct full hardware-in-the-loop (HIL) test of the control loop with live sensor data</li>
                  <li>Characterise IMU noise floor and fine-tune Kalman filter covariance matrices</li>
                  <li>Flight-test the board in a sub-scale rocket before the full canard flight</li>
                  <li>Evaluate adding a secondary IMU for redundancy and cross-validation</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Challenges</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h3 className="font-semibold">Mixed-signal noise</h3>
                <p className="mt-2 text-sm text-black/70">
                  The 7.4 V servo rail introduced switching noise that corrupted IMU readings on V1. Solved in V2 by splitting the ground plane at the power entry point, adding stitching vias around the servo driver, and routing the sensor I²C lines away from high-current traces.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h3 className="font-semibold">Real-time scheduling under tight loop budgets</h3>
                <p className="mt-2 text-sm text-black/70">
                  Meeting the control loop deadline while simultaneously polling sensors, running the estimator, and logging to SD required careful RTOS task prioritisation. Sensor polling and actuator commands were given the highest priority; SD logging was deferred to a low-priority task with a ring buffer to prevent blocking.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h3 className="font-semibold">LoRa footprint error</h3>
                <p className="mt-2 text-sm text-black/70">
                  A pin-mapping mismatch between the chosen LoRa module and the KiCad footprint rendered the radio non-functional on V1. Identified through continuity testing and datasheet cross-referencing; the footprint was corrected and design rule checks were tightened for V2.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <h3 className="font-semibold">SD card signal integrity</h3>
                <p className="mt-2 text-sm text-black/70">
                  SPI lines to the SD card showed ringing at higher clock speeds due to missing series termination. Added 33 Ω resistors on the CLK and MOSI lines in V2, which cleaned up the waveform and eliminated intermittent write failures.
                </p>
              </div>
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

        </article>

        {/* Right sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl bg-white/90 p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-black/60">
              Skills demonstrated
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-black/70">
              <li>• PCB schematic & layout (KiCad, Altium)</li>
              <li>• 4-layer mixed-signal stackup design</li>
              <li>• Power electronics & regulator selection</li>
              <li>• SPI / I²C sensor integration</li>
              <li>• PWM actuator control</li>
              <li>• RTOS task design & scheduling</li>
              <li>• Embedded C firmware (STM32 HAL)</li>
              <li>• Signal integrity & EMI mitigation</li>
              <li>• ESD / TVS protection design</li>
              <li>• Hardware bring-up & bench testing</li>
              <li>• Design-rule checking & fab handoff</li>
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
