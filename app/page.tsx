import Image from "next/image";
import IntroSection from "@/Components/Intro";
import AboutSection from "@/Components/AboutSection";
import ProjectsSection from "@/Components/Projects";


export default function Home() {
  return (
    <main>
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
