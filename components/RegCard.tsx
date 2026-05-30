"use client";

import { useState } from "react";

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

type Step = "branches" | "form" | "success";

interface FormData {
  name: string;
  phone: string;
  age: string;
  gender: string;
  department: string;
  date: string;
  reason: string;
}

const departments = [
  "General Care", "Cardiology", "Neurology", "Dental Care",
  "Ophthalmology", "Orthopedics", "Pediatrics", "Dermatology",
];

export default function BranchTokenSection() {
  const [step, setStep] = useState<Step>("branches");
  const [selectedBranch, setSelectedBranch] = useState<(typeof branches)[0] | null>(null);
  const [token, setToken] = useState("");
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", age: "", gender: "", department: "", date: "", reason: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleBranchSelect = (branch: (typeof branches)[0]) => {
    setSelectedBranch(branch);
    setStep("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = "Enter a valid 10-digit mobile number";
    if (!form.age || Number(form.age) < 1 || Number(form.age) > 120) e.age = "Enter a valid age";
    if (!form.gender) e.gender = "Please select gender";
    if (!form.department) e.department = "Please select a department";
    if (!form.date) e.date = "Please choose a date";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    const rand = Math.floor(100 + Math.random() * 900);
    const dept = form.department.replace(/\s/g, "").substring(0, 3).toUpperCase();
    setToken(`${dept}-${rand}`);
    setStep("success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const reset = () => {
    setStep("branches");
    setSelectedBranch(null);
    setToken("");
    setForm({ name: "", phone: "", age: "", gender: "", department: "", date: "", reason: "" });
    setErrors({});
  };

  const field = (
    label: string,
    key: keyof FormData,
    type = "text",
    placeholder = ""
  ) => (
    <div className="flex flex-col gap-1">
      <label className="text-[11px] tracking-widest uppercase text-[#4A5C5B] font-semibold">
        {label}
      </label>
      <input
        type={type}
        value={form[key]}
        placeholder={placeholder}
        min={type === "date" ? new Date().toISOString().split("T")[0] : undefined}
        onChange={(e) => {
          setForm((p) => ({ ...p, [key]: e.target.value }));
          setErrors((p) => ({ ...p, [key]: undefined }));
        }}
        className={`px-4 py-3 rounded-xl border text-sm text-[#1C2B2A] bg-white outline-none transition-all duration-200
          focus:ring-2 focus:ring-[#0D7C6B]/30 focus:border-[#0D7C6B]
          ${errors[key] ? "border-red-400 bg-red-50" : "border-[#D0D9D8]"}`}
        style={{ fontFamily: "'Georgia', serif" }}
      />
      {errors[key] && (
        <span className="text-[10px] text-red-500 font-medium">{errors[key]}</span>
      )}
    </div>
  );

  return (
    <section
      className="relative bg-[#FAFAF7] overflow-hidden py-20 sm:py-24"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#0D7C6B 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#0D7C6B] via-[#C97B3A] to-transparent" />

      <div className="relative z-10 max-w-325 mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">

        {/* ── STEP: BRANCH SELECTION ── */}
        {step === "branches" && (
          <>
            {/* Section header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D7C6B]/25 text-[#0D7C6B] text-[11px] tracking-widest uppercase font-semibold bg-[#0D7C6B]/5 mb-5">
                <span className="text-[#C97B3A]">✦</span> Choose Your Branch
              </div>
              <h2 className="text-[#1C2B2A] font-light mb-3 leading-tight"
                style={{ fontSize: "clamp(1.9rem, 3.5vw, 3.2rem)", letterSpacing: "-0.02em" }}>
                Select a Branch &amp;
                <br />
                <span className="italic text-[#0D7C6B]">Generate</span>{" "}
                <span className="font-semibold">Your Token</span>
              </h2>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#C97B3A]" />
                <span className="text-[#C97B3A] text-xs">✦</span>
                <div className="h-px w-10 bg-[#C97B3A]" />
              </div>
              <p className="text-[#6B7E7D] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                Pick the clinic nearest to you, register your details, and receive
                a unique token — skip the waiting-room chaos.
              </p>
            </div>

            {/* Branch cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {branches.map((branch) => (
                <div
                  key={branch.id}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_40px_rgba(13,124,107,0.18)] transition-all duration-400 hover:-translate-y-1.5 cursor-pointer flex flex-col"
                  onClick={() => handleBranchSelect(branch)}
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
                      <span className="text-white text-[10px] font-semibold">Wait {branch.waitTime}</span>
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
                    <div className="flex gap-4 mb-4 pt-4 border-t border-[#F0EEEA]">
                      {[
                        { label: "Doctors", value: branch.doctors },
                        { label: "Specialties", value: branch.specialties },
                      ].map((s) => (
                        <div key={s.label} className="flex flex-col">
                          <span className="text-[#0D7C6B] font-bold text-lg">{s.value}+</span>
                          <span className="text-[#9AADAC] text-[10px] tracking-widest uppercase">{s.label}</span>
                        </div>
                      ))}
                      <div className="flex flex-col ml-auto text-right">
                        <span className="text-[#4A5C5B] text-xs font-semibold">{branch.timing}</span>
                        <span className="text-[#9AADAC] text-[10px]">{branch.phone}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button
                      className="mt-auto w-full py-3 rounded-xl font-semibold text-sm tracking-wide text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3"
                      style={{ backgroundColor: branch.tagColor }}
                    >
                      Get Token Here
                      <span className="transition-transform group-hover:translate-x-1 duration-300">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <p className="text-center text-[#9AADAC] text-xs mt-10 tracking-wide">
              Token registration is free · Valid for selected date only · Bring a valid ID
            </p>
          </>
        )}

        {/* ── STEP: REGISTRATION FORM ── */}
        {step === "form" && selectedBranch && (
          <div className="max-w-2xl mx-auto">
            {/* Back */}
            <button
              onClick={reset}
              className="flex items-center gap-2 text-[#0D7C6B] text-sm font-semibold mb-8 hover:gap-3 transition-all duration-200"
            >
              ← Back to Branches
            </button>

            {/* Selected branch pill */}
            <div className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border border-[#E8E4DC] mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                style={{ backgroundColor: selectedBranch.tagColor }}
              >
                {selectedBranch.id}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[#1C2B2A] text-sm truncate">{selectedBranch.name}</p>
                <p className="text-[#9AADAC] text-xs truncate">{selectedBranch.address}</p>
              </div>
              <span
                className="text-[10px] font-bold tracking-widest uppercase text-white px-3 py-1 rounded-full shrink-0"
                style={{ backgroundColor: selectedBranch.tagColor }}
              >
                {selectedBranch.tag}
              </span>
            </div>

            {/* Form card */}
            <div className="bg-white rounded-3xl shadow-[0_4px_40px_rgba(0,0,0,0.08)] border border-[#EDEBE5] overflow-hidden">
              {/* Card header */}
              <div className="px-7 sm:px-8 pt-8 pb-5 border-b border-[#F0EEEA]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0D7C6B]/25 text-[#0D7C6B] text-[10px] tracking-widest uppercase font-semibold bg-[#0D7C6B]/5 mb-3">
                  ✦ Token Registration
                </div>
                <h3 className="text-[#1C2B2A] font-semibold text-xl sm:text-2xl">
                  Patient Details
                </h3>
                <p className="text-[#9AADAC] text-sm mt-1">
                  Fill in your information to generate a queue token.
                </p>
              </div>

              {/* Fields */}
              <div className="px-7 sm:px-8 py-7 flex flex-col gap-5">
                {/* Row: name + phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {field("Full Name", "name", "text", "e.g. Ananya Sharma")}
                  {field("Mobile Number", "phone", "tel", "10-digit number")}
                </div>

                {/* Row: age + gender */}
                <div className="grid grid-cols-2 gap-5">
                  {field("Age", "age", "number", "e.g. 32")}
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] tracking-widest uppercase text-[#4A5C5B] font-semibold">
                      Gender
                    </label>
                    <select
                      value={form.gender}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, gender: e.target.value }));
                        setErrors((p) => ({ ...p, gender: undefined }));
                      }}
                      className={`px-4 py-3 rounded-xl border text-sm text-[#1C2B2A] bg-white outline-none transition-all duration-200
                        focus:ring-2 focus:ring-[#0D7C6B]/30 focus:border-[#0D7C6B]
                        ${errors.gender ? "border-red-400 bg-red-50" : "border-[#D0D9D8]"}`}
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                      <option>Prefer not to say</option>
                    </select>
                    {errors.gender && (
                      <span className="text-[10px] text-red-500 font-medium">{errors.gender}</span>
                    )}
                  </div>
                </div>

                {/* Row: department + date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1">
                    <label className="text-[11px] tracking-widest uppercase text-[#4A5C5B] font-semibold">
                      Department
                    </label>
                    <select
                      value={form.department}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, department: e.target.value }));
                        setErrors((p) => ({ ...p, department: undefined }));
                      }}
                      className={`px-4 py-3 rounded-xl border text-sm text-[#1C2B2A] bg-white outline-none transition-all duration-200
                        focus:ring-2 focus:ring-[#0D7C6B]/30 focus:border-[#0D7C6B]
                        ${errors.department ? "border-red-400 bg-red-50" : "border-[#D0D9D8]"}`}
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      <option value="">Choose department</option>
                      {departments.map((d) => <option key={d}>{d}</option>)}
                    </select>
                    {errors.department && (
                      <span className="text-[10px] text-red-500 font-medium">{errors.department}</span>
                    )}
                  </div>
                  {field("Appointment Date", "date", "date")}
                </div>

                {/* Reason (optional) */}
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] tracking-widest uppercase text-[#4A5C5B] font-semibold">
                    Reason for Visit{" "}
                    <span className="normal-case tracking-normal text-[#9AADAC] font-normal">(optional)</span>
                  </label>
                  <textarea
                    value={form.reason}
                    rows={3}
                    placeholder="Briefly describe your symptoms or concern..."
                    onChange={(e) => setForm((p) => ({ ...p, reason: e.target.value }))}
                    className="px-4 py-3 rounded-xl border border-[#D0D9D8] text-sm text-[#1C2B2A] bg-white outline-none resize-none transition-all duration-200 focus:ring-2 focus:ring-[#0D7C6B]/30 focus:border-[#0D7C6B]"
                    style={{ fontFamily: "'Georgia', serif" }}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full py-3.5 rounded-xl bg-[#0D7C6B] text-white font-semibold text-sm tracking-wide hover:bg-[#0a6358] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(13,124,107,0.35)] hover:-translate-y-0.5 mt-2"
                >
                  Generate My Token →
                </button>

                <p className="text-center text-[#9AADAC] text-[11px]">
                  By registering you agree to our patient privacy policy.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── STEP: SUCCESS / TOKEN ── */}
        {step === "success" && selectedBranch && (
          <div className="max-w-lg mx-auto text-center">
            {/* Check animation */}
            <div className="w-20 h-20 rounded-full bg-[#0D7C6B]/10 flex items-center justify-center mx-auto mb-6">
              <div className="w-14 h-14 rounded-full bg-[#0D7C6B] flex items-center justify-center text-white text-3xl shadow-lg">
                ✓
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D7C6B]/25 text-[#0D7C6B] text-[11px] tracking-widest uppercase font-semibold bg-[#0D7C6B]/5 mb-4">
              ✦ Token Generated
            </div>

            <h2 className="text-[#1C2B2A] font-light mb-2"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              You&apos;re <span className="italic text-[#0D7C6B]">all set,</span>
              <br />
              <span className="font-semibold">{form.name.split(" ")[0]}!</span>
            </h2>

            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-10 bg-[#C97B3A]" />
              <span className="text-[#C97B3A]">✦</span>
              <div className="h-px w-10 bg-[#C97B3A]" />
            </div>

            {/* Token card */}
            <div className="bg-white rounded-3xl shadow-[0_4px_40px_rgba(0,0,0,0.1)] border border-[#EDEBE5] overflow-hidden mb-6">
              {/* Token header */}
              <div className="px-8 pt-7 pb-5 border-b border-[#F0EEEA]">
                <p className="text-[11px] tracking-widest uppercase text-[#9AADAC] font-semibold mb-3">
                  Your Queue Token
                </p>
                <div
                  className="text-5xl sm:text-6xl font-bold tracking-widest text-[#0D7C6B] py-4 px-6 rounded-2xl inline-block"
                  style={{ background: "linear-gradient(135deg, #EBF7F5 0%, #F5F0E8 100%)" }}
                >
                  {token}
                </div>
              </div>

              {/* Details */}
              <div className="px-8 py-6 grid grid-cols-2 gap-4 text-left">
                {[
                  { label: "Branch", value: selectedBranch.name },
                  { label: "Department", value: form.department },
                  { label: "Date", value: new Date(form.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) },
                  { label: "Est. Wait", value: selectedBranch.waitTime },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    <span className="text-[10px] tracking-widest uppercase text-[#9AADAC] font-semibold">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-[#1C2B2A]">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div className="mx-6 mb-6 bg-[#FEF9EE] border border-[#F6E7C1] rounded-xl px-4 py-3 flex gap-3 items-start text-left">
                <span className="text-lg">🔔</span>
                <p className="text-[#7A5C1E] text-xs leading-relaxed">
                  Please arrive <strong>15 minutes early</strong> with this token number and a valid photo ID.
                  Show this screen at the reception desk.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={reset}
                className="px-6 py-3 rounded-xl border border-[#1C2B2A]/20 text-[#1C2B2A] text-sm font-semibold hover:border-[#0D7C6B] hover:text-[#0D7C6B] transition-all duration-200"
              >
                ← Book Another Token
              </button>
              <button
                onClick={() => window.print()}
                className="px-6 py-3 rounded-xl bg-[#0D7C6B] text-white text-sm font-semibold hover:bg-[#0a6358] transition-all duration-200 hover:shadow-[0_6px_20px_rgba(13,124,107,0.35)]"
              >
                🖨 Print / Save Token
              </button>
            </div>

            <p className="text-[#9AADAC] text-[11px] mt-6">
              Token · {form.name} · {form.phone} · {selectedBranch.location}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}