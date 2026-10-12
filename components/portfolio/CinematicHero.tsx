"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Code2,
  Layers3,
  Rocket,
} from "lucide-react";

import "./CinematicHero.css";

gsap.registerPlugin(ScrollTrigger);

const storyItems = [
  {
    number: "01",
    eyebrow: "WHAT I DO",
    title: "I BUILD FOR THE WEB.",
    description:
      "Creating responsive, accessible interfaces that work beautifully across devices.",
    icon: Code2,
  },
  {
    number: "02",
    eyebrow: "HOW I THINK",
    title: "DESIGN MEETS FUNCTION.",
    description:
      "Turning ideas into practical digital experiences with clarity and purpose.",
    icon: Layers3,
  },
  {
    number: "03",
    eyebrow: "MY TOOLKIT",
    title: "MODERN BY DESIGN.",
    description:
      "Working with React, Next.js, TypeScript, Tailwind CSS, and headless CMS platforms.",
    icon: Braces,
  },
  {
    number: "04",
    eyebrow: "WHAT'S NEXT",
    title: "LET'S BUILD SOMETHING.",
    description:
      "I'm ready to contribute my skills, solve problems, and bring new ideas to life.",
    icon: Rocket,
  },
];

export default function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shipSceneRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(sectionRef);

      const stage = q(".ch-sticky")[0];
      const grid = q(".ch-grid");
      const orangeWash = q(".ch-ship-flash");
      const ship = q(".ch-ship-scene");
      const nameGroup = q(".ch-name-group");
      const ramil = q(".ch-name-ramil");
      const aoanan = q(".ch-name-aoanan");
      const portrait = q(".ch-portrait-scene");
      const stories = q(".ch-story-item");

      // Initial states
      gsap.set(ship, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
      });

      gsap.set(nameGroup, { autoAlpha: 1 });
      gsap.set(ramil, { x: "110vw", autoAlpha: 0 });
      gsap.set(aoanan, { x: "-110vw", autoAlpha: 0 });

      gsap.set(orangeWash, { autoAlpha: 0 });

      gsap.set(portrait, {
        autoAlpha: 0,
        scale: 0.12,
        transformOrigin: "center center",
      });

      gsap.set(stories, {
        autoAlpha: 0,
        y: 24,
        scale: 0.94,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: stage,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // SCENE 1 — Ship stays centered.
      // The moving grid creates the upward-flight illusion.
      tl.to(
        grid,
        {
          backgroundPositionY: "1800px",
          duration: 8.2,
          ease: "none",
        },
        0,
      );

      // SCENE 2 — Names enter, meet, then continue past each other.
      tl.to(
        ramil,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.65,
          ease: "power2.out",
        },
        1.2,
      );

      tl.to(
        aoanan,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.65,
          ease: "power2.out",
        },
        1.2,
      );

      // They meet at the center, then continue in their original directions.
      tl.to(
        ramil,
        {
          x: "-110vw",
          duration: 0.7,
          ease: "power2.in",
        },
        1.95,
      );

      tl.to(
        aoanan,
        {
          x: "110vw",
          duration: 0.7,
          ease: "power2.in",
        },
        1.95,
      );

      tl.to(
        nameGroup,
        {
          autoAlpha: 0,
          duration: 0.01,
        },
        2.65,
      );

      // SCENE 3 — Orange transition
      tl.to(
        grid,
        {
          backgroundColor: "#f16b3b",
          duration: 1.45,
          ease: "none",
        },
        2.4,
      );

      // SCENE 4 — Ship launches completely off-screen
      tl.to(
        ship,
        {
          y: "-160svh",
          scale: 0.55,
          autoAlpha: 0,
          duration: 1.2,
          ease: "power3.in",
        },
        4.0,
      );

      // Reveal the portrait
      tl.to(portrait, {
        autoAlpha: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      });

      const isMobile = window.matchMedia("(max-width: 600px)").matches;

      // Reveal each story after the portrait animation
      stories.forEach((item, index) => {
        gsap.set(item, {
          autoAlpha: 0,
          x: isMobile ? 0 : index % 2 === 0 ? -30 : 30,
          y: isMobile ? 14 : 0,
          scale: isMobile ? 0.98 : 1,
        });

        if (isMobile && index > 0) {
          tl.to(stories[index - 1], {
            autoAlpha: 0,
            y: -10,
            duration: 0.18,
            ease: "power1.in",
          });
        }

        tl.to(item, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ch-section"
      aria-label="Cinematic portfolio introduction"
    >
      <div className="ch-sticky">
        <div className="ch-grid" aria-hidden="true" />
        <div className="ch-grain" aria-hidden="true" />

        {/* Scene 1: spacecraft ascent */}
        <div ref={shipSceneRef} className="ch-ship-scene" aria-hidden="true">
          <div className="ch-ship-glow" />

          <svg
            className="ch-ship"
            viewBox="0 0 240 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main hull */}
            <path
              d="M120 14C91 49 75 93 75 159L120 207L165 159C165 93 149 49 120 14Z"
              fill="#F16B3B"
              stroke="#29251F"
              strokeWidth="5"
              strokeLinejoin="round"
            />

            {/* Cockpit */}
            <path
              d="M120 79C103 79 93 93 93 111C93 128 104 139 120 139C136 139 147 128 147 111C147 93 137 79 120 79Z"
              fill="#F7F0E5"
              stroke="#29251F"
              strokeWidth="5"
            />

            <path
              d="M105 104L135 104"
              stroke="#29251F"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Wings */}
            <path
              d="M76 137L28 181L23 241L94 190"
              fill="#F7F0E5"
              stroke="#29251F"
              strokeWidth="5"
              strokeLinejoin="round"
            />

            <path
              d="M164 137L212 181L217 241L146 190"
              fill="#F7F0E5"
              stroke="#29251F"
              strokeWidth="5"
              strokeLinejoin="round"
            />

            {/* Hull markings */}
            <path
              d="M98 160L98 182M120 169L120 195M142 160L142 182"
              stroke="#29251F"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Engine */}
            <path
              d="M98 195L98 239L120 266L142 239L142 195"
              fill="#F16B3B"
              stroke="#29251F"
              strokeWidth="5"
              strokeLinejoin="round"
            />

            <path
              d="M105 239L120 305L135 239"
              fill="#F6B84B"
              stroke="#29251F"
              strokeWidth="4"
              strokeLinejoin="round"
            />

            <path d="M113 248L120 281L127 248" fill="#FFF1B7" />

            {/* Side engine details */}
            <circle
              cx="53"
              cy="203"
              r="6"
              fill="#F16B3B"
              stroke="#29251F"
              strokeWidth="3"
            />
            <circle
              cx="187"
              cy="203"
              r="6"
              fill="#F16B3B"
              stroke="#29251F"
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* Scene 2: name arrives from opposite directions */}
        <div className="ch-name-group" aria-hidden="true">
          <div className="ch-scene-label">
            <span className="ch-scene-label-dot" />
            <span>SCENE 01 / ASCENSION PROTOCOL</span>
          </div>

          <div className="ch-name-line ch-name-line-top">
            <span className="ch-name ch-name-ramil">RAMIL</span>
          </div>

          <div className="ch-name-line ch-name-line-bottom">
            <span className="ch-name ch-name-aoanan">
              AOANAN<span className="ch-name-period">.</span>
            </span>
          </div>

          <p className="ch-name-footer">DESIGN / DEVELOP / DEPLOY</p>
        </div>

        {/* Scene 3: flash during the ship zoom transition */}
        <div className="ch-ship-flash" aria-hidden="true" />

        {/* Scene 4: centered portrait */}
        <div className="ch-portrait-scene">
          <div className="ch-portrait-image">
            <Image
              src="/images/caricature.png"
              alt="Ramil Aoanan caricature portrait"
              fill
              priority
              sizes="(max-width: 600px) 75vw, (max-width: 1024px) 45vw, 420px"
              className="ch-portrait-img"
            />
          </div>
        </div>

        {/* Scene 5: Story messages */}
        <div className="ch-story-stage">
          <div className="ch-story-grid" aria-live="polite">
            {storyItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="ch-story-item" key={item.number}>
                  <div className="ch-story-topline">
                    <span>{item.number} / 04</span>
                    <span>{item.eyebrow}</span>
                  </div>

                  <div className="ch-story-icon">
                    <Icon aria-hidden="true" size={17} strokeWidth={1.7} />
                  </div>

                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Persistent scene indicator */}
        <div className="ch-top-status">
          <span className="ch-top-status-dot" />
          <span>PORTFOLIO EXPERIENCE</span>
        </div>

        <div className="ch-progress-track" aria-hidden="true">
          <div className="ch-progress-fill" />
        </div>

        <a href="#story" className="ch-scroll-hint">
          <span>SCROLL TO EXPERIENCE</span>
          <ArrowDown size={15} />
        </a>

        <div className="ch-scene-counter" aria-hidden="true">
          <span>01</span>
          <span className="ch-counter-line" />
          <span>05</span>
        </div>
      </div>
    </section>
  );
}
