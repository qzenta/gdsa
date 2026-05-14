import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import AnimateIn from "@/components/shared/AnimateIn";
import ContactForm from "@/components/contact/ContactForm";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Ghana Diaspora SA. We are here to help African migrants in South Africa. Call, WhatsApp, or email us — we respond within 24 hours.",
  path: "/contact",
  keywords: ["contact GDSA", "Ghana Diaspora SA contact", "migrant support contact Gauteng"],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get In Touch"
        title="We Are Here to Help."
        subtitle="Reach out to the GDSA team by WhatsApp, email, or in person. We respond to all enquiries within 24 hours."
        image="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600&q=80"
        imageAlt="GDSA team ready to assist African migrants in South Africa"
      />
      <div className="border-t-[3px] border-[#C8960C]" />

      <section className="py-20 bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact details */}
            <AnimateIn direction="left">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">Contact Information</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1C1C1C] mt-2 mb-8">
                Multiple Ways to Reach Us
              </h2>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[#EDE8E0]">
                  <div className="w-10 h-10 rounded-lg bg-[#8B1A1A]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#8B1A1A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] text-sm mb-1">Office Address</h3>
                    <p className="text-[#3A3A3A] text-sm">{SITE.address.full}</p>
                    <a
                      href={SITE.maps.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C8960C] text-xs mt-1 inline-block hover:underline"
                    >
                      Get directions →
                    </a>
                  </div>
                </div>


                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[#EDE8E0]">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] text-sm mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hello GDSA, I need assistance.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3A3A3A] text-sm hover:text-[#25D366]"
                    >
                      {SITE.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[#EDE8E0]">
                  <div className="w-10 h-10 rounded-lg bg-[#8B1A1A]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#8B1A1A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] text-sm mb-1">Email</h3>
                    <a href={`mailto:${SITE.email}`} className="text-[#3A3A3A] text-sm hover:text-[#8B1A1A]">
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[#EDE8E0]">
                  <div className="w-10 h-10 rounded-lg bg-[#8B1A1A]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#8B1A1A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1C1C] text-sm mb-1">Office Hours</h3>
                    <p className="text-[#3A3A3A] text-sm">Monday – Friday: 08:00 – 17:00</p>
                    <p className="text-[#3A3A3A] text-sm">Saturday: 09:00 – 13:00</p>
                    <p className="text-[#C8960C] text-xs mt-1">Emergency WhatsApp: 24/7</p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Contact form */}
            <AnimateIn direction="right" delay={80}>
              <ContactForm />
            </AnimateIn>
          </div>

          {/* Map embed */}
          <AnimateIn className="mt-12" delay={120}>
            <div className="rounded-2xl overflow-hidden border border-[#EDE8E0] h-72">
              <iframe
                src={SITE.maps.embed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GDSA Office Location — Brackenhurst, Alberton"
              />
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
