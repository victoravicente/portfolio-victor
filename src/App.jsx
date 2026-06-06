import { SHOW_CERTS } from "./constants";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { CertsSection } from "./components/CertsSection";
import { ExtraSection } from "./components/ExtraSection";
import { Footer } from "./components/Footer";
import { ResumeDocument } from "./components/ResumeDocument";

export default function App() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        {SHOW_CERTS && <CertsSection />}
        <ExtraSection />
      </main>
      <Footer />
      <ResumeDocument />
    </div>
  );
}
