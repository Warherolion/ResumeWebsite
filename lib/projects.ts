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
    image: "/projects/metrocket.jpg",
  },
  {
    slug: "SpaceSystemsDesign",
    title: "Spacecraft Mission Design project: Solar Monitoring Constellation",
    subtitle:
      "Concept mission design and subsystem trades for multi-point solar monitoring and comms.",
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
    image: "/projects/pcb.jpg",
  },
  // Add more projects here...
];
