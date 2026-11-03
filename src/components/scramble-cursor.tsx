"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { soundManager } from "@/utils/audio";

interface ScrambleCursorProps {
  text: string;
  className?: string;
}

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>_\\/[]{}=+*^?#";

export function ScrambleCursor({ text, className = "" }: ScrambleCursorProps) {
  const [displayText, setDisplayText] = useState(text);
  const [cursorPos, setCursorPos] = useState<number | null>(null);
  const isRunningRef = useRef(false);
  const animFrameRef = useRef<NodeJS.Timeout | null>(null);

  const startScramble = useCallback(() => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;
    soundManager.playTick();

    let step = 0;
    const totalSteps = text.length;
    const speed = 65; // ms per tick - deliberate, clear cyber-decoding speed

    if (animFrameRef.current) clearInterval(animFrameRef.current);

    animFrameRef.current = setInterval(() => {
      const activeIdx = Math.floor(step);
      setCursorPos(activeIdx < text.length ? activeIdx : null);

      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " " || char === "&") return char;
            if (index < activeIdx) {
              return text[index];
            }
            if (index === activeIdx) {
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );

      // Slower incremental step: ~4 ticks per character for visible, satisfying scramble
      step += 0.28;

      if (step >= totalSteps + 1) {
        if (animFrameRef.current) clearInterval(animFrameRef.current);
        setDisplayText(text);
        setCursorPos(null);
        isRunningRef.current = false;
      }
    }, speed);
  }, [text]);

  useEffect(() => {
    return () => {
      if (animFrameRef.current) clearInterval(animFrameRef.current);
    };
  }, []);

  return (
    <span
      onMouseEnter={startScramble}
      className={`inline-flex items-center font-mono font-bold tracking-wider cursor-pointer select-none text-[#20221F] bg-[#20221F]/5 hover:bg-[#20221F]/10 px-2 py-0.5 rounded transition-colors whitespace-pre ${className}`}
    >
      {displayText.split("").map((char, idx) => {
        const isCursor = cursorPos === idx;
        const renderChar = char === " " ? "\u00A0" : char;
        return (
          <span
            key={idx}
            className={`transition-all ${
              isCursor
                ? "bg-[#22C55E] text-[#0C120E] px-[1px] rounded-[2px] font-black shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                : ""
            }`}
          >
            {renderChar}
          </span>
        );
      })}
      {cursorPos === null && (
        <span className="w-1.5 h-3 ml-1 bg-[#22C55E] inline-block animate-pulse rounded-[1px]" />
      )}
    </span>
  );
}
