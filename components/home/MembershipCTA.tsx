import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";

const BENEFITS = [
  "Priority access to all GDSA support services",
  "Monthly community newsletter & updates",
  "Invitations to community events and meetups",
  "Access to discounted legal consultations",
  "Business mentorship programme eligibility",
  "Voting rights in GDSA community decisions",
  "Emergency support & crisis assistance",
];

export default function MembershipCTA() {
  return (
    <section className="py-20 bg-[#1C1C1C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimateIn direction="left">
            <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">
              Join the Community
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
              Become a GDSA Member Today
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Membership is open to all Africans and migrants in South Africa. Community is how we survive and grow.
            </p>
            <ul className="space-y-3 mb-8">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C8960C] mt-0.5 shrink-0" />
                  <span className="text-white/80 text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#C8960C] text-white font-semibold rounded-lg hover:bg-[#E8B84B] transition-colors"
            >
              Register as a Member <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateIn>

          <AnimateIn direction="right" delay={100}>
            <div className="bg-[#8B1A1A] rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <div className="font-display text-5xl font-bold text-white">R100</div>
                <div className="text-[#E8B84B] text-sm mt-1">per year</div>
              </div>
              <div className="w-full h-px bg-white/20 mb-6" />
              <p className="text-white/70 text-sm text-center leading-relaxed mb-6">
                The fee goes directly to our programmes. It keeps GDSA running for people who need us most.
              </p>
              <div className="space-y-2 mb-8">
                {[
                  "Individual membership",
                  "Family membership: R180",
                  "Student membership: R50",
                  "Corporate supporter: R500+",
                ].map((tier) => (
                  <div key={tier} className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C8960C] shrink-0" />
                    {tier}
                  </div>
                ))}
              </div>
              <Link
                href="/membership"
                className="w-full flex items-center justify-center py-3 bg-white text-[#8B1A1A] font-semibold rounded-lg hover:bg-[#F7F4EF] transition-colors"
              >
                Join Now
              </Link>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
