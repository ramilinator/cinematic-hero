"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";
import "./Hero2.css";

const messages = [
  {
    number: "01",
    eyebrow: "HELLO, WORLD",
    title: "I'm Ramil Aoanan.",
    description:
      "A web developer who turns ideas into meaningful digital experiences.",
  },
  {
    number: "02",
    eyebrow: "MY APPROACH",
    title: "Thoughtful by design.",
    description:
      "I combine clean interfaces, responsive layouts, and purposeful interactions to create better experiences for people.",
  },
  {
    number: "03",
    eyebrow: "WHAT I BUILD",
    title: "From concept to code.",
    description:
      "From modern React applications to content-driven websites powered by Next.js and headless CMS platforms.",
  },
  {
    number: "04",
    eyebrow: "MY TOOLKIT",
    title: "Built for the modern web.",
    description:
      "React. Next.js. TypeScript. Tailwind CSS. WordPress. Strapi. The tools I use to bring digital ideas to life.",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "WordPress",
  "Strapi",
];

export default function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const messageElements = gsap.utils.toArray<HTMLElement>(".story-message");

      const portrait = section.querySelector<HTMLElement>(".story-portrait");
      const background =
        section.querySelector<HTMLElement>(".story-background");
      const orangePanel = section.querySelector<HTMLElement>(
        ".story-orange-panel",
      );
      const codeCard = section.querySelector<HTMLElement>(".story-code-card");
      const skillElements = gsap.utils.toArray<HTMLElement>(".story-skill");
      const capabilityCard = section.querySelector<HTMLElement>(
        ".story-capability-card",
      );
      const projectCue =
        section.querySelector<HTMLElement>(".story-project-cue");
      const scrollHint =
        section.querySelector<HTMLElement>(".story-scroll-hint");

      if (
        messageElements.length === 0 ||
        !portrait ||
        !background ||
        !orangePanel ||
        !codeCard ||
        !capabilityCard ||
        !projectCue ||
        !scrollHint
      ) {
        return;
      }

      // Initial state
      gsap.set(messageElements, {
        autoAlpha: 0,
        y: 35,
        position: "absolute",
        inset: "0 auto auto 0",
        width: "100%",
      });

      gsap.set(messageElements[0], {
        autoAlpha: 1,
        y: 0,
        position: "relative",
      });

      gsap.set([codeCard, capabilityCard, projectCue], {
        autoAlpha: 0,
        y: 22,
      });

      gsap.set(codeCard, { x: -35, rotation: -2 });
      gsap.set(capabilityCard, { x: 35 });
      gsap.set(skillElements, { autoAlpha: 0, y: 20 });

      // Intro entrance
      const entrance = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      entrance
        .from(".story-topbar", {
          autoAlpha: 0,
          y: -18,
          duration: 0.75,
        })
        .from(
          ".story-background-word",
          {
            autoAlpha: 0,
            scale: 0.94,
            duration: 1,
          },
          "-=0.4",
        )
        .from(
          ".story-orange-panel",
          {
            autoAlpha: 0,
            scale: 0.9,
            rotation: 4,
            duration: 0.9,
          },
          "-=0.65",
        )
        .from(
          ".story-portrait",
          {
            autoAlpha: 0,
            scale: 0.86,
            y: 35,
            duration: 1.1,
          },
          "-=0.55",
        )
        .from(
          ".story-message:first-child .story-message-inner",
          {
            autoAlpha: 0,
            y: 24,
            duration: 0.7,
          },
          "-=0.5",
        )
        .from(
          ".story-scroll-hint",
          {
            autoAlpha: 0,
            y: 10,
            duration: 0.5,
          },
          "-=0.2",
        );

      // Scroll-driven storytelling
      const story = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // First message -> second
      story
        .to(scrollHint, {
          autoAlpha: 0,
          duration: 0.15,
        })
        .to(
          messageElements[0],
          {
            autoAlpha: 0,
            y: -35,
            duration: 0.35,
          },
          "<",
        )
        .fromTo(
          messageElements[1],
          { autoAlpha: 0, y: 35 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
          },
          "<0.15",
        );

      // Second message -> third
      story
        .to(messageElements[1], {
          autoAlpha: 0,
          y: -35,
          duration: 0.35,
        })
        .fromTo(
          messageElements[2],
          { autoAlpha: 0, y: 35 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
          },
          "<0.15",
        );

      // Third message -> fourth
      story
        .to(messageElements[2], {
          autoAlpha: 0,
          y: -35,
          duration: 0.35,
        })
        .fromTo(
          messageElements[3],
          { autoAlpha: 0, y: 35 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
          },
          "<0.15",
        );

      // Final cinematic reveal
      story
        .to(messageElements[3], {
          autoAlpha: 0,
          y: -30,
          duration: 0.35,
        })
        .to(
          portrait,
          {
            scale: 1.12,
            y: -18,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          background,
          {
            scale: 1.16,
            xPercent: -4,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          orangePanel,
          {
            rotation: -8,
            scale: 1.12,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          codeCard,
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            rotation: -3,
            duration: 0.5,
          },
          "<0.15",
        )
        .to(
          capabilityCard,
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            duration: 0.5,
          },
          "<0.05",
        )
        .to(
          skillElements,
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.4,
          },
          "<0.1",
        )
        .to(
          projectCue,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
          },
          "<0.15",
        );

      // Depth layers
      gsap.to(".story-depth-back", {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=400%",
          scrub: 1,
        },
      });

      gsap.to(".story-depth-front", {
        y: -200,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=400%",
          scrub: 1,
        },
      });

      // Subtle header fade during the introduction
      gsap.to(".story-topbar", {
        autoAlpha: 0.55,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=180%",
          scrub: true,
        },
      });

      // Responsive parallax strength
      mm.add("(max-width: 760px)", () => {
        gsap.to(".story-depth-back", {
          y: -45,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=400%",
            scrub: 1,
          },
        });

        gsap.to(".story-depth-front", {
          y: -85,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=400%",
            scrub: 1,
          },
        });
      });

      // Refresh measurements after the portrait loads
      const portraitImage = section.querySelector<HTMLImageElement>(
        ".story-portrait-image",
      );

      if (portraitImage && !portraitImage.complete) {
        portraitImage.addEventListener("load", () => {
          ScrollTrigger.refresh();
        });
      }
    }, section);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="story-hero"
      aria-label="Introduction to Ramil Aoanan"
    >
      <div className="story-grain" aria-hidden="true" />

      <header className="story-topbar">
        <Link href="#home" className="story-brand">
          <span className="story-brand-mark">RA.</span>
          <span>
            RAMIL AOANAN
            <small>WEB DEVELOPER</small>
          </span>
        </Link>

        <div className="story-top-status">
          <span />
          PORTFOLIO / 2026
        </div>

        <Link href="#contact" className="story-contact">
          LET&apos;S TALK <ArrowUpRight size={15} />
        </Link>
      </header>

      <div className="story-stage">
        {/* Background and typography */}
        <div className="story-background story-depth-back" aria-hidden="true">
          <span className="story-background-word">CREATE</span>
          <span className="story-background-circle" />
          <span className="story-background-coordinate">
            DESIGN / DEVELOP / DELIVER
          </span>
        </div>

        {/* Centerpiece */}
        <div className="story-visual">
          <div className="story-orange-panel" />

          <div className="story-ring story-ring-outer" />
          <div className="story-ring story-ring-inner" />

          <span className="story-visual-index">RA — 001</span>

          <span className="story-visual-star" aria-hidden="true">
            ✳
          </span>

          <div className="story-portrait">
            <Image
              src="/images/caricature.png"
              alt="Illustrated portrait of Ramil Aoanan"
              fill
              priority
              sizes="(max-width: 480px) 94vw, (max-width: 760px) 84vw, 690px"
              className="story-portrait-image"
            />
          </div>

          {/* Floating code window */}
          <div className="story-code-card story-depth-front">
            <div className="story-code-heading">
              <Code2 size={15} />
              <span>developer.tsx</span>
              <span className="story-code-dots">•••</span>
            </div>

            <div className="story-code-content">
              <span>
                <i>const</i> developer = {"{"}
              </span>
              <span>
                {"  "}passion: <b>&quot;building&quot;</b>,
              </span>
              <span>
                {"  "}creativity: <b>true</b>,
              </span>
              <span>
                {"  "}learning: <b>&quot;always&quot;</b>,
              </span>
              <span>{"}"}</span>
            </div>
          </div>

          {/* Floating capability card */}
          <div className="story-capability-card story-depth-front">
            <Layers3 size={18} />
            <div>
              <span>DEVELOPMENT STACK</span>
              <strong>Modern web experiences</strong>
            </div>
          </div>

          <div className="story-visual-caption">
            <span>DESIGN MEETS DEVELOPMENT</span>
            <strong>Thoughtful by design.</strong>
          </div>
        </div>

        {/* Scroll-controlled introduction */}
        <div className="story-messages" aria-live="polite">
          {messages.map((message) => (
            <article
              className="story-message"
              key={message.number}
              aria-label={`${message.number}: ${message.eyebrow}`}
            >
              <div className="story-message-inner">
                <span className="story-message-number">
                  {message.number} / 04
                </span>

                <span className="story-message-eyebrow">{message.eyebrow}</span>

                <h1>{message.title}</h1>

                <p>{message.description}</p>

                {message.number === "04" && (
                  <div className="story-skill-list">
                    {skills.map((skill) => (
                      <span className="story-skill" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="story-scroll-hint">
          <span>SCROLL TO MEET THE DEVELOPER</span>
          <ArrowDown size={15} />
        </div>

        {/* Finale */}
        <div className="story-project-cue">
          <Sparkles size={16} />

          <div>
            <span>THE NEXT CHAPTER</span>
            <strong>Let&apos;s explore what I build.</strong>
          </div>

          <Link href="#projects" aria-label="Explore my projects">
            <ArrowDownRight size={19} />
          </Link>
        </div>

        <div className="story-coordinate">
          INDEPENDENT THINKING / INTENTIONAL BUILDING
        </div>
      </div>
    </section>
  );
}
