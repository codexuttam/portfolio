"use client";

import React, { useState } from "react";
import { soundManager } from "@/utils/audio";

interface HeartHoverProps {
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
  rot: number;
  scale: number;
}

export function HeartHover({
  text,
  children,
  className = "",
}: HeartHoverProps) {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  const triggerHearts = () => {
    soundManager.playClick();
    const newHearts: FloatingHeart[] = [
      { id: Date.now() + 1, x: -16, y: -26, rot: -18, scale: 0.9 },
      { id: Date.now() + 2, x: 4, y: -38, rot: 8, scale: 1.15 },
      { id: Date.now() + 3, x: 24, y: -28, rot: 22, scale: 0.85 },
      { id: Date.now() + 4, x: -32, y: -34, rot: -28, scale: 0.75 },
    ];
    setHearts(newHearts);

    setTimeout(() => {
      setHearts([]);
    }, 1200);
  };

  return (
    <span
      onMouseEnter={triggerHearts}
      className={`relative inline-block cursor-pointer group select-none ${className}`}
    >
      <span className="group-hover:text-[#20221F] transition-colors duration-200">
        {children || text}
      </span>

      {/* Floating Animated Hearts */}
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute left-1/2 pointer-events-none text-red-500 animate-float-heart z-30"
          style={{
            transform: `translate(${h.x}px, ${h.y}px) rotate(${h.rot}deg) scale(${h.scale})`,
            fontSize: "14px",
            filter: "drop-shadow(0 2px 4px rgba(239, 68, 68, 0.4))",
          }}
        >
          ❤️
        </span>
      ))}
    </span>
  );
}
