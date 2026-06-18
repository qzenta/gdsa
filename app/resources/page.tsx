import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import AnimateIn from "@/components/shared/AnimateIn";
import { buildMetadata } from "@/lib/metadata";
import { Download, ExternalLink, FileText, AlertCircle, Phone, Globe } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Resource Centre — Guides, Forms & Downloads",
  description:
    "Free downloadable resources for African migrants in South Africa — permit checklists, legal guides, emergency contacts, DHA forms, and migrant starter packs.",
  path: "/resources",
  keywords: ["migrant resources South Africa", "asylum permit checklist", "DHA forms download", "migrant guide Gauteng"],
});

const DOWNLOADS = [
  {
    title: "Asylum Seeker Permit Checklist",
    desc: "Step-by-step document checklist for first-time asylum applications at South African DHA.",
    type: "PDF",
    size: "245 KB",
    icon: FileText,
  },
  {
    title: "Migrant Starter Pack",
    desc: "Essential information for newly arrived African migrants in South Africa — services, rights, contacts.",
    type: "PDF",
    size: "1.2 MB",
    icon: FileText,
  },
  {
    title: "Know Your Rights — Worker Guide",
    desc: "Plain-language guide to labour rights in South Africa for migrant workers.",
    type: "PDF",
    size: "380 KB",
    icon: FileText,
  },
  {
    title: "Emergency Contacts Directory",
    desc: "All key emergency numbers — SAPS, LHR, UNHCR, healthcare, shelter, GDSA.",
    type: "PDF",
    size: "120 KB",
    icon: AlertCircle,
  },
  {
    title: "Business Registration Guide for Migrants",
    desc: "How to register a business with CIPC in South Africa as a migrant entrepreneur.",
    type: "PDF",
    size: "520 KB",
    icon: FileText,
  },
  {
    title: "School Enrolment Rights — Parents Guide",
    desc: "What schools must do to enrol your child. Know your rights under the Schools Act.",
    type: "PDF",
    size: "290 KB",
    icon: FileText,
  },
  {
    title: "Xenophobia Safety & Response Guide",
    desc: "What to do if you are targeted by xenophobic violence — reporting steps, legal recourse, and emergency shelter contacts.",
    type: "PDF",
    size: "310 KB",
    icon: AlertCircle,
  },
  {
    title: "SAPS Rights Guide for Migrants",
    desc: "Know your rights during police interactions in South Africa. What officers can and cannot do, and how to file a complaint.",
    type: "PDF",
    size: "175 KB",
    icon: FileText,
  },
];

const LINKS = [
  {
    org: "Lawyers for Human Rights (LHR)",
    desc: "Pro bono migration and refugee law — deportation, detention, DHA disputes.",
    url: "https://lhr.org.za",
    phone: "011 339 1960",
  },
  {
    org: "Legal Aid South Africa",
    desc: "Free legal representation for qualifying individuals across all courts.",
    url: "https://legal-aid.co.za",
    phone: "0800 110 110",
  },
  {
    org: "UNHCR South Africa",
    desc: "UN Refugee Agency — international protection and durable solutions.",
    url: "https://www.unhcr.org/za",
    phone: "+27 12 354 8300",
  },
  {
    org: "South African Human Rights Commission",
    desc: "Report human rights violations including xenophobia and discrimination.",
    url: "https://sahrc.org.za",
    phone: "011 877 3600",
  },
  {
    org: "DHA — Home Affairs",
    desc: "Official Department of Home Affairs — permits, applications, status checks.",
    url: "https://www.dha.gov.za",
    phone: "0800 601 190",
  },
  {
    org: "VFS Global South Africa",
    desc: "Visa application centre for all DHA applications and permit renewals.",
    url: "https://www.vfsglobal.com/DHA/SouthAfrica",
    phone: "0861 843 843",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        label="Resource Centre"
        title="Everything You Need, in One Place."
        subtitle="Free guides, checklists, forms, and trusted external links for African migrants navigating life in South Africa."
        image="/images/hero-resources.jpg"
        imageAlt="African children and community gathering for education and support"
      />
      <div className="border-t-[3px] border-[#C8960C]" />

      {/* Downloads */}
      <section className="py-20 bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">Free Downloads</span>
            <h2 className="font-display text-3xl font-bold text-[#1C1C1C] mt-2 mb-2">
              Guides & Checklists
            </h2>
            <p className="text-[#3A3A3A]">
              Download and share these free resources with anyone who needs them.
            </p>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {DOWNLOADS.map((d, i) => {
              const Icon = d.icon;
              return (
                <AnimateIn key={d.title} delay={i * 60}>
                  <div className="bg-white rounded-xl p-6 border border-[#EDE8E0] shadow-sm hover:shadow-md hover:border-[#8B1A1A]/20 transition-all h-full flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#8B1A1A]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#8B1A1A]" />
                      </div>
                      <span className="text-xs font-bold text-[#3A3A3A]/50 bg-[#F7F4EF] px-2 py-0.5 rounded border border-[#EDE8E0]">
                        {d.type}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[#1C1C1C] text-sm mb-2 leading-snug">{d.title}</h3>
                    <p className="text-[#3A3A3A] text-xs leading-relaxed flex-1 mb-4">{d.desc}</p>
                    <button
                      disabled
                      aria-disabled="true"
                      className="flex items-center gap-2 text-[#3A3A3A]/40 text-sm font-semibold cursor-not-allowed"
                    >
                      <Download className="w-3.5 h-3.5" /> Coming Soon
                    </button>
                  </div>
                </AnimateIn>
              );
            })}
          </div>

          {/* External links */}
          <AnimateIn className="mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">Trusted Partners</span>
            <h2 className="font-display text-3xl font-bold text-[#1C1C1C] mt-2 mb-2">
              Key Organisations & Contacts
            </h2>
            <p className="text-[#3A3A3A]">
              These vetted organisations provide support services that complement GDSA&apos;s work.
            </p>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 gap-5">
            {LINKS.map((l, i) => (
              <AnimateIn key={l.org} delay={i * 60}>
                <div className="bg-white rounded-xl p-6 border border-[#EDE8E0] shadow-sm">
                  <h3 className="font-semibold text-[#1C1C1C] mb-1">{l.org}</h3>
                  <p className="text-[#3A3A3A] text-sm mb-3 leading-relaxed">{l.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[#8B1A1A] text-xs font-semibold hover:underline"
                    >
                      <Globe className="w-3.5 h-3.5" /> Website
                    </a>
                    <a
                      href={`tel:${l.phone}`}
                      className="flex items-center gap-1.5 text-[#3A3A3A]/70 text-xs hover:text-[#8B1A1A]"
                    >
                      <Phone className="w-3.5 h-3.5" /> {l.phone}
                    </a>
                    <ExternalLink className="w-3 h-3 text-[#3A3A3A]/30 ml-auto self-center" />
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
