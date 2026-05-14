import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import AnimateIn from "@/components/shared/AnimateIn";
import { buildMetadata } from "@/lib/metadata";
import { CheckCircle, Users, Star, Heart } from "lucide-react";
import MembershipForm from "@/components/membership/MembershipForm";

export const metadata: Metadata = buildMetadata({
  title: "Membership — Join the GDSA Community",
  description:
    "Become a member of Ghana Diaspora SA. Open to all Africans and migrants in South Africa. Access priority support, networking, legal clinics, and community programmes.",
  path: "/membership",
  keywords: ["GDSA membership", "African community membership South Africa", "join Ghana Diaspora SA"],
});

const TIERS = [
  {
    icon: Users,
    name: "Individual",
    price: "R100",
    period: "per year",
    features: [
      "Priority support access",
      "Monthly newsletter",
      "Community events access",
      "Basic legal guidance",
      "Emergency referral",
    ],
    featured: false,
  },
  {
    icon: Heart,
    name: "Family",
    price: "R180",
    period: "per year",
    features: [
      "All Individual benefits",
      "Coverage for family members",
      "School enrolment support",
      "Family legal referrals",
      "Youth programme access",
    ],
    featured: true,
  },
  {
    icon: Star,
    name: "Corporate Supporter",
    price: "R500+",
    period: "per year",
    features: [
      "All family benefits",
      "Brand visibility at events",
      "CSR partnership recognition",
      "Priority business mentorship",
      "Annual impact report",
    ],
    featured: false,
  },
];

const BENEFITS = [
  "Priority access to all 12 GDSA support service areas",
  "Monthly community newsletter with immigration and policy updates",
  "Invitations to networking events, workshops, and community meetings",
  "Access to discounted or free legal consultation sessions",
  "Eligibility for GDSA business mentorship programme",
  "Voting rights in community governance and GDSA AGM",
  "Emergency support and crisis referral network",
  "Youth education and school support for member families",
  "Entrepreneurship programme discounts and priority placement",
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        label="Join GDSA"
        title="Be Part of Something Greater."
        subtitle="Membership is your formal connection to the GDSA community — your voice in our governance, and your access to everything we offer."
        image="https://images.unsplash.com/photo-1573921470445-8d99e2e21f4d?w=1600&q=80"
        imageAlt="Diverse African community members joining together for support"
      />
      <div className="border-t-[3px] border-[#C8960C]" />

      {/* Benefits */}
      <section className="py-20 bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">Member Benefits</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mt-2 mb-4">
              What Your Membership Gives You
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {BENEFITS.map((b, i) => (
              <AnimateIn key={i} delay={i * 40}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#EDE8E0]">
                  <CheckCircle className="w-4 h-4 text-[#C8960C] mt-0.5 shrink-0" />
                  <span className="text-[#3A3A3A] text-sm">{b}</span>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Pricing tiers */}
          <AnimateIn className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1C1C1C]">
              Membership Tiers
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {TIERS.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <AnimateIn key={tier.name} delay={i * 80}>
                  <div
                    className={`rounded-2xl p-8 h-full flex flex-col ${
                      tier.featured
                        ? "bg-[#8B1A1A] text-white ring-2 ring-[#C8960C]"
                        : "bg-white border border-[#EDE8E0]"
                    }`}
                  >
                    {tier.featured && (
                      <span className="text-xs font-bold tracking-widest uppercase text-[#E8B84B] mb-2">
                        Most Popular
                      </span>
                    )}
                    <Icon className={`w-8 h-8 mb-4 ${tier.featured ? "text-[#E8B84B]" : "text-[#8B1A1A]"}`} />
                    <h3 className={`font-display text-xl font-bold mb-1 ${tier.featured ? "text-white" : "text-[#1C1C1C]"}`}>
                      {tier.name}
                    </h3>
                    <div className="mb-5">
                      <span className={`text-3xl font-bold font-display ${tier.featured ? "text-white" : "text-[#8B1A1A]"}`}>
                        {tier.price}
                      </span>
                      <span className={`text-sm ml-1 ${tier.featured ? "text-white/70" : "text-[#3A3A3A]/60"}`}>
                        {tier.period}
                      </span>
                    </div>
                    <ul className="space-y-2.5 flex-1 mb-6">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${tier.featured ? "text-[#E8B84B]" : "text-[#C8960C]"}`} />
                          <span className={`text-sm ${tier.featured ? "text-white/80" : "text-[#3A3A3A]"}`}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              );
            })}
          </div>

          {/* Registration form */}
          <AnimateIn>
            <MembershipForm />
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
