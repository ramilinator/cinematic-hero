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
  Code2,
  Layers3,
} from "lucide-react";

import "./Hero.css";

const stories = [
  {
    number: "01",
    label: "INTRODUCTION",
    title: "Hello, I'm Ramil.",
    description:
      "A web developer passionate about building thoughtful and engaging digital experiences.",
    icon: Code2,
  },
  {
    number: "02",
    label: "WHAT I DO",
    title: "I build for the web.",
    description:
      "I create responsive websites and modern applications that bring ideas to life.",
    icon: Braces,
  },
  {
    number: "03",
    label: "MY TOOLKIT",
    title: "Design meets code.",
    description:
      "React, Next.js, JavaScript, Tailwind CSS, and modern content management systems.",
    icon: Layers3,
  },
  {
    number: "04",
    label: "LET'S CONNECT",
    title: "Let's build something.",
    description:
      "Have an idea or a project in mind? Let's turn it into something meaningful.",
    icon: ArrowUpRight,
  },
];

export default function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const storyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const counterRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const intro = introRef.current;
    const name = nameRef.current;
    const portrait = portraitRef.current;
    const counter = counterRef.current;

    if (!section || !intro || !name || !portrait || !counter) return;

    const storiesElements = storyRefs.current.filter(
      (element): element is HTMLDivElement => element !== null,
    );

    const context = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 760px)").matches;

      gsap.set([intro, name, portrait], {
        autoAlpha: 0,
      });

      gsap.set(intro, { y: 20 });
      gsap.set(name, { y: 35 });
      gsap.set(portrait, { y: 30, scale: 0.96 });
      gsap.set(storiesElements, { autoAlpha: 0, y: 20 });

      const entrance = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      entrance
        .to(intro, { autoAlpha: 1, y: 0, duration: 0.6 })
        .to(name, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.25")
        .to(portrait, { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 }, "-=0.5");

      if (isMobile) {
        storiesElements.forEach((story, index) => {
          gsap.to(story, {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: story,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });

          ScrollTrigger.create({
            trigger: story,
            start: "top 85%",
            onEnter: () => {
              counter.textContent = String(index + 1).padStart(2, "0");
            },
            onEnterBack: () => {
              counter.textContent = String(index + 1).padStart(2, "0");
            },
          });
        });

        gsap.to(portrait, {
          y: -10,
          ease: "none",
          scrollTrigger: {
            trigger: portrait,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2400",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline.to(name, { x: -12, duration: 1 }, 0);
      timeline.to(portrait, { y: -18, rotate: -2, duration: 1 }, 0);

      storiesElements.forEach((story, index) => {
        const start = 0.35 + index * 1.05;

        timeline
          .to(
            story,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.35,
              ease: "power2.out",
            },
            start,
          )
          .to(
            counter,
            {
              textContent: String(index + 1).padStart(2, "0"),
              snap: { textContent: 1 },
              duration: 0.1,
            },
            start,
          );

        if (index < storiesElements.length - 1) {
          timeline.to(
            story,
            {
              autoAlpha: 0,
              y: -16,
              duration: 0.25,
            },
            start + 0.75,
          );
        }
      });

      timeline.to(portrait, { y: -28, rotate: 1, duration: 1 }, 4);
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section className="hero-section" ref={sectionRef}>
      {/* Background decorations */}
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <span className="hero-decoration hero-decoration-one" aria-hidden="true">
        +
      </span>
      <span className="hero-decoration hero-decoration-two" aria-hidden="true">
        ✳
      </span>

      {/* Top bar */}
      <header className="hero-topbar">
        <Link href="/" className="hero-brand" aria-label="Ramil Aoanan home">
          <span className="hero-brand-mark">R.</span>
          <span>PERSONAL PORTFOLIO</span>
        </Link>

        <div className="hero-availability">
          <span className="hero-status-dot" />
          <span>WEB DEVELOPER / PHILIPPINES</span>
        </div>
      </header>

      <main className="hero-layout">
        {/* Left: Introduction and oversized name */}
        <div className="hero-left">
          <div className="hero-intro" ref={introRef}>
            <span className="hero-intro-rule" />
            <p>HELLO WORLD,</p>
            <p>MY NAME IS</p>
          </div>

          <h1 className="hero-name" ref={nameRef}>
            <span>RAMIL</span>
            <span>
              AOANAN<span className="hero-period">.</span>
            </span>
          </h1>

          <div className="hero-left-bottom">
            <p className="hero-role">
              INDEPENDENT WEB DEVELOPER
              <span>CREATING FOR THE WEB</span>
            </p>

            <Link href="#projects" className="hero-work-link">
              VIEW MY WORK
              <ArrowDownRight size={17} />
            </Link>
          </div>
        </div>

        {/* Center: Caricature and overlays */}
        <div className="hero-center">
          <div className="hero-portrait-block" aria-hidden="true" />
          <div className="hero-portrait-frame" aria-hidden="true" />

          <div className="hero-portrait" ref={portraitRef}>
            <Image
              src="/images/caricature.png"
              alt="Caricature of Ramil Aoanan"
              fill
              priority
              sizes="(max-width: 760px) 85vw, 45vw"
              className="hero-portrait-image"
            />
          </div>

          <div className="hero-portrait-caption">
            <span>FIG. 01</span>
            <span>THE DEVELOPER</span>
          </div>

          <div className="hero-float-card hero-float-card-code">
            <Code2 size={17} />
            <span>CREATIVE CODE</span>
          </div>

          <div className="hero-float-card hero-float-card-stack">
            <Braces size={17} />
            <span>BUILD / CREATE</span>
          </div>

          <span className="hero-center-code">RA—001</span>
        </div>

        {/* Right: Four animated story messages */}
        <aside className="hero-right">
          <div className="hero-story-header">
            <span>MY STORY</span>

            <div className="hero-story-counter">
              <span ref={counterRef}>01</span>
              <span className="hero-counter-divider">/</span>
              <span>04</span>
            </div>
          </div>

          <div className="hero-stories">
            {stories.map((story, index) => {
              const Icon = story.icon;

              return (
                <article
                  key={story.number}
                  className="hero-story"
                  ref={(element) => {
                    storyRefs.current[index] = element;
                  }}
                >
                  <div className="hero-story-meta">
                    <span>
                      {story.number} / {story.label}
                    </span>
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <h2>{story.title}</h2>
                  <p>{story.description}</p>
                </article>
              );
            })}
          </div>

          <div className="hero-story-footer">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDownRight size={18} />
          </div>
        </aside>
      </main>

      {/* Bottom bar */}
      <footer className="hero-footer">
        <span>DESIGNED WITH INTENTION.</span>
        <span>
          BUILT FOR THE WEB <span className="hero-footer-symbol">✳</span>
        </span>
      </footer>
    </section>
  );
}
