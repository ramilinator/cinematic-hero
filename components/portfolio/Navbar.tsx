"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

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

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] mx-auto w-full transition-all duration-300 ${
        showNavbar
          ? "border-b border-white/10 bg-[#121516]/90 shadow-lg backdrop-blur-md"
          : "border-b border-white/10 bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14 lg:py-5">
        {/* Brand */}
        <Link
          href="#home"
          aria-label="Ramil Aoanan home"
          onClick={closeMenu}
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

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-[14px] md:flex"
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

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden items-center gap-2 rounded-sm border border-[#F5F0E7]/20 px-4 py-3 text-xs font-semibold transition-all duration-300 hover:border-[#F15A36] hover:bg-[#F15A36] hover:text-[#121516] sm:flex"
        >
          LET&apos;S TALK
          <ArrowUpRight size={14} />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center border border-[#F5F0E7]/20 text-[#F5F0E7] sm:hidden"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-[#121516]/95 px-5 py-5 backdrop-blur-xl sm:px-8 md:hidden"
        >
          {[
            { label: "Story", href: "#story" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#work" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-white/[0.08] py-4 text-sm text-white/70 transition-colors hover:text-[#F15A36]"
            >
              {item.label}
              <ArrowUpRight size={15} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
