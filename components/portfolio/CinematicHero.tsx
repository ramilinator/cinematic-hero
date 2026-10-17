"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Code2,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/portfolio/Navbar";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "WordPress",
  "Strapi",
];

function LaunchRocket() {
  return (
    <svg
      viewBox="0 0 100 180"
      className="h-full w-full overflow-visible"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rocketBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF9F0" />
          <stop offset="55%" stopColor="#F5F0E7" />
          <stop offset="100%" stopColor="#BEB7AC" />
        </linearGradient>

        <linearGradient id="rocketFlame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF9E8" />
          <stop offset="35%" stopColor="#F15A36" />
          <stop offset="100%" stopColor="#F15A36" stopOpacity="0" />
        </linearGradient>

        <filter id="rocketGlow" x="-150%" y="-100%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Exhaust glow */}
      <ellipse
        cx="50"
        cy="118"
        rx="19"
        ry="42"
        fill="#F15A36"
        opacity="0.8"
        filter="url(#rocketGlow)"
      />

      {/* Exhaust flame */}
      <path
        d="M38 93 Q50 125 50 166 Q68 127 62 93 Z"
        fill="url(#rocketFlame)"
      />

      <path
        d="M45 94 Q50 119 50 143 Q57 118 55 94 Z"
        fill="#FFF9E8"
        opacity="0.95"
      />

      {/* Rocket fins */}
      <path d="M37 68 L22 95 L40 89 Z" fill="#F15A36" />
      <path d="M63 68 L78 95 L60 89 Z" fill="#F15A36" />

      {/* Rocket body */}
      <path
        d="M50 9 C34 25 30 48 35 83 L40 96 L60 96 L65 83 C70 48 66 25 50 9 Z"
        fill="url(#rocketBody)"
        stroke="#FFF9F0"
        strokeWidth="1"
      />

      {/* Nose highlight */}
      <path
        d="M50 9 C42 24 40 37 40 49"
        stroke="#FFFFFF"
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Window */}
      <circle
        cx="50"
        cy="52"
        r="9"
        fill="#121516"
        stroke="#F15A36"
        strokeWidth="3"
      />
      <circle cx="47" cy="49" r="2.5" fill="#F5F0E7" opacity="0.9" />

      {/* Body details */}
      <path
        d="M40 76 H60"
        stroke="#121516"
        strokeOpacity="0.2"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function PortfolioHeroDark() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const select = <T extends HTMLElement>(selector: string) =>
        hero.querySelector<T>(selector);

      const headline = select("[data-hero-headline]");
      const intro = select("[data-hero-intro]");
      const code = select("[data-hero-code]");
      const toolkit = select("[data-hero-toolkit]");
      const status = select("[data-hero-status]");
      const portrait = select("[data-hero-portrait]");

      const launchGroup = select("[data-launch-group]");
      const rocket = select("[data-launch-rocket]");
      const exhaust = select("[data-launch-exhaust]");
      const launchGlow = select("[data-launch-glow]");
      const launchRays = select("[data-launch-rays]");

      if (
        !headline ||
        !intro ||
        !code ||
        !toolkit ||
        !status ||
        !portrait ||
        !launchGroup ||
        !rocket ||
        !exhaust ||
        !launchGlow ||
        !launchRays
      ) {
        return;
      }

      const nameAndInfo = [headline, intro];
      const rightContent = [code, toolkit, status];
      const content = [...nameAndInfo, ...rightContent, portrait];

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      // Respect the user's reduced-motion preference.
      if (reduceMotion) {
        gsap.set(content, {
          clearProps: "all",
          autoAlpha: 1,
        });

        gsap.set(launchGroup, {
          clearProps: "all",
        });

        return;
      }

      /*
       * INITIAL STATE
       * Hide the content and keep the rocket visible at its starting position.
       */

      gsap.set(content, {
        autoAlpha: 0,
        y: 80,
        force3D: true,
      });

      gsap.set(launchGroup, {
        y: 0,
        force3D: true,
      });

      gsap.set(rocket, {
        autoAlpha: 1,
        xPercent: -50,
        rotation: 0,
        force3D: true,
      });

      gsap.set(exhaust, {
        autoAlpha: 0,
        scaleX: 0.65,
        scaleY: 0.15,
        transformOrigin: "50% 0%",
      });

      gsap.set(launchRays, {
        autoAlpha: 0,
        scaleX: 0.7,
        scaleY: 0.2,
        transformOrigin: "50% 0%",
      });

      gsap.set(launchGlow, {
        autoAlpha: 0,
        scale: 0.45,
        transformOrigin: "50% 50%",
      });

      /*
       * SCROLL TIMELINE
       */

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=300%",
          scrub: 0.8,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /*
       * ACT 1 — ROCKET WAITING
       */

      timeline.to(
        {},
        {
          duration: 0.3,
        },
      );

      /*
       * ACT 2 — BOOSTER IGNITION
       */

      timeline.to(
        exhaust,
        {
          autoAlpha: 1,
          scaleX: 0.9,
          scaleY: 1,
          duration: 0.35,
          ease: "power2.out",
        },
        ">",
      );

      timeline.to(
        launchRays,
        {
          autoAlpha: 0.75,
          scaleX: 1,
          scaleY: 1,
          duration: 0.45,
          ease: "power2.out",
        },
        "<",
      );

      timeline.to(
        launchGlow,
        {
          autoAlpha: 0.85,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "<",
      );

      /*
       * ACT 3 — ROCKET LIFTOFF
       * Move the rocket and its booster lighting upward together.
       */

      timeline.to(
        launchGroup,
        {
          y: () => -window.innerHeight * 1.1,
          duration: 2.2,
          ease: "power2.inOut",
        },
        ">",
      );

      /*
       * ACT 4 — BOOSTER LIGHT FADES
       */

      timeline.to(
        [exhaust, launchRays, launchGlow],
        {
          autoAlpha: 0,
          duration: 0.7,
          ease: "power1.out",
        },
        "<1.5",
      );

      /*
       * ACT 5 — PORTRAIT APPEARS FIRST
       * The portrait enters after the rocket has launched.
       */

      timeline.to(
        portrait,
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        ">0.1",
      );

      /*
       * ACT 6 — NAME AND INTRODUCTION
       * Reveal the name first, followed by the introduction.
       */

      timeline.to(
        headline,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
        },
        ">0.15",
      );

      timeline.to(
        intro,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        ">0.12",
      );

      /*
       * ACT 7 — RIGHT-SIDE VISUALS
       * Reveal the code card, toolkit, and availability status last.
       */

      timeline.to(
        rightContent,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.18,
          ease: "power3.out",
        },
        ">0.2",
      );
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
      {/* Static background ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[35%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#F15A36]/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,240,231,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,231,0.12) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "linear-gradient(to bottom, black, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#121516_78%)]" />
      </div>

      <Navbar />

      <section
        ref={heroRef}
        aria-label="Introduction"
        className="relative mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col justify-end overflow-hidden px-5 pt-24 sm:px-8 lg:px-14"
      >
        {/* Rocket launch atmosphere */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
        >
          <div data-launch-group className="absolute inset-0">
            {/* Soft orange light cast by the booster */}
            <div
              data-launch-glow
              className="absolute left-1/2 top-[68%] h-44 w-36 -translate-x-1/2 rounded-full bg-[#F15A36]/20 blur-[55px]"
            />

            {/* Diffuse exhaust plume */}
            <div
              data-launch-rays
              className="absolute left-1/2 top-[73%] h-64 w-20 -translate-x-1/2 rounded-full bg-[linear-gradient(to_bottom,rgba(255,220,175,0.38),rgba(241,90,54,0.22)_35%,rgba(241,90,54,0.06)_75%,transparent)] blur-2xl"
            />

            {/* Bright, concentrated booster flame */}
            <div
              data-launch-exhaust
              className="absolute left-1/2 top-[75%] h-32 w-8 -translate-x-1/2 rounded-full bg-[linear-gradient(to_bottom,#FFF9E8_0%,#FFD0A0_18%,#F15A36_48%,rgba(241,90,54,0.15)_82%,transparent_100%)] blur-md"
            />

            {/* Rocket */}
            <div
              data-launch-rocket
              className="absolute left-1/2 top-[68%] z-10 h-40 w-24 -translate-x-1/2"
            >
              <LaunchRocket />
            </div>
          </div>
        </div>

        {/* Hero composition */}
        <div className="relative z-10 flex w-full flex-col justify-center gap-10 md:min-h-[min(760px,calc(100svh-120px))] md:flex-row md:items-center md:gap-8">
          {/* Left text */}
          <div className="relative z-0 flex w-full flex-col items-start pb-12 md:w-[43%] md:shrink-0">
            <p
              data-hero-headline
              className="max-w-[720px] text-[clamp(3.3rem,7.2vw,7.4rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]"
            >
              RAMIL AOANAN
            </p>

            <p
              data-hero-intro
              className="mt-7 max-w-[440px] text-sm leading-7 text-[#A5A19A] sm:text-base sm:leading-8"
            >
              I&apos;m Ramil — a web developer who brings together thoughtful
              design, modern technology, and practical solutions to build
              meaningful digital experiences.
            </p>
          </div>

          {/* Portrait */}
          <div
            data-hero-portrait
            className="pointer-events-none relative z-10 mx-auto w-full max-w-[350px] shrink-0 md:absolute md:inset-0 md:mx-auto md:flex md:max-w-none md:items-end md:justify-center"
          >
            <div className="relative mx-auto aspect-[4/5] w-[95%] max-w-[560px] md:h-[min(92vh,900px)] md:w-[48%] md:max-w-[650px] md:aspect-auto">
              <div className="absolute bottom-[8%] left-1/2 h-[55%] w-[90%] -translate-x-1/2 rounded-full bg-[#F15A36]/20 blur-[80px]" />

              <Image
                src="/images/profile.png"
                alt="Ramil Aoanan, web developer"
                fill
                priority
                sizes="(max-width: 767px) 80vw, 40vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Right visuals */}
          <div className="relative z-0 flex w-full flex-col items-center gap-6 md:ml-auto md:w-[31%] md:shrink-0 md:items-end">
            <div
              data-hero-code
              className="w-full max-w-[360px] overflow-hidden rounded-xl border border-white/[0.10]  shadow-[0_24px_90px_rgba(0,0,0,0.24)] backdrop-blur-md"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F15A36]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F5F0E7]/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F5F0E7]/15" />
                </div>

                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#A5A19A]">
                  <Code2 size={13} />
                  developer.tsx
                </div>
              </div>

              <div className="space-y-3 p-5 font-mono text-xs leading-6 sm:text-[13px]">
                <p className="text-[#A5A19A]">
                  <span className="text-[#F15A36]">const</span> developer ={" "}
                  {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-[#F15A36]">name</span>:{" "}
                  <span className="text-[#C8DDA8]">
                    &quot;Ramil Aoanan&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  <span className="text-[#F15A36]">focus</span>:{" "}
                  <span className="text-[#C8DDA8]">
                    &quot;Web experiences&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  <span className="text-[#F15A36]">approach</span>:{" "}
                  <span className="text-[#C8DDA8]">
                    &quot;Design + Code&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  <span className="text-[#F15A36]">available</span>:{" "}
                  <span className="text-[#E7B98A]">true</span>
                </p>
                <p className="text-[#A5A19A]">{"};"}</p>

                <div className="mt-4 flex items-center gap-2 border-t border-white/[0.08] pt-4 text-[11px] text-[#A5A19A]">
                  <CheckCircle2 size={14} className="text-[#F15A36]" />
                  Ready to build something meaningful
                </div>
              </div>
            </div>

            <div
              data-hero-toolkit
              className="w-full max-w-[360px] rounded-xl border border-white/[0.10] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.18)] backdrop-blur-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles size={15} className="text-[#F15A36]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em]">
                    My toolkit
                  </p>
                </div>

                <span className="text-[10px] uppercase tracking-[0.12em] text-[#A5A19A]">
                  Technologies
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/[0.10] bg-white/[0.03] px-3 py-2 text-xs text-[#D2CDC4] transition-colors duration-300 hover:border-[#F15A36]/50 hover:text-[#F15A36]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div
              data-hero-status
              className="flex items-center gap-3 self-center rounded-full border border-white/[0.10] bg-[#191C1D]/80 px-4 py-3 md:self-end"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F15A36]/50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#F15A36]" />
              </span>
              <span className="text-xs text-[#D2CDC4]">
                Available for opportunities
              </span>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[#A5A19A]/70 md:flex">
          <span>Scroll to explore</span>
          <ArrowDown size={14} />
        </div>
      </section>
    </main>
  );
}
