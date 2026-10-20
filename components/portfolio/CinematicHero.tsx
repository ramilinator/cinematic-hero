"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Layers3, Sparkles } from "lucide-react";
import WebDroppingSpider from "@/components/portfolio/WebDroppingSpider";
import SpiderWeb from "@/components/portfolio/SpiderWeb";

gsap.registerPlugin(ScrollTrigger);

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

      // Shared wrapper: moves the web and spider together.
      const spiderEffects = hero.querySelector<HTMLElement>(
        "[data-hero-spider-effects]",
      );

      // Portrait entrance and its separate parallax wrapper.
      const portrait = select("[data-hero-portrait-visual]")[0] as
        | HTMLElement
        | undefined;

      const portraitParallax = select("[data-hero-portrait-parallax]")[0] as
        | HTMLElement
        | undefined;

      // The complete left and right text columns.
      const leftText = select("[data-hero-left-text]")[0] as
        | HTMLElement
        | undefined;

      const rightText = select("[data-hero-right-text]")[0] as
        | HTMLElement
        | undefined;

      if (
        !spiderEffects ||
        !portrait ||
        !portraitParallax ||
        !leftText ||
        !rightText
      ) {
        return;
      }

      // Calculate the starting offset relative to the hero.
      // The effects start centered, then travel to their
      // existing CSS position in the upper-left third.
      const getCenterOffsetX = () => hero.clientWidth / 6;

      const getCenterOffsetY = () => hero.clientHeight / 6;

      // Initial state: centered web and spider at normal scale.
      gsap.set(spiderEffects, {
        x: getCenterOffsetX,
        y: getCenterOffsetY,
        scale: 0.75,
        autoAlpha: 1,
        transformOrigin: "50% 50%",
        force3D: true,
      });

      // Initial portrait state.
      gsap.set(portrait, {
        autoAlpha: 0,
        yPercent: 20,
        scale: 0.9,
        transformOrigin: "50% 50%",
        force3D: true,
      });

      // Hide both text columns without removing them
      // from the layout.
      gsap.set(leftText, {
        autoAlpha: 0,
        x: -35,
      });

      gsap.set(rightText, {
        autoAlpha: 0,
        x: 35,
      });

      // Main scroll-controlled timeline.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Web + spider move together from center to upper-left.
      // Web + spider move to the upper-left third while scaling down.
      // Web and spider move and scale down while the portrait slides in.
      tl.to(
        spiderEffects,
        {
          x: 0,
          y: 0,
          scale: 0.35,
          duration: 1.2,
          ease: "power2.inOut",
        },
        0,
      );

      tl.fromTo(
        portrait,
        {
          autoAlpha: 1,
          x: () => hero.clientWidth,
          yPercent: 5,
          scale: 1,
        },
        {
          autoAlpha: 1,
          x: 0,
          yPercent: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
        },
        0,
      );

      // 3. Left text appears after both animations finish.
      tl.to(
        leftText,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        1.2,
      );

      // 4. Right text appears last.
      tl.to(
        rightText,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        1.8,
      );

      // --------------------------------------------------
      // PORTRAIT PARALLAX
      // Keep this separate from the entrance animation.
      // --------------------------------------------------

      gsap.to(portraitParallax, {
        yPercent: 100,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=180%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Recalculate the centered starting position when
      // the viewport changes size.
      ScrollTrigger.refresh();
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <main
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#121516] text-[#F5F0E7] selection:bg-[#F15A36] selection:text-[#121516]"
    >
      <section
        ref={heroRef}
        aria-label="Introduction"
        className="relative isolate mx-auto grid min-h-[100svh] w-full max-w-[1800px] grid-rows-[1fr_auto] overflow-hidden px-8 pt-[var(--navbar-height)] sm:px-12 md:px-16 lg:px-20 xl:px-24"
      >
        {/* SPIDER WEB + DROPPING SPIDER */}

        <div
          data-hero-spider-effects
          className="pointer-events-none absolute inset-0 left-1/2 top-[33.3333%] z-10 h-[min(100vw,100svh)] w-[min(100vw,100svh)] max-w-none -translate-x-1/2 -translate-y-1/2 overflow-visible md:left-[33.3333%]"
        >
          <SpiderWeb className="absolute inset-0 h-full w-full overflow-visible" />

          <WebDroppingSpider className="absolute inset-0 z-10 h-full w-full overflow-visible" />
        </div>

        {/* MAIN HERO COMPOSITION */}

        <div className="relative z-20 grid min-h-[calc(100svh-var(--navbar-height))] min-h-[calc(100dvh-var(--navbar-height))] w-full grid-cols-1 items-center justify-center gap-8 pt-8 md:grid-cols-3 md:gap-8 md:pt-0 lg:gap-12 xl:gap-16">
          {/* LEFT: HEADLINE AND LABEL */}

          <div
            data-hero-left-text
            className="relative z-30 order-1 flex w-full flex-col justify-start sm:pt-0 md:order-none md:col-start-1 md:row-start-1 md:min-h-[calc(100svh-var(--navbar-height))] md:items-start md:py-8 md:pr-8 md:text-left lg:pr-10"
          >
            <div className="ml-2">
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
          </div>

          {/* CENTER: PORTRAIT */}

          <div
            data-hero-portrait
            className="pointer-events-none relative z-10 order-3 mx-auto flex h-[min(78vw,380px)] w-full max-w-[440px] shrink-0 items-end justify-center md:absolute md:inset-y-0 md:left-[66.6667%] md:order-none md:h-full md:w-[664px] md:max-w-none md:-translate-x-1/2"
          >
            <div
              data-hero-portrait-parallax
              className="absolute inset-x-0 bottom-0 h-full"
            >
              <div
                data-hero-portrait-visual
                className="absolute inset-x-0 bottom-0 z-10 mx-auto h-full w-full"
              >
                <Image
                  src="/images/profile.png"
                  alt="Ramil Aoanan, web developer"
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, 40vw"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: INTRODUCTION */}

          <div
            data-hero-right-text
            className="relative z-30 order-2 flex w-full flex-col justify-center sm:pt-0 md:order-none md:col-start-3 md:row-start-1 md:min-h-[calc(100svh-var(--navbar-height))] md:items-start md:justify-end md:py-8 md:pl-8 md:text-left lg:pl-10"
          >
            <p
              data-hero-intro
              className="max-w-[410px] pb-12 text-sm leading-7 text-[#A5A19A] sm:text-base sm:leading-8"
            >
              I&apos;m Ramil — a web developer who brings together thoughtful
              design, modern technology, and practical solutions to build
              meaningful digital experiences.
            </p>
          </div>

          {/* SCROLL INDICATOR */}

          <div className="pointer-events-none absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3 text-center">
            <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#A5A19A]/70">
              Scroll to explore
            </span>

            <div className="relative flex h-12 w-7 justify-center overflow-hidden rounded-full border border-white/15 bg-[#191C1D]/80 p-2">
              <span className="h-2 w-1 animate-scroll-wheel rounded-full bg-[#F15A36]" />
            </div>

            <ArrowDown size={13} className="animate-bounce text-[#F15A36]/70" />
          </div>
        </div>

        {/* DEVELOPER INFORMATION PANEL */}

        <div className="relative z-30 -mx-8 border-t border-white/[0.10] bg-[#191C1D]/95 px-8 py-8 sm:-mx-12 sm:px-12 md:-mx-16 md:px-16 lg:-mx-20 lg:px-20 xl:-mx-24 xl:px-24">
          <div className="mx-auto max-w-[1552px]">
            {/* KEY INFORMATION */}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0">
              {/* Experience */}

              <div className="flex items-center gap-4 sm:pr-6 lg:pr-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#F15A36]/25 bg-[#F15A36]/[0.06]">
                  <span className="font-mono text-lg font-medium tracking-tight text-[#F15A36]">
                    05+
                  </span>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#F5F0E7]">
                    Years of experience
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#A5A19A]">
                    Building responsive web experiences
                  </p>
                </div>
              </div>

              {/* Specialty */}

              <div className="flex items-center gap-4 border-white/[0.10] sm:border-l sm:px-6 lg:px-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.02]">
                  <Layers3 size={20} className="text-[#F15A36]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#F5F0E7]">
                    Frontend development
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#A5A19A]">
                    Thoughtful, user-focused interfaces
                  </p>
                </div>
              </div>

              {/* Availability */}

              <div className="flex items-center gap-4 border-white/[0.10] sm:border-l sm:pl-6 lg:pl-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.02]">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F15A36]/40" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-[#F15A36]" />
                  </span>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#F5F0E7]">
                    Available for opportunities
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#A5A19A]">
                    Open to projects and collaborations
                  </p>
                </div>
              </div>
            </div>

            {/* TECHNOLOGY STACK */}

            <div className="mt-8 flex flex-col gap-5 border-t border-white/[0.10] pt-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <Sparkles size={16} className="shrink-0 text-[#F15A36]" />

                <div>
                  <p className="text-xs font-semibold text-[#F5F0E7]">
                    Technologies I work with
                  </p>

                  <p className="mt-1 text-[10px] text-[#77766F]">
                    Continuously learning and improving
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology, index) => (
                  <span
                    key={technology}
                    className="inline-flex items-center gap-2 rounded-md border border-white/[0.10] bg-white/[0.025] px-3 py-2.5 text-[10px] text-[#C9C4BB] transition-colors duration-300 hover:border-[#F15A36]/40 hover:bg-[#F15A36]/[0.06] hover:text-[#F5F0E7]"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        index === 0 ? "bg-[#F15A36]" : "bg-white/25"
                      }`}
                    />

                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
