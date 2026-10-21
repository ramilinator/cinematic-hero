"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type WebbingSpiderProps = {
  className?: string;
  spokeDuration?: number;
  webbingDuration?: number;
  delay?: number;
};

type Point = {
  x: number;
  y: number;
};

type Spoke = {
  id: number;
  start: Point;
  end: Point;
};

const CENTER = 50;
const SPOKE_ANGLE = 40;
const LINE_COUNT = 4;
const SPOKE_STEP = 45;
const EDGE_RADIUS = 50;
const SPOKE_GAP = 0.06;

const SPOKE_COLOR = "#F15A36";
const SPOKE_WIDTH = 0.1;
const WEBBING_WIDTH = 0.1;
const SPIDER_WIDTH = 0.2;

const SPOKE_COUNT = 8;
const EPSILON = 1e-8;

const RADII = [3, 4.5, 6, 8, 10.5, 13.5, 17, 21, 25, 29, 33, 37, 41, 45, 48];

function normalize(value: number): number {
  if (Math.abs(value) < EPSILON) return 0;
  if (Math.abs(value - 100) < EPSILON) return 100;

  return Math.round(value * 1e8) / 1e8;
}

function getEdgePoint(angleDegrees: number): Point {
  const angle = (angleDegrees * Math.PI) / 180;
  const dx = Math.cos(angle);
  const dy = Math.sin(angle);

  const scale = EDGE_RADIUS / Math.max(Math.abs(dx), Math.abs(dy));

  return {
    x: normalize(CENTER + dx * scale),
    y: normalize(CENTER + dy * scale),
  };
}

function distance(a: Point, b: Point): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

/**
 * Stage 1: generate four complete edge-to-edge lines.
 * Preserve the nearest-endpoint ordering.
 */
function createSpokes(): Spoke[] {
  const remaining = Array.from({ length: LINE_COUNT }, (_, index) => {
    const angle = SPOKE_ANGLE + index * SPOKE_STEP;

    return {
      start: getEdgePoint(angle),
      end: getEdgePoint(angle + 180),
    };
  });

  const ordered: Spoke[] = [];
  let current = getEdgePoint(SPOKE_ANGLE);

  while (remaining.length > 0) {
    let closestIndex = 0;
    let closestDistance = Infinity;
    let reverse = false;

    remaining.forEach((line, index) => {
      const startDistance = distance(current, line.start);
      const endDistance = distance(current, line.end);

      if (startDistance < closestDistance) {
        closestDistance = startDistance;
        closestIndex = index;
        reverse = false;
      }

      if (endDistance < closestDistance) {
        closestDistance = endDistance;
        closestIndex = index;
        reverse = true;
      }
    });

    const [line] = remaining.splice(closestIndex, 1);

    const start = reverse ? line.end : line.start;
    const end = reverse ? line.start : line.end;

    ordered.push({
      id: ordered.length,
      start,
      end,
    });

    current = end;
  }

  return ordered;
}

const SPOKES = createSpokes();

/**
 * Derive all eight radial directions from the actual spokes.
 * Every webbing corner will sit on one of these directions.
 */
function getSpokeDirections(): number[] {
  const directions: number[] = [];

  SPOKES.forEach(({ start, end }) => {
    directions.push(
      Math.atan2(start.y - CENTER, start.x - CENTER),
      Math.atan2(end.y - CENTER, end.x - CENTER),
    );
  });

  const fullTurn = Math.PI * 2;

  return directions
    .map((angle) => ((angle % fullTurn) + fullTurn) % fullTurn)
    .sort((a, b) => a - b);
}

const SPOKE_DIRECTIONS = getSpokeDirections();

function getOctagonPoint(radius: number, index: number): Point {
  const angle = SPOKE_DIRECTIONS[index];

  return {
    x: normalize(CENTER + Math.cos(angle) * radius),
    y: normalize(CENTER + Math.sin(angle) * radius),
  };
}

/**
 * Generate closed octagonal rings from the inside outward.
 */
function createWebbingPaths(): string[] {
  return RADII.map((radius) => {
    const points = Array.from({ length: SPOKE_COUNT }, (_, index) =>
      getOctagonPoint(radius, index),
    );

    return [
      `M ${points[0].x} ${points[0].y}`,
      ...points.slice(1).map((point) => `L ${point.x} ${point.y}`),
      "Z",
    ].join(" ");
  });
}

const WEBBING_PATHS = createWebbingPaths();

export default function WebbingSpider({
  className = "",
  spokeDuration = 0.45,
  webbingDuration = 8,
  delay = 0,
}: WebbingSpiderProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const context = gsap.context(() => {
      const spokes = Array.from(
        svg.querySelectorAll<SVGLineElement>("[data-spoke]"),
      );

      const webbingPaths = Array.from(
        svg.querySelectorAll<SVGPathElement>("[data-webbing]"),
      );

      const spider = svg.querySelector<SVGGElement>("[data-drawing-spider]");

      if (
        !spider ||
        spokes.length !== LINE_COUNT ||
        webbingPaths.length !== RADII.length
      ) {
        return;
      }

      // Prepare all spoke lines.
      spokes.forEach((spoke) => {
        const length = spoke.getTotalLength();

        gsap.set(spoke, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      // Prepare all octagonal rings.
      webbingPaths.forEach((path) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      // Start the spider at the first line's actual starting point.
      const firstStart = SPOKES[0].start;

      gsap.set(spider, {
        visibility: "visible",
        x: firstStart.x,
        y: firstStart.y,
        transformOrigin: "center center",
      });

      const spiderPosition = {
        x: firstStart.x,
        y: firstStart.y,
      };

      const timeline = gsap.timeline({
        delay,
        defaults: { ease: "none" },
      });

      // ---------------------------------------------------------
      // STAGE 1: draw each complete edge-to-edge spoke.
      // The spider moves with the endpoint of the line being drawn.
      // ---------------------------------------------------------

      /* STAGE 1: Spider leads the spoke drawing tip exactly. */
      spokes.forEach((spoke, index) => {
        const { start, end } = SPOKES[index];
        const length = spoke.getTotalLength();

        const progress = { value: 0 };

        // Keep the spider at the beginning before this line starts.
        timeline.set(
          spider,
          {
            x: start.x,
            y: start.y,
            visibility: "visible",
          },
          index === 0 ? 0 : `+=${SPOKE_GAP}`,
        );

        // Reset the line and progress.
        timeline.set(
          spoke,
          {
            strokeDasharray: length,
            strokeDashoffset: length,
          },
          "<",
        );

        // Animate one shared progress value for both the line and spider.
        timeline.to(
          progress,
          {
            value: 1,
            duration: spokeDuration,
            ease: "none",
            onUpdate: () => {
              const distanceAlongLine = progress.value * length;
              const point = spoke.getPointAtLength(distanceAlongLine);

              // Reveal only the portion behind the spider.
              gsap.set(spoke, {
                strokeDashoffset: length * (1 - progress.value),
              });

              // Keep the spider at the exact leading tip.
              gsap.set(spider, {
                x: point.x,
                y: point.y,
              });
            },
          },
          "<",
        );
      });

      // ---------------------------------------------------------
      // STAGE 2: trace each octagonal ring.
      // Keep the spider visible and move it along the active path.
      // ---------------------------------------------------------
      webbingPaths.forEach((path) => {
        const length = path.getTotalLength();
        const progress = { value: 0 };
        const ringDuration = webbingDuration / webbingPaths.length;

        // Position the spider at the start of this ring.
        const startPoint = path.getPointAtLength(0);

        timeline.set(spider, {
          visibility: "visible",
          x: startPoint.x,
          y: startPoint.y,
        });

        // Draw the ring and move the spider simultaneously.
        timeline.to(path, {
          strokeDashoffset: 0,
          duration: ringDuration,
        });

        timeline.to(
          progress,
          {
            value: length,
            duration: ringDuration,
            onUpdate: () => {
              const point = path.getPointAtLength(progress.value);

              gsap.set(spider, {
                x: point.x,
                y: point.y,
              });
            },
          },
          "<",
        );
      });

      // Deliberately do not hide the spider at the end.
      // It remains visible at the last point of the final ring.
    }, svg);

    return () => {
      context.revert();
    };
  }, [spokeDuration, webbingDuration, delay]);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      data-hero-spiderweb
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      className={`pointer-events-none ${className}`}
    >
      {/* Fine web lines */}
      <g
        fill="none"
        stroke={SPOKE_COLOR}
        strokeWidth={SPOKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {SPOKES.map(({ id, start, end }) => (
          <line
            key={id}
            data-spoke
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
          />
        ))}

        {WEBBING_PATHS.map((path, index) => (
          <path key={index} data-webbing d={path} strokeWidth={WEBBING_WIDTH} />
        ))}
      </g>

      {/* Simple spider that follows the drawing endpoint */}
      <g
        data-drawing-spider
        visibility="hidden"
        fill="none"
        stroke={SPOKE_COLOR}
        strokeWidth={SPIDER_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Left legs */}
        <path d="M 0 0 L -1.2 -1.1 L -2.2 -1.1" />
        <path d="M 0 0 L -1.5 -0.3 L -2.5 0.1" />
        <path d="M 0 0 L -1.5 0.4 L -2.3 1.2" />
        <path d="M 0 0 L -1.1 1 L -1.7 2" />

        {/* Right legs */}
        <path d="M 0 0 L 1.2 -1.1 L 2.2 -1.1" />
        <path d="M 0 0 L 1.5 -0.3 L 2.5 0.1" />
        <path d="M 0 0 L 1.5 0.4 L 2.3 1.2" />
        <path d="M 0 0 L 1.1 1 L 1.7 2" />

        {/* Body and head */}
        <ellipse cx="0" cy="0" rx="0.65" ry="0.9" fill={SPOKE_COLOR} />
        <circle cx="0" cy="-0.85" r="0.4" fill={SPOKE_COLOR} />
      </g>
    </svg>
  );
}
