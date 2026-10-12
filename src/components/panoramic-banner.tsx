"use client";

import React, { useState } from "react";
import Image from "next/image";

export function PanoramicBanner() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 my-10 sm:my-16">
      <div className="group relative w-full aspect-[21/9] sm:aspect-[24/9] rounded-xl sm:rounded-2xl border border-[#20221F]/15 bg-[#171916] overflow-hidden shadow-lg">
        {/* Film grain effect */}
        <div className="absolute inset-0 bg-[#20221F]/15 z-10 pointer-events-none mix-blend-overlay" />

        {/* Panoramic image */}
        <Image
          src="/images/banner/editorial-banner.svg"
          alt="Architectural landscape study banner of Uttamraj Singh"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          onLoad={() => setIsLoaded(true)}
          className={`object-cover object-center filter contrast-[1.05] brightness-[0.98] transition-transform duration-1000 ease-out group-hover:scale-[1.02] ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Bottom minimal location caption (inspired by rahulgg.in's subtle corner caption) */}
        <div className="absolute bottom-3 right-4 sm:bottom-4 sm:right-6 z-20 flex items-center gap-2 font-mono text-[11px] text-[#E9E7E1]/80 bg-[#141512]/70 backdrop-blur-sm px-3 py-1 rounded border border-[#E9E7E1]/10">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C4E36C] animate-pulse" />
          <span>India // 28°38&apos;N 77°13&apos;E</span>
        </div>
      </div>
    </div>
  );
}
