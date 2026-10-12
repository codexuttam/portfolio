"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

export function CurrentFocus() {
  return (
    <section className="py-20 md:py-28 border-b border-[#20221F]/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Soft neutral / muted green editorial feature panel */}
        <div className="relative rounded-2xl border border-[#778A43]/30 bg-gradient-to-br from-[#778A43]/15 via-[#778A43]/[0.08] to-[#E9E7E1] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-sm">
          {/* Subtle directional animated compass / accent symbol */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10 pointer-events-none">
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#778A43] opacity-20" />
              <div className="h-10 w-10 rounded-full border border-[#778A43]/40 bg-[#E9E7E1] flex items-center justify-center text-[#778A43]">
                <ArrowUpRight className="w-5 h-5 animate-pulse" />
              </div>
            </div>
          </div>

          <div className="max-w-3xl">
            {/* Header tag */}
            <div className="inline-flex items-center gap-2 mb-6 font-mono text-xs text-[#55642F] uppercase tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#778A43]" />
              <span>CURRENT RESEARCH &amp; DIRECTION // 2026</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-[#20221F] mb-6 leading-tight">
              Less demo.{" "}
              <span className="font-serif-italic font-normal text-[#55642F]">
                More dependable
              </span>{" "}
              software.
            </h2>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#20221F]/80 font-light leading-relaxed mb-8">
              {profileData.focusSection.copy}
            </p>

            {/* Focus areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#778A43]/20 font-mono text-xs text-[#20221F]/90">
              {profileData.focusSection.areas.map((area, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-[#55642F] font-semibold">0{i + 1}.</span>
                  <span className="leading-relaxed">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
