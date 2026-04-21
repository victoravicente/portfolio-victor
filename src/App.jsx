import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./constants";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { CertsSection } from "./components/CertsSection";
import { ExtraSection } from "./components/ExtraSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <CertsSection />
      <ExtraSection />
      <Footer />
    </ThemeProvider>
  );
}
