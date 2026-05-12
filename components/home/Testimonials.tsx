"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";
import AnimateIn from "@/components/shared/AnimateIn";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);
  const t = TESTIMONIALS[active];

  return (
    <section className="py-20 bg-[#8B1A1A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#E8B84B]">
            Community Voices
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
            Lives Changed by GDSA
          </h2>
        </AnimateIn>

        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <Quote className="w-10 h-10 text-[#E8B84B]/40 mb-6" />
          <blockquote className="font-display text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-[#E8B84B]">{t.name}</div>
              <div className="text-white/60 text-sm">
                {t.origin} · {t.location}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Dots */}
          <div className="flex gap-1.5 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-1 rounded-full transition-all ${i === active ? "w-6 bg-[#C8960C]" : "w-3 bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
