"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/resume";
import { X, Award, CheckCircle2, Terminal, Calendar } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-nyt-paper dark:bg-nyt-darkCard border-2 border-nyt-ink dark:border-nyt-darkRule rounded shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-nyt-ink dark:border-nyt-darkRule">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-700 dark:text-red-400">
              SPECIAL DISPATCH ARCHIVE
            </span>
            <span className="text-neutral-400">•</span>
            <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
              {project.categoryLabel}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Headline & Dates */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{project.dates}</span>
            <span>•</span>
            <span className="font-bold">{project.dateline}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-nyt-ink dark:text-nyt-darkInk leading-tight">
            {project.title}
          </h2>

          {project.awardOrPaper && (
            <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 rounded text-xs font-mono font-bold">
              <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>{project.awardOrPaper}</span>
            </div>
          )}
        </div>

        {/* Headline Metric Ribbon */}
        <div className="p-3.5 mb-6 bg-emerald-50 dark:bg-emerald-950/30 border-l-4 border-emerald-600 dark:border-emerald-500 rounded text-emerald-900 dark:text-emerald-200 font-mono text-xs sm:text-sm font-bold flex items-center justify-between">
          <span>Primary Verified Output:</span>
          <span className="text-sm sm:text-base font-serif font-black">
            {project.headlineMetric}
          </span>
        </div>

        {/* Summary Lead Article */}
        <div className="prose dark:prose-invert max-w-none mb-6">
          <p className="font-headline text-base sm:text-lg italic text-neutral-800 dark:text-neutral-200 leading-relaxed pb-3 border-b border-nyt-ink/10 dark:border-nyt-darkRule">
            &ldquo;{project.summary}&rdquo;
          </p>
        </div>

        {/* Technical Architecture & Results */}
        <div className="space-y-4 mb-6">
          <h3 className="font-serif font-bold text-base uppercase tracking-wide flex items-center gap-2 text-nyt-ink dark:text-nyt-darkInk">
            <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Technical Methodology & Implementation</span>
          </h3>

          <div className="space-y-2.5">
            {project.bullets.map((bullet, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 bg-white dark:bg-nyt-darkTint border border-nyt-ink/10 dark:border-nyt-darkRule rounded"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <p className="font-headline text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Cloud */}
        <div className="pt-4 border-t border-nyt-ink/20 dark:border-nyt-darkRule">
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-2">
            Tooling, Frameworks & Artifacts:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-mono bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-4 border-t-2 border-double border-nyt-ink dark:border-nyt-darkRule flex items-center justify-between">
          <div className="font-mono text-[11px] text-neutral-500">
            Archive File #{project.id.toUpperCase()}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-nyt-ink dark:bg-white text-white dark:text-nyt-ink font-serif font-bold text-xs uppercase tracking-wider rounded shadow hover:opacity-90 transition-opacity"
          >
            Return to Broadsheet
          </button>
        </div>
      </div>
    </div>
  );
}
