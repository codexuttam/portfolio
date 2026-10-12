"use client";

import React from "react";
import { ProjectItem } from "@/data/projects";
import { ProjectRow } from "./project-row";

interface ProjectListProps {
  projects: ProjectItem[];
  activeProject: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectList({
  projects,
  activeProject,
  onSelectProject,
}: ProjectListProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const currentIndex = projects.findIndex((p) => p.id === activeProject.id);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % projects.length;
      onSelectProject(projects[nextIndex]);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      onSelectProject(projects[prevIndex]);
    }
  };

  return (
    <div
      role="region"
      aria-label="Project showcase list"
      onKeyDown={handleKeyDown}
      className="flex flex-col gap-3 focus:outline-none"
    >
      {projects.map((project) => (
        <ProjectRow
          key={project.id}
          project={project}
          isActive={project.id === activeProject.id}
          onSelect={onSelectProject}
        />
      ))}
    </div>
  );
}
