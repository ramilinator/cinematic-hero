"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  CheckCircle2,
  Code2,
  Globe2,
  Layers3,
  Mail,
  Menu,
  MoveUpRight,
  Rocket,
  Sparkles,
  Terminal,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const C = {
  bg: "#121516",
  panel: "#191C1D",
  panelAlt: "#171A1B",
  cream: "#F5F0E7",
  orange: "#F15A36",
  muted: "#9C9B96",
};

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "WordPress",
  "Strapi",
  "Git",
];

const scenes = [
  {
    number: "01",
    eyebrow: "THE INTRODUCTION",
    title: ["Ideas deserve", "better websites."],
    description:
      "I build thoughtful, responsive, and engaging digital experiences that bring ideas to life and make the web more useful.",
    tags: ["Web Development", "UI Implementation", "Responsive Design"],
    icon: Sparkles,
  },
  {
    number: "02",
    eyebrow: "THE PERSON BEHIND THE CODE",
    title: ["Design with purpose.", "Build with care."],
    description:
      "I'm Ramil Aoanan, a web developer who brings together visual design, modern technology, and practical problem-solving to create experiences that feel considered and work well.",
    tags: ["Thoughtful Design", "User Experience", "Problem Solving"],
    icon: Code2,
  },
  {
    number: "03",
    eyebrow: "THE FOUNDATION",
    title: ["Good ideas need", "good engineering."],
    description:
      "From semantic HTML and responsive CSS to React and Next.js, I focus on solid foundations that make websites accessible, maintainable, and ready to grow.",
    tags: ["HTML & CSS", "React", "Next.js"],
    icon: Braces,
  },
  {
    number: "04",
    eyebrow: "THE EXPERIENCE",
    title: ["Make every", "interaction count."],
    description:
      "Layouts, navigation, transitions, and small interactions all shape how a website feels. I aim to make every part intuitive, purposeful, and enjoyable to use.",
    tags: ["Responsive Layouts", "Interactions", "Accessibility"],
    icon: Layers3,
  },
  {
    number: "05",
    eyebrow: "THE DETAILS",
    title: ["Small details.", "Stronger results."],
    description:
      "Good work comes from iteration. I pay attention to spacing, typography, visual consistency, loading states, and the little things that help a product feel polished.",
    tags: ["Visual Polish", "Debugging", "Refinement"],
    icon: CheckCircle2,
  },
  {
    number: "06",
    eyebrow: "THE TOOLKIT",
    title: ["Modern tools.", "Practical solutions."],
    description:
      "I use the tools that best serve the project, from component-based frontends to content management systems and APIs. The goal is not complexity. It's building something useful.",
    tags: ["Next.js", "Strapi", "WordPress"],
    icon: Terminal,
  },
  {
    number: "07",
    eyebrow: "THE APPROACH",
    title: ["Complexity,", "made clearer."],
    description:
      "I approach development by breaking problems into manageable steps, investigating issues methodically, and choosing solutions that are straightforward to maintain.",
    tags: ["Troubleshooting", "Iteration", "Maintainability"],
    icon: Code2,
  },
  {
    number: "08",
    eyebrow: "THE NEXT CHAPTER",
    title: ["Build something", "worth exploring."],
    description:
      "I'm continuing to develop my portfolio, explore modern web technologies, and build projects that demonstrate my skills and the kind of work I want to do.",
    tags: ["Personal Projects", "Continuous Learning", "Web Technology"],
    icon: Rocket,
  },
  {
    number: "09",
    eyebrow: "YOUR TURN",
    title: ["Have an idea?", "Let's make it real."],
    description:
      "Have a website idea, a project that needs a developer, or an opportunity to discuss? I'd be happy to connect and explore what's possible.",
    tags: ["Freelance Projects", "Collaboration", "Opportunities"],
    icon: Mail,
  },
];

const projects = [
  {
    number: "01",
    category: "CONTENT-DRIVEN WEBSITE",
    title: "Modern Blog",
    description:
      "A personal publishing platform exploring a modern frontend, structured content, and a headless CMS workflow.",
    stack: ["Next.js", "Strapi", "Tailwind CSS"],
    href: "https://ramilaoanan.wordpress.com/",
    icon: Globe2,
  },
  {
    number: "02",
    category: "API-POWERED APPLICATION",
    title: "Movie Discovery",
    description:
      "A movie discovery experience built around API data, interactive browsing, and a responsive interface.",
    stack: ["React", "JavaScript", "REST API"],
    href: "https://github.com/ramilinator",
    icon: Layers3,
  },
  {
    number: "03",
    category: "PERSONAL PORTFOLIO",
    title: "Digital Experience",
    description:
      "A personal portfolio focused on clear presentation, considered typography, responsive layouts, and subtle motion.",
    stack: ["React", "GSAP", "CSS"],
    href: "https://ramilaoanan.onrender.com",
    icon: Rocket,
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
    <div className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
      <span className="text-[#F15A36]">{number}</span>
      <span className="h-px w-8 bg-[#F15A36]/60" />
      <span>{children}</span>
    </div>
  );
}

function BrandMark() {
  return (
    <Link
      href="#home"
      aria-label="Ramil Aoanan home"
      className="group flex shrink-0 items-center gap-3"
    >
      <span className="flex size-10 items-center justify-center rounded-sm bg-[#F15A36] text-sm font-black tracking-[-0.1em] text-[#121516] transition-transform duration-300 group-hover:rotate-[-5deg]">
        RA.
      </span>

      <span className="flex flex-col">
        <span className="text-[12px] font-black uppercase leading-tight tracking-[0.12em] text-[#F5F0E7] sm:text-sm">
          RAMIL AOANAN
        </span>
        <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.16em] text-white/45 sm:text-[9px]">
          Independent Web Developer
        </span>
      </span>
    </Link>
  );
}

function PaperRocket() {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <circle
        cx="120"
        cy="120"
        r="95"
        stroke="#F5F0E7"
        strokeOpacity=".12"
        strokeDasharray="3 8"
      />
      <circle cx="120" cy="120" r="70" stroke="#F15A36" strokeOpacity=".3" />
      <path
        d="M122 45C145 63 162 91 165 120L120 165L75 120C79 91 97 63 122 45Z"
        fill="#F15A36"
      />
      <path
        d="M122 45C145 63 162 91 165 120L120 165L75 120C79 91 97 63 122 45Z"
        stroke="#F5F0E7"
        strokeOpacity=".6"
        strokeWidth="1.5"
      />
      <circle cx="120" cy="102" r="15" fill="#121516" />
      <circle cx="120" cy="102" r="9" fill="#F5F0E7" />
      <path
        d="M75 120L55 145L96 143L120 165L144 143L185 145L165 120"
        fill="#F5F0E7"
      />
      <path
        d="M96 143L101 171L120 190L139 171L144 143L120 165L96 143Z"
        fill="#F15A36"
      />
      <path
        d="M110 184L120 205L130 184"
        stroke="#F5F0E7"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <path
        d="M47 76L53 82M53 76L47 82M183 61L189 67M189 61L183 67M186 166L192 172M192 166L186 172"
        stroke="#F15A36"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <circle cx="61" cy="175" r="3" fill="#F5F0E7" />
      <circle cx="179" cy="93" r="3" fill="#F5F0E7" />
    </svg>
  );
}

function CodeCard() {
  return (
    <div className="relative w-full max-w-[330px] overflow-hidden rounded-sm border border-white/10 bg-[#191C1D] shadow-2xl shadow-black/30">
      <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-[#F15A36]" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/10" />
        </div>
        <span className="text-[9px] uppercase tracking-[0.16em] text-white/35">
          page.tsx
        </span>
      </div>

      <div className="space-y-3 p-5 font-mono text-[11px] leading-relaxed">
        <p className="text-white/30">{"// A thoughtful digital experience"}</p>
        <p>
          <span className="text-[#F15A36]">const</span>{" "}
          <span className="text-[#F5F0E7]">approach</span>{" "}
          <span className="text-white/50">=</span>{" "}
          <span className="text-[#F5F0E7]">{"{"}</span>
        </p>
        <p className="pl-4">
          <span className="text-white/55">design:</span>{" "}
          <span className="text-[#D8B9A2]">"intentional"</span>,
        </p>
        <p className="pl-4">
          <span className="text-white/55">code:</span>{" "}
          <span className="text-[#D8B9A2]">"maintainable"</span>,
        </p>
        <p className="pl-4">
          <span className="text-white/55">experience:</span>{" "}
          <span className="text-[#D8B9A2]">"user-first"</span>,
        </p>
        <p className="text-[#F5F0E7]">{"};"}</p>
        <div className="mt-4 flex items-center gap-2 border-t border-white/[0.08] pt-4 text-[10px] text-white/40">
          <CheckCircle2 size={13} className="text-[#F15A36]" />
          Built with intention
        </div>
      </div>
    </div>
  );
}

export default function StoryScenes() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          ".ss-reveal, .ss-hero-kicker, .ss-hero-name-line, .ss-hero-art",
          { clearProps: "all" },
        );
        return;
      }

      gsap.from(".ss-hero-kicker", {
        opacity: 0,
        y: 18,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.from(".ss-hero-name-line", {
        opacity: 0,
        y: 35,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.25,
      });

      gsap.from(".ss-hero-art", {
        opacity: 0,
        y: 35,
        scale: 0.96,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".ss-hero-meta", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.6,
      });

      gsap.utils.toArray<HTMLElement>(".ss-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".ss-scene-visual").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 35, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".ss-project-card").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              once: true,
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={rootRef}
      className="ss-page relative isolate overflow-hidden bg-[#121516] text-[#F5F0E7] selection:bg-[#F15A36] selection:text-[#121516]"
    >
      {/* Ambient background and subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-[#F15A36]/[0.09] blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,240,231,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,231,.25) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#121516_100%)]" />
      </div>

      {/* Navigation */}
      <header className="relative z-30 mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14">
        <BrandMark />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex"
        >
          <Link
            href="#story"
            className="text-[11px] font-medium text-white/55 transition-colors hover:text-[#F5F0E7]"
          >
            Story
          </Link>
          <Link
            href="#skills"
            className="text-[11px] font-medium text-white/55 transition-colors hover:text-[#F5F0E7]"
          >
            Skills
          </Link>
          <Link
            href="#work"
            className="text-[11px] font-medium text-white/55 transition-colors hover:text-[#F5F0E7]"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-[11px] font-medium text-white/55 transition-colors hover:text-[#F5F0E7]"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden items-center gap-2 rounded-sm bg-[#F15A36] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#121516] transition-colors hover:bg-[#F5F0E7] sm:inline-flex"
          >
            Let&apos;s talk <ArrowUpRight size={14} />
          </Link>
          <Link
            href="#contact"
            aria-label="Go to contact section"
            className="flex size-10 items-center justify-center rounded-sm border border-white/10 text-[#F5F0E7] transition-colors hover:border-[#F15A36] hover:text-[#F15A36] md:hidden"
          >
            <Menu size={18} />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[calc(100svh-81px)] w-full max-w-[1600px] flex-col justify-center overflow-hidden px-5 pb-16 pt-10 sm:px-8 sm:pb-20 lg:px-14"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[43%] z-0 w-full -translate-x-1/2 -translate-y-1/2 select-none text-center"
        >
          <span className="ss-hero-name-line block whitespace-nowrap text-[19vw] font-black uppercase leading-[0.76] tracking-[-0.09em] text-[#F5F0E7]/[0.07] sm:text-[16vw] lg:text-[13vw]">
            RAMIL
          </span>
          <span className="ss-hero-name-line mt-3 block whitespace-nowrap text-[16vw] font-black uppercase leading-[0.85] tracking-[-0.085em] text-[#F15A36]/20 sm:text-[13vw] lg:text-[11.5vw]">
            AOANAN
          </span>
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1320px] items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-8">
          <div className="relative z-20 order-2 max-w-[650px] lg:order-1">
            <div className="ss-hero-kicker mb-7 flex items-center gap-3">
              <span className="size-2 rounded-full bg-[#F15A36] shadow-[0_0_16px_rgba(241,90,54,.7)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                Independent Web Developer / Philippines
              </span>
            </div>

            <h1 className="ss-reveal max-w-[720px] text-[clamp(3.4rem,8vw,7.7rem)] font-black uppercase leading-[0.84] tracking-[-0.075em]">
              Building
              <br />
              for the <span className="text-[#F15A36]">better</span>
              <br />
              web<span className="text-[#F15A36]">.</span>
            </h1>

            <p className="ss-reveal mt-8 max-w-[470px] text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              I&apos;m Ramil — a web developer who brings together thoughtful
              design, modern technology, and practical solutions to create
              digital experiences that work.
            </p>

            <div className="ss-reveal mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#work"
                className="group inline-flex items-center gap-3 rounded-sm bg-[#F15A36] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[#121516] transition-colors hover:bg-[#F5F0E7]"
              >
                Explore my work
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#story"
                className="inline-flex items-center gap-2 rounded-sm border border-white/15 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#F5F0E7] transition-colors hover:border-[#F15A36] hover:text-[#F15A36]"
              >
                Get to know me
              </Link>
            </div>

            <div className="ss-hero-meta mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-lg font-black tracking-tight text-[#F5F0E7]">
                  05+
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/40">
                  Years in web development
                </p>
              </div>
              <div>
                <p className="text-lg font-black tracking-tight text-[#F5F0E7]">
                  React
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/40">
                  Modern frontend
                </p>
              </div>
              <div>
                <p className="text-lg font-black tracking-tight text-[#F5F0E7]">
                  Open
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/40">
                  To opportunities
                </p>
              </div>
            </div>
          </div>

          <div className="ss-hero-art relative order-1 mx-auto flex w-full max-w-[520px] items-center justify-center lg:order-2 lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 aspect-square w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#F15A36]/25"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[45%] aspect-square w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F15A36]/15 blur-[75px]"
            />

            <div className="relative z-10 aspect-[4/5] w-[90%] max-w-[490px]">
              <Image
                src="/images/profile.png"
                alt="Ramil Aoanan, web developer"
                fill
                priority
                sizes="(max-width: 1024px) 75vw, 390px"
                className="object-contain object-bottom"
              />
            </div>

            <div className="absolute bottom-[8%] left-[-20%] z-20 hidden sm:block">
              <CodeCard />
            </div>

            <div className="absolute right-0 top-[12%] z-20 flex items-center gap-3 rounded-sm border border-white/10 bg-[#191C1D]/90 px-4 py-3 backdrop-blur-md">
              <span className="flex size-9 items-center justify-center rounded-sm bg-[#F15A36]/15 text-[#F15A36]">
                <Braces size={18} />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.08em]">
                  Built with purpose
                </p>
                <p className="mt-1 text-[9px] text-white/45">
                  Design meets technology
                </p>
              </div>
            </div>

            <div className="absolute bottom-[5%] right-[2%] z-20 flex items-center gap-2 rounded-sm border border-white/10 bg-[#191C1D]/90 px-3 py-3 backdrop-blur-md">
              <span className="size-2 rounded-full bg-[#F15A36]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/70">
                Available for opportunities
              </span>
            </div>
          </div>
        </div>

        <Link
          href="#story"
          className="ss-hero-meta relative z-10 mx-auto mt-10 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-[#F15A36]"
        >
          <ArrowDown size={14} />
          Scroll to explore
        </Link>
      </section>

      {/* Story introduction */}
      <section
        id="story"
        className="relative border-t border-white/[0.07] bg-[#171A1B] px-5 py-24 sm:px-8 sm:py-32 lg:px-14"
      >
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="ss-reveal">
            <SectionLabel number="01">The person behind the code</SectionLabel>
            <p className="max-w-sm text-sm leading-7 text-white/50">
              A little about the person, the process, and the thinking behind
              the work.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-sm border border-[#F15A36]/30 bg-[#F15A36]/10 text-[#F15A36]">
                <Code2 size={21} />
              </div>
              <div>
                <p className="text-sm font-bold">Ramil Aoanan</p>
                <p className="mt-1 text-xs text-white/45">
                  Web Developer & Technical Enthusiast
                </p>
              </div>
            </div>
          </div>

          <div className="ss-reveal">
            <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">
              I believe the best websites bring{" "}
              <span className="text-[#F15A36]">clarity</span> to ideas.
            </h2>
            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/60 sm:text-base">
              For me, web development is about more than writing code. It is
              about understanding what a website needs to accomplish, making
              information easier to explore, and bringing everything together in
              a way that feels cohesive.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-white/60 sm:text-base">
              I enjoy combining frontend development with practical problem
              solving, learning new tools, and refining the details that make a
              digital experience feel complete.
            </p>
          </div>
        </div>
      </section>

      {/* Story scenes */}
      <section className="relative px-5 py-24 sm:px-8 sm:py-32 lg:px-14">
        <div className="mx-auto max-w-[1320px]">
          <div className="ss-reveal mb-16 max-w-2xl">
            <SectionLabel number="02">How I approach the work</SectionLabel>
            <h2 className="text-3xl font-black tracking-[-0.05em] sm:text-5xl">
              From the first idea to the{" "}
              <span className="text-[#F15A36]">final detail.</span>
            </h2>
          </div>

          <div className="space-y-5 sm:space-y-7">
            {scenes.slice(0, 7).map((scene, index) => {
              const Icon = scene.icon;
              const reverse = index % 2 === 1;

              return (
                <article
                  key={scene.number}
                  className={`grid overflow-hidden rounded-sm border border-white/[0.08] bg-[#191C1D] md:grid-cols-2 ${
                    reverse ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="ss-scene-visual relative flex min-h-[270px] flex-col justify-between overflow-hidden bg-[#171A1B] p-7 sm:min-h-[330px] sm:p-10">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-[0.07]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(245,240,231,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,231,.4) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.15em] text-[#F15A36]">
                        {scene.number}
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.17em] text-white/35">
                        {scene.eyebrow}
                      </span>
                    </div>

                    <div className="relative z-10 flex items-end justify-between gap-4">
                      <div className="max-w-[300px]">
                        <p className="text-[clamp(1.8rem,4vw,3.4rem)] font-black leading-[0.95] tracking-[-0.06em]">
                          {scene.title[0]}
                          <br />
                          <span className="text-[#F15A36]">
                            {scene.title[1]}
                          </span>
                        </p>
                      </div>

                      <div className="flex size-14 shrink-0 items-center justify-center rounded-sm border border-[#F15A36]/30 bg-[#F15A36]/10 text-[#F15A36] sm:size-16">
                        <Icon size={27} strokeWidth={1.5} />
                      </div>
                    </div>

                    <div className="absolute -bottom-10 -right-7 text-[170px] font-black leading-none tracking-[-0.1em] text-white/[0.025]">
                      {scene.number}
                    </div>
                  </div>

                  <div className="ss-scene-content flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                    <span className="mb-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#F15A36]">
                      {scene.eyebrow}
                    </span>

                    <h3 className="text-2xl font-bold leading-tight tracking-[-0.04em] sm:text-3xl">
                      {scene.title[0]}
                      <br />
                      {scene.title[1]}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-white/55">
                      {scene.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {scene.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm border border-white/10 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.08em] text-white/55"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools and skills */}
      <section
        id="skills"
        className="relative border-y border-white/[0.07] bg-[#171A1B] px-5 py-24 sm:px-8 sm:py-32 lg:px-14"
      >
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="ss-reveal">
            <SectionLabel number="03">The toolkit</SectionLabel>
            <h2 className="max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl">
              The right tools for{" "}
              <span className="text-[#F15A36]">useful work.</span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-white/55">
              I work with modern frontend technologies and content tools to
              build responsive websites, component-based interfaces, and
              content-driven experiences. My toolkit continues to evolve as I
              learn and build.
            </p>

            <Link
              href="#work"
              className="mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F15A36] transition-colors hover:text-[#F5F0E7]"
            >
              See selected projects <ArrowRight size={15} />
            </Link>
          </div>

          <div className="ss-reveal rounded-sm border border-white/[0.08] bg-[#191C1D] p-6 sm:p-9">
            <div className="mb-7 flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div>
                <p className="text-sm font-bold">Technology stack</p>
                <p className="mt-1 text-xs text-white/40">
                  Tools I use and explore
                </p>
              </div>
              <Terminal size={20} className="text-[#F15A36]" />
            </div>

            <div className="flex flex-wrap gap-2.5">
              {technologies.map((technology, index) => (
                <span
                  key={technology}
                  className={`inline-flex items-center gap-2 rounded-sm border px-3 py-3 text-xs transition-colors hover:border-[#F15A36]/60 ${
                    index === 2 || index === 4
                      ? "border-[#F15A36]/35 bg-[#F15A36]/10 text-[#F5F0E7]"
                      : "border-white/10 bg-[#121516] text-white/65"
                  }`}
                >
                  <span
                    className={`size-1.5 rounded-full ${
                      index === 2 || index === 4
                        ? "bg-[#F15A36]"
                        : "bg-white/30"
                    }`}
                  />
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-sm border border-white/[0.08] bg-[#121516] p-4">
                <Code2 size={18} className="text-[#F15A36]" />
                <p className="mt-4 text-xs font-bold">Frontend</p>
                <p className="mt-1 text-[10px] leading-5 text-white/40">
                  Interfaces and responsive layouts
                </p>
              </div>
              <div className="rounded-sm border border-white/[0.08] bg-[#121516] p-4">
                <Layers3 size={18} className="text-[#F15A36]" />
                <p className="mt-4 text-xs font-bold">CMS & Content</p>
                <p className="mt-1 text-[10px] leading-5 text-white/40">
                  Structured content and publishing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="work"
        className="relative px-5 py-24 sm:px-8 sm:py-32 lg:px-14"
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="ss-reveal mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel number="04">Selected work</SectionLabel>
              <h2 className="max-w-2xl text-4xl font-black tracking-[-0.055em] sm:text-6xl">
                Ideas turned into{" "}
                <span className="text-[#F15A36]">projects.</span>
              </h2>
            </div>

            <Link
              href="https://github.com/ramilinator"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/60 transition-colors hover:text-[#F15A36]"
            >
              <Code2 size={15} />
              View GitHub
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.number}
                  className="ss-project-card group flex min-h-[350px] flex-col rounded-sm border border-white/[0.08] bg-[#191C1D] p-6 transition-colors duration-300 hover:border-[#F15A36]/40 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-bold tracking-[0.15em] text-[#F15A36]">
                      {project.number}
                    </span>
                    <span className="flex size-11 items-center justify-center rounded-sm border border-white/10 bg-[#121516] text-[#F15A36] transition-colors group-hover:border-[#F15A36]/40">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                  </div>

                  <p className="mt-9 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/40">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-white/50">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-sm border border-white/[0.08] px-2.5 py-1.5 text-[9px] text-white/55"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#F15A36] transition-colors hover:text-[#F5F0E7]"
                  >
                    Explore project
                    <MoveUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative border-t border-white/[0.07] bg-[#171A1B] px-5 py-24 sm:px-8 sm:py-32 lg:px-14"
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="ss-reveal relative overflow-hidden rounded-sm border border-white/[0.09] bg-[#191C1D] p-7 sm:p-12 lg:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-[#F15A36]/10 blur-[90px]"
            />

            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_0.6fr]">
              <div>
                <SectionLabel number="05">
                  Open to what&apos;s next
                </SectionLabel>

                <h2 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                  Let&apos;s build something{" "}
                  <span className="text-[#F15A36]">meaningful.</span>
                </h2>

                <p className="mt-7 max-w-xl text-sm leading-8 text-white/55 sm:text-base">
                  I&apos;m open to discussing web development opportunities,
                  collaborations, and projects where I can contribute, continue
                  learning, and create something useful.
                </p>

                <Link
                  href="mailto:your-email@example.com"
                  className="mt-8 inline-flex items-center gap-3 rounded-sm bg-[#F15A36] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.13em] text-[#121516] transition-colors hover:bg-[#F5F0E7]"
                >
                  <Mail size={15} />
                  Get in touch
                  <ArrowUpRight size={14} />
                </Link>
              </div>

              <div className="relative mx-auto aspect-square w-full max-w-[260px]">
                <div className="absolute inset-0 rounded-full border border-dashed border-[#F15A36]/40" />
                <div className="absolute inset-[12%] rounded-full border border-white/10" />
                <div className="absolute inset-[24%] rounded-full bg-[#F15A36]/10" />
                <div className="absolute inset-[30%]">
                  <PaperRocket />
                </div>
                <span className="absolute left-0 top-[18%] size-2 rounded-full bg-[#F15A36]" />
                <span className="absolute bottom-[17%] right-[3%] size-1.5 rounded-full bg-[#F5F0E7]/70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-5 py-7 sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <BrandMark />

          <p className="text-[10px] text-white/35">
            © {new Date().getFullYear()} Ramil Aoanan. Built with intention.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/ramilinator"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-white/45 transition-colors hover:text-[#F15A36]"
            >
              <Code2 size={17} />
            </Link>
            <Link
              href="#home"
              aria-label="Back to top"
              className="flex size-9 items-center justify-center rounded-sm border border-white/10 text-white/50 transition-colors hover:border-[#F15A36] hover:text-[#F15A36]"
            >
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
