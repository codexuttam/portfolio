"use client";

import React from "react";

export function EditorialTicker() {
  const items = [
    "AI SYSTEMS ARCHITECTURE",
    "END-TO-END APPLIED MACHINE LEARNING",
    "AUTONOMOUS AGENT ORCHESTRATION",
    "FULL-DUPLEX VOICE PIPELINES",
    "POSTGRESQL & PRISMA CONTRACTS",
    "TACTILE INTERACTION DESIGN",
    "DETERMINISTIC STRUCTURED SYNTHESIS",
    "PRODUCTION RESILIENCE OVER PROTOTYPE DEMOS",
  ];

  return (
    <aside
      aria-label="Editorial highlights ticker"
      className="w-full border-y border-[#20221F]/10 bg-[#20221F]/[0.025] py-3.5 overflow-hidden font-mono text-xs select-none"
    >
      <div className="flex w-max animate-ticker">
        {/* Doubled list for smooth infinite CSS loop */}
        {[...items, ...items].map((item, index) => (
          <div key={index} className="inline-flex items-center px-6 text-[#20221F]/80">
            <span className="tracking-[0.18em]">{item}</span>
            <span className="ml-6 h-1.5 w-1.5 rounded-full bg-[#778A43]" />
          </div>
        ))}
      </div>
    </aside>
  );
}
