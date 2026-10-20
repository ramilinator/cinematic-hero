"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type WebDroppingSpiderProps = {
  className?: string;
  duration?: number;
  delay?: number;
};

const CENTER = 50;
const SPOKE_ANGLE = 40;
const LINE_COUNT = 4;
const SPOKE_STEP = 45;

function getEdgePoint(angleDegrees: number) {
  const angle = (angleDegrees * Math.PI) / 180;
  const dx = Math.cos(angle);
  const dy = Math.sin(angle);
  const scale = 50 / Math.max(Math.abs(dx), Math.abs(dy));

  return {
    x: CENTER + dx * scale,
    y: CENTER + dy * scale,
  };
}

function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

// Generate four complete edge-to-edge lines.
// Their angles create eight spokes spaced 45° apart.
const allLines = Array.from({ length: LINE_COUNT }, (_, index) => {
  const start = getEdgePoint(SPOKE_ANGLE + index * SPOKE_STEP);
  const end = getEdgePoint(SPOKE_ANGLE + index * SPOKE_STEP + 180);

  return { start, end };
});

// Start at 40°, then choose the next line endpoint nearest
// to the previous endpoint. Every line remains edge-to-edge.
const WEB_PATHS: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}[] = [];

const remaining = [...allLines];
let current = getEdgePoint(SPOKE_ANGLE);

while (remaining.length > 0) {
  let bestIndex = 0;
  let reverse = false;
  let bestDistance = Infinity;

  remaining.forEach((line, index) => {
    const startDistance = distance(current, line.start);
    const endDistance = distance(current, line.end);

    if (startDistance < bestDistance) {
      bestDistance = startDistance;
      bestIndex = index;
      reverse = false;
    }

    if (endDistance < bestDistance) {
      bestDistance = endDistance;
      bestIndex = index;
      reverse = true;
    }
  });

  const [line] = remaining.splice(bestIndex, 1);
  const start = reverse ? line.end : line.start;
  const end = reverse ? line.start : line.end;

  WEB_PATHS.push({
    x1: start.x,
    y1: start.y,
    x2: end.x,
    y2: end.y,
  });

  current = end;
}

export default function WebDroppingSpider({
  className = "",
  duration = 1.2,
  delay = 0,
}: WebDroppingSpiderProps) {
  const spiderRef = useRef<SVGGElement>(null);
  const threadRefs = useRef<(SVGLineElement | null)[]>([]);

  useLayoutEffect(() => {
    const spider = spiderRef.current;
    const threads = threadRefs.current;

    if (!spider || threads.some((line) => !line)) return;

    const lines = threads as SVGLineElement[];

    const ctx = gsap.context(() => {
      lines.forEach((line) => {
        const length = line.getTotalLength();

        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
          visibility: "visible",
        });
      });

      // Original spider geometry is centered around (50, 48).
      gsap.set(spider, {
        x: WEB_PATHS[0].x1 - CENTER,
        y: WEB_PATHS[0].y1 - 48,
        opacity: 0,
        scale: 0.7,
        visibility: "visible",
        transformOrigin: "50px 48px",
      });

      const timeline = gsap.timeline({ delay });

      WEB_PATHS.forEach((path, index) => {
        const line = lines[index];

        const startX = path.x1 - CENTER;
        const startY = path.y1 - 48;
        const endX = path.x2 - CENTER;
        const endY = path.y2 - 48;

        if (index > 0) {
          // Continue from the previous endpoint without teleporting.
          timeline.set(spider, {
            x: startX,
            y: startY,
          });
        }

        // Reveal the spider as the first strand begins.
        if (index === 0) {
          timeline.to(spider, {
            opacity: 1,
            duration: 0.15,
            ease: "power1.out",
          });
        }

        // Draw the thread while the spider moves along it.
        timeline.to(
          line,
          {
            strokeDashoffset: 0,
            duration,
            ease: "power2.out",
          },
          index === 0 ? "<" : ">",
        );

        timeline.to(
          spider,
          {
            x: endX,
            y: endY,
            scale: 1,
            duration,
            ease: "power2.out",
          },
          "<",
        );

        // Small, subtle movement when the spider reaches each endpoint.
        timeline.to(spider, {
          y: endY + 1,
          duration: 0.1,
          ease: "power1.out",
        });

        timeline.to(spider, {
          y: endY,
          duration: 0.15,
          ease: "power1.inOut",
        });
      });

      timeline.to(spider, {
        opacity: 0,
        duration: 0.4,
        ease: "power1.out",
      });
    });

    return () => ctx.revert();
  }, [duration, delay]);

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full overflow-visible ${className}`}
    >
      <g
        fill="none"
        stroke="#F15A36"
        strokeWidth="0.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        {WEB_PATHS.map((path, index) => (
          <line
            key={index}
            ref={(element) => {
              threadRefs.current[index] = element;
            }}
            x1={path.x1}
            y1={path.y1}
            x2={path.x2}
            y2={path.y2}
          />
        ))}

        {/* Original spider design */}
        <g ref={spiderRef}>
          <path
            d="M50 43 C53 43 54 46 53 49 L50 52 L47 49 C46 46 47 43 50 43Z"
            fill="#191C1D"
            strokeWidth="0.35"
          />

          <circle cx="50" cy="46.5" r="1.1" fill="#F15A36" stroke="none" />

          <path d="M48 44 L45 42 L42 44" />
          <path d="M47 46 L44 46 L42 49" />
          <path d="M48 48 L45 50 L44 53" />
          <path d="M49 50 L48 52 L46 54" />

          <path d="M52 44 L55 42 L58 44" />
          <path d="M53 46 L56 46 L58 49" />
          <path d="M52 48 L55 50 L56 53" />
          <path d="M51 50 L52 52 L54 54" />
        </g>
      </g>
    </svg>
  );
}
