"use client";

import React, { useState, useEffect, useRef } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
  speed?: number;
}

const CHARACTERS = "abcdefghijklmnopqrstuvwxyz0123456789!<>-_\\/[]{}—=+*^?#________";

export function TextScramble({
  text,
  className = "",
  triggerOnHover = true,
  speed = 30,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [prevText, setPrevText] = useState(text);
  const isScramblingRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  if (text !== prevText) {
    setPrevText(text);
    setDisplayText(text);
  }

  const scramble = () => {
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

    let iteration = 0;
    const maxIterations = text.length;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("");
      });

      iteration += 1 / 2;

      if (iteration >= maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        isScramblingRef.current = false;
      }
    }, speed);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      className={`inline-block font-mono cursor-default select-none ${className}`}
      onMouseEnter={triggerOnHover ? scramble : undefined}
    >
      {displayText}
    </span>
  );
}
