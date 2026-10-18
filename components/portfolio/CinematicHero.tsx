"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight, Layers3, Sparkles } from "lucide-react";

import Navbar from "@/components/portfolio/Navbar";

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
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const select = (selector: string) =>
        gsap.utils.toArray<HTMLElement>(selector, heroRef.current);

      const portrait = select("[data-hero-portrait]")[0];
      const portraitVisual = select("[data-hero-portrait-visual]")[0];

      const building = select("[data-hero-ramil]")[0];
      const forThe = select("[data-hero-aoanan]")[0];
      const better = select("[data-hero-better]")[0];
      const web = select("[data-hero-web]")[0];

      const intro = select("[data-hero-intro]")[0];
      const code = select("[data-hero-code]")[0];
      const toolkit = select("[data-hero-toolkit]")[0];
      const status = select("[data-hero-status]")[0];

      if (
        !heroRef.current ||
        !portrait ||
        !portraitVisual ||
        !building ||
        !forThe ||
        !better ||
        !web ||
        !intro ||
        !toolkit ||
        !status
      ) {
        return;
      }

      const headline = [building, forThe, better, web];
      const supportingContent = [
        intro,
        ...(code ? [code] : []),
        toolkit,
        status,
      ];

      // Initial portrait state.
      gsap.set(portrait, {
        autoAlpha: 1,
      });

      gsap.set(portraitVisual, {
        scale: 0.75,
        transformOrigin: "50% 50%",
      });

      // Initial headline states.
      gsap.set(building, {
        autoAlpha: 0,
        y: -90,
        rotateX: -12,
        transformOrigin: "50% 100%",
      });

      gsap.set([forThe, better, web], {
        autoAlpha: 0,
        x: -100,
        y: 12,
      });

      // Initial supporting content states.
      gsap.set(supportingContent, {
        autoAlpha: 0,
        y: 24,
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Portrait starts small and zooms in on scroll.
      timeline.to(
        portraitVisual,
        {
          scale: 1.15,
          duration: 1.4,
          ease: "power2.out",
        },
        0,
      );

      // 2. Reveal BUILDING.
      timeline.to(
        building,
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 0.65,
        },
        0.25,
      );

      // 3. Reveal FOR THE.
      timeline.to(
        forThe,
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.6,
        },
        0.65,
      );

      // 4. Reveal BETTER.
      timeline.to(
        better,
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.6,
        },
        0.95,
      );

      // 5. Reveal WEB.
      timeline.to(
        web,
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.6,
        },
        1.2,
      );

      // 6. Reveal introduction.
      timeline.to(
        intro,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
        },
        1.45,
      );

      // 7. Reveal optional code card if present.
      if (code) {
        timeline.to(
          code,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
          },
          1.6,
        );
      }

      // 8. Reveal toolkit.
      timeline.to(
        toolkit,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
        },
        1.75,
      );

      // 9. Reveal availability status.
      timeline.to(
        status,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
        },
        1.9,
      );
    }, heroRef);

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

      <Navbar />

      <section
        ref={heroRef}
        aria-label="Introduction"
        className="relative mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col justify-end overflow-hidden px-5 pt-24 sm:px-8 lg:px-14"
      >
        {/* Hero composition */}
        <div className="relative z-10 flex w-full flex-col justify-center gap-10 md:min-h-[min(760px,calc(100svh-120px))] md:flex-row md:items-center md:gap-8">
          {/* Left: identity and introduction */}
          <div className="relative z-20 flex w-full flex-col items-start pb-12 md:w-[43%] md:shrink-0">
            <SectionLabel number="01">Independent web developer</SectionLabel>

            {/* Four independently animated headline lines */}
            <h1 className="mt-7 flex max-w-[680px] flex-col items-start text-[clamp(2.8rem,6.4vw,6.5rem)] font-black uppercase leading-[0.84] tracking-[-0.075em]">
              <span data-hero-ramil className="inline-block text-[#F5F0E7]">
                BUILDING
              </span>

              <span
                data-hero-aoanan
                className="mt-2 inline-block text-[#F5F0E7]"
              >
                FOR THE
              </span>

              <span
                data-hero-better
                className="mt-2 inline-block text-[#F15A36]"
              >
                BETTER
              </span>

              <span data-hero-web className="mt-2 inline-block text-[#F5F0E7]">
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

          {/* Center: portrait */}
          <div
            data-hero-portrait
            className="pointer-events-none relative z-10 mx-auto w-full max-w-[350px] shrink-0 md:absolute md:inset-0 md:mx-auto md:flex md:max-w-none md:items-end md:justify-center"
          >
            <div
              data-hero-portrait-visual
              className="relative mx-auto aspect-[4/5] w-[95%] max-w-[560px] will-change-transform md:aspect-auto md:h-[min(92vh,900px)] md:w-[48%] md:max-w-[650px]"
            >
              {/* Warm light behind the portrait */}
              <div className="absolute bottom-[7%] left-1/2 h-[48%] w-[75%] -translate-x-1/2 rounded-full bg-[#F15A36]/[0.16] blur-[90px]" />

              {/* Fine portrait frame */}
              <div className="absolute bottom-[4%] left-[7%] right-[7%] top-[8%] border border-white/[0.07]" />

              <div className="absolute right-[7%] top-[8%] h-5 w-5 border-r border-t border-[#F15A36]/80" />

              <div className="absolute bottom-[4%] left-[7%] h-5 w-5 border-b border-l border-[#F15A36]/80" />

              <Image
                src="/images/profile.png"
                alt="Ramil Aoanan, web developer"
                fill
                priority
                sizes="(max-width: 767px) 80vw, 40vw"
                className="object-contain object-bottom"
              />

              <div className="absolute right-[10%] top-[12%] font-mono text-[9px] tracking-wider text-[#F5F0E7]/40">
                RA. / 001
              </div>
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
