"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  GitBranch,
  Layers3,
  Mail,
  MousePointer2,
  Sparkles,
  Terminal,
} from "lucide-react";

import "./StoryScene.css";

const C = {
  bg: "#121516",
  panel: "#191c1d",
  panelLight: "#202323",
  cream: "#F5F0E7",
  orange: "#F15A36",
  muted: "#a5a19a",
};

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "WordPress",
  "Strapi",
  "Git",
];

const projects = [
  {
    number: "01",
    type: "FULL-STACK BLOG",
    title: "Modern Blog",
    description:
      "A content-driven blog experience built with a modern frontend and headless CMS.",
    stack: ["Next.js", "Strapi", "Tailwind CSS"],
    href: "https://ramilaoanan.wordpress.com/",
    icon: Layers3,
  },
  {
    number: "02",
    type: "API-POWERED APP",
    title: "Movie Discovery",
    description:
      "An interactive movie discovery experience that brings film information into one place.",
    stack: ["React", "JavaScript", "REST API"],
    href: "https://github.com/ramilinator",
    icon: MousePointer2,
  },
  {
    number: "03",
    type: "INTERACTIVE EXPERIENCE",
    title: "Digital Experience",
    description:
      "A responsive interface with thoughtful motion, visual storytelling, and polished details.",
    stack: ["React", "GSAP", "CSS"],
    href: "https://ramilaoanan.onrender.com",
    icon: Code2,
  },
];

const scenes = [
  {
    number: "01",
    label: "THE CURIOSITY",
    title: "It starts with a question.",
    description:
      "How does a website work? How can an interface make a task easier? That curiosity makes development rewarding: there is always something new to understand and improve.",
    visual: "idea",
    color: "orange",
  },
  {
    number: "02",
    label: "THE CRAFT",
    title: "Learn the fundamentals. Build with purpose.",
    description:
      "I work with HTML, CSS, JavaScript, and React to build accessible, responsive interfaces. Good code is not only about making something work; it is also about making it understandable and maintainable.",
    visual: "code",
    color: "cream",
  },
  {
    number: "03",
    label: "THE STRUCTURE",
    title: "Build systems, not just screens.",
    description:
      "Component-based architecture and reusable patterns help keep projects organized as they grow. I enjoy connecting the visual layer with the underlying structure that powers it.",
    visual: "layers",
    color: "orange",
  },
  {
    number: "04",
    label: "THE DETAILS",
    title: "Every interaction has a purpose.",
    description:
      "From hover states to scroll-driven transitions, motion should guide attention rather than distract from content. I use animation to give interfaces character and clarity.",
    visual: "cursor",
    color: "cream",
  },
  {
    number: "05",
    label: "THE BIGGER PICTURE",
    title: "Connect content with experience.",
    description:
      "Headless CMS platforms such as Strapi separate content management from presentation, creating flexible publishing workflows and custom frontend experiences.",
    visual: "layers",
    color: "orange",
  },
];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 sm:text-xs">
      <span className="grid size-9 shrink-0 place-items-center border border-[#F15A36]/50 text-[#F15A36]">
        {number}
      </span>
      <span className="shrink-0">{children}</span>
      <span className="h-px flex-1 bg-white/10" />
    </div>
  );
}

function SceneVisual({ type }: { type: string }) {
  if (type === "code") {
    return (
      <div className="relative mx-auto w-full max-w-md rotate-[-2deg] border border-white/10 bg-[#121516] p-5 shadow-[10px_10px_0_rgba(241,90,54,0.16)] sm:p-7">
        <div className="mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
          <span className="size-2.5 rounded-full bg-[#F15A36]" />
          <span className="size-2.5 rounded-full bg-[#F5F0E7]/40" />
          <span className="size-2.5 rounded-full bg-[#F15A36]/40" />
          <span className="ml-auto font-mono text-[10px] text-white/40">
            developer.tsx
          </span>
        </div>

        <div className="space-y-3 font-mono text-[11px] leading-relaxed sm:text-sm">
          <p className="text-[#F5F0E7]">
            <span className="text-[#F15A36]">const</span> developer = {"{"}
          </p>
          <p className="pl-5 text-white/65">
            name: <span className="text-[#F15A36]">"Ramil Aoanan"</span>,
          </p>
          <p className="pl-5 text-white/65">
            focus: <span className="text-[#F15A36]">"Web development"</span>,
          </p>
          <p className="pl-5 text-white/65">
            mindset: <span className="text-[#F15A36]">"Keep building"</span>,
          </p>
          <p className="text-[#F5F0E7]">{"};"}</p>
          <p className="border-t border-white/10 pt-4 text-white/35">
            // Turning ideas into interfaces.
          </p>
        </div>
      </div>
    );
  }

  if (type === "layers") {
    return (
      <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
        <div className="absolute size-[78%] rotate-[-12deg] border border-[#F15A36]/50 bg-[#F15A36]/[0.06]" />
        <div className="absolute size-[65%] rotate-[8deg] border border-white/20 bg-white/[0.025]" />
        <div className="relative grid size-[52%] rotate-[-4deg] place-items-center border border-[#F15A36] bg-[#191c1d] shadow-[8px_8px_0_rgba(241,90,54,0.18)]">
          <Layers3 size={64} strokeWidth={1.2} className="text-[#F15A36]" />
        </div>

        <span className="absolute right-0 top-[12%] border border-white/15 bg-[#191c1d] px-3 py-2 font-mono text-[9px] tracking-wider text-[#F5F0E7] sm:text-[10px]">
          STRUCTURE
        </span>
        <span className="absolute bottom-[12%] left-0 border border-white/15 bg-[#191c1d] px-3 py-2 font-mono text-[9px] tracking-wider text-[#F5F0E7] sm:text-[10px]">
          COMPONENTS
        </span>
      </div>
    );
  }

  if (type === "cursor") {
    return (
      <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
        <div className="absolute size-[85%] rounded-full border border-dashed border-[#F15A36]/35" />
        <div className="absolute size-[65%] rounded-full border border-white/15" />
        <div className="absolute size-[42%] rounded-full bg-[#F15A36]/10" />

        <MousePointer2
          className="relative z-10 -rotate-12 text-[#F15A36] drop-shadow-[4px_4px_0_rgba(245,240,231,0.1)]"
          size={90}
          strokeWidth={1.3}
        />

        <span className="absolute left-0 top-[20%] border border-[#F15A36]/40 bg-[#121516] px-3 py-2 font-mono text-[9px] tracking-wider text-[#F5F0E7] sm:text-[10px]">
          INTERACTION
        </span>
        <span className="absolute bottom-[12%] right-0 border border-white/15 bg-[#191c1d] px-3 py-2 font-mono text-[9px] tracking-wider text-[#F5F0E7] sm:text-[10px]">
          EXPERIENCE
        </span>
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
      <div className="absolute size-[75%] rotate-12 border border-white/20 bg-white/[0.025]" />
      <div className="absolute size-[60%] -rotate-6 border border-[#F15A36]/60 bg-[#F15A36]/[0.08]" />
      <div className="relative grid size-[42%] place-items-center border border-[#F15A36] bg-[#191c1d] shadow-[8px_8px_0_rgba(241,90,54,0.18)]">
        <Code2 size={60} strokeWidth={1.3} className="text-[#F15A36]" />
      </div>

      <Sparkles
        className="absolute right-[10%] top-[10%] text-[#F15A36]"
        size={30}
      />
      <span className="absolute bottom-[10%] left-[2%] font-mono text-[9px] tracking-[0.18em] text-white/55 sm:text-[10px]">
        IDEAS → INTERFACES
      </span>
    </div>
  );
}

function PaperRocket() {
  return (
    <svg
      className="ss-rocket-art h-auto w-full max-w-[270px]"
      viewBox="0 0 280 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Illustration of a rocket"
      role="img"
    >
      <g className="ss-rocket-body">
        <path
          d="M140 22C140 22 80 91 86 190L140 245L194 190C200 91 140 22 140 22Z"
          fill="#F5F0E7"
          stroke="#F15A36"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M86 170L48 212L82 216L106 199"
          fill="#F15A36"
          stroke="#121516"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M194 170L232 212L198 216L174 199"
          fill="#F15A36"
          stroke="#121516"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <circle
          cx="140"
          cy="123"
          r="21"
          fill="#121516"
          stroke="#F15A36"
          strokeWidth="4"
        />
        <circle cx="140" cy="123" r="9" fill="#F15A36" />
        <path
          d="M119 226L140 263L161 226"
          fill="#F15A36"
          stroke="#121516"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M125 270L140 318L155 270"
          fill="#F15A36"
          stroke="#121516"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M110 66L88 109M171 77L188 110"
        stroke="#121516"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function StoryScenes() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(
          [
            ".ss-hero-kicker",
            ".ss-hero-name-line",
            ".ss-hero-art",
            ".ss-hero-rocket",
            ".ss-reveal",
            ".ss-scene-visual",
            ".ss-scene-content",
            ".ss-project-card",
            ".ss-contact-panel",
          ],
          { clearProps: "all" },
        );
        return;
      }

      gsap.from(".ss-hero-kicker", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".ss-hero-name-line", {
        yPercent: 110,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
        delay: 0.1,
      });

      gsap.from(".ss-hero-art", {
        scale: 0.92,
        y: 35,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".ss-hero-rocket", {
        x: -55,
        y: 45,
        rotation: -18,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.35,
      });

      gsap.to(".ss-hero-rocket", {
        y: -24,
        rotation: 5,
        ease: "none",
        scrollTrigger: {
          trigger: ".ss-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>(".ss-reveal").forEach((element) => {
        gsap.from(element, {
          y: 35,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".ss-scene").forEach((scene) => {
        const visual = scene.querySelector(".ss-scene-visual");
        const content = scene.querySelector(".ss-scene-content");

        if (visual) {
          gsap.from(visual, {
            y: 30,
            rotate: -2,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: scene,
              start: "top 78%",
              once: true,
            },
          });
        }

        if (content) {
          gsap.from(content, {
            y: 25,
            opacity: 0,
            duration: 0.8,
            delay: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: scene,
              start: "top 78%",
              once: true,
            },
          });
        }
      });

      gsap.from(".ss-project-card", {
        y: 35,
        opacity: 0,
        stagger: 0.13,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ss-projects-grid",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".ss-contact-panel", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ss-contact-panel",
          start: "top 85%",
          once: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={rootRef}
      className="ss-page relative isolate overflow-hidden bg-[#121516] text-[#F5F0E7] selection:bg-[#F15A36] selection:text-[#121516]"
    >
      {/* GLOBAL ATMOSPHERE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_10%,#2b1b17_0%,#121516_48%,#0e1112_100%)]" />
        <div className="ss-global-glow absolute right-[-15%] top-[3%] h-[600px] w-[600px] rounded-full bg-[#F15A36]/[0.07] blur-[150px] lg:h-[900px] lg:w-[900px]" />
        <div
          className="ss-grid absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(241,90,54,0.55) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,90,54,0.55) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
            maskImage:
              "radial-gradient(ellipse at 60% 12%, black 0%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 60% 12%, black 0%, transparent 70%)",
          }}
        />
      </div>

      {/* HERO */}
      <section
        id="home"
        className="ss-hero relative isolate flex min-h-[92svh] flex-col overflow-hidden border-b border-white/[0.08] px-5 pb-10 pt-6 sm:px-8 lg:min-h-screen lg:px-14"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_20%,rgba(8,10,11,0.55)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#121516] to-transparent" />
        </div>

        <header className="ss-header relative z-30 mx-auto flex min-h-[58px] w-full max-w-[1600px] items-center justify-between gap-4">
          <Link
            href="#home"
            aria-label="Ramil Aoanan home"
            className="group flex items-center gap-3"
          >
            <span className="text-4xl font-black italic tracking-[-0.12em] text-[#F15A36] transition-transform group-hover:scale-105">
              RA
            </span>
            <span className="border-l border-white/15 pl-3">
              <span className="block text-xs font-bold tracking-[0.15em] sm:text-sm">
                RAMIL AOANAN
              </span>
              <span className="mt-1 block text-[9px] tracking-[0.28em] text-white/40">
                WEB DEVELOPER
              </span>
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-widest text-white/65 sm:gap-7 sm:text-[10px]"
          >
            <Link
              href="#story"
              className="transition-colors hover:text-[#F15A36]"
            >
              Story
            </Link>
            <Link
              href="#skills"
              className="transition-colors hover:text-[#F15A36]"
            >
              Skills
            </Link>
            <Link
              href="#work"
              className="transition-colors hover:text-[#F15A36]"
            >
              Work
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-[#F15A36]"
            >
              Contact
            </Link>
          </nav>
        </header>

        <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center pt-12 sm:pt-14">
          <div className="ss-hero-kicker relative z-20 mb-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/60 sm:text-xs">
            <span className="size-2 rounded-full bg-[#F15A36] shadow-[0_0_15px_rgba(241,90,54,0.65)]" />
            <span className="text-[#F15A36]">Independent web developer</span>
            <span className="hidden text-white/30 sm:inline">
              / Philippines
            </span>
          </div>

          <div className="relative">
            {/* Oversized outlined name */}
            <div
              aria-hidden="true"
              className="ss-hero-outline-name pointer-events-none absolute left-1/2 top-[43%] z-0 w-full -translate-x-1/2 -translate-y-1/2 select-none text-center text-[17vw] font-black uppercase leading-[0.76] tracking-[-0.09em] text-transparent opacity-70 [-webkit-text-stroke:1px_rgba(245,240,231,0.17)] sm:text-[16vw] lg:text-[14vw]"
            >
              <span className="ss-hero-name-line block">RAMIL</span>
              <span className="ss-hero-name-line block">AOANAN</span>
            </div>

            {/* Portrait stage */}
            <div className="ss-hero-art relative z-10 mx-auto flex min-h-[350px] w-full max-w-[650px] items-center justify-center sm:min-h-[470px] lg:min-h-[550px]">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F15A36]/[0.07] blur-[75px] sm:blur-[100px]" />
              <div className="absolute left-1/2 top-1/2 aspect-square w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F15A36]/20" />
              <div className="absolute left-1/2 top-1/2 aspect-square w-[59%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15" />

              <div className="absolute bottom-[12%] left-0 z-20 rotate-[-5deg] border border-[#F15A36]/60 bg-[#191c1d]/95 px-3 py-2 font-mono text-[9px] uppercase tracking-widest backdrop-blur-md sm:left-[3%] sm:px-4 sm:text-[10px]">
                <span className="block text-white/40">Current focus</span>
                <span className="mt-1 block font-bold text-[#F15A36]">
                  Web development
                </span>
              </div>

              <div className="absolute right-0 top-[10%] z-20 rotate-[4deg] border border-white/15 bg-[#191c1d]/95 px-3 py-2 font-mono text-[9px] uppercase tracking-widest backdrop-blur-md sm:right-[3%] sm:px-4 sm:text-[10px]">
                <span className="block text-white/40">Core stack</span>
                <span className="mt-1 block font-bold text-[#F5F0E7]">
                  React + Next.js
                </span>
              </div>

              <div className="ss-hero-portrait relative z-10 h-[315px] w-[240px] overflow-hidden border border-[#F15A36]/60 bg-[#191c1d] shadow-[0_0_0_8px_rgba(241,90,54,0.035),0_25px_80px_rgba(0,0,0,0.5)] sm:h-[420px] sm:w-[320px]">
                <Image
                  src="/images/caricature.png"
                  alt="Caricature portrait of Ramil Aoanan, web developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 240px, 320px"
                  className="object-contain object-bottom"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#121516]/25 to-transparent" />
              </div>

              <div className="ss-hero-rocket absolute -right-1 top-[15%] z-20 w-[88px] sm:right-[2%] sm:top-[8%] sm:w-[145px] lg:right-[6%] lg:w-[170px]">
                <PaperRocket />
              </div>

              <div className="absolute bottom-[5%] right-[2%] z-20 hidden max-w-[190px] border-l border-[#F15A36] pl-3 font-mono text-[10px] leading-relaxed sm:block">
                <span className="block text-white/40">Mission 001</span>
                <span className="mt-1 block font-bold uppercase tracking-widest text-[#F5F0E7]">
                  Ideas into interfaces.
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="max-w-2xl text-3xl font-black leading-[0.95] tracking-[-0.06em] sm:text-4xl lg:text-5xl">
                Building for the{" "}
                <span className="text-[#F15A36]">better web.</span>
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
                I build responsive websites and digital experiences that combine
                thoughtful design with practical, maintainable code.
              </p>
            </div>

            <Link
              href="#story"
              className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-[#F15A36]/60 pb-2 font-mono text-[10px] uppercase tracking-widest text-[#F5F0E7] transition-colors hover:text-[#F15A36] sm:text-xs"
            >
              Explore my story
              <ArrowDownRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </Link>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-10 flex w-full max-w-[1440px] items-center justify-between gap-3 border-t border-white/[0.09] pt-4 font-mono text-[8px] uppercase tracking-[0.15em] text-white/35 sm:text-[10px]">
          <span>Portfolio / 2026</span>
          <span>Design. Develop. Iterate.</span>
          <span className="hidden sm:inline">Scroll to explore ↓</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section
        id="story"
        className="relative px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40"
      >
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="ss-reveal">
            <SectionLabel number="01">A little introduction</SectionLabel>
            <p className="max-w-sm text-sm leading-relaxed text-white/45">
              A developer who enjoys the process as much as the finished product
              — from the first idea to the final detail.
            </p>
          </div>

          <div className="ss-reveal">
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              I turn ideas into{" "}
              <span className="font-serif font-normal italic text-[#F15A36]">
                useful
              </span>{" "}
              digital experiences.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
              My work sits at the intersection of frontend development, content
              management, and interaction design. I care about building
              experiences that look intentional, feel intuitive, and work
              reliably across devices.
            </p>
          </div>
        </div>
      </section>

      {/* STORY SCENES */}
      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-14">
        <div className="mx-auto max-w-[1240px]">
          <SectionLabel number="02">The story so far</SectionLabel>

          <div className="space-y-5 sm:space-y-8">
            {scenes.map((scene, index) => {
              const reverse = index % 2 === 1;

              return (
                <article
                  key={scene.number}
                  className="ss-scene grid items-center gap-8 border-t border-white/[0.09] py-12 md:grid-cols-2 md:gap-14 md:py-20"
                >
                  <div
                    className={`ss-scene-content ${
                      reverse ? "md:order-2" : ""
                    }`}
                  >
                    <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#F15A36] sm:text-xs">
                      Scene {scene.number} / {scene.label}
                    </p>
                    <h3 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
                      {scene.title}
                    </h3>
                    <p className="mt-5 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
                      {scene.description}
                    </p>
                  </div>

                  <div
                    className={`ss-scene-visual relative overflow-hidden border border-white/[0.08] p-7 sm:p-12 ${
                      reverse ? "md:order-1" : ""
                    } ${
                      scene.color === "orange"
                        ? "bg-[radial-gradient(ellipse_at_50%_50%,rgba(241,90,54,0.09),#191c1d_75%)]"
                        : "bg-[radial-gradient(ellipse_at_50%_50%,rgba(245,240,231,0.035),#171a1b_75%)]"
                    }`}
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-[0.12]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(241,90,54,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,90,54,0.5) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                        maskImage:
                          "radial-gradient(ellipse at center, black, transparent 85%)",
                        WebkitMaskImage:
                          "radial-gradient(ellipse at center, black, transparent 85%)",
                      }}
                    />
                    <div className="relative z-10">
                      <SceneVisual type={scene.visual} />
                    </div>
                    <span className="absolute bottom-4 right-4 font-mono text-[9px] tracking-widest text-white/25">
                      SCENE / {scene.number}
                    </span>
                  </div>
                </article>
              );
            })}
            <div className="border-t border-white/[0.09]" />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="relative isolate overflow-hidden border-y border-white/[0.08] bg-[#171a1b] px-5 py-24 sm:px-8 sm:py-32 lg:px-14"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(241,90,54,0.65) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,90,54,0.65) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at 75% 40%, black, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 75% 40%, black, transparent 80%)",
          }}
        />

        <div className="relative mx-auto max-w-[1240px]">
          <SectionLabel number="03">The toolkit</SectionLabel>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="ss-reveal">
              <p className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#F15A36] sm:text-xs">
                <Terminal size={16} />
                Skills & technologies
              </p>
              <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-6xl">
                The right tools for the right problem.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
                I combine foundational web technologies with modern frameworks
                and content tools to build useful, responsive websites.
              </p>
            </div>

            <div className="ss-reveal flex flex-wrap content-start gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.02] px-4 py-3 text-sm text-white/70 transition duration-300 hover:border-[#F15A36]/60 hover:bg-[#F15A36]/[0.08] hover:text-[#F5F0E7]"
                >
                  <Check size={14} className="text-[#F15A36]" />
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-white/[0.09] bg-white/[0.09] sm:grid-cols-3">
            <div className="ss-reveal bg-[#171a1b] p-6 sm:p-8">
              <Braces size={25} className="mb-8 text-[#F15A36]" />
              <h3 className="text-lg font-semibold">Frontend development</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/45">
                Responsive layouts, reusable components, and clean interface
                implementation.
              </p>
            </div>
            <div className="ss-reveal bg-[#171a1b] p-6 sm:p-8">
              <Layers3 size={25} className="mb-8 text-[#F15A36]" />
              <h3 className="text-lg font-semibold">CMS integration</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/45">
                Connecting content models and APIs to flexible frontend
                experiences.
              </p>
            </div>
            <div className="ss-reveal bg-[#171a1b] p-6 sm:p-8">
              <GitBranch size={25} className="mb-8 text-[#F15A36]" />
              <h3 className="text-lg font-semibold">Iteration & delivery</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/45">
                Improving, testing, and refining projects through an iterative
                workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="work"
        className="px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40"
      >
        <div className="mx-auto max-w-[1240px]">
          <SectionLabel number="04">Selected work</SectionLabel>

          <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
            <div className="ss-reveal">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-[#F15A36] sm:text-xs">
                A few things I have been building
              </p>
              <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-6xl">
                From concept to working product.
              </h2>
            </div>
            <p className="ss-reveal max-w-sm text-sm leading-7 text-white/45 sm:text-base">
              Each project is an opportunity to solve a problem, explore an
              idea, and sharpen the craft.
            </p>
          </div>

          <div className="ss-projects-grid grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.number}
                  className="ss-project-card group flex h-full flex-col border border-white/[0.09] bg-[#171a1b] transition duration-300 hover:-translate-y-1 hover:border-[#F15A36]/45"
                >
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-white/[0.09] bg-[radial-gradient(ellipse_at_50%_45%,rgba(241,90,54,0.12),#121516_75%)] p-6">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-[0.13]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(241,90,54,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,90,54,0.5) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                        maskImage:
                          "radial-gradient(ellipse at center, black, transparent 85%)",
                        WebkitMaskImage:
                          "radial-gradient(ellipse at center, black, transparent 85%)",
                      }}
                    />

                    <span className="absolute left-4 top-4 font-mono text-[9px] tracking-widest text-white/45">
                      PROJECT / {project.number}
                    </span>

                    <div className="relative flex size-32 items-center justify-center border border-[#F15A36]/60 bg-[#191c1d] shadow-[8px_8px_0_rgba(241,90,54,0.13)] transition duration-500 group-hover:rotate-3 group-hover:scale-105 sm:size-36">
                      <Icon
                        size={60}
                        strokeWidth={1.3}
                        className="text-[#F15A36]"
                      />
                    </div>

                    <span className="absolute bottom-4 right-4 font-mono text-[9px] tracking-widest text-white/40">
                      {project.type}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#F15A36]">
                      {project.type}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="border border-white/[0.10] px-3 py-1.5 font-mono text-[9px] text-white/60"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex items-center justify-between border-t border-white/[0.10] pt-4 text-sm font-semibold transition-colors hover:text-[#F15A36]"
                    >
                      View project
                      <ArrowUpRight
                        size={18}
                        className="text-[#F15A36] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-14">
        <div className="ss-contact-panel relative isolate mx-auto max-w-[1240px] overflow-hidden border border-[#F15A36]/55 bg-[radial-gradient(ellipse_at_80%_20%,rgba(241,90,54,0.15),transparent_55%),#191c1d] p-7 shadow-[0_25px_90px_rgba(0,0,0,0.25)] sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.11]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(241,90,54,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(241,90,54,0.6) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage:
                "radial-gradient(ellipse at 80% 40%, black, transparent 85%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 80% 40%, black, transparent 85%)",
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#F15A36] sm:text-xs">
                <Mail size={16} />
                Have a project in mind?
              </p>
              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
                Let&apos;s build something{" "}
                <span className="text-[#F15A36]">meaningful.</span>
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                I&apos;m interested in opportunities to create useful digital
                experiences, contribute to a team, and keep growing as a
                developer.
              </p>
            </div>

            <a
              href="mailto:your-email@example.com"
              className="group inline-flex w-fit items-center gap-5 bg-[#F15A36] px-6 py-4 font-mono text-[10px] uppercase tracking-widest text-[#121516] transition-colors hover:bg-[#F5F0E7] sm:text-xs"
            >
              Get in touch
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.09] px-5 py-6 sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 font-mono text-[9px] uppercase tracking-widest text-white/40 sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
          <Link
            href="#home"
            className="font-bold text-[#F5F0E7] transition-colors hover:text-[#F15A36]"
          >
            RAMIL AOANAN © 2026
          </Link>
          <span>Designed with intention. Built with code.</span>
          <Link
            href="#home"
            className="inline-flex items-center gap-2 transition-colors hover:text-[#F15A36]"
          >
            Back to top <ArrowUpRight size={13} />
          </Link>
        </div>
      </footer>
    </main>
  );
}
