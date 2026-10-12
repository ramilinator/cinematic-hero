"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  GitBranch,
  Layers3,
} from "lucide-react";

import "./Hero.css";

function RocketIllustration() {
  return (
    <svg
      className="hero-rocket-svg"
      viewBox="0 0 220 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="rocketBody"
          x1="65"
          y1="20"
          x2="155"
          y2="230"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8E5E0" />
        </linearGradient>

        <linearGradient
          id="rocketFlame"
          x1="110"
          y1="180"
          x2="110"
          y2="310"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FF805E" />
          <stop offset="55%" stopColor="#F15A36" />
          <stop offset="100%" stopColor="#D94328" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        className="rocket-flame"
        d="M85 190 L70 266 L109 229 L137 300 L143 215 L126 186 Z"
        fill="url(#rocketFlame)"
      />

      <path
        className="rocket-flame-inner"
        d="M98 193 L99 249 L116 222 L125 255 L127 194 Z"
        fill="#FFD7A1"
      />

      <path
        d="M77 137 L40 187 L82 177 L94 147 Z"
        fill="#F15A36"
        stroke="#292723"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      <path
        d="M143 137 L180 187 L138 177 L126 147 Z"
        fill="#F15A36"
        stroke="#292723"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      <path
        d="M110 18 C85 42 65 80 65 130 L65 178 Q65 196 84 204 L136 204 Q155 196 155 178 L155 130 C155 80 135 42 110 18Z"
        fill="url(#rocketBody)"
        stroke="#292723"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      <path
        d="M110 18 C92 36 78 58 71 84 L149 84 C142 58 128 36 110 18Z"
        fill="#F15A36"
        stroke="#292723"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      <circle
        cx="110"
        cy="111"
        r="20"
        fill="#F15A36"
        stroke="#292723"
        strokeWidth="3.5"
      />

      <circle cx="110" cy="111" r="11" fill="#DDF4F7" />

      <path
        d="M104 104 L115 115"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M84 151 H136"
        stroke="#292723"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M91 166 H129"
        stroke="#F15A36"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <circle cx="80" cy="188" r="3" fill="#292723" />
      <circle cx="140" cy="188" r="3" fill="#292723" />
    </svg>
  );
}

export default function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const topbarRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const topbar = topbarRef.current;
    const intro = introRef.current;
    const name = nameRef.current;
    const portrait = portraitRef.current;
    const rocket = rocketRef.current;
    const details = detailsRef.current;
    const footer = footerRef.current;

    if (
      !section ||
      !topbar ||
      !intro ||
      !name ||
      !portrait ||
      !rocket ||
      !details ||
      !footer
    ) {
      return;
    }

    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const entranceElements = [topbar, intro, name, portrait, details, footer];

      if (reduceMotion) {
        gsap.set(entranceElements, {
          autoAlpha: 1,
          clearProps: "transform",
        });

        gsap.set(rocket, {
          autoAlpha: 0,
          clearProps: "transform",
        });

        return;
      }

      // Initial states for the regular hero content.
      gsap.set(topbar, { autoAlpha: 0, y: -14 });
      gsap.set(intro, { autoAlpha: 0, y: 18 });
      gsap.set(name, { autoAlpha: 0, y: 35 });
      gsap.set(portrait, {
        autoAlpha: 0,
        y: 34,
        scale: 0.94,
      });
      gsap.set(details, { autoAlpha: 0, y: 16 });
      gsap.set(footer, { autoAlpha: 0, y: 12 });

      // The rocket starts visible in its original position.
      gsap.set(rocket, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
      });

      // Intro animation for the text and portrait.
      gsap
        .timeline({
          defaults: { ease: "power3.out" },
        })
        .to(topbar, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
        })
        .to(
          intro,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
          },
          "-=0.2",
        )
        .to(
          name,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.25",
        )
        .to(
          portrait,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
          },
          "-=0.48",
        )
        .to(
          details,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.42",
        )
        .to(
          footer,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
          },
          "-=0.25",
        );

      /*
       * SCROLL-DRIVEN ROCKET SEQUENCE
       *
       * 0–30%:  fly to the right and disappear
       * 30–40%: stay invisible while positioned below the hero
       * 40–45%: emerge from the bottom center
       * 45–96%: launch upward through the center
       * 96–100%: disappear above the hero
       *
       * The hero stays pinned while the visitor scrolls through
       * this sequence. Scrolling backward reverses the animation.
       */

      const calculateFlightPath = () => {
        const sectionRect = section.getBoundingClientRect();
        const rocketRect = rocket.getBoundingClientRect();

        const rocketLeft = rocketRect.left - sectionRect.left;
        const rocketTop = rocketRect.top - sectionRect.top;

        const rocketWidth = rocketRect.width;
        const rocketHeight = rocketRect.height;

        return {
          // Travel entirely beyond the right edge.
          rightX: section.clientWidth - rocketLeft + rocketWidth + 100,

          // Align the rocket's center with the hero's center.
          centerX: section.clientWidth / 2 - (rocketLeft + rocketWidth / 2),

          // Place it completely below the hero, out of sight.
          bottomY: section.clientHeight - rocketTop + rocketHeight + 60,

          // Move it completely beyond the top edge.
          topY: -rocketTop - rocketHeight - 100,
        };
      };

      const flightPath = calculateFlightPath();

      const rocketFlight = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2200",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Phase 1: fly right, accelerate, and vanish.
      rocketFlight.to(rocket, {
        x: flightPath.rightX,
        y: -25,
        rotate: 25,
        scale: 0.72,
        autoAlpha: 0,
        duration: 3,
        ease: "power3.in",
      });

      // Phase 2: teleport below the viewport while invisible.
      rocketFlight.set(rocket, {
        x: flightPath.centerX,
        y: flightPath.bottomY,
        rotate: 0,
        scale: 0.82,
        autoAlpha: 0,
      });

      // Brief scroll-controlled pause before the launch.
      rocketFlight.to(rocket, {
        autoAlpha: 0,
        duration: 0.8,
      });

      // Phase 3: emerge from below at the center.
      rocketFlight.to(rocket, {
        autoAlpha: 1,
        duration: 0.25,
        ease: "power1.out",
      });

      // Phase 4: launch vertically through the center.
      rocketFlight.to(rocket, {
        y: flightPath.topY,
        scale: 1.05,
        duration: 5,
        ease: "power2.in",
      });

      // Phase 5: disappear above the hero.
      rocketFlight.to(rocket, {
        autoAlpha: 0,
        duration: 0.25,
      });

      // Independent parallax for the name, portrait, and background.
      gsap.to(name, {
        y: -32,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2200",
          scrub: 1,
        },
      });

      gsap.to(portrait, {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2200",
          scrub: 1,
        },
      });

      gsap.to(".hero-orbit", {
        rotate: 18,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2200",
          scrub: 1,
        },
      });

      gsap.to(".hero-grid-pattern", {
        y: 36,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2200",
          scrub: 1,
        },
      });

      // Recalculate rocket positioning after layout changes.
      const refreshFlightPath = () => {
        const nextPath = calculateFlightPath();

        rocketFlight.invalidate();

        // Update destination values for resized viewports.
        const rightTween = rocketFlight.getChildren()[0];
        const launchTween = rocketFlight.getChildren()[3];

        rightTween?.vars && gsap.set(rocket, {});

        if (rightTween) {
          rightTween.vars.x = nextPath.rightX;
        }

        if (launchTween) {
          launchTween.vars.y = nextPath.topY;
        }

        ScrollTrigger.update();
      };

      ScrollTrigger.addEventListener("refresh", refreshFlightPath);
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      className="hero-section"
      ref={sectionRef}
      aria-labelledby="hero-title"
    >
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />

      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

      <div className="hero-orange-disc" aria-hidden="true" />

      <div className="hero-topbar" ref={topbarRef}>
        <Link href="/" className="hero-brand" aria-label="Ramil Aoanan home">
          <span className="hero-brand-mark">R.</span>
          <span className="hero-brand-label">PERSONAL PORTFOLIO</span>
        </Link>

        <div className="hero-availability">
          <span className="hero-status-dot" />
          <span>INDEPENDENT WEB DEVELOPER</span>
        </div>
      </div>

      <div className="hero-layout">
        <div className="hero-left">
          <div className="hero-intro" ref={introRef}>
            <span className="hero-intro-rule" />
            <p>HELLO WORLD,</p>
            <p>MY NAME IS</p>
          </div>

          <h1 className="hero-name" id="hero-title" ref={nameRef}>
            <span>RAMIL</span>
            <span>
              AOANAN<span className="hero-period">.</span>
            </span>
          </h1>

          <div className="hero-description">
            <p>
              I build modern digital experiences with thoughtful design, clean
              code, and a passion for the web.
            </p>
          </div>

          <div className="hero-actions">
            <Link href="#projects" className="hero-primary-link">
              EXPLORE MY WORK
              <ArrowDownRight size={17} strokeWidth={2} />
            </Link>

            <Link href="#contact" className="hero-secondary-link">
              LET&apos;S TALK
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </Link>
          </div>

          <div className="hero-skills" ref={detailsRef}>
            <span className="hero-skills-label">MY TOOLKIT</span>

            <div className="hero-skill-list">
              <span>
                <Code2 size={14} />
                REACT
              </span>

              <span>
                <Layers3 size={14} />
                NEXT.JS
              </span>

              <span>
                <GitBranch size={14} />
                GIT
              </span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-index">
            <span>MISSION</span>
            <strong>001</strong>
          </div>

          <div className="hero-portrait" ref={portraitRef}>
            <Image
              src="/images/caricature.png"
              alt="Caricature of Ramil Aoanan"
              fill
              priority
              sizes="(max-width: 760px) 78vw, (max-width: 1100px) 48vw, 40vw"
              className="hero-portrait-image"
            />
          </div>

          <div className="hero-rocket-trail" aria-hidden="true" />

          <div className="hero-rocket" ref={rocketRef}>
            <RocketIllustration />
          </div>

          <div className="hero-floating-label hero-label-code">
            <span className="hero-label-icon">
              <Code2 size={16} />
            </span>

            <span>
              <strong>CREATIVE CODE</strong>
              <small>IDEAS INTO REALITY</small>
            </span>
          </div>

          <div className="hero-floating-label hero-label-launch">
            <span className="hero-label-spark">✳</span>

            <span>
              <strong>READY FOR LIFTOFF</strong>
              <small>BUILD / DEPLOY / REPEAT</small>
            </span>
          </div>

          <div className="hero-visual-caption">
            <span>FIG. 01</span>
            <span>THE DEVELOPER</span>
          </div>

          <span className="hero-coordinate hero-coordinate-top">
            16°02&apos;N / 120°20&apos;E
          </span>

          <span className="hero-coordinate hero-coordinate-bottom">
            DESIGN THE FUTURE
          </span>
        </div>
      </div>

      <div className="hero-footer" ref={footerRef}>
        <span>DESIGNED WITH INTENTION.</span>

        <span className="hero-footer-center">
          <span className="hero-footer-line" />
          SCROLL TO EXPLORE
          <ArrowDownRight size={15} />
        </span>

        <span>
          BUILT FOR THE WEB <span className="hero-footer-symbol">✳</span>
        </span>
      </div>
    </section>
  );
}
