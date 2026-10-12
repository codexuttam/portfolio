"use client";

import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { EditorialTicker } from "@/components/editorial-ticker";
import { ProjectShowcase } from "@/components/project-showcase";
import { About } from "@/components/about";
import { CurrentFocus } from "@/components/current-focus";
import { Contact } from "@/components/contact";
import { CommandPalette } from "@/components/command-palette";

export default function HomePage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global ⌘K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#E9E7E1] text-[#20221F]">
      {/* Top Editorial Navigation */}
      <Navigation onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Page Flow */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section: Two-Column Editorial & Portrait */}
        <Hero />

        {/* Editorial Marquee Ticker */}
        <EditorialTicker />

        {/* Project Showcase: Vertically Stacked List + Cinematic Scene */}
        <ProjectShowcase />

        {/* About Section: Narrative & Understated Stack */}
        <About />

        {/* Current Focus Section: Feature Panel */}
        <CurrentFocus />

        {/* Contact Section: Large Closing Typography & Channels */}
        <Contact />
      </main>

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}
