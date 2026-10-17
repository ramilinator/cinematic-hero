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

import ContactForm from "@/components/portfolio/Contact";

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
    category: "CMS / WEB DEVELOPMENT",
    title: "Modern Blog",
    description:
      "A modern blog platform built with Next.js and Strapi, featuring dynamic content and responsive layouts.",
    stack: ["Next.js", "Strapi", "Tailwind CSS"],
    image: "/images/nextjs.webp",
    href: "https://nextjs-modern-blog-site.vercel.app/",
    icon: Code2,
  },
  {
    number: "02",
    category: "FRONTEND DEVELOPMENT",
    title: "Movie Discovery",
    description:
      "A movie discovery application that helps users explore films through an API-powered interface.",
    stack: ["React", "JavaScript", "REST API"],
    image:
      "https://images.unsplash.com/photo-1730830741396-ffb85bb2e983?q=80&w=1470&auto=format&fit=crop",
    href: "https://movie-app-react-tau-pearl.vercel.app/",
    icon: Globe2,
  },

  {
    number: "03",
    category: "E-COMMERCE / FRONTEND DEVELOPMENT",
    title: "Ecommerce App",
    description:
      "A React-based e-commerce application built to provide an intuitive online shopping experience, featuring product browsing, a clean user interface, and interactive shopping functionality.",
    stack: ["React", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1758186342771-b36aa21f8494",
    href: "https://ecommerce-react-six-nu.vercel.app/",
    icon: Code2,
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
      <span className="flex size-10 items-center justify-center rounded-sm bg-white text-sm font-black tracking-[-0.1em] text-[#121516] transition-transform duration-300 group-hover:rotate-[-5deg]">
        RA.
      </span>

      <span className="flex flex-col">
        <span className="text-[12px] font-black uppercase leading-tight tracking-[0.12em] text-[#F5F0E7] sm:text-sm">
          RAMIL AOANAN
        </span>
        <span className="mt-1 text-[8px] font-medium uppercase tracking-[.5em] text-white/45 sm:text-[9px]">
          Web Developer
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
    <div className="relative w-full max-w-[330px] px-3 py-3 overflow-hidden rounded-sm border border-white/10 bg-[#191C1D] shadow-2xl shadow-black/30">
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

      {/* Story introduction */}
      <section
        id="story"
        className="relative border-t border-white/[0.07] bg-[#171A1B] px-5 py-24 sm:px-8 sm:py-32 lg:px-14"
      >
        <div className="mx-auto max-w-[1320px]">
          {/* Section heading */}
          <div className="mb-12 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between lg:mb-16">
            <div>
              <SectionLabel number="01">
                The person behind the code
              </SectionLabel>
              <p className="mt-4 text-sm text-white/45">
                A little about me, my process, and how I approach the web.
              </p>
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/30">
              ABOUT / RAMIL AOANAN
            </span>
          </div>

          {/* Main editorial layout */}
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Left: portrait and identity */}
            <div className="ss-reveal min-w-0">
              <div className="group relative h-[300px] w-full overflow-hidden rounded-sm border border-white/[0.08] bg-[#202425] sm:h-[380px] lg:h-[450px]">
                <Image
                  src="/images/developer.jpg"
                  alt="Ramil Aoanan, web developer"
                  fill
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Right: introduction and details */}
            <div className="ss-reveal lg:pt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F15A36]">
                A PRACTICAL APPROACH TO THE WEB
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.055em] text-[#F5F0E7] sm:text-5xl xl:text-6xl">
                Good websites make ideas{" "}
                <span className="text-[#F15A36]">clear.</span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
                I believe web development is about more than writing code. It is
                about understanding what a website needs to accomplish, making
                information easier to explore, and bringing everything together
                into a cohesive experience.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
                I enjoy combining frontend development with practical
                problem-solving, exploring modern tools, and refining the
                details that make a digital product feel intuitive and complete.
              </p>
            </div>
          </div>
          {/* Key details */}
          <div className="mt-10 grid grid-cols-1 border-y border-white/10 sm:grid-cols-2">
            <div className="border-b border-white/10 py-5 sm:border-r sm:border-b-0 sm:pr-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/40">
                Focus
              </p>
              <p className="mt-2 text-sm font-semibold text-[#F5F0E7]">
                Frontend Development
              </p>
              <p className="mt-2 text-xs leading-6 text-white/45">
                React, Next.js, responsive interfaces, and modern web
                technologies.
              </p>
            </div>

            <div className="py-5 sm:pl-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/40">
                Approach
              </p>
              <p className="mt-2 text-sm font-semibold text-[#F5F0E7]">
                Design meets function
              </p>
              <p className="mt-2 text-xs leading-6 text-white/45">
                Clear layouts, thoughtful details, and practical solutions.
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-7">
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white/40">
              Technologies I work with
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "JavaScript",
                "Tailwind CSS",
                "WordPress",
                "Strapi",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-sm border border-white/10 px-3 py-2 text-[10px] font-medium text-white/65 transition-colors hover:border-[#F15A36]/50 hover:text-[#F15A36]"
                >
                  {technology}
                </span>
              ))}
            </div>
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

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.number}
                  className="ss-project-card group flex min-h-full flex-col overflow-hidden rounded-sm border border-white/[0.08] bg-[#191C1D] transition-colors duration-300 hover:border-[#F15A36]/40"
                >
                  {/* Project thumbnail */}
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title}`}
                    className="relative block aspect-[16/9] overflow-hidden border-b border-white/[0.08] bg-[#121516]"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} website preview`}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    {/* Subtle image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#191C1D]/50 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-40" />

                    {/* Preview label */}
                    <span className="absolute bottom-3 left-3 rounded-sm border border-white/15 bg-[#121516]/80 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white/80 backdrop-blur-sm">
                      {project.category}
                    </span>

                    <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-sm border border-white/15 bg-[#121516]/80 text-[#F15A36] backdrop-blur-sm transition-colors group-hover:border-[#F15A36]/50">
                      <ArrowUpRight size={17} />
                    </span>
                  </Link>

                  {/* Project details */}
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-[0.15em] text-[#F15A36]">
                        {project.number}
                      </span>

                      <Icon
                        size={19}
                        strokeWidth={1.5}
                        className="text-white/40 transition-colors group-hover:text-[#F15A36]"
                      />
                    </div>

                    <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] sm:text-3xl">
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
                  </div>
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
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative px-5 py-7 sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
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
