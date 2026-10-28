"use client";

import React from "react";
import { BookOpen, Award, ExternalLink, Activity } from "lucide-react";
import { PERSONAL_INFO } from "@/data/resume";

export function ResearchSpotlight() {
  return (
    <section id="research-spotlight" className="py-12 border-b-2 border-nyt-ink/20 dark:border-nyt-darkRule">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
            SECTION IV • SCIENTIFIC & MEDICAL RESEARCH
          </span>
          <span className="text-nyt-muted dark:text-nyt-darkMuted">•</span>
          <span className="font-mono text-xs text-nyt-muted dark:text-nyt-darkMuted">
            LABORATORY DISPATCHES & PEER COLLABORATIONS
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-nyt-ink dark:text-nyt-darkInk tracking-tight">
          Neurobiology, Connectomics & Clinical IoT
        </h2>
        <p className="font-headline italic text-neutral-600 dark:text-neutral-400 mt-1 text-base sm:text-lg">
          Bridging computational machine learning with physical neuroscience and clinical telemetry.
        </p>
      </div>

      {/* Grid of 3 Major Research Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lab Feature 1: Ganglia Guardian Lab */}
        <div className="bg-white dark:bg-nyt-darkCard border-2 border-emerald-700/60 dark:border-emerald-500/50 rounded p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-nyt-ink/10 dark:border-nyt-darkRule">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                LABORATORY APPOINTMENT
              </span>
              <BookOpen className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
            </div>

            <h3 className="font-serif text-2xl font-black text-nyt-ink dark:text-nyt-darkInk mb-2">
              Ganglia Guardian Lab
            </h3>
            <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400 mb-3">
              Neurobiology of Basal Ganglia Function & Dysfunction • UTD BBS
            </p>

            <p className="font-headline text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              Led the Volumetric Data Analysis team engineering automated PyTorch segmentation pipelines over 500GB+ of 3D light-sheet microscopy scans to map neuroanatomical circuits in Parkinsonian models.
            </p>

            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border-l-2 border-emerald-600 rounded text-xs font-headline text-emerald-900 dark:text-emerald-200 mb-4">
              <strong>Forthcoming Publication:</strong> Co-authoring a visual connectome research paper on ego-centric neural pathway mapping in collaboration with researchers from the <strong>Allen Institute for Neural Dynamics</strong> and <strong>Columbia University</strong>.
            </div>
          </div>

          <a
            href={PERSONAL_INFO.links.labWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-emerald-700 hover:bg-emerald-800 text-white font-serif font-bold text-xs uppercase tracking-wider rounded transition-colors"
          >
            <span>Visit Lab Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Lab Feature 2: Jindal School Award & Behavioral Clustering */}
        <div className="bg-white dark:bg-nyt-darkCard border-2 border-amber-600/60 dark:border-amber-500/50 rounded p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-nyt-ink/10 dark:border-nyt-darkRule">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                DISTINGUISHED HONORS
              </span>
              <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            </div>

            <h3 className="font-serif text-2xl font-black text-nyt-ink dark:text-nyt-darkInk mb-2">
              Jindal School of Management Award
            </h3>
            <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400 mb-3">
              Behavioral Analytics Framework & Dual ML Pipeline
            </p>

            <p className="font-headline text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              Honored with the Jindal School of Management Award for developing a dual-pipeline machine learning framework uniting semi-supervised convolutional pose tracking (Lightning Pose) with unsupervised video clustering (MotionMapperpy) and accelerometer telemetry (AccelCluster).
            </p>

            <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border-l-2 border-amber-600 rounded text-xs font-headline text-amber-900 dark:text-amber-200 mb-4">
              <strong>Clinical Significance:</strong> Enables high-precision detection of sub-second behavioral deficits and tremor progression long before macroscopic clinical indicators manifest.
            </div>
          </div>

          <div className="pt-2">
            <span className="inline-block w-full py-2 text-center text-xs font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-950/30 rounded border border-amber-200 dark:border-amber-800">
              ★ Winner: Rigorous Tracking Architecture
            </span>
          </div>
        </div>

        {/* Lab Feature 3: UT Southwestern BioDesign via EPICS */}
        <div className="bg-white dark:bg-nyt-darkCard border-2 border-blue-700/60 dark:border-blue-500/50 rounded p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-nyt-ink/10 dark:border-nyt-darkRule">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                CLINICAL IOT & TELEMETRY
              </span>
              <Activity className="w-4 h-4 text-blue-700 dark:text-blue-400" />
            </div>

            <h3 className="font-serif text-2xl font-black text-nyt-ink dark:text-nyt-darkInk mb-2">
              UTSW BioDesign Center
            </h3>
            <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400 mb-3">
              Sub-GHz Telemetry • EPICS Engineering Initiative
            </p>

            <p className="font-headline text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              Collaborated on a critical healthcare engineering project through EPICS, building an automated 3-tier IoT telemetry pipeline with Adafruit Feather RP2040 microcontrollers and RFM95 LoRa radios to monitor sensitive laboratory refrigeration and imaging assays.
            </p>

            <div className="p-3 bg-blue-50 dark:bg-blue-950/40 border-l-2 border-blue-600 rounded text-xs font-headline text-blue-900 dark:text-blue-200 mb-4">
              <strong>Real-Time Pipeline:</strong> Streamed environmental telemetry to Prometheus DB and Grafana Cloud with automated event-driven anomaly alerting via the Twilio API.
            </div>
          </div>

          <a
            href={PERSONAL_INFO.links.epics}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white font-serif font-bold text-xs uppercase tracking-wider rounded transition-colors"
          >
            <span>EPICS Program Overview</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
