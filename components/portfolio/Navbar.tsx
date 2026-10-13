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

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

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
    <header className="relative z-30 border-b border-white/10">
      <div className="mx-auto flex min-h-[82px] max-w-[1600px] items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-14">
        <Link
          href="#home"
          aria-label="Ramil Aoanan home"
          className="group flex shrink-0 items-center gap-3"
        >
          <span className="text-4xl font-black italic tracking-[-0.12em] text-[#F15A36]">
            RA
          </span>

          <span className="border-l border-white/20 pl-3">
            <span className="block text-sm font-bold tracking-[0.15em]">
              RAMIL AOANAN
            </span>
            <span className="mt-1 block text-[9px] tracking-[0.32em] text-white/50">
              WEB DEVELOPER
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {navigation.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative py-2 text-sm transition-colors hover:text-[#F15A36] ${
                index === 0 ? "text-[#F15A36]" : "text-white/75"
              }`}
            >
              {item.label}
              {index === 0 && (
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#F15A36]" />
              )}
            </Link>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 text-xs text-white/70 xl:flex"
        >
          <span className="h-2 w-2 rounded-full bg-[#F15A36]" />
          Available for opportunities
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full border border-white/15 p-3 transition hover:border-[#F15A36] lg:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full z-40 border-b border-white/10 bg-[#242321] px-6 py-5 shadow-2xl lg:hidden"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-white/10 py-4 text-sm text-white/80 transition hover:text-[#F15A36]"
            >
              {item.label}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
