"use client";

import React from "react";
import { METRIC_HIGHLIGHTS, EDITORIAL_QUOTES } from "@/data/resume";
import {
  TrendingUp,
  Award,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

export function FrontPageLead() {
  return (
    <section id="front-page" className="py-8 border-b-2 border-nyt-ink/20 dark:border-nyt-darkRule">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Lead Story (Col 1-8) */}
        <div className="lg:col-span-8 lg:border-r lg:border-nyt-ink/20 dark:lg:border-nyt-darkRule lg:pr-8">
          {/* Eyebrow / Kicker */}
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-700 dark:text-red-400">
              LEAD REPORT • COVER STORY
            </span>
            <span className="text-nyt-muted dark:text-nyt-darkMuted">•</span>
            <span className="font-mono text-xs text-nyt-muted dark:text-nyt-darkMuted">
              EST. 2026 • UNIVERSITY OF TEXAS AT DALLAS
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-nyt-ink dark:text-nyt-darkInk mb-4">
            Data Scientist Bridges Enterprise Decisioning and 3D Neuroanatomy
          </h2>

          {/* Subhead / Deck */}
          <p className="font-headline italic text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-snug mb-5 pb-4 border-b border-nyt-ink/15 dark:border-nyt-darkRule">
            From uncovering a projected $1 billion enterprise loan origination lift at Ally Financial to mapping 500GB+ light-sheet microscopy connectomes at the Ganglia Guardian Lab.
          </p>

          {/* Byline & Dateline */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-nyt-muted dark:text-nyt-darkMuted mb-6 pb-2 border-b border-nyt-ink/10 dark:border-nyt-darkRule">
            <div>
              <span className="font-bold text-nyt-ink dark:text-nyt-darkInk">
                BY MIHIR TIRUMASETTI
              </span>
              <span className="ml-2 italic text-[11px]">
                Data Science & Cognitive Science Specialist
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for 2026 High-Impact Engineering Roles</span>
            </div>
          </div>

          {/* Editorial Article Body with Drop Cap */}
          <div className="prose dark:prose-invert max-w-none text-neutral-800 dark:text-neutral-200 font-headline text-base sm:text-lg leading-relaxed">
            <p className="drop-cap mb-4">
              <strong className="font-mono uppercase text-xs tracking-wider font-bold mr-1">
                RICHARDSON, Tex. —
              </strong>
              I am a Data Science student at the University of Texas at Dallas with a minor in Cognitive Science, specializing in machine learning engineering, computer vision, and advanced data analytics. I am passionate about architecting scalable ML pipelines and enterprise software to solve complex, real-world challenges.
            </p>

            <p className="mb-4">
              My professional journey unites rigorous financial computation with cutting-edge academic neuroscience. At <strong>Ally Financial</strong>, I engineered automated decisioning architectures for enterprise auto loan originations. Utilizing Python, Snowflake SQL, XGBoost, and Spark MLlib, I built highly interpretable risk models that analyzed 160 FICO variables to uncover over 1,000 market opportunities—projecting a <strong>$1 billion increase in enterprise loan originations</strong> while isolating $150 million in low-ROE risk segments via Shapley value (SHAP) analytics.
            </p>

            {/* Editorial Pull Quote */}
            <div className="my-6 p-5 border-l-4 border-amber-600 dark:border-amber-400 bg-amber-50/70 dark:bg-amber-950/20 rounded-r-md">
              <blockquote className="font-serif italic text-lg sm:text-xl text-neutral-900 dark:text-neutral-100 font-medium leading-snug">
                &ldquo;{EDITORIAL_QUOTES[0].quote}&rdquo;
              </blockquote>
              <div className="mt-2 font-mono text-xs text-amber-800 dark:text-amber-300 font-semibold uppercase tracking-wider">
                — {EDITORIAL_QUOTES[0].attribution} | {EDITORIAL_QUOTES[0].context}
              </div>
            </div>

            <p className="mb-4">
              In academic research, I lead the Volumetric Data Analysis team at the <strong>Neurobiology of Basal Ganglia Function and Dysfunction Lab</strong>. Our group automates PyTorch segmentation pipelines over 500GB+ of 3D light-sheet microscopy scans to construct comprehensive 2D connectomes in collaboration with researchers from the <strong>Allen Institute for Neural Dynamics</strong> and <strong>Columbia University</strong>. Concurrently, our dual-pipeline machine learning framework isolating early Parkinsonian behavioral deficits earned the prestigious <strong>Jindal School of Management Award</strong>.
            </p>

            <p>
              Complementing research and industry analytics, I directed operations for <strong>HackAI</strong> (scaling to 300+ attendees with $5,000 in corporate sponsorships) and co-managed the university&apos;s Student Service Fee fund as an appointed board member on <strong>SOFAB</strong>.
            </p>
          </div>

          {/* Quick Action Navigation */}
          <div className="mt-8 pt-4 border-t border-nyt-ink/20 dark:border-nyt-darkRule flex flex-wrap items-center gap-4">
            <a
              href="#experience-timeline"
              className="inline-flex items-center gap-2 px-4 py-2 bg-nyt-ink dark:bg-white text-white dark:text-nyt-ink font-serif font-bold text-sm rounded shadow hover:opacity-90 transition-opacity"
            >
              <span>Explore Chronological Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#projects-catalog"
              className="inline-flex items-center gap-2 px-4 py-2 border border-nyt-ink dark:border-nyt-darkRule bg-nyt-paperTint dark:bg-nyt-darkTint font-serif font-semibold text-sm rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            >
              <span>Investigative Projects Archive</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Side Column: Indicators & Briefs (Col 9-12) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Section Header */}
          <div className="border-b-2 border-nyt-ink dark:border-nyt-darkRule pb-1">
            <h3 className="font-serif font-bold text-lg uppercase tracking-wide flex items-center justify-between">
              <span>Financial & Technical Indicators</span>
              <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </h3>
            <p className="text-[11px] font-mono text-nyt-muted dark:text-nyt-darkMuted">
              Verified quantitative outcomes from field & lab deployments
            </p>
          </div>

          {/* Metric Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {METRIC_HIGHLIGHTS.map((metric, idx) => {
              const borderColors = [
                "border-emerald-600 dark:border-emerald-500",
                "border-blue-600 dark:border-blue-500",
                "border-purple-600 dark:border-purple-500",
                "border-amber-600 dark:border-amber-500",
                "border-rose-600 dark:border-rose-500",
                "border-cyan-600 dark:border-cyan-500",
              ];
              const tagColors = [
                "text-emerald-700 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-950/60",
                "text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-950/60",
                "text-purple-700 bg-purple-50 dark:text-purple-300 dark:bg-purple-950/60",
                "text-amber-700 bg-amber-50 dark:text-amber-300 dark:bg-amber-950/60",
                "text-rose-700 bg-rose-50 dark:text-rose-300 dark:bg-rose-950/60",
                "text-cyan-700 bg-cyan-50 dark:text-cyan-300 dark:bg-cyan-950/60",
              ];

              return (
                <div
                  key={idx}
                  className={`p-3.5 bg-white dark:bg-nyt-darkCard border-l-4 ${borderColors[idx % borderColors.length]} border border-nyt-ink/10 dark:border-nyt-darkRule rounded shadow-sm hover:translate-x-0.5 transition-transform`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${tagColors[idx % tagColors.length]}`}
                    >
                      {metric.tag}
                    </span>
                    <span className="font-serif text-2xl font-black tracking-tight text-nyt-ink dark:text-nyt-darkInk">
                      {metric.value}
                    </span>
                  </div>
                  <div className="font-serif font-bold text-sm text-neutral-900 dark:text-neutral-100">
                    {metric.label}
                  </div>
                  <p className="text-xs font-sans text-neutral-600 dark:text-neutral-400 mt-1 leading-snug">
                    {metric.subtext}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Academic & Affiliations Box */}
          <div className="p-4 bg-nyt-paperTint dark:bg-nyt-darkTint border border-nyt-ink/20 dark:border-nyt-darkRule rounded">
            <div className="flex items-center gap-2 mb-2 pb-1 border-b border-nyt-ink/15 dark:border-nyt-darkRule">
              <GraduationCap className="w-4 h-4 text-purple-700 dark:text-purple-400" />
              <h4 className="font-serif font-bold text-sm uppercase tracking-wide">
                Academic Dossier
              </h4>
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <span className="font-mono text-neutral-500 dark:text-neutral-400 block text-[10px] uppercase">
                  Institution
                </span>
                <span className="font-serif font-bold text-sm text-nyt-ink dark:text-nyt-darkInk">
                  The University of Texas at Dallas
                </span>
              </div>
              <div>
                <span className="font-mono text-neutral-500 dark:text-neutral-400 block text-[10px] uppercase">
                  Degree & Specialization
                </span>
                <span className="font-sans text-neutral-800 dark:text-neutral-200">
                  B.S. in Data Science • Minor in Cognitive Science
                </span>
              </div>
              <div className="pt-2 border-t border-nyt-ink/10 dark:border-nyt-darkRule flex items-center justify-between text-[11px] font-mono text-neutral-600 dark:text-neutral-400">
                <span>Class of 2026</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  Jindal Award Honoree
                </span>
              </div>
            </div>
          </div>

          {/* Research Lab Callout */}
          <div className="p-4 bg-emerald-50/70 dark:bg-emerald-950/20 border-l-4 border-emerald-600 dark:border-emerald-500 border border-nyt-ink/10 dark:border-nyt-darkRule rounded">
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              <span className="font-serif font-bold text-xs uppercase tracking-wide text-emerald-900 dark:text-emerald-200">
                Forthcoming Publication
              </span>
            </div>
            <p className="text-xs font-serif text-neutral-800 dark:text-neutral-200 leading-snug">
              Co-authoring visual connectome research paper on ego-centric neural pathway mapping alongside researchers from the <strong>Allen Institute for Neural Dynamics</strong> and <strong>Columbia University</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
