"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80",
    alt: "African migrants and families seeking support and assistance",
    headline: "Every Migrant Deserves Dignity, Rights, and a Fair Start.",
    sub: "Ghana Diaspora SA supports over 2,400 Africans in South Africa with documentation, legal aid, community, and opportunity.",
  },
  {
    image: "/images/hero-community.jpg",
    alt: "African community group gathered together for support and solidarity",
    headline: "You Don't Have to Face South Africa Alone.",
    sub: "From asylum permits to starting a business, GDSA is with you at every step.",
  },
  {
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80",
    alt: "Community volunteers helping African families in need",
    headline: "Building African Futures, One Family at a Time.",
    sub: "We fight for migrant rights, bring people together, and help Africans build real futures in Gauteng.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#3D0000]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.alt}
          fill
          className="object-cover object-center transition-opacity duration-1000"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D0000]/95 via-[#5C0000]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-[#C8960C]" />
            <span className="text-[#E8B84B] text-xs font-bold tracking-widest uppercase">
              Ghana Diaspora SA — Est. 2020
            </span>
          </div>

          <h1
            key={current}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ animation: "fadeUp 0.7s ease forwards" }}
          >
            {slide.headline}
          </h1>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            {slide.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/support"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#8B1A1A] text-white font-semibold rounded-lg hover:bg-[#C8960C] transition-colors duration-200 border border-[#C8960C]/30"
            >
              Get Migrant Support <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/membership"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Join GDSA
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap gap-5">
            {[
              "2,400+ Members Served",
              "15+ African Nationalities",
              "Registered NPC",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-white/70 text-sm">
                <ChevronRight className="w-3.5 h-3.5 text-[#C8960C]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-[#C8960C]" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
