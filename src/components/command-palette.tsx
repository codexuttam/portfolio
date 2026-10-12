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
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

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
    setQuery("");
    setSelectedIndex(0);
    onClose();
  };

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Build command palette items
  const navigationItems = [
    {
      category: "Navigation",
      title: "Work — Selected Projects",
      subtitle: "Explore production systems & prototypes",
      action: () => {
        router.push("#work");
        handleClose();
      },
      icon: FolderGit2,
    },
    {
      category: "Navigation",
      title: "About — Background & Philosophy",
      subtitle: "Engineering mindset & technology foundations",
      action: () => {
        router.push("#about");
        handleClose();
      },
      icon: ArrowRight,
    },
    {
      category: "Navigation",
      title: "Contact — Let's Connect",
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
      router.push(project.caseStudyUrl);
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
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev - 1 < 0 ? (filteredItems.length - 1 || 0) : prev - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-[#20221F]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="w-full max-w-xl rounded-xl border border-[#20221F]/20 bg-[#E9E7E1] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-[#20221F]/15 px-4 py-3.5 flex items-center gap-3 bg-[#E9E7E1]">
          <Search className="w-5 h-5 text-[#73756E]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, project, or section..."
            className="flex-1 bg-transparent text-[#20221F] placeholder-[#73756E] text-base focus:outline-none font-sans"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-[#73756E] hover:text-[#20221F] hover:bg-[#20221F]/5 transition-colors"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-[#20221F]/5 font-sans">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-[#73756E] font-mono">
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
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-[#20221F] text-[#E9E7E1]"
                      : "text-[#20221F] hover:bg-[#20221F]/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-md ${
                        isSelected ? "bg-[#778A43]/40 text-[#C4E36C]" : "bg-[#20221F]/5 text-[#73756E]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{item.title}</div>
                      <div
                        className={`text-xs ${
                          isSelected ? "text-[#E9E7E1]/70" : "text-[#73756E]"
                        }`}
                      >
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-[10px] uppercase px-2 py-0.5 rounded ${
                      isSelected
                        ? "bg-[#E9E7E1]/10 text-[#C4E36C]"
                        : "bg-[#20221F]/5 text-[#73756E]"
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2.5 bg-[#20221F]/[0.03] border-t border-[#20221F]/10 flex items-center justify-between font-mono text-[11px] text-[#73756E]">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
          <span>UTTAMRAJ PORTFOLIO PALETTE</span>
        </div>
      </div>
    </div>
  );
}
