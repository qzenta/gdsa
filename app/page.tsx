import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import MissionBanner from "@/components/home/MissionBanner";
import ServicesGrid from "@/components/home/ServicesGrid";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import DonateSection from "@/components/home/DonateSection";
import MembershipCTA from "@/components/home/MembershipCTA";
import HomeFAQ from "@/components/home/HomeFAQ";
import LatestNews from "@/components/home/LatestNews";
import GlobalPartnersMarquee from "@/components/shared/GlobalPartnersMarquee";
import { buildFAQSchema } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Ghana Diaspora SA — Empowering African Migrants in South Africa",
  description:
    "GDSA is a registered Non Profit Company supporting Ghanaians and all African migrants in South Africa with documentation, legal aid, community, and opportunity since 2020.",
};

const HOME_FAQS = [
  {
    q: "Who can GDSA assist?",
    a: "GDSA supports all African migrants and diaspora members in South Africa, not only Ghanaians.",
  },
  {
    q: "Is GDSA a registered NGO?",
    a: "Yes — Non Profit Company, Registration 2020/003516/08, founded 8 January 2020.",
  },
  {
    q: "How do I get help with my permit?",
    a: "Contact us via WhatsApp or visit our Migrant Support Hub for step-by-step guidance.",
  },
];

export default function HomePage() {
  const faqSchema = buildFAQSchema(HOME_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <MissionBanner />
      <ServicesGrid />
      <StatsSection />
      <GlobalPartnersMarquee />
      <Testimonials />
      <LatestNews />
      <DonateSection />
      <MembershipCTA />
      <HomeFAQ />
    </>
  );
}
