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

      const independentLabel = select(
        "[data-hero-independent]",
      ) as HTMLElement[];

      const dropThread = hero.querySelector<SVGSVGElement>(
        "[data-hero-drop-thread]",
      );

      const dropLine = hero.querySelector<SVGLineElement>(
        "[data-hero-drop-line]",
      );

      const dropEnd = hero.querySelector<SVGCircleElement>(
        "[data-hero-drop-end]",
      );

      const spiderWeb = hero.querySelector<SVGSVGElement>(
        "[data-hero-spiderweb]",
      );

      const portrait = select("[data-hero-portrait-visual]")[0] as
        | HTMLElement
        | undefined;

      const portraitParallax = select("[data-hero-portrait-parallax]")[0] as
        | HTMLElement
        | undefined;

      const frame = select("[data-hero-frame]")[0] as HTMLElement | undefined;

      const leftHeadline = [
        ...select("[data-hero-ramil]"),
        ...select("[data-hero-aoanan]"),
        ...select("[data-hero-better]"),
        ...select("[data-hero-web]"),
      ] as HTMLElement[];

      const leftIntro = select("[data-hero-intro]") as HTMLElement[];

      const toolkit = select("[data-hero-toolkit]") as HTMLElement[];

      const status = select("[data-hero-status]") as HTMLElement[];

      const codeElements = select("[data-hero-code]") as HTMLElement[];

      if (
        !portrait ||
        !portraitParallax ||
        !frame ||
        !spiderWeb ||
        !dropThread ||
        !dropLine ||
        !dropEnd
      ) {
        return;
      }

      // --------------------------------------------------
      // INITIAL STATES
      // --------------------------------------------------

      gsap.set(dropThread, {
        autoAlpha: 1,
      });

      gsap.set(dropLine, {
        attr: {
          y1: -100,
          y2: -100,
        },
      });

      gsap.set(dropEnd, {
        autoAlpha: 0,
        attr: {
          cy: -100,
        },
      });

      gsap.set(independentLabel, {
        autoAlpha: 0,
        x: -35,
        y: 8,
        force3D: true,
      });

      gsap.set(frame, {
        scale: 1,
        transformOrigin: "50% 50%",
        force3D: true,
      });

      gsap.set(portrait, {
        yPercent: -120,
        scale: 1,
      });

      gsap.set(portraitParallax, {
        y: 0,
        force3D: true,
      });

      gsap.set(leftHeadline, {
        autoAlpha: 0,
        x: -55,
        y: 12,
        force3D: true,
      });

      gsap.set(leftIntro, {
        autoAlpha: 0,
        x: -30,
        y: 12,
        force3D: true,
      });

      gsap.set([...toolkit, ...status, ...codeElements], {
        autoAlpha: 0,
        y: 24,
        force3D: true,
      });

      gsap.set(spiderWeb, {
        autoAlpha: 0,
        scale: 0.15,
        transformOrigin: "50% 50%",
        force3D: true,
      });

      // --------------------------------------------------
      // PINNED HERO TIMELINE
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

      // 1. Drop the web thread from the top.
      tl.to(dropLine, {
        attr: {
          y1: -100,
          y2: 50,
        },
        duration: 0.8,
        ease: "power2.in",
      });

      // 1. PORTRAIT SLIDES DOWN FIRST.
      tl.to(portrait, {
        yPercent: -20,
        duration: 2.5,
        ease: "none",
      });

      // 3. INDEPENDENT DEVELOPER LABEL.
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
        ">",
      );

      // 4. HEADLINE REVEALS LINE BY LINE.
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
        ">",
      );

      // 5. INTRO PARAGRAPH.
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
        ">",
      );

      // 2. Reveal the thread's endpoint.
      tl.to(
        dropEnd,
        {
          autoAlpha: 1,
          duration: 0.15,
        },
        "<",
      );

      // Spider web expands after the portrait reveal.
      tl.to(spiderWeb, {
        autoAlpha: 0.75,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        force3D: true,
      });

      // --------------------------------------------------
      // POST-PIN PARALLAX
      // --------------------------------------------------

      // Animate the OUTER wrapper so this does not overwrite
      // the inner portrait's entrance transform.
      gsap.fromTo(
        portraitParallax,
        { y: 0 },
        {
          y: 550,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: hero,
            start: "bottom bottom",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        },
      );

      // --------------------------------------------------
      // REFRESH AFTER LAYOUT
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
      <section
        ref={heroRef}
        aria-label="Introduction"
        className="relative mx-auto grid min-h-[100svh] w-full max-w-[1800px] grid-rows-[1fr_auto] overflow-hidden px-8 pt-[var(--navbar-height)] sm:px-12 md:px-16 lg:px-20 xl:px-24"
      >
        {/* Main hero composition */}
        <div className="relative z-50 grid min-h-[calc(100svh-var(--navbar-height))] w-full grid-cols-1 items-center gap-8 pt-8 md:grid-cols-3 md:gap-8 md:pt-0 lg:gap-12 xl:gap-16">
          <div
            data-hero-frame
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 z-0 h-[340px] w-[340px] min-h-[340px] min-w-[340px] max-h-none max-w-none -translate-x-1/2 -translate-y-1/2 sm:h-[400px] sm:w-[400px] sm:min-h-[400px] sm:min-w-[400px]"
          >
            {/* Spider-web trails */}

            {/* Spider-web trails */}

            <svg
              data-hero-spiderweb
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
            >
              <g
                fill="none"
                stroke="#F15A36"
                strokeWidth="0.25"
                strokeLinejoin="round"
              >
                {/* 8 extended radial division lines */}
                {Array.from({ length: 8 }, (_, index) => {
                  const angle = (index * Math.PI) / 4 - Math.PI / 8;
                  const x = Number((50 + Math.cos(angle) * 350).toFixed(4));
                  const y = Number((50 + Math.sin(angle) * 350).toFixed(4));

                  return (
                    <line
                      key={`spoke-${index}`}
                      data-web-thread
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                    />
                  );
                })}

                {/* 8 concentric web rings */}
                {[10, 18, 26, 34, 42, 50, 60, 70].map((radius, ringIndex) => {
                  const points = Array.from({ length: 8 }, (_, index) => {
                    const angle = (index * Math.PI) / 4 - Math.PI / 8;
                    const x = Number(
                      (50 + Math.cos(angle) * radius).toFixed(4),
                    );
                    const y = Number(
                      (50 + Math.sin(angle) * radius).toFixed(4),
                    );

                    return `${x},${y}`;
                  }).join(" ");

                  return (
                    <polygon
                      key={`ring-${ringIndex}`}
                      data-web-ring
                      points={points}
                    />
                  );
                })}
              </g>
            </svg>
          </div>

          {/* Top on mobile: identity and introduction */}

          <div className="relative z-30 order-2 flex w-full flex-col justify-center pb-4 sm:pt-0 md:order-none md:col-start-1 md:row-start-1 md:min-h-[calc(100svh-var(--navbar-height))] md:items-start md:py-8 md:pr-8 md:text-left lg:pr-10">
            <div data-hero-independent className="ml-2">
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

          {/* Portrait and frame */}

          <div
            data-hero-portrait
            className="
    pointer-events-none relative z-50
    order-1 mx-auto flex
    h-[min(78vw,380px)] w-full max-w-[440px]
    shrink-0 items-start justify-center
    md:absolute md:left-[66.6667%] md:top-0
    md:order-none md:h-[100svh] md:w-[664px]
    md:max-w-none md:-translate-x-1/2
  "
          >
            <div
              data-hero-portrait-parallax
              className="absolute inset-x-0 top-0 h-full"
            >
              {/* Portrait */}
              <div
                data-hero-portrait-visual
                className="absolute inset-x-0 top-0 z-10 mx-auto h-full w-full"
              >
                <Image
                  src="/images/profile.png"
                  alt="Ramil Aoanan, web developer"
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, 40vw"
                  className="rotate-180 object-contain object-top"
                />
              </div>

              {/* Falling thread: centered over the portrait */}
              <svg
                data-hero-drop-thread
                aria-hidden="true"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              >
                <line
                  data-hero-drop-line
                  x1="50"
                  y1="-300"
                  x2="50"
                  y2="250"
                  stroke="#F15A36"
                  strokeWidth="0.25"
                />

                <circle
                  data-hero-drop-end
                  cx="50"
                  cy="250"
                  r="0.8"
                  fill="#F15A36"
                />
              </svg>
            </div>
          </div>

          {/* Animated scroll indicator */}
          <div className="pointer-events-none absolute bottom-1/2 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
            <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#A5A19A]/70">
              Scroll to explore
            </span>

            <div className="relative flex h-12 w-7 justify-center overflow-hidden rounded-full border border-white/15 bg-[#191C1D]/80 p-2">
              <span className="h-2 w-1 rounded-full bg-[#F15A36] animate-scroll-wheel" />
            </div>

            <ArrowDown size={13} className="animate-bounce text-[#F15A36]/70" />
          </div>
        </div>
        {/* Developer information panel */}
        <div className="relative z-30 -mx-8 border-t border-white/[0.10] bg-[#191C1D]/95 px-8 py-8 sm:-mx-12 sm:px-12 md:-mx-16 md:px-16 lg:-mx-20 lg:px-20 xl:-mx-24 xl:px-24">
          <div className="mx-auto max-w-[1552px]">
            {/* Key information */}
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

            {/* Technology stack */}
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
