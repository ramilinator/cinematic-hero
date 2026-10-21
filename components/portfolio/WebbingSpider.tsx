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

const SPOKE_COUNT = 8;
const EPSILON = 1e-8;

// Radii increase outward from the center, stopping inside the viewBox.
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

  // Extend each line to the edge of the square SVG viewBox.
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
 * STAGE 1
 * Generate the original edge-to-edge spokes and preserve
 * the nearest-endpoint drawing order.
 */
function createSpokes(): Spoke[] {
  const allLines = Array.from({ length: LINE_COUNT }, (_, index) => {
    const angle = SPOKE_ANGLE + index * SPOKE_STEP;

    return {
      start: getEdgePoint(angle),
      end: getEdgePoint(angle + 180),
    };
  });

  const remaining = [...allLines];
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
 * STAGE 2
 * Derive the eight radial directions directly from the
 * actual edge-to-edge spokes.
 *
 * Each of the four lines supplies two opposite directions.
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

/**
 * Find a point on a particular spoke direction at a given
 * distance from the center.
 *
 * Every ring corner therefore lies directly on a spoke.
 */
function getOctagonPoint(radius: number, index: number): Point {
  const angle = SPOKE_DIRECTIONS[index];

  return {
    x: normalize(CENTER + Math.cos(angle) * radius),
    y: normalize(CENTER + Math.sin(angle) * radius),
  };
}

/**
 * Generate one closed octagonal ring per radius.
 *
 * The corners follow the actual spoke directions, so each
 * ring intersects all eight radial directions.
 */
function createWebbingPaths(): string[] {
  return RADII.map((radius) => {
    const points = Array.from({ length: SPOKE_COUNT }, (_, index) =>
      getOctagonPoint(radius, index),
    );

    const first = points[0];

    const commands = [
      `M ${first.x} ${first.y}`,
      ...points.slice(1).map((point) => `L ${point.x} ${point.y}`),
      "Z",
    ];

    return commands.join(" ");
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

      if (
        spokes.length !== LINE_COUNT ||
        webbingPaths.length !== RADII.length
      ) {
        return;
      }

      // Prepare edge-to-edge spokes for line-by-line drawing.
      spokes.forEach((spoke) => {
        const length = spoke.getTotalLength();

        gsap.set(spoke, {
          strokeDasharray: length,
          strokeDashoffset: length,
          visibility: "visible",
        });
      });

      // Prepare every octagonal ring for progressive drawing.
      webbingPaths.forEach((path) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          visibility: "visible",
        });
      });

      const timeline = gsap.timeline({
        delay,
        defaults: {
          ease: "none",
        },
      });

      // STAGE 1: draw each complete edge-to-edge line.
      spokes.forEach((spoke, index) => {
        timeline.to(
          spoke,
          {
            strokeDashoffset: 0,
            duration: spokeDuration,
          },
          index === 0 ? 0 : `+=${SPOKE_GAP}`,
        );
      });

      // STAGE 2: draw closed octagonal rings from inside outward.
      // Each ring starts after the previous ring is completed.
      webbingPaths.forEach((path) => {
        timeline.to(path, {
          strokeDashoffset: 0,
          duration: webbingDuration / webbingPaths.length,
        });
      });
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
    </svg>
  );
}
