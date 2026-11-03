"use client";

import React from "react";

interface RopeUnderlineProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export function RopeUnderline({
  children,
  className = "",
  color = "#88987E", // Sage green matching the uploaded reference
}: RopeUnderlineProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="absolute -bottom-1.5 left-0 w-full h-[8px] overflow-hidden pointer-events-none"
      >
        <svg
          className="absolute top-0 left-0 h-full w-[300%] animate-rope-slide"
          viewBox="0 0 600 12"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Main textured rope stroke */}
          <path
            d="M 0 6 Q 15 1, 30 6 T 60 6 T 90 6 T 120 6 T 150 6 T 180 6 T 210 6 T 240 6 T 270 6 T 300 6 T 330 6 T 360 6 T 390 6 T 420 6 T 450 6 T 480 6 T 510 6 T 540 6 T 570 6 T 600 6"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Secondary organic sketch filament creating realistic rope twist */}
          <path
            d="M 0 7 Q 15 10, 30 7 T 60 7 T 90 7 T 120 7 T 150 7 T 180 7 T 210 7 T 240 7 T 270 7 T 300 7 T 330 7 T 360 7 T 390 7 T 420 7 T 450 7 T 480 7 T 510 7 T 540 7 T 570 7 T 600 7"
            stroke={color}
            strokeWidth="1.2"
            strokeOpacity="0.7"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </span>
  );
}

