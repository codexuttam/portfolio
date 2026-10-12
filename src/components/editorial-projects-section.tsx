"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData, ProjectItem } from "@/data/projects";
import { soundManager } from "@/utils/audio";
import { ArrowUpRight } from "lucide-react";

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
      <h1 className="text-base font-normal font-baskerville text-[#73756E] pb-2">
        Projects
      </h1>

      <div className="font-medium pl-4 text-sm space-y-4 leading-6.5 text-[#20221F]/80">
        <p>
          A few things I&apos;ve designed and built on the side, the kind of projects an
          obsessed engineer ends up making anyway.
        </p>

        <div className="pt-1">
          {projectsData.map((project) => (
            <div key={project.id} className="relative">
              <Link
                href={project.caseStudyUrl}
                onClick={() => soundManager.playClick()}
                onMouseEnter={() => handleRowMouseEnter(project)}
                onMouseLeave={handleRowMouseLeave}
                onFocus={() => handleRowMouseEnter(project)}
                onBlur={handleRowMouseLeave}
                className="group/w-item hoverable-wrapper py-2 text-inherit inline-block w-full no-underline hover:text-[#20221F] hover:pr-4 focus:text-[#20221F] focus:pr-4 transition-all duration-300"
              >
                <div className="flex items-center justify-start gap-2">
                  {/* Rotating project glyph inspired by rahulgg.in */}
                  <span className="inline-block group-hover/w-item:rotate-180 group-hover/w-item:translate-x-1 group-focus/w-item:rotate-180 group-focus/w-item:translate-x-1 leading-3 transition-transform duration-300 ease-out origin-[50%_58%] text-[#778A43]">
                    ❊
                  </span>

                  {/* Project Title */}
                  <p className="text-sm font-medium transition-colors duration-200">
                    {project.title}
                  </p>

                  {/* Category Pill for quick context */}
                  <span className="hidden sm:inline-block text-[11px] font-mono text-[#73756E]/80 pl-2">
                    — {project.category.toLowerCase()}
                  </span>

                  {/* Year Right Aligned */}
                  <span className="text-xs ml-auto font-medium text-[#73756E] group-hover/w-item:text-[#20221F] transition-colors duration-300">
                    {project.year.split(" ")[0]}
                  </span>
                </div>
              </Link>
            </div>
          ))}
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
          <div className="w-80 bg-[#E9E7E1] border border-[#20221F]/20 rounded-lg p-3 shadow-2xl backdrop-blur-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Project Image Preview */}
            <div className="relative w-full h-40 rounded bg-[#20221F]/5 overflow-hidden border border-[#20221F]/10 mb-2.5">
              <Image
                src={hoveredProject.heroImage}
                alt={hoveredProject.imageAlt}
                fill
                className="object-cover object-center"
                sizes="320px"
                priority
              />
              <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-[#20221F]/80 text-[#E9E7E1] font-mono text-[9px] uppercase tracking-wider">
                {hoveredProject.status}
              </div>
            </div>

            {/* Content Details */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-xs text-[#20221F]">
                  {hoveredProject.title}
                </span>
                <span className="font-mono text-[10px] text-[#778A43] flex items-center gap-0.5">
                  Case Study <ArrowUpRight className="w-2.5 h-2.5" />
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
