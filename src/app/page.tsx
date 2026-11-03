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
                      I&apos;m a{" "}
                      <span className="font-semibold text-[#20221F]">
                        Software &amp; AI Engineer
                      </span>{" "}
                      based in India, building intelligent products from zero to one.
                    </p>
                    <p>
                      I combine engineering depth with a{" "}
                      <span className="italic font-baskerville text-[#20221F]">
                        product architect&apos;s
                      </span>{" "}
                      mindset, working across distributed backends, autonomous AI agents, and real-time voice systems. I care about the details beneath the interface — architecture, performance, latency, and every interaction in between.
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
                      , with experience shipping products and AI-driven systems at{" "}
                      <a
                        href="https://www.bitlancetechhub.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        className="text-[#20221F] underline decoration-[#20221F]/30 hover:decoration-[#778A43] hover:text-[#778A43] transition-colors duration-200 underline-offset-2"
                      >
                        Bitlance
                      </a>{" "}
                      and building solutions like{" "}
                      <a
                        href="https://samadhan-setu-g8en.onrender.com/"
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
                      I thrive in early-stage environments where ideas turn into products and engineering meets real-world impact.
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
                          <p className="text-sm">Upchaar 360</p>
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
                          <p className="text-sm">Bitlance Tech Hub</p>
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
                          <p className="text-sm">QUANTA Innovation</p>
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
                          <p className="text-sm">Freelance Web Developer</p>
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
                    </div>

                    {/* GitHub */}
                    <div>
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
