"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";

const FAQS = [
  {
    q: "Who can GDSA assist — only Ghanaians?",
    a: "No. While GDSA was founded by the Ghanaian community, we welcome and support ALL African migrants and diaspora members living in South Africa, regardless of nationality. We serve Nigerians, Zimbabweans, Congolese, Malawians, Mozambicans, and many others.",
  },
  {
    q: "Is GDSA a registered organisation?",
    a: "Yes. Ghana Diaspora SA is a registered Non Profit Company (NPC) under the South African Companies Act, Registration Number 2020/003516/08, registered on 8 January 2020. Our Tax Reference Number is 9460698195.",
  },
  {
    q: "How does GDSA help with permit and visa issues?",
    a: "GDSA provides guidance, information, and referrals — we walk you through the DHA processes, help you prepare your documentation, and connect you with legal practitioners where needed. We don't charge for basic guidance.",
  },
  {
    q: "What happens if I face xenophobia or discrimination?",
    a: "Contact us immediately via WhatsApp or our emergency line. GDSA has relationships with law enforcement, legal aid organisations, and human rights bodies. We will help you document the incident, access safety, and pursue legal remedies.",
  },
  {
    q: "How do I become a GDSA member?",
    a: "Visit our Membership page, complete the online registration form, and pay the nominal annual membership fee. Members receive priority support, access to networking events, the monthly newsletter, and voting rights in GDSA community matters.",
  },
  {
    q: "Can I volunteer with GDSA?",
    a: "Absolutely. We welcome skilled volunteers — translators, lawyers, social workers, healthcare professionals, business mentors, and community leaders. Visit our Donate/Volunteer page or contact us directly.",
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#3A3A3A]">
            Common questions from our community members.
          </p>
        </AnimateIn>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <AnimateIn key={i} delay={i * 50}>
              <div className="border border-[#EDE8E0] rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-[#1C1C1C] hover:bg-[#F7F4EF] transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="pr-4 text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C8960C] shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 text-[#3A3A3A] text-sm leading-relaxed border-t border-[#EDE8E0] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
