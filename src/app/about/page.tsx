"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BottomDock } from "@/components/bottom-dock";
import { CommandPalette } from "@/components/command-palette";
import { TextScramble } from "@/components/text-scramble";
import { soundManager } from "@/utils/audio";

export default function AboutPage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

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
    <div className="min-h-screen bg-[#E9E7E1] text-[#20221F] selection:bg-[#C4E36C] selection:text-[#20221F]">
      <main className="mx-6 page-init">
        <div className="max-w-158 mx-auto">
          <div className="pt-20 pb-32">
            <div className="space-y-8 profile-page">
              {/* Header and Banner */}
              <div className="space-y-8 hover-blur">
                <div className="text-base font-semibold">
                  <p>About</p>
                </div>
                <div>
                  <div className="relative w-full aspect-[632/356] overflow-hidden border border-[#20221F]/10 bg-[#20221F]/5 shadow-sm">
                    <Image
                      src="/images/portrait/editorial-portrait.svg"
                      alt="Uttamraj Singh portrait study banner"
                      fill
                      priority
                      className="w-full h-full object-cover inline-block"
                    />
                  </div>
                  <p className="text-xs text-[#73756E]/75 text-end pt-2">
                    Greater Noida / Delhi NCR, India
                  </p>
                </div>
              </div>

              {/* Narrative Content */}
              <div className="space-y-4 font-medium leading-6.5 text-sm text-[#20221F]/80">
                <p>
                  Hey, I&apos;m a software and AI engineer based in{" "}
                  <span className="font-semibold text-[#20221F]">India</span>.
                </p>

                <p>
                  Alongside engineering, I bring a{" "}
                  <span className="font-baskerville font-medium italic text-[#778A43]">
                    product architect
                  </span>{" "}
                  mindset — driven by solving real friction and the craft of painting
                  every interaction with tactile precision.
                </p>

                <p>
                  I&apos;m drawn to distributed backends,{" "}
                  <span className="font-semibold text-[#20221F]">
                    autonomous AI agents
                  </span>
                  , and{" "}
                  <span className="font-semibold text-[#778A43]">
                    real-time voice systems
                  </span>
                  , caring deeply about how complex systems operate beneath the surface.
                </p>

                <p>
                  I&apos;m focused on early-stage teams. As a{" "}
                  <span className="font-mono font-medium text-[#20221F] inline-block bg-[#20221F]/5 px-1 py-0.5 rounded">
                    <TextScramble text="founding engineer" />
                  </span>{" "}
                  and CTO at Upchaar 360, I&apos;ve put zero-to-one product shipping at
                  the center of everything I do — from shaping the architecture to
                  refining the smallest latency benchmark.
                </p>

                <div className="pt-6 border-t border-[#20221F]/10 space-y-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#73756E]">
                    Current Academic & Technical Foundation
                  </p>
                  <p className="text-xs text-[#73756E] leading-relaxed">
                    B.Tech in Computer Science & Engineering (AI/ML) at Noida
                    International University (2024–2028, CGPA 8.5/10). Specializing
                    in Python, PyTorch, LangChain, TypeScript, Next.js, FastAPI,
                    Docker, PostgreSQL, and WebRTC.
                  </p>
                </div>

                <p className="pt-4 text-xs text-[#73756E]">
                  Liked what you found? I&apos;m on{" "}
                  <a
                    href="https://x.com/codexuttam"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    className="underline text-[#20221F] hover:text-[#778A43] transition-colors"
                  >
                    X (twitter)
                  </a>
                  ,{" "}
                  <a
                    href="https://github.com/codexuttam"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    className="underline text-[#20221F] hover:text-[#778A43] transition-colors"
                  >
                    GitHub
                  </a>
                  , and{" "}
                  <a
                    href="https://www.linkedin.com/in/uttamraj-singh-054593259/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    className="underline text-[#20221F] hover:text-[#778A43] transition-colors"
                  >
                    LinkedIn
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Editorial Bottom Navigation */}
      <BottomDock onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}
