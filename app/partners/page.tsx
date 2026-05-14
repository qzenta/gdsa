import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import AnimateIn from "@/components/shared/AnimateIn";
import { buildMetadata } from "@/lib/metadata";
import { ArrowRight, ExternalLink, Heart, Users, Globe, Building2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Our Partners — Organisations That Stand With Us",
  description:
    "Ghana Diaspora SA works alongside leading legal, humanitarian, and community organisations to deliver real impact for African migrants in South Africa.",
  path: "/partners",
  keywords: ["GDSA partners", "NGO partnerships South Africa", "migrant support partners"],
});

const IMPLEMENTING_PARTNERS = [
  {
    name: "Lawyers for Human Rights",
    abbr: "LHR",
    category: "Legal Aid",
    description:
      "South Africa's oldest human rights law clinic. LHR provides direct legal representation to refugees, asylum seekers, and stateless persons — including GDSA community members referred through our legal clinic.",
    url: "https://lhr.org.za",
    logo: "LHR",
    color: "bg-[#8B1A1A]",
  },
  {
    name: "Legal Aid South Africa",
    abbr: "LASA",
    category: "Legal Services",
    description:
      "A state-funded institution providing quality legal services to indigent persons. GDSA refers qualifying members for employment disputes, family law matters, and civil litigation.",
    url: "https://legal-aid.co.za",
    logo: "LA",
    color: "bg-[#1E5631]",
  },
  {
    name: "UNHCR South Africa",
    abbr: "UNHCR",
    category: "Humanitarian",
    description:
      "The UN Refugee Agency. UNHCR South Africa supports GDSA's documentation clinics and provides updated guidance on refugee status determination, resettlement, and durable solutions.",
    url: "https://www.unhcr.org/countries/south-africa",
    logo: "UN",
    color: "bg-[#4B9CD3]",
  },
  {
    name: "SA Human Rights Commission",
    abbr: "SAHRC",
    category: "Rights Body",
    description:
      "SAHRC investigates human rights violations including xenophobic incidents and discrimination against migrants. GDSA works with SAHRC to document and escalate cases requiring formal intervention.",
    url: "https://www.sahrc.org.za",
    logo: "HC",
    color: "bg-[#C8960C]",
  },
  {
    name: "Scalabrini Centre",
    abbr: "SCC",
    category: "Social Services",
    description:
      "Cape Town-based centre providing social welfare, employment support, and community integration services for refugees and migrants. A key referral partner for GDSA members relocating to the Western Cape.",
    url: "https://www.scalabrini.org.za",
    logo: "SC",
    color: "bg-[#5C4033]",
  },
  {
    name: "African Diaspora Forum",
    abbr: "ADF",
    category: "Diaspora Network",
    description:
      "ADF coordinates advocacy across African diaspora organisations in South Africa. GDSA is an active member, contributing to joint policy submissions and rapid response to xenophobic incidents.",
    url: "https://www.adf.org.za",
    logo: "AD",
    color: "bg-[#2C3E50]",
  },
];

const CORPORATE_PARTNERS = [
  {
    name: "Community Foundation",
    type: "Funding Partner",
    desc: "Multi-year programme support for GDSA's legal clinic and documentation drives.",
  },
  {
    name: "Corporate CSI Sponsors",
    type: "Event Sponsors",
    desc: "Local businesses sponsoring GDSA's community events, skills workshops, and youth programmes.",
  },
  {
    name: "Faith Communities",
    type: "Community Partners",
    desc: "Churches and mosques across Gauteng hosting GDSA outreach, counselling, and support sessions.",
  },
];

const HOW_WE_PARTNER = [
  {
    icon: Heart,
    title: "Programme Funding",
    desc: "Support specific GDSA programmes — legal clinics, documentation drives, anti-xenophobia training, youth mentorship — with full reporting and recognition.",
  },
  {
    icon: Users,
    title: "Referral Networks",
    desc: "Exchange client referrals with GDSA. We send members who need specialist services; partners send Ghanaian and African migrants who need community support.",
  },
  {
    icon: Globe,
    title: "Advocacy Coalitions",
    desc: "Join GDSA in policy submissions, legal amicus briefs, media statements, and advocacy campaigns on migration and human rights in South Africa.",
  },
  {
    icon: Building2,
    title: "CSR & Corporate Giving",
    desc: "Fulfil your company's social responsibility mandate with a verified NPC partner. We provide impact reports, recognition, and co-branding opportunities.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        label="Partnerships"
        title="Stronger Together for African Migrants."
        subtitle="We do not work alone. GDSA's impact is multiplied through strategic partnerships with legal, humanitarian, government, and corporate organisations that share our values."
        image="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=1600&q=80"
        imageAlt="GDSA community partnerships working together for African migrants"
      />
      <div className="border-t-[3px] border-[#C8960C]" />

      {/* Implementing Partners */}
      <section className="py-20 bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">
                Implementing Partners
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1C1C1C] mt-2 mb-4">
                Organisations We Work With
              </h2>
              <p className="text-[#3A3A3A] max-w-2xl mx-auto leading-relaxed">
                Our implementing partners provide specialist services, legal expertise, and
                humanitarian support that complement GDSA&apos;s community-facing work.
              </p>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMPLEMENTING_PARTNERS.map((partner, i) => (
              <AnimateIn key={partner.abbr} delay={i * 60}>
                <div className="bg-white rounded-2xl p-6 border border-[#EDE8E0] hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${partner.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                    >
                      {partner.logo}
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-[#C8960C]">
                        {partner.category}
                      </span>
                      <h3 className="font-display font-bold text-[#1C1C1C] text-base leading-tight">
                        {partner.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[#3A3A3A] text-sm leading-relaxed flex-1 mb-4">
                    {partner.description}
                  </p>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#8B1A1A] text-sm font-semibold hover:underline mt-auto"
                  >
                    Visit website <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate & Community Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimateIn direction="left">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">
                Community & Corporate
              </span>
              <h2 className="font-display text-3xl font-bold text-[#1C1C1C] mt-2 mb-6">
                Funders, Sponsors & Community Partners
              </h2>
              <div className="space-y-4">
                {CORPORATE_PARTNERS.map((p) => (
                  <div
                    key={p.name}
                    className="flex gap-4 p-5 bg-[#F7F4EF] rounded-xl border border-[#EDE8E0]"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#C8960C] mt-2 shrink-0" />
                    <div>
                      <div className="font-semibold text-[#1C1C1C] text-sm">{p.name}</div>
                      <div className="text-xs text-[#C8960C] font-medium mb-1">{p.type}</div>
                      <p className="text-[#3A3A3A] text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={100}>
              <div className="bg-[#8B1A1A] rounded-2xl p-8 text-white">
                <h3 className="font-display text-2xl font-bold mb-3">Become a Partner</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  GDSA welcomes partnerships with organisations, businesses, foundations, embassies,
                  and faith communities that are committed to the dignity and rights of African
                  migrants in South Africa.
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  As a registered Non Profit Company (Reg: 2020/003516/08), we provide transparent
                  governance, annual impact reporting, and formal partnership MOUs for institutional
                  partners.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8960C] text-white font-semibold rounded-lg hover:bg-[#E8B84B] transition-colors"
                >
                  Start a Conversation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* How We Partner */}
      <section className="py-20 bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">
                Partnership Models
              </span>
              <h2 className="font-display text-3xl font-bold text-[#1C1C1C] mt-2">
                How We Work Together
              </h2>
            </div>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_WE_PARTNER.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateIn key={item.title} delay={i * 60}>
                  <div className="bg-white rounded-2xl p-6 border border-[#EDE8E0] text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-[#8B1A1A]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-5 h-5 text-[#8B1A1A]" />
                    </div>
                    <h3 className="font-display font-bold text-[#1C1C1C] mb-2">{item.title}</h3>
                    <p className="text-[#3A3A3A] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimateIn>
            <h2 className="font-display text-3xl font-bold mb-4">
              Let&apos;s Build a Better Future for African Migrants Together.
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Whether you are a legal clinic, corporate funder, diaspora organisation, or community
              leader — there is a role for you in GDSA&apos;s mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#C8960C] text-white font-semibold rounded-lg hover:bg-[#E8B84B] transition-colors"
              >
                Partner With Us
              </Link>
              <Link
                href="/donate"
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Support Our Work
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
