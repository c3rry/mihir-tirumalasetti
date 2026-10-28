"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { PERSONAL_INFO } from "@/data/resume";
import confetti from "canvas-confetti";
import {
  Sun,
  Moon,
  Sparkles,
  Printer,
  Mail,
  BookOpen,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export function BroadsheetHeader() {
  const { theme, toggleTheme } = useTheme();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(today.toLocaleDateString("en-US", options));
  }, []);

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.2 },
      colors: ["#b91c1c", "#1d4ed8", "#059669", "#d97706", "#7c3aed"],
    });
  };

  return (
    <header className="w-full border-b border-nyt-ink/20 dark:border-nyt-darkRule transition-colors duration-200">
      {/* Top Ear Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 border-b border-nyt-ink/10 dark:border-nyt-darkRule/60 text-xs font-mono tracking-tight flex flex-wrap items-center justify-between gap-2 text-nyt-muted dark:text-nyt-darkMuted">
        {/* Left ear */}
        <div className="flex items-center gap-3">
          <span className="font-semibold text-nyt-ink dark:text-nyt-darkInk">
            📍 Richardson, TX
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">
            74°F • Clear Skies • ML Compute Humidity: Optimal
          </span>
        </div>

        {/* Center edition tag */}
        <div className="hidden lg:flex items-center gap-2">
          <span className="uppercase font-bold tracking-widest text-[10px] bg-red-100 text-red-800 dark:bg-red-950/80 dark:text-red-300 px-2 py-0.5 rounded-sm border border-red-200 dark:border-red-900">
            LATE RESEARCH EDITION
          </span>
          <span>{PERSONAL_INFO.volume}</span>
        </div>

        {/* Right actions: Theme toggle + Confetti + Print */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto sm:ml-0">
          <button
            onClick={triggerCelebration}
            className="flex items-center gap-1 px-2.5 py-1 rounded border border-nyt-ink/20 dark:border-nyt-darkRule hover:bg-amber-100/70 dark:hover:bg-amber-950/40 text-nyt-ink dark:text-nyt-darkInk text-[11px] font-sans transition-all duration-150"
            title="Trigger celebratory confetti"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span className="hidden md:inline">Celebrate</span>
          </button>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1 px-2.5 py-1 rounded border border-nyt-ink/20 dark:border-nyt-darkRule hover:bg-nyt-paperTint dark:hover:bg-nyt-darkTint text-nyt-ink dark:text-nyt-darkInk text-[11px] font-sans transition-all duration-150"
            title="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Print Dispatch</span>
          </button>

          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-3 py-1 rounded font-serif font-medium border border-nyt-ink dark:border-nyt-darkRule bg-white dark:bg-nyt-darkCard hover:bg-neutral-100 dark:hover:bg-nyt-darkTint text-nyt-ink dark:text-nyt-darkInk text-[11px] shadow-sm transition-all duration-200"
            aria-label="Toggle Edition Mode"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Morning Broadsheet</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-600" />
                <span>Evening Broadside</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Date & Motto Sub-header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 pb-1 flex flex-col sm:flex-row items-center justify-between text-xs text-nyt-muted dark:text-nyt-darkMuted border-b border-nyt-ink/10 dark:border-nyt-darkRule">
        <div className="font-mono text-center sm:text-left mb-1 sm:mb-0">
          {currentDate || "Tuesday, October 27, 2026"}
        </div>
        <div className="italic font-serif tracking-wide text-center">
          &ldquo;{PERSONAL_INFO.latinMotto}&rdquo;
        </div>
        <div className="font-mono text-center sm:text-right hidden sm:block">
          Dallas Metroplex & Global Wire
        </div>
      </div>

      {/* Grand Masthead */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-center">
        <a href="#front-page" className="group inline-block">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-nyt-ink dark:text-nyt-darkInk group-hover:opacity-90 transition-opacity">
            {PERSONAL_INFO.editionTitle}
          </h1>
        </a>

        {/* Subtitle Deck */}
        <div className="mt-3 flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-xs sm:text-sm font-mono uppercase tracking-widest text-nyt-muted dark:text-nyt-darkMuted">
          <span className="text-red-700 dark:text-red-400 font-bold">Enterprise ML</span>
          <span>•</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold">3D Neuroanatomy</span>
          <span>•</span>
          <span className="text-blue-700 dark:text-blue-400 font-bold">Multimodal AI</span>
          <span>•</span>
          <span className="text-purple-700 dark:text-purple-400 font-bold">IoT Systems</span>
        </div>

        {/* Social / Quick Action Strip */}
        <div className="mt-4 flex items-center justify-center gap-4 text-xs font-mono">
          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-blue-700 dark:text-blue-400 hover:underline"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span>/</span>
          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-nyt-ink dark:text-nyt-darkInk hover:underline"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span>/</span>
          <a
            href={PERSONAL_INFO.links.labWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 hover:underline"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Ganglia Guardian Lab</span>
          </a>
          <span>/</span>
          <a
            href={`mailto:${PERSONAL_INFO.links.email}`}
            className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 hover:underline"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Desk</span>
          </a>
        </div>
      </div>

      {/* Classic NYT Double Rules with Section Navigation */}
      <div className="border-t-4 border-b-2 border-double border-nyt-ink dark:border-nyt-darkRule bg-nyt-paperTint/50 dark:bg-nyt-darkTint/40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <ul className="flex items-center justify-center sm:justify-between flex-wrap gap-x-6 gap-y-2 py-2 text-xs sm:text-sm font-serif font-bold tracking-wide uppercase text-nyt-ink dark:text-nyt-darkInk">
            <li>
              <a
                href="#front-page"
                className="hover:text-red-700 dark:hover:text-red-400 transition-colors pb-1 border-b-2 border-transparent hover:border-red-700 dark:hover:border-red-400"
              >
                Front Page
              </a>
            </li>
            <li>
              <a
                href="#experience-timeline"
                className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors pb-1 border-b-2 border-transparent hover:border-blue-700 dark:hover:border-blue-400"
              >
                Experience Timeline
              </a>
            </li>
            <li>
              <a
                href="#projects-catalog"
                className="hover:text-purple-700 dark:hover:text-purple-400 transition-colors pb-1 border-b-2 border-transparent hover:border-purple-700 dark:hover:border-purple-400"
              >
                Investigative Projects
              </a>
            </li>
            <li>
              <a
                href="#research-spotlight"
                className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors pb-1 border-b-2 border-transparent hover:border-emerald-700 dark:hover:border-emerald-400"
              >
                Research & Publications
              </a>
            </li>
            <li>
              <a
                href="#technical-ledger"
                className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors pb-1 border-b-2 border-transparent hover:border-amber-700 dark:hover:border-amber-400"
              >
                Technical Ledger
              </a>
            </li>
            <li>
              <a
                href="#editorial-board"
                className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors pb-1 border-b-2 border-transparent hover:border-cyan-700 dark:hover:border-cyan-400"
              >
                Editorial Desk
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Interactive Financial & Data Science Ticker */}
      <div className="bg-nyt-ink dark:bg-nyt-darkCard text-white dark:text-neutral-200 py-1.5 px-4 overflow-hidden border-b border-nyt-ink dark:border-nyt-darkRule">
        <div className="max-w-7xl mx-auto flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-amber-400 shrink-0">
            <Terminal className="w-3.5 h-3.5" />
            <span>DISPATCH TICKER:</span>
          </div>

          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar whitespace-nowrap text-[11px]">
            <span className="inline-flex items-center gap-1">
              <span className="text-neutral-400">ALLY FINANCIAL:</span>
              <span className="text-emerald-400 font-bold">$1B+ ORIGINATION LIFT ▲</span>
            </span>
            <span className="text-neutral-600">|</span>
            <span className="inline-flex items-center gap-1">
              <span className="text-neutral-400">GANGLIA GUARDIAN LAB:</span>
              <span className="text-emerald-400 font-bold">500GB+ 3D CONNECTOMES ▲</span>
            </span>
            <span className="text-neutral-600">|</span>
            <span className="inline-flex items-center gap-1">
              <span className="text-neutral-400">SPORTS ANALYTICS:</span>
              <span className="text-cyan-400 font-bold">GEMMA 2 QLORA 98.8% ▲</span>
            </span>
            <span className="text-neutral-600">|</span>
            <span className="inline-flex items-center gap-1">
              <span className="text-neutral-400">JINDAL SCHOOL:</span>
              <span className="text-amber-400 font-bold">RESEARCH AWARD HONOREE ★</span>
            </span>
            <span className="text-neutral-600">|</span>
            <span className="inline-flex items-center gap-1">
              <span className="text-neutral-400">ALLEN INST. & COLUMBIA:</span>
              <span className="text-purple-400 font-bold">CONNECTOME CO-AUTHOR ▲</span>
            </span>
            <span className="text-neutral-600">|</span>
            <span className="inline-flex items-center gap-1">
              <span className="text-neutral-400">UTSW BIODESIGN:</span>
              <span className="text-emerald-400 font-bold">ZERO-LATENCY LORA TELEMETRY ▲</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
