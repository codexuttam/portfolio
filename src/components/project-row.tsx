"use client";

import React from "react";
import Link from "next/link";
import { ProjectItem } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectRowProps {
  project: ProjectItem;
  isActive: boolean;
  onSelect: (project: ProjectItem) => void;
}

export function ProjectRow({ project, isActive, onSelect }: ProjectRowProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(project)}
      onMouseEnter={() => onSelect(project)}
      onFocus={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
      aria-pressed={isActive}
      className={`group relative w-full text-left p-6 sm:p-8 rounded-lg transition-all duration-300 border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#778A43] cursor-pointer ${
        isActive
          ? "bg-[#20221F]/[0.06] border-[#20221F]/30 shadow-sm"
          : "bg-transparent border-transparent hover:bg-[#20221F]/[0.025] hover:border-[#20221F]/15"
      }`}
      style={{
        backgroundColor: isActive ? project.accentColorSoft : undefined,
      }}
    >
      {/* Left indicator bar */}
      <div
        className={`absolute left-0 top-6 bottom-6 w-1 rounded-r transition-all duration-300 ${
          isActive ? "opacity-100 scale-y-100" : "opacity-0 scale-y-50 group-hover:opacity-40"
        }`}
        style={{ backgroundColor: project.accentColor }}
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {/* Top row: Number & Category */}
          <div className="flex items-center gap-3 font-mono text-xs text-[#73756E] mb-2.5">
            <span
              className={`font-semibold transition-colors duration-200 ${
                isActive ? "text-[#20221F]" : "text-[#73756E]"
              }`}
            >
              {project.number}
            </span>
            <span className="h-1 w-1 rounded-full bg-[#20221F]/20" />
            <span className="uppercase tracking-wider line-clamp-1">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-sans font-light tracking-tight text-[#20221F] group-hover:text-[#778A43] transition-colors mb-2">
            {project.title}
          </h3>

          {/* Description snippet for mobile/compact contexts */}
          <p className="text-sm text-[#73756E] line-clamp-2 max-w-xl font-normal leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Tech tags preview */}
          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#20221F]/5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#20221F]/5 text-[#20221F]/80"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 text-[11px] font-mono text-[#73756E]">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Case study direct link button */}
        <Link
          href={project.caseStudyUrl}
          onClick={(e) => e.stopPropagation()}
          className={`shrink-0 p-2.5 rounded-full border transition-all duration-200 ${
            isActive
              ? "bg-[#20221F] text-[#E9E7E1] border-[#20221F]"
              : "border-[#20221F]/15 text-[#73756E] group-hover:text-[#20221F] group-hover:border-[#20221F]/30"
          }`}
          aria-label={`Open full case study for ${project.title}`}
          title="Open case study"
        >
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
