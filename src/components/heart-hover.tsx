"use client";

import React, { useState } from "react";
import { soundManager } from "@/utils/audio";

interface HeartHoverProps {
  children: React.ReactNode;
  className?: string;
}

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
  rot: number;
  scale: number;
  delayMs: number;
}

export function HeartHover({ children, className = "" }: HeartHoverProps) {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  const triggerHearts = () => {
    soundManager.playClick();
    const now = Date.now();
    const newHearts: FloatingHeart[] = [
      { id: now + 1, x: -14, y: -26, rot: -14, scale: 0.9, delayMs: 0 },
      { id: now + 2, x: 2, y: -38, rot: 8, scale: 1.1, delayMs: 80 },
      { id: now + 3, x: 18, y: -28, rot: 18, scale: 0.85, delayMs: 160 },
    ];
    setHearts(newHearts);

    setTimeout(() => {
      setHearts([]);
    }, 1400);
  };

  return (
    <span
      onMouseEnter={triggerHearts}
      className={`relative inline-block cursor-pointer select-none ${className}`}
    >
      {children}

      {/* Smooth Animated Floating Hearts */}
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute left-1/2 -top-2 pointer-events-none text-red-500 animate-float-heart z-40"
          style={{
            animationDelay: `${h.delayMs}ms`,
            transform: `translate(${h.x}px, ${h.y}px) rotate(${h.rot}deg) scale(${h.scale})`,
            fontSize: "13px",
            filter: "drop-shadow(0 2px 6px rgba(239, 68, 68, 0.45))",
          }}
        >
          ❤️
        </span>
      ))}
    </span>
  );
}
