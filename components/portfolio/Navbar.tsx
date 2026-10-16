"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="z-40 mx-auto flex w-full max-w-[1600px] items-center justify-between border-b border-white/10 bg-transparent px-5 py-5 sm:px-8 lg:px-14 lg:py-5 bg-[#121516]/80 backdrop-blur-md">
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
          <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.16em] text-white/45 sm:text-[9px]">
            Web Developer
          </span>
        </span>
      </Link>
      <nav
        aria-label="Main navigation"
        className="hidden items-center gap-7 md:flex text-[14px]"
      >
        <Link
          href="#story"
          className="font-medium text-white/55 transition-colors hover:text-[#F5F0E7]"
        >
          Story
        </Link>
        <Link
          href="#skills"
          className="font-medium text-white/55 transition-colors hover:text-[#F5F0E7]"
        >
          Skills
        </Link>
        <Link
          href="#work"
          className="font-medium text-white/55 transition-colors hover:text-[#F5F0E7]"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="font-medium text-white/55 transition-colors hover:text-[#F5F0E7]"
        >
          Contact
        </Link>
      </nav>

      <Link
        href="#contact"
        className="hidden items-center gap-2 rounded-sm border border-[#F5F0E7]/20 px-4 py-3 text-xs font-semibold transition-all duration-300 hover:border-[#F15A36] hover:bg-[#F15A36] hover:text-[#121516] sm:flex"
      >
        LET&apos;S TALK
        <ArrowUpRight size={14} />
      </Link>

      <Link
        href="#contact"
        aria-label="Contact"
        className="flex h-10 w-10 items-center justify-center border border-[#F5F0E7]/20 sm:hidden"
      >
        <Menu size={18} />
      </Link>
    </header>
  );
}
