"use client";

import { useState } from "react";

const branches = [
  {
    id: 1,
    name: "MedCare Central",
    location: "Salt Lake City, Kolkata",
    address: "Block CE-45, Sector III, Salt Lake – 700106",
    timing: "Mon – Sat · 8am – 8pm",
    phone: "+91 98300 00001",
    color: "#0D7C6B",
    light: "#EBF7F5",
    tag: "Main Branch",
    waitTime: "~10 min",
    icon: "🏥",
  },
  {
    id: 2,
    name: "MedCare Southpoint",
    location: "Tollygunge, Kolkata",
    address: "12A, Prince Anwar Shah Rd, Tollygunge – 700033",
    timing: "Mon – Sat · 9am – 7pm",
    phone: "+91 98300 00002",
    color: "#C97B3A",
    light: "#FEF6ED",
    tag: "South Hub",
    waitTime: "~15 min",
    icon: "🏨",
  },
  {
    id: 3,
    name: "MedCare Newtown",
    location: "Newtown, Kolkata",
    address: "Plot AA-2, Action Area I, Newtown – 700156",
    timing: "Mon – Sun · 8am – 9pm",
    phone: "+91 98300 00003",
    color: "#2563EB",
    light: "#EEF3FE",
    tag: "24/7 Open",
    waitTime: "~8 min",
    icon: "🏩",
  },
];

const departments = [
  "General Care", "Cardiology", "Neurology", "Dental Care",
  "Ophthalmology", "Orthopedics", "Pediatrics", "Dermatology",
  "Gynecology", "ENT", "Psychiatry", "Physiotherapy",
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "2:00 PM",
  "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM",
  "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM",
];

type Step = 1 | 2 | 3 | 4;

interface FormData {
  branch: (typeof branches)[0] | null;
  department: string;
  date: string;
  timeSlot: string;
  name: string;
  phone: string;
  age: string;
  gender: string;
  reason: string;
}

const EMPTY_FORM: FormData = {
  branch: null,
  department: "",
  date: "",
  timeSlot: "",
  name: "",
  phone: "",
  age: "",
  gender: "",
  reason: "",
};

const steps = [
  { num: 1, label: "Branch" },
  { num: 2, label: "Schedule" },
  { num: 3, label: "Details" },
  { num: 4, label: "Confirm" },
];

function genToken(dept: string) {
  const prefix = dept.replace(/\s/g, "").substring(0, 3).toUpperCase();
  return `${prefix}-${Math.floor(100 + Math.random() * 900)}`;
}

export default function AppointmentForm() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [token, setToken] = useState("");
  const [booked, setBooked] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const set = <K extends keyof FormData>(key: K, val: FormData[K]) => {
    setForm((p) => ({ ...p, [key]: val }));
    setErrors((p) => ({ ...p, [key]: undefined }));
  };

  const validateStep = (s: Step): boolean => {
    const e: typeof errors = {};
    if (s === 1 && !form.branch) e.branch = "Please select a branch";
    if (s === 2) {
      if (!form.department) e.department = "Select a department";
      if (!form.date) e.date = "Choose a date";
      if (!form.timeSlot) e.timeSlot = "Choose a time slot";
    }
    if (s === 3) {
      if (!form.name.trim()) e.name = "Full name is required";
      if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = "Enter a valid 10-digit number";
      if (!form.age || +form.age < 1 || +form.age > 120) e.age = "Enter a valid age";
      if (!form.gender) e.gender = "Select gender";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validateStep(step)) setStep((s) => (s + 1) as Step);
  };

  const confirm = () => {
    setToken(genToken(form.department));
    setBooked(true);
  };

  const reset = () => {
    setStep(1);
    setForm(EMPTY_FORM);
    setErrors({});
    setToken("");
    setBooked(false);
  };

  const accentColor = form.branch?.color ?? "#0D7C6B";
  const accentLight = form.branch?.light ?? "#EBF7F5";

  // ── SUCCESS SCREEN ──
  if (booked && form.branch) {
    return (
      <section className="min-h-screen bg-[#FAFAF7] flex items-center justify-center px-5 py-16"
        style={{ fontFamily: "'Georgia', serif" }}>
        <div className="w-full max-w-lg text-center">
          <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ backgroundColor: accentLight }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl shadow-lg"
              style={{ backgroundColor: accentColor }}>✓</div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] tracking-widest uppercase font-semibold mb-4"
            style={{ borderColor: `${accentColor}40`, color: accentColor, backgroundColor: accentLight }}>
            ✦ Appointment Confirmed
          </div>

          <h2 className="text-[#1C2B2A] font-light mb-2"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "-0.02em" }}>
            You&apos;re all set,{" "}
            <span className="font-semibold italic" style={{ color: accentColor }}>
              {form.name.split(" ")[0]}!
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-10 bg-[#C97B3A]" />
            <span className="text-[#C97B3A]">✦</span>
            <div className="h-px w-10 bg-[#C97B3A]" />
          </div>

          {/* Token + details card */}
          <div className="bg-white rounded-3xl shadow-[0_4px_40px_rgba(0,0,0,0.1)] border border-[#EDEBE5] overflow-hidden mb-6 text-left">
            <div className="px-8 pt-7 pb-5 border-b border-[#F0EEEA] text-center">
              <p className="text-[11px] tracking-widest uppercase text-[#9AADAC] font-semibold mb-3">
                Your Queue Token
              </p>
              <div className="text-5xl font-bold tracking-widest py-4 px-6 rounded-2xl inline-block"
                style={{ color: accentColor, background: `linear-gradient(135deg, ${accentLight} 0%, #F5F0E8 100%)` }}>
                {token}
              </div>
            </div>

            <div className="px-8 py-6 grid grid-cols-2 gap-4">
              {[
                { label: "Branch", value: form.branch.name },
                { label: "Department", value: form.department },
                { label: "Date", value: new Date(form.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) },
                { label: "Time", value: form.timeSlot },
                { label: "Patient", value: form.name },
                { label: "Est. Wait", value: form.branch.waitTime },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] tracking-widest uppercase text-[#9AADAC] font-semibold">{item.label}</p>
                  <p className="text-sm font-semibold text-[#1C2B2A] mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mx-6 mb-6 bg-[#FEF9EE] border border-[#F6E7C1] rounded-xl px-4 py-3 flex gap-3 items-start">
              <span className="text-lg">🔔</span>
              <p className="text-[#7A5C1E] text-xs leading-relaxed">
                Please arrive <strong>15 minutes early</strong> with this token and a valid photo ID.
                Show this screen at the reception desk.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={reset}
              className="px-6 py-3 rounded-xl border border-[#1C2B2A]/20 text-[#1C2B2A] text-sm font-semibold hover:border-[#0D7C6B] hover:text-[#0D7C6B] transition-all duration-200">
              ← Book Another
            </button>
            <button onClick={() => window.print()}
              className="px-6 py-3 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: accentColor }}>
              🖨 Print / Save
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ── MAIN FORM ──
  return (
    <section className="min-h-screen bg-[#FAFAF7] py-16 px-5 sm:px-8"
      style={{ fontFamily: "'Georgia', serif" }}>

      {/* Dot texture bg */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(#0D7C6B 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0D7C6B] via-[#C97B3A] to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D7C6B]/25 text-[#0D7C6B] text-[11px] tracking-widest uppercase font-semibold bg-[#0D7C6B]/5 mb-5">
            <span className="text-[#C97B3A]">✦</span> Book an Appointment
          </div>
          <h1 className="text-[#1C2B2A] font-light leading-tight mb-3"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>
            Reserve Your{" "}
            <span className="italic" style={{ color: accentColor }}>Visit</span>{" "}
            <span className="font-semibold">Today</span>
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-[#C97B3A]" />
            <span className="text-[#C97B3A] text-xs">✦</span>
            <div className="h-px w-10 bg-[#C97B3A]" />
          </div>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-0 mb-10 select-none">
          {steps.map((s, i) => {
            const done = step > s.num;
            const active = step === s.num;
            return (
              <div key={s.num} className="flex items-center">
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 shadow-sm"
                    style={{
                      backgroundColor: done || active ? accentColor : "#E8E4DC",
                      color: done || active ? "white" : "#9AADAC",
                      transform: active ? "scale(1.15)" : "scale(1)",
                    }}
                  >
                    {done ? "✓" : s.num}
                  </div>
                  <span
                    className="text-[10px] tracking-widest uppercase font-semibold transition-colors duration-300"
                    style={{ color: active ? accentColor : done ? "#6B7E7D" : "#C0BAB0" }}
                  >
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-12 sm:w-20 h-px mx-2 mb-4 transition-all duration-500"
                    style={{ backgroundColor: step > s.num ? accentColor : "#E8E4DC" }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-[0_4px_40px_rgba(0,0,0,0.08)] border border-[#EDEBE5] overflow-hidden">

          {/* Card top accent */}
          <div className="h-1 transition-all duration-500" style={{ backgroundColor: accentColor }} />

          <div className="px-6 sm:px-8 pt-7 pb-8">

            {/* ── STEP 1: Branch ── */}
            {step === 1 && (
              <div>
                <StepHeader
                  badge="Step 1 of 4"
                  title="Choose Your Branch"
                  sub="Select the MedCare clinic nearest to you."
                  accentColor={accentColor}
                />
                {errors.branch && <ErrMsg msg={errors.branch} />}
                <div className="flex flex-col gap-4 mt-6">
                  {branches.map((b) => {
                    const selected = form.branch?.id === b.id;
                    return (
                      <button
                        key={b.id}
                        onClick={() => set("branch", b)}
                        className="w-full text-left rounded-2xl border-2 p-5 transition-all duration-250 hover:shadow-md"
                        style={{
                          borderColor: selected ? b.color : "#E8E4DC",
                          backgroundColor: selected ? b.light : "white",
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                            style={{ backgroundColor: b.light }}>
                            {b.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <span className="font-semibold text-[#1C2B2A] text-base">{b.name}</span>
                              <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full text-white"
                                style={{ backgroundColor: b.color }}>{b.tag}</span>
                            </div>
                            <p className="text-xs text-[#9AADAC] mb-1">📍 {b.address}</p>
                            <div className="flex flex-wrap gap-3 mt-2">
                              <span className="text-[11px] text-[#6B7E7D]">🕐 {b.timing}</span>
                              <span className="text-[11px] text-[#6B7E7D]">⏱ Wait {b.waitTime}</span>
                            </div>
                          </div>
                          <div
                            className="w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all"
                            style={{ borderColor: selected ? b.color : "#D0D9D8", backgroundColor: selected ? b.color : "white" }}
                          >
                            {selected && <span className="text-white text-[10px]">✓</span>}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── STEP 2: Schedule ── */}
            {step === 2 && (
              <div>
                <StepHeader
                  badge="Step 2 of 4"
                  title="Pick a Schedule"
                  sub={`Booking at ${form.branch?.name} · ${form.branch?.timing}`}
                  accentColor={accentColor}
                />

                <div className="flex flex-col gap-6 mt-6">
                  {/* Department */}
                  <div>
                    <FieldLabel text="Department" />
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                      {departments.map((d) => {
                        const sel = form.department === d;
                        return (
                          <button key={d} onClick={() => set("department", d)}
                            className="py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all duration-200"
                            style={{
                              borderColor: sel ? accentColor : "#E8E4DC",
                              backgroundColor: sel ? accentLight : "white",
                              color: sel ? accentColor : "#4A5C5B",
                            }}>
                            {d}
                          </button>
                        );
                      })}
                    </div>
                    {errors.department && <ErrMsg msg={errors.department} />}
                  </div>

                  {/* Date */}
                  <div>
                    <FieldLabel text="Appointment Date" />
                    <input
                      type="date"
                      value={form.date}
                      min={today}
                      onChange={(e) => set("date", e.target.value)}
                      className={`mt-1.5 w-full px-4 py-3 rounded-xl border text-sm text-[#1C2B2A] bg-white outline-none transition-all duration-200 focus:ring-2 focus:ring-[#0D7C6B]/25
                        ${errors.date ? "border-red-400 bg-red-50" : "border-[#D0D9D8]"}`}
                      style={{ fontFamily: "'Georgia', serif" }}
                    />
                    {errors.date && <ErrMsg msg={errors.date} />}
                  </div>

                  {/* Time slots */}
                  <div>
                    <FieldLabel text="Time Slot" />
                    <div className="grid grid-cols-4 gap-2 mt-2">
                      {timeSlots.map((t) => {
                        const sel = form.timeSlot === t;
                        return (
                          <button key={t} onClick={() => set("timeSlot", t)}
                            className="py-2 rounded-xl border text-[11px] font-semibold transition-all duration-200"
                            style={{
                              borderColor: sel ? accentColor : "#E8E4DC",
                              backgroundColor: sel ? accentLight : "white",
                              color: sel ? accentColor : "#4A5C5B",
                            }}>
                            {t}
                          </button>
                        );
                      })}
                    </div>
                    {errors.timeSlot && <ErrMsg msg={errors.timeSlot} />}
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 3: Patient Details ── */}
            {step === 3 && (
              <div>
                <StepHeader
                  badge="Step 3 of 4"
                  title="Patient Information"
                  sub="Fill in your details to complete the registration."
                  accentColor={accentColor}
                />

                <div className="flex flex-col gap-5 mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField label="Full Name" placeholder="e.g. Ananya Sharma" value={form.name}
                      error={errors.name} onChange={(v) => set("name", v)} />
                    <InputField label="Mobile Number" placeholder="10-digit number" value={form.phone}
                      type="tel" error={errors.phone} onChange={(v) => set("phone", v)} />
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <InputField label="Age" placeholder="e.g. 32" value={form.age}
                      type="number" error={errors.age} onChange={(v) => set("age", v)} />
                    <div>
                      <FieldLabel text="Gender" />
                      <select value={form.gender}
                        onChange={(e) => set("gender", e.target.value)}
                        className={`mt-1.5 w-full px-4 py-3 rounded-xl border text-sm text-[#1C2B2A] bg-white outline-none transition-all duration-200
                          focus:ring-2 focus:ring-[#0D7C6B]/25 ${errors.gender ? "border-red-400 bg-red-50" : "border-[#D0D9D8]"}`}
                        style={{ fontFamily: "'Georgia', serif" }}>
                        <option value="">Select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        <option>Prefer not to say</option>
                      </select>
                      {errors.gender && <ErrMsg msg={errors.gender} />}
                    </div>
                  </div>

                  <div>
                    <FieldLabel text="Reason for Visit" optional />
                    <textarea value={form.reason} rows={3}
                      placeholder="Briefly describe your symptoms or concern..."
                      onChange={(e) => set("reason", e.target.value)}
                      className="mt-1.5 w-full px-4 py-3 rounded-xl border border-[#D0D9D8] text-sm text-[#1C2B2A] bg-white outline-none resize-none transition-all duration-200 focus:ring-2 focus:ring-[#0D7C6B]/25 focus:border-[#0D7C6B]"
                      style={{ fontFamily: "'Georgia', serif" }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 4: Review ── */}
            {step === 4 && form.branch && (
              <div>
                <StepHeader
                  badge="Step 4 of 4"
                  title="Review & Confirm"
                  sub="Check everything below before confirming your appointment."
                  accentColor={accentColor}
                />

                <div className="mt-6 rounded-2xl border border-[#E8E4DC] overflow-hidden">
                  {/* Branch banner */}
                  <div className="flex items-center gap-4 px-5 py-4 border-b border-[#F0EEEA]"
                    style={{ backgroundColor: accentLight }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                      style={{ backgroundColor: "white" }}>
                      {form.branch.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1C2B2A] text-sm">{form.branch.name}</p>
                      <p className="text-xs text-[#9AADAC]">{form.branch.address}</p>
                    </div>
                    <span className="ml-auto text-[10px] font-bold tracking-widest uppercase text-white px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: form.branch.color }}>{form.branch.tag}</span>
                  </div>

                  {/* Summary rows */}
                  <div className="px-5 py-4 grid grid-cols-2 gap-x-6 gap-y-4">
                    {[
                      { label: "Department", value: form.department },
                      { label: "Date", value: new Date(form.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) },
                      { label: "Time Slot", value: form.timeSlot },
                      { label: "Est. Wait", value: form.branch.waitTime },
                      { label: "Patient Name", value: form.name },
                      { label: "Mobile", value: form.phone },
                      { label: "Age / Gender", value: `${form.age} yrs · ${form.gender}` },
                      ...(form.reason ? [{ label: "Reason", value: form.reason }] : []),
                    ].map((row) => (
                      <div key={row.label} className={row.label === "Reason" ? "col-span-2" : ""}>
                        <p className="text-[10px] tracking-widest uppercase text-[#9AADAC] font-semibold">{row.label}</p>
                        <p className="text-sm font-semibold text-[#1C2B2A] mt-0.5">{row.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 bg-[#FEF9EE] border border-[#F6E7C1] rounded-xl px-4 py-3 flex gap-3 items-start">
                  <span className="text-lg">🔔</span>
                  <p className="text-[#7A5C1E] text-xs leading-relaxed">
                    By confirming, you agree to our patient privacy policy. A token will be generated for your visit.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className={`flex gap-3 mt-8 ${step > 1 ? "justify-between" : "justify-end"}`}>
              {step > 1 && (
                <button
                  onClick={() => setStep((s) => (s - 1) as Step)}
                  className="px-6 py-3 rounded-xl border border-[#D0D9D8] text-[#4A5C5B] text-sm font-semibold hover:border-[#0D7C6B] hover:text-[#0D7C6B] transition-all duration-200"
                >
                  ← Back
                </button>
              )}

              {step < 4 ? (
                <button
                  onClick={next}
                  className="px-8 py-3 rounded-xl text-white text-sm font-semibold tracking-wide transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: accentColor }}
                >
                  Continue →
                </button>
              ) : (
                <button
                  onClick={confirm}
                  className="px-8 py-3 rounded-xl text-white text-sm font-semibold tracking-wide transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: accentColor }}
                >
                  Confirm Appointment ✓
                </button>
              )}
            </div>

            <p className="text-center text-[#C0BAB0] text-[11px] mt-4">
              Free registration · Valid for selected date only · Bring a valid ID
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Small helper components ──

function StepHeader({ badge, title, sub, accentColor }: {
  badge: string; title: string; sub: string; accentColor: string;
}) {
  return (
    <div className="mb-1">
      <span className="text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded-full"
        style={{ backgroundColor: `${accentColor}15`, color: accentColor }}>
        {badge}
      </span>
      <h2 className="text-[#1C2B2A] font-semibold text-xl sm:text-2xl mt-3 mb-1">{title}</h2>
      <p className="text-[#9AADAC] text-sm">{sub}</p>
    </div>
  );
}

function FieldLabel({ text, optional }: { text: string; optional?: boolean }) {
  return (
    <label className="text-[11px] tracking-widest uppercase text-[#4A5C5B] font-semibold">
      {text}
      {optional && <span className="normal-case tracking-normal text-[#9AADAC] font-normal ml-1">(optional)</span>}
    </label>
  );
}

function InputField({ label, placeholder, value, onChange, type = "text", error }: {
  label: string; placeholder?: string; value: string;
  onChange: (v: string) => void; type?: string; error?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <FieldLabel text={label} />
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-0.5 px-4 py-3 rounded-xl border text-sm text-[#1C2B2A] bg-white outline-none transition-all duration-200
          focus:ring-2 focus:ring-[#0D7C6B]/25 focus:border-[#0D7C6B]
          ${error ? "border-red-400 bg-red-50" : "border-[#D0D9D8]"}`}
        style={{ fontFamily: "'Georgia', serif" }}
      />
      {error && <ErrMsg msg={error} />}
    </div>
  );
}

function ErrMsg({ msg }: { msg: string }) {
  return <span className="text-[10px] text-red-500 font-medium mt-0.5">{msg}</span>;
}