"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Command, Menu, X, ArrowUpRight } from "lucide-react";
import { soundManager } from "@/utils/audio";

interface NavigationProps {
  onOpenCommandPalette?: () => void;
}

export function Navigation({ onOpenCommandPalette }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#E9E7E1]/90 backdrop-blur-md border-b border-[#20221F]/10 py-3.5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="group inline-flex items-baseline space-x-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#778A43]"
            aria-label="Uttamraj Singh Home"
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-[#20221F] group-hover:text-[#778A43] transition-colors">
              {profileData.wordmark}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#778A43] group-hover:bg-[#C4E36C] transition-colors" />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            <Link
              href="#work"
              onClick={() => soundManager.playClick()}
              onMouseEnter={() => soundManager.playTick()}
              className="group inline-flex items-center gap-1.5 text-sm tracking-wide text-[#20221F]/80 hover:text-[#20221F] font-medium transition-colors"
            >
              <span className="text-[10px] text-[#778A43] opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300">
                ✦
              </span>
              <span>Work</span>
            </Link>
            <Link
              href="#experience"
              onClick={() => soundManager.playClick()}
              onMouseEnter={() => soundManager.playTick()}
              className="group inline-flex items-center gap-1.5 text-sm tracking-wide text-[#20221F]/80 hover:text-[#20221F] font-medium transition-colors"
            >
              <span className="text-[10px] text-[#778A43] opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300">
                ✦
              </span>
              <span>Experience</span>
            </Link>
            <Link
              href="#about"
              onClick={() => soundManager.playClick()}
              onMouseEnter={() => soundManager.playTick()}
              className="group inline-flex items-center gap-1.5 text-sm tracking-wide text-[#20221F]/80 hover:text-[#20221F] font-medium transition-colors"
            >
              <span className="text-[10px] text-[#778A43] opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300">
                ✦
              </span>
              <span>About</span>
            </Link>
            <Link
              href="#contact"
              onClick={() => soundManager.playClick()}
              onMouseEnter={() => soundManager.playTick()}
              className="group inline-flex items-center gap-1.5 text-sm tracking-wide text-[#20221F]/80 hover:text-[#20221F] font-medium transition-colors"
            >
              <span className="text-[10px] text-[#778A43] opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300">
                ✦
              </span>
              <span>Contact</span>
            </Link>

            {/* Availability Indicator */}
            <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-[#20221F]/15 text-xs text-[#73756E] font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#778A43] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#778A43]" />
              </span>
              <span>Available Summer &apos;26</span>
            </div>

            {/* Command Palette Trigger */}
            {onOpenCommandPalette && (
              <button
                type="button"
                onClick={onOpenCommandPalette}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#20221F]/15 bg-[#20221F]/5 text-xs text-[#73756E] hover:text-[#20221F] hover:border-[#20221F]/30 hover:bg-[#20221F]/10 transition-all font-mono"
                aria-label="Open command palette"
                title="Press ⌘K or Ctrl+K"
              >
                <Command className="w-3 h-3" />
                <span className="hidden xl:inline">Search</span>
                <kbd className="px-1 py-0.2 bg-[#E9E7E1] rounded border border-[#20221F]/20 text-[10px]">
                  ⌘K
                </kbd>
              </button>
            )}
          </nav>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            {onOpenCommandPalette && (
              <button
                type="button"
                onClick={onOpenCommandPalette}
                className="p-2 rounded border border-[#20221F]/15 text-[#20221F] hover:bg-[#20221F]/5 transition-colors"
                aria-label="Open search command palette"
              >
                <Command className="w-4 h-4" />
              </button>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded border border-[#20221F]/15 text-[#20221F] hover:bg-[#20221F]/5 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-[#E9E7E1]/98 backdrop-blur-xl flex flex-col px-6 py-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between pb-6 border-b border-[#20221F]/10">
            <span className="font-serif text-2xl font-bold text-[#20221F]">
              {profileData.wordmark}
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded border border-[#20221F]/15 text-[#20221F]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 py-8" aria-label="Mobile Navigation">
            <Link
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif text-[#20221F] hover:text-[#778A43] transition-colors"
            >
              Work
            </Link>
            <Link
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif text-[#20221F] hover:text-[#778A43] transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif text-[#20221F] hover:text-[#778A43] transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif text-[#20221F] hover:text-[#778A43] transition-colors"
            >
              Contact
            </Link>
            <a
              href={profileData.contact.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-lg font-serif text-[#778A43]"
            >
              <span>Résumé PDF</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>

          <div className="mt-auto pt-6 border-t border-[#20221F]/10 flex flex-col gap-2 font-mono text-xs text-[#73756E]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#778A43]" />
              <span>{profileData.availability.label}</span>
            </div>
            <span>{profileData.location}</span>
          </div>
        </div>
      )}
    </>
  );
}
