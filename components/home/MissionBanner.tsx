import AnimateIn from "@/components/shared/AnimateIn";

export default function MissionBanner() {
  return (
    <section className="bg-[#8B1A1A] py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateIn>
          <div className="w-12 h-0.5 bg-[#C8960C] mx-auto mb-6" />
          <p className="font-display text-xl sm:text-2xl md:text-3xl text-white font-medium leading-relaxed">
            &ldquo;We exist to ensure that every African migrant in South Africa has access to
            <span className="text-[#E8B84B]"> dignity, documentation, and opportunity</span> —
            regardless of nationality, language, or permit status.&rdquo;
          </p>
          <div className="w-12 h-0.5 bg-[#C8960C] mx-auto mt-6" />
          <p className="mt-5 text-white/60 text-sm tracking-widest uppercase font-medium">
            Ghana Diaspora SA — Mission Statement
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
