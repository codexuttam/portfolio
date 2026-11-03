"use client";

import React, { useState, useRef } from "react";
import { soundManager } from "@/utils/audio";

interface CategoryColor {
  hoverText: string;
  hoverBg: string;
  hoverBorder: string;
  hoverGlow: string;
  glyphColor: string;
}

interface SkillCategory {
  category: string;
  skills: string[];
  color: CategoryColor;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C"],
    color: {
      hoverText: "hover:text-[#9A3412]",
      hoverBg: "hover:bg-[#F59E0B]/12",
      hoverBorder: "hover:border-[#F59E0B]/35",
      hoverGlow: "hover:shadow-[0_4px_12px_rgba(245,158,11,0.18)]",
      glyphColor: "text-[#D97706]",
    },
  },
  {
    category: "AI & Machine Learning",
    skills: ["PyTorch", "LangChain", "LLMs", "RAG", "AI Agents"],
    color: {
      hoverText: "hover:text-[#5B21B6]",
      hoverBg: "hover:bg-[#7C3AED]/12",
      hoverBorder: "hover:border-[#7C3AED]/35",
      hoverGlow: "hover:shadow-[0_4px_12px_rgba(124,58,237,0.18)]",
      glyphColor: "text-[#7C3AED]",
    },
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
    color: {
      hoverText: "hover:text-[#0369A1]",
      hoverBg: "hover:bg-[#0284C7]/12",
      hoverBorder: "hover:border-[#0284C7]/35",
      hoverGlow: "hover:shadow-[0_4px_12px_rgba(2,132,199,0.18)]",
      glyphColor: "text-[#0284C7]",
    },
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js", "FastAPI"],
    color: {
      hoverText: "hover:text-[#047857]",
      hoverBg: "hover:bg-[#059669]/12",
      hoverBorder: "hover:border-[#059669]/35",
      hoverGlow: "hover:shadow-[0_4px_12px_rgba(5,150,105,0.18)]",
      glyphColor: "text-[#059669]",
    },
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Prisma"],
    color: {
      hoverText: "hover:text-[#3730A3]",
      hoverBg: "hover:bg-[#4F46E5]/12",
      hoverBorder: "hover:border-[#4F46E5]/35",
      hoverGlow: "hover:shadow-[0_4px_12px_rgba(79,70,229,0.18)]",
      glyphColor: "text-[#4F46E5]",
    },
  },
  {
    category: "Infrastructure",
    skills: ["Docker", "Git", "GitHub", "Vercel"],
    color: {
      hoverText: "hover:text-[#C2410C]",
      hoverBg: "hover:bg-[#EA580C]/12",
      hoverBorder: "hover:border-[#EA580C]/35",
      hoverGlow: "hover:shadow-[0_4px_12px_rgba(234,88,12,0.18)]",
      glyphColor: "text-[#EA580C]",
    },
  },
  {
    category: "Real-time Systems",
    skills: ["WebRTC", "SIP", "Voice AI"],
    color: {
      hoverText: "hover:text-[#BE123C]",
      hoverBg: "hover:bg-[#E11D48]/12",
      hoverBorder: "hover:border-[#E11D48]/35",
      hoverGlow: "hover:shadow-[0_4px_12px_rgba(225,29,72,0.18)]",
      glyphColor: "text-[#E11D48]",
    },
  },
];

const PROMINENT_SKILLS = new Set([
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "PyTorch",
  "AI Agents",
]);

const SCRAMBLE_CHARS = "01!<>_#+*~";

function AnimatedSkillTag({
  name,
  isProminent,
  color,
}: {
  name: string;
  isProminent: boolean;
  color: CategoryColor;
}) {
  const [displayText, setDisplayText] = useState(name);
  const isScrambling = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    soundManager.playTick();

    if (isScrambling.current) return;
    isScrambling.current = true;

    let iteration = 0;
    const maxIterations = name.length;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        name
          .split("")
          .map((char, index) => {
            if (char === " " || char === "." || char === "-") return char;
            if (index < iteration) return name[index];
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join("")
      );

      iteration += 1 / 1.5;

      if (iteration >= maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(name);
        isScrambling.current = false;
      }
    }, 24);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(name);
    isScrambling.current = false;
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group/tag inline-flex items-center text-[11.5px] px-2 py-0.5 rounded cursor-default select-none transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 ${
        isProminent
          ? "font-medium text-[#20221F] bg-[#20221F]/[0.06] border border-[#20221F]/20 shadow-xs"
          : "font-normal text-[#20221F]/75 bg-[#20221F]/[0.025] border border-[#20221F]/[0.06]"
      } ${color.hoverText} ${color.hoverBg} ${color.hoverBorder} ${color.hoverGlow}`}
    >
      {isProminent && (
        <span
          className="inline-block w-1 h-1 rounded-full bg-[#778A43] mr-1.5 opacity-80 group-hover/tag:scale-125 group-hover/tag:opacity-100 transition-all duration-200"
          title="Core focus area"
        />
      )}
      <span className="font-mono tracking-tight">{displayText}</span>
    </span>
  );
}

export function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const hasActiveHover = hoveredCategory !== null;

  return (
    <div className="space-y-2.5 pt-1">
      {SKILL_CATEGORIES.map((group) => {
        const isCurrentHovered = hoveredCategory === group.category;
        return (
          <div
            key={group.category}
            onMouseEnter={() => setHoveredCategory(group.category)}
            onMouseLeave={() => setHoveredCategory(null)}
            className={`group/row grid grid-cols-1 sm:grid-cols-[140px_1fr] items-baseline gap-1 sm:gap-2.5 text-xs transition-opacity duration-300 ${
              hasActiveHover && !isCurrentHovered ? "opacity-45" : "opacity-100"
            }`}
          >
            {/* Category Label with animated rotating glyph */}
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#73756E] group-hover/row:text-[#20221F] transition-colors duration-200">
              <span
                className={`inline-block transition-transform duration-300 ease-out origin-center text-[10px] ${
                  group.color.glyphColor
                } ${
                  isCurrentHovered
                    ? "rotate-180 scale-125"
                    : "rotate-0 opacity-40 group-hover/row:opacity-100"
                }`}
              >
                ❊
              </span>
              <span className="tracking-tight">{group.category}</span>
            </div>

            {/* Tags Collection */}
            <div className="flex flex-wrap items-center gap-1.5">
              {group.skills.map((skill) => (
                <AnimatedSkillTag
                  key={skill}
                  name={skill}
                  isProminent={PROMINENT_SKILLS.has(skill)}
                  color={group.color}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
