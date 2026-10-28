"use client";

import React, { useState } from "react";
import { POSITIONS, Position } from "@/data/resume";
import {
  Calendar,
  MapPin,
  ExternalLink,
  Search,
  Filter,
  Building,
} from "lucide-react";

export function ExperienceTimeline() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { key: "all", label: "All Dispatches", count: POSITIONS.length },
    {
      key: "enterprise",
      label: "Enterprise & FinTech",
      count: POSITIONS.filter((p) => p.category === "enterprise").length,
    },
    {
      key: "research",
      label: "Academic & Medical Research",
      count: POSITIONS.filter((p) => p.category === "research").length,
    },
    {
      key: "leadership",
      label: "Leadership & Governance",
      count: POSITIONS.filter((p) => p.category === "leadership").length,
    },
    {
      key: "mentorship",
      label: "Mentorship & Fellowships",
      count: POSITIONS.filter((p) => p.category === "mentorship" || p.category === "academics").length,
    },
  ];

  const filteredPositions = POSITIONS.filter((pos) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "mentorship"
        ? pos.category === "mentorship" || pos.category === "academics"
        : pos.category === selectedCategory);

    const matchesSearch =
      searchQuery.trim() === "" ||
      pos.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pos.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pos.descriptionBullets.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pos.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: Position["category"]) => {
    switch (category) {
      case "enterprise":
        return "border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300";
      case "research":
        return "border-emerald-600 dark:border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300";
      case "leadership":
        return "border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300";
      case "mentorship":
        return "border-purple-600 dark:border-purple-500 bg-purple-50 dark:bg-purple-950/30 text-purple-800 dark:text-purple-300";
      case "academics":
        return "border-rose-600 dark:border-rose-500 bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300";
      default:
        return "border-neutral-500 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200";
    }
  };

  return (
    <section id="experience-timeline" className="py-12 border-b-2 border-nyt-ink/20 dark:border-nyt-darkRule">
      {/* Editorial Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            SECTION II • CAREER DISPATCHES
          </span>
          <span className="text-nyt-muted dark:text-nyt-darkMuted">•</span>
          <span className="font-mono text-xs text-nyt-muted dark:text-nyt-darkMuted">
            CHRONOLOGICAL RECORD 2023–2026
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b-2 border-nyt-ink dark:border-nyt-darkRule">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-nyt-ink dark:text-nyt-darkInk tracking-tight">
              Experience & Professional Timeline
            </h2>
            <p className="font-headline italic text-neutral-600 dark:text-neutral-400 mt-1 text-base sm:text-lg">
              A comprehensive chronicle of enterprise internships, laboratory appointments, and campus governance.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search roles, tools, models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs font-mono bg-white dark:bg-nyt-darkCard border border-nyt-ink/30 dark:border-nyt-darkRule rounded focus:outline-none focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-400 text-nyt-ink dark:text-nyt-darkInk placeholder-neutral-400"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mt-4 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          <Filter className="w-3.5 h-3.5 text-neutral-400 shrink-0 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 rounded-sm text-xs font-serif font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-150 border ${
                selectedCategory === cat.key
                  ? "bg-nyt-ink dark:bg-white text-white dark:text-nyt-ink border-nyt-ink dark:border-white shadow-sm"
                  : "bg-white dark:bg-nyt-darkCard text-neutral-700 dark:text-neutral-300 border-nyt-ink/20 dark:border-nyt-darkRule hover:bg-neutral-100 dark:hover:bg-nyt-darkTint"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative">
        {/* Central Vertical Rule for broadsheet timeline */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-nyt-ink/20 dark:bg-nyt-darkRule" />

        <div className="space-y-8">
          {filteredPositions.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-nyt-darkCard border border-nyt-ink/10 dark:border-nyt-darkRule rounded">
              <p className="font-serif italic text-neutral-600 dark:text-neutral-400">
                No career dispatches matched your query &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-3 px-4 py-1.5 text-xs font-mono underline text-blue-600 dark:text-blue-400"
              >
                Reset search filters
              </button>
            </div>
          ) : (
            filteredPositions.map((pos) => {
              const categoryBadge = getCategoryColor(pos.category);
              return (
                <article
                  key={pos.id}
                  className="relative md:pl-20 group transition-all duration-200"
                >
                  {/* Timeline Node Dot */}
                  <div className="hidden md:flex absolute left-[26px] top-6 w-3.5 h-3.5 -translate-x-1/2 rounded-full border-2 border-nyt-paper dark:border-nyt-darkPaper bg-nyt-ink dark:bg-white ring-4 ring-neutral-200 dark:ring-neutral-800 group-hover:scale-125 transition-transform" />

                  {/* Broadsheet Entry Card */}
                  <div className="bg-white dark:bg-nyt-darkCard border border-nyt-ink/20 dark:border-nyt-darkRule rounded shadow-sm hover:shadow-md transition-shadow p-5 sm:p-6">
                    {/* Top Meta Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-nyt-ink/10 dark:border-nyt-darkRule text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded border text-[10px] font-bold uppercase tracking-wider ${categoryBadge}`}
                        >
                          {pos.employmentType}
                        </span>
                        <span className="text-nyt-muted dark:text-nyt-darkMuted flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{pos.dates}</span>
                          <span className="font-sans italic">({pos.duration})</span>
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 text-[11px]">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{pos.location}</span>
                      </div>
                    </div>

                    {/* Headline and Organization */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-black text-nyt-ink dark:text-nyt-darkInk leading-tight">
                          {pos.role}
                        </h3>
                        <div className="mt-1 flex items-center gap-2 font-serif text-base font-semibold text-neutral-800 dark:text-neutral-200">
                          <Building className="w-4 h-4 text-neutral-500" />
                          <span>{pos.organization}</span>
                          {pos.link && (
                            <a
                              href={pos.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline gap-0.5"
                            >
                              <span>Official Site</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Headline Metric Pill */}
                      {pos.headlineMetric && (
                        <div className="shrink-0 self-start px-3 py-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 rounded text-amber-900 dark:text-amber-200 text-xs font-mono font-bold">
                          ★ {pos.headlineMetric}
                        </div>
                      )}
                    </div>

                    {/* Dateline & Detailed Bullet Points */}
                    <div className="text-sm font-headline text-neutral-800 dark:text-neutral-200 space-y-2 mt-4 leading-relaxed">
                      {pos.descriptionBullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5">
                          <span className="font-mono text-neutral-400 dark:text-neutral-500 mt-1 select-none">
                            ▪
                          </span>
                          <p>
                            {bIdx === 0 && (
                              <strong className="font-mono text-xs uppercase tracking-wider text-nyt-ink dark:text-nyt-darkInk font-bold mr-1.5">
                                {pos.dateline} —
                              </strong>
                            )}
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Technology & Competency Tags */}
                    <div className="mt-5 pt-3 border-t border-nyt-ink/10 dark:border-nyt-darkRule flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mr-1">
                        Keywords:
                      </span>
                      {pos.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 text-[11px] font-mono bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 rounded-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
