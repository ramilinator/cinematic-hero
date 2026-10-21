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
const SPOKE_ANGLE = -75;
const LINE_COUNT = 4;
const SPOKE_STEP = 45;
const EDGE_RADIUS = 50;
const SPOKE_GAP = 0.25;

const SPOKE_COLOR = "#F15A36";
const SPOKE_WIDTH = 0.1;
const WEBBING_WIDTH = 0.1;
const SPIDER_WIDTH = 0.2;

const SPOKE_COUNT = 8;
const EPSILON = 1e-8;
const CLEAN_SPOKE_ID = 2;

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

function createWebbingPaths(): string[] {
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

  return [commands.join(" ")];
}
const WEBBING_PATHS = createWebbingPaths();

export default function WebbingSpider({
  className = "",
  spokeDuration = 2,
  webbingDuration = 12,
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

      const webbingPath = svg.querySelector<SVGPathElement>("[data-webbing]");

      const spider = svg.querySelector<SVGGElement>("[data-drawing-spider]");

      if (!spider || !webbingPath || spokes.length !== LINE_COUNT) {
        return;
      }

      const webbingLength = webbingPath.getTotalLength();

      // Prepare the single continuous webbing path.
      gsap.set(webbingPath, {
        strokeDasharray: `${webbingLength} ${webbingLength}`,
        strokeDashoffset: webbingLength,
      });

      // Prepare the spokes.
      spokes.forEach((spoke, index) => {
        const length = spoke.getTotalLength();

        if (index === CLEAN_SPOKE_ID) {
          const { start } = SPOKES[index];

          gsap.set(spoke, {
            attr: {
              x1: start.x,
              y1: start.y,
              x2: start.x,
              y2: start.y,
            },
            clearProps: "strokeDasharray,strokeDashoffset",
          });
        } else {
          gsap.set(spoke, {
            strokeDasharray: `${length} ${length}`,
            strokeDashoffset: length,
          });
        }
      });

      const firstStart = SPOKES[0].start;

      gsap.set(spider, {
        visibility: "visible",
        x: firstStart.x,
        y: firstStart.y,
        transformOrigin: "center center",
      });

      const timeline = gsap.timeline({
        delay,
        defaults: { ease: "none" },
      });

      // STAGE 1: Animate the spokes.
      spokes.forEach((spoke, index) => {
        const { start, end } = SPOKES[index];
        const length = spoke.getTotalLength();
        const progress = { value: 0 };
        const isCleanSpoke = index === CLEAN_SPOKE_ID;

        timeline.set(
          spider,
          {
            x: start.x,
            y: start.y,
            visibility: "visible",
          },
          index === 0 ? 0 : `+=${SPOKE_GAP}`,
        );

        if (isCleanSpoke) {
          timeline.set(
            spoke,
            {
              attr: {
                x1: start.x,
                y1: start.y,
                x2: start.x,
                y2: start.y,
              },
              strokeDasharray: "none",
              strokeDashoffset: 0,
            },
            "<",
          );
        } else {
          timeline.set(
            spoke,
            {
              attr: {
                x1: start.x,
                y1: start.y,
                x2: end.x,
                y2: end.y,
              },
              strokeDasharray: `${length} ${length}`,
              strokeDashoffset: length,
            },
            "<",
          );
        }

        timeline.to(
          progress,
          {
            value: 1,
            duration: spokeDuration,
            ease: "none",
            onUpdate: () => {
              if (isCleanSpoke) {
                const x = start.x + (end.x - start.x) * progress.value;
                const y = start.y + (end.y - start.y) * progress.value;

                gsap.set(spoke, {
                  attr: { x2: x, y2: y },
                });

                gsap.set(spider, { x, y });
              } else {
                const point = spoke.getPointAtLength(progress.value * length);

                gsap.set(spoke, {
                  strokeDashoffset: length * (1 - progress.value),
                });

                gsap.set(spider, {
                  x: point.x,
                  y: point.y,
                });
              }
            },
          },
          "<",
        );

        // Hide the spider for 1 second after every spoke.
        timeline.set(spider, { visibility: "hidden" });
        timeline.to({}, { duration: 1 });

        // After the last spoke, reveal the spider and return it to center.
        if (index === spokes.length - 1) {
          timeline.set(spider, {
            visibility: "visible",
          });

          timeline.to(spider, {
            x: CENTER,
            y: CENTER,
            duration: 0.8,
            ease: "power2.inOut",
          });
        }

        // The next spoke's existing timeline.set() makes it visible again.
      });

      // STAGE 2: Organic, spider-like webbing speed.

      const segmentCount = RADII.length * (SPOKE_COUNT + 1);
      const segmentDuration = webbingDuration / segmentCount;

      const webProgress = { value: 0 };

      timeline.to(
        webProgress,
        {
          value: webbingLength,
          duration: webbingDuration,
          ease: "none",
          onUpdate: () => {
            const distance = webProgress.value;

            gsap.set(webbingPath, {
              strokeDashoffset: webbingLength - distance,
            });

            const point = webbingPath.getPointAtLength(distance);

            gsap.set(spider, {
              x: point.x,
              y: point.y,
            });
          },
        },
        "+=0.2",
      );
      // STAGE 3: Return the spider to the center after webbing is complete.
      timeline.to(spider, {
        x: CENTER,
        y: CENTER,
        duration: 0.8,
        ease: "power2.inOut",
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

        <path
          key="webbing"
          data-webbing
          d={WEBBING_PATHS[0]}
          fill="none"
          strokeWidth={WEBBING_WIDTH}
        />
      </g>

      <g
        data-drawing-spider
        visibility="hidden"
        fill="none"
        stroke={SPOKE_COLOR}
        strokeWidth={SPIDER_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 0 0 L -1.2 -1.1 L -2.2 -1.1" />
        <path d="M 0 0 L -1.5 -0.3 L -2.5 0.1" />
        <path d="M 0 0 L -1.5 0.4 L -2.3 1.2" />
        <path d="M 0 0 L -1.1 1 L -1.7 2" />
        <path d="M 0 0 L 1.2 -1.1 L 2.2 -1.1" />
        <path d="M 0 0 L 1.5 -0.3 L 2.5 0.1" />
        <path d="M 0 0 L 1.5 0.4 L 2.3 1.2" />
        <path d="M 0 0 L 1.1 1 L 1.7 2" />
        <ellipse cx="0" cy="0" rx="0.65" ry="0.9" fill={SPOKE_COLOR} />
        <circle cx="0" cy="-0.85" r="0.4" fill={SPOKE_COLOR} />
      </g>
    </svg>
  );
}
