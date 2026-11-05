"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData, ProjectItem } from "@/data/projects";
import { soundManager } from "@/utils/audio";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { RopeUnderline } from "@/components/rope-underline";

const projectGlowStyles: Record<string, string> = {
  "upchaar-360":
    "group-hover/w-item:text-[#C2410C] group-hover/w-item:bg-[#EA580C]/10 group-hover/w-item:shadow-[0_0_12px_rgba(234,88,12,0.2)]",
  "samadhan-setu":
    "group-hover/w-item:text-[#6D28D9] group-hover/w-item:bg-[#7C3AED]/10 group-hover/w-item:shadow-[0_0_12px_rgba(124,58,237,0.2)]",
  "acad-x":
    "group-hover/w-item:text-[#047857] group-hover/w-item:bg-[#059669]/10 group-hover/w-item:shadow-[0_0_12px_rgba(5,150,105,0.2)]",
  iona: "group-hover/w-item:text-[#C2410C] group-hover/w-item:bg-[#EA580C]/10 group-hover/w-item:shadow-[0_0_12px_rgba(234,88,12,0.2)]",
  "aspirant-saathi":
    "group-hover/w-item:text-[#0F766E] group-hover/w-item:bg-[#0D9488]/10 group-hover/w-item:shadow-[0_0_12px_rgba(13,148,136,0.2)]",
  "quicklearn-ai":
    "group-hover/w-item:text-[#4338CA] group-hover/w-item:bg-[#4F46E5]/10 group-hover/w-item:shadow-[0_0_12px_rgba(99,102,241,0.2)]",
};

export function EditorialProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<ProjectItem | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isPointerDevice = React.useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      const mql = window.matchMedia("(pointer: fine)");
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    () => (typeof window !== "undefined" ? window.matchMedia("(pointer: fine)").matches : false),
    () => false
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const flagshipProject =
    projectsData.find((p) => p.isFlagship) || projectsData[0];
  const sideProjects = projectsData.filter((p) => p.id !== flagshipProject.id);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleRowMouseEnter = (project: ProjectItem) => {
    soundManager.playTick();
    setHoveredProject(project);
  };

  const handleRowMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="hover-blur relative"
    >
      <h1 className="text-base font-normal font-baskerville text-[#73756E] pb-3">
        Projects
      </h1>

      <div className="space-y-6 pl-4">
        {/* Flagship Project Showcase */}
        <div className="relative rounded-2xl border border-[#20221F]/15 bg-[#20221F]/[0.025] hover:bg-[#20221F]/[0.035] p-5 sm:p-6 transition-all duration-300 shadow-xs hover:shadow-md hover:border-[#778A43]/40 group/flagship">
          {/* Header pill / metadata */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#20221F]/10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-mono uppercase tracking-wider bg-[#C2410C]/10 text-[#C2410C] border border-[#C2410C]/20 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C] animate-pulse" />
                Flagship Project
              </span>
              <span className="text-[11px] font-mono text-[#73756E]">
                Role:{" "}
                <span className="text-[#20221F] font-semibold">
                  {flagshipProject.role}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#73756E]">
              <span>HealthTech · AI · Full-Stack</span>
              <span className="opacity-40">/</span>
              <span className="text-[#20221F] font-medium">{flagshipProject.year}</span>
            </div>
          </div>

          {/* Main Visual & Info Layout */}
          <div className="pt-5 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Visual Preview / Product Screenshot */}
            <div className="md:col-span-5">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#20221F]/15 bg-[#141814] shadow-md group-hover/flagship:border-[#778A43]/50 transition-colors duration-300">
                {/* Browser Chrome Bar */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-[#171B16] border-b border-white/10 text-[10px] font-mono text-[#A4B399]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
                    <span className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
                  </div>
                  <span className="text-[9.5px] truncate max-w-[140px] text-white/60">
                    upchar360.com
                  </span>
                  <span className="text-[9px] text-emerald-400 font-semibold tracking-wider">
                    LIVE
                  </span>
                </div>
                <div className="relative w-full h-[calc(100%-25px)] min-h-[160px]">
                  <Image
                    src={flagshipProject.heroImage}
                    alt={flagshipProject.imageAlt}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover/flagship:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 360px"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Narrative & Key Contributions */}
            <div className="md:col-span-7 space-y-3 flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#20221F] tracking-tight">
                  {flagshipProject.title}
                </h2>
                <p className="text-xs font-mono text-[#778A43] pt-0.5 font-medium">
                  {flagshipProject.category}
                </p>
                <p className="text-xs sm:text-[13px] text-[#20221F]/85 leading-relaxed pt-2 font-normal">
                  {flagshipProject.shortDescription}
                </p>

                {/* Key Contributions */}
                {flagshipProject.keyContributions && (
                  <div className="pt-3 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#73756E] block pb-0.5">
                      Key Architectural &amp; Engineering Contributions:
                    </span>
                    <ul className="text-xs text-[#20221F]/80 space-y-1 font-mono">
                      {flagshipProject.keyContributions.map((contribution, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#778A43] select-none text-[11px] leading-tight">✦</span>
                          <span className="leading-tight">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-3.5 flex flex-wrap items-center gap-2.5">
                <a
                  href={flagshipProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#20221F] text-[#E3EBD8] hover:bg-[#778A43] text-xs font-mono font-medium transition-colors duration-200 shadow-xs"
                >
                  <span>Visit Live Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  href={flagshipProject.caseStudyUrl}
                  onClick={() => soundManager.playClick()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#20221F]/5 text-[#20221F] hover:bg-[#20221F]/10 border border-[#20221F]/15 text-xs font-mono font-medium transition-colors duration-200"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* All Projects Directory */}
        <div className="font-medium text-sm space-y-3 text-[#20221F]/80 pt-2">
          <p className="text-xs font-mono uppercase tracking-wider text-[#73756E]">
            All Selected Projects
          </p>

          <p className="leading-6.5">
            A few things I&apos;ve designed and built{" "}
            <span className="relative inline-block font-baskerville italic text-[#4338CA] bg-[#4F46E5]/10 px-1.5 py-0.5 rounded shadow-[0_0_12px_rgba(99,102,241,0.18)]">
              on the side
            </span>
            , the kind of projects an{" "}
            <RopeUnderline color="#778A43">obsessed engineer</RopeUnderline>{" "}
            ends up making anyway.
          </p>

          <div className="pt-1">
            {projectsData.map((project) => (
              <div key={project.id} className="relative">
                <a
                  href={project.liveUrl || project.caseStudyUrl}
                  target={project.liveUrl ? "_blank" : undefined}
                  rel={project.liveUrl ? "noopener noreferrer" : undefined}
                  onClick={() => soundManager.playClick()}
                  onMouseEnter={() => handleRowMouseEnter(project)}
                  onMouseLeave={handleRowMouseLeave}
                  onFocus={() => handleRowMouseEnter(project)}
                  onBlur={handleRowMouseLeave}
                  className="group/w-item hoverable-wrapper py-1.5 text-inherit inline-block w-full no-underline hover:text-[#20221F] focus:text-[#20221F] transition-colors duration-300"
                >
                  <div className="flex items-center justify-start gap-2">
                    {/* Rotating project glyph inspired by rahulgg.in */}
                    <span className="inline-block group-hover/w-item:rotate-180 group-hover/w-item:translate-x-1 group-focus/w-item:rotate-180 group-focus/w-item:translate-x-1 leading-3 transition-transform duration-300 ease-out origin-[50%_58%] text-[#778A43]">
                      ❊
                    </span>

                    {/* Project Title with customized glow highlight on hover */}
                    <span
                      className={`text-sm font-medium transition-all duration-200 px-1.5 py-0.5 rounded ${
                        projectGlowStyles[project.id] ||
                        "group-hover/w-item:text-[#4338CA] group-hover/w-item:bg-[#4F46E5]/10 group-hover/w-item:shadow-[0_0_12px_rgba(99,102,241,0.18)]"
                      }`}
                    >
                      {project.title}
                    </span>

                    {/* Flagship tag if applicable */}
                    {project.isFlagship && (
                      <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-[#C2410C]/10 text-[#C2410C] border border-[#C2410C]/20 shrink-0">
                        flagship
                      </span>
                    )}

                    {/* Category Pill for quick context */}
                    <span className="hidden sm:inline-block text-[11px] font-mono text-[#73756E]/80 truncate">
                      / {project.category.toLowerCase()}
                    </span>

                    {/* Year Right Aligned */}
                    <span className="text-xs ml-auto font-mono text-[#73756E] group-hover/w-item:text-[#20221F] transition-colors duration-300 text-right shrink-0">
                      {project.year.split(" ")[0]}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Signature Floating Preview Card (follows cursor on desktop) */}
      {isPointerDevice && hoveredProject && (
        <div
          className="fixed pointer-events-none z-50 transition-opacity duration-200 ease-out"
          style={{
            left: `${mousePosition.x + 24}px`,
            top: `${Math.min(mousePosition.y - 120, typeof window !== "undefined" ? window.innerHeight - 340 : 200)}px`,
            opacity: hoveredProject ? 1 : 0,
            transform: "translate3d(0, 0, 0)",
          }}
        >
          <div className="w-96 bg-[#E3EBD8] border border-[#20221F]/20 rounded-xl p-3 shadow-2xl backdrop-blur-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Project Browser Preview */}
            <div className="relative w-full rounded-lg bg-[#181C18] overflow-hidden border border-[#20221F]/15 mb-2.5 shadow-md">
              {/* Browser Window Chrome */}
              <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#141814] border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
                  <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
                  <span className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
                </div>
                {hoveredProject.liveUrl ? (
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-[#A4B399] max-w-[210px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="truncate">{hoveredProject.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                  </div>
                ) : (
                  <span className="text-[9px] font-mono text-[#8C9C84]/70">case study preview</span>
                )}
                <span className="text-[9px] font-mono text-emerald-400/90 uppercase tracking-wider font-semibold">
                  {hoveredProject.liveUrl ? "LIVE" : "ARCHIVE"}
                </span>
              </div>

              {/* Exact Platform Image */}
              <div className="relative w-full h-44 bg-[#0F1410] overflow-hidden">
                <Image
                  src={hoveredProject.heroImage}
                  alt={hoveredProject.imageAlt}
                  fill
                  className="object-cover object-top transition-transform duration-500 ease-out hover:scale-105"
                  sizes="384px"
                  priority
                />
              </div>
            </div>

            {/* Content Details */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-xs text-[#20221F]">
                  {hoveredProject.title}
                </span>
                <span className="font-mono text-[10px] text-[#778A43] flex items-center gap-0.5">
                  {hoveredProject.liveUrl ? "Visit Live" : "Case Study"} <ArrowUpRight className="w-2.5 h-2.5" />
                </span>
              </div>

              <p className="text-[11px] text-[#73756E] leading-relaxed line-clamp-2">
                {hoveredProject.shortDescription}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 pt-1 border-t border-[#20221F]/10">
                {hoveredProject.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#20221F]/5 text-[#20221F]/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
