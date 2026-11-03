"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { projectsData } from "@/data/projects";
import { profileData } from "@/data/profile";
import {
  Search,
  ArrowRight,
  FileText,
  FolderGit2,
  ExternalLink,
  Mail,
  X,
  CornerDownLeft,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { soundManager } from "@/utils/audio";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleClose = () => {
    soundManager.playTick();
    setQuery("");
    setSelectedIndex(0);
    onClose();
  };

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      soundManager.playClick();
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Build command palette items
  const navigationItems = [
    {
      category: "Navigation",
      title: "Work // Selected Projects",
      subtitle: "Explore production systems & prototypes",
      action: () => {
        router.push("#work");
        handleClose();
      },
      icon: FolderGit2,
    },
    {
      category: "Navigation",
      title: "About // Background & Philosophy",
      subtitle: "Engineering mindset & technology foundations",
      action: () => {
        router.push("#about");
        handleClose();
      },
      icon: ArrowRight,
    },
    {
      category: "Navigation",
      title: "Contact // Let's Connect",
      subtitle: "Collaboration, opportunities, and discussions",
      action: () => {
        router.push("#contact");
        handleClose();
      },
      icon: Mail,
    },
    {
      category: "Document",
      title: "Curriculum Vitae (Résumé)",
      subtitle: "PDF document with academic & technical background",
      action: () => {
        window.open(profileData.contact.resumeUrl, "_blank");
        handleClose();
      },
      icon: FileText,
    },
  ];

  const projectItems = projectsData.map((project) => ({
    category: "Projects",
    title: `${project.number} ${project.title}`,
    subtitle: project.category,
    action: () => {
      if (project.liveUrl) {
        window.open(project.liveUrl, "_blank");
      } else {
        router.push(project.caseStudyUrl);
      }
      handleClose();
    },
    icon: ExternalLink,
  }));

  const linkItems = [
    {
      category: "External Channels",
      title: "GitHub Profile",
      subtitle: profileData.contact.github,
      action: () => {
        window.open(profileData.contact.github, "_blank");
        handleClose();
      },
      icon: GithubIcon,
    },
    {
      category: "External Channels",
      title: "LinkedIn Profile",
      subtitle: profileData.contact.linkedin,
      action: () => {
        window.open(profileData.contact.linkedin, "_blank");
        handleClose();
      },
      icon: LinkedinIcon,
    },
  ];

  const allItems = [...navigationItems, ...projectItems, ...linkItems];

  const filteredItems = allItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      handleClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      soundManager.playTick();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      soundManager.playTick();
      setSelectedIndex((prev) =>
        prev - 1 < 0 ? (filteredItems.length - 1 || 0) : prev - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        soundManager.playClick();
        filteredItems[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#141613]/65 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="w-full max-w-xl rounded-2xl border border-[#20221F]/20 bg-[#E3EBD8] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden animate-in zoom-in-95 duration-200 ring-1 ring-black/5"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-[#20221F]/15 px-4 sm:px-5 py-4 flex items-center gap-3 bg-[#E3EBD8]">
          <Search className="w-5 h-5 text-[#778A43] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, project, or section..."
            className="flex-1 bg-transparent text-[#20221F] placeholder-[#73756E]/80 text-sm sm:text-base focus:outline-none font-sans font-medium"
          />
          <div className="flex items-center gap-1.5">
            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded bg-[#20221F]/5 border border-[#20221F]/10 font-mono text-[10px] text-[#73756E]">
              ESC
            </kbd>
            <button
              type="button"
              onClick={handleClose}
              className="p-1 rounded text-[#73756E] hover:text-[#20221F] hover:bg-[#20221F]/10 transition-colors"
              aria-label="Close command palette"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-84 overflow-y-auto p-2 space-y-1 font-sans">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-sm text-[#73756E] font-mono">
              No matching commands or projects found.
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={`${item.category}-${item.title}`}
                  role="button"
                  tabIndex={0}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? "bg-[#1E231B] text-[#E3EBD8] shadow-md translate-x-0.5"
                      : "text-[#20221F] hover:bg-[#20221F]/5"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#BFDF64]/20 text-[#BFDF64]"
                          : "bg-[#20221F]/5 text-[#73756E]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-sm font-semibold truncate leading-snug">
                        {item.title}
                      </div>
                      <div
                        className={`text-xs truncate ${
                          isSelected ? "text-[#E3EBD8]/70" : "text-[#73756E]"
                        }`}
                      >
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pl-2 shrink-0">
                    <span
                      className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        isSelected
                          ? "bg-white/10 text-[#BFDF64] border border-white/10"
                          : "bg-[#20221F]/5 text-[#73756E] border border-transparent"
                      }`}
                    >
                      {item.category}
                    </span>
                    {isSelected && (
                      <CornerDownLeft className="w-3.5 h-3.5 text-[#BFDF64] animate-pulse" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 sm:px-5 py-3 bg-[#20221F]/[0.04] border-t border-[#20221F]/10 flex items-center justify-between font-mono text-[10px] text-[#73756E]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-[#20221F]/10 border border-[#20221F]/10 text-[9px] font-mono">
                ↑↓
              </kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-[#20221F]/10 border border-[#20221F]/10 text-[9px] font-mono">
                ↵
              </kbd>
              Select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-[#20221F]/10 border border-[#20221F]/10 text-[9px] font-mono">
                esc
              </kbd>
              Close
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[9px] tracking-wider text-[#778A43]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#778A43] animate-pulse" />
            <span>UTTAMRAJ // COMMAND PALETTE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
