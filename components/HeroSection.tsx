"use client";

import { useEffect, useState } from "react";

const badges = [
  { icon: "✦", text: "ISO Certified" },
  { icon: "✦", text: "24/7 Care" },
  { icon: "✦", text: "Expert Specialists" },
];

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "12K+", label: "Patients Treated" },
  { value: "98%", label: "Satisfaction Rate" },
];

const collageImages = [
  {
    src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80",
    alt: "Doctor with patient",
    caption: "Compassionate Care",
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    alt: "Medical consultation",
    caption: "Expert Consultation",
  },
  {
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80",
    alt: "Modern clinic interior",
    caption: "Modern Facilities",
  },
  {
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
    alt: "Healthcare team",
    caption: "Expert Team",
  },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative bg-[#F5F0E8] overflow-hidden min-h-screen flex items-center"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {/* ── Background blobs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-75 h-75 sm:w-112.5 sm:h-112.5 lg:w-150 lg:h-150 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #0D7C6B 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-48 -left-24 w-62.5 h-62.5 sm:w-95 sm:h-95 lg:w-125 lg:h-125 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #C97B3A 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0D7C6B 1px, transparent 1px), linear-gradient(90deg, #0D7C6B 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#0D7C6B] via-[#C97B3A] to-transparent" />

      {/* ══════════ MAIN WRAPPER ══════════ */}
      <div className="relative z-10 w-full max-w-350 mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-14 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-10 xl:gap-16">

          {/* ══════════════════════
              LEFT — Text
          ══════════════════════ */}
          <div
            className={`w-full lg:w-[46%] shrink-0 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {badges.map((b, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium tracking-widest uppercase border border-[#0D7C6B]/30 text-[#0D7C6B] bg-[#0D7C6B]/5"
                >
                  <span className="text-[#C97B3A]">{b.icon}</span>
                  {b.text}
                </span>
              ))}
            </div>

            {/* Heading */}
            <h1
              className="font-light text-[#1C2B2A] mb-4 leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 5vw, 4.6rem)", letterSpacing: "-0.02em" }}
            >
              Where Healing
              <br />
              <span className="italic text-[#0D7C6B]">Meets</span>{" "}
              <span className="font-semibold">Excellence</span>
            </h1>

            {/* Ornament */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C97B3A]" />
              <span className="text-[#C97B3A]">✦</span>
              <div className="h-px w-10 bg-[#C97B3A]" />
            </div>

            {/* Description */}
            <p
              className="text-[#4A5C5B] leading-relaxed mb-7"
              style={{ fontSize: "clamp(0.88rem, 1.5vw, 1.05rem)", maxWidth: "460px" }}
            >
              Comprehensive, compassionate medical care tailored to every patient. Our specialists
              combine cutting-edge technology with a human-first approach to your well-being.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button className="group relative px-5 py-3 sm:px-6 sm:py-3.5 bg-[#0D7C6B] text-white rounded-lg font-medium text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(13,124,107,0.4)] hover:-translate-y-0.5">
                <span className="relative z-10">Book Appointment</span>
                <span className="absolute inset-0 bg-[#0a6358] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button className="group px-5 py-3 sm:px-6 sm:py-3.5 border border-[#1C2B2A]/20 text-[#1C2B2A] rounded-lg font-medium text-sm tracking-wide hover:border-[#0D7C6B] hover:text-[#0D7C6B] transition-all duration-300 flex items-center gap-2">
                Our Services
                <span className="inline-block transition-transform group-hover:translate-x-1 duration-300">→</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-5 sm:gap-8 pt-6 border-t border-[#0D7C6B]/10">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="font-bold text-[#0D7C6B]"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-[10px] text-[#6B7E7D] tracking-widest uppercase mt-0.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ══════════════════════
              RIGHT — Collage
          ══════════════════════ */}
          <div
            className={`w-full lg:flex-1 transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* ── MOBILE (< sm: 640px) ── */}
            <div className="sm:hidden flex flex-col gap-3">
              {/* 2-col grid top 2 images */}
              <div className="grid grid-cols-2 gap-2">
                {collageImages.slice(0, 2).map((img, i) => (
                  <div
                    key={i}
                    className="relative rounded-xl overflow-hidden shadow"
                    style={{ aspectRatio: "4/3" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0D2B28]/60 to-transparent" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-white tracking-wide">
                      {img.caption}
                    </span>
                  </div>
                ))}
              </div>
              {/* Wide bottom image */}
              <div className="relative rounded-xl overflow-hidden shadow" style={{ aspectRatio: "16/7" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={collageImages[3].src} alt={collageImages[3].alt} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-linear-to-r from-[#0D2B28]/65 via-[#0D2B28]/20 to-transparent" />
                <div className="absolute inset-0 flex items-center px-4 gap-3">
                  <div className="flex -space-x-2">
                    {["#B5D8D3", "#F4C68C", "#A8C7C0", "#E8A87C"].map((bg, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-white/80 flex items-center justify-center text-[8px] font-bold text-[#1C2B2A]"
                        style={{ backgroundColor: bg }}
                      >
                        {["A", "B", "C", "D"][i]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white text-[11px] font-semibold">12,000+ Patients</p>
                    <p className="text-white/60 text-[9px]">Award-winning since 2009</p>
                  </div>
                </div>
              </div>
              {/* Open now badge */}
              <div className="flex items-center justify-center gap-2 bg-white/80 border border-[#0D7C6B]/12 rounded-xl py-2.5 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-sm font-semibold text-[#1C2B2A]">Open Now</p>
                <span className="text-xs text-[#6B7E7D]">· Mon–Sat 8am–8pm</span>
              </div>
            </div>

            {/* ── TABLET (sm–lg: 640px–1023px) ── */}
            <div className="hidden sm:flex lg:hidden flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                {collageImages.map((img, i) => (
                  <div
                    key={i}
                    className="relative rounded-2xl overflow-hidden shadow-md"
                    style={{ aspectRatio: "4/3" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0D2B28]/60 to-transparent" />
                    <span className="absolute bottom-2 left-2.5 text-[11px] font-semibold text-white tracking-wide">
                      {img.caption}
                    </span>
                    {i === 0 && (
                      <div className="absolute top-3 left-3 bg-[#C97B3A] text-white px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide shadow">
                        ✦ Accepting New Patients
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/80 border border-[#0D7C6B]/12 rounded-2xl py-3 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-sm font-semibold text-[#1C2B2A]">Open Now</p>
                <span className="text-xs text-[#6B7E7D]">· Mon–Sat 8am–8pm</span>
              </div>
            </div>

            {/* ── DESKTOP (lg+: 1024px+) — static collage, no tilt/parallax ── */}
            <div className="hidden lg:block relative">
              {/* Dashed frame */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-dashed border-[#0D7C6B]/20 pointer-events-none z-10" />
              {/* Shadow offset */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-[#0D7C6B]/10 pointer-events-none" />

              {/* Collage grid */}
              <div
                className="relative rounded-3xl overflow-hidden w-full shadow-2xl bg-[#E8E2D8]"
                style={{ aspectRatio: "3/2" }}
              >
                <div
                  className="absolute inset-0 grid gap-1.5 p-1.5"
                  style={{
                    gridTemplateColumns: "1fr 0.72fr",
                    gridTemplateRows: "1fr 1fr 0.55fr",
                  }}
                >
                  {/* Top-left tall image */}
                  <div className="relative overflow-hidden rounded-2xl" style={{ gridRow: "1 / 3" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={collageImages[0].src}
                      alt={collageImages[0].alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0D2B28]/55 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#C97B3A] text-white px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide shadow">
                      ✦ Accepting New Patients
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <p className="text-white text-xs font-semibold">{collageImages[0].caption}</p>
                      <p className="text-white/60 text-[10px]">Our dedicated specialists</p>
                    </div>
                  </div>

                  {/* Top-right image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={collageImages[1].src}
                      alt={collageImages[1].alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0D2B28]/45 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5">
                      <p className="text-white text-[10px] font-semibold">{collageImages[1].caption}</p>
                    </div>
                  </div>

                  {/* Mid-right image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={collageImages[2].src}
                      alt={collageImages[2].alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0D2B28]/45 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5">
                      <p className="text-white text-[10px] font-semibold">{collageImages[2].caption}</p>
                    </div>
                  </div>

                  {/* Bottom-wide image */}
                  <div
                    className="relative overflow-hidden rounded-2xl"
                    style={{ gridColumn: "1 / 3" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={collageImages[3].src}
                      alt={collageImages[3].alt}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-[#0D2B28]/65 via-[#0D2B28]/20 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-between px-5">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          {["#B5D8D3", "#F4C68C", "#A8C7C0", "#E8A87C"].map((bg, i) => (
                            <div
                              key={i}
                              className="w-7 h-7 rounded-full border-2 border-white/80 flex items-center justify-center text-[9px] font-bold text-[#1C2B2A]"
                              style={{ backgroundColor: bg }}
                            >
                              {["A", "B", "C", "D"][i]}
                            </div>
                          ))}
                        </div>
                        <div>
                          <p className="text-white text-xs font-semibold">12,000+ Patients</p>
                          <p className="text-white/60 text-[10px]">Award-winning since 2009</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-white text-[10px] font-semibold">Open · Mon–Sat 8am–8pm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dot decoration */}
              <div className="absolute -left-5 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-25">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0D7C6B]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 opacity-30 hidden md:flex">
        <span className="text-[9px] tracking-[0.35em] uppercase text-[#4A5C5B]">Scroll</span>
        <div className="w-px h-7 bg-linear-to-b from-[#0D7C6B] to-transparent animate-pulse" />
      </div>
    </section>
  );
}