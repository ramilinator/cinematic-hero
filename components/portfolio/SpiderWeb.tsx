"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type SpiderWebProps = {
  className?: string;
};

const SPOKE_COUNT = 8;
const START_ANGLE = -Math.PI / 8;
const RADII = [8, 14, 20, 26, 32, 38, 44, 50];

function getOctagonPoint(radius: number, index: number) {
  const angle = START_ANGLE + (index * Math.PI * 2) / SPOKE_COUNT;

  return {
    x: Number((50 + Math.cos(angle) * radius).toFixed(4)),
    y: Number((50 + Math.sin(angle) * radius).toFixed(4)),
  };
}

function createContinuousWebPath() {
  const commands: string[] = [];

  // Begin at the center.
  commands.push("M 50 50");

  // Connect to the first octagon, then complete 8 outward rounds.
  RADII.forEach((radius, roundIndex) => {
    const direction = roundIndex % 2 === 0 ? 1 : -1;

    // Each round starts where the previous round ended.
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

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const spokes = Array.from(
        web.querySelectorAll<SVGLineElement>("[data-web-spoke]"),
      );

      const webbing = web.querySelector<SVGPathElement>(
        "[data-web-continuous-path]",
      );

      if (!webbing) return;

      spokes.forEach((spoke) => {
        const length = spoke.getTotalLength();

        gsap.set(spoke, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 0.85,
        });
      });

      const webbingLength = webbing.getTotalLength();

      gsap.set(webbing, {
        strokeDasharray: webbingLength,
        strokeDashoffset: webbingLength,
        opacity: 0.9,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: web,
          start: "top top",
          end: "+=100%",
          scrub: 1,
        },
      });

      timeline
        .to(
          spokes,
          {
            strokeDashoffset: 0,
            duration: 0.7,
            stagger: 0.06,
            ease: "none",
          },
          0,
        )
        .to(
          webbing,
          {
            strokeDashoffset: 0,
            duration: 1.3,
            ease: "none",
          },
          0.5,
        );
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
        {/* Radial strands */}
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

        {/* One uninterrupted path: center outward through 8 octagonal rounds */}
        <path data-web-continuous-path d={createContinuousWebPath()} />
      </g>
    </svg>
  );
}
