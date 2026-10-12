"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { soundManager } from "@/utils/audio";
import { Volume2, VolumeX, Command } from "lucide-react";

interface BottomDockProps {
  onOpenCommandPalette?: () => void;
}

export function BottomDock({ onOpenCommandPalette }: BottomDockProps) {
  const pathname = usePathname();
  const [soundEnabled, setSoundEnabled] = useState(false);

  const handleToggleSound = () => {
    const newState = soundManager.toggleSound();
    setSoundEnabled(newState);
  };

  const isProfileActive = pathname === "/" || pathname === "";
  const isAboutActive = pathname === "/about";

  return (
    <nav
      aria-label="Editorial Bottom Navigation"
      className="font-baskerville bg-[#E9E7E1]/85 fixed bottom-0 w-full h-14 z-50 text-sm px-6 border-t border-[#20221F]/15 backdrop-blur-[4px] transition-colors duration-300"
    >
      <div className="h-full">
        <div className="flex items-stretch justify-between max-w-158 px-0.5 mx-auto h-full">
          {/* Profile Route Link */}
          <Link
            href="/"
            onClick={() => soundManager.playClick()}
            onMouseEnter={() => soundManager.playTick()}
            data-status={isProfileActive ? "active" : "inactive"}
            className={`group flex items-center justify-start gap-1.5 px-4 italic no-underline transition-colors duration-300 py-[0.5ch] ${
              isProfileActive
                ? "text-[#20221F] font-medium"
                : "text-[#73756E] hover:text-[#20221F]"
            }`}
          >
            <span
              className={`relative -top-px font-sans text-xs transition-opacity duration-300 ${
                isProfileActive
                  ? "opacity-100 animate-text-cycle"
                  : "opacity-0 group-hover:opacity-60"
              }`}
            >
              ⟁
            </span>
            <span>Profile</span>
          </Link>

          {/* About Route Link */}
          <Link
            href="/about"
            onClick={() => soundManager.playClick()}
            onMouseEnter={() => soundManager.playTick()}
            data-status={isAboutActive ? "active" : "inactive"}
            className={`group flex items-center justify-start gap-1.5 px-4 italic no-underline transition-colors duration-300 py-[0.5ch] ${
              isAboutActive
                ? "text-[#20221F] font-medium"
                : "text-[#73756E] hover:text-[#20221F]"
            }`}
          >
            <span
              className={`relative -top-px font-sans text-xs transition-opacity duration-300 ${
                isAboutActive
                  ? "opacity-100 animate-text-cycle"
                  : "opacity-0 group-hover:opacity-60"
              }`}
            >
              ⟁
            </span>
            <span>About</span>
          </Link>

          {/* Right Action Controls: Audio Feedback & Command Palette */}
          <div className="flex items-center gap-1 pl-4 ml-auto font-sans not-italic">
            <button
              type="button"
              onClick={handleToggleSound}
              className={`p-2 rounded-md transition-colors ${
                soundEnabled
                  ? "text-[#778A43] bg-[#778A43]/10"
                  : "text-[#73756E] hover:text-[#20221F]"
              }`}
              title={soundEnabled ? "Mute audio feedback" : "Tactile audio feedback"}
              aria-label={soundEnabled ? "Mute sound" : "Enable sound"}
            >
              {soundEnabled ? (
                <Volume2 className="w-3.5 h-3.5 text-[#778A43]" />
              ) : (
                <VolumeX className="w-3.5 h-3.5" />
              )}
            </button>

            {onOpenCommandPalette && (
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onOpenCommandPalette();
                }}
                className="p-2 rounded-md text-[#73756E] hover:text-[#20221F] transition-colors"
                title="Command Palette (⌘K)"
                aria-label="Search and command palette"
              >
                <Command className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
