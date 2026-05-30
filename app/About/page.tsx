"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────── DATA ─────────────────────── */

const milestones = [
  {
    year: "2009",
    title: "Founded in Salt Lake",
    desc: "MedCare opened its first clinic with a team of 6 doctors and a singular mission — to make specialist care accessible to every family in Kolkata.",
  },
  {
    year: "2013",
    title: "First Accreditation",
    desc: "Awarded ISO 9001:2013 certification, becoming one of the first private multi-specialty clinics in West Bengal to achieve this standard.",
  },
  {
    year: "2017",
    title: "Southpoint Branch Opens",
    desc: "Growing demand in South Kolkata led to the opening of our Tollygunge branch, adding 18 new specialists and a dedicated pediatric wing.",
  },
  {
    year: "2021",
    title: "Digital Health Platform",
    desc: "Launched our proprietary online token and consultation system, reducing patient wait times by 62% across all branches.",
  },
  {
    year: "2023",
    title: "Newtown Flagship",
    desc: "Our most advanced facility yet — 30+ doctors, 15 specialties, 24/7 emergency care, and state-of-the-art diagnostic imaging.",
  },
  {
    year: "2025",
    title: "15 Years of Excellence",
    desc: "Marking 15 years, 12,000+ lives touched, and a renewed commitment to expanding compassionate care across the region.",
  },
];

const values = [
  {
    icon: "🫀",
    title: "Patient First, Always",
    desc: "Every decision — clinical or operational — begins and ends with patient welfare. We measure success in lives improved, not metrics alone.",
    color: "#0D7C6B",
    bg: "#EBF7F5",
  },
  {
    icon: "🔬",
    title: "Evidence-Based Care",
    desc: "Our protocols are grounded in the latest clinical research. We invest continuously in training so our team stays at the forefront of medicine.",
    color: "#2563EB",
    bg: "#EEF3FE",
  },
  {
    icon: "🤝",
    title: "Inclusive Excellence",
    desc: "World-class healthcare shouldn't be a privilege. We structure our services to be genuinely accessible — in language, cost, and proximity.",
    color: "#C97B3A",
    bg: "#FEF6ED",
  },
  {
    icon: "💡",
    title: "Continuous Innovation",
    desc: "From AI-assisted diagnostics to digital token queuing, we embrace technology that reduces friction and improves outcomes for real people.",
    color: "#7C3AED",
    bg: "#F5F0FE",
  },
];

const leadership = [
  {
    name: "Dr. Subhash Menon",
    role: "Founder & Medical Director",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&q=80",
    quote: "Medicine is not just science — it is the art of making people feel seen.",
    bio: "MBBS, MS – AIIMS Mumbai. 28 years of clinical and administrative leadership.",
  },
  {
    name: "Mrs. Kavitha Nair",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    quote: "Every system we build must serve the patient walking through the door.",
    bio: "MBA – IIM Calcutta. 16 years transforming healthcare operations across India.",
  },
  {
    name: "Dr. Rajan Bose",
    role: "Head of Research & Quality",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
    quote: "Standards are a floor, not a ceiling — we always aim higher.",
    bio: "MD, PhD – CMC Vellore. Author of 22 peer-reviewed publications in clinical quality.",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=900&q=80",
    alt: "Reception area",
    label: "Welcoming Spaces",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80",
    alt: "Modern clinic",
    label: "Modern Facilities",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    alt: "Consultation",
    label: "Expert Consultations",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80",
    alt: "Doctor team",
    label: "Dedicated Team",
    span: "col-span-2",
  },
];

const stats = [
  { value: "15+", label: "Years of Service", icon: "🏛" },
  { value: "12K+", label: "Patients Treated", icon: "🫀" },
  { value: "30+", label: "Specialist Doctors", icon: "👨‍⚕️" },
  { value: "3", label: "Branches in Kolkata", icon: "📍" },
  { value: "98%", label: "Satisfaction Rate", icon: "⭐" },
  { value: "24/7", label: "Emergency Care", icon: "🚑" },
];

/* ─────────────────────── HOOKS ─────────────────────── */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─────────────────────── SECTION WRAPPER ─────────────────────── */

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────── SUBCOMPONENTS ─────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D7C6B]/25 text-[#0D7C6B] text-[11px] tracking-widest uppercase font-semibold bg-[#0D7C6B]/5 mb-5">
      <span className="text-[#C97B3A]">✦</span> {children}
    </div>
  );
}

function Ornament() {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="h-px w-10 bg-[#C97B3A]" />
      <span className="text-[#C97B3A] text-xs">✦</span>
      <div className="h-px w-10 bg-[#C97B3A]" />
    </div>
  );
}

/* ─────────────────────── PAGE ─────────────────────── */

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div style={{ fontFamily: "'Georgia', serif" }} className="bg-[#F5F0E8] min-h-screen overflow-x-hidden">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=85"
            alt="MedCare team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F1C] via-[#0D2B28]/70 to-[#0D2B28]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B28]/60 to-transparent" />
        </div>

        {/* Left accent */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#0D7C6B] via-[#C97B3A] to-transparent z-10" />

        {/* Dot grid overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 pb-16 sm:pb-20 lg:pb-24">
          <div
            className="max-w-3xl"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 1s ease 0.1s, transform 1s ease 0.1s",
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-white/70 text-[11px] tracking-widest uppercase font-semibold bg-white/8 mb-6">
              <span className="text-[#C97B3A]">✦</span> About MedCare
            </div>

            <h1
              className="text-white font-light leading-[1.05] mb-5"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)", letterSpacing: "-0.025em" }}
            >
              Fifteen Years of
              <br />
              <span className="italic text-[#4DD8C3]">Healing</span>{" "}
              <span className="font-semibold">Kolkata</span>
            </h1>

            <Ornament />

            <p
              className="text-white/65 leading-relaxed max-w-xl"
              style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)" }}
            >
              MedCare began as a single-room clinic in Salt Lake with a simple belief —
              that every person, regardless of income or background, deserves access to
              specialists who genuinely listen. Today, we are Kolkata's most trusted
              multi-specialty network.
            </p>

            {/* Inline stats */}
            <div className="flex flex-wrap gap-6 sm:gap-10 mt-10 pt-8 border-t border-white/10">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <p className="text-[#4DD8C3] font-bold" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)" }}>
                    {s.value}
                  </p>
                  <p className="text-white/40 text-[10px] tracking-widest uppercase mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F0E8] to-transparent pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════
          MISSION SPLIT
      ══════════════════════════════════════ */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
        {/* Bg blob */}
        <div className="absolute -right-40 top-0 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
          style={{ background: "radial-gradient(circle, #0D7C6B 0%, transparent 70%)" }} />

        <div className="max-w-[1300px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

            {/* Left — image collage */}
            <Reveal className="w-full lg:w-[48%] flex-shrink-0">
              <div className="relative">
                {/* Main image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=900&q=85"
                    alt="Doctor caring for patient"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B28]/40 to-transparent" />
                </div>
                {/* Floating card — years badge */}
                <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#1C2B2A] text-white rounded-2xl px-6 py-5 shadow-2xl max-w-[180px]">
                  <p className="font-bold text-4xl text-[#4DD8C3] leading-none">15+</p>
                  <p className="text-white/60 text-[11px] tracking-widest uppercase mt-1">Years Healing Kolkata</p>
                </div>
                {/* Floating card — ISO */}
                <div className="absolute -top-5 -left-4 sm:-left-8 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 border border-[#0D7C6B]/15">
                  <div className="w-9 h-9 rounded-xl bg-[#EBF7F5] flex items-center justify-center text-xl flex-shrink-0">🏅</div>
                  <div>
                    <p className="text-[#1C2B2A] font-bold text-sm">ISO Certified</p>
                    <p className="text-[#9AADAC] text-[10px]">Since 2013</p>
                  </div>
                </div>
                {/* Decorative dots */}
                <div className="absolute -right-3 top-1/3 flex flex-col gap-2 opacity-20">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0D7C6B]" />
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right — text */}
            <div className="w-full lg:flex-1">
              <Reveal>
                <SectionLabel>Our Mission</SectionLabel>
                <h2
                  className="text-[#1C2B2A] font-light leading-tight mb-4"
                  style={{ fontSize: "clamp(1.9rem, 3.2vw, 3.2rem)", letterSpacing: "-0.02em" }}
                >
                  Built on{" "}
                  <span className="italic text-[#0D7C6B]">Compassion,</span>
                  <br />
                  Driven by <span className="font-semibold">Purpose</span>
                </h2>
                <Ornament />
              </Reveal>

              <Reveal delay={100}>
                <p className="text-[#4A5C5B] leading-relaxed mb-5" style={{ fontSize: "clamp(0.92rem, 1.2vw, 1.02rem)" }}>
                  MedCare was founded in 2009 by Dr. Subhash Menon with one conviction:
                  specialist healthcare should not require a journey to another city. Starting
                  with six doctors in a rented space in Salt Lake, we grew because patients
                  trusted us — and we never took that trust lightly.
                </p>
                <p className="text-[#4A5C5B] leading-relaxed mb-8" style={{ fontSize: "clamp(0.92rem, 1.2vw, 1.02rem)" }}>
                  Today, across three branches, our 30+ specialists treat over 200 patients
                  daily. We hold ourselves to a single standard: that every person who walks
                  through our doors leaves feeling genuinely cared for.
                </p>
              </Reveal>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "🏥", title: "3 Branches", sub: "Across Kolkata" },
                  { icon: "👨‍⚕️", title: "30+ Doctors", sub: "Board-certified specialists" },
                  { icon: "⏱", title: "200+ Daily", sub: "Patients seen every day" },
                  { icon: "🌐", title: "12 Languages", sub: "Served by our staff" },
                ].map((p) => (
                  <Reveal key={p.title} delay={150}>
                    <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 border border-[#EDEBE5] shadow-sm">
                      <div className="w-10 h-10 rounded-xl bg-[#EBF7F5] flex items-center justify-center text-xl flex-shrink-0">
                        {p.icon}
                      </div>
                      <div>
                        <p className="font-bold text-[#1C2B2A] text-sm">{p.title}</p>
                        <p className="text-[#9AADAC] text-[11px]">{p.sub}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS BAND
      ══════════════════════════════════════ */}
      <section className="relative py-16 sm:py-18 bg-[#1C2B2A] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute -top-32 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #0D7C6B 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-[1300px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 60} className="text-center">
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className="text-[#4DD8C3] font-bold" style={{ fontSize: "clamp(1.6rem, 2.2vw, 2.2rem)" }}>
                  {s.value}
                </p>
                <p className="text-white/40 text-[10px] tracking-widest uppercase mt-1">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          VALUES
      ══════════════════════════════════════ */}
      <section className="relative py-20 sm:py-24 lg:py-28">
        <div className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
          style={{ background: "radial-gradient(circle, #C97B3A 0%, transparent 70%)" }} />

        <div className="max-w-[1300px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
          <Reveal className="text-center mb-14">
            <SectionLabel>Our Values</SectionLabel>
            <h2
              className="text-[#1C2B2A] font-light leading-tight"
              style={{ fontSize: "clamp(1.9rem, 3.2vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              The Principles That{" "}
              <span className="italic text-[#0D7C6B]">Guide</span>{" "}
              <span className="font-semibold">Everything</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div
                  className="group relative rounded-3xl p-6 sm:p-7 border border-transparent hover:border-current transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl cursor-default h-full flex flex-col"
                  style={{ backgroundColor: v.bg, ["--accent" as string]: v.color } as React.CSSProperties}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${v.color}22`, border: `1.5px solid ${v.color}30` }}
                  >
                    {v.icon}
                  </div>
                  <h3 className="font-semibold text-[#1C2B2A] text-base mb-2">{v.title}</h3>
                  <p className="text-[#4A5C5B] text-sm leading-relaxed flex-1">{v.desc}</p>
                  <div className="mt-5 h-0.5 w-8 rounded-full transition-all duration-400 group-hover:w-16" style={{ backgroundColor: v.color }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TIMELINE
      ══════════════════════════════════════ */}
      <section className="relative py-20 sm:py-24 bg-[#FAFAF7] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0D7C6B] via-[#C97B3A] to-transparent" />

        <div className="max-w-[1100px] mx-auto px-5 sm:px-10 lg:px-16">
          <Reveal className="text-center mb-14">
            <SectionLabel>Our Journey</SectionLabel>
            <h2
              className="text-[#1C2B2A] font-light leading-tight"
              style={{ fontSize: "clamp(1.9rem, 3.2vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Fifteen Years,{" "}
              <span className="italic text-[#0D7C6B]">One</span>{" "}
              <span className="font-semibold">Mission</span>
            </h2>
          </Reveal>

          {/* Timeline */}
          <div className="relative">
            {/* Centre line — desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-[#0D7C6B]/30 via-[#C97B3A]/30 to-transparent" />

            <div className="flex flex-col gap-10 lg:gap-0">
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <Reveal
                    key={m.year}
                    delay={i * 60}
                    className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-0 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  >
                    {/* Card */}
                    <div className={`w-full lg:w-[45%] ${isLeft ? "lg:pr-10 lg:text-right" : "lg:pl-10 lg:text-left"}`}>
                      <div className="bg-white rounded-2xl px-6 py-5 shadow-[0_2px_20px_rgba(0,0,0,0.07)] border border-[#EDEBE5] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                        <div className="flex items-center gap-2 mb-2 lg:justify-end" style={{ justifyContent: isLeft ? undefined : "flex-start" }}>
                          {!isLeft && <span className="text-[#C97B3A] text-xs">✦</span>}
                          <span className="font-bold text-[#0D7C6B] text-2xl">{m.year}</span>
                          {isLeft && <span className="text-[#C97B3A] text-xs">✦</span>}
                        </div>
                        <h3 className="font-semibold text-[#1C2B2A] text-base mb-2">{m.title}</h3>
                        <p className="text-[#6B7E7D] text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>

                    {/* Centre dot — desktop */}
                    <div className="hidden lg:flex w-[10%] items-center justify-center">
                      <div className="w-4 h-4 rounded-full border-2 border-[#0D7C6B] bg-[#F5F0E8] shadow-md" />
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden lg:block w-[45%]" />

                    {/* Mobile dot */}
                    <div className="lg:hidden absolute left-0 top-6 w-3 h-3 rounded-full border-2 border-[#0D7C6B] bg-[#F5F0E8] -translate-x-1.5 shadow" />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          LEADERSHIP
      ══════════════════════════════════════ */}
      <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
        <div className="absolute -right-40 top-20 w-[400px] h-[400px] rounded-full opacity-[0.05] pointer-events-none"
          style={{ background: "radial-gradient(circle, #0D7C6B 0%, transparent 70%)" }} />

        <div className="max-w-[1300px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
          <Reveal className="text-center mb-14">
            <SectionLabel>Leadership</SectionLabel>
            <h2
              className="text-[#1C2B2A] font-light leading-tight"
              style={{ fontSize: "clamp(1.9rem, 3.2vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              The People{" "}
              <span className="italic text-[#0D7C6B]">Shaping</span>{" "}
              <span className="font-semibold">Our Future</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {leadership.map((l, i) => (
              <Reveal key={l.name} delay={i * 100}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1.5">
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={l.image}
                      alt={l.name}
                      className="w-full h-full object-cover object-top transition-transform duration-600 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B28]/70 via-[#0D2B28]/10 to-transparent" />
                    {/* Name on image */}
                    <div className="absolute bottom-4 left-5 right-5">
                      <p className="text-white font-semibold text-lg leading-tight">{l.name}</p>
                      <p className="text-[#4DD8C3] text-xs font-semibold tracking-wide mt-0.5">{l.role}</p>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="px-6 py-5">
                    <div className="flex gap-2 mb-3">
                      <span className="text-[#C97B3A] text-xl leading-none mt-0.5 flex-shrink-0">"</span>
                      <p className="text-[#4A5C5B] text-sm italic leading-relaxed">{l.quote}</p>
                    </div>
                    <div className="h-px bg-[#F0EEEA] mb-3" />
                    <p className="text-[#9AADAC] text-xs leading-relaxed">{l.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          GALLERY
      ══════════════════════════════════════ */}
      <section className="relative py-20 sm:py-24 bg-[#1C2B2A] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        <div className="max-w-[1300px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
          <Reveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 text-white/70 text-[11px] tracking-widest uppercase font-semibold bg-white/5 mb-5">
              <span className="text-[#C97B3A]">✦</span> Our Spaces
            </div>
            <h2
              className="text-white font-light leading-tight"
              style={{ fontSize: "clamp(1.9rem, 3.2vw, 3.2rem)", letterSpacing: "-0.02em" }}
            >
              Designed for{" "}
              <span className="italic text-[#4DD8C3]">Comfort</span>{" "}
              &amp; <span className="font-semibold">Care</span>
            </h2>
          </Reveal>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4" style={{ gridAutoRows: "200px" }}>
            {galleryImages.map((img, i) => (
              <Reveal
                key={i}
                delay={i * 80}
                className={`relative overflow-hidden rounded-2xl ${img.span} group cursor-pointer`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  style={{ transform: "scale(1)" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B28]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-3 left-4 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                  <p className="text-white text-xs font-semibold tracking-wide">{img.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BAND
      ══════════════════════════════════════ */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0D7C6B] via-[#C97B3A] to-transparent" />
          <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, #0D7C6B 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-[1300px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
          <div className="relative bg-[#1C2B2A] rounded-3xl px-8 sm:px-12 lg:px-16 py-14 sm:py-16 overflow-hidden text-center">
            {/* Pattern inside */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-15"
              style={{ background: "radial-gradient(circle, #0D7C6B 0%, transparent 70%)" }} />

            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 text-white/70 text-[11px] tracking-widest uppercase font-semibold bg-white/5 mb-6">
                <span className="text-[#C97B3A]">✦</span> Start Your Journey
              </div>
              <h2
                className="text-white font-light leading-tight mb-4"
                style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)", letterSpacing: "-0.02em" }}
              >
                Ready to Experience
                <br />
                <span className="italic text-[#4DD8C3]">Healthcare</span>{" "}
                <span className="font-semibold">That Cares?</span>
              </h2>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#C97B3A]" />
                <span className="text-[#C97B3A]">✦</span>
                <div className="h-px w-10 bg-[#C97B3A]" />
              </div>
              <p className="text-white/50 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-8">
                Book an appointment with a specialist, generate your token online, and walk
                in with confidence — we'll take care of the rest.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="px-8 py-3.5 rounded-xl bg-[#0D7C6B] text-white font-semibold text-sm tracking-wide hover:bg-[#0a6358] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(13,124,107,0.45)]">
                  Book Appointment
                </button>
                <button className="px-8 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-sm tracking-wide hover:border-[#4DD8C3] hover:text-[#4DD8C3] transition-all duration-200">
                  Explore Our Doctors →
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
}