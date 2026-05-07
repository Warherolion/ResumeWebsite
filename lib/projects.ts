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
    slug: "capstone-attitude-control-system",
    title: "Attitude Control System — On-Orbit Servicing Spacecraft",
    subtitle:
      "Design and simulation of a closed-loop 3-axis AOCS using reaction wheels and thrusters for an autonomous spacecraft performing rendezvous and docking in GEO.",
    tags: ["Space Systems", "Trades", "Mission Design"],
    year: "2026",
    image: "/GeoDude.png",
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
    title: "Cerberus Constellation — Solar Monitoring & Relay",
    subtitle:
      "Three-satellite heliocentric constellation at Earth-Sun L4/L5 and Mars-Sun L5 for continuous solar weather monitoring and Earth–Mars communication relay. Orbit design and trajectory optimisation in Ansys STK.",
    tags: ["Space Systems", "Mission Design", "Orbital Mechanics", "STK", "Lagrange Points"],
    year: "2025",
    image: "/STKPlot.png",
  },
  // Add more projects here...
];
