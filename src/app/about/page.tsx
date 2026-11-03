"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BottomDock } from "@/components/bottom-dock";
import { CommandPalette } from "@/components/command-palette";
import { TextScramble } from "@/components/text-scramble";
import { soundManager } from "@/utils/audio";
import { ScrambleCursor } from "@/components/scramble-cursor";
import { HeartHover } from "@/components/heart-hover";
import { RopeUnderline } from "@/components/rope-underline";
import { SkillsSection } from "@/components/skills-section";

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
    <div className="min-h-screen bg-[#E3EBD8] text-[#1E231B] selection:bg-[#BFDF64] selection:text-[#1E231B]">
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
                      src="/images/portrait/portrait.jpg"
                      alt="Uttamraj Singh portrait"
                      fill
                      priority
                      className="w-full h-full object-cover object-center inline-block"
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
                  I&apos;m a{" "}
                  <span className="font-semibold text-[#20221F]">
                    Software &amp; AI Engineer
                  </span>{" "}
                  based in{" "}
                  <span className="inline-flex items-center gap-1.5 font-semibold text-[#20221F]">
                    <span>India</span>
                    <span className="inline-flex items-center justify-center w-5 h-3.5 rounded-[2px] overflow-hidden shadow-xs border border-[#20221F]/15">
                      <svg className="w-full h-full" viewBox="0 0 24 16">
                        <rect width="24" height="5.33" fill="#FF9933" />
                        <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />
                        <rect y="10.66" width="24" height="5.33" fill="#138808" />
                        <circle cx="12" cy="8" r="1.8" fill="#000080" />
                      </svg>
                    </span>
                  </span>
                  , building intelligent products from zero to one.
                </p>

                <p>
                  I bring a{" "}
                  <span className="relative inline-block font-baskerville italic text-[#4338CA] bg-[#4F46E5]/10 px-1.5 py-0.5 rounded shadow-[0_0_12px_rgba(99,102,241,0.18)]">
                    product architect&apos;s
                  </span>{" "}
                  mindset to engineering, working across AI systems, autonomous agents,{" "}
                  <RopeUnderline color="#88987E">
                    <span className="font-medium text-[#20221F]">
                      distributed backends
                    </span>
                  </RopeUnderline>
                  , and{" "}
                  <span className="font-medium text-[#20221F]">
                    real-time voice technology
                  </span>
                  . I&apos;m passionate about turning complex ideas into scalable products, with an eye for architecture, performance, and the finer details of user experience.
                </p>

                <p>
                  Currently working as a <ScrambleCursor text="Founding Engineer" /> at{" "}
                  <a
                    href="https://www.upchar360.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    className="relative inline-block font-baskerville italic text-[#C2410C] bg-[#EA580C]/10 px-1.5 py-0.5 rounded shadow-[0_0_12px_rgba(234,88,12,0.18)] hover:bg-[#EA580C]/20 transition-all duration-200"
                  >
                    Upchaar 360
                  </a>
                  , with experience at{" "}
                  <a
                    href="https://bitlancetechhub.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    className="relative inline-block font-baskerville italic text-[#047857] bg-[#059669]/10 px-1.5 py-0.5 rounded shadow-[0_0_12px_rgba(5,150,105,0.18)] hover:bg-[#059669]/20 transition-all duration-200"
                  >
                    Bitlance Tech Hub
                  </a>{" "}
                  and projects like{" "}
                  <a
                    href="https://samadhan-setu-sandy.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    className="relative inline-block font-baskerville italic text-[#6D28D9] bg-[#7C3AED]/10 px-1.5 py-0.5 rounded shadow-[0_0_12px_rgba(124,58,237,0.18)] hover:bg-[#7C3AED]/20 transition-all duration-200"
                  >
                    Samadhan Setu
                  </a>
                  .
                </p>

                <p>
                  I thrive in early-stage environments where engineering, experimentation, and product thinking come together to create meaningful impact.
                </p>

                <div className="pt-6 border-t border-[#20221F]/10 space-y-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#73756E]">
                    Current Academic & Technical Foundation
                  </p>

                  {/* Education */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 text-xs pb-1">
                    <div>
                      <span className="font-medium text-[#20221F]">
                        B.Tech in Computer Science & Engineering (AI/ML)
                      </span>
                      <span className="text-[#73756E]">
                        {" "}· Noida International University
                      </span>
                    </div>
                    <div className="font-mono text-[11px] text-[#73756E] shrink-0">
                      2024–2028 · CGPA: 8.5/10
                    </div>
                  </div>

                  {/* Technical Skills Collection with Interactive Animations */}
                  <SkillsSection />
                </div>

                <div className="pt-4 text-xs text-[#73756E] flex flex-wrap items-center gap-1.5">
                  <span>Liked what you found?</span>
                  <span>I&apos;m on</span>
                  <HeartHover>
                    <a
                      href="https://x.com/codexuttam"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundManager.playClick()}
                      className="underline text-[#20221F] hover:text-[#778A43] transition-colors"
                    >
                      X (twitter)
                    </a>
                  </HeartHover>
                  ,
                  <HeartHover>
                    <a
                      href="https://github.com/codexuttam"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundManager.playClick()}
                      className="underline text-[#20221F] hover:text-[#778A43] transition-colors"
                    >
                      GitHub
                    </a>
                  </HeartHover>
                  , and
                  <HeartHover>
                    <a
                      href="https://www.linkedin.com/in/uttamraj-singh-054593259/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundManager.playClick()}
                      className="underline text-[#20221F] hover:text-[#778A43] transition-colors"
                    >
                      LinkedIn
                    </a>
                  </HeartHover>
                  .
                </div>
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
