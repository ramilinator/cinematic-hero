"use client";

import Image from "next/image";
import Navbar from "./Navbar";
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

export default function PortfolioHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#121516] text-[#F5F0E7]"
    >
      {/* Cinematic background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Base cinematic gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_68%_42%,#30201c_0%,#1b1918_35%,#121516_72%)]" />
        {/* Subtle orange architectural grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
      linear-gradient(to right, rgba(241,90,54,0.65) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(241,90,54,0.65) 1px, transparent 1px)
    `,
            backgroundSize: "100px 100px",
            backgroundPosition: "center center",
            maskImage:
              "radial-gradient(ellipse at 60% 45%, black 0%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 60% 45%, black 0%, transparent 78%)",
          }}
        />

        {/* Warm light behind the portrait */}
        <div
          aria-hidden="true"
          className="cinematic-drift absolute right-[-15%] top-[8%] h-[500px] w-[500px] rounded-full bg-[#F15A36]/[0.12] blur-[140px] lg:h-[750px] lg:w-[750px]"
        />
        {/* Soft central illumination */}
        <div className="cinematic-drift absolute left-[30%] top-[25%] h-[350px] w-[350px] rounded-full bg-[#F5F0E7]/[0.025] blur-[120px]" />
        {/* Cinematic edge vignette */}
        <div className="cinematic-drift absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(8,10,11,0.58)_100%)]" />
        {/* Subtle bottom fade */}
        <div className="cinematic-drift absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#121516] to-transparent" />
      </div>

      {/* Ambient background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none cinematic-drift absolute right-0 top-1/4 -z-10 h-[550px] w-[550px] rounded-full bg-[#F15A36]/10 blur-[130px]"
      />

      <Navbar />
      {/* Hero */}

      <section className="relative mx-auto pb-12 grid min-h-[calc(100svh-82px)] max-w-[1600px] grid-cols-1 items-center px-8 sm:px-12 lg:grid-cols-12 lg:px-20 xl:px-24">
        {/* Left third: introduction */}
        <div className="relative z-20 flex flex-col items-start pb-10 pt-12 lg:col-span-6 lg:py-20">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[#F15A36]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F15A36] sm:text-xs">
              Web Developer / Philippines
            </p>
          </div>

          <h1 className="max-w-full text-[clamp(3.5rem,9.2vw,8.5rem)] font-black leading-[0.78] tracking-[-0.045em]">
            <span className="block">RAMIL</span>
            <span className="mt-3 block text-[#F15A36]">AOANAN</span>
          </h1>

          <div className="mt-9 max-w-lg">
            <p className="mt-5 max-w-md text-sm leading-7 text-white/60 sm:text-base">
              I&apos;m Ramil — a web developer who brings together thoughtful
              design, modern technology, and practical solutions to create
              digital experiences that work.
            </p>
          </div>

          {/* Calls to action */}
          <div className="mt-12 flex flex-wrap items-center gap-4">
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
            </Link>
          </div>
        </div>

        {/* Right third: portrait and visual composition */}
        <div className="relative min-h-[440px] overflow-hidden sm:min-h-[580px] lg:absolute lg:inset-y-0 lg:right-0 lg:w-[65%]">
          {/* Portrait image */}
          <div className="absolute inset-x-0 bottom-0 top-0 z-10 flex items-end justify-center">
            <Image
              src="/images/profile.png"
              alt="Illustrated portrait of Ramil Aoanan, web developer"
              width={850}
              height={1050}
              priority
              sizes="(max-width: 1023px) 90vw, 50vw"
              className="relative h-full max-h-[790px] w-full object-contain object-bottom drop-shadow-[0_20px_70px_rgba(0,0,0,0.45)]"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-[8%] left-1/2 z-0 h-[65%] w-[65%] -translate-x-1/2 rounded-full bg-[#F15A36]/[0.08] blur-[100px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
