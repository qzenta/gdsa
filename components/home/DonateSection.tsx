import Link from "next/link";
import { Heart, Users, BookOpen } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";

const IMPACT = [
  {
    icon: Heart,
    amount: "R150",
    label: "feeds a migrant family for a week",
  },
  {
    icon: BookOpen,
    amount: "R350",
    label: "covers one permit application assistance",
  },
  {
    icon: Users,
    amount: "R750",
    label: "funds a community legal clinic session",
  },
];

export default function DonateSection() {
  return (
    <section className="py-20 bg-[#F7F4EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimateIn direction="left">
            <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">
              Support Our Work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mt-2 mb-4">
              Your Donation Changes Lives
            </h2>
            <p className="text-[#3A3A3A] leading-relaxed mb-6">
              GDSA is a registered Non Profit Company. Every contribution directly funds migrant
              support services, community programmes, legal clinics, and advocacy work that protects
              the rights of African migrants across Gauteng.
            </p>
            <div className="space-y-3 mb-8">
              {IMPACT.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.amount} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#8B1A1A]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#8B1A1A]" />
                    </div>
                    <p className="text-sm text-[#3A3A3A]">
                      <span className="font-bold text-[#8B1A1A]">{item.amount}</span> {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8B1A1A] text-white font-semibold rounded-lg hover:bg-[#5C0000] transition-colors"
              >
                <Heart className="w-4 h-4" /> Donate Now
              </Link>
              <Link
                href="/membership"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#8B1A1A] text-[#8B1A1A] font-semibold rounded-lg hover:bg-[#8B1A1A] hover:text-white transition-colors"
              >
                Become a Member
              </Link>
            </div>
          </AnimateIn>

          <AnimateIn direction="right" delay={100}>
            <div className="bg-[#8B1A1A] rounded-2xl p-8 text-white">
              <h3 className="font-display text-2xl font-bold mb-2">Make a Monthly Impact</h3>
              <p className="text-white/70 text-sm mb-6">
                Monthly donors form the backbone of our community programmes. Join our sustainers today.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {["R100", "R250", "R500", "R750", "R1,000", "Custom"].map((amt) => (
                  <button
                    key={amt}
                    className="py-2.5 text-sm font-semibold border border-white/30 rounded-lg hover:bg-[#C8960C] hover:border-[#C8960C] transition-colors"
                  >
                    {amt}
                  </button>
                ))}
              </div>
              <Link
                href="/donate"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#C8960C] text-white font-semibold rounded-lg hover:bg-[#E8B84B] transition-colors"
              >
                <Heart className="w-4 h-4" /> Give Monthly
              </Link>
              <p className="text-white/50 text-xs text-center mt-3">
                Tax deductible under Section 18A (pending). 100% secure.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
