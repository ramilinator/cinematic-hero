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
    href: "#",
    theme: "bg-[#f9b33d]",
  },
  {
    number: "02",
    type: "API-POWERED APP",
    title: "Movie Discovery",
    description:
      "An interactive movie discovery experience that brings film information into one place.",
    stack: ["React", "JavaScript", "REST API"],
    href: "#",
    theme: "bg-[#f1e6d6]",
  },
  {
    number: "03",
    type: "INTERACTIVE EXPERIENCE",
    title: "Digital Experience",
    description:
      "A responsive interface with thoughtful motion, visual storytelling, and polished details.",
    stack: ["React", "GSAP", "CSS"],
    href: "#",
    theme: "bg-[#e9a18a]",
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
    <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[#6f6558]">
      <span className="grid size-8 place-items-center rounded-full border border-[#29251f]/20 text-[#29251f]">
        {number}
      </span>
      <span>{children}</span>
      <span className="h-px flex-1 bg-[#29251f]/20" />
    </div>
  );
}

function SceneVisual({ type }: { type: string }) {
  if (type === "code") {
    return (
      <div className="relative mx-auto w-full max-w-md rotate-[-3deg] rounded-2xl border border-[#29251f]/20 bg-[#24221e] p-5 text-[#f8eee0] shadow-[12px_12px_0_#29251f] sm:p-7">
        <div className="mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
          <span className="size-2.5 rounded-full bg-[#f17d55]" />
          <span className="size-2.5 rounded-full bg-[#f9b33d]" />
          <span className="size-2.5 rounded-full bg-[#a5bd86]" />
          <span className="ml-auto font-mono text-[10px] text-white/50">
            developer.tsx
          </span>
        </div>
        <div className="space-y-3 font-mono text-xs leading-relaxed sm:text-sm">
          <p className="text-[#e9a18a]">
            <span className="text-[#f9b33d]">const</span> developer = {"{"}
          </p>
          <p className="pl-5 text-white/80">
            name: <span className="text-[#a5bd86]">"Ramil Aoanan"</span>,
          </p>
          <p className="pl-5 text-white/80">
            focus: <span className="text-[#a5bd86]">"Web development"</span>,
          </p>
          <p className="pl-5 text-white/80">
            mindset: <span className="text-[#a5bd86]">"Keep building"</span>,
          </p>
          <p className="text-[#e9a18a]">{"};"}</p>
          <p className="pt-3 text-white/40">
            // Turning ideas into interfaces.
          </p>
        </div>
      </div>
    );
  }

  if (type === "layers") {
    return (
      <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
        <div className="absolute size-[78%] rotate-[-12deg] border-2 border-[#29251f]/25 bg-[#f9b33d]/60" />
        <div className="absolute size-[65%] rotate-[8deg] border-2 border-[#29251f]/25 bg-[#e9a18a]/80" />
        <div className="relative grid size-[52%] rotate-[-4deg] place-items-center border-2 border-[#29251f] bg-[#f8eee0] shadow-[8px_8px_0_#29251f]">
          <Layers3 size={64} strokeWidth={1.2} />
        </div>
        <span className="absolute right-0 top-[12%] rounded-full border border-[#29251f]/25 bg-[#f8eee0] px-4 py-2 font-mono text-xs">
          STRUCTURE
        </span>
        <span className="absolute bottom-[12%] left-0 rounded-full border border-[#29251f]/25 bg-[#f8eee0] px-4 py-2 font-mono text-xs">
          COMPONENTS
        </span>
      </div>
    );
  }

  if (type === "cursor") {
    return (
      <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
        <div className="absolute size-[85%] rounded-full border border-dashed border-[#29251f]/30" />
        <div className="absolute size-[65%] rounded-full border border-[#29251f]/30" />
        <div className="absolute size-[42%] rounded-full bg-[#f9b33d]" />
        <MousePointer2
          className="relative z-10 -rotate-12 drop-shadow-[4px_4px_0_#f8eee0]"
          size={100}
          strokeWidth={1.3}
        />
        <span className="absolute left-2 top-[20%] rounded-full bg-[#29251f] px-4 py-2 font-mono text-xs text-[#f8eee0]">
          INTERACTION
        </span>
        <span className="absolute bottom-[12%] right-0 rounded-full border border-[#29251f]/25 bg-[#f8eee0] px-4 py-2 font-mono text-xs">
          EXPERIENCE
        </span>
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
      <div className="absolute size-[75%] rotate-12 border-2 border-[#29251f]/25 bg-[#e9a18a]/60" />
      <div className="absolute size-[60%] -rotate-6 border-2 border-[#29251f]/25 bg-[#f9b33d]" />
      <div className="relative grid size-[42%] place-items-center border-2 border-[#29251f] bg-[#f8eee0] shadow-[8px_8px_0_#29251f]">
        <Code2 size={60} strokeWidth={1.3} />
      </div>
      <Sparkles className="absolute right-[10%] top-[10%]" size={32} />
      <span className="absolute bottom-[10%] left-[2%] font-mono text-xs tracking-widest">
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
          fill="#F8EEE0"
          stroke="#29251F"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M86 170L48 212L82 216L106 199"
          fill="#E9A18A"
          stroke="#29251F"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M194 170L232 212L198 216L174 199"
          fill="#E9A18A"
          stroke="#29251F"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <circle
          cx="140"
          cy="123"
          r="21"
          fill="#F9B33D"
          stroke="#29251F"
          strokeWidth="4"
        />
        <path
          d="M119 226L140 263L161 226"
          fill="#F17D55"
          stroke="#29251F"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M125 270L140 318L155 270"
          fill="#F9B33D"
          stroke="#29251F"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M110 66L88 109M171 77L188 110"
        stroke="#29251F"
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

    const ctx = gsap.context(() => {
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
        scale: 0.82,
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.25,
      });

      gsap.from(".ss-hero-rocket", {
        x: -70,
        y: 60,
        rotation: -18,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
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
          y: 45,
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
            y: 35,
            rotate: -3,
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
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.12,
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
        y: 45,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ss-projects-grid",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".ss-contact-panel", {
        y: 40,
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
      className="ss-page overflow-hidden bg-[#f8eee0] text-[#29251f] selection:bg-[#f9b33d] selection:text-[#29251f]"
    >
      {/* HERO */}
      <section className="ss-hero relative isolate flex min-h-[92svh] flex-col overflow-hidden border-b border-[#29251f]/15 px-5 pb-12 pt-6 sm:px-8 lg:min-h-screen lg:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(to_right,#29251f1a_1px,transparent_1px),linear-gradient(to_bottom,#29251f1a_1px,transparent_1px)] [background-size:44px_44px]"
        />

        <header className="ss-header relative z-20 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.16em]"
          >
            <span className="grid size-10 place-items-center rounded-full bg-[#29251f] text-[#f8eee0]">
              RA.
            </span>
            <span className="hidden sm:inline">Ramil Aoanan</span>
          </Link>

          <nav className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest sm:gap-7 sm:text-xs">
            <Link href="#story" className="transition-opacity hover:opacity-50">
              Story
            </Link>
            <Link href="#work" className="transition-opacity hover:opacity-50">
              Work
            </Link>
            <Link
              href="#contact"
              className="transition-opacity hover:opacity-50"
            >
              Contact
            </Link>
          </nav>
        </header>

        <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center pt-14">
          <div className="ss-hero-kicker relative z-10 mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] sm:text-xs">
            <span className="size-2 rounded-full bg-[#f17d55]" />
            <span>Independent web developer</span>
            <span className="hidden text-[#6f6558] sm:inline">
              / Building digital experiences
            </span>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="ss-hero-outline-name pointer-events-none absolute left-1/2 top-[44%] z-0 w-full -translate-x-1/2 -translate-y-1/2 select-none text-center text-[17vw] font-black uppercase leading-[0.75] tracking-[-0.09em] text-transparent opacity-70 [-webkit-text-stroke:1px_#29251f] sm:text-[16vw] lg:text-[14vw]"
            >
              <span className="ss-hero-name-line block">RAMIL</span>
              <span className="ss-hero-name-line block">AOANAN</span>
            </div>

            <div className="ss-hero-art relative z-10 mx-auto flex min-h-[340px] w-full max-w-[600px] items-center justify-center sm:min-h-[470px] lg:min-h-[530px]">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#29251f]/20" />
              <div className="absolute left-1/2 top-1/2 aspect-square w-[57%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#29251f]/30" />

              <div className="absolute bottom-[12%] left-[7%] z-20 rotate-[-7deg] border border-[#29251f] bg-[#f9b33d] px-3 py-2 font-mono text-[9px] uppercase tracking-widest sm:left-[4%] sm:px-4 sm:text-[10px]">
                <span className="block text-[#6f6558]">Current role</span>
                <span className="mt-1 block font-bold text-[#29251f]">
                  Web developer
                </span>
              </div>

              <div className="absolute right-[4%] top-[12%] z-20 rotate-[7deg] border border-[#29251f] bg-[#f8eee0] px-3 py-2 font-mono text-[9px] uppercase tracking-widest sm:px-4 sm:text-[10px]">
                <span className="block text-[#6f6558]">Core focus</span>
                <span className="mt-1 block font-bold text-[#29251f]">
                  Frontend + CMS
                </span>
              </div>

              <div className="ss-hero-portrait relative z-10 h-[310px] w-[240px] overflow-hidden border-2 border-[#29251f] bg-[#e9a18a] shadow-[10px_10px_0_#29251f] sm:h-[410px] sm:w-[310px] sm:shadow-[14px_14px_0_#29251f]">
                <Image
                  src="/images/caricature.png"
                  alt="Caricature portrait of Ramil Aoanan"
                  fill
                  priority
                  sizes="(max-width: 640px) 240px, 310px"
                  className="object-contain object-bottom"
                />
              </div>

              <div className="ss-hero-rocket absolute -right-1 top-[15%] z-20 w-[105px] sm:right-[3%] sm:top-[8%] sm:w-[170px] lg:right-[7%]">
                <PaperRocket />
              </div>

              <div className="absolute bottom-[4%] right-[5%] z-20 hidden max-w-[180px] border-l-2 border-[#f17d55] pl-3 font-mono text-[10px] leading-relaxed sm:block">
                <span className="block text-[#6f6558]">Mission 001</span>
                <span className="mt-1 block font-bold uppercase tracking-widest">
                  Ideas into interfaces.
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="ss-hero-description max-w-lg text-base leading-relaxed text-[#51483d] sm:text-lg">
              I build responsive websites and digital experiences that combine
              thoughtful design with practical, maintainable code.
            </p>

            <Link
              href="#story"
              className="group inline-flex w-fit items-center gap-3 border-b border-[#29251f] pb-2 font-mono text-xs uppercase tracking-widest"
            >
              Explore my story
              <ArrowDownRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </Link>
          </div>
        </div>

        <div className="relative z-10 mt-12 flex items-center justify-between border-t border-[#29251f]/20 pt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-[#6f6558] sm:text-[10px]">
          <span>Portfolio / 2026</span>
          <span>Design. Develop. Iterate.</span>
          <span className="hidden sm:inline">Scroll to explore ↓</span>
        </div>
      </section>

      {/* INTRO */}
      <section
        id="story"
        className="ss-intro relative px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40"
      >
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="ss-reveal">
            <SectionLabel number="01">A little introduction</SectionLabel>
            <p className="max-w-sm text-sm leading-relaxed text-[#6f6558]">
              A developer who enjoys the process as much as the finished product
              — from the first idea to the final detail.
            </p>
          </div>

          <div className="ss-reveal">
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              I turn ideas into{" "}
              <span className="font-serif font-normal italic text-[#d76845]">
                useful
              </span>{" "}
              digital experiences.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#51483d] sm:text-lg">
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

          <div className="space-y-6 sm:space-y-10">
            <article className="ss-scene grid items-center gap-8 border-t border-[#29251f]/20 py-12 md:grid-cols-2 md:gap-14 md:py-20">
              <div className="ss-scene-content order-2 md:order-1">
                <p className="mb-5 font-mono text-xs uppercase tracking-widest text-[#d76845]">
                  Scene 01 / The curiosity
                </p>
                <h3 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
                  It starts with a question.
                </h3>
                <p className="mt-5 max-w-lg leading-relaxed text-[#51483d]">
                  How does a website work? How can an interface make a task
                  easier? That curiosity is what makes development rewarding:
                  there is always something new to understand and improve.
                </p>
              </div>
              <div className="ss-scene-visual order-1 rounded-2xl bg-[#f1e6d6] p-8 sm:p-12 md:order-2">
                <SceneVisual type="idea" />
              </div>
            </article>

            <article className="ss-scene grid items-center gap-8 border-t border-[#29251f]/20 py-12 md:grid-cols-2 md:gap-14 md:py-20">
              <div className="ss-scene-visual rounded-2xl bg-[#e9a18a]/50 p-8 sm:p-12">
                <SceneVisual type="code" />
              </div>
              <div className="ss-scene-content">
                <p className="mb-5 font-mono text-xs uppercase tracking-widest text-[#d76845]">
                  Scene 02 / The craft
                </p>
                <h3 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
                  Learn the fundamentals. Build with purpose.
                </h3>
                <p className="mt-5 max-w-lg leading-relaxed text-[#51483d]">
                  I work with HTML, CSS, JavaScript, and React to build
                  accessible, responsive interfaces. Good code is not only about
                  making something work; it is also about making it
                  understandable and maintainable.
                </p>
              </div>
            </article>

            <article className="ss-scene grid items-center gap-8 border-t border-[#29251f]/20 py-12 md:grid-cols-2 md:gap-14 md:py-20">
              <div className="ss-scene-content order-2 md:order-1">
                <p className="mb-5 font-mono text-xs uppercase tracking-widest text-[#d76845]">
                  Scene 03 / The structure
                </p>
                <h3 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
                  Build systems, not just screens.
                </h3>
                <p className="mt-5 max-w-lg leading-relaxed text-[#51483d]">
                  Component-based architecture and reusable patterns help keep
                  projects organized as they grow. I enjoy connecting the visual
                  layer with the underlying structure that powers it.
                </p>
              </div>
              <div className="ss-scene-visual order-1 rounded-2xl bg-[#f9b33d]/50 p-8 sm:p-12 md:order-2">
                <SceneVisual type="layers" />
              </div>
            </article>

            <article className="ss-scene grid items-center gap-8 border-t border-[#29251f]/20 py-12 md:grid-cols-2 md:gap-14 md:py-20">
              <div className="ss-scene-visual rounded-2xl bg-[#f1e6d6] p-8 sm:p-12">
                <SceneVisual type="cursor" />
              </div>
              <div className="ss-scene-content">
                <p className="mb-5 font-mono text-xs uppercase tracking-widest text-[#d76845]">
                  Scene 04 / The details
                </p>
                <h3 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
                  Every interaction has a purpose.
                </h3>
                <p className="mt-5 max-w-lg leading-relaxed text-[#51483d]">
                  From hover states to scroll-driven transitions, motion should
                  guide attention rather than distract from the content. I use
                  animation to give interfaces character and clarity.
                </p>
              </div>
            </article>

            <article className="ss-scene grid items-center gap-8 border-y border-[#29251f]/20 py-12 md:grid-cols-2 md:gap-14 md:py-20">
              <div className="ss-scene-content order-2 md:order-1">
                <p className="mb-5 font-mono text-xs uppercase tracking-widest text-[#d76845]">
                  Scene 05 / The bigger picture
                </p>
                <h3 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
                  Connect content with experience.
                </h3>
                <p className="mt-5 max-w-lg leading-relaxed text-[#51483d]">
                  Headless CMS platforms such as Strapi make it possible to
                  separate content management from presentation. That means
                  flexible publishing workflows and custom frontend experiences.
                </p>
              </div>
              <div className="ss-scene-visual order-1 rounded-2xl bg-[#e9a18a]/50 p-8 sm:p-12 md:order-2">
                <SceneVisual type="layers" />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="relative overflow-hidden bg-[#29251f] px-5 py-24 text-[#f8eee0] sm:px-8 sm:py-32 lg:px-14"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#f8eee0_1px,transparent_1px),linear-gradient(to_bottom,#f8eee0_1px,transparent_1px)] [background-size:36px_36px]"
        />

        <div className="relative mx-auto max-w-[1240px]">
          <SectionLabel number="03">The toolkit</SectionLabel>

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div className="ss-reveal">
              <p className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#f9b33d]">
                <Terminal size={16} />
                Skills & technologies
              </p>
              <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-6xl">
                The right tools for the right problem.
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-[#f8eee0]/65">
                I combine foundational web technologies with modern frameworks
                and content tools to build useful, responsive websites.
              </p>
            </div>

            <div className="ss-reveal flex flex-wrap content-start gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="inline-flex items-center gap-2 rounded-full border border-[#f8eee0]/25 px-4 py-3 text-sm transition-colors hover:border-[#f9b33d] hover:bg-[#f9b33d] hover:text-[#29251f]"
                >
                  <Check size={14} className="text-[#f9b33d]" />
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-[#f8eee0]/15 bg-[#f8eee0]/15 sm:grid-cols-3">
            <div className="ss-reveal bg-[#29251f] p-6 sm:p-8">
              <Braces size={25} className="mb-8 text-[#f9b33d]" />
              <h3 className="text-lg font-semibold">Frontend development</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#f8eee0]/60">
                Responsive layouts, reusable components, and clean interface
                implementation.
              </p>
            </div>
            <div className="ss-reveal bg-[#29251f] p-6 sm:p-8">
              <Layers3 size={25} className="mb-8 text-[#f9b33d]" />
              <h3 className="text-lg font-semibold">CMS integration</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#f8eee0]/60">
                Connecting content models and APIs to flexible frontend
                experiences.
              </p>
            </div>
            <div className="ss-reveal bg-[#29251f] p-6 sm:p-8">
              <GitBranch size={25} className="mb-8 text-[#f9b33d]" />
              <h3 className="text-lg font-semibold">Iteration & delivery</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#f8eee0]/60">
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
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#d76845]">
                A few things I have been building
              </p>
              <h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-6xl">
                From concept to working product.
              </h2>
            </div>
            <p className="ss-reveal max-w-sm leading-relaxed text-[#6f6558]">
              Each project is an opportunity to solve a problem, explore an
              idea, and sharpen the craft.
            </p>
          </div>

          <div className="ss-projects-grid grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="ss-project-card group flex h-full flex-col border border-[#29251f]/20 bg-[#f8eee0] transition-transform duration-300 hover:-translate-y-1"
              >
                <div
                  className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-[#29251f]/20 p-6 ${project.theme}`}
                >
                  <span className="absolute left-4 top-4 font-mono text-xs">
                    PROJECT / {project.number}
                  </span>
                  <div className="relative flex size-36 items-center justify-center border-2 border-[#29251f] bg-[#f8eee0] shadow-[8px_8px_0_#29251f] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                    {project.number === "01" ? (
                      <Layers3 size={60} strokeWidth={1.3} />
                    ) : project.number === "02" ? (
                      <MousePointer2 size={60} strokeWidth={1.3} />
                    ) : (
                      <Code2 size={60} strokeWidth={1.3} />
                    )}
                  </div>
                  <span className="absolute bottom-4 right-4 font-mono text-xs">
                    {project.type}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#d76845]">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6f6558]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#29251f]/20 px-3 py-1.5 font-mono text-[10px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.href}
                    className="mt-7 inline-flex items-center justify-between border-t border-[#29251f]/20 pt-4 text-sm font-semibold"
                  >
                    View project
                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-14">
        <div className="ss-contact-panel relative mx-auto max-w-[1240px] overflow-hidden border-2 border-[#29251f] bg-[#f9b33d] p-7 shadow-[8px_8px_0_#29251f] sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#29251f_1px,transparent_1px),linear-gradient(to_bottom,#29251f_1px,transparent_1px)] [background-size:32px_32px]"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
                <Mail size={16} />
                Have a project in mind?
              </p>
              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
                Let&apos;s build something meaningful.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-[#51483d]">
                I&apos;m interested in opportunities to create useful digital
                experiences, contribute to a team, and keep growing as a
                developer.
              </p>
            </div>

            <a
              href="mailto:your-email@example.com"
              className="group inline-flex w-fit items-center gap-5 border-2 border-[#29251f] bg-[#29251f] px-6 py-4 font-mono text-xs uppercase tracking-widest text-[#f8eee0] transition-colors hover:bg-[#f8eee0] hover:text-[#29251f]"
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
      <footer className="border-t border-[#29251f]/20 px-5 py-6 sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 font-mono text-[10px] uppercase tracking-widest text-[#6f6558] sm:flex-row sm:items-center sm:justify-between">
          <Link href="#" className="font-bold text-[#29251f]">
            RAMIL AOANAN © 2026
          </Link>
          <span>Designed with intention. Built with code.</span>
          <Link
            href="#"
            className="inline-flex items-center gap-2 transition-colors hover:text-[#29251f]"
          >
            Back to top <ArrowUpRight size={13} />
          </Link>
        </div>
      </footer>
    </main>
  );
}
