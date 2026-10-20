// WebDroppingSpider.tsx
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type WebDroppingSpiderProps = {
  className?: string;
  duration?: number;
  delay?: number;
};

export default function WebDroppingSpider({
  className = "",
  duration = 1.2,
  delay = 0,
}: WebDroppingSpiderProps) {
  const spiderRef = useRef<SVGGElement>(null);
  const threadRef = useRef<SVGLineElement>(null);

  useLayoutEffect(() => {
    const spider = spiderRef.current;
    const thread = threadRef.current;

    if (!spider || !thread) return;

    const ctx = gsap.context(() => {
      const threadLength = thread.getTotalLength();

      gsap.set(thread, {
        strokeDasharray: threadLength,
        strokeDashoffset: threadLength,
      });

      gsap.set(spider, {
        y: -65,
        opacity: 0,
        scale: 0.7,
        transformOrigin: "50px 50px",
      });

      const timeline = gsap.timeline({
        delay,
        repeat: -1,
        repeatDelay: 1.5,
      });

      timeline
        .to(spider, {
          opacity: 1,
          duration: 0.15,
          ease: "power1.out",
        })
        .to(
          thread,
          {
            strokeDashoffset: 0,
            duration: duration * 0.7,
            ease: "power2.out",
          },
          0,
        )
        .to(
          spider,
          {
            y: 0,
            scale: 1,
            duration,
            ease: "power2.out",
          },
          0,
        )
        .to(spider, {
          y: 3,
          duration: 0.12,
          ease: "power1.out",
        })
        .to(spider, {
          y: 0,
          duration: 0.25,
          ease: "elastic.out(1, 0.5)",
        })
        .to({}, { duration: 1.5 })
        .to(spider, {
          y: -65,
          opacity: 0,
          duration: 0.65,
          ease: "power2.in",
        })
        .set(thread, {
          strokeDashoffset: threadLength,
        });
    });

    return () => ctx.revert();
  }, [duration, delay]);

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      className={`pointer-events-none absolute inset-0 h-full w-full overflow-visible ${className}`}
    >
      <g
        fill="none"
        stroke="#F15A36"
        strokeWidth="0.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line ref={threadRef} x1="50" y1="-15" x2="50" y2="43" />

        <g ref={spiderRef}>
          {/* Futuristic spider body */}
          <path
            d="M50 43 C53 43 54 46 53 49 L50 52 L47 49 C46 46 47 43 50 43Z"
            fill="#191C1D"
          />

          {/* Glowing-looking orange core */}
          <circle cx="50" cy="46.5" r="1.1" fill="#F15A36" stroke="none" />

          {/* Eight angular robotic legs */}
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
