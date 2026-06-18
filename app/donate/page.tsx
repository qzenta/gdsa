import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import AnimateIn from "@/components/shared/AnimateIn";
import { buildMetadata } from "@/lib/metadata";
import { Heart, Users, BookOpen, Shield, ArrowRight, CheckCircle, Lock } from "lucide-react";
import Link from "next/link";
import PayFastForm from "@/components/donate/PayFastForm";

export const metadata: Metadata = buildMetadata({
  title: "Donate — Support African Migrants",
  description:
    "Your donation to Ghana Diaspora SA directly funds migrant support services, legal clinics, community programmes, and advocacy for African migrants in South Africa.",
  path: "/donate",
  keywords: ["donate GDSA", "donate African migrants South Africa", "support NGO Gauteng"],
});

const IMPACT = [
  { icon: Heart, amount: "R150", desc: "feeds a migrant family emergency food parcel" },
  { icon: BookOpen, amount: "R350", desc: "covers one permit application assistance session" },
  { icon: Users, amount: "R500", desc: "sponsors one member through our legal clinic" },
  { icon: Shield, amount: "R1,000", desc: "funds our anti-xenophobia rapid response support" },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        label="Make a Difference"
        title="Every Rand You Give Protects a Life."
        subtitle="Ghana Diaspora SA is 100% community-funded. Your donation directly supports African migrants facing some of the most challenging moments of their lives."
        image="/images/hero-donate.jpg"
        imageAlt="African community members supported by donations and giving"
      />
      <div className="border-t-[3px] border-[#C8960C]" />

      <section className="py-20 bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left: Impact */}
            <AnimateIn direction="left">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">Your Impact</span>
              <h2 className="font-display text-3xl font-bold text-[#1C1C1C] mt-2 mb-6">
                Where Your Donation Goes
              </h2>
              <div className="space-y-4 mb-8">
                {IMPACT.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.amount} className="flex items-center gap-4 bg-white rounded-xl p-5 border border-[#EDE8E0]">
                      <div className="w-12 h-12 rounded-xl bg-[#8B1A1A]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#8B1A1A]" />
                      </div>
                      <div>
                        <span className="font-display text-xl font-bold text-[#8B1A1A]">{item.amount}</span>
                        <span className="text-[#3A3A3A] text-sm ml-2">{item.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-[#8B1A1A] rounded-xl p-6 text-white mb-5">
                <h3 className="font-display text-lg font-bold mb-3">Sponsorship & Corporate Giving</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  Companies, foundations, and organisations can sponsor GDSA programmes, events,
                  and initiatives. We offer recognition, reporting, and CSR partnership opportunities.
                </p>
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-1.5 text-[#E8B84B] text-sm font-semibold hover:underline"
                >
                  View our partners page <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* EFT Details */}
              <div className="bg-white rounded-xl p-5 border border-[#EDE8E0]">
                <p className="text-sm font-semibold text-[#1C1C1C] mb-3">Donate via EFT / Direct Transfer:</p>
                <div className="space-y-2">
                  {[
                    { label: "Account Name", val: "Ghana Diaspora SA NPC" },
                    { label: "Bank", val: "First National Bank (FNB)" },
                    { label: "Account Number", val: "62839430080" },
                    { label: "Branch", val: "Bracken City" },
                    { label: "Branch Code", val: "250655" },
                    { label: "Account Type", val: "Cheque" },
                    { label: "Reference", val: "GDSA-DONATION-[Your Name]" },
                  ].map((r) => (
                    <div key={r.label} className="flex justify-between text-sm">
                      <span className="text-[#3A3A3A]/60">{r.label}</span>
                      <span className="text-[#1C1C1C] font-medium">{r.val}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#3A3A3A]/50 mt-4 leading-relaxed">
                  GDSA will never ask you to change these banking details by phone or email.
                  If you receive such a request, contact us directly at{" "}
                  <a href="mailto:info@ghanadiasporasa.org" className="underline">
                    info@ghanadiasporasa.org
                  </a>{" "}
                  before making any payment.
                </p>
              </div>

              {/* Volunteer */}
              <div className="mt-5 bg-[#1C1C1C] rounded-xl p-6 text-white">
                <h3 className="font-display font-bold mb-2">Volunteer Your Time & Skills</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-3">
                  Lawyers, translators, healthcare workers, accountants, social workers, and business mentors — we need you.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[#E8B84B] text-sm font-semibold hover:underline"
                >
                  Volunteer with GDSA <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </AnimateIn>

            {/* Right: PayFast Donation Form */}
            <AnimateIn direction="right" delay={100}>
              <div className="bg-white rounded-2xl p-8 border border-[#EDE8E0] shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-display text-2xl font-bold text-[#1C1C1C]">Make a Donation</h2>
                  <div className="flex items-center gap-1.5 text-xs text-[#3A3A3A]/50">
                    <Lock className="w-3 h-3" /> Secured by PayFast
                  </div>
                </div>
                <p className="text-[#3A3A3A] text-sm mb-6">
                  Pay securely with card, EFT, or SnapScan via PayFast — South Africa&apos;s leading payment gateway.
                </p>

                <PayFastForm />

                <div className="mt-5 space-y-2">
                  {[
                    "100% goes to community programmes",
                    "Registered NPC — transparent governance",
                    "Annual impact report for donors R500+",
                  ].map((p) => (
                    <div key={p} className="flex items-center gap-2 text-xs text-[#3A3A3A]/70">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C8960C] shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
