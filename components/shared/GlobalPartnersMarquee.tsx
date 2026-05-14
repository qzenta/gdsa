"use client";

const GLOBAL_ORGS = [
  { name: "African Union", abbr: "AU" },
  { name: "African Continental Free Trade Area", abbr: "AfCFTA" },
  { name: "United Nations", abbr: "UN" },
  { name: "ECOWAS", abbr: "ECOWAS" },
  { name: "Development Bank of Southern Africa", abbr: "DBSA" },
  { name: "International Organization for Migration", abbr: "IOM" },
  { name: "African Union", abbr: "AU" },
  { name: "African Continental Free Trade Area", abbr: "AfCFTA" },
  { name: "United Nations", abbr: "UN" },
  { name: "ECOWAS", abbr: "ECOWAS" },
  { name: "Development Bank of Southern Africa", abbr: "DBSA" },
  { name: "International Organization for Migration", abbr: "IOM" },
];

export default function GlobalPartnersMarquee() {
  return (
    <section className="py-12 bg-[#3D0000] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-xs font-bold tracking-widest uppercase text-[#E8B84B]">
          Global Alignment
        </span>
        <p className="text-white/60 text-sm mt-1">
          Aligned with international frameworks protecting migrants &amp; advancing Pan-African development
        </p>
      </div>
      <div className="relative flex">
        <div className="flex animate-marquee gap-12 items-center">
          {GLOBAL_ORGS.map((org, i) => (
            <div
              key={i}
              className="flex items-center gap-3 shrink-0 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#C8960C]/20 border border-[#C8960C]/30 flex items-center justify-center shrink-0">
                <span className="text-[#C8960C] font-bold text-[9px] leading-none text-center px-1">
                  {org.abbr}
                </span>
              </div>
              <span className="text-white/70 font-medium text-sm whitespace-nowrap group-hover:text-[#E8B84B] transition-colors">
                {org.name}
              </span>
              <span className="text-[#C8960C]/30 text-lg">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
