export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  year?: string;
  image: string; // path in /public
};

export const PROJECTS: Project[] = [
  {
    slug: "Active-Control",
    title: "MetRocketry — Active Control Rocket",
    subtitle:
      "Canard-based stabilization with STM32 flight computer, IMU/GPS, and gain-scheduled control.",
    tags: ["Controls", "Embedded", "STM32", "Simulink"],
    year: "2025–2026",
    image: "/CadModel2.png",
  },
  {
    slug: "SpaceSystemsDesign",
    title: "Capstone: On Orbit Spacecraft Servicer",
    subtitle:
      "Capstone design of an autonomous on-orbit servicing vehicle, covering rendezvous and proximity operations, GNC architecture, and subsystem trades for propulsion and robotic docking.",
    tags: ["Space Systems", "Trades", "Mission Design"],
    year: "2025",
    image: "/projects/cerberus.jpg",
  },
  {
    slug: "FlightComputerPCB",
    title: "Flight Computer PCB",
    subtitle:
      "4-layer mixed-signal PCB: power distribution, sensors, connectors, ESD/TVS protection, routing constraints.",
    tags: ["PCB", "KiCad", "Power", "Sensors"],
    year: "2025-2026",
    image: "/pcb.png",
  },
  {
    slug: "Solar-Relay",
    title: "Solar Monitoring Relay Network",
    subtitle:
      "Space systems design of a small-satellite relay constellation for continuous solar weather monitoring, covering orbit design, link budget, power subsystem, and mission architecture.",
    tags: ["Space Systems", "Mission Design", "Orbital Mechanics", "Communications"],
    year: "2025",
    image: "/projects/solar-relay-hero.png",
  },
  // Add more projects here...
];
