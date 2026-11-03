"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { EditorialProjectsSection } from "@/components/editorial-projects-section";
import { BottomDock } from "@/components/bottom-dock";
import { CommandPalette } from "@/components/command-palette";
import { soundManager } from "@/utils/audio";
import { ScrambleCursor } from "@/components/scramble-cursor";
import { HeartHover } from "@/components/heart-hover";

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
    <div className="min-h-screen bg-[#E3EBD8] text-[#1E231B] selection:bg-[#BFDF64] selection:text-[#1E231B]">
      <main className="mx-6 page-init">
        <div className="max-w-158 mx-auto">
          <div className="pt-20 pb-32">
            <div className="space-y-10 profile-page">
              {/* Header Profile & Panoramic Banner (inspired by rahulgg.in) */}
              <div className="space-y-8 hover-blur">
                <div className="text-base font-semibold">
                  <p>Profile</p>
                </div>
                <div>
                  <div className="relative w-full aspect-[632/356] overflow-hidden border border-[#20221F]/10 bg-[#20221F]/5 shadow-sm">
                    <Image
                      src="/images/banner/editorial-banner.jpg"
                      alt="Uttamraj Singh serene landscape banner"
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

              {/* Main Content Flow */}
              <div className="text-[#20221F]/80 space-y-12">
                {/* About Section */}
                <div className="hover-blur">
                  <h1 className="text-base font-normal font-baskerville text-[#73756E] pb-2">
                    About
                  </h1>
                  <div className="font-medium pl-4 text-sm leading-6.5 space-y-3">
                    <p>
                      Hi,
                    </p>
                    <p>
                      I&apos;m{" "}
                      <span className="font-semibold text-[#20221F]">
                        Uttamraj Singh
                      </span>
                      , a software and AI engineer who loves building products from the ground up.
                    </p>
                    <p>
                      Currently working as a <ScrambleCursor text="Founding Engineer" /> at{" "}
                      <a
                        href="https://www.upchar360.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        className="relative inline-block font-baskerville italic text-[#4338CA] bg-[#4F46E5]/10 px-1.5 py-0.5 rounded shadow-[0_0_12px_rgba(99,102,241,0.18)] hover:bg-[#4F46E5]/20 transition-all duration-200"
                      >
                        Upchaar 360
                      </a>
                      , with experience building AI-powered products and systems at{" "}
                      <a
                        href="https://bitlancetechhub.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        className="relative inline-block font-baskerville italic text-[#4338CA] bg-[#4F46E5]/10 px-1.5 py-0.5 rounded shadow-[0_0_12px_rgba(99,102,241,0.18)] hover:bg-[#4F46E5]/20 transition-all duration-200"
                      >
                        Bitlance
                      </a>
                      , from architecture to deployment.
                    </p>
                  </div>
                </div>

                {/* Work Section */}
                <div className="hover-blur">
                  <h1 className="text-base font-normal font-baskerville text-[#73756E] pb-2">
                    Work
                  </h1>
                  <div className="font-medium pl-4 text-sm leading-6.5">
                    <p className="pb-1.5">
                      Over the past years, I&apos;ve worked in startups with great
                      teams and built things I care about from zero to one.
                    </p>
                    <div className="pt-0.5">
                      {/* Upchaar 360 */}
                      <a
                        href="https://www.upchar360.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        onMouseEnter={() => soundManager.playTick()}
                        className="group/w-item hoverable-wrapper py-1.5 text-inherit inline-block w-full no-underline hover:text-[#20221F] focus:text-[#20221F] transition-colors duration-300"
                      >
                        <div className="flex items-center justify-start gap-2">
                          <span className="inline-block group-hover/w-item:rotate-180 group-hover/w-item:translate-x-1 group-focus/w-item:rotate-180 group-focus/w-item:translate-x-1 leading-3 transition-transform duration-300 ease-out origin-[50%_55%] text-[#778A43]">
                            ✦
                          </span>
                          <span className="text-sm transition-all duration-200 px-1 py-0.5 rounded group-hover/w-item:text-[#4338CA] group-hover/w-item:bg-[#4F46E5]/10 group-hover/w-item:shadow-[0_0_12px_rgba(99,102,241,0.18)]">
                            Upchaar 360
                          </span>
                          <span className="text-xs ml-auto font-mono text-[#73756E] group-hover/w-item:text-[#20221F] transition-colors duration-300 text-right shrink-0">
                            2026
                          </span>
                        </div>
                      </a>

                      {/* Bitlance Tech Hub */}
                      <a
                        href="https://www.bitlancetechhub.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        onMouseEnter={() => soundManager.playTick()}
                        className="group/w-item hoverable-wrapper py-1.5 text-inherit inline-block w-full no-underline hover:text-[#20221F] focus:text-[#20221F] transition-colors duration-300"
                      >
                        <div className="flex items-center justify-start gap-2">
                          <span className="inline-block group-hover/w-item:rotate-180 group-hover/w-item:translate-x-1 group-focus/w-item:rotate-180 group-focus/w-item:translate-x-1 leading-3 transition-transform duration-300 ease-out origin-[50%_55%] text-[#778A43]">
                            ✦
                          </span>
                          <span className="text-sm transition-all duration-200 px-1 py-0.5 rounded group-hover/w-item:text-[#4338CA] group-hover/w-item:bg-[#4F46E5]/10 group-hover/w-item:shadow-[0_0_12px_rgba(99,102,241,0.18)]">
                            Bitlance Tech Hub
                          </span>
                          <span className="text-xs ml-auto font-mono text-[#73756E] group-hover/w-item:text-[#20221F] transition-colors duration-300 text-right shrink-0">
                            2026
                          </span>
                        </div>
                      </a>

                      {/* QUANTA Innovation */}
                      <div
                        onMouseEnter={() => soundManager.playTick()}
                        className="group/w-item hoverable-wrapper py-1.5 text-inherit inline-block w-full no-underline hover:text-[#20221F] focus:text-[#20221F] transition-colors duration-300 cursor-default"
                      >
                        <div className="flex items-center justify-start gap-2">
                          <span className="inline-block group-hover/w-item:rotate-180 group-hover/w-item:translate-x-1 group-focus/w-item:rotate-180 group-focus/w-item:translate-x-1 leading-3 transition-transform duration-300 ease-out origin-[50%_55%] text-[#73756E]">
                            ✧
                          </span>
                          <span className="text-sm transition-all duration-200 px-1 py-0.5 rounded group-hover/w-item:text-[#4338CA] group-hover/w-item:bg-[#4F46E5]/10 group-hover/w-item:shadow-[0_0_12px_rgba(99,102,241,0.18)]">
                            QUANTA Innovation
                          </span>
                          <span className="text-xs ml-auto font-mono text-[#73756E] group-hover/w-item:text-[#20221F] transition-colors duration-300 text-right shrink-0">
                            2025
                          </span>
                        </div>
                      </div>

                      {/* Freelance Web Developer */}
                      <a
                        href="#contact"
                        onClick={() => soundManager.playClick()}
                        onMouseEnter={() => soundManager.playTick()}
                        className="group/w-item hoverable-wrapper py-1.5 text-inherit inline-block w-full no-underline hover:text-[#20221F] focus:text-[#20221F] transition-colors duration-300"
                      >
                        <div className="flex items-center justify-start gap-2">
                          <span className="inline-block group-hover/w-item:rotate-180 group-hover/w-item:translate-x-1 group-focus/w-item:rotate-180 group-focus/w-item:translate-x-1 leading-3 transition-transform duration-300 ease-out origin-[50%_55%] text-[#778A43]">
                            ✦
                          </span>
                          <span className="text-sm transition-all duration-200 px-1 py-0.5 rounded group-hover/w-item:text-[#4338CA] group-hover/w-item:bg-[#4F46E5]/10 group-hover/w-item:shadow-[0_0_12px_rgba(99,102,241,0.18)]">
                            Freelance Web Developer
                          </span>
                          <span className="text-xs ml-auto font-mono text-[#73756E] group-hover/w-item:text-[#20221F] transition-colors duration-300 text-right shrink-0">
                            2024–Lifetime
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Projects Section (with exact rotating glyphs, 2.7px blur, and floating preview card) */}
                <EditorialProjectsSection />

                {/* Links Section */}
                <section className="hover-blur">
                  <h1 className="text-base font-normal font-baskerville text-[#73756E] pb-2">
                    Links
                  </h1>
                  <div className="pl-4 font-medium text-sm">
                    {/* LinkedIn */}
                    <div>
                      <HeartHover className="w-full block">
                        <a
                          href="https://www.linkedin.com/in/uttamraj-singh-054593259/"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => soundManager.playClick()}
                          onMouseEnter={() => soundManager.playTick()}
                          className="hoverable-wrapper group/social-link w-full hover:text-[#20221F] focus:text-[#20221F] transition-colors duration-300 text-inherit no-underline inline-block py-1.5"
                        >
                          <span className="inline-block text-xs group-hover/social-link:rotate-180 group-hover/social-link:translate-x-1 group-focus/social-link:rotate-180 group-focus/social-link:translate-x-1 leading-2.75 transition-transform duration-300 ease-out origin-center text-[#778A43]">
                            ✽
                          </span>
                          <span className="inline-block pl-2">LinkedIn</span>
                        </a>
                      </HeartHover>
                    </div>

                    {/* GitHub */}
                    <div>
                      <HeartHover className="w-full block">
                        <a
                          href="https://github.com/codexuttam"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => soundManager.playClick()}
                          onMouseEnter={() => soundManager.playTick()}
                          className="hoverable-wrapper group/social-link w-full hover:text-[#20221F] focus:text-[#20221F] transition-colors duration-300 text-inherit no-underline inline-block py-1.5"
                        >
                          <span className="inline-block text-xs group-hover/social-link:rotate-180 group-hover/social-link:translate-x-1 group-focus/social-link:rotate-180 group-focus/social-link:translate-x-1 leading-2.75 transition-transform duration-300 ease-out origin-center text-[#778A43]">
                            ✽
                          </span>
                          <span className="inline-block pl-2">GitHub</span>
                        </a>
                      </HeartHover>
                    </div>

                    {/* Email */}
                    <div>
                      <a
                        href="mailto:uttamraj8299@gmail.com"
                        onClick={() => soundManager.playClick()}
                        onMouseEnter={() => soundManager.playTick()}
                        className="hoverable-wrapper group/social-link w-full hover:text-[#20221F] focus:text-[#20221F] transition-colors duration-300 text-inherit no-underline inline-block py-1.5"
                      >
                        <span className="inline-block text-xs group-hover/social-link:rotate-180 group-hover/social-link:translate-x-1 group-focus/social-link:rotate-180 group-focus/social-link:translate-x-1 leading-2.75 transition-transform duration-300 ease-out origin-center text-[#778A43]">
                          ✽
                        </span>
                        <span className="inline-block pl-2">Email</span>
                      </a>
                    </div>

                    {/* X (Twitter) */}
                    <div>
                      <HeartHover className="w-full block">
                        <a
                          href="https://x.com/codexuttam"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => soundManager.playClick()}
                          onMouseEnter={() => soundManager.playTick()}
                          className="hoverable-wrapper group/social-link w-full hover:text-[#20221F] focus:text-[#20221F] transition-colors duration-300 text-inherit no-underline inline-block py-1.5"
                        >
                          <span className="inline-block text-xs group-hover/social-link:rotate-180 group-hover/social-link:translate-x-1 group-focus/social-link:rotate-180 group-focus/social-link:translate-x-1 leading-2.75 transition-transform duration-300 ease-out origin-center text-[#778A43]">
                            ✽
                          </span>
                          <span className="inline-block pl-2">X (twitter)</span>
                        </a>
                      </HeartHover>
                    </div>

                    {/* Resume */}
                    <div>
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        onMouseEnter={() => soundManager.playTick()}
                        className="hoverable-wrapper group/social-link w-full hover:text-[#20221F] focus:text-[#20221F] transition-colors duration-300 text-inherit no-underline inline-block py-1.5"
                      >
                        <span className="inline-block text-xs group-hover/social-link:rotate-180 group-hover/social-link:translate-x-1 group-focus/social-link:rotate-180 group-focus/social-link:translate-x-1 leading-2.75 transition-transform duration-300 ease-out origin-center text-[#778A43]">
                          ✽
                        </span>
                        <span className="inline-block pl-2">Resume (PDF)</span>
                      </a>
                    </div>

                    {/* Liked what you found footer note (no hearts) */}
                    <div className="pt-4 border-t border-[#20221F]/10">
                      <p className="text-xs text-[#73756E] flex items-center gap-1.5 font-medium">
                        <span>Liked what you found?</span>
                        <span>Let&apos;s build something meaningful together.</span>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Editorial Bottom Dock (Profile / About / Audio / Search) */}
      <BottomDock onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}
