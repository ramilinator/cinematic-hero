"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight, Layers3, Sparkles } from "lucide-react";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "WordPress",
  "Strapi",
];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#A5A19A]">
      <span className="font-mono text-[#F15A36]">{number}</span>
      <span className="h-px w-5 bg-white/15" />
      <span>{children}</span>
    </div>
  );
}

export default function PortfolioHeroDark() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      const select = gsap.utils.selector(hero);

      const portrait = select("[data-hero-portrait-visual]")[0] as
        | HTMLElement
        | undefined;

      const frame = select("[data-hero-frame]")[0] as HTMLElement | undefined;

      const frameBorder = select("[data-hero-frame-border]")[0] as
        | HTMLElement
        | undefined;

      const frameTrails = gsap.utils.toArray<HTMLElement>(
        select("[data-hero-frame-trail]"),
      );

      const revealElements = gsap.utils.toArray<HTMLElement>(
        select("[data-hero-reveal]"),
      );

      if (!portrait || !frame || !frameBorder) return;

      // Initial state:
      // Portrait and frame start at exactly the same scale.

      gsap.set([portrait], {
        scale: 0.45,
        transformOrigin: "50% 50%",
        force3D: true,
      });

      gsap.set([frame], {
        scale: 0.72,
        transformOrigin: "50% 50%",
        force3D: true,
      });

      gsap.set(frameBorder, {
        autoAlpha: 1,
      });

      gsap.set(revealElements, {
        autoAlpha: 0,
        y: 28,
        force3D: true,
      });

      // Initialize frame motion trails.
      gsap.set(frameTrails, {
        autoAlpha: 0,
        scale: 0.72,
        x: (index) => -22 * (index + 1),
        y: (index) => 14 * (index + 1),
        transformOrigin: "50% 50%",
        force3D: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Frame trails briefly appear, then expand outward.
      frameTrails.forEach((trail, index) => {
        const depth = index + 1;
        const opacity = [0.9, 0.65, 0.4][index] ?? 0.3;

        tl.to(
          trail,
          {
            autoAlpha: opacity,
            duration: 0.18,
            ease: "power1.out",
          },
          0,
        );

        tl.to(
          trail,
          {
            autoAlpha: 0,
            scale: 1.2 + index * 0.1,
            x: -(22 * depth) - 24,
            y: 14 * depth + 18,
            duration: 1.1,
            ease: "power2.out",
          },
          0.12 + index * 0.06,
        );
      });

      // 1. Frame zooms from 0.72 to 1.
      // It reaches its final size before the portrait finishes.
      tl.to(
        frame,
        {
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          force3D: true,
        },
        0,
      );

      // 2. Portrait starts at the same scale but continues growing.
      // It eventually becomes larger than the frame.
      tl.to(
        portrait,
        {
          scale: 1,
          duration: 1.8,
          ease: "power2.out",
          force3D: true,
        },
        0,
      );

      // Reveal primary hero content.
      if (revealElements.length > 0) {
        tl.to(
          revealElements,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.16,
            ease: "power3.out",
            force3D: true,
          },
          0.7,
        );
      }

      // Optional secondary reveals.
      const optionalReveals = [
        { selector: "[data-hero-code]", position: 1.45 },
        { selector: "[data-hero-toolkit]", position: 1.6 },
        { selector: "[data-hero-status]", position: 1.75 },
      ];

      optionalReveals.forEach(({ selector, position }) => {
        const elements = select(selector) as HTMLElement[];

        if (!elements.length) return;

        gsap.set(elements, {
          autoAlpha: 0,
          y: 20,
          force3D: true,
        });

        tl.to(
          elements,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power3.out",
            force3D: true,
          },
          position,
        );
      });

      // Refresh ScrollTrigger after layout is ready.
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, hero);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#121516] text-[#F5F0E7] selection:bg-[#F15A36] selection:text-[#121516]"
    >
      {/* Background: subtle technical grid and directional lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-48 top-[20%] h-[420px] w-[420px] rounded-full bg-[#F15A36]/[0.07] blur-[140px]" />

        <div className="absolute right-[-12%] top-[12%] h-[520px] w-[520px] rounded-full bg-[#F5F0E7]/[0.025] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.075]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,240,231,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,231,0.15) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 90%)",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#121516_78%)]" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#F15A36]/40 to-transparent" />
      </div>

      <section
        ref={heroRef}
        aria-label="Introduction"
        className=" relative mx-auto min-h-[100svh] w-full max-w-[1600px] flex-col justify-end overflow-hidden px-5 pt-[var(--navbar-height)] sm:px-8 lg:px-14"
      >
        {/* Hero composition */}
        <div className="relative z-10 flex w-full flex-col gap-10 md:flex-row md:items-start md:gap-8">
          {/* Left: identity and introduction */}
          <div className="relative z-20 flex w-full flex-col items-start py-24 md:w-[43%] md:shrink-0">
            <SectionLabel number="01">Independent web developer</SectionLabel>

            {/* Four independently animated headline lines */}

            <h1 className="mt-7 max-w-[480px] text-[clamp(2.8rem,6.4vw,6.5rem)] font-black uppercase leading-[0.9] tracking-[-0.075em]">
              <span data-hero-ramil className="text-[#F5F0E7]">
                BUILDING{" "}
              </span>

              <span data-hero-aoanan className="text-[#F5F0E7]">
                FOR THE{" "}
              </span>

              <span data-hero-better className="text-[#F15A36]">
                BETTER{" "}
              </span>

              <span data-hero-web className="text-[#F5F0E7]">
                WEB.
              </span>
            </h1>

            <p
              data-hero-intro
              className="mt-5 max-w-[410px] text-sm leading-7 text-[#A5A19A] sm:text-base sm:leading-8"
            >
              I&apos;m Ramil — a web developer who brings together thoughtful
              design, modern technology, and practical solutions to build
              meaningful digital experiences.
            </p>
          </div>

          {/* Center: portrait and decorative frame */}
          {/* Center: portrait and frame */}
          <div
            data-hero-portrait
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
          >
            {/* Frame layer — behind the portrait */}
            <div
              data-hero-frame
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 z-0 h-[min(92vh,440px)] w-[95%] max-h-[440px] max-w-[440px] -translate-x-1/2 -translate-y-1/2 md:w-[48%]"
            >
              {/* Orange border */}
              <div
                data-hero-frame-border
                className="absolute inset-0 border-2 border-[#F15A36]"
              />

              {/* Corner accents */}
              <div className="absolute right-0 top-0 z-10 h-5 w-5 border-r border-t border-[#F15A36]/80" />
              <div className="absolute bottom-0 left-0 z-10 h-5 w-5 border-b border-l border-[#F15A36]/80" />

              {/* Frame label */}
              <div className="absolute right-[4%] top-[4%] z-10 font-mono text-[9px] tracking-wider text-[#F5F0E7]/40">
                RA. / 001
              </div>

              {/* Motion trails */}
              {[0, 1, 2].map((trail) => (
                <div
                  key={trail}
                  data-hero-frame-trail
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 border-2 border-[#F15A36]"
                  style={{ opacity: 0 }}
                />
              ))}
            </div>

            {/* Portrait layer — in front of the frame */}
            <div data-hero-portrait-visual className="absolute inset-0 z-10">
              <Image
                src="/images/profile.png"
                alt="Ramil Aoanan, web developer"
                fill
                priority
                sizes="(max-width: 767px) 80vw, 40vw"
                className="object-contain object-center"
              />
            </div>
          </div>
          {/* Right: developer cards */}
          <div className="relative z-20 flex w-full flex-col items-center gap-5 md:ml-auto md:w-[31%] md:shrink-0 md:items-end">
            {/* Toolkit card */}
            <div
              data-hero-toolkit
              className="w-full max-w-[360px] border border-white/[0.10] bg-[#191C1D]/80 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-colors duration-300 hover:border-white/[0.18]"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center border border-[#F15A36]/25 bg-[#F15A36]/[0.08]">
                    <Layers3 size={16} className="text-[#F15A36]" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[#F5F0E7]">
                      My toolkit
                    </p>

                    <p className="mt-1 text-[10px] text-[#77766F]">
                      Tools of the trade
                    </p>
                  </div>
                </div>

                <Sparkles size={14} className="text-[#77766F]" />
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology, index) => (
                  <span
                    key={technology}
                    className="inline-flex items-center gap-1.5 border border-white/[0.08] bg-white/[0.025] px-2.5 py-2 text-[10px] text-[#C9C4BB] transition-colors duration-300 hover:border-[#F15A36]/40 hover:bg-[#F15A36]/[0.06] hover:text-[#F5F0E7]"
                  >
                    <span
                      className={`h-1 w-1 ${
                        index === 0 ? "bg-[#F15A36]" : "bg-white/25"
                      }`}
                    />

                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-3">
                <span className="text-[9px] uppercase tracking-[0.16em] text-[#77766F]">
                  Constantly learning
                </span>

                <span className="font-mono text-[10px] text-[#F15A36]">
                  06 / STACK
                </span>
              </div>
            </div>

            {/* Availability indicator */}
            <div
              data-hero-status
              className="flex w-full max-w-[360px] items-center justify-between border border-white/[0.10] bg-[#191C1D]/90 px-4 py-3.5 backdrop-blur-xl md:w-auto md:self-end"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F15A36]/40" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F15A36]" />
                </span>

                <div>
                  <p className="text-[11px] font-medium text-[#F5F0E7]">
                    Available for opportunities
                  </p>

                  <p className="mt-1 text-[9px] text-[#77766F]">
                    Open to new projects
                  </p>
                </div>
              </div>

              <ArrowUpRight size={14} className="ml-5 text-[#77766F]" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pointer-events-none absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
          <span className="text-[9px] uppercase tracking-[0.24em] text-[#A5A19A]/70">
            Scroll to explore
          </span>

          <div className="flex h-8 w-5 items-start justify-center border border-white/20 p-1">
            <span className="h-2 w-px bg-[#F15A36]" />
          </div>

          <ArrowDown size={12} className="text-[#F15A36]/70" />
        </div>
      </section>
    </main>
  );
}
