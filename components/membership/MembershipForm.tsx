"use client";
import { useState } from "react";
import { UserPlus } from "lucide-react";

const TIERS = ["Individual (R100/year)", "Family (R180/year)", "Student (R50/year)", "Corporate (R500+/year)"];
const NATIONALITIES = ["Ghanaian", "Nigerian", "Zimbabwean", "Congolese", "Malawian", "Mozambican", "Zambian", "Kenyan", "Cameroonian", "Senegalese", "Other African", "Other"];

export default function MembershipForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", nationality: "", tier: "", address: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-[#EDE8E0] rounded-2xl p-10 text-center max-w-2xl mx-auto">
        <div className="w-14 h-14 rounded-full bg-[#8B1A1A] flex items-center justify-center mx-auto mb-4">
          <UserPlus className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-display text-xl font-bold text-[#1C1C1C] mb-2">Registration Received!</h3>
        <p className="text-[#3A3A3A] text-sm">
          Welcome to the GDSA community! Our team will be in touch within 48 hours to complete your membership.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#EDE8E0] rounded-2xl p-8 max-w-2xl mx-auto shadow-sm">
      <h2 className="font-display text-2xl font-bold text-[#1C1C1C] mb-6">Member Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#1C1C1C] mb-1">Full Name *</label>
            <input name="name" type="text" required value={form.name} onChange={handleChange}
              className="w-full px-4 py-2.5 border border-[#D9D1C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/30 focus:border-[#8B1A1A]"
              placeholder="Your full legal name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1C1C1C] mb-1">Email *</label>
            <input name="email" type="email" required value={form.email} onChange={handleChange}
              className="w-full px-4 py-2.5 border border-[#D9D1C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/30 focus:border-[#8B1A1A]"
              placeholder="you@example.com" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#1C1C1C] mb-1">Phone / WhatsApp *</label>
            <input name="phone" type="tel" required value={form.phone} onChange={handleChange}
              className="w-full px-4 py-2.5 border border-[#D9D1C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/30 focus:border-[#8B1A1A]"
              placeholder="+27 ..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1C1C1C] mb-1">Nationality *</label>
            <select name="nationality" required value={form.nationality} onChange={handleChange}
              className="w-full px-4 py-2.5 border border-[#D9D1C5] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/30 focus:border-[#8B1A1A]">
              <option value="">Select nationality</option>
              {NATIONALITIES.map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1C1C1C] mb-1">Membership Tier *</label>
          <select name="tier" required value={form.tier} onChange={handleChange}
            className="w-full px-4 py-2.5 border border-[#D9D1C5] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/30 focus:border-[#8B1A1A]">
            <option value="">Select membership tier</option>
            {TIERS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1C1C1C] mb-1">Residential Address (Gauteng)</label>
          <input name="address" type="text" value={form.address} onChange={handleChange}
            className="w-full px-4 py-2.5 border border-[#D9D1C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/30 focus:border-[#8B1A1A]"
            placeholder="Your area / suburb" />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1C1C1C] mb-1">How did you hear about GDSA?</label>
          <textarea name="message" rows={2} value={form.message} onChange={handleChange}
            className="w-full px-4 py-2.5 border border-[#D9D1C5] rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/30 focus:border-[#8B1A1A]"
            placeholder="Optional" />
        </div>
        {status === "error" && (
          <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
        )}
        <button type="submit" disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2 py-3 bg-[#8B1A1A] text-white font-semibold rounded-lg hover:bg-[#5C0000] transition-colors disabled:opacity-60">
          <UserPlus className="w-4 h-4" />
          {status === "loading" ? "Submitting..." : "Submit Membership Application"}
        </button>
        <p className="text-xs text-[#3A3A3A]/60 text-center">
          Our team will contact you within 48 hours with payment instructions.
        </p>
      </form>
    </div>
  );
}
