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
                  based in India, building intelligent products from zero to one.
                </p>

                <p>
                  I bring a{" "}
                  <span className="font-baskerville font-medium italic text-[#778A43]">
                    product architect&apos;s
                  </span>{" "}
                  mindset to engineering, working across AI systems, autonomous agents, distributed backends, and real-time voice technology. I&apos;m passionate about turning complex ideas into scalable products, with an eye for architecture, performance, and the finer details of user experience.
                </p>

                <p>
                  Currently building at{" "}
                  <a
                    href="https://www.upchar360.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    className="text-[#20221F] underline decoration-[#20221F]/30 hover:decoration-[#778A43] hover:text-[#778A43] transition-colors duration-200 underline-offset-2"
                  >
                    Upchaar 360
                  </a>
                  , with experience at{" "}
                  <a
                    href="https://bitlancetechhub.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    className="text-[#20221F] underline decoration-[#20221F]/30 hover:decoration-[#778A43] hover:text-[#778A43] transition-colors duration-200 underline-offset-2"
                  >
                    Bitlance
                  </a>{" "}
                  and projects like{" "}
                  <a
                    href="https://samadhan-setu-sandy.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    className="text-[#20221F] underline decoration-[#20221F]/30 hover:decoration-[#778A43] hover:text-[#778A43] transition-colors duration-200 underline-offset-2"
                  >
                    Samadhan Setu
                  </a>
                  .
                </p>

                <p>
                  I thrive in early-stage environments where engineering, experimentation, and product thinking come together to create meaningful impact.
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
