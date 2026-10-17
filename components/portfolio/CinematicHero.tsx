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

      const kicker = select("[data-hero-kicker]");
      const headline = select("[data-hero-headline]");
      const intro = select("[data-hero-intro]");
      const actions = select("[data-hero-actions]");
      const code = select("[data-hero-code]");
      const toolkit = select("[data-hero-toolkit]");
      const status = select("[data-hero-status]");
      const portrait = select("[data-hero-portrait]");
      const rocket = select("[data-launch-rocket]");
      const exhaust = select("[data-launch-exhaust]");
      const launchGlow = select("[data-launch-glow]");
      const launchRays = select("[data-launch-rays]");

      const particles = Array.from(
        hero.querySelectorAll<HTMLElement>("[data-launch-particle]"),
      );

      if (
        !kicker ||
        !headline ||
        !intro ||
        !actions ||
        !code ||
        !toolkit ||
        !status ||
        !portrait ||
        !rocket ||
        !exhaust ||
        !launchGlow ||
        !launchRays
      ) {
        return;
      }

      const contentItems = [
        kicker,
        headline,
        intro,
        actions,
        code,
        toolkit,
        status,
      ];

      const textItems = [kicker, headline, intro, actions];
      const visualItems = [code, toolkit, status];

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            ...contentItems,
            portrait,
            rocket,
            exhaust,
            launchGlow,
            launchRays,
            ...particles,
          ],
          { clearProps: "all", autoAlpha: 1 },
        );
        return;
      }

      /*
       * The pile is intentionally centered and overlapping.
       * Each item is visible at the beginning of the timeline.
       */
      const pileOffsets = new Map<
        HTMLElement,
        { x: number; y: number; rotation: number; scale: number }
      >([
        [kicker, { x: -28, y: -80, rotation: -9, scale: 0.95 }],
        [headline, { x: -12, y: -28, rotation: 3, scale: 0.82 }],
        [intro, { x: 35, y: 45, rotation: -5, scale: 0.9 }],
        [actions, { x: -32, y: 102, rotation: 7, scale: 0.9 }],
        [code, { x: 85, y: -62, rotation: 8, scale: 0.78 }],
        [toolkit, { x: 62, y: 72, rotation: -8, scale: 0.82 }],
        [status, { x: -85, y: 82, rotation: 5, scale: 0.85 }],
      ]);

      /*
       * These are the directions in which the rocket's collision
       * sends each element before they return to the final layout.
       */
      const collisionOffsets = new Map<
        HTMLElement,
        { x: number; y: number; rotation: number; scale: number }
      >([
        [kicker, { x: -260, y: -180, rotation: -20, scale: 0.92 }],
        [headline, { x: -310, y: 55, rotation: -9, scale: 0.94 }],
        [intro, { x: 250, y: 190, rotation: 13, scale: 0.9 }],
        [actions, { x: -170, y: 265, rotation: 12, scale: 0.88 }],
        [code, { x: 290, y: -205, rotation: 17, scale: 0.9 }],
        [toolkit, { x: 250, y: 235, rotation: -14, scale: 0.9 }],
        [status, { x: -300, y: 215, rotation: -12, scale: 0.9 }],
      ]);

      // The portrait is hidden until the rocket has passed the pile.
      gsap.set(portrait, {
        autoAlpha: 0,
        y: window.innerHeight * 0.8,
        scale: 0.72,
        force3D: true,
      });

      contentItems.forEach((element) => {
        const start = pileOffsets.get(element)!;

        gsap.set(element, {
          autoAlpha: 1,
          x: start.x,
          y: start.y,
          rotation: start.rotation,
          scale: start.scale,
          transformOrigin: "50% 50%",
          force3D: true,
        });
      });

      gsap.set(rocket, {
        autoAlpha: 0,
        y: () => window.innerHeight * 0.85,
        xPercent: -50,
        rotation: -5,
        transformOrigin: "50% 50%",
      });

      gsap.set(exhaust, {
        autoAlpha: 0,
        scaleY: 0.1,
        transformOrigin: "50% 100%",
      });

      gsap.set(launchGlow, {
        autoAlpha: 0,
        scale: 0.3,
        transformOrigin: "50% 50%",
      });

      gsap.set(launchRays, {
        autoAlpha: 0,
        scaleY: 0.1,
        transformOrigin: "50% 100%",
      });

      particles.forEach((particle) => {
        gsap.set(particle, {
          autoAlpha: 0,
          scale: 0.5,
        });
      });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=340%",
          scrub: 0.8,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /*
       * ACT 1 — The pile already exists.
       * A short pause lets the viewer register the chaotic composition.
       */
      timeline.to({}, { duration: 0.35 });

      /*
       * ACT 2 — Ignition and rocket launch.
       */
      timeline.to(
        launchGlow,
        {
          autoAlpha: 0.9,
          scale: 1,
          duration: 0.45,
        },
        "<",
      );

      timeline.to(
        exhaust,
        {
          autoAlpha: 1,
          scaleY: 1,
          duration: 0.7,
          ease: "power2.out",
        },
        "<",
      );

      timeline.to(
        launchRays,
        {
          autoAlpha: 0.65,
          scaleY: 1,
          duration: 0.8,
        },
        "<",
      );

      timeline.to(
        rocket,
        {
          autoAlpha: 1,
          y: () => -window.innerHeight * 0.8,
          rotation: 0,
          duration: 1.35,
          ease: "power2.in",
        },
        "<",
      );

      /*
       * ACT 3 — Collision.
       * The content gets knocked away from the center.
       */
      timeline.to(
        contentItems,
        {
          x: (index, element) =>
            pileOffsets.get(element as HTMLElement)!.x +
            collisionOffsets.get(element as HTMLElement)!.x,
          y: (index, element) =>
            pileOffsets.get(element as HTMLElement)!.y +
            collisionOffsets.get(element as HTMLElement)!.y,
          rotation: (index, element) =>
            collisionOffsets.get(element as HTMLElement)!.rotation,
          scale: (index, element) =>
            collisionOffsets.get(element as HTMLElement)!.scale,
          duration: 0.8,
          stagger: {
            each: 0.035,
            from: "center",
          },
          ease: "power3.out",
        },
        "-=0.72",
      );

      timeline.to(
        launchGlow,
        {
          autoAlpha: 0.45,
          scale: 1.35,
          duration: 0.8,
        },
        "<",
      );

      timeline.to(
        particles,
        {
          autoAlpha: 1,
          x: (index) => (index % 2 === 0 ? -90 : 90),
          y: (index) => -100 - (index % 5) * 35,
          duration: 0.7,
          stagger: 0.025,
        },
        "<",
      );

      /*
       * ACT 4 — Rocket exits the top of the frame.
       */
      timeline.to(
        rocket,
        {
          autoAlpha: 0,
          duration: 0.18,
        },
        ">-0.15",
      );

      timeline.to(
        exhaust,
        {
          autoAlpha: 0.15,
          scaleY: 0.6,
          duration: 0.7,
        },
        "<",
      );

      timeline.to(
        launchRays,
        {
          autoAlpha: 0.2,
          duration: 0.7,
        },
        "<",
      );

      /*
       * ACT 5 — Portrait reveal.
       * It rises into the center as the exhaust light fades.
       */
      timeline.to(
        portrait,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
        },
        "+=0.1",
      );

      timeline.to(
        launchGlow,
        {
          autoAlpha: 0.25,
          scale: 1.5,
          duration: 1,
        },
        "<",
      );

      timeline.to(
        particles,
        {
          autoAlpha: 0.15,
          duration: 0.65,
          stagger: 0.02,
        },
        "<",
      );

      /*
       * ACT 6 — Content returns to its true layout positions.
       * GSAP's zero translation reveals the underlying CSS layout.
       */
      timeline.to(
        contentItems,
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1.15,
          stagger: {
            each: 0.055,
            from: "center",
          },
          ease: "power3.inOut",
        },
        "+=0.12",
      );

      timeline.to(
        portrait,
        {
          x: 0,
          y: 0,
          scale: 1,
          duration: 1.15,
          ease: "power3.inOut",
        },
        "<",
      );

      timeline.to(
        launchGlow,
        {
          autoAlpha: 0.1,
          scale: 1.7,
          duration: 1,
        },
        "<",
      );
    }, hero);

    return () => ctx.revert();
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
        className="relative mx-auto flex min-h-[calc(100svh-81px)] w-full max-w-[1600px] flex-col justify-center overflow-hidden px-5 py-12 sm:px-8 lg:px-14"
      >
        {/* Rocket launch atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
        >
          <div
            data-launch-glow
            className="absolute bottom-[8%] left-1/2 h-[min(80vw,700px)] w-[min(80vw,700px)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,240,231,0.25)_0%,rgba(241,90,54,0.24)_18%,rgba(241,90,54,0.08)_45%,transparent_70%)] blur-2xl"
          />

          <div
            data-launch-rays
            className="absolute bottom-[5%] left-1/2 h-[95%] w-[min(45vw,500px)] -translate-x-1/2 bg-[linear-gradient(to_top,rgba(245,240,231,0.22),rgba(241,90,54,0.15)_35%,transparent)] blur-2xl"
          />

          <div
            data-launch-exhaust
            className="absolute bottom-[5%] left-1/2 h-[90%] w-[min(24vw,250px)] -translate-x-1/2 bg-[linear-gradient(to_top,rgba(245,240,231,0.95),rgba(241,90,54,0.6)_12%,rgba(241,90,54,0.2)_38%,transparent)] blur-xl"
          />

          {/* Rocket travels from below the viewport to above it. */}
          <div
            data-launch-rocket
            className="absolute left-1/2 top-[68%] z-20 h-40 w-24 -translate-x-1/2"
          >
            <LaunchRocket />
          </div>

          {Array.from({ length: 12 }, (_, index) => (
            <span
              key={index}
              data-launch-particle
              className="absolute left-1/2 top-[55%] h-1 w-1 rounded-full bg-[#F5F0E7] shadow-[0_0_12px_4px_rgba(241,90,54,0.6)]"
              style={{
                marginLeft: `${(index % 5) * 19 - 38}px`,
                marginTop: `${(index % 4) * 18}px`,
              }}
            />
          ))}
        </div>

        {/* Hero composition */}
        <div className="relative z-10 flex w-full flex-col justify-center gap-10 md:min-h-[min(760px,calc(100svh-120px))] md:flex-row md:items-center md:gap-8">
          {/* Left text */}
          <div className="relative z-0 flex w-full flex-col items-start md:w-[43%] md:shrink-0">
            <p
              data-hero-kicker
              className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F15A36]"
            >
              <span className="h-px w-8 bg-[#F15A36]" />
              Independent Web Developer
            </p>

            <h1
              data-hero-headline
              className="max-w-[720px] text-[clamp(3.3rem,7.2vw,7.4rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]"
            >
              Building
              <br />
              <span className="text-[#F15A36]">for the</span>
              <br />
              better web.
            </h1>

            <p
              data-hero-intro
              className="mt-7 max-w-[440px] text-sm leading-7 text-[#A5A19A] sm:text-base sm:leading-8"
            >
              I&apos;m Ramil — a web developer who brings together thoughtful
              design, modern technology, and practical solutions to build
              meaningful digital experiences.
            </p>

            <div
              data-hero-actions
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="#work"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#F15A36] px-6 py-3 text-sm font-semibold text-[#121516] transition-colors duration-300 hover:bg-[#F5F0E7]"
              >
                Explore my work
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#story"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-[#F5F0E7] transition-colors duration-300 hover:border-[#F15A36]/60 hover:text-[#F15A36]"
              >
                Get to know me
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div
            data-hero-portrait
            className="pointer-events-none relative z-10 mx-auto w-full max-w-[350px] shrink-0 md:absolute md:inset-0 md:mx-auto md:flex md:max-w-none md:items-end md:justify-center"
          >
            <div className="relative mx-auto aspect-[4/5] w-[82%] max-w-[490px] md:h-[min(78vh,760px)] md:w-[39%] md:max-w-[490px] md:aspect-auto">
              <div className="absolute bottom-[8%] left-1/2 h-[55%] w-[90%] -translate-x-1/2 rounded-full bg-[#F15A36]/20 blur-[80px]" />

              <Image
                src="/images/profile.png"
                alt="Ramil Aoanan, web developer"
                fill
                priority
                sizes="(max-width: 767px) 80vw, 40vw"
                className="object-contain object-bottom"
              />

              <div className="absolute bottom-[8%] left-1/2 h-px w-[120%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F15A36]/50 to-transparent" />
            </div>
          </div>

          {/* Right visuals */}
          <div className="relative z-0 flex w-full flex-col items-center gap-6 md:ml-auto md:w-[31%] md:shrink-0 md:items-end">
            <div
              data-hero-code
              className="w-full max-w-[360px] overflow-hidden rounded-xl border border-white/[0.10] bg-[#191C1D]/90 shadow-[0_24px_90px_rgba(0,0,0,0.24)] backdrop-blur-md"
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
              className="w-full max-w-[360px] rounded-xl border border-white/[0.10] bg-[#191C1D]/90 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.18)] backdrop-blur-md"
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
