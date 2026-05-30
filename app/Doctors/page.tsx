"use client";

import { useState } from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Reena Shah",
    title: "Senior Cardiologist",
    department: "Cardiology",
    experience: "18 Years",
    qualification: "MBBS, MD (Cardiology), DM – AIIMS Delhi",
    languages: ["English", "Hindi", "Bengali"],
    branch: "MedCare Central",
    availability: "Mon, Wed, Fri · 10am – 2pm",
    fee: "₹ 800",
    rating: 4.9,
    reviews: 312,
    patients: "6,200+",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=85",
    accentColor: "#0D7C6B",
    accentLight: "#EBF7F5",
    tagBg: "#D1F0EA",
    tagText: "#0D7C6B",
    specializations: [
      "Interventional Cardiology",
      "Heart Failure Management",
      "Echocardiography",
      "Preventive Cardiology",
    ],
    bio: "Dr. Reena Shah is one of Kolkata's most respected cardiologists with over 18 years of clinical experience. Trained at AIIMS Delhi, she specializes in minimally invasive cardiac procedures and has been instrumental in saving thousands of lives through timely intervention and evidence-based care.",
    awards: ["Best Cardiologist – Bengal Medical Awards 2022", "Top Doctor – Times Health 2023"],
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 2,
    name: "Dr. Arjun Mehta",
    title: "Chief Neurologist",
    department: "Neurology",
    experience: "14 Years",
    qualification: "MBBS, MD, DM (Neurology) – CMC Vellore",
    languages: ["English", "Hindi", "Marathi"],
    branch: "MedCare Newtown",
    availability: "Tue, Thu, Sat · 11am – 3pm",
    fee: "₹ 900",
    rating: 4.8,
    reviews: 228,
    patients: "4,800+",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=85",
    accentColor: "#2563EB",
    accentLight: "#EEF3FE",
    tagBg: "#DBEAFE",
    tagText: "#2563EB",
    specializations: [
      "Epilepsy & Seizure Disorders",
      "Stroke Management",
      "Parkinson's Disease",
      "Migraine & Headache",
    ],
    bio: "Dr. Arjun Mehta brings world-class neurology expertise to MedCare. A graduate of CMC Vellore, he is known for his precision in diagnosing complex neurological conditions and his compassionate patient-first approach. He has published 11 peer-reviewed research papers.",
    awards: ["Young Neurologist of the Year – IANCON 2021", "Research Excellence Award – CMC 2019"],
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: 3,
    name: "Dr. Priya Kumar",
    title: "Lead Pediatrician",
    department: "Pediatrics",
    experience: "11 Years",
    qualification: "MBBS, MD (Pediatrics) – KPC Medical College",
    languages: ["English", "Bengali", "Hindi"],
    branch: "MedCare Southpoint",
    availability: "Mon – Sat · 9am – 1pm",
    fee: "₹ 600",
    rating: 4.9,
    reviews: 417,
    patients: "8,100+",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=85",
    accentColor: "#C97B3A",
    accentLight: "#FEF6ED",
    tagBg: "#FDECD8",
    tagText: "#C97B3A",
    specializations: [
      "Neonatal Care",
      "Child Nutrition & Growth",
      "Vaccination Programs",
      "Developmental Pediatrics",
    ],
    bio: "Dr. Priya Kumar is beloved by families across Kolkata for her warmth and expertise in child health. With over 11 years caring for newborns to teenagers, she is a trusted voice in neonatal wellness and child developmental milestones. Her clinic sees over 40 children daily.",
    awards: ["Best Pediatrician – Kolkata Health Conclave 2023", "Community Hero Award – 2022"],
    social: { linkedin: "#", twitter: "#" },
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z"
            fill={s <= Math.round(rating) ? "#F4B942" : "#E5E7EB"}
            stroke={s <= Math.round(rating) ? "#F4B942" : "#D1D5DB"}
            strokeWidth="0.5"
          />
        </svg>
      ))}
    </div>
  );
}

type Doctor = (typeof doctors)[0];

function DoctorModal({ doctor, onClose }: { doctor: Doctor; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0D2B28]/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto">
        {/* Header image band */}
        <div
          className="relative h-36 sm:h-44 rounded-t-3xl overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${doctor.accentColor}22 0%, ${doctor.accentColor}08 100%)` }}
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#1C2B2A] hover:bg-white transition-all text-lg font-light shadow"
          >
            ✕
          </button>
          {/* Accent bar */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ backgroundColor: doctor.accentColor }}
          />
        </div>

        {/* Avatar overlap */}
        <div className="relative px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 -mt-14 sm:-mt-16 mb-6">
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-4 border-white shadow-xl flex-shrink-0"
              style={{ outline: `2px solid ${doctor.accentColor}30` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover object-top" />
            </div>
            <div className="pb-1 flex-1">
              <span
                className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-2"
                style={{ backgroundColor: doctor.tagBg, color: doctor.tagText }}
              >
                {doctor.department}
              </span>
              <h2 className="text-[#1C2B2A] font-semibold text-xl sm:text-2xl leading-tight">{doctor.name}</h2>
              <p className="text-[#6B7E7D] text-sm">{doctor.title}</p>
            </div>
            {/* Rating badge */}
            <div className="flex items-center gap-2 bg-[#F5F0E8] rounded-xl px-4 py-2.5 flex-shrink-0 self-start sm:self-auto">
              <span className="text-2xl font-bold text-[#1C2B2A]">{doctor.rating}</span>
              <div className="flex flex-col gap-0.5">
                <StarRating rating={doctor.rating} />
                <span className="text-[10px] text-[#9AADAC]">{doctor.reviews} reviews</span>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: "Experience", value: doctor.experience },
              { label: "Patients", value: doctor.patients },
              { label: "Consult Fee", value: doctor.fee },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl text-center py-4 px-2"
                style={{ backgroundColor: doctor.accentLight }}
              >
                <p className="font-bold text-lg sm:text-xl" style={{ color: doctor.accentColor }}>{s.value}</p>
                <p className="text-[10px] tracking-widest uppercase text-[#9AADAC] mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="mb-6">
            <h4 className="text-[11px] tracking-widest uppercase text-[#9AADAC] font-semibold mb-2">About</h4>
            <p className="text-[#4A5C5B] text-sm leading-relaxed">{doctor.bio}</p>
          </div>

          {/* Specializations */}
          <div className="mb-6">
            <h4 className="text-[11px] tracking-widest uppercase text-[#9AADAC] font-semibold mb-3">Specializations</h4>
            <div className="flex flex-wrap gap-2">
              {doctor.specializations.map((sp) => (
                <span
                  key={sp}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border"
                  style={{ borderColor: `${doctor.accentColor}30`, color: doctor.accentColor, backgroundColor: doctor.accentLight }}
                >
                  {sp}
                </span>
              ))}
            </div>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { label: "Qualification", value: doctor.qualification },
              { label: "Branch", value: doctor.branch },
              { label: "Availability", value: doctor.availability },
              { label: "Languages", value: doctor.languages.join(", ") },
            ].map((d) => (
              <div key={d.label} className="bg-[#FAFAF7] rounded-xl px-4 py-3 border border-[#F0EEEA]">
                <p className="text-[10px] tracking-widest uppercase text-[#9AADAC] font-semibold mb-1">{d.label}</p>
                <p className="text-sm font-semibold text-[#1C2B2A]">{d.value}</p>
              </div>
            ))}
          </div>

          {/* Awards */}
          <div className="mb-7">
            <h4 className="text-[11px] tracking-widest uppercase text-[#9AADAC] font-semibold mb-3">Awards & Recognition</h4>
            <div className="flex flex-col gap-2">
              {doctor.awards.map((a) => (
                <div key={a} className="flex items-center gap-3 text-sm text-[#4A5C5B]">
                  <span className="text-[#C97B3A] text-base flex-shrink-0">✦</span>
                  {a}
                </div>
              ))}
            </div>
          </div>

          {/* Close button only */}
          <div className="pb-7">
            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-xl border border-[#1C2B2A]/20 text-[#1C2B2A] font-semibold text-sm tracking-wide hover:border-[#0D7C6B] hover:text-[#0D7C6B] transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DoctorsPage() {
  const [activeModal, setActiveModal] = useState<Doctor | null>(null);

  return (
    <div style={{ fontFamily: "'Georgia', serif" }} className="min-h-screen bg-[#F5F0E8]">

      {/* Modal */}
      {activeModal && (
        <DoctorModal doctor={activeModal} onClose={() => setActiveModal(null)} />
      )}

      {/* ── PAGE HEADER ── */}
      <div className="relative bg-[#1C2B2A] overflow-hidden">
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #0D7C6B 0%, transparent 70%)" }} />
        <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #C97B3A 0%, transparent 70%)" }} />
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#0D7C6B] via-[#C97B3A] to-transparent" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 text-white/70 text-[11px] tracking-widest uppercase font-semibold bg-white/5 mb-6">
            <span className="text-[#C97B3A]">✦</span> Our Medical Team
          </div>
          <h1
            className="text-white font-light leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", letterSpacing: "-0.025em" }}
          >
            Meet the Doctors
            <br />
            <span className="italic text-[#0D7C6B]">Healing</span>{" "}
            <span className="font-semibold">With Purpose</span>
          </h1>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#C97B3A]" />
            <span className="text-[#C97B3A]">✦</span>
            <div className="h-px w-10 bg-[#C97B3A]" />
          </div>
          <p className="text-white/50 text-sm sm:text-base max-w-xl leading-relaxed">
            Board-certified specialists with decades of combined experience, committed to
            delivering excellence in every consultation.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 sm:gap-10 mt-10 pt-8 border-t border-white/10">
            {[
              { value: "30+", label: "Specialists" },
              { value: "15+", label: "Departments" },
              { value: "19K+", label: "Patients Treated" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-[#0D7C6B] font-bold" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)" }}>{s.value}</p>
                <p className="text-white/40 text-[10px] tracking-widest uppercase mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DOCTOR CARDS ── */}
      <div className="max-w-[1300px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_2px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.13)] transition-all duration-500 hover:-translate-y-2 flex flex-col cursor-pointer"
              onClick={() => setActiveModal(doctor)}
            >
              {/* Top accent line */}
              <div className="h-1 w-full" style={{ backgroundColor: doctor.accentColor }} />

              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B28]/70 via-[#0D2B28]/10 to-transparent" />

                {/* Department tag */}
                <span
                  className="absolute top-4 left-4 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md"
                  style={{ backgroundColor: doctor.tagBg, color: doctor.tagText }}
                >
                  {doctor.department}
                </span>

                {/* Rating on image */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-2.5 py-1">
                  <span className="text-[#F4B942] text-xs">★</span>
                  <span className="text-white text-xs font-bold">{doctor.rating}</span>
                </div>

                {/* Name overlay on image bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg sm:text-xl leading-tight">{doctor.name}</h3>
                  <p className="text-white/70 text-xs mt-0.5">{doctor.title}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 sm:p-6">

                {/* Stats mini row */}
                <div className="flex gap-4 mb-5 pb-5 border-b border-[#F0EEEA]">
                  {[
                    { label: "Experience", value: doctor.experience },
                    { label: "Patients", value: doctor.patients },
                    { label: "Fee", value: doctor.fee },
                  ].map((s) => (
                    <div key={s.label} className="flex-1 text-center">
                      <p className="font-bold text-[#1C2B2A] text-sm sm:text-base">{s.value}</p>
                      <p className="text-[9px] tracking-widest uppercase text-[#9AADAC] mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Qualification */}
                <div className="flex items-start gap-2 mb-4">
                  <span className="text-[#C97B3A] text-sm flex-shrink-0 mt-0.5">🎓</span>
                  <p className="text-[#6B7E7D] text-xs leading-relaxed">{doctor.qualification}</p>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm flex-shrink-0">🕐</span>
                  <p className="text-[#4A5C5B] text-xs font-semibold">{doctor.availability}</p>
                </div>

                {/* Branch */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-sm flex-shrink-0">📍</span>
                  <p className="text-xs text-[#6B7E7D]">{doctor.branch}</p>
                </div>

                {/* Specialization chips (top 2) */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {doctor.specializations.slice(0, 2).map((sp) => (
                    <span
                      key={sp}
                      className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: doctor.accentLight, color: doctor.accentColor }}
                    >
                      {sp}
                    </span>
                  ))}
                  {doctor.specializations.length > 2 && (
                    <span className="text-[10px] text-[#9AADAC] px-2.5 py-1 rounded-full bg-[#F5F0E8]">
                      +{doctor.specializations.length - 2} more
                    </span>
                  )}
                </div>

                {/* Star rating row */}
                <div className="flex items-center gap-2 mb-5">
                  <StarRating rating={doctor.rating} />
                  <span className="text-xs text-[#9AADAC]">{doctor.reviews} reviews</span>
                </div>

                {/* CTA – View Profile only */}
                <button
                  className="mt-auto w-full py-3 rounded-xl text-white font-semibold text-xs tracking-wide transition-all duration-300 hover:opacity-90 hover:shadow-md"
                  style={{ backgroundColor: doctor.accentColor }}
                  onClick={(e) => { e.stopPropagation(); setActiveModal(doctor); }}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM TRUST BAND ── */}
      <div className="bg-[#1C2B2A] py-10 sm:py-12">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-base sm:text-lg mb-1">
              Want to join our medical team?
            </p>
            <p className="text-white/40 text-sm">We're always looking for passionate specialists.</p>
          </div>
          <button className="px-6 py-3.5 rounded-xl bg-[#0D7C6B] text-white text-sm font-semibold tracking-wide hover:bg-[#0a6358] hover:shadow-[0_8px_24px_rgba(13,124,107,0.4)] transition-all duration-300 flex-shrink-0">
            Apply to MedCare →
          </button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}