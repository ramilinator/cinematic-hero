"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Braces, Code2, Layers3, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const storyItems = [
  {
    number: "01",
    eyebrow: "WHAT I DO",
    title: "I BUILD FOR THE WEB.",
    description:
      "Creating responsive, accessible interfaces that work beautifully across devices.",
    icon: Code2,
  },
  {
    number: "02",
    eyebrow: "HOW I THINK",
    title: "DESIGN MEETS FUNCTION.",
    description:
      "Turning ideas into practical digital experiences with clarity and purpose.",
    icon: Layers3,
  },
  {
    number: "03",
    eyebrow: "MY TOOLKIT",
    title: "MODERN BY DESIGN.",
    description:
      "Working with React, Next.js, TypeScript, Tailwind CSS, and headless CMS platforms.",
    icon: Braces,
  },
  {
    number: "04",
    eyebrow: "WHAT'S NEXT",
    title: "LET'S BUILD SOMETHING.",
    description:
      "I'm ready to contribute my skills, solve problems, and bring new ideas to life.",
    icon: Rocket,
  },
];

export default function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);

      const grid = q("[data-grid]");
      const ship = q("[data-ship]");
      const nameGroup = q("[data-name-group]");
      const ramil = q("[data-ramil]");
      const aoanan = q("[data-aoanan]");
      const portrait = q("[data-portrait]");
      const stories = q("[data-story]");
      const flash = q("[data-flash]");
      const progress = q("[data-progress]");

      gsap.set(ship, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
      });

      gsap.set(nameGroup, { autoAlpha: 1 });
      gsap.set(ramil, { x: "110vw", autoAlpha: 0 });
      gsap.set(aoanan, { x: "-110vw", autoAlpha: 0 });
      gsap.set(flash, { autoAlpha: 0 });

      gsap.set(portrait, {
        autoAlpha: 0,
        scale: 0.12,
        transformOrigin: "center center",
      });

      gsap.set(stories, {
        autoAlpha: 0,
        y: 24,
        scale: 0.96,
      });

      gsap.set(progress, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      const isMobile = window.matchMedia("(max-width: 600px)").matches;

      stories.forEach((item, index) => {
        gsap.set(item, {
          x: isMobile ? 0 : index % 2 === 0 ? -30 : 30,
          y: isMobile ? 14 : 0,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: q("[data-stage]")[0],
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Scene 1 — Rocket ascent and moving grid.
      tl.to(
        grid,
        {
          backgroundPositionY: "1800px",
          duration: 8.2,
          ease: "none",
        },
        0,
      );

      tl.to(
        progress,
        {
          scaleX: 1,
          duration: 8.2,
          ease: "none",
        },
        0,
      );

      // Scene 2 — Name enters from opposite directions.
      tl.to(
        ramil,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.65,
          ease: "power2.out",
        },
        1.2,
      );

      tl.to(
        aoanan,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.65,
          ease: "power2.out",
        },
        1.2,
      );

      // The names pass through each other.
      tl.to(
        ramil,
        {
          x: "-110vw",
          duration: 0.7,
          ease: "power2.in",
        },
        1.95,
      );

      tl.to(
        aoanan,
        {
          x: "110vw",
          duration: 0.7,
          ease: "power2.in",
        },
        1.95,
      );

      tl.to(
        nameGroup,
        {
          autoAlpha: 0,
          duration: 0.01,
        },
        2.65,
      );

      // Scene 4 — Rocket launches out of frame.
      tl.to(
        ship,
        {
          y: "-160svh",
          scale: 0.55,
          autoAlpha: 0,
          duration: 1.2,
          ease: "power3.in",
        },
        4,
      );

      // Portrait reveal.
      tl.to(portrait, {
        autoAlpha: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      });

      // Scene 5 — Story cards appear sequentially.
      stories.forEach((item, index) => {
        if (isMobile && index > 0) {
          tl.to(stories[index - 1], {
            autoAlpha: 0,
            y: -10,
            duration: 0.18,
            ease: "power1.in",
          });
        }

        tl.to(item, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Cinematic portfolio introduction"
      className="relative min-h-[600svh] bg-[#f7f0e5] text-[#29251f]"
    >
      {/* Pinned cinematic stage */}
      <div
        data-stage
        className="sticky top-0 isolate h-svh min-h-[560px] overflow-hidden bg-[#f7f0e5]"
      >
        {/* Animated technical grid */}
        <div
          data-grid
          aria-hidden="true"
          className="absolute inset-0 -z-30 bg-[#f7f0e5] [background-image:linear-gradient(to_right,rgba(41,37,31,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(41,37,31,0.10)_1px,transparent_1px)] [background-size:48px_48px] sm:[background-size:64px_64px]"
        />

        {/* Atmospheric background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.72)_0%,transparent_65%)]"
        />

        {/* Grain-like technical overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(rgba(41,37,31,0.20)_0.6px,transparent_0.6px)] [background-size:5px_5px]"
        />

        {/* Modern minimalist rocket scene */}
        <div
          data-ship
          aria-hidden="true"
          className="absolute left-1/2 top-[42%] z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        >
          {/* Subtle orange atmosphere */}
          <div className="absolute h-40 w-40 rounded-full bg-[#f16b3b]/10 blur-3xl sm:h-56 sm:w-56" />

          <svg
            viewBox="0 0 160 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative h-[clamp(160px,27vh,260px)] w-auto"
          >
            {/* Engine flame */}
            <path d="M69 158 L80 205 L91 158" fill="#F16B3B" />

            <path d="M75 161 L80 187 L85 161" fill="#F6B84B" />

            {/* Left fin */}
            <path d="M59 111 L38 143 Q36 146 41 146 L66 137 Z" fill="#29251F" />

            {/* Right fin */}
            <path
              d="M101 111 L122 143 Q124 146 119 146 L94 137 Z"
              fill="#29251F"
            />

            {/* Main rocket body */}
            <path
              d="M80 20
         C63 38 55 61 55 91
         L55 143
         Q55 153 65 153
         L95 153
         Q105 153 105 143
         L105 91
         C105 61 97 38 80 20 Z"
              fill="#F7F0E5"
              stroke="#29251F"
              strokeWidth="3"
              strokeLinejoin="round"
            />

            {/* Minimal nose accent */}
            <path
              d="M80 20 C68 33 61 48 58 64 L102 64 C99 48 92 33 80 20 Z"
              fill="#F16B3B"
            />

            {/* Cockpit */}
            <circle cx="80" cy="83" r="10" fill="#29251F" />

            <circle cx="83" cy="80" r="3" fill="#F7F0E5" fillOpacity="0.8" />

            {/* Minimal body detail */}
            <path
              d="M69 117 H91"
              stroke="#29251F"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.65"
            />

            {/* Engine base */}
            <path
              d="M69 153 V161 H91 V153"
              fill="#F16B3B"
              stroke="#29251F"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Name animation */}
        <div
          data-name-group
          aria-hidden="true"
          className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4"
        >
          <div className="mb-7 flex items-center gap-3 font-mono text-[9px] font-bold tracking-[0.22em] sm:text-[11px] sm:tracking-[0.3em]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#f16b3b]" />
            <span>SCENE 01 / ASCENSION PROTOCOL</span>
          </div>

          <div className="flex w-full flex-col items-center gap-1">
            <div className="w-full overflow-hidden">
              <span
                data-ramil
                className="block text-center font-black leading-[0.82] tracking-[-0.09em] text-[#29251f] text-[clamp(4rem,15vw,13rem)]"
              >
                RAMIL
              </span>
            </div>

            <div className="w-full overflow-hidden">
              <span
                data-aoanan
                className="block text-center font-black leading-[0.82] tracking-[-0.09em] text-[#f16b3b] text-[clamp(4rem,15vw,13rem)]"
              >
                AOANAN<span className="text-[#29251f]">.</span>
              </span>
            </div>
          </div>

          <p className="mt-8 font-mono text-[9px] font-bold tracking-[0.3em] text-[#29251f]/60 sm:text-xs sm:tracking-[0.5em]">
            DESIGN / DEVELOP / DEPLOY
          </p>
        </div>

        {/* Orange flash */}
        <div
          data-flash
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 bg-[#f16b3b]"
        />

        {/* Large bottom-centered portrait */}
        <div
          data-portrait
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex h-[78svh] max-h-[900px] min-h-[420px] items-end justify-center sm:h-[88svh] lg:h-[96svh]"
        >
          {/* Subtle grounding shadow */}
          <div className="absolute bottom-0 left-1/2 h-24 w-[65%] -translate-x-1/2 rounded-full bg-[#29251f]/10 blur-3xl sm:h-32" />

          {/* Portrait image */}
          <div className="relative h-full w-full">
            <Image
              src="/images/profile.png"
              alt="Ramil Aoanan, web developer"
              fill
              priority
              sizes="100vw"
              className="object-contain object-bottom drop-shadow-[0_12px_24px_rgba(41,37,31,0.12)]"
            />
          </div>
        </div>

        {/* Story cards */}
        <div className="absolute inset-x-0 bottom-[13%] z-20 px-5 sm:bottom-[12%] sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-3xl grid-cols-1">
            {storyItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  data-story
                  className="col-start-1 row-start-1 mx-auto w-full max-w-2xl border-t border-[#29251f]/20 bg-[#f7f0e5]/80 px-5 py-4 shadow-[0_12px_40px_rgba(41,37,31,0.04)] backdrop-blur-md sm:px-8 sm:py-6"
                >
                  <div className="mb-4 flex items-center justify-between gap-4 font-mono text-[9px] font-bold tracking-[0.18em] text-[#29251f]/55 sm:text-[10px]">
                    <span>{item.number} / 04</span>
                    <span>{item.eyebrow}</span>
                  </div>

                  <div className="mb-3 flex h-9 w-9 items-center justify-center border border-[#f16b3b]/40 bg-[#f16b3b]/10 text-[#f16b3b]">
                    <Icon aria-hidden="true" size={17} strokeWidth={1.7} />
                  </div>

                  <h2 className="max-w-xl text-2xl font-black leading-[0.95] tracking-[-0.055em] text-[#29251f] sm:text-4xl md:text-5xl">
                    {item.title}
                  </h2>

                  <p className="mt-3 max-w-lg text-xs leading-6 text-[#29251f]/70 sm:text-sm sm:leading-7">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Persistent top status */}
        <div className="absolute left-5 top-5 z-40 flex items-center gap-2 font-mono text-[9px] font-bold tracking-[0.17em] text-[#29251f]/65 sm:left-10 sm:top-8 sm:text-[10px] lg:left-16">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f16b3b]" />
          <span>PORTFOLIO EXPERIENCE</span>
        </div>

        <div className="absolute right-5 top-5 z-40 font-mono text-[9px] tracking-[0.15em] text-[#29251f]/50 sm:right-10 sm:top-8 sm:text-[10px] lg:right-16">
          RA / 2026
        </div>

        {/* Scroll progress */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-50 h-1 bg-[#29251f]/10"
        >
          <div data-progress className="h-full w-full bg-[#f16b3b]" />
        </div>

        {/* Scroll hint */}
        <a
          href="#story"
          onClick={(event) => {
            event.preventDefault();
            const section = sectionRef.current;
            if (!section) return;

            const distance = section.offsetHeight - window.innerHeight;

            window.scrollTo({
              top: section.offsetTop + Math.max(0, distance * 0.12),
              behavior: "smooth",
            });
          }}
          className="absolute bottom-7 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap font-mono text-[9px] font-bold tracking-[0.2em] text-[#29251f]/65 transition-colors hover:text-[#f16b3b] sm:bottom-9 sm:text-[10px]"
        >
          <span>SCROLL TO EXPERIENCE</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>

        {/* Scene counter */}
        <div
          aria-hidden="true"
          className="absolute bottom-8 right-5 z-40 hidden items-center gap-3 font-mono text-[10px] tracking-widest text-[#29251f]/55 sm:flex sm:right-10 lg:right-16"
        >
          <span>01</span>
          <span className="h-px w-8 bg-[#29251f]/30" />
          <span>05</span>
        </div>
      </div>
    </section>
  );
}
