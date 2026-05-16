import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import AnimateIn from "@/components/shared/AnimateIn";
import { buildMetadata, buildFAQSchema } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { CheckCircle, Target, Eye, Heart, Handshake, CreditCard, Briefcase, Building, Banknote, Vote } from "lucide-react";
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
        subtitle="Ghana Diaspora SA was founded in 2020 with a simple belief: no African migrant in South Africa should face documentation challenges, discrimination, or isolation on their own."
        image="/images/hero-about.jpg"
        imageAlt="African community members gathered together"
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
                  GDSA was born from something real: thousands of Ghanaians and other African migrants
                  in South Africa were dealing with complex immigration systems, language barriers,
                  labour exploitation, and loneliness, mostly on their own.
                </p>
                <p>
                  In January 2020, a group of community leaders registered GDSA as a Non Profit Company
                  under South African law. What started as a small mutual support network has grown into
                  a trusted organisation serving over 2,400 community members from more than 15 African
                  nationalities.
                </p>
                <p>
                  Today GDSA operates across Gauteng, running programmes in documentation support, legal
                  referrals, entrepreneurship, community advocacy, and emergency assistance. All of it
                  built on one principle: every migrant deserves dignity.
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

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <AnimateIn>
              <div className="group bg-[#8B1A1A] rounded-xl p-8 text-white h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:bg-[#a01f1f] cursor-default">
                <Target className="w-8 h-8 text-[#E8B84B] mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-[#E8B84B] transition-colors duration-300">Our Mission</h3>
                <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                  To empower African migrants in South Africa through community-driven support,
                  legal awareness, and documentation assistance. For Ghanaians specifically, this
                  means ensuring every diaspora member can access the same rights, services, and
                  opportunities enjoyed by Ghanaians at home — starting with the Ghana Card.
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
            <AnimateIn delay={160}>
              <div className="group bg-[#1E5631] rounded-xl p-8 text-white h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:bg-[#265c3a] cursor-default">
                <Handshake className="w-8 h-8 text-[#E8B84B] mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-[#E8B84B] transition-colors duration-300">Our Promise</h3>
                <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                  No GDSA member faces a challenge alone. We commit to being present at every
                  critical moment — from the day you arrive to the day you thrive — providing
                  honest guidance, practical support, and an unbreakable sense of community
                  rooted in the Ubuntu spirit.
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

      {/* Ghana Card & Diaspora Rights */}
      <section id="diaspora-rights" className="py-20 bg-[#1C1C1C]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">
                Diaspora Rights
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
                Ghana Card: Your Bridge Back Home
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
                The NIA Ghana Card is the single most important document a Ghanaian outside of Ghana can hold.
                It is not just an ID — it is the key to full participation in Ghanaian economic and civic life, from anywhere in the world.
              </p>
            </div>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              {
                icon: Building,
                title: "Register a Business in Ghana",
                desc: "Open and operate a company with the Registrar General's Department without setting foot in Ghana. The Ghana Card is the required ID.",
              },
              {
                icon: Banknote,
                title: "Open a Ghanaian Bank Account",
                desc: "Major Ghanaian banks — GCB, Ecobank, Fidelity — now require the Ghana Card for account opening. This unlocks local banking, transfers, and investment from abroad.",
              },
              {
                icon: Briefcase,
                title: "GRA Tax ID, SSNIT & Pension",
                desc: "Get your Ghana Revenue Authority TIN and SSNIT number. Register your pension contributions. The Ghana Card ties all your government identifiers together.",
              },
              {
                icon: Vote,
                title: "Voting, Property & MoMo",
                desc: "Register to vote in Ghanaian elections from abroad. Register for Mobile Money. Buy or sell property. Renew your Ghanaian passport with ease.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateIn key={item.title} delay={i * 70}>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 h-full">
                    <div className="w-11 h-11 rounded-lg bg-[#C8960C]/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#C8960C]" />
                    </div>
                    <h3 className="font-display font-bold text-white text-sm mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>

          <AnimateIn>
            <div className="bg-[#8B1A1A] rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <CreditCard className="w-7 h-7 text-[#E8B84B]" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  GDSA Helps You Register for Your Ghana Card
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  NIA diaspora registration is available at Ghanaian embassies and consulates worldwide.
                  GDSA guides members through the process, prepares the required documents, and coordinates
                  with the Ghana High Commission in Pretoria.
                </p>
              </div>
              <Link
                href="/support/ghana-card"
                className="shrink-0 px-6 py-3 bg-[#C8960C] text-white font-semibold rounded-lg hover:bg-[#E8B84B] transition-colors text-sm whitespace-nowrap"
              >
                Get Your Ghana Card
              </Link>
            </div>
          </AnimateIn>
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
              GDSA is led by a board of directors who have been part of the African migrant community
              in South Africa from the beginning. Leadership profiles coming soon.
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
