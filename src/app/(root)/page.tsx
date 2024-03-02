// Sections
import { Spotlight } from "@/components/ui/SpotLight";
import HeroSection from "./sections/hero";
import SkillsSection from "./sections/skills";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <HeroSection />
      {/* Skills */}
      <SkillsSection />
      {/* Projects */}
      {/* Personal Development */}
      {/* Footer */}
    </>
  );
}
