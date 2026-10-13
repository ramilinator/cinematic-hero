"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

      // Intro animation
      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.15,
      });

      intro
        .from("[data-topbar]", {
          y: -15,
          opacity: 0,
          duration: 0.6,
        })
        .from(
          "[data-portrait]",
          {
            y: 30,
            opacity: 0,
            scale: 0.97,
            duration: 0.9,
          },
          "-=0.2",
        )
        .from(
          "[data-stamp]",
          {
            scale: 0.7,
            opacity: 0,
            rotation: -12,
            duration: 0.65,
          },
          "-=0.4",
        );

      // Scroll-controlled name animation
      const nameTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      nameTimeline
        .fromTo(
          "[data-name-ramil]",
          {
            x: () => -window.innerWidth * 1.1,
          },
          {
            x: 0,
            ease: "none",
            duration: 1,
          },
          0,
        )
        .fromTo(
          "[data-name-aoanan]",
          {
            x: () => window.innerWidth * 1.1,
          },
          {
            x: 0,
            ease: "none",
            duration: 1,
          },
          0,
        );

      // Ambient background motion
      gsap.to("[data-sun]", {
        rotation: 360,
        duration: 50,
        repeat: -1,
        ease: "none",
      });

      gsap.to("[data-orbit-glow]", {
        scale: 1.12,
        opacity: 0.6,
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
      className="relative isolate min-h-screen overflow-hidden bg-[#F2E8D5] text-[#29251F] selection:bg-[#D94D2B] selection:text-[#FFF5E5]"
    >
      {/* PAPER + PRINT TEXTURE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Warm paper background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,#FFF8E9_0%,#F2E8D5_75%,#E9DCC5_100%)]" />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(#514538 1px, transparent 1px), linear-gradient(90deg, #514538 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "linear-gradient(to bottom, black, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />

        {/* Print grain / halftone */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(#6E5942 0.65px, transparent 0.8px)",
            backgroundSize: "5px 5px",
          }}
        />

        {/* Orange glow */}
        <div
          data-orbit-glow
          className="absolute left-1/2 top-[35%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#D94D2B]/15 blur-[85px] sm:h-[500px] sm:w-[500px]"
        />

        {/* Giant decorative sun */}
        <div
          data-sun
          className="absolute -right-28 top-[20%] -z-0 hidden h-[390px] w-[390px] rounded-full border-[1px] border-[#D94D2B]/25 sm:block lg:right-[7%] lg:top-[16%]"
        >
          <div className="absolute inset-5 rounded-full border border-dashed border-[#D94D2B]/40" />
          <div className="absolute inset-12 rounded-full border border-[#D94D2B]/20" />
          <div className="absolute inset-0 rounded-full bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_9px,#D94D2B_10px,#D94D2B_11px)] opacity-20" />
        </div>

        {/* Print registration marks */}
        <div className="absolute left-5 top-5 h-5 w-5 sm:left-8 sm:top-8">
          <span className="absolute left-1/2 h-full w-px bg-[#29251F]/50" />
          <span className="absolute top-1/2 h-px w-full bg-[#29251F]/50" />
          <span className="absolute inset-[5px] rounded-full border border-[#29251F]/50" />
        </div>

        <div className="absolute right-5 top-5 h-5 w-5 sm:right-8 sm:top-8">
          <span className="absolute left-1/2 h-full w-px bg-[#29251F]/50" />
          <span className="absolute top-1/2 h-px w-full bg-[#29251F]/50" />
          <span className="absolute inset-[5px] rounded-full border border-[#29251F]/50" />
        </div>
      </div>

      {/* OUTER POSTER FRAME */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-5 pb-5 pt-5 sm:px-8 sm:pb-8 sm:pt-7 lg:px-12">
        {/* TOP BRAND BAR */}
        <header
          data-topbar
          className="relative z-30 flex items-center justify-between gap-4 border-y-2 border-[#29251F] py-3"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border-2 border-[#29251F] bg-[#D94D2B] text-lg font-black tracking-[-0.1em] text-[#FFF4E2] shadow-[3px_3px_0_#29251F]">
              RA
            </div>

            <div className="leading-tight">
              <p className="text-[11px] font-black uppercase tracking-[0.17em] sm:text-xs">
                Ramil Aoanan
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#746653] sm:text-[10px]">
                Independent Web Developer
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] md:flex">
            <span className="h-2 w-2 rounded-full bg-[#D94D2B]" />
            Philippines
            <span className="mx-2 text-[#A69780]">/</span>
            Est. in the digital age
          </div>

          <div className="border border-[#29251F] px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] sm:text-[10px]">
            Portfolio
            <span className="ml-2 text-[#D94D2B]">No. 001</span>
          </div>
        </header>

        {/* MAIN POSTER */}
        <section className="relative flex min-h-[calc(100svh-115px)] flex-1 flex-col justify-end">
          {/* EDITORIAL LABEL */}
          <div className="absolute left-0 top-8 z-20 max-w-[155px] sm:top-12 sm:max-w-[230px]">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-7 bg-[#D94D2B]" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] sm:text-[10px]">
                Design / Develop
              </span>
            </div>

            <p className="text-xs font-bold leading-relaxed sm:text-sm">
              Thoughtful digital
              <br />
              experiences, built
              <br />
              with purpose.
            </p>
          </div>

          {/* VERTICAL SIDE LABEL */}
          <div className="absolute right-0 top-[36%] z-20 hidden -translate-y-1/2 sm:block">
            <p className="[writing-mode:vertical-rl] font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#746653]">
              Creative technology · Vol. 01
            </p>
          </div>

          {/* PORTRAIT + TYPOGRAPHY */}
          <div
            data-portrait
            className="relative isolate flex min-h-[76svh] w-full flex-1 items-end justify-center sm:min-h-[82svh] lg:min-h-[84svh]"
          >
            {/* BIG RETRO HEADLINE */}
            <div
              data-heading
              className="pointer-events-none absolute inset-x-0 bottom-[12%] mx-auto text-center"
            >
              <p className="mb-5 font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-[#746653] sm:text-xs">
                The person behind the pixels
              </p>

              <h1 className="relative whitespace-nowrap text-[19vw] font-black leading-[0.72] tracking-[-0.105em] sm:text-[17vw] lg:text-[15.5vw]">
                <span
                  data-name-ramil
                  className="relative z-0 block text-[#29251F] will-change-transform"
                >
                  RAMIL
                </span>

                <span
                  data-name-aoanan
                  className="relative z-20 mt-2 block text-[#D94D2B] will-change-transform"
                >
                  AOANAN<span className="text-[#29251F]">.</span>
                </span>
              </h1>
            </div>

            {/* HALFTONE DISC BEHIND PORTRAIT */}
            <div
              aria-hidden="true"
              className="absolute bottom-[14%] left-1/2 -z-10 aspect-square w-[65vw] max-w-[620px] -translate-x-1/2 rounded-full border border-[#D94D2B]/50 bg-[radial-gradient(#D94D2B_0.8px,transparent_1px)] bg-[length:7px_7px] opacity-35 sm:bottom-[12%]"
            />

            {/* PORTRAIT */}
            <Image
              src="/images/profile.png"
              alt="Portrait of Ramil Aoanan"
              width={850}
              height={1050}
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 850px"
              className="relative z-10 h-[72svh] w-auto max-w-[100%] object-contain object-bottom drop-shadow-[8px_8px_0px_rgba(41,37,31,0.10)] sm:h-[86svh] lg:h-[90svh]"
            />

            {/* RETRO STAMP */}
            <div
              data-stamp
              className="absolute bottom-[25%] right-[3%] z-20 flex h-[94px] w-[94px] rotate-[10deg] flex-col items-center justify-center rounded-full border-2 border-[#FFF4E2] bg-[#D94D2B] text-center text-[#FFF4E2] outline outline-2 outline-[#D94D2B] outline-offset-4 sm:bottom-[30%] sm:right-[12%] sm:h-[124px] sm:w-[124px]"
            >
              <span className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] sm:text-[10px]">
                Made for
              </span>
              <span className="my-1 text-xl font-black uppercase leading-none tracking-[-0.07em] sm:text-2xl">
                The Web
              </span>
              <span className="font-mono text-[8px] font-bold uppercase tracking-[0.18em] sm:text-[10px]">
                Since day one
              </span>
            </div>

            {/* LEFT SIDE NUMBER */}
            <div className="absolute bottom-[17%] left-0 z-20 hidden sm:block">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[#746653]">
                Fig. 001
              </p>
              <div className="mt-2 h-12 w-px bg-[#D94D2B]" />
            </div>
          </div>

          {/* BOTTOM CAPTION */}
          <footer className="relative z-30 mt-2 flex flex-wrap items-center justify-between gap-3 border-t-2 border-[#29251F] py-3">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.12em] sm:text-[10px] sm:tracking-[0.18em]">
              Code with character. Design with intent.
            </p>

            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[#746653] sm:text-[10px]">
                React · Next.js · Creative Web
              </span>
              <span className="flex h-7 w-7 items-center justify-center border border-[#29251F] text-sm font-bold">
                ↗
              </span>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
