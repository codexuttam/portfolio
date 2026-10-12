"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { EditorialProjectsSection } from "@/components/editorial-projects-section";
import { BottomDock } from "@/components/bottom-dock";
import { CommandPalette } from "@/components/command-palette";
import { soundManager } from "@/utils/audio";

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
    <div className="min-h-screen bg-[#E9E7E1] text-[#20221F] selection:bg-[#C4E36C] selection:text-[#20221F]">
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
                      src="/images/banner/editorial-banner.svg"
                      alt="Uttamraj Singh architectural and engineering landscape study banner"
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
                  <div className="font-medium pl-4 text-sm space-y-4 leading-6.5">
                    <p>Hi,</p>
                    <p>
                      I&apos;m Uttamraj Singh, an{" "}
                      <span className="italic font-baskerville text-[#20221F]">
                        AI
                      </span>{" "}
                      and{" "}
                      <span className="font-semibold text-[#20221F]">
                        software
                      </span>{" "}
                      engineer.
                    </p>
                    <p className="inline-hoverable-wrapper">
                      Currently working as founding CTO at{" "}
                      <a
                        href="https://upchaar360.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        className="group/curr-company hoverable-wrapper text-[#20221F]/80 underline decoration-[#20221F]/30 hover:decoration-wavy hover:decoration-[#20221F] hover:text-[#20221F] focus:decoration-wavy focus:decoration-[#20221F] focus:text-[#20221F] transition-colors duration-300 ease-out underline-offset-2"
                      >
                        Upchaar 360
                      </a>
                      , architecting end-to-end patient platforms, and engineering autonomous AI systems at{" "}
                      <a
                        href="https://bitlance.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        className="group/curr-company hoverable-wrapper text-[#20221F]/80 underline decoration-[#20221F]/30 hover:decoration-wavy hover:decoration-[#20221F] hover:text-[#20221F] focus:decoration-wavy focus:decoration-[#20221F] focus:text-[#20221F] transition-colors duration-300 ease-out underline-offset-2"
                      >
                        Bitlance Tech Hub
                      </a>
                      .
                    </p>
                  </div>
                </div>

                {/* Work Section */}
                <div className="hover-blur">
                  <h1 className="text-base font-normal font-baskerville text-[#73756E] pb-2">
                    Work
                  </h1>
                  <div className="font-medium pl-4 text-sm space-y-4 leading-6.5">
                    <p>
                      Over the past years, I&apos;ve worked in startups with great
                      teams and built things I care about from zero to one.
                    </p>
                    <div>
                      {/* Upchaar 360 */}
                      <a
                        href="https://upchaar360.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        onMouseEnter={() => soundManager.playTick()}
                        className="group/w-item hoverable-wrapper py-2 text-inherit inline-block w-full no-underline hover:text-[#20221F] hover:pr-4 focus:text-[#20221F] focus:pr-4 transition-all duration-300"
                      >
                        <div className="flex items-center justify-start gap-2">
                          <span className="inline-block group-hover/w-item:rotate-180 group-hover/w-item:translate-x-1 group-focus/w-item:rotate-180 group-focus/w-item:translate-x-1 leading-3 transition-transform duration-300 ease-out origin-[50%_55%] text-[#778A43]">
                            ✦
                          </span>
                          <p className="text-sm">Upchaar 360</p>
                          <span className="text-xs ml-auto font-medium text-[#73756E] group-hover/w-item:text-[#20221F] transition-colors duration-300">
                            2026
                          </span>
                        </div>
                      </a>

                      {/* Bitlance Tech Hub */}
                      <a
                        href="https://bitlance.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        onMouseEnter={() => soundManager.playTick()}
                        className="group/w-item hoverable-wrapper py-2 text-inherit inline-block w-full no-underline hover:text-[#20221F] hover:pr-4 focus:text-[#20221F] focus:pr-4 transition-all duration-300"
                      >
                        <div className="flex items-center justify-start gap-2">
                          <span className="inline-block group-hover/w-item:rotate-180 group-hover/w-item:translate-x-1 group-focus/w-item:rotate-180 group-focus/w-item:translate-x-1 leading-3 transition-transform duration-300 ease-out origin-[50%_55%] text-[#778A43]">
                            ✦
                          </span>
                          <p className="text-sm">Bitlance Tech Hub</p>
                          <span className="text-xs ml-auto font-medium text-[#73756E] group-hover/w-item:text-[#20221F] transition-colors duration-300">
                            2026
                          </span>
                        </div>
                      </a>

                      {/* QUANTA Innovation */}
                      <div
                        onMouseEnter={() => soundManager.playTick()}
                        className="group/w-item hoverable-wrapper py-2 text-inherit inline-block w-full no-underline hover:text-[#20221F] hover:pr-4 focus:text-[#20221F] focus:pr-4 transition-all duration-300 cursor-default"
                      >
                        <div className="flex items-center justify-start gap-2">
                          <span className="inline-block group-hover/w-item:rotate-180 group-hover/w-item:translate-x-1 group-focus/w-item:rotate-180 group-focus/w-item:translate-x-1 leading-3 transition-transform duration-300 ease-out origin-[50%_55%] text-[#73756E]">
                            ✧
                          </span>
                          <p className="text-sm">QUANTA Innovation</p>
                          <span className="text-xs ml-auto font-medium text-[#73756E] group-hover/w-item:text-[#20221F] transition-colors duration-300">
                            2025
                          </span>
                        </div>
                      </div>

                      {/* Noida International University */}
                      <div
                        onMouseEnter={() => soundManager.playTick()}
                        className="group/w-item hoverable-wrapper py-2 text-inherit inline-block w-full no-underline hover:text-[#20221F] hover:pr-4 focus:text-[#20221F] focus:pr-4 transition-all duration-300 cursor-default"
                      >
                        <div className="flex items-center justify-start gap-2">
                          <span className="inline-block group-hover/w-item:rotate-180 group-hover/w-item:translate-x-1 group-focus/w-item:rotate-180 group-focus/w-item:translate-x-1 leading-3 transition-transform duration-300 ease-out origin-[50%_55%] text-[#73756E]">
                            ✧
                          </span>
                          <p className="text-sm">Noida International University</p>
                          <span className="text-xs ml-auto font-medium text-[#73756E] group-hover/w-item:text-[#20221F] transition-colors duration-300">
                            2024–2028
                          </span>
                        </div>
                      </div>
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
                    {/* X (Twitter) */}
                    <div>
                      <a
                        href="https://x.com/codexuttam"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        onMouseEnter={() => soundManager.playTick()}
                        className="hoverable-wrapper group/social-link w-full hover:text-[#20221F] focus:text-[#20221F] transition-colors duration-300 text-inherit no-underline inline-block py-2"
                      >
                        <span className="inline-block text-xs group-hover/social-link:rotate-180 group-hover/social-link:translate-x-1 group-focus/social-link:rotate-180 group-focus/social-link:translate-x-1 leading-2.75 transition-transform duration-300 ease-out origin-center text-[#778A43]">
                          ✽
                        </span>
                        <span className="inline-block pl-2">X (twitter)</span>
                      </a>
                    </div>

                    {/* Email */}
                    <div>
                      <a
                        href="mailto:uttamraj8299@gmail.com"
                        onClick={() => soundManager.playClick()}
                        onMouseEnter={() => soundManager.playTick()}
                        className="hoverable-wrapper group/social-link w-full hover:text-[#20221F] focus:text-[#20221F] transition-colors duration-300 text-inherit no-underline inline-block py-2"
                      >
                        <span className="inline-block text-xs group-hover/social-link:rotate-180 group-hover/social-link:translate-x-1 group-focus/social-link:rotate-180 group-focus/social-link:translate-x-1 leading-2.75 transition-transform duration-300 ease-out origin-center text-[#778A43]">
                          ✽
                        </span>
                        <span className="inline-block pl-2">Email</span>
                      </a>
                    </div>

                    {/* GitHub */}
                    <div>
                      <a
                        href="https://github.com/codexuttam"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        onMouseEnter={() => soundManager.playTick()}
                        className="hoverable-wrapper group/social-link w-full hover:text-[#20221F] focus:text-[#20221F] transition-colors duration-300 text-inherit no-underline inline-block py-2"
                      >
                        <span className="inline-block text-xs group-hover/social-link:rotate-180 group-hover/social-link:translate-x-1 group-focus/social-link:rotate-180 group-focus/social-link:translate-x-1 leading-2.75 transition-transform duration-300 ease-out origin-center text-[#778A43]">
                          ✽
                        </span>
                        <span className="inline-block pl-2">GitHub</span>
                      </a>
                    </div>

                    {/* LinkedIn */}
                    <div>
                      <a
                        href="https://www.linkedin.com/in/uttamraj-singh-054593259/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        onMouseEnter={() => soundManager.playTick()}
                        className="hoverable-wrapper group/social-link w-full hover:text-[#20221F] focus:text-[#20221F] transition-colors duration-300 text-inherit no-underline inline-block py-2"
                      >
                        <span className="inline-block text-xs group-hover/social-link:rotate-180 group-hover/social-link:translate-x-1 group-focus/social-link:rotate-180 group-focus/social-link:translate-x-1 leading-2.75 transition-transform duration-300 ease-out origin-center text-[#778A43]">
                          ✽
                        </span>
                        <span className="inline-block pl-2">LinkedIn</span>
                      </a>
                    </div>

                    {/* Resume */}
                    <div>
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        onMouseEnter={() => soundManager.playTick()}
                        className="hoverable-wrapper group/social-link w-full hover:text-[#20221F] focus:text-[#20221F] transition-colors duration-300 text-inherit no-underline inline-block py-2"
                      >
                        <span className="inline-block text-xs group-hover/social-link:rotate-180 group-hover/social-link:translate-x-1 group-focus/social-link:rotate-180 group-focus/social-link:translate-x-1 leading-2.75 transition-transform duration-300 ease-out origin-center text-[#778A43]">
                          ✽
                        </span>
                        <span className="inline-block pl-2">Resume (PDF)</span>
                      </a>
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
