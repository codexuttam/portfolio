"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { ArrowUpRight, Copy, Check, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="py-24 md:py-36 relative scroll-mt-12 bg-[#E9E7E1]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 mb-10">
          <span className="h-1.5 w-1.5 rounded-full bg-[#778A43]" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#73756E]">
            CONTACT // INVITATION TO CONNECT
          </span>
        </div>

        {/* Dramatic Closing Headline */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-sans font-light tracking-tight text-[#20221F] leading-[1.05]">
            {profileData.contact.headlinePrefix}{" "}
            <span className="font-serif-italic font-normal text-[#778A43] underline decoration-[#C4E36C]/70 decoration-2 underline-offset-8">
              {profileData.contact.headlineEmphasis}
            </span>
          </h2>
        </div>

        {/* Concise Copy & Social Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 border-t border-[#20221F]/15">
          {/* Left: Conversational invitation */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <p className="text-xl sm:text-2xl text-[#20221F]/80 font-light leading-relaxed max-w-xl">
              {profileData.contact.copy}
            </p>

            {/* Email Direct Interaction Box */}
            <div className="p-6 rounded-xl border border-[#20221F]/15 bg-[#20221F]/[0.03] space-y-3">
              <span className="font-mono text-[11px] text-[#73756E] uppercase tracking-wider block">
                DIRECT INBOX
              </span>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="font-mono text-sm sm:text-base text-[#20221F] hover:text-[#778A43] transition-colors break-all underline decoration-1 underline-offset-4"
                >
                  {profileData.contact.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#20221F]/20 text-xs font-mono text-[#20221F] hover:bg-[#20221F]/5 transition-colors"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#778A43]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#73756E]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
              <p className="font-mono text-[10px] text-[#73756E]/80">
                {profileData.contact.note}
              </p>
            </div>
          </div>

          {/* Right: Explicit Link Channels */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* GitHub */}
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="group p-6 rounded-xl border border-[#20221F]/15 bg-[#20221F]/[0.02] hover:bg-[#20221F]/[0.06] hover:border-[#20221F]/30 transition-all flex flex-col justify-between min-h-[130px]"
              >
                <div className="flex items-center justify-between">
                  <GithubIcon className="w-5 h-5 text-[#20221F]" />
                  <ArrowUpRight className="w-4 h-4 text-[#73756E] group-hover:text-[#20221F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-[#73756E] uppercase tracking-wider block">
                    CODE REPOSITORIES
                  </span>
                  <span className="font-sans font-medium text-lg text-[#20221F]">
                    GitHub
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group p-6 rounded-xl border border-[#20221F]/15 bg-[#20221F]/[0.02] hover:bg-[#20221F]/[0.06] hover:border-[#20221F]/30 transition-all flex flex-col justify-between min-h-[130px]"
              >
                <div className="flex items-center justify-between">
                  <LinkedinIcon className="w-5 h-5 text-[#20221F]" />
                  <ArrowUpRight className="w-4 h-4 text-[#73756E] group-hover:text-[#20221F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-[#73756E] uppercase tracking-wider block">
                    PROFESSIONAL NETWORK
                  </span>
                  <span className="font-sans font-medium text-lg text-[#20221F]">
                    LinkedIn
                  </span>
                </div>
              </a>

              {/* Résumé PDF */}
              <a
                href={profileData.contact.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="group p-6 rounded-xl border border-[#20221F]/15 bg-[#20221F]/[0.02] hover:bg-[#20221F]/[0.06] hover:border-[#20221F]/30 transition-all flex flex-col justify-between min-h-[130px]"
              >
                <div className="flex items-center justify-between">
                  <FileText className="w-5 h-5 text-[#20221F]" />
                  <ArrowUpRight className="w-4 h-4 text-[#73756E] group-hover:text-[#20221F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-[#73756E] uppercase tracking-wider block">
                    CURRICULUM VITAE
                  </span>
                  <span className="font-sans font-medium text-lg text-[#20221F]">
                    Résumé PDF
                  </span>
                </div>
              </a>

              {/* Direct Mail */}
              <a
                href={`mailto:${profileData.contact.email}`}
                className="group p-6 rounded-xl border border-[#778A43]/40 bg-[#778A43]/10 hover:bg-[#778A43]/20 transition-all flex flex-col justify-between min-h-[130px]"
              >
                <div className="flex items-center justify-between">
                  <Mail className="w-5 h-5 text-[#778A43]" />
                  <ArrowUpRight className="w-4 h-4 text-[#778A43] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-[#55642F] uppercase tracking-wider block">
                    QUICK DISPATCH
                  </span>
                  <span className="font-sans font-medium text-lg text-[#20221F]">
                    Send Message
                  </span>
                </div>
              </a>
            </div>

            {/* Bottom Copyright & Colophon */}
            <div className="pt-10 mt-10 border-t border-[#20221F]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#73756E]">
              <div>
                © 2026 Uttamraj Singh. All rights reserved.
              </div>
              <div className="flex items-center gap-2">
                <span>Designed with editorial restraint</span>
                <span className="h-1 w-1 rounded-full bg-[#778A43]" />
                <span>Next.js 16</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
