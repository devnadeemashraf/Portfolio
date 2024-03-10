// Sections
import GistSection from "./sections/gist";
import About from "./sections/about";
import SkillsSection from "./sections/skills";

export default function Home() {
  return (
    <div className="w-full h-full overflow-auto">
      {/* Hero Section */}
      <GistSection />

      {/* Skills */}
      {/* <SkillsSection /> */}
      {/* Projects */}
      {/* Personal Development */}
      {/* Footer */}
    </div>
  );
}
