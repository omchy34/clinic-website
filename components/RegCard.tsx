"use client";
import Link from "next/link";
const branches = [
  {
    id: 1,
    name: "MedCare Central",
    location: "Salt Lake City, Kolkata",
    address: "Block CE-45, Sector III, Salt Lake, Kolkata – 700106",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=700&q=80",
    timing: "Mon – Sat · 8am – 8pm",
    phone: "+91 98300 00001",
    tag: "Main Branch",
    tagColor: "#0D7C6B",
    doctors: 24,
    specialties: 12,
    waitTime: "~10 min",
  },
  {
    id: 2,
    name: "MedCare Southpoint",
    location: "Tollygunge, Kolkata",
    address: "12A, Prince Anwar Shah Rd, Tollygunge, Kolkata – 700033",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=80",
    timing: "Mon – Sat · 9am – 7pm",
    phone: "+91 98300 00002",
    tag: "South Hub",
    tagColor: "#C97B3A",
    doctors: 18,
    specialties: 9,
    waitTime: "~15 min",
  },
  {
    id: 3,
    name: "MedCare Newtown",
    location: "Newtown, Kolkata",
    address: "Plot AA-2, Newtown Rd, Action Area I, Kolkata – 700156",
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=700&q=80",
    timing: "Mon – Sun · 8am – 9pm",
    phone: "+91 98300 00003",
    tag: "24/7 Open",
    tagColor: "#2563EB",
    doctors: 30,
    specialties: 15,
    waitTime: "~8 min",
  },
];

export default function BranchSection() {
  return (
    <section
      className="relative bg-[#FAFAF7] overflow-hidden py-20 sm:py-24"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#0D7C6B 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#0D7C6B] via-[#C97B3A] to-transparent" />

      <div className="relative z-10 max-w-325 mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D7C6B]/25 text-[#0D7C6B] text-[11px] tracking-widest uppercase font-semibold bg-[#0D7C6B]/5 mb-5">
            <span className="text-[#C97B3A]">✦</span> Our Branches
          </div>
          <h2
            className="text-[#1C2B2A] font-light mb-3 leading-tight"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 3.2rem)", letterSpacing: "-0.02em" }}
          >
            Find a Branch
            <br />
            <span className="italic text-[#0D7C6B]">Near</span>{" "}
            <span className="font-semibold">You</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C97B3A]" />
            <span className="text-[#C97B3A] text-xs">✦</span>
            <div className="h-px w-10 bg-[#C97B3A]" />
          </div>
          <p className="text-[#6B7E7D] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Three convenient locations across Kolkata — each equipped with
            specialists, modern facilities, and minimal wait times.
          </p>
        </div>

        {/* Branch cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_40px_rgba(13,124,107,0.18)] transition-all duration-400 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0D2B28]/60 via-transparent to-transparent" />
                {/* Tag */}
                <span
                  className="absolute top-3 left-3 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow"
                  style={{ backgroundColor: branch.tagColor }}
                >
                  {branch.tag}
                </span>
                {/* Wait time badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-2.5 py-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white text-[10px] font-semibold">
                    Wait {branch.waitTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <h3 className="text-[#1C2B2A] font-semibold text-lg sm:text-xl mb-1 leading-snug">
                  {branch.name}
                </h3>
                <p className="text-[#0D7C6B] text-xs font-semibold tracking-wide uppercase mb-3">
                  📍 {branch.location}
                </p>
                <p className="text-[#6B7E7D] text-sm leading-relaxed mb-4">
                  {branch.address}
                </p>

                {/* Stats row */}
                <div className="flex gap-4 mb-5 pt-4 border-t border-[#F0EEEA]">
                  {[
                    { label: "Doctors", value: branch.doctors },
                    { label: "Specialties", value: branch.specialties },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col">
                      <span className="text-[#0D7C6B] font-bold text-lg">{s.value}+</span>
                      <span className="text-[#9AADAC] text-[10px] tracking-widest uppercase">
                        {s.label}
                      </span>
                    </div>
                  ))}
                  <div className="flex flex-col ml-auto text-right">
                    <span className="text-[#4A5C5B] text-xs font-semibold">{branch.timing}</span>
                    <span className="text-[#9AADAC] text-[10px]">{branch.phone}</span>
                  </div>
                </div>

                {/* Book Appointment Button */}
                <Link
                  href="/Appointment"
                  className="mt-auto w-full py-3 rounded-xl font-semibold text-sm tracking-wide text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: branch.tagColor }}
                >
                  Book Appointment
                  <span className="transition-transform group-hover:translate-x-1 duration-300">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[#9AADAC] text-xs mt-10 tracking-wide">
          Walk-ins welcome · Bring a valid ID · Emergency care available 24/7
        </p>
      </div>
    </section>
  );
}