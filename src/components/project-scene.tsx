"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/data/projects";
import { ArrowRight, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProjectSceneProps {
  project: ProjectItem;
}

export function ProjectScene({ project }: ProjectSceneProps) {
  return (
    <div className="relative w-full rounded-2xl border border-[#20221F]/15 bg-[#171916] text-[#E9E7E1] shadow-2xl overflow-hidden flex flex-col">
      {/* Top Scene Bar */}
      <div className="px-6 py-4 border-b border-[#E9E7E1]/10 flex items-center justify-between font-mono text-xs text-[#73756E] bg-[#121411]">
        <div className="flex items-center gap-2.5">
          <span
            className="h-2 w-2 rounded-full transition-colors duration-300"
            style={{ backgroundColor: project.accentColor }}
          />
          <span className="text-[#E9E7E1]/90 font-medium">
            INDEX {project.number} {"//"} ARCHIVE
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] px-2 py-0.5 rounded border border-[#E9E7E1]/10 bg-[#E9E7E1]/5 text-[#C4E36C]">
            {project.status}
          </span>
          <span className="hidden sm:inline text-[#73756E]">{project.year}</span>
        </div>
      </div>

      {/* Main Visual Frame with Smooth Crossfade */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#121411]">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={project.heroImage}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              priority
              className="object-cover object-center"
            />
            {/* Subtle cinematic gradient map over image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#171916] via-transparent to-transparent opacity-60 pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dynamic Project Details Lower Section */}
      <div className="p-6 sm:p-8 bg-[#171916] border-t border-[#E9E7E1]/10 flex-1 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id + "-info"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-4"
          >
            <div>
              <p
                className="font-mono text-xs uppercase tracking-wider mb-1.5 transition-colors duration-300"
                style={{ color: project.accentColor }}
              >
                {project.category}
              </p>
              <h4 className="text-2xl sm:text-3xl font-sans font-light tracking-tight text-[#E9E7E1]">
                {project.title}
              </h4>
            </div>

            <p className="text-sm text-[#73756E] leading-relaxed line-clamp-3">
              {project.shortDescription}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-[#E9E7E1]/10 text-[#E9E7E1] border border-[#E9E7E1]/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Action Link Footer */}
        <div className="pt-6 mt-6 border-t border-[#E9E7E1]/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-[#73756E]">
            <Layers className="w-3.5 h-3.5 text-[#C4E36C]" />
            <span>Role: {project.role}</span>
          </div>

          <Link
            href={project.caseStudyUrl}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E9E7E1] text-[#20221F] text-xs font-semibold hover:bg-[#C4E36C] transition-colors shadow"
          >
            <span>Read Full Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
