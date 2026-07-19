"use client";

import { useCallback, useEffect, useState } from "react";
import { AmbientExperience } from "@/components/AmbientExperience";
import { AboutSection } from "@/components/AboutSection";
import { BeyondPortfolioBridge } from "@/components/BeyondPortfolioBridge";
import { ContactSection } from "@/components/ContactSection";
import { CVSection } from "@/components/CVSection";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { WisdomExperience } from "@/components/WisdomExperience";

export function PortfolioPageClient() {
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  const openLibrary = useCallback(() => {
    setIsLibraryOpen(true);
  }, []);

  const closeLibrary = useCallback(() => {
    setIsLibraryOpen(false);

    window.setTimeout(() => {
      document.getElementById("beyond-portfolio")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 0);
  }, []);

  useEffect(() => {
    if (!isLibraryOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLibraryOpen]);

  return (
    <>
      <AmbientExperience />
      <Navbar />
      <main>
        <Hero />
        <BeyondPortfolioBridge onEnterLibrary={openLibrary} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CVSection />
        <ContactSection />
      </main>
      <footer className="relative overflow-hidden border-t border-line bg-background py-8">
        <div className="loading-divider absolute inset-x-0 top-0" />
        <div className="section-shell relative flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-ink">
            Built around one idea: <span className="text-gold">still loading.</span>
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/80">
            Version 21 / System active
          </p>
          <p>© 2026 Edmond Ilbawi. All rights reserved.</p>
        </div>
      </footer>

      {isLibraryOpen ? <WisdomExperience onClose={closeLibrary} /> : null}
    </>
  );
}
