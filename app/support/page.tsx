import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, RefreshCw, Building2, Scale, Briefcase, Landmark, HeartPulse, GraduationCap, Home, AlertCircle, Shield, TrendingUp, Phone } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import AnimateIn from "@/components/shared/AnimateIn";
import { buildMetadata } from "@/lib/metadata";
import { SUPPORT_SERVICES, SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Migrant Support Hub",
  description:
    "Comprehensive support services for African migrants in South Africa — asylum permits, visa renewals, DHA navigation, legal referrals, labour rights, banking, healthcare, and more.",
  path: "/support",
  keywords: ["migrant support South Africa", "asylum permit help", "DHA assistance Gauteng", "migrant rights"],
});

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText, RefreshCw, Building2, Scale, Briefcase, Landmark,
  HeartPulse, GraduationCap, Home, AlertCircle, Shield, TrendingUp,
};

export default function SupportPage() {
  return (
    <>
      <PageHero
        label="Migrant Support Hub"
        title="Every Challenge Has a Path Through It."
        subtitle="GDSA provides trusted, community-driven support across every dimension of migrant life in South Africa — from day one to full integration."
        image="/images/hero-support.jpg"
        imageAlt="African community volunteers providing migrant support and assistance"
      />
      <div className="border-t-[3px] border-[#C8960C]" />

      {/* Emergency banner */}
      <div className="bg-[#8B1A1A] py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-white text-sm">
            <AlertCircle className="w-4 h-4 text-[#E8B84B] shrink-0" />
            <span>
              <strong>Emergency?</strong> WhatsApp GDSA immediately for urgent support:
            </span>
          </div>
          <a
            href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("URGENT: I need emergency migrant support assistance.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white text-[#8B1A1A] rounded-lg text-sm font-bold hover:bg-[#F7F4EF] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> WhatsApp Us Now
          </a>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-20 bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">
              Support Services
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mt-2 mb-4">
              How GDSA Can Help You
            </h2>
            <p className="text-[#3A3A3A] max-w-2xl mx-auto">
              Click any service below to learn more, access guides, and find out how to get direct support from our team.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SUPPORT_SERVICES.map((service, i) => {
              const Icon = ICON_MAP[service.icon] ?? FileText;
              return (
                <AnimateIn key={service.slug} delay={i * 60}>
                  <Link
                    href={`/support/${service.slug}`}
                    className="group flex flex-col h-full bg-white rounded-xl p-6 border border-[#EDE8E0] shadow-sm hover:shadow-md hover:border-[#C8960C]/30 transition-all duration-200"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#8B1A1A]/10 flex items-center justify-center mb-4 group-hover:bg-[#8B1A1A] transition-colors">
                      <Icon className="w-5 h-5 text-[#8B1A1A] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-[#1C1C1C] text-lg mb-2 group-hover:text-[#8B1A1A] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#3A3A3A] text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-[#C8960C] text-sm font-semibold">
                      Full guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get help CTA */}
      <section className="py-16 bg-[#1C1C1C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-white/70 mb-6">
              Contact our community team directly. We will assess your situation and connect you with the right support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C8960C] text-white font-semibold rounded-lg hover:bg-[#E8B84B] transition-colors"
              >
                Contact GDSA
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hello GDSA, I need migrant support assistance.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                WhatsApp Us
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
