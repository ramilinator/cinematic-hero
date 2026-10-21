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
const COORDINATE_EPSILON = 1e-10;

type Point = {
  x: number;
  y: number;
};

type WebPath = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

/**
 * Normalize floating-point coordinates to prevent hydration mismatches.
 * For example, 7.105427357601002e-15 becomes exactly 0.
 */
function normalizeCoordinate(value: number): number {
  if (Math.abs(value) < COORDINATE_EPSILON) return 0;

  if (Math.abs(value - 100) < COORDINATE_EPSILON) {
    return 100;
  }

  // Remove insignificant floating-point precision while preserving
  // sufficient accuracy for SVG geometry.
  return Math.round(value * 1e10) / 1e10;
}

function getEdgePoint(angleDegrees: number): Point {
  const angle = (angleDegrees * Math.PI) / 180;
  const dx = Math.cos(angle);
  const dy = Math.sin(angle);
  const scale = CENTER / Math.max(Math.abs(dx), Math.abs(dy));

  return {
    x: normalizeCoordinate(CENTER + dx * scale),
    y: normalizeCoordinate(CENTER + dy * scale),
  };
}

function distance(a: Point, b: Point): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

// Four edge-to-edge lines create eight evenly spaced spokes.
const allLines = Array.from({ length: LINE_COUNT }, (_, index) => {
  const start = getEdgePoint(SPOKE_ANGLE + index * SPOKE_STEP);
  const end = getEdgePoint(SPOKE_ANGLE + index * SPOKE_STEP + 180);

  return { start, end };
});

// Order lines by the nearest endpoint to create a continuous route.
function createWebPaths(): WebPath[] {
  const paths: WebPath[] = [];
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

    paths.push({
      x1: normalizeCoordinate(start.x),
      y1: normalizeCoordinate(start.y),
      x2: normalizeCoordinate(end.x),
      y2: normalizeCoordinate(end.y),
    });

    current = end;
  }

  return paths;
}

const WEB_PATHS = createWebPaths();

export default function WebDroppingSpider({
  className = "",
  duration = 1.2,
  delay = 0,
}: WebDroppingSpiderProps) {
  const spiderRef = useRef<SVGGElement>(null);
  const threadRefs = useRef<(SVGLineElement | null)[]>([]);

  useLayoutEffect(() => {
    const spider = spiderRef.current;
    const lines = threadRefs.current.slice(0, WEB_PATHS.length);

    if (!spider || lines.length !== WEB_PATHS.length) return;
    if (lines.some((line) => line === null)) return;

    const validLines = lines as SVGLineElement[];

    const ctx = gsap.context(() => {
      // Prepare all web lines for drawing.
      validLines.forEach((line) => {
        const length = line.getTotalLength();

        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
          visibility: "visible",
        });
      });

      // The spider's original geometry is centered around (50, 48).
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
        const line = validLines[index];

        const startX = path.x1 - CENTER;
        const startY = path.y1 - 48;
        const endX = path.x2 - CENTER;
        const endY = path.y2 - 48;

        // Move to the beginning of the next web strand.
        if (index > 0) {
          timeline.set(spider, {
            x: startX,
            y: startY,
          });
        }

        // Reveal the spider at the first endpoint.
        if (index === 0) {
          timeline.to(spider, {
            opacity: 1,
            duration: 0.15,
            ease: "power1.out",
          });
        }

        // Draw each edge-to-edge silk strand.
        timeline.to(
          line,
          {
            strokeDashoffset: 0,
            duration,
            ease: "power2.out",
          },
          index === 0 ? "<" : ">",
        );

        // Crawl along the strand while it is being drawn.
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

        // Small endpoint movement.
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

      // Return to the center and remain visible.
      timeline.to(spider, {
        x: 0,
        y: CENTER - 48,
        opacity: 1,
        scale: 1,
        duration: duration * 0.8,
        ease: "power2.inOut",
      });
    });

    return () => {
      ctx.revert();
    };
  }, [duration, delay]);

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full overflow-visible ${className}`}
    >
      {/* Web strands */}
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
      </g>

      {/* Independent spider styling */}
      <g
        ref={spiderRef}
        fill="none"
        stroke="#F15A36"
        strokeWidth="0.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        {/* Spider body */}
        <path
          d="M50 43 C53 43 54 46 53 49 L50 52 L47 49 C46 46 47 43 50 43Z"
          fill="#191C1D"
        />

        {/* Head */}
        <circle cx="50" cy="46.5" r="1.1" fill="#F15A36" stroke="none" />

        {/* Left legs */}
        <path d="M48 44 L45 42 L42 44" />
        <path d="M47 46 L44 46 L42 49" />
        <path d="M48 48 L45 50 L44 53" />
        <path d="M49 50 L48 52 L46 54" />

        {/* Right legs */}
        <path d="M52 44 L55 42 L58 44" />
        <path d="M53 46 L56 46 L58 49" />
        <path d="M52 48 L55 50 L56 53" />
        <path d="M51 50 L52 52 L54 54" />
      </g>
    </svg>
  );
}
