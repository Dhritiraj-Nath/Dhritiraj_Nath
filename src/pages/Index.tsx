import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import CursorFollower from "@/components/CursorFollower";
import BlogSection from "@/components/BlogSection";
import YouTubeSection from "@/components/YouTubeSection";
import Background3DEffect from "@/components/Background3DEffect";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import PageEndEffect from "@/components/PageEndEffect";
import DeploymentLogs from "@/components/DeploymentLogs";
import BootScreen from "@/components/BootScreen";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const Index = () => {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <div className="min-h-screen relative">
      <AnimatePresence mode="wait">
        {!isBooted && <BootScreen onComplete={() => setIsBooted(true)} />}
      </AnimatePresence>
      
      {isBooted && (
        <>
          <Background3DEffect />
          <CursorFollower />
          <ThemeSwitcher />
          <DeploymentLogs />
          <Navbar />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <BlogSection />
          <YouTubeSection />
          <ContactSection />
          <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
            © 2026 Dhritiraj Nath. All rights reserved.
          </footer>
          <PageEndEffect />
        </>
      )}
    </div>
  );
};

export default Index;
