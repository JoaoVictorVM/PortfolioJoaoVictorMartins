"use client";

import { TechBadge } from "./techBadge";
import type { Technology } from "@/lib/tec-data";

interface InfiniteMarqueeProps {
  technologies: Technology[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
}

export function InfiniteMarquee({
  technologies,
  direction = "left",
  speed = "normal",
}: InfiniteMarqueeProps) {
  const speedDurations = {
    slow: 40,
    normal: 25,
    fast: 15,
  };

  const duration = speedDurations[speed];

  return (
    <>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .marquee-track {
          animation: scroll ${duration}s linear infinite;
          animation-direction: ${direction === "right" ? "reverse" : "normal"};
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="relative overflow-hidden py-4">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 rounded-l-2xl border-l border-[var(--cor-escuro-4)]" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 rounded-r-2xl border-r border-[var(--cor-escuro-4)]" />

        <div className="marquee-track flex gap-4 w-max">
          {/* Triple the items for seamless loop */}
          {[...Array(3)].map((_, setIndex) =>
            technologies.map((tech, index) => (
              <div key={`set-${setIndex}-${index}`} className="flex-shrink-0">
                <TechBadge name={tech.name} icon={tech.icon} size="md" />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
