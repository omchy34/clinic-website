"use client";
import Link from "next/link";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Locations", href: "#locations" },
  { label: "Services",  href: "#services"  },
  { label: "Doctors",   href: "/Doctors"   },
  { label: "About Us",  href: "#about"     },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F5F0E8]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(13,124,107,0.08)] py-2"
          : "bg-[#F5F0E8]/90 backdrop-blur-sm py-3"
      }`}
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#0D7C6B] via-[#C97B3A] to-transparent" />

      <nav className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-14">

        {/* ── Logo ── */}
        <Link href="#" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#0D7C6B] flex items-center justify-center shadow-md shadow-[#0D7C6B]/25 group-hover:scale-105 transition-transform duration-200">
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
              <path d="M9 2V16M2 9H16" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-[1.1rem] sm:text-[1.15rem] font-bold tracking-tight text-[#1C2B2A]">
            Medi<span className="text-[#0D7C6B]">Clinic</span>
          </span>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`relative px-4 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-200 tracking-wide ${
                  activeLink === link.label
                    ? "text-[#0D7C6B] bg-[#0D7C6B]/8"
                    : "text-[#4A5C5B] hover:text-[#0D7C6B] hover:bg-[#0D7C6B]/5"
                }`}
              >
                {link.label}
                {activeLink === link.label && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#0D7C6B]" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="tel:+1800000000"
            className="flex items-center gap-1.5 text-[13px] text-[#4A5C5B] hover:text-[#0D7C6B] transition-colors duration-200"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            1-800-MEDI
          </Link>
          <div className="h-4 w-px bg-[#0D7C6B]/20" />
          <Link
            href="#book"
            className="group relative px-4 py-2 bg-[#0D7C6B] text-white text-[13px] font-semibold rounded-lg overflow-hidden shadow-md shadow-[#0D7C6B]/20 hover:shadow-[#0D7C6B]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <span className="text-[#C97B3A]">✦</span>
              Book Appointment
            </span>
            <span className="absolute inset-0 bg-[#0a6358] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>

        {/* ── Mobile: phone + hamburger ── */}
        <div className="lg:hidden flex items-center gap-3">
          <Link
            href="tel:+1800000000"
            className="flex items-center gap-1 text-[12px] text-[#4A5C5B] hover:text-[#0D7C6B] transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span className="hidden xs:inline">Call</span>
          </Link>
          <button
            className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#0D7C6B]/8 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[#1C2B2A] rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#1C2B2A] rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#1C2B2A] rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#F5F0E8] border-t border-[#0D7C6B]/10 px-5 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => { setActiveLink(link.label); setMenuOpen(false); }}
              className={`px-4 py-2.5 text-[13px] font-medium rounded-lg transition-colors ${
                activeLink === link.label
                  ? "text-[#0D7C6B] bg-[#0D7C6B]/8"
                  : "text-[#4A5C5B] hover:text-[#0D7C6B] hover:bg-[#0D7C6B]/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#book"
            onClick={() => setMenuOpen(false)}
            className="group relative mt-2 px-4 py-3 bg-[#0D7C6B] text-white text-[13px] font-semibold rounded-lg text-center overflow-hidden shadow-md shadow-[#0D7C6B]/20"
          >
            <span className="relative z-10 flex items-center justify-center gap-1.5">
              <span className="text-[#C97B3A]">✦</span>
              Book Appointment
            </span>
            <span className="absolute inset-0 bg-[#0a6358] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </header>
  );
}