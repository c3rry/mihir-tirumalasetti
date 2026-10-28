"use client";

import React, { useState } from "react";
import { TECHNICAL_ARSENAL } from "@/data/resume";
import { Cpu, Check, Copy } from "lucide-react";

export function SkillsLedger() {
  const [copiedSkill, setCopiedSkill] = useState<string | null>(null);

  const copySkill = (skill: string) => {
    navigator.clipboard.writeText(skill);
    setCopiedSkill(skill);
    setTimeout(() => setCopiedSkill(null), 1800);
  };

  return (
    <section id="technical-ledger" className="py-12 border-b-2 border-nyt-ink/20 dark:border-nyt-darkRule">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
            SECTION V • TECHNICAL INDEX & COMMODITIES
          </span>
          <span className="text-nyt-muted dark:text-nyt-darkMuted">•</span>
          <span className="font-mono text-xs text-nyt-muted dark:text-nyt-darkMuted">
            PRODUCTION TOOLING & MATHEMATICAL FRAMEWORKS
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b-2 border-nyt-ink dark:border-nyt-darkRule">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-nyt-ink dark:text-nyt-darkInk tracking-tight">
              The Technical Arsenal Ledger
            </h2>
            <p className="font-headline italic text-neutral-600 dark:text-neutral-400 mt-1 text-base sm:text-lg">
              Classified by operational domain. Click any competency to copy to clipboard.
            </p>
          </div>

          <div className="font-mono text-xs text-neutral-500 flex items-center gap-1.5 self-start sm:self-auto">
            <Cpu className="w-4 h-4 text-amber-600" />
            <span>42 Verified Engineering Tools</span>
          </div>
        </div>
      </div>

      {/* 4 Quadrants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TECHNICAL_ARSENAL.map((group, gIdx) => {
          const columnAccentBorder = [
            "border-t-4 border-t-purple-600 dark:border-t-purple-400",
            "border-t-4 border-t-emerald-600 dark:border-t-emerald-400",
            "border-t-4 border-t-amber-600 dark:border-t-amber-400",
            "border-t-4 border-t-blue-600 dark:border-t-blue-400",
          ];

          return (
            <div
              key={gIdx}
              className={`bg-white dark:bg-nyt-darkCard border border-nyt-ink/20 dark:border-nyt-darkRule rounded p-5 shadow-sm ${columnAccentBorder[gIdx % columnAccentBorder.length]}`}
            >
              <div className="pb-3 mb-3 border-b border-nyt-ink/10 dark:border-nyt-darkRule">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 block mb-1">
                  Commodity Group 0{gIdx + 1}
                </span>
                <h3 className="font-serif font-black text-lg text-nyt-ink dark:text-nyt-darkInk leading-tight">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => {
                  const isCopied = copiedSkill === skill;
                  return (
                    <button
                      key={sIdx}
                      onClick={() => copySkill(skill)}
                      className="group/btn relative px-2.5 py-1 text-xs font-mono bg-nyt-paperTint dark:bg-nyt-darkTint hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-nyt-ink/15 dark:border-nyt-darkRule rounded transition-all text-left flex items-center gap-1.5"
                      title="Click to copy skill"
                    >
                      <span>{skill}</span>
                      {isCopied ? (
                        <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Copy className="w-2.5 h-2.5 opacity-0 group-hover/btn:opacity-60 transition-opacity" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
