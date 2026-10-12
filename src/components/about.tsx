"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Compass } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 border-b border-[#20221F]/10 relative scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 mb-12">
          <span className="h-1.5 w-1.5 rounded-full bg-[#778A43]" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#73756E]">
            ABOUT // BACKGROUND &amp; PHILOSOPHY
          </span>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Strong Headline & Core Principles */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#20221F] leading-tight mb-8">
                Curious by nature. <br />
                <span className="font-serif-italic font-normal text-[#778A43]">
                  Builder
                </span>{" "}
                by choice.
              </h2>

              <p className="font-mono text-xs text-[#73756E] leading-relaxed uppercase tracking-wider mb-8">
                Computer Science Engineering • Core System Design • Applied Machine Learning
              </p>
            </div>

            {/* Principles */}
            <div className="space-y-6 pt-6 border-t border-[#20221F]/10">
              {profileData.about.principles.map((principle, idx) => (
                <div key={principle.title} className="group">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#778A43] mb-1">
                    <span>0{idx + 1}.</span>
                    <h3 className="font-sans font-medium text-[#20221F] text-base">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#73756E] leading-relaxed pl-6">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Personal Narrative & Understated Tech Labels */}
          <div className="lg:col-span-7 flex flex-col space-y-12">
            {/* Narrative Paragraphs */}
            <div className="space-y-6 text-lg sm:text-xl font-light text-[#20221F]/90 leading-relaxed">
              {profileData.about.narrative.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Understated Tech Labels (No progress bars) */}
            <div className="pt-8 border-t border-[#20221F]/10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#73756E]">
                  TECHNICAL FOUNDATIONS &amp; STACK
                </span>
                <span className="font-mono text-[11px] text-[#73756E]">
                  NO ARBITRARY PERCENTAGES
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {profileData.about.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded border border-[#20221F]/15 bg-[#20221F]/[0.03] text-[#20221F] text-sm font-mono hover:border-[#778A43] hover:bg-[#778A43]/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Editorial Dimension Box */}
            <div className="p-6 sm:p-8 rounded-xl border border-[#20221F]/10 bg-[#20221F]/[0.02] flex flex-col sm:flex-row gap-6 items-start">
              <div className="p-3 rounded-lg bg-[#E9E7E1] border border-[#20221F]/10 text-[#778A43] shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="font-sans font-medium text-[#20221F] text-base">
                  Bridging Theoretical ML &amp; Production Software
                </h4>
                <p className="text-sm text-[#73756E] leading-relaxed">
                  Beyond prompting APIs, my work focuses on evaluating model reliability,
                  designing streaming network interfaces, caching vector retrieval layers, and
                  building clean database contracts that make intelligent products viable in
                  production environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
