import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import AnimateIn from "@/components/shared/AnimateIn";
import { buildMetadata, buildFAQSchema } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "About Ghana Diaspora SA",
  description:
    "Learn about Ghana Diaspora SA — our history, mission, vision, and commitment to empowering African migrants across South Africa.",
  path: "/about",
  keywords: ["about GDSA", "Ghana Diaspora SA history", "African migrant NGO South Africa"],
});

const CORE_VALUES = [
  {
    icon: Heart,
    title: "Dignity",
    desc: "Every person deserves to be treated with dignity, regardless of their immigration status or country of origin.",
  },
  {
    icon: CheckCircle,
    title: "Integrity",
    desc: "We operate with transparency, accountability, and honesty in all our community work and governance.",
  },
  {
    icon: Target,
    title: "Empowerment",
    desc: "We don't just provide handouts — we build skills, networks, and confidence so communities can advocate for themselves.",
  },
  {
    icon: Eye,
    title: "Inclusion",
    desc: "Our doors are open to all Africans and migrants regardless of nationality, gender, religion, or permit status.",
  },
];

const ABOUT_FAQS = [
  {
    q: "When was Ghana Diaspora SA founded?",
    a: "GDSA was registered as a Non Profit Company on 8 January 2020, Registration Number 2020/003516/08.",
  },
  {
    q: "Who does GDSA serve?",
    a: "While founded by the Ghanaian community in South Africa, GDSA serves all African migrants and diaspora members.",
  },
  {
    q: "Where is GDSA based?",
    a: "Our registered office is at 42 Hennie Alberts Street, Brackenhurst, Alberton, Gauteng, 1448.",
  },
];

export default function AboutPage() {
  const faqSchema = buildFAQSchema(ABOUT_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        label="About GDSA"
        title="Built by the Community, for the Community."
        subtitle="Ghana Diaspora SA was founded in 2020 with one vision: that no African migrant in South Africa should face the challenges of documentation, discrimination, or isolation alone."
        image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&q=80"
        imageAlt="African community leaders in a meeting"
      />

      {/* Border divider */}
      <div className="border-t-[3px] border-[#C8960C]" />

      {/* Our Story */}
      <section id="story" className="py-20 bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="left">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">
                Our Story
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mt-2 mb-5">
                From a Community Need to a Movement
              </h2>
              <div className="space-y-4 text-[#3A3A3A] leading-relaxed">
                <p>
                  Ghana Diaspora SA was born from a simple but urgent recognition: thousands of
                  Ghanaians and other African migrants in South Africa were navigating complex
                  immigration systems, language barriers, labour exploitation, and social isolation —
                  largely alone.
                </p>
                <p>
                  In January 2020, a group of committed community leaders formally registered GDSA as
                  a Non Profit Company under South African law. What began as a small mutual support
                  network has grown into a trusted institutional platform serving over 2,400 community
                  members from more than 15 African nationalities.
                </p>
                <p>
                  Today, GDSA operates across Gauteng, with programmes covering documentation
                  support, legal referrals, entrepreneurship, community advocacy, and emergency
                  assistance — always rooted in the principle that every migrant deserves dignity.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn direction="right" delay={100}>
              <div className="bg-[#8B1A1A] rounded-2xl p-8 text-white">
                <h3 className="font-display text-xl font-bold mb-6 text-[#E8B84B]">
                  Organisation Facts
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Legal Name", value: "Ghana Diaspora SA" },
                    { label: "Registration", value: SITE.registration.number },
                    { label: "Type", value: SITE.registration.type },
                    { label: "Founded", value: SITE.registration.date },
                    { label: "Tax Number", value: SITE.registration.taxNumber },
                    { label: "Financial Year End", value: SITE.registration.financialYearEnd },
                    { label: "Address", value: SITE.address.full },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 pb-3">
                      <span className="text-white/60 text-sm">{item.label}</span>
                      <span className="text-white text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">
              Purpose & Direction
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mt-2">
              Mission, Vision & Values
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <AnimateIn>
              <div className="group bg-[#8B1A1A] rounded-xl p-8 text-white h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:bg-[#a01f1f] cursor-default">
                <Target className="w-8 h-8 text-[#E8B84B] mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-[#E8B84B] transition-colors duration-300">Our Mission</h3>
                <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                  To empower African migrants in South Africa through community-driven support,
                  legal awareness, documentation assistance, entrepreneurship development, and
                  advocacy for migrant rights — ensuring every individual has the dignity, information,
                  and resources to build a stable and fulfilling life.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={80}>
              <div className="group bg-[#1C1C1C] rounded-xl p-8 text-white h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:bg-[#2a2a2a] cursor-default">
                <Eye className="w-8 h-8 text-[#C8960C] mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-[#C8960C] transition-colors duration-300">Our Vision</h3>
                <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                  A South Africa where African migrants are fully integrated, legally protected,
                  economically empowered, and socially valued — where the Pan-African community
                  thrives as a contributor to this nation&apos;s growth, culture, and future.
                </p>
              </div>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimateIn key={v.title} delay={i * 70}>
                  <div className="bg-[#F7F4EF] rounded-xl p-6 h-full border border-[#EDE8E0]">
                    <div className="w-10 h-10 rounded-lg bg-[#8B1A1A]/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#8B1A1A]" />
                    </div>
                    <h4 className="font-display font-bold text-[#1C1C1C] mb-2">{v.title}</h4>
                    <p className="text-[#3A3A3A] text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership placeholder */}
      <section id="leadership" className="py-20 bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">
              Leadership
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mt-2 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-[#3A3A3A] max-w-xl mx-auto mb-8">
              GDSA is led by a dedicated board of directors committed to the African migrant community
              in South Africa. Leadership profiles coming soon.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B1A1A] text-white font-semibold rounded-lg hover:bg-[#5C0000] transition-colors"
            >
              Contact the Team
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Registration */}
      <section id="registration" className="py-16 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <p className="text-white/50 text-xs tracking-widest uppercase mb-3">Official Registration</p>
            <p className="text-white/80 text-sm leading-relaxed">
              Ghana Diaspora SA is officially registered with the Companies and Intellectual Property Commission (CIPC) of South Africa as a Non Profit Company.
              Registration Number: <span className="text-[#E8B84B] font-mono">{SITE.registration.number}</span>.
              Tax Reference: <span className="text-[#E8B84B] font-mono">{SITE.registration.taxNumber}</span>.
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
