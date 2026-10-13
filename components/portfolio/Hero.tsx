"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Globe2,
} from "lucide-react";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Strapi",
  "WordPress",
];

export default function PortfolioHero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) return;

      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.1,
      });

      intro
        .from("[data-navbar]", {
          y: -12,
          opacity: 0,
          duration: 0.65,
        })
        .from(
          "[data-eyebrow]",
          {
            y: 14,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3",
        )
        .from(
          "[data-heading]",
          {
            y: 35,
            opacity: 0,
            duration: 0.9,
            clearProps: "transform",
          },
          "-=0.25",
        )
        .from(
          "[data-portrait]",
          {
            y: 35,
            opacity: 0,
            scale: 0.97,
            duration: 1,
            clearProps: "transform",
          },
          "-=0.45",
        )
        .from(
          "[data-content]",
          {
            y: 18,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
          },
          "-=0.5",
        )
        .from(
          "[data-tech]",
          {
            y: 8,
            opacity: 0,
            duration: 0.4,
            stagger: 0.06,
          },
          "-=0.25",
        );

      gsap.to("[data-orbit-glow]", {
        scale: 1.08,
        opacity: 0.65,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={heroRef}
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-white text-[#242321]"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,#fff8f4_0%,#ffffff_55%,#fafafa_100%)]" />

        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(36,35,33,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(36,35,33,0.035) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 75%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 75%, transparent)",
          }}
        />

        <div
          data-orbit-glow
          className="absolute left-1/2 top-[25%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#F15A36]/10 blur-[100px] sm:h-[460px] sm:w-[460px]"
        />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* CENTERED HERO */}
      <section className="relative mx-auto flex min-h-[calc(100svh-82px)] w-full max-w-[1440px] flex-col items-center px-5 pb-10 pt-12 text-center sm:px-10 sm:pt-16 lg:px-16 lg:pt-12">
        {/* EYEBROW */}
        <div
          data-eyebrow
          className="relative z-10 flex items-center justify-center gap-3"
        >
          <span className="h-px w-7 bg-[#F15A36]" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F15A36] sm:text-xs">
            Independent Web Developer
          </p>

          <span className="h-px w-7 bg-[#F15A36]" />
        </div>

        {/* NAME */}
        <div data-heading className="relative z-10 mt-6 w-full">
          <h1 className="text-[clamp(3.25rem,10vw,8.5rem)] font-black leading-[0.88] tracking-[-0.085em]">
            <span className="block text-[#242321]">RAMIL</span>

            <span className="mt-1 block text-[#F15A36]">
              AOANAN<span className="text-[#242321]">.</span>
            </span>
          </h1>

          <div className="mt-5 flex items-center justify-center gap-2.5">
            <Code2 size={16} className="text-[#F15A36]" />
          </div>
        </div>

        {/* PORTRAIT */}
        <div
          data-portrait
          className="relative z-0 mt-2 flex h-[290px] w-full max-w-[480px] items-end justify-center sm:mt-0 sm:h-[370px] md:h-[420px] lg:h-[390px]"
        >
          {/* Portrait halo */}
          <div
            aria-hidden="true"
            className="absolute bottom-[5%] left-1/2 h-[78%] w-[75%] -translate-x-1/2 rounded-full border border-[#F15A36]/10 bg-gradient-to-b from-[#F15A36]/[0.035] to-transparent"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-[7%] left-1/2 h-[55%] w-[72%] -translate-x-1/2 rounded-full bg-[#F15A36]/10 blur-[65px]"
          />

          {/* Minimal corner accents */}
          <span
            aria-hidden="true"
            className="absolute left-[9%] top-[22%] h-5 w-5 border-l border-t border-[#F15A36]/50"
          />

          <span
            aria-hidden="true"
            className="absolute right-[9%] top-[34%] h-5 w-5 border-r border-t border-[#F15A36]/50"
          />

          <Image
            src="/images/profile.png"
            alt="Illustrated portrait of Ramil Aoanan, web developer"
            width={850}
            height={1050}
            priority
            sizes="(max-width: 640px) 90vw, 480px"
            className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-[0_16px_28px_rgba(36,35,33,0.10)]"
          />

          {/* Floating identity marker */}
          <div className="absolute bottom-[9%] right-[2%] z-20 hidden items-center gap-2 border border-[#242321]/10 bg-white/90 px-3 py-2 shadow-sm backdrop-blur-sm sm:flex">
            <span className="h-2 w-2 rounded-full bg-[#48A36A]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#55514D]">
              Building for the web
            </span>
          </div>
        </div>

        {/* INTRODUCTION AND ACTIONS */}
        <div className="relative z-10 -mt-1 flex w-full max-w-2xl flex-col items-center">
          <p
            data-content
            className="max-w-xl text-sm leading-7 text-[#696560] sm:text-base sm:leading-8"
          >
            I&apos;m Ramil — a web developer who combines thoughtful design,
            modern technology, and practical solutions to build responsive,
            user-friendly digital experiences.
          </p>

          <div
            data-content
            className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
          >
            <Link
              href="#projects"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-4 bg-[#F15A36] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D94727] hover:shadow-[0_10px_25px_rgba(241,90,54,0.2)] sm:w-auto"
            >
              Explore My Work
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#about"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-3 border border-[#242321]/15 bg-white/80 px-6 py-3 text-sm font-semibold text-[#242321] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F15A36] hover:text-[#F15A36] sm:w-auto"
            >
              Get to Know Me
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* TECHNOLOGY STACK */}
        <div
          data-content
          className="mt-9 w-full max-w-2xl border-t border-[#242321]/10 pt-5 sm:mt-10"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <Globe2 size={12} className="text-[#F15A36]" />

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8A847E] sm:text-[10px]">
              Technologies I Work With
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {technologies.map((technology) => (
              <span
                data-tech
                key={technology}
                className="border border-[#242321]/10 bg-white/80 px-3 py-2 text-[10px] font-medium text-[#55514D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F15A36]/50 hover:bg-[#F15A36]/5 hover:text-[#F15A36] sm:px-3.5 sm:text-[11px]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <Link
          data-content
          href="#projects"
          aria-label="Scroll to projects"
          className="mt-8 inline-flex items-center gap-2 pb-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#96908A] transition-colors hover:text-[#F15A36]"
        >
          Discover my work
          <ArrowDown size={13} className="animate-bounce" />
        </Link>
      </section>
    </main>
  );
}
