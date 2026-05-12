import Image from "next/image";

interface Props {
  title: string;
  subtitle?: string;
  label?: string;
  image?: string;
  imageAlt?: string;
  dark?: boolean;
  centered?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  label,
  image,
  imageAlt = "GDSA page banner",
  dark = true,
  centered = false,
}: Props) {
  return (
    <section
      className={`relative min-h-[340px] md:min-h-[420px] flex items-end overflow-hidden ${dark ? "bg-[#5C0000]" : "bg-neutral-100"}`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D0000]/90 via-[#5C0000]/60 to-transparent" />
        </>
      )}
      {!image && (
        <div className="absolute inset-0 bg-hero-pattern opacity-90" />
      )}

      <div
        className={`relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24 md:pt-32 ${centered ? "text-center" : ""}`}
      >
        {label && (
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#E8B84B] mb-3">
            {label}
          </span>
        )}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-6 w-16 h-1 bg-[#C8960C] rounded-full" />
      </div>
    </section>
  );
}
