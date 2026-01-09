import Image from "next/image";
import IntroSection from "@/Components/Intro";
import AboutSection from "@/Components/AboutSection";
import ProjectsSection from "@/Components/Projects";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <h1>My Resume Website</h1>
      <p>Engineering portfolio and blog</p>
    </main>
  );
}
