"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/resume";
import {
  Mail,
  BookOpen,
  Send,
  Check,
  Copy,
  ExternalLink,
  Award,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import confetti from "canvas-confetti";

export function EditorialFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.links.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !message) return;
    setFormSent(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
    });
    setTimeout(() => {
      setFormSent(false);
      setSenderName("");
      setSenderEmail("");
      setMessage("");
    }, 4000);
  };

  return (
    <footer id="editorial-board" className="py-12 mt-8">
      {/* Editorial Contact Dispatch Section */}
      <div className="bg-white dark:bg-nyt-darkCard border-2 border-nyt-ink dark:border-nyt-darkRule rounded p-6 sm:p-8 mb-12 shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-700 dark:text-red-400">
            SECTION VI • LETTERS TO THE EDITOR
          </span>
          <span className="text-nyt-muted dark:text-nyt-darkMuted">•</span>
          <span className="font-mono text-xs text-nyt-muted dark:text-nyt-darkMuted">
            INQUIRIES, COLLABORATIONS & RECRUITING
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-nyt-ink dark:text-nyt-darkInk">
              Submit a Wire Dispatch or Inquire
            </h3>
            <p className="font-headline text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
              Whether you represent an enterprise machine learning team, an academic neuroscience laboratory, or are exploring collaborative engineering, my desk is open for discussion.
            </p>

            <div className="pt-2 space-y-3 font-mono text-xs">
              {/* Email Copy Card */}
              <div className="p-3 bg-nyt-paperTint dark:bg-nyt-darkTint border border-nyt-ink/20 dark:border-nyt-darkRule rounded flex items-center justify-between">
                <div className="flex items-center gap-2 text-nyt-ink dark:text-nyt-darkInk">
                  <Mail className="w-4 h-4 text-red-700 dark:text-red-400" />
                  <span className="font-bold">{PERSONAL_INFO.links.email}</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1 text-[11px] font-sans font-semibold rounded bg-white dark:bg-neutral-800 border border-nyt-ink/20 dark:border-nyt-darkRule hover:bg-neutral-100 dark:hover:bg-neutral-700 flex items-center gap-1 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded flex items-center justify-between hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
                >
                  <span className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold">
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>

                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <span className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200 font-bold">
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Codebase</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>

                <a
                  href={PERSONAL_INFO.links.labWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded flex items-center justify-between hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
                >
                  <span className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold">
                    <BookOpen className="w-4 h-4" />
                    <span>Ganglia Guardian Lab</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>

                <a
                  href={PERSONAL_INFO.links.sofab}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded flex items-center justify-between hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-colors"
                >
                  <span className="flex items-center gap-2 text-purple-700 dark:text-purple-400 font-bold">
                    <Award className="w-4 h-4" />
                    <span>SOFAB Governance</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Message Form */}
          <div className="lg:col-span-6 bg-nyt-paperTint/70 dark:bg-nyt-darkTint/70 p-5 rounded border border-nyt-ink/15 dark:border-nyt-darkRule">
            <h4 className="font-serif font-bold text-base text-nyt-ink dark:text-nyt-darkInk mb-2">
              Dispatch a Letter to the Bureau
            </h4>
            <p className="text-xs font-headline text-neutral-600 dark:text-neutral-400 mb-4">
              Send a direct note. Generates a formatted mail draft to Mihir Tirumalasetti.
            </p>

            {formSent ? (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 rounded text-center">
                <Check className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                <p className="font-serif font-bold text-sm text-emerald-900 dark:text-emerald-200">
                  Letter Logged Successfully!
                </p>
                <p className="font-mono text-xs text-emerald-700 dark:text-emerald-400 mt-1">
                  Thank you for writing to the editorial desk.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-3 font-mono text-xs">
                <div>
                  <label className="block text-neutral-600 dark:text-neutral-400 text-[10px] uppercase font-bold mb-1">
                    Your Name / Bureau
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Dr. Jane Smith or Recruiting Lead"
                    className="w-full px-3 py-2 bg-white dark:bg-nyt-darkCard border border-nyt-ink/20 dark:border-nyt-darkRule rounded text-nyt-ink dark:text-nyt-darkInk focus:outline-none focus:ring-1 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-neutral-600 dark:text-neutral-400 text-[10px] uppercase font-bold mb-1">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="jane.smith@organization.com"
                    className="w-full px-3 py-2 bg-white dark:bg-nyt-darkCard border border-nyt-ink/20 dark:border-nyt-darkRule rounded text-nyt-ink dark:text-nyt-darkInk focus:outline-none focus:ring-1 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-neutral-600 dark:text-neutral-400 text-[10px] uppercase font-bold mb-1">
                    Dispatch Content
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Details regarding roles, research questions, or collaborative projects..."
                    className="w-full px-3 py-2 bg-white dark:bg-nyt-darkCard border border-nyt-ink/20 dark:border-nyt-darkRule rounded text-nyt-ink dark:text-nyt-darkInk focus:outline-none focus:ring-1 focus:ring-red-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-nyt-ink dark:bg-white text-white dark:text-nyt-ink font-serif font-bold text-xs uppercase tracking-wider rounded shadow hover:opacity-90 flex items-center justify-center gap-2 transition-opacity"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Letter to Bureau</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Broadsheet Colophon / Bottom Bar */}
      <div className="border-t-4 border-double border-nyt-ink dark:border-nyt-darkRule pt-6 text-center text-xs text-nyt-muted dark:text-nyt-darkMuted space-y-3 font-mono">
        <div className="font-serif font-black text-xl text-nyt-ink dark:text-nyt-darkInk">
          {PERSONAL_INFO.editionTitle}
        </div>
        <div className="italic font-serif">
          &ldquo;{PERSONAL_INFO.latinMotto}&rdquo;
        </div>
        <p className="max-w-2xl mx-auto text-[11px] leading-relaxed">
          Published by Mihir Tirumalasetti at Richardson, Texas. Typeset in Playfair Display, Lora, JetBrains Mono, and Inter. Designed with a New York Times broadsheet aesthetic and built with Next.js, React, and Tailwind CSS.
        </p>
        <div className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-wider pt-2 border-t border-nyt-ink/10 dark:border-nyt-darkRule">
          <span>© 2026 Mihir Tirumalasetti</span>
          <span>•</span>
          <span>UT Dallas BS Data Science</span>
          <span>•</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
