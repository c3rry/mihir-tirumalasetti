"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/resume";
import { ProjectModal } from "./ProjectModal";
import {
  Award,
  Search,
  Filter,
  ArrowUpRight,
} from "lucide-react";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { key: "all", label: "All Investigations", count: PROJECTS.length },
    {
      key: "cv-neuro",
      label: "Vision & Connectomics",
      count: PROJECTS.filter((p) => p.category === "cv-neuro").length,
    },
    {
      key: "llm-agents",
      label: "Autonomous LLM Agents",
      count: PROJECTS.filter((p) => p.category === "llm-agents").length,
    },
    {
      key: "data-systems",
      label: "IoT & Systems Telemetry",
      count: PROJECTS.filter((p) => p.category === "data-systems").length,
    },
    {
      key: "predictive",
      label: "Predictive Analytics & FinTech",
      count: PROJECTS.filter((p) => p.category === "predictive").length,
    },
    {
      key: "genai",
      label: "Generative AI & 3D",
      count: PROJECTS.filter((p) => p.category === "genai").length,
    },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory =
      selectedCategory === "all" || proj.category === selectedCategory;

    const matchesSearch =
      searchQuery.trim() === "" ||
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.bullets.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase())) ||
      proj.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects-catalog" className="py-12 border-b-2 border-nyt-ink/20 dark:border-nyt-darkRule">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-purple-700 dark:text-purple-400">
            SECTION III • SPECIAL INVESTIGATIONS
          </span>
          <span className="text-nyt-muted dark:text-nyt-darkMuted">•</span>
          <span className="font-mono text-xs text-nyt-muted dark:text-nyt-darkMuted">
            APPLIED ML, MEDICAL SYSTEMS & GENERATIVE AI
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b-2 border-nyt-ink dark:border-nyt-darkRule">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-nyt-ink dark:text-nyt-darkInk tracking-tight">
              Investigative Projects Archive
            </h2>
            <p className="font-headline italic text-neutral-600 dark:text-neutral-400 mt-1 text-base sm:text-lg">
              Architectures, algorithmic models, and deployed engineering systems designed to solve empirical challenges.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search projects by tech, model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs font-mono bg-white dark:bg-nyt-darkCard border border-nyt-ink/30 dark:border-nyt-darkRule rounded focus:outline-none focus:ring-1 focus:ring-purple-600 dark:focus:ring-purple-400 text-nyt-ink dark:text-nyt-darkInk placeholder-neutral-400"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-4 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          <Filter className="w-3.5 h-3.5 text-neutral-400 shrink-0 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 rounded-sm text-xs font-serif font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-150 border ${
                selectedCategory === cat.key
                  ? "bg-purple-900 text-white border-purple-950 dark:bg-purple-600 dark:border-purple-500 shadow-sm"
                  : "bg-white dark:bg-nyt-darkCard text-neutral-700 dark:text-neutral-300 border-nyt-ink/20 dark:border-nyt-darkRule hover:bg-neutral-100 dark:hover:bg-nyt-darkTint"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full p-8 text-center bg-white dark:bg-nyt-darkCard border border-nyt-ink/10 dark:border-nyt-darkRule rounded">
            <p className="font-serif italic text-neutral-600 dark:text-neutral-400">
              No investigative projects matched your search &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-3 px-4 py-1.5 text-xs font-mono underline text-purple-600 dark:text-purple-400"
            >
              Reset project filters
            </button>
          </div>
        ) : (
          filteredProjects.map((project, idx) => {
            const isFeaturedLead = project.featured && idx === 0 && selectedCategory === "all";

            return (
              <article
                key={project.id}
                className={`group flex flex-col justify-between bg-white dark:bg-nyt-darkCard border border-nyt-ink/20 dark:border-nyt-darkRule rounded p-6 shadow-sm hover:shadow-md transition-all duration-200 ${
                  isFeaturedLead
                    ? "md:col-span-2 lg:col-span-2 border-t-4 border-t-purple-700 dark:border-t-purple-400"
                    : "hover:-translate-y-1"
                }`}
              >
                <div>
                  {/* Eyebrow & Date */}
                  <div className="flex items-center justify-between text-xs font-mono pb-2 mb-3 border-b border-nyt-ink/10 dark:border-nyt-darkRule text-neutral-500 dark:text-neutral-400">
                    <span className="font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 text-[10px]">
                      {project.categoryLabel}
                    </span>
                    <span>{project.dates}</span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-serif text-xl sm:text-2xl font-black text-nyt-ink dark:text-nyt-darkInk leading-tight mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Award or Paper Ribbon */}
                  {project.awardOrPaper && (
                    <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 rounded text-amber-900 dark:text-amber-200 text-xs font-mono font-bold">
                      <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>{project.awardOrPaper}</span>
                    </div>
                  )}

                  {/* Metric Callout */}
                  <div className="mb-3 p-2.5 bg-purple-50/70 dark:bg-purple-950/20 border-l-2 border-purple-600 dark:border-purple-400 rounded-r text-xs font-mono font-bold text-purple-900 dark:text-purple-200">
                    ★ {project.headlineMetric}
                  </div>

                  {/* Summary */}
                  <p className="font-headline text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                    <strong className="font-mono text-xs uppercase tracking-wider text-nyt-ink dark:text-nyt-darkInk mr-1">
                      {project.dateline} —
                    </strong>
                    {project.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 mb-4 text-xs font-headline text-neutral-700 dark:text-neutral-300">
                    {project.bullets.slice(0, isFeaturedLead ? 3 : 2).map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <span className="text-purple-600 dark:text-purple-400 mt-0.5">•</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech stack chips */}
                  <div className="pt-3 border-t border-nyt-ink/10 dark:border-nyt-darkRule flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded border border-neutral-200 dark:border-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-neutral-500">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Read Article Trigger */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-neutral-100 dark:bg-neutral-800/80 hover:bg-purple-100 dark:hover:bg-purple-950/40 text-neutral-900 dark:text-neutral-100 font-serif font-bold text-xs uppercase tracking-wider rounded border border-neutral-300 dark:border-neutral-700 transition-colors"
                  >
                    <span>Inspect Dispatch Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  </button>
                </div>
              </article>
            );
          })
        )}
      </div>

      {/* Modal View */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
