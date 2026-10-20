"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type SpiderWebProps = {
  className?: string;
};

const SPOKE_COUNT = 8;
const START_ANGLE = -Math.PI / 8;

// 19 rings with progressively increasing spacing.
const RADII = [
  4, 6, 9, 13, 18, 24, 31, 39, 48, 58, 70, 84, 100, 125, 155, 190, 230, 275,
  320,
];

function getOctagonPoint(radius: number, index: number) {
  const angle = START_ANGLE + (index * Math.PI * 2) / SPOKE_COUNT;

  return {
    x: Number((50 + Math.cos(angle) * radius).toFixed(4)),
    y: Number((50 + Math.sin(angle) * radius).toFixed(4)),
  };
}

// Original continuous alternating octagon web pattern.
function createContinuousWebPath() {
  const commands: string[] = ["M 50 50"];

  RADII.forEach((radius, roundIndex) => {
    const direction = roundIndex % 2 === 0 ? 1 : -1;
    const startIndex = direction === 1 ? 0 : SPOKE_COUNT - 1;

    const start = getOctagonPoint(radius, startIndex);
    commands.push(`L ${start.x} ${start.y}`);

    for (let step = 1; step <= SPOKE_COUNT; step++) {
      const index = (startIndex + direction * step + SPOKE_COUNT) % SPOKE_COUNT;

      const point = getOctagonPoint(radius, index);
      commands.push(`L ${point.x} ${point.y}`);
    }
  });

  return commands.join(" ");
}

export default function SpiderWeb({ className = "" }: SpiderWebProps) {
  const webRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const web = webRef.current;
    if (!web) return;

    const ctx = gsap.context(() => {
      const spokes = Array.from(
        web.querySelectorAll<SVGLineElement>("[data-web-spoke]"),
      );

      const webbing = web.querySelector<SVGPathElement>(
        "[data-web-continuous-path]",
      );

      const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5,
        defaults: {
          ease: "power2.out",
        },
      });

      // 1. Draw the spokes first.
      spokes.forEach((spoke, index) => {
        const length = spoke.getTotalLength();

        gsap.set(spoke, {
          strokeDasharray: `${length} ${length}`,
          strokeDashoffset: length,
          strokeLinecap: "round",
          opacity: 1,
        });

        timeline.to(
          spoke,
          {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.out",
          },
          2 + index * 0.2,
        );
      });

      // The last spoke finishes at this timeline position.
      const spokesFinishTime = (spokes.length - 1) * 0.2 + 1.5;

      // Draw the continuous webbing with progressively slower ring segments.
      if (webbing) {
        const totalLength = webbing.getTotalLength();

        gsap.set(webbing, {
          strokeDasharray: `${totalLength} ${totalLength}`,
          strokeDashoffset: totalLength,
          strokeLinecap: "round",
          opacity: 1,
        });

        const spokesFinishTime = (spokes.length - 1) * 0.2 + 1.5;

        const ringLengths = RADII.map((radius) => {
          // Approximate the path length added by each ring.
          return radius * 2 * Math.PI;
        });

        const totalRingLength = ringLengths.reduce(
          (sum, length) => sum + length,
          0,
        );

        let progress = 0;
        let position = spokesFinishTime + 0.15;

        ringLengths.forEach((ringLength, index) => {
          progress += ringLength / totalRingLength;

          const duration = 0.7 + index * 0.45;

          timeline.to(
            webbing,
            {
              strokeDashoffset: totalLength * (1 - progress),
              duration,
              ease: "power1.out",
            },
            position,
          );

          position += duration * 0.55;
        });
      }
    }, web);

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={webRef}
      data-hero-spiderweb
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <g
        fill="none"
        stroke="#F15A36"
        strokeWidth="0.25"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Radial spokes */}
        {Array.from({ length: SPOKE_COUNT }, (_, index) => {
          const angle = START_ANGLE + (index * Math.PI * 2) / SPOKE_COUNT;

          const x = Number((50 + Math.cos(angle) * 400).toFixed(4));

          const y = Number((50 + Math.sin(angle) * 400).toFixed(4));

          return (
            <line
              key={`spoke-${index}`}
              data-web-spoke
              x1="50"
              y1="50"
              x2={x}
              y2={y}
            />
          );
        })}

        {/* Single continuous webbing path */}
        <path data-web-continuous-path d={createContinuousWebPath()} />
      </g>
    </svg>
  );
}
