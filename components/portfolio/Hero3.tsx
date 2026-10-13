"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Strapi",
  "WordPress",
];

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function PortfolioHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#242321] text-[#F5F0E7]"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #777064 1px, transparent 1px),
            linear-gradient(to bottom, #777064 1px, transparent 1px)
          `,
          backgroundSize: "8.333333% 8.333333%",
          backgroundPosition: "center center",
        }}
      />

      {/* Ambient background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[550px] w-[550px] rounded-full bg-[#F15A36]/10 blur-[130px]"
      />

      {/* Header */}
      <header className="relative z-30 border-b border-white/10">
        <div className="mx-auto flex min-h-[82px] max-w-[1600px] items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-14">
          <Link
            href="#home"
            aria-label="Ramil Aoanan home"
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="text-4xl font-black italic tracking-[-0.12em] text-[#F15A36]">
              RA
            </span>

            <span className="border-l border-white/20 pl-3">
              <span className="block text-sm font-bold tracking-[0.15em]">
                RAMIL AOANAN
              </span>
              <span className="mt-1 block text-[9px] tracking-[0.32em] text-white/50">
                WEB DEVELOPER
              </span>
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 lg:flex"
          >
            {navigation.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-2 text-sm transition-colors hover:text-[#F15A36] ${
                  index === 0 ? "text-[#F15A36]" : "text-white/75"
                }`}
              >
                {item.label}
                {index === 0 && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#F15A36]" />
                )}
              </Link>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 text-xs text-white/70 xl:flex"
          >
            <span className="h-2 w-2 rounded-full bg-[#F15A36]" />
            Available for opportunities
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-white/15 p-3 transition hover:border-[#F15A36] lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="absolute left-0 right-0 top-full z-40 border-b border-white/10 bg-[#242321] px-6 py-5 shadow-2xl lg:hidden"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/10 py-4 text-sm text-white/80 transition hover:text-[#F15A36]"
              >
                {item.label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative mx-auto grid min-h-[calc(100svh-82px)] max-w-[1600px] grid-cols-1 items-center px-6 sm:px-10 lg:grid-cols-12 lg:px-14">
        {/* Left third: introduction */}
        <div className="relative z-20 flex flex-col items-start pb-10 pt-12 lg:col-span-6 lg:py-20">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[#F15A36]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F15A36] sm:text-xs">
              Independent Web Developer / Philippines
            </p>
          </div>

          <h1 className="max-w-full text-[clamp(3.5rem,9.2vw,8.5rem)] font-black leading-[0.78] tracking-[-0.085em]">
            <span className="block">RAMIL</span>
            <span className="mt-3 block text-[#F15A36]">AOANAN</span>
          </h1>

          <div className="mt-9 max-w-lg">
            <p className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
              Building thoughtful, modern, and scalable web experiences.
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/60 sm:text-base">
              I&apos;m Ramil — a web developer who brings together thoughtful
              design, modern technology, and practical solutions to create
              digital experiences that work.
            </p>
          </div>

          {/* Calls to action */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="group inline-flex min-h-12 items-center gap-5 bg-[#F15A36] px-5 py-3 text-sm font-bold text-[#242321] transition hover:bg-[#ff7959]"
            >
              Explore My Work
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#about"
              className="inline-flex min-h-12 items-center gap-3 border border-white/20 px-5 py-3 text-sm font-medium transition hover:border-[#F15A36] hover:text-[#F15A36]"
            >
              Get to Know Me
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* Technology strip */}
          <div className="mt-12 w-full max-w-xl border-t border-white/15 pt-6">
            <p className="mb-4 text-[9px] uppercase tracking-[0.25em] text-white/40">
              Technologies I Work With
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] text-white/70 transition hover:border-[#F15A36]/60 hover:text-white"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right third: portrait and visual composition */}
        <div className="relative min-h-[440px] overflow-hidden sm:min-h-[580px] lg:absolute lg:inset-y-0 lg:right-0 lg:w-[50%]">
          {/* Orange portrait frame */}
          <div
            aria-hidden="true"
            className="absolute left-[14%] top-[10%] h-[64%] w-[68%] border-2 border-[#F15A36]/80 sm:left-[18%] sm:top-[9%] sm:h-[66%] sm:w-[64%]"
          />

          {/* Secondary frame */}
          <div
            aria-hidden="true"
            className="absolute left-[8%] top-[18%] h-[58%] w-[72%] border border-white/15 sm:left-[12%] sm:top-[16%] sm:h-[61%] sm:w-[69%]"
          />

          {/* Orange geometric accent */}
          <div
            aria-hidden="true"
            className="absolute bottom-[12%] right-[8%] h-40 w-40 bg-[#F15A36]/90 sm:bottom-[13%] sm:right-[12%] sm:h-56 sm:w-56"
          />

          {/* Portrait image */}
          <div className="absolute inset-x-0 bottom-0 top-0 z-10 flex items-end justify-center">
            <Image
              src="/images/profile.png"
              alt="Illustrated portrait of Ramil Aoanan, web developer"
              width={850}
              height={1050}
              priority
              sizes="(max-width: 1023px) 90vw, 50vw"
              className="relative h-full max-h-[790px] w-full object-contain object-bottom drop-shadow-2xl"
            />
          </div>

          {/* Portrait label */}
          <div className="absolute bottom-5 left-0 z-20 flex items-center gap-3 sm:bottom-10">
            <span className="grid h-10 w-10 place-items-center border border-[#F15A36]/60 bg-[#242321]/80 text-[#F15A36]">
              <Code2 size={19} />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Design meets development
              </p>
              <p className="mt-1 text-[10px] text-white/45">
                Thoughtful by design. Practical by nature.
              </p>
            </div>
          </div>

          {/* Experience marker */}
          <div className="absolute right-0 top-[47%] z-20 hidden border-l border-[#F15A36] bg-[#242321]/70 py-2 pl-4 pr-2 sm:block">
            <p className="text-3xl font-black tracking-tight">05+</p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/60">
              Years in web development
            </p>
          </div>

          {/* Handwritten-style accent */}
          <p className="absolute right-0 top-[18%] z-20 hidden -rotate-6 text-lg italic text-[#F15A36] xl:block">
            Let&apos;s build
            <br />
            something great.
          </p>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          className="absolute bottom-5 left-6 z-20 hidden items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/50 transition hover:text-[#F15A36] sm:flex lg:bottom-7 lg:left-14"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border border-white/20">
            <ArrowDownRight size={15} />
          </span>
          Scroll to explore
        </a>

        {/* Decorative corner mark */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 hidden h-16 w-16 border-l border-t border-[#F15A36]/50 lg:block"
        />
      </section>
    </main>
  );
}
