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

const TRAIL_COUNT = 8;
const TRAIL_GROWTH = 2;

const trailScales = Array.from(
  { length: TRAIL_COUNT },
  (_, index) => TRAIL_GROWTH ** index,
);

export default function PortfolioHeroDark() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      const select = gsap.utils.selector(hero);

      // --------------------------------------------------
      // ELEMENT REFERENCES
      // --------------------------------------------------

      const independentLabel = select(
        "[data-hero-independent]",
      ) as HTMLElement[];

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

      // Left headline lines
      const leftHeadline = [
        ...select("[data-hero-ramil]"),
        ...select("[data-hero-aoanan]"),
        ...select("[data-hero-better]"),
        ...select("[data-hero-web]"),
      ] as HTMLElement[];

      const leftIntro = select("[data-hero-intro]") as HTMLElement[];

      // Right-side content
      const toolkit = select("[data-hero-toolkit]") as HTMLElement[];

      const status = select("[data-hero-status]") as HTMLElement[];

      const codeElements = select("[data-hero-code]") as HTMLElement[];

      if (!portrait || !frame || !frameBorder) return;

      // --------------------------------------------------
      // INITIAL STATES
      // --------------------------------------------------

      gsap.set(independentLabel, {
        autoAlpha: 0,
        x: -35,
        y: 8,
        force3D: true,
      });

      gsap.set(frame, {
        scale: 0.55,
        transformOrigin: "50% 50%",
        force3D: true,
      });

      gsap.set(portrait, {
        scale: 0.37,
        transformOrigin: "50% 50%",
        force3D: true,
      });
      gsap.set(frameBorder, {
        autoAlpha: 1,
      });

      // Left headline: slide in from the left.
      gsap.set(leftHeadline, {
        autoAlpha: 0,
        x: -55,
        y: 12,
        force3D: true,
      });

      // Intro follows the headline.
      gsap.set(leftIntro, {
        autoAlpha: 0,
        x: -30,
        y: 12,
        force3D: true,
      });

      // Right-side cards reveal from below.
      gsap.set([...toolkit, ...status, ...codeElements], {
        autoAlpha: 0,
        y: 24,
        force3D: true,
      });

      // Trails start smaller than the main frame.
      gsap.set(frameTrails, {
        autoAlpha: 0,
        scale: 0.75,
        x: 0,
        y: 0,
        transformOrigin: "50% 50%",
        force3D: true,
      });
      // --------------------------------------------------
      // SCROLL-DRIVEN TIMELINE
      // --------------------------------------------------

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

      // --------------------------------------------------
      // FRAME TRAILS — SAME SIZE, RANDOM POSITIONS
      // --------------------------------------------------

      frameTrails.forEach((trail, index) => {
        // Random but consistent offsets for this animation setup.
        const x = gsap.utils.random(-100, 100);
        const y = gsap.utils.random(-100, 100);

        tl.to(
          trail,
          {
            autoAlpha: 0.35,
            scale: 1.5, // Same size for every trail
            x,
            y,
            duration: 1.2,
            ease: "power2.out",
            force3D: true,
          },
          0.12 + index * 0.04,
        );
      });
      // --------------------------------------------------
      // 2. FRAME EXPANDS
      // --------------------------------------------------

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

      // --------------------------------------------------
      // 3. PORTRAIT ZOOMS PAST THE FRAME
      // --------------------------------------------------

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

      // Independent web developer label
      tl.to(
        independentLabel,
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          force3D: true,
        },
        0.3,
      );

      // --------------------------------------------------
      // 4. LEFT HEADLINE REVEALS LINE BY LINE
      // --------------------------------------------------

      tl.to(
        leftHeadline,
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.65,
          stagger: 0.16,
          ease: "power3.out",
          force3D: true,
        },
        0.45,
      );

      // --------------------------------------------------
      // 5. LEFT INTRO PARAGRAPH
      // --------------------------------------------------

      tl.to(
        leftIntro,
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          force3D: true,
        },
        1.15,
      );

      // --------------------------------------------------
      // 6. RIGHT TOOLKIT CARD
      // --------------------------------------------------

      tl.to(
        toolkit,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          force3D: true,
        },
        1.35,
      );

      // --------------------------------------------------
      // 7. AVAILABILITY STATUS
      // --------------------------------------------------

      tl.to(
        status,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
          force3D: true,
        },
        1.65,
      );

      // --------------------------------------------------
      // 8. OPTIONAL CODE ELEMENTS
      // --------------------------------------------------

      if (codeElements.length > 0) {
        tl.to(
          codeElements,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power3.out",
            force3D: true,
          },
          1.5,
        );
      }

      // --------------------------------------------------
      // 9. REFRESH SCROLLTRIGGER AFTER LAYOUT
      // --------------------------------------------------

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
      {/* Static background: visible depth, no animation */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Base: rich charcoal gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#202323] via-[#141819] to-[#0c0f10]" />

        {/* Warm ambient light on the left */}
        <div className="absolute -left-32 top-[12%] h-[500px] w-[500px] rounded-full bg-[#F15A36]/[0.14] blur-[120px]" />

        {/* Cool neutral light on the right */}
        <div className="absolute -right-32 top-[18%] h-[480px] w-[480px] rounded-full bg-[#D8D2C7]/[0.07] blur-[130px]" />

        {/* Static orange glow behind the portrait */}
        <div className="absolute left-1/2 top-[42%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F15A36]/[0.09] blur-[100px]" />

        {/* Clearly visible technical grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,240,231,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,231,0.18) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Dark vignette to preserve text readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(12,15,16,0.35)_100%)]" />

        {/* Bottom depth and grounding */}
        <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-[#0b0d0e]/75 to-transparent" />

        {/* Orange accent line */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#F15A36]/50 to-transparent" />
      </div>

      <section
        ref={heroRef}
        aria-label="Introduction"
        className="relative mx-auto min-h-[100svh] w-full max-w-[1600px] overflow-hidden px-5 pt-[var(--navbar-height)] sm:px-8 lg:px-14"
      >
        {/* Hero composition */}
        <div className=" relative z-10 flex w-full flex-col justify-between gap-8 md:flex-row md:items-start md:gap-8">
          {/* Top on mobile: identity and introduction */}
          {/* 1. Identity and introduction */}
          <div className="relative z-30 order-1 flex w-full flex-col items-center pt-12 pb-4 text-center sm:pt-16 md:order-none md:min-h-[calc(100svh-var(--navbar-height))] md:w-[43%] md:shrink-0 md:items-start md:py-24 md:text-left">
            <div data-hero-independent>
              <SectionLabel number="01">Independent web developer</SectionLabel>
            </div>

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

          {/* Middle on mobile: portrait and frame */}
          {/* 2. Portrait and frame */}
          <div
            data-hero-portrait
            className="pointer-events-none relative z-20 order-2 mx-auto flex h-[min(78vw,380px)] w-full max-w-[440px] shrink-0 items-center justify-center md:absolute md:inset-0 md:order-none md:min-h-[calc(100svh-var(--navbar-height))] md:h-auto md:max-w-none"
          >
            {/* Frame layer — behind the portrait */}
            <div
              data-hero-frame
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 z-0 h-[440px] w-[440px] max-h-none max-w-none -translate-x-1/2 -translate-y-1/2"
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
              {trailScales.map((scale, index) => (
                <div
                  key={index}
                  data-hero-frame-trail
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 border-2 border-[#F15A36]"
                  style={{ opacity: 0 }}
                />
              ))}
            </div>

            {/* Portrait layer — in front of the frame */}
            <div
              data-hero-portrait-visual
              className="absolute left-1/2 top-1/2 z-10 h-[min(340px,90vw)] w-[min(340px,90vw)] -translate-x-1/2 -translate-y-1/2 sm:h-[640px] sm:w-[640px]"
            >
              <Image
                src="/images/profile.png"
                alt="Ramil Aoanan, web developer"
                fill
                priority
                sizes="(max-width: 767px) 100vw, 40vw"
                className="object-contain object-center"
              />
            </div>
          </div>

          {/* Bottom on mobile: developer cards */}
          {/* 3. Toolkit and availability */}
          <div className="relative z-30 order-3 flex w-full flex-col items-center justify-end gap-5 pb-12 md:order-none md:min-h-[calc(100svh-var(--navbar-height))] md:ml-auto md:w-[31%] md:shrink-0 md:items-end md:py-24">
            {/* Toolkit card */}
            <div
              data-hero-toolkit
              className="w-full max-w-none md:max-w-[360px] border border-white/[0.10] bg-[#191C1D]/80 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-colors duration-300 hover:border-white/[0.18]"
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
              className="flex w-full max-w-none md:max-w-[360px] items-center justify-between border border-white/[0.10] bg-[#191C1D]/90 px-4 py-3.5 backdrop-blur-xl md:w-auto md:self-end"
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
        <div className="pointer-events-none absolute bottom-20 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
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
