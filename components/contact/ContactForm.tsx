"use client";
import { useState } from "react";
import { Send } from "lucide-react";

const SUBJECTS = [
  "General enquiry",
  "Asylum permit assistance",
  "Visa / permit renewal",
  "Legal referral",
  "Labour rights",
  "Emergency support",
  "Membership",
  "Donation / sponsorship",
  "Volunteer",
  "Media / press",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#1E5631]/10 border border-[#1E5631]/30 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#1E5631] flex items-center justify-center mx-auto mb-4">
          <Send className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-display text-xl font-bold text-[#1C1C1C] mb-2">Message Sent!</h3>
        <p className="text-[#3A3A3A] text-sm">
          Thank you for reaching out. Our team will respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 border border-[#EDE8E0] shadow-sm">
      <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#1C1C1C] mb-1">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-[#D9D1C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/30 focus:border-[#8B1A1A]"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1C1C1C] mb-1">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-[#D9D1C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/30 focus:border-[#8B1A1A]"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#1C1C1C] mb-1">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-[#D9D1C5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/30 focus:border-[#8B1A1A]"
            placeholder="+27 ..."
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-[#1C1C1C] mb-1">
            How Can We Help? *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-[#D9D1C5] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/30 focus:border-[#8B1A1A]"
          >
            <option value="">Select a subject</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#1C1C1C] mb-1">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-[#D9D1C5] rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]/30 focus:border-[#8B1A1A]"
            placeholder="Tell us how we can help you..."
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-600">Something went wrong. Please try again or WhatsApp us directly.</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2 py-3 bg-[#8B1A1A] text-white font-semibold rounded-lg hover:bg-[#5C0000] transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : (<><Send className="w-4 h-4" /> Send Message</>)}
        </button>

        <p className="text-xs text-[#3A3A3A]/60 text-center">
          We respond within 24 hours. For emergencies, use WhatsApp.
        </p>
      </form>
    </div>
  );
}
