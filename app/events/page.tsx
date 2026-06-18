import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import AnimateIn from "@/components/shared/AnimateIn";
import { buildMetadata } from "@/lib/metadata";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Events — Community Meetings, Webinars & Networking",
  description:
    "Find upcoming GDSA events — community meetings, webinars, legal clinics, networking sessions, and workshops for African migrants in South Africa.",
  path: "/events",
  keywords: ["GDSA events", "African community events Gauteng", "migrant networking South Africa", "community meeting Alberton"],
});

const EVENTS = [
  {
    slug: "gdsa-community-meeting-june-2025",
    title: "GDSA Monthly Community Meeting — June 2025",
    description: "Join us for our monthly open community meeting. Immigration updates, Q&A with our legal adviser, and networking.",
    date: "2025-06-14",
    time: "10:00 – 13:00",
    location: "GDSA Office, Brackenhurst, Alberton",
    type: "Community Meeting",
    online: false,
    free: true,
  },
  {
    slug: "permit-renewal-workshop-june-2025",
    title: "Permit Renewal Workshop — Know Before You Queue",
    description: "Practical workshop on renewing asylum permits and temporary residence permits. Bring your documents.",
    date: "2025-06-21",
    time: "09:00 – 12:00",
    location: "Virtual — WhatsApp Group + Zoom",
    type: "Workshop",
    online: true,
    free: true,
  },
  {
    slug: "migrant-entrepreneurs-networking-july-2025",
    title: "African Migrant Entrepreneurs Networking Breakfast",
    description: "Connect with other African business owners in Gauteng. Pitching, mentorship matching, and market access.",
    date: "2025-07-05",
    time: "08:00 – 11:00",
    location: "Alberton Civic Centre, Alberton",
    type: "Networking",
    online: false,
    free: false,
  },
  {
    slug: "know-your-rights-webinar-july-2025",
    title: "Know Your Rights: Labour Law for Migrant Workers — Free Webinar",
    description: "Featuring a guest speaker from the CCMA. Learn about wage theft, unfair dismissal, and how to report exploitation.",
    date: "2025-07-12",
    time: "14:00 – 15:30",
    location: "Online — Zoom",
    type: "Webinar",
    online: true,
    free: true,
  },
];

const TYPE_COLORS: Record<string, string> = {
  "Community Meeting": "bg-[#8B1A1A] text-white",
  Workshop: "bg-[#C8960C] text-white",
  Networking: "bg-[#1E5631] text-white",
  Webinar: "bg-[#1C1C1C] text-white",
};

export default function EventsPage() {
  const now = new Date();
  const upcomingEvents = EVENTS.filter((event) => new Date(event.date) >= now);

  return (
    <>
      <PageHero
        label="Events"
        title="Connect. Learn. Build Community."
        subtitle="GDSA hosts regular community meetings, legal workshops, webinars, and networking events across Gauteng."
        image="/images/hero-events.jpg"
        imageAlt="African community gathering and events"
      />
      <div className="border-t-[3px] border-[#C8960C]" />

      <section className="py-20 bg-[#F7F4EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">Upcoming Events</span>
            <h2 className="font-display text-3xl font-bold text-[#1C1C1C] mt-2">What&apos;s Happening</h2>
          </AnimateIn>

          {upcomingEvents.length === 0 ? (
            <AnimateIn>
              <div className="bg-white rounded-2xl border border-[#EDE8E0] shadow-sm p-8 text-center">
                <p className="text-[#3A3A3A] mb-3">
                  No upcoming events at this time. Join our WhatsApp for the latest announcements.
                </p>
                <a
                  href="https://wa.me/27118672550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
                >
                  Contact Us on WhatsApp
                </a>
              </div>
            </AnimateIn>
          ) : (
            <div className="space-y-5">
              {upcomingEvents.map((event, i) => (
                <AnimateIn key={event.slug} delay={i * 80}>
                  <div className="bg-white rounded-2xl border border-[#EDE8E0] shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div className="flex flex-wrap gap-2">
                          <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${TYPE_COLORS[event.type] ?? "bg-[#1C1C1C] text-white"}`}>
                            {event.type}
                          </span>
                          {event.free && (
                            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#1E5631]/10 text-[#1E5631]">
                              Free
                            </span>
                          )}
                          {event.online && (
                            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#C8960C]/10 text-[#C8960C]">
                              Online
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="font-display text-lg font-bold text-[#1C1C1C] mb-2 leading-snug">
                        {event.title}
                      </h3>
                      <p className="text-[#3A3A3A] text-sm leading-relaxed mb-4">{event.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-[#3A3A3A]">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#C8960C]" />
                          {new Date(event.date).toLocaleDateString("en-ZA", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#C8960C]" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#C8960C]" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-[#EDE8E0] px-6 py-3 flex justify-between items-center bg-[#F7F4EF]">
                      <div className="flex items-center gap-1.5 text-xs text-[#3A3A3A]/60">
                        <Users className="w-3.5 h-3.5" /> Open to all community members
                      </div>
                      <Link
                        href="/contact"
                        className="flex items-center gap-1 text-[#8B1A1A] text-xs font-semibold hover:underline"
                      >
                        Register <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          )}

          <AnimateIn className="mt-12 bg-[#8B1A1A] rounded-2xl p-8 text-white text-center">
            <h3 className="font-display text-xl font-bold mb-2">Never Miss an Event</h3>
            <p className="text-white/70 text-sm mb-5">
              Get instant notifications for all upcoming GDSA events and announcements.
            </p>
            <a
              href="https://wa.me/27118672550"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Us on WhatsApp
            </a>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
