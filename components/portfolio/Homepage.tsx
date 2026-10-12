"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Layers3,
  MousePointer2,
  Rocket,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

import "./Homepage.css";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    number: "01",
    eyebrow: "START WITH AN IDEA",
    title: "Every great thing starts with an idea.",
    description:
      "Every meaningful digital experience begins with a question, a problem, or an idea worth bringing to life.",
    tag: "IDEAS INTO EXPERIENCES",
    icon: Sparkles,
    background: "cream",
    visual: "idea",
  },
  {
    number: "02",
    eyebrow: "DESIGN WITH PURPOSE",
    title: "Give the idea a vision.",
    description:
      "A clear direction turns a rough concept into an experience that feels intentional, intuitive, and easy to understand.",
    tag: "PURPOSE BEFORE PIXELS",
    icon: MousePointer2,
    background: "charcoal",
    visual: "vision",
  },
  {
    number: "03",
    eyebrow: "BUILD THE FOUNDATION",
    title: "Then, we build.",
    description:
      "Thoughtful architecture and maintainable code create the foundation for digital products that can grow.",
    tag: "CLEAN CODE / SOLID FOUNDATIONS",
    icon: Code2,
    background: "sand",
    visual: "code",
  },
  {
    number: "04",
    eyebrow: "DESIGN IN MOTION",
    title: "Make every interaction count.",
    description:
      "From subtle transitions to meaningful feedback, every interaction should feel natural and help people move forward.",
    tag: "INTERACTION WITH INTENTION",
    icon: Zap,
    background: "cream",
    visual: "interaction",
  },
  {
    number: "05",
    eyebrow: "THE FINER DETAILS",
    title: "The details make the difference.",
    description:
      "Responsive layouts, accessible controls, thoughtful typography, and consistent spacing turn a good interface into a polished one.",
    tag: "DETAILS MATTER",
    icon: Layers3,
    background: "charcoal",
    visual: "details",
  },
  {
    number: "06",
    eyebrow: "THE RIGHT TECHNOLOGY",
    title: "Technology with a purpose.",
    description:
      "The best tools are the ones that solve real problems. I use modern web technologies to create practical, reliable experiences.",
    tag: "THE RIGHT TOOL FOR THE JOB",
    icon: Terminal,
    background: "sand",
    visual: "technology",
  },
  {
    number: "07",
    eyebrow: "SIMPLIFY THE COMPLEX",
    title: "Turn complexity into clarity.",
    description:
      "Good development is not just about making things work. It is about making them easier to use, understand, and maintain.",
    tag: "LESS FRICTION / MORE CLARITY",
    icon: Braces,
    background: "cream",
    visual: "clarity",
  },
  {
    number: "08",
    eyebrow: "READY FOR WHAT'S NEXT",
    title: "Ready for launch.",
    description:
      "With the details in place, an idea becomes a real experience — ready to reach people, solve problems, and make an impact.",
    tag: "FROM CONCEPT TO LAUNCH",
    icon: Rocket,
    background: "charcoal",
    visual: "launch",
  },
  {
    number: "09",
    eyebrow: "THE NEXT CHAPTER",
    title: "Let's build something meaningful.",
    description:
      "Have a website, product, or idea in mind? Let's turn your next challenge into a thoughtful digital experience.",
    tag: "YOUR IDEA → OUR NEXT PROJECT",
    icon: ArrowUpRight,
    background: "orange",
    visual: "final",
  },
] as const;

type Scene = (typeof scenes)[number];

const buttonStyles = {
  primary:
    "inline-flex items-center justify-center gap-2 border-2 border-[#F15A36] bg-[#F15A36] px-6 py-4 text-sm font-bold text-white transition-colors duration-200 hover:border-[#D94727] hover:bg-[#D94727] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F15A36]",
  secondary:
    "inline-flex items-center justify-center gap-2 border border-[#242321]/15 bg-white px-6 py-4 text-sm font-bold text-[#242321] transition-colors duration-200 hover:bg-[#F5F0E7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F15A36]",
};

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Ramil Aoanan home"
      className={`inline-flex items-center gap-2 text-xl font-black tracking-tight ${
        light ? "text-[#F5F0E7]" : "text-[#242321]"
      }`}
    >
      RA<span className="text-[#F15A36]">.</span>
    </Link>
  );
}

function SectionLabel({
  number,
  children,
  light = false,
}: {
  number: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
        light ? "text-white/85" : "text-[#77736D]"
      }`}
    >
      <span className={`font-bold ${light ? "text-white" : "text-[#F15A36]"}`}>
        {number}
      </span>
      <span className={`h-px w-8 ${light ? "bg-white/70" : "bg-[#F15A36]"}`} />
      <span>{children}</span>
    </div>
  );
}

function PaperRocket() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[370px] items-center justify-center">
      <div className="absolute inset-[10%] rounded-full border border-[#242321]/10" />
      <div className="absolute inset-[20%] rounded-full border border-dashed border-[#242321]/15" />

      <div className="absolute left-[9%] top-[23%] h-2 w-2 rounded-full bg-[#F15A36]" />
      <div className="absolute right-[14%] top-[34%] h-3 w-3 rounded-full bg-[#242321]/20" />
      <div className="absolute bottom-[21%] left-[22%] h-1.5 w-1.5 rounded-full bg-[#F15A36]" />

      <svg
        viewBox="0 0 320 320"
        fill="none"
        role="img"
        aria-label="Illustration of an orange paper rocket"
        className="relative z-10 w-[82%] drop-shadow-xl"
      >
        <g transform="rotate(-38 160 160)">
          <path
            d="M160 43 C127 76 111 124 111 180 L160 222 L209 180 C209 124 193 76 160 43Z"
            fill="#F15A36"
          />
          <path
            d="M160 43 C177 80 184 126 184 180 L160 222 L111 180 C111 124 127 76 160 43Z"
            fill="#FF8A6D"
          />
          <path d="M111 157 L73 196 L111 205Z" fill="#242321" />
          <path d="M209 157 L247 196 L209 205Z" fill="#242321" />
          <circle cx="160" cy="139" r="19" fill="#F5F0E7" />
          <circle cx="160" cy="139" r="11" fill="#242321" />
          <path d="M145 220 L160 267 L175 220Z" fill="#F15A36" />
          <path d="M154 229 L160 267 L166 229Z" fill="#FFB49F" />
        </g>
        <path
          d="M75 246 L103 246 M89 232 L89 260"
          stroke="#242321"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M224 79 L246 79 M235 68 L235 90"
          stroke="#F15A36"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <span className="absolute bottom-[8%] right-[2%] font-mono text-[10px] tracking-widest text-[#77736D]">
        BUILT TO EXPLORE
      </span>
    </div>
  );
}

function SceneVisual({ type }: { type: Scene["visual"] }) {
  if (type === "idea") {
    return (
      <div className="relative flex min-h-[300px] items-center justify-center">
        <div className="absolute h-64 w-64 rounded-full bg-[#F15A36]/10 blur-3xl" />
        <div className="relative flex h-52 w-52 rotate-[-8deg] items-center justify-center border border-[#242321]/15 bg-white/60 shadow-xl">
          <Sparkles size={78} strokeWidth={1.1} className="text-[#F15A36]" />
          <span className="absolute -right-5 -top-4 bg-[#F15A36] px-3 py-2 font-mono text-xs font-bold text-white">
            WHAT IF?
          </span>
          <span className="absolute -bottom-4 -left-5 bg-[#242321] px-3 py-2 font-mono text-xs font-bold text-white">
            START HERE
          </span>
        </div>
      </div>
    );
  }

  if (type === "vision") {
    return (
      <div className="relative mx-auto flex min-h-[300px] w-full max-w-md items-center justify-center">
        <div className="absolute h-56 w-56 rounded-full border border-white/15" />
        <div className="absolute h-40 w-40 rounded-full border border-dashed border-[#F15A36]/60" />

        <div className="relative w-[85%] rotate-[-4deg] border border-white/20 bg-white/[0.06] p-5">
          <div className="mb-5 flex items-center justify-between border-b border-white/15 pb-3">
            <span className="font-mono text-xs text-white/70">
              PROJECT / 001
            </span>
            <span className="h-2 w-2 rounded-full bg-[#F15A36]" />
          </div>
          <div className="space-y-3">
            <div className="h-3 w-3/4 bg-[#F5F0E7]" />
            <div className="h-2 w-full bg-white/20" />
            <div className="h-2 w-4/5 bg-white/20" />
            <div className="mt-5 flex gap-3">
              <div className="h-20 flex-1 bg-[#F15A36]" />
              <div className="h-20 flex-1 border border-white/25" />
            </div>
          </div>
          <span className="mt-4 block font-mono text-[10px] tracking-widest text-white/65">
            STRUCTURE / DIRECTION / PURPOSE
          </span>
        </div>
      </div>
    );
  }

  if (type === "build" || type === "technology") {
    const items =
      type === "build"
        ? ["thoughtfulDesign", "cleanCode", "responsiveLayout"]
        : ["React", "Next.js", "Tailwind CSS", "Strapi"];

    return (
      <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl border border-[#242321]/15 bg-[#242321] shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/15 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F15A36]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
          <span className="ml-auto font-mono text-[10px] text-white/70">
            {type === "build" ? "experience.tsx" : "tech-stack.json"}
          </span>
        </div>

        <div className="space-y-3 p-5 font-mono text-xs sm:text-sm">
          <p className="text-[#FF8A6D]">
            {type === "build" ? "const" : "{"}{" "}
            <span className="text-[#F5F0E7]">
              {type === "build" ? "experience" : '"stack"'}
            </span>{" "}
            <span className="text-white/70">
              {type === "build" ? "=" : ":"}
            </span>
          </p>
          <p className="pl-5 text-white/80">{type === "build" ? "{" : "["}</p>

          {items.map((item, index) => (
            <div key={item} className="flex items-center gap-3 pl-8">
              <span className="text-white/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[#F5F0E7]">{item}</span>
              <Check size={13} className="ml-auto text-[#FF8A6D]" />
            </div>
          ))}

          <p className="pl-5 text-white/80">{type === "build" ? "}" : "]"}</p>

          <div className="mt-5 border-t border-white/15 pt-4 text-[10px] tracking-widest text-white/70">
            STATUS: READY TO BUILD
          </div>
        </div>
      </div>
    );
  }

  if (type === "experience") {
    return (
      <div className="mx-auto flex min-h-[300px] w-full max-w-md items-center justify-center">
        <div className="w-[82%] -rotate-3 border border-[#242321]/10 bg-white p-4 shadow-xl">
          <div className="flex items-center gap-2 border-b border-[#242321]/10 pb-3">
            <div className="h-7 w-7 rounded-full bg-[#F15A36]" />
            <div className="h-2 w-24 bg-[#242321]/20" />
            <div className="ml-auto h-2 w-8 bg-[#242321]/15" />
          </div>

          <div className="grid grid-cols-[1fr_1.2fr] gap-3 py-5">
            <div className="space-y-2 pt-3">
              <div className="h-3 w-full bg-[#242321]" />
              <div className="h-2 w-4/5 bg-[#242321]/20" />
              <div className="h-2 w-full bg-[#242321]/20" />
              <div className="mt-4 h-7 w-20 bg-[#F15A36]" />
            </div>
            <div className="flex min-h-36 items-center justify-center bg-[#EEE6DA]">
              <MousePointer2
                size={46}
                strokeWidth={1.2}
                className="text-[#F15A36]"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="h-2 flex-1 bg-[#242321]/15" />
            <div className="h-2 flex-1 bg-[#242321]/15" />
            <div className="h-2 flex-1 bg-[#242321]/15" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "details") {
    return (
      <div className="mx-auto flex min-h-[300px] w-full max-w-md items-center justify-center">
        <div className="relative w-[80%] border border-white/20 p-5">
          <div className="absolute -right-3 -top-3 bg-[#F15A36] p-3 text-white">
            <Check size={22} />
          </div>

          <p className="mb-6 font-mono text-xs tracking-widest text-white/70">
            QUALITY CHECK
          </p>

          {[
            "Responsive layout",
            "Accessible controls",
            "Clean typography",
            "Performance",
          ].map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3 border-b border-white/15 py-4 text-sm"
            >
              <span className="font-mono text-xs text-[#FF8A6D]">
                0{index + 1}
              </span>
              <span className="text-white">{item}</span>
              <Check size={15} className="ml-auto text-[#FF8A6D]" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "transformation") {
    return (
      <div className="mx-auto flex min-h-[300px] w-full max-w-md items-center justify-center">
        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div className="space-y-3 border border-[#242321]/15 bg-white/50 p-4">
            <div className="h-2 w-full bg-[#242321]/20" />
            <div className="h-2 w-3/4 bg-[#242321]/20" />
            <div className="h-16 bg-[#242321]/10" />
            <span className="block font-mono text-[9px] font-semibold text-[#77736D]">
              BEFORE
            </span>
          </div>

          <ArrowRight size={24} className="text-[#F15A36]" />

          <div className="space-y-3 border border-[#F15A36]/40 bg-white p-4 shadow-lg">
            <div className="h-2 w-full bg-[#F15A36]" />
            <div className="h-2 w-3/4 bg-[#242321]/20" />
            <div className="flex h-16 items-center justify-center bg-[#F15A36]/10">
              <Layers3 size={32} className="text-[#F15A36]" />
            </div>
            <span className="block font-mono text-[9px] font-semibold text-[#F15A36]">
              AFTER
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "launch") {
    return (
      <div className="relative mx-auto flex min-h-[300px] w-full max-w-md items-center justify-center overflow-hidden">
        <div className="absolute bottom-[10%] h-36 w-36 rounded-full bg-[#F15A36]/25 blur-3xl" />
        <div className="absolute bottom-[10%] left-[15%] h-px w-[70%] bg-white/30" />
        <div className="absolute bottom-[10%] left-[28%] h-px w-[44%] rotate-[-25deg] bg-[#F15A36]" />
        <div className="relative rotate-[-38deg] text-[#F15A36]">
          <Rocket size={140} strokeWidth={0.8} />
        </div>
        <span className="absolute bottom-[6%] right-[6%] font-mono text-[10px] tracking-widest text-white/70">
          READY FOR TAKEOFF
        </span>
      </div>
    );
  }

  return <PaperRocket />;
}

function StoryScene({ scene, index }: { scene: Scene; index: number }) {
  const Icon = scene.icon;
  const isDark = scene.background === "charcoal";
  const isFinal = scene.background === "orange";
  const isEven = index % 2 === 0;

  const titleColor = isDark || isFinal ? "text-[#F5F0E7]" : "text-[#242321]";

  const bodyColor = isDark || isFinal ? "text-white/85" : "text-[#5F5A54]";

  const metaColor = isDark || isFinal ? "text-white/80" : "text-[#5F5A54]";

  return (
    <section
      id={`scene-${scene.number}`}
      data-scene
      className={`relative scroll-mt-20 overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32 ${
        scene.background === "charcoal"
          ? "bg-[#242321] text-[#F5F0E7]"
          : scene.background === "sand"
            ? "bg-[#EEE6DA] text-[#242321]"
            : scene.background === "orange"
              ? "bg-[#F15A36] text-[#242321]"
              : "bg-[#F5F0E7] text-[#242321]"
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${
          isDark ? "opacity-[0.08]" : "opacity-[0.12]"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,240,231,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,231,.18) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black, transparent 80%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className={`scene-copy ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          <SectionLabel number={scene.number} light={isDark || isFinal}>
            {scene.eyebrow}
          </SectionLabel>

          <div className="mb-6 flex items-center gap-3">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full ${
                isDark
                  ? "bg-[#F15A36]/15 text-[#FF8A6D]"
                  : isFinal
                    ? "bg-white/15 text-white"
                    : "bg-[#242321]/[0.06] text-[#F15A36]"
              }`}
            >
              <Icon size={20} strokeWidth={1.7} />
            </span>
            <span
              className={`font-mono text-[10px] tracking-[0.16em] ${metaColor}`}
            >
              STORY / {scene.number}
            </span>
          </div>

          <h2
            className={`max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.055em] sm:text-5xl md:text-6xl ${titleColor}`}
          >
            {scene.title.split(" ").map((word, wordIndex, words) => {
              const highlightWords: Record<string, boolean> = {
                idea: true,
                vision: true,
                build: true,
                interaction: true,
                difference: true,
                purpose: true,
                clarity: true,
                launch: true,
                meaningful: true,
              };

              const cleanWord = word.toLowerCase().replace(/[.,!?]/g, "");
              const highlight = highlightWords[cleanWord];

              return (
                <span
                  key={`${word}-${wordIndex}`}
                  className={
                    highlight
                      ? isDark
                        ? "text-[#FFB49F]"
                        : isFinal
                          ? "text-[#242321]"
                          : "text-[#C83C21]"
                      : ""
                  }
                >
                  {word}
                  {wordIndex < words.length - 1 ? " " : ""}
                </span>
              );
            })}
          </h2>

          <p
            className={`mt-6 max-w-lg text-base leading-8 sm:text-lg ${bodyColor}`}
          >
            {scene.description}
          </p>

          <div
            className={`mt-8 inline-flex items-center gap-3 border-t pt-5 font-mono text-[10px] tracking-[0.12em] ${
              isDark || isFinal
                ? "border-white/25 text-white/80"
                : "border-[#242321]/20 text-[#5F5A54]"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-[#F15A36]" />
            {scene.tag}
          </div>

          {isFinal && (
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className={`${buttonStyles.primary} border-white shadow-sm`}
              >
                Explore my work <ArrowUpRight size={17} />
              </Link>

              <Link href="#contact" className={buttonStyles.secondary}>
                Let's talk <ArrowRight size={17} />
              </Link>
            </div>
          )}
        </div>

        <div
          className={`scene-visual relative ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div
            className={`absolute inset-8 rounded-full blur-3xl ${
              isFinal ? "bg-[#242321]/10" : "bg-[#F15A36]/[0.08]"
            }`}
          />
          <div className="relative">
            <SceneVisual type={scene.visual} />
          </div>

          <span
            className={`mt-5 block text-center font-mono text-[9px] tracking-[0.2em] ${
              isDark ? "text-white/60" : "text-[#5F5A54]"
            }`}
          >
            RAMIL AOANAN / DIGITAL EXPERIENCE
          </span>
        </div>
      </div>

      <span
        aria-hidden="true"
        className={`absolute bottom-5 right-6 font-mono text-5xl font-black tracking-tighter sm:bottom-8 sm:right-10 sm:text-7xl ${
          isDark || isFinal ? "text-white/[0.12]" : "text-[#242321]/[0.06]"
        }`}
      >
        {scene.number}
      </span>
    </section>
  );
}

export default function CinematicHero() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-scene]").forEach((scene) => {
        const copy = scene.querySelector(".scene-copy");
        const visual = scene.querySelector(".scene-visual");

        if (copy) {
          gsap.fromTo(
            copy,
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              ease: "power2.out",
              scrollTrigger: {
                trigger: scene,
                start: "top 78%",
                once: true,
              },
            },
          );
        }

        if (visual) {
          gsap.fromTo(
            visual,
            { y: 20, opacity: 0, scale: 0.985 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.85,
              delay: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: scene,
                start: "top 78%",
                once: true,
              },
            },
          );
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={rootRef}
      className="min-h-screen overflow-clip bg-[#F5F0E7] font-sans text-[#242321] selection:bg-[#F15A36] selection:text-white"
    >
      <header className="sticky top-0 z-50 border-b border-[#242321]/10 bg-[#F5F0E7]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <BrandMark />

          <div className="hidden items-center gap-8 text-xs font-semibold text-[#5F5A54] sm:flex">
            <Link
              className="transition-colors hover:text-[#F15A36]"
              href="#scene-01"
            >
              The story
            </Link>
            <Link
              className="transition-colors hover:text-[#F15A36]"
              href="#scene-06"
            >
              Technology
            </Link>
            <Link
              className="transition-colors hover:text-[#F15A36]"
              href="#projects"
            >
              Projects
            </Link>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#F15A36] bg-[#F15A36] px-4 py-2.5 text-xs font-bold text-white transition-colors duration-200 hover:border-[#D94727] hover:bg-[#D94727] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F15A36]"
          >
            Let's talk <ArrowUpRight size={15} />
          </Link>
        </nav>
      </header>

      <section
        id="home"
        className="relative scroll-mt-20 overflow-hidden bg-[#F5F0E7] px-5 py-16 text-[#242321] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(36,35,33,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(36,35,33,.22) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div className="order-2 md:order-1">
            <div className="mb-7 inline-flex items-center gap-2 border border-[#242321]/20 px-3 py-2 font-mono text-[10px] font-semibold tracking-[0.14em] text-[#5F5A54]">
              <span className="h-2 w-2 rounded-full bg-[#F15A36]" />
              INDEPENDENT WEB DEVELOPER
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.065em] text-[#242321] sm:text-6xl lg:text-8xl">
              RAMIL
              <br />
              AOANAN<span className="text-[#F15A36]">.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#5F5A54] sm:text-xl">
              I turn ideas into{" "}
              <span className="font-semibold text-[#242321]">
                thoughtful digital experiences
              </span>{" "}
              through design, code, and a little curiosity.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#scene-01" className={buttonStyles.primary}>
                Explore my story <ArrowDown size={17} />
              </Link>

              <Link
                href="https://github.com/ramilinator"
                target="_blank"
                rel="noreferrer"
                className={buttonStyles.secondary}
              >
                GitHub <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-[#242321]/20 pt-5">
              <div>
                <p className="text-xl font-black text-[#242321]">05+</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#5F5A54]">
                  Years in frontend
                </p>
              </div>
              <div>
                <p className="text-xl font-black text-[#242321]">React</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#5F5A54]">
                  Modern UI
                </p>
              </div>
              <div>
                <p className="text-xl font-black text-[#242321]">Next.js</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#5F5A54]">
                  Web systems
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-md md:order-2">
            <div className="absolute inset-8 rounded-full bg-[#F15A36]/15 blur-3xl" />

            <div className="relative mx-auto aspect-[4/5] max-w-[390px] overflow-hidden border border-[#242321]/10 bg-[#EEE6DA] shadow-xl shadow-[#242321]/[0.06]">
              <div className="absolute left-4 top-4 z-10 font-mono text-[10px] font-semibold tracking-widest text-[#5F5A54]">
                FIG. 001 / THE DEVELOPER
              </div>

              <Image
                src="/images/profile.png"
                alt="Ramil Aoanan"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 390px"
                className="object-contain object-bottom p-4 pt-12"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-[#242321] p-5 text-[#F5F0E7]">
                <p className="font-mono text-[10px] tracking-[0.18em] text-white/70">
                  CURRENT FOCUS
                </p>
                <p className="mt-2 text-lg font-bold">
                  Building for the web<span className="text-[#F15A36]">.</span>
                </p>
              </div>
            </div>

            <div className="absolute -right-2 top-[28%] hidden border border-[#242321]/10 bg-white p-4 shadow-lg sm:block">
              <Braces size={25} className="text-[#F15A36]" />
            </div>

            <div className="absolute -left-3 bottom-[23%] hidden bg-[#F15A36] p-4 text-white shadow-lg sm:block">
              <Code2 size={23} />
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-16 flex max-w-7xl items-center justify-between border-t border-[#242321]/20 pt-5">
          <span className="font-mono text-[10px] font-semibold tracking-widest text-[#5F5A54]">
            SCROLL TO EXPLORE / 09 CHAPTERS
          </span>
          <ArrowDownRight size={20} className="text-[#F15A36]" />
        </div>
      </section>

      {scenes.map((scene, index) => (
        <StoryScene key={scene.number} scene={scene} index={index} />
      ))}

      <section
        id="projects"
        className="scroll-mt-20 bg-[#EEE6DA] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <SectionLabel number="10">THE WORK</SectionLabel>
            <h2 className="max-w-2xl text-4xl font-black tracking-[-0.05em] text-[#242321] sm:text-6xl">
              Ideas made <span className="text-[#F15A36]">real.</span>
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[#5F5A54]">
              Explore projects that bring together modern frontend development,
              useful functionality, and considered design.
            </p>
          </div>

          <Link
            href="https://github.com/ramilinator"
            target="_blank"
            rel="noreferrer"
            className={`${buttonStyles.secondary} w-fit`}
          >
            View GitHub projects <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Modern Blog",
              description:
                "A content-driven blog built with Next.js and Strapi.",
              stack: "NEXT.JS / STRAPI",
              number: "01",
            },
            {
              title: "Movie Discovery",
              description:
                "A movie discovery experience powered by an external API.",
              stack: "REACT / API",
              number: "02",
            },
            {
              title: "Digital Experience",
              description:
                "An interactive interface exploring motion and presentation.",
              stack: "REACT / GSAP",
              number: "03",
            },
          ].map((project) => (
            <article
              key={project.number}
              className="group border border-[#242321]/10 bg-[#F5F0E7] p-6 transition-transform hover:-translate-y-1 sm:p-8"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[#5F5A54]">
                  PROJECT / {project.number}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-[#F15A36] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>

              <h3 className="text-2xl font-black tracking-tight text-[#242321]">
                {project.title}
              </h3>

              <p className="mt-3 min-h-14 leading-6 text-[#5F5A54]">
                {project.description}
              </p>

              <div className="mt-6 border-t border-[#242321]/15 pt-4 font-mono text-[10px] font-semibold tracking-widest text-[#C83C21]">
                {project.stack}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-20 bg-[#F15A36] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-5 font-mono text-xs font-bold tracking-[0.2em] text-[#242321]/80">
              HAVE SOMETHING IN MIND?
            </p>

            <h2 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.06em] text-[#242321] sm:text-7xl">
              Let's make your next idea happen.
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-[#242321]/85">
              Whether you're planning a website, improving an existing product,
              or exploring a new idea, I'd love to hear about it.
            </p>
          </div>

          <Link
            href="mailto:hello@ramilaoanan.com"
            className={`${buttonStyles.secondary} w-fit`}
          >
            Get in touch <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <footer className="bg-[#242321] px-5 py-6 text-[#F5F0E7] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <BrandMark light />

          <p className="text-xs text-white/70">
            © {new Date().getFullYear()} Ramil Aoanan. Built with intention.
          </p>

          <Link
            href="#home"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#F5F0E7] transition-colors hover:text-[#FF8A6D]"
          >
            Back to top <ArrowUpRight size={14} />
          </Link>
        </div>
      </footer>
    </main>
  );
}
