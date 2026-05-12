import { Users, Globe, Calendar, FileCheck } from "lucide-react";
import { STATS } from "@/lib/site";
import AnimateIn from "@/components/shared/AnimateIn";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Users, Globe, Calendar, FileCheck,
};

export default function StatsSection() {
  return (
    <section className="bg-[#1C1C1C] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => {
            const Icon = ICON_MAP[stat.icon] ?? Users;
            return (
              <AnimateIn key={stat.label} delay={i * 80} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#8B1A1A]/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#C8960C]" />
                  </div>
                </div>
                <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
