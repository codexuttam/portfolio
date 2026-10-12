"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hasCustomPortrait, setHasCustomPortrait] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Pointer tilt physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Check if user has uploaded a custom portrait
  useEffect(() => {
    const testImg = new window.Image();
    testImg.src = "/images/portrait/portrait.jpg";
    testImg.onload = () => setHasCustomPortrait(true);
    testImg.onerror = () => setHasCustomPortrait(false);
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-6 pb-20 md:py-24 border-b border-[#20221F]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Statement & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Professional Descriptor */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#778A43]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#73756E]">
                {profileData.role}
              </span>
            </div>

            {/* Oversized Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight text-[#20221F] leading-[1.08] mb-8">
              {profileData.headlinePrefix}{" "}
              <span className="font-serif-italic font-normal text-[#778A43] underline decoration-[#C4E36C]/70 decoration-2 underline-offset-8">
                {profileData.headlineEmphasis}
              </span>
            </h1>

            {/* Introduction Copy */}
            <p className="text-lg sm:text-xl text-[#73756E] leading-relaxed max-w-2xl font-light mb-10">
              {profileData.bioIntro}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-14">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#20221F] text-[#E9E7E1] font-medium text-sm rounded-full hover:bg-[#778A43] transition-all duration-200 shadow-sm"
              >
                <span>Explore selected work</span>
                <ArrowDownRight className="w-4 h-4 text-[#C4E36C] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#about"
                className="group inline-flex items-center gap-2 px-6 py-3.5 border border-[#20221F]/20 text-[#20221F] font-medium text-sm rounded-full hover:border-[#20221F] hover:bg-[#20221F]/5 transition-all duration-200"
              >
                <span>A little about me</span>
                <ArrowRight className="w-4 h-4 text-[#73756E] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Metadata Row */}
            <div className="pt-8 border-t border-[#20221F]/10 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-[#73756E]">
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#20221F]/50 mb-1">
                  LOCATION
                </span>
                <p className="text-[#20221F] font-medium">{profileData.location}</p>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#20221F]/50 mb-1">
                  DISCIPLINE
                </span>
                <p className="text-[#20221F] font-medium">{profileData.discipline}</p>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#20221F]/50 mb-1">
                  FOCUS
                </span>
                <p className="text-[#20221F] font-medium">{profileData.currentFocus}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              {/* Perspective Card Container */}
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="group relative rounded-xl border border-[#20221F]/15 bg-[#20221F] shadow-2xl overflow-hidden cursor-crosshair transition-shadow duration-300"
              >
                {/* Portrait Canvas with cinematic grading */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#1E201C]">
                  {/* Subtle noise texture */}
                  <div className="absolute inset-0 bg-[#20221F]/10 z-10 pointer-events-none mix-blend-overlay" />

                  {/* Cinematic color grading overlay */}
                  <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#141612] via-transparent to-[#20221F]/30" />

                  <Image
                    src={
                      hasCustomPortrait
                        ? "/images/portrait/portrait.jpg"
                        : "/images/portrait/editorial-portrait.svg"
                    }
                    alt="Editorial portrait representation of Uttamraj Singh"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                    onLoad={() => setImageLoaded(true)}
                    className={`object-cover object-center filter contrast-[1.08] saturate-[0.88] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                {/* Minimal Caption at bottom of photograph */}
                <div className="absolute bottom-0 inset-x-0 z-20 p-4 bg-gradient-to-t from-[#141612] via-[#141612]/90 to-transparent flex items-center justify-between border-t border-[#E9E7E1]/10 font-mono text-[11px] text-[#E9E7E1]/80">
                  <span className="tracking-widest">
                    UTTAMRAJ SINGH — 2026 ARCHIVE
                  </span>
                  <span className="text-[#C4E36C] font-semibold tracking-wider">
                    [REF: US-01]
                  </span>
                </div>
              </motion.div>

              {/* Circular Editorial Stamp overlapping frame */}
              <div
                className="absolute -top-5 -right-5 z-30 pointer-events-none w-24 h-24 rounded-full bg-[#E9E7E1] border border-[#20221F]/20 shadow-lg flex items-center justify-center p-1.5"
                aria-hidden="true"
              >
                <div className="relative w-full h-full rounded-full border border-dashed border-[#778A43]/50 flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full animate-[spin_20s_linear_infinite]"
                  >
                    <path
                      id="stampPath"
                      d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                      fill="none"
                    />
                    <text
                      fontSize="9.5"
                      fontFamily="'JetBrains Mono', monospace"
                      fontWeight="500"
                      fill="#20221F"
                      letterSpacing="2.2"
                    >
                      <textPath href="#stampPath" startOffset="0%">
                        • UTTAMRAJ • AI &amp; SOFTWARE • 2026
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute h-2 w-2 rounded-full bg-[#778A43]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
