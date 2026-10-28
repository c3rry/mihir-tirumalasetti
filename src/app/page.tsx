"use client";

import React from "react";
import { ThemeProvider } from "@/components/ThemeContext";
import { BroadsheetHeader } from "@/components/BroadsheetHeader";
import { FrontPageLead } from "@/components/FrontPageLead";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ResearchSpotlight } from "@/components/ResearchSpotlight";
import { SkillsLedger } from "@/components/SkillsLedger";
import { EditorialFooter } from "@/components/EditorialFooter";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-nyt-paper dark:bg-nyt-darkPaper text-nyt-ink dark:text-nyt-darkInk newsprint-texture transition-colors duration-200">
        {/* Masthead Header & Ticker */}
        <BroadsheetHeader />

        {/* Main Broadsheet Page Container */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 1: Front Page Cover Story & Key Indicators */}
          <FrontPageLead />

          {/* Section 2: Chronological Experience Timeline */}
          <ExperienceTimeline />

          {/* Section 3: Clean Investigative Projects Archive */}
          <ProjectsSection />

          {/* Section 4: Academic & Medical Research Spotlight */}
          <ResearchSpotlight />

          {/* Section 5: Technical Arsenal Ledger */}
          <SkillsLedger />

          {/* Section 6: Editorial Desk, Inquiries & Broadsheet Colophon */}
          <EditorialFooter />
        </main>
      </div>
    </ThemeProvider>
  );
}
