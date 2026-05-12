import Link from "next/link";
import { ArrowRight, FileText, RefreshCw, Building2, Scale, Briefcase, Landmark, HeartPulse, GraduationCap, Home, AlertCircle, Shield, TrendingUp } from "lucide-react";
import { SUPPORT_SERVICES } from "@/lib/site";
import AnimateIn from "@/components/shared/AnimateIn";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText, RefreshCw, Building2, Scale, Briefcase, Landmark,
  HeartPulse, GraduationCap, Home, AlertCircle, Shield, TrendingUp,
};

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-[#F7F4EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">
            How We Help
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mt-2 mb-4">
            Comprehensive Migrant Support Services
          </h2>
          <p className="text-[#3A3A3A] max-w-2xl mx-auto text-base leading-relaxed">
            From your first day in South Africa to building a thriving life here — GDSA provides
            practical, trusted support across every area of migrant life.
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
                  <h3 className="font-display font-semibold text-[#1C1C1C] text-lg mb-2 group-hover:text-[#8B1A1A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#3A3A3A] text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-[#C8960C] text-sm font-semibold">
                    Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
