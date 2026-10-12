import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const instant = false;

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found — Uttamraj Singh",
    };
  }

  return {
    title: `${project.title} — Case Study | Uttamraj Singh`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Uttamraj Singh`,
      description: project.shortDescription,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject =
    projectsData[(projectIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject =
    projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <main className="min-h-screen bg-[#E9E7E1] text-[#20221F] paper-grain selection:bg-[#C4E36C] selection:text-[#20221F]">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-[#E9E7E1]/90 backdrop-blur-md border-b border-[#20221F]/10 py-4">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-sm font-mono text-[#73756E] hover:text-[#20221F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to selected work</span>
          </Link>

          <Link
            href="/"
            className="font-serif text-xl font-bold tracking-tight text-[#20221F] hover:text-[#778A43] transition-colors"
          >
            uttam.
          </Link>
        </div>
      </header>

      {/* Case Study Hero Header */}
      <article className="max-w-6xl mx-auto px-6 sm:px-8 pt-12 pb-24">
        {/* Meta Header */}
        <div className="inline-flex items-center gap-3 font-mono text-xs text-[#73756E] mb-4">
          <span className="font-semibold text-[#20221F]">
            PROJECT {project.number}
          </span>
          <span className="h-1 w-1 rounded-full bg-[#20221F]/20" />
          <span
            className="uppercase tracking-widest font-semibold"
            style={{ color: project.accentColor }}
          >
            {project.category}
          </span>
          <span className="h-1 w-1 rounded-full bg-[#20221F]/20" />
          <span className="px-2 py-0.5 rounded bg-[#20221F]/5 text-[#20221F]">
            {project.status}
          </span>
        </div>

        {/* Big Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight text-[#20221F] mb-6">
          {project.title}
        </h1>

        <p className="text-xl sm:text-2xl text-[#73756E] font-light leading-relaxed max-w-3xl mb-12">
          {project.shortDescription}
        </p>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-xl border border-[#20221F]/15 bg-[#20221F]/[0.025] mb-14 font-mono text-xs">
          <div>
            <span className="block text-[10px] uppercase text-[#73756E] mb-1">
              TIMELINE
            </span>
            <span className="text-[#20221F] font-medium">{project.year}</span>
          </div>

          <div>
            <span className="block text-[10px] uppercase text-[#73756E] mb-1">
              ROLE
            </span>
            <span className="text-[#20221F] font-medium">{project.role}</span>
          </div>

          <div>
            <span className="block text-[10px] uppercase text-[#73756E] mb-1">
              DISCIPLINE
            </span>
            <span className="text-[#20221F] font-medium">{project.category}</span>
          </div>

          <div>
            <span className="block text-[10px] uppercase text-[#73756E] mb-1">
              STATUS
            </span>
            <span className="text-[#778A43] font-medium">{project.status}</span>
          </div>
        </div>

        {/* Large Hero Visual Diagram */}
        <div className="relative aspect-[16/10] w-full rounded-2xl border border-[#20221F]/20 bg-[#171916] shadow-2xl overflow-hidden mb-16">
          <Image
            src={project.heroImage}
            alt={project.imageAlt}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-center"
          />
        </div>

        {/* Case Study Detailed Narrative */}
        {project.caseStudy && (
          <div className="space-y-16 max-w-4xl">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#73756E]">
                01 // EXECUTIVE OVERVIEW
              </h2>
              <p className="text-xl sm:text-2xl font-light text-[#20221F] leading-relaxed">
                {project.caseStudy.overview}
              </p>
            </section>

            {/* Problem & Solution Split */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#20221F]/10">
              <div className="p-6 sm:p-8 rounded-xl border border-[#20221F]/10 bg-[#20221F]/[0.02]">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#73756E] mb-3">
                  THE CHALLENGE
                </h3>
                <p className="text-base text-[#20221F]/90 leading-relaxed font-light">
                  {project.caseStudy.problem}
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-xl border border-[#778A43]/30 bg-[#778A43]/[0.08]">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#55642F] mb-3">
                  THE SYSTEM SOLUTION
                </h3>
                <p className="text-base text-[#20221F]/90 leading-relaxed font-light">
                  {project.caseStudy.solution}
                </p>
              </div>
            </section>

            {/* Architecture Notes */}
            <section className="p-6 sm:p-8 rounded-xl border border-[#20221F]/15 bg-[#171916] text-[#E9E7E1] space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#C4E36C]">
                <Terminal className="w-4 h-4" />
                <span>ARCHITECTURE &amp; STACK NOTES</span>
              </div>
              <p className="text-base text-[#E9E7E1]/90 font-mono leading-relaxed">
                {project.caseStudy.architectureNotes}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-[#E9E7E1]/10 text-xs font-mono text-[#E9E7E1]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Sub-sections */}
            {project.caseStudy.sections.map((section, idx) => (
              <section
                key={section.title}
                className="pt-8 border-t border-[#20221F]/10 space-y-4"
              >
                <div className="font-mono text-xs text-[#73756E]">
                  DEEP DIVE 0{idx + 1}
                </div>
                <h3 className="text-2xl sm:text-3xl font-sans font-light text-[#20221F]">
                  {section.title}
                </h3>
                <p className="text-lg text-[#73756E] font-light leading-relaxed">
                  {section.content}
                </p>
                {section.bulletPoints && (
                  <ul className="space-y-2 pt-2">
                    {section.bulletPoints.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-3 text-sm text-[#20221F]/90 font-mono"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#778A43] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Key Takeaways */}
            <section className="p-8 rounded-2xl border border-[#20221F]/15 bg-[#20221F]/[0.03] space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#73756E]">
                ENGINEERING TAKEAWAYS
              </h3>
              <ul className="space-y-3">
                {project.caseStudy.keyTakeaways.map((takeaway, tIdx) => (
                  <li
                    key={tIdx}
                    className="flex items-start gap-3 text-base text-[#20221F] font-light"
                  >
                    <span className="font-mono text-xs text-[#778A43] mt-1">
                      0{tIdx + 1}.
                    </span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}

        {/* Adjacent Project Navigation */}
        <div className="mt-20 pt-10 border-t border-[#20221F]/15 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href={prevProject.caseStudyUrl}
            className="group p-6 rounded-xl border border-[#20221F]/15 bg-[#20221F]/[0.02] hover:bg-[#20221F]/[0.05] transition-all flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-[#73756E] mb-2">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>PREVIOUS PROJECT</span>
            </div>
            <div className="text-xl font-sans font-light text-[#20221F]">
              {prevProject.number} {prevProject.title}
            </div>
          </Link>

          <Link
            href={nextProject.caseStudyUrl}
            className="group p-6 rounded-xl border border-[#20221F]/15 bg-[#20221F]/[0.02] hover:bg-[#20221F]/[0.05] transition-all flex flex-col justify-between sm:text-right"
          >
            <div className="flex items-center sm:justify-end gap-2 font-mono text-xs text-[#73756E] mb-2">
              <span>NEXT PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-xl font-sans font-light text-[#20221F]">
              {nextProject.number} {nextProject.title}
            </div>
          </Link>
        </div>
      </article>
    </main>
  );
}
