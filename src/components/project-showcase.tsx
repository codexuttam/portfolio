"use client";

import React, { useState } from "react";
import { projectsData, ProjectItem } from "@/data/projects";
import { ProjectList } from "./project-list";
import { ProjectScene } from "./project-scene";

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState<ProjectItem>(projectsData[0]);

  return (
    <section
      id="work"
      className="py-20 md:py-32 border-b border-[#20221F]/10 relative scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#20221F]/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#778A43]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#73756E]">
                SELECTED WORK // 2024 – 2026
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-[#20221F]">
              Systems that solve real{" "}
              <span className="font-serif-italic font-normal text-[#778A43]">
                friction.
              </span>
            </h2>
          </div>

          <div className="font-mono text-xs text-[#73756E] flex items-center gap-4">
            <span className="px-2.5 py-1 rounded bg-[#20221F]/5 text-[#20221F]">
              {projectsData.length} PRODUCTION REPOSITORIES
            </span>
            <span className="hidden sm:inline">HOVER OR TAP TO INSPECT</span>
          </div>
        </div>

        {/* Main Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Vertically stacked project rows */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <ProjectList
              projects={projectsData}
              activeProject={activeProject}
              onSelectProject={setActiveProject}
            />
          </div>

          {/* Right Column: Sticky cinematic visual scene */}
          <div className="lg:col-span-6 order-1 lg:order-2 lg:sticky lg:top-28">
            <ProjectScene project={activeProject} />
          </div>
        </div>
      </div>
    </section>
  );
}
