"use client";

import Image from "next/image";
import Link from "next/link";
import "./Hero.css";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Layers3,
  Menu,
  Sparkles,
} from "lucide-react";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "WordPress",
  "Strapi",
];

export default function PortfolioHeroDark() {
  return (
    <main
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#121516] text-[#F5F0E7]"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Ambient orange glow */}
        <div className="absolute left-1/2 top-[35%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F15A36]/10 blur-[120px] sm:h-[650px] sm:w-[650px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,240,231,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,231,0.15) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />

        {/* Edge vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#121516_100%)]" />
      </div>

      {/* NAVBAR */}
      <header className="relative z-40 mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14 lg:py-7">
        <Link
          href="#home"
          className="group flex items-center gap-3"
          aria-label="Ramil Aoanan home"
        >
          <span className="flex h-11 w-11 items-center justify-center border border-[#F15A36]/60 bg-[#F15A36] text-sm font-black tracking-tighter text-[#121516] transition-transform duration-300 group-hover:rotate-[-6deg]">
            RA.
          </span>

          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-[0.12em]">
              RAMIL AOANAN
            </span>
            <span className="mt-1 block text-[9px] tracking-[0.22em] text-[#F5F0E7]/50">
              INDEPENDENT WEB DEVELOPER
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#about"
            className="text-xs text-[#F5F0E7]/60 transition-colors hover:text-[#F15A36]"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-xs text-[#F5F0E7]/60 transition-colors hover:text-[#F15A36]"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-xs text-[#F5F0E7]/60 transition-colors hover:text-[#F15A36]"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="#contact"
          className="hidden items-center gap-2 border border-[#F5F0E7]/20 px-4 py-3 text-xs font-semibold transition-all duration-300 hover:border-[#F15A36] hover:bg-[#F15A36] hover:text-[#121516] sm:flex"
        >
          LET&apos;S TALK
          <ArrowUpRight size={14} />
        </Link>

        <Link
          href="#contact"
          aria-label="Contact"
          className="flex h-10 w-10 items-center justify-center border border-[#F5F0E7]/20 sm:hidden"
        >
          <Menu size={18} />
        </Link>
      </header>

      {/* HERO */}
      <section className="ss-hero relative mx-auto flex min-h-[calc(100svh-100px)] w-full max-w-[1600px] flex-col px-5 pb-20 pt-10 sm:px-8 sm:pb-24 lg:min-h-[calc(100svh-100px)] lg:px-14 lg:py-12">
        <div className="flex flex-col justify-between md:flex-row">
          {/* LEFT CONTENT */}
          <div className="relative z-20 flex flex-col items-start">
            <div className="max-w-[520px]">
              <p className="mb-4 text-[10px] font-bold tracking-[0.22em] text-[#F15A36] sm:text-xs">
                WEB DEVELOPER · PHILIPPINES
              </p>

              <h1 className="max-w-[500px] text-5xl font-black leading-[0.92] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[clamp(3.5rem,5.5vw,6rem)]">
                Building for
                <span className="mt-1 block text-[#F15A36]">
                  the better web.
                </span>
              </h1>

              <p className="mt-5 max-w-[390px] text-sm leading-7 text-[#F5F0E7]/65 sm:text-base">
                I&apos;m Ramil — I bring thoughtful design, modern technology,
                and practical solutions together to create meaningful digital
                experiences.
              </p>

              {/* ACTIONS */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="#projects"
                  className="group inline-flex min-h-12 items-center gap-3 bg-[#F15A36] px-5 py-3 text-xs font-bold text-[#121516] transition-all duration-300 hover:bg-[#F5F0E7]"
                >
                  EXPLORE MY WORK
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="#about"
                  className="inline-flex min-h-12 items-center gap-2 border border-[#F5F0E7]/20 px-5 py-3 text-xs font-semibold transition-colors hover:border-[#F15A36] hover:text-[#F15A36]"
                >
                  ABOUT ME
                </Link>
              </div>
            </div>
          </div>

          <div className="pointer-events-none relative mt-6 md:absolute md:inset-x-0 md:bottom-0 md:top-auto md:mt-0">
            {/* Large name behind portrait */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[38%] z-0 -translate-y-1/2 select-none text-center lg:top-[43%]"
            >
              <span className="block whitespace-nowrap text-[17vw] font-black leading-[0.78] tracking-[-0.09em] text-[#F5F0E7]/[0.07] sm:text-[15vw] lg:text-[13vw]">
                RAMIL
              </span>
              <span className="mt-3 block whitespace-nowrap text-[15vw] font-black leading-[0.85] tracking-[-0.085em] text-[#F15A36]/20 sm:text-[13vw] lg:text-[11.5vw]">
                AOANAN
              </span>
            </div>

            {/* Portrait in front of the name */}
            <div className="relative z-10 flex items-end justify-center">
              <Image
                src="/images/profile.png"
                alt="Ramil Aoanan, web developer"
                width={850}
                height={1050}
                priority
                sizes="(max-width: 639px) 90vw, (max-width: 1023px) 70vw, 48vw"
                className="h-[38svh] min-h-[240px] max-h-[400px] w-auto max-w-[76%] object-contain object-bottom sm:h-[54svh] sm:max-h-[560px] sm:max-w-[64%] lg:h-[72svh] lg:max-h-[680px] lg:max-w-[46%]"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className=" flex flex-col items-center justify-end md:relative md:bottom-auto md:mt-0 md:items-end">
            {/* FLOATING TECHNOLOGIES */}
            <div className="w-full sm:max-w-[380px] border border-[#F5F0E7]/10 bg-[#121516]/85 p-4 shadow-2xl shadow-black/20 backdrop-blur-md sm:mt-8 sm:p-5 lg:mt-0">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Code2 size={16} className="text-[#F15A36]" />
                  <p className="text-[10px] font-bold tracking-[0.15em] text-[#F5F0E7]/70">
                    MY TOOLKIT
                  </p>
                </div>
                <Sparkles size={14} className="text-[#F15A36]/70" />
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-[#F5F0E7]/10 bg-[#F5F0E7]/[0.04] px-3 py-2 text-[10px] font-medium text-[#F5F0E7]/75 transition-colors duration-200 hover:border-[#F15A36]/60 hover:text-[#F15A36] sm:text-xs"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM METADATA */}
          <div className="relative z-30 mt-10 flex items-end justify-between pt-5 md:absolute md:bottom-6 md:left-14 md:right-14 md:mt-0">
            <div>
              <p className="text-[9px] tracking-[0.2em] text-[#F5F0E7]/40">
                CURRENT STATUS
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#F15A36] shadow-[0_0_12px_rgba(241,90,54,0.7)]" />
                <span className="text-[10px] font-semibold tracking-wide text-[#F5F0E7]/75 sm:text-xs">
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
            </div>

            <Link
              href="#projects"
              className="group flex items-center gap-2 text-[10px] tracking-[0.15em] text-[#F5F0E7]/45 transition-colors hover:text-[#F15A36]"
            >
              SCROLL TO EXPLORE
              <ArrowDown
                size={14}
                className="transition-transform group-hover:translate-y-1"
              />
            </Link>

            <Link
              href="https://github.com/ramilinator"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit GitHub profile"
              className="hidden p-3 sm:mt-8 h-10 w-10 items-center justify-center border border-[#F5F0E7]/10 text-[#F5F0E7]/60 transition-colors hover:border-[#F15A36] hover:text-[#F15A36] sm:flex"
            >
              <Code2 size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
