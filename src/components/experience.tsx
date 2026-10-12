"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { soundManager } from "@/utils/audio";
import { GraduationCap, ArrowUpRight } from "lucide-react";

export function Experience() {
  const [activeTab, setActiveTab] = useState<"roles" | "accolades">("roles");

  return (
    <section
      id="experience"
      className="py-20 md:py-28 border-b border-[#20221F]/10 relative scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-6 border-b border-[#20221F]/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#778A43]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#73756E]">
                TIMELINE // EXPERIENCE &amp; ACCOLADES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#20221F]">
              Engineering in{" "}
              <span className="font-serif-italic font-normal text-[#778A43]">
                practice.
              </span>
            </h2>
          </div>

          {/* Toggle Pills */}
          <div className="inline-flex p-1 rounded-full border border-[#20221F]/15 bg-[#20221F]/[0.03] font-mono text-xs">
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                setActiveTab("roles");
              }}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeTab === "roles"
                  ? "bg-[#20221F] text-[#E9E7E1] font-medium shadow-sm"
                  : "text-[#73756E] hover:text-[#20221F]"
              }`}
            >
              Startups &amp; Roles
            </button>
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                setActiveTab("accolades");
              }}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeTab === "accolades"
                  ? "bg-[#20221F] text-[#E9E7E1] font-medium shadow-sm"
                  : "text-[#73756E] hover:text-[#20221F]"
              }`}
            >
              Achievements
            </button>
          </div>
        </div>

        {/* Content Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Education & Academic Anchor */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl border border-[#20221F]/15 bg-[#20221F]/[0.025] space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#778A43]">
                <GraduationCap className="w-4 h-4" />
                <span>FORMAL EDUCATION</span>
              </div>
              <div>
                <h3 className="font-sans font-medium text-lg text-[#20221F]">
                  {profileData.education.institution}
                </h3>
                <p className="text-sm text-[#73756E] mt-1">
                  {profileData.education.degree}
                </p>
              </div>
              <div className="pt-4 border-t border-[#20221F]/10 flex items-center justify-between font-mono text-xs text-[#73756E]">
                <span>{profileData.education.period}</span>
                <span className="px-2 py-0.5 rounded bg-[#778A43]/15 text-[#55642F] font-semibold">
                  {profileData.education.cgpa}
                </span>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[#20221F]/10 bg-[#20221F]/[0.015] font-mono text-xs text-[#73756E] space-y-2">
              <span className="text-[#20221F] font-medium block">VERIFIED CURRICULUM VITAE</span>
              <p className="leading-relaxed">
                Directly synchronized with official resume. Contains verified startup leadership,
                international internship experience, and exhibition awards.
              </p>
              <a
                href={profileData.contact.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playClick()}
                className="inline-flex items-center gap-1.5 text-[#778A43] hover:underline pt-2 font-medium"
              >
                <span>Download Resume (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Roles or Accolades with signature hover-blur list */}
          <div className="lg:col-span-8">
            {activeTab === "roles" ? (
              <div className="space-y-4 hover-blur-group">
                {profileData.experiences.map((exp) => (
                  <div
                    key={exp.role + exp.organization}
                    onMouseEnter={() => soundManager.playTick()}
                    className="hover-blur-item group p-6 sm:p-8 rounded-xl border border-[#20221F]/10 hover:border-[#20221F]/25 bg-[#20221F]/[0.02] hover:bg-[#20221F]/[0.04] transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-block transition-transform duration-300 ease-out origin-center group-hover:rotate-180 group-hover:scale-125 text-[#778A43]">
                          ✦
                        </span>
                        <h3 className="font-sans font-medium text-xl text-[#20221F] group-hover:translate-x-1 transition-transform">
                          {exp.role}{" "}
                          <span className="text-[#73756E] font-normal">
                            @ {exp.organization}
                          </span>
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-xs text-[#73756E]">
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 rounded-full bg-[#C4E36C]/40 text-[#55642F] font-semibold text-[10px]">
                            ACTIVE
                          </span>
                        )}
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4 pl-6 text-sm text-[#73756E] leading-relaxed">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="list-disc marker:text-[#778A43]">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4 hover-blur-group">
                {profileData.achievements.map((ach) => (
                  <div
                    key={ach.title}
                    onMouseEnter={() => soundManager.playTick()}
                    className="hover-blur-item group p-6 rounded-xl border border-[#20221F]/10 hover:border-[#20221F]/25 bg-[#20221F]/[0.02] hover:bg-[#20221F]/[0.04] transition-all"
                  >
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-block transition-transform duration-300 ease-out origin-center group-hover:rotate-180 group-hover:scale-125 text-[#778A43]">
                          ❊
                        </span>
                        <h3 className="font-sans font-medium text-base text-[#20221F] group-hover:translate-x-1 transition-transform">
                          {ach.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-[#73756E] shrink-0">
                        {ach.period}
                      </span>
                    </div>
                    <p className="text-sm text-[#73756E] pl-6 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
