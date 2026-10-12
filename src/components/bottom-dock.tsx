"use client";

import React, { useState, useEffect } from "react";
import { soundManager } from "@/utils/audio";
import { Volume2, VolumeX, Command } from "lucide-react";

interface BottomDockProps {
  onOpenCommandPalette?: () => void;
}

export function BottomDock({ onOpenCommandPalette }: BottomDockProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "work", "about", "contact"];
      const scrollY = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleSound = () => {
    const newState = soundManager.toggleSound();
    setSoundEnabled(newState);
  };

  const navLinks = [
    { id: "hero", label: "Profile", href: "#hero" },
    { id: "work", label: "Work", href: "#work" },
    { id: "about", label: "About", href: "#about" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      aria-label="Bottom Navigation Dock"
      className="fixed bottom-4 sm:bottom-6 inset-x-0 z-40 flex justify-center pointer-events-none px-4"
    >
      <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 px-3 py-2 rounded-full bg-[#E9E7E1]/85 backdrop-blur-md border border-[#20221F]/15 shadow-xl font-mono text-xs">
        {navLinks.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={() => soundManager.playClick()}
              onMouseEnter={() => soundManager.playTick()}
              className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-[#20221F] text-[#E9E7E1] font-semibold shadow-sm"
                  : "text-[#20221F]/70 hover:text-[#20221F] hover:bg-[#20221F]/5"
              }`}
            >
              {/* Cycling triangular glyph inspired by rahulgg.in */}
              <span
                className={`text-[10px] transition-transform duration-300 ${
                  isActive
                    ? "opacity-100 text-[#C4E36C] scale-110"
                    : "opacity-40 group-hover:opacity-100 group-hover:rotate-180"
                }`}
              >
                ⟁
              </span>
              <span>{item.label}</span>
            </a>
          );
        })}

        <div className="h-4 w-px bg-[#20221F]/15 mx-1" />

        {/* Audio click feedback toggle */}
        <button
          type="button"
          onClick={handleToggleSound}
          className={`p-2 rounded-full transition-colors ${
            soundEnabled
              ? "text-[#778A43] bg-[#778A43]/10"
              : "text-[#73756E] hover:text-[#20221F] hover:bg-[#20221F]/5"
          }`}
          title={soundEnabled ? "Mute audio feedback" : "Enable tactile sound clicks"}
          aria-label={soundEnabled ? "Mute sound" : "Enable sound"}
        >
          {soundEnabled ? (
            <Volume2 className="w-3.5 h-3.5 text-[#778A43]" />
          ) : (
            <VolumeX className="w-3.5 h-3.5" />
          )}
        </button>

        {/* Command palette quick button */}
        {onOpenCommandPalette && (
          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onOpenCommandPalette();
            }}
            className="p-2 rounded-full text-[#73756E] hover:text-[#20221F] hover:bg-[#20221F]/5 transition-colors"
            title="Open Command Palette (⌘K)"
            aria-label="Search and navigate"
          >
            <Command className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </nav>
  );
}
