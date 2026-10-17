"use client";
import NavBar from "@/components/portfolio/Navbar";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
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

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "WordPress",
  "Strapi",
];

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

export default function PortfolioHeroDark() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const portrait = hero.querySelector<HTMLElement>("[data-hero-portrait]");
      const kicker = hero.querySelector<HTMLElement>("[data-hero-kicker]");
      const headline = hero.querySelector<HTMLElement>("[data-hero-headline]");
      const intro = hero.querySelector<HTMLElement>("[data-hero-intro]");
      const actions = hero.querySelector<HTMLElement>("[data-hero-actions]");
      const codeCard = hero.querySelector<HTMLElement>("[data-hero-code]");
      const toolkit = hero.querySelector<HTMLElement>("[data-hero-toolkit]");
      const meta = hero.querySelector<HTMLElement>("[data-hero-meta]");
      const scrollPrompt =
        hero.querySelector<HTMLElement>("[data-hero-scroll]");

      const leftItems = [kicker, headline, intro, actions].filter(
        (item): item is HTMLElement => item !== null,
      );
      const rightItems = [codeCard, toolkit].filter(
        (item): item is HTMLElement => item !== null,
      );
      const allItems = [
        portrait,
        ...leftItems,
        ...rightItems,
        meta,
        scrollPrompt,
      ].filter((item): item is HTMLElement => item !== null);

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(allItems, {
          clearProps: "all",
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
        });
        return;
      }

      // The portrait is the focal point and always reveals before the side content.
      gsap.set(portrait, {
        autoAlpha: 0,
        y: 44,
        scale: 0.92,
        transformOrigin: "50% 100%",
      });
      gsap.set(leftItems, { autoAlpha: 0, x: -100 });
      gsap.set(rightItems, { autoAlpha: 0, x: 100 });
      gsap.set([meta, scrollPrompt], { autoAlpha: 0, y: 24 });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=170%",
          scrub: 0.8,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(portrait, { autoAlpha: 1, y: 0, scale: 1, duration: 1.2 })
        .to(kicker, { autoAlpha: 1, x: 0, duration: 0.55 }, "-=0.05")
        .to(headline, { autoAlpha: 1, x: 0, duration: 0.8 }, "-=0.08")
        .to(intro, { autoAlpha: 1, x: 0, duration: 0.6 }, "-=0.1")
        .to(actions, { autoAlpha: 1, x: 0, duration: 0.55 }, "-=0.08")
        .to(codeCard, { autoAlpha: 1, x: 0, duration: 0.65 }, "-=0.05")
        .to(toolkit, { autoAlpha: 1, x: 0, duration: 0.65 }, "-=0.16")
        .to(meta, { autoAlpha: 1, y: 0, duration: 0.55 }, "-=0.05")
        .to(scrollPrompt, { autoAlpha: 1, y: 0, duration: 0.45 }, "-=0.05");
    }, hero);

    return () => context.revert();
  }, []);

  return (
    <main
      id="home"
      className="ss-page relative isolate bg-[#121516] text-[#F5F0E7] selection:bg-[#F15A36] selection:text-[#121516]"
    >
      {/* Ambient background and subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F15A36]/[0.11] blur-[150px]" />
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

      <NavBar />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative mx-auto flex min-h-[calc(100svh-81px)] w-full max-w-[1600px] flex-col justify-center overflow-hidden px-5 pb-16 pt-10 sm:px-8 sm:pb-20 lg:px-14"
      >
        <div className="relative flex flex-col justify-between pb-0 md:flex-row md:pb-18">
          {/* LEFT CONTENT */}
          <div className="relative z-20 flex flex-col items-start">
            <div className="max-w-[520px]">
              <div
                data-hero-kicker
                className="ss-hero-kicker mb-4 ml-2 flex items-center gap-3"
              >
                <span className="size-2 rounded-full bg-white shadow-[0_0_16px_rgba(241,90,54,.7)]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  Independent Web Developer / Philippines
                </span>
              </div>

              <h1
                data-hero-headline
                className="ss-reveal max-w-[720px] text-[clamp(3.4rem,8vw,7.7rem)] font-black uppercase leading-[0.75] tracking-[-0.075em]"
              >
                Building
                <br />
                for the <span className="text-[#F15A36]">better</span>
                <br />
                web<span className="text-[#F15A36]">.</span>
              </h1>

              <p
                data-hero-intro
                className="mt-5 max-w-[390px] text-sm leading-7 text-[#F5F0E7]/65 sm:text-base"
              >
                I&apos;m Ramil — I bring thoughtful design, modern technology,
                and practical solutions together to create meaningful digital
                experiences.
              </p>

              {/* ACTIONS */}
              <div
                data-hero-actions
                className="ss-reveal mt-8 flex flex-wrap items-center gap-3"
              >
                <Link
                  href="#work"
                  className="group inline-flex items-center gap-3 rounded-sm bg-white px-5 py-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[#121516] transition-colors"
                >
                  Explore my work
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="#story"
                  className="inline-flex items-center gap-2 rounded-sm border border-white/100 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#F5F0E7] transition-colors hover:border-[#F15A36] hover:text-[#F15A36]"
                >
                  Get to know me
                </Link>
              </div>
            </div>
          </div>

          <div
            data-hero-portrait
            className="relative pointer-events-none mt-6 md:absolute md:inset-0 md:flex md:items-end md:justify-center md:mt-0"
          >
            {/* Portrait in front of the name */}

            <div className="relative z-10 mx-auto flex aspect-[4/5] w-[78%] max-w-[490px] items-end justify-center md:w-[38%]">
              <Image
                src="/images/profile.png"
                alt="Ramil Aoanan, web developer"
                fill
                priority
                sizes="(max-width: 1024px) 75vw, 390px"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="absolute bottom-10 right-0 z-20 flex flex-col items-center gap-7 md:relative md:bottom-auto md:ml-auto md:items-end">
            {/* CODE CARD */}

            <div
              data-hero-code
              className="relative hidden w-full max-w-[330px] overflow-hidden rounded-sm border border-white/10 transparent shadow-2xl shadow-black/30 sm:block"
            >
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
                <p className="text-white/30">
                  {"// A thoughtful digital experience"}
                </p>
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

            {/* TECHNOLOGIES CARD */}
            <div
              data-hero-toolkit
              className="relative w-full max-w-[330px] p-5 overflow-hidden rounded-sm border border-white/10 transparent shadow-2xl shadow-black/30 hidden sm:block"
            >
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
                    className="border border-[#F5F0E7]/10  px-3 py-2 text-[10px] font-medium text-[#F5F0E7]/75 transition-colors duration-200 hover:border-[#F15A36]/60 hover:text-[#F15A36] sm:text-xs"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          data-hero-meta
          className="ss-hero-meta border-t border-white/10 pt-6"
        >
          <div className="flex flex-wrap gap-x-8 gap-y-4 ">
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

          <div className="flex justify-end">
            {" "}
            <Link
              href="#story"
              data-hero-scroll
              className="ss-hero-meta relative z-10 mx-auto mt-10 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-[#F15A36]"
            >
              <ArrowDown size={14} />
              Scroll to explore
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
