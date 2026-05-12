import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, MessageCircle } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import AnimateIn from "@/components/shared/AnimateIn";
import { buildMetadata, buildFAQSchema } from "@/lib/metadata";
import { SUPPORT_SERVICES, SITE } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

const SERVICE_DETAIL: Record<
  string,
  {
    steps: string[];
    faqs: { q: string; a: string }[];
    documents?: string[];
    image?: string;
  }
> = {
  "asylum-permits": {
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    steps: [
      "Arrive at a DHA Refugee Reception Office (RRO) — Johannesburg, Pretoria, Cape Town, Durban, or Port Elizabeth",
      "Complete Form DHA-1590 (Application for Asylum)",
      "Attend your first hearing and receive a Section 22 permit (temporary)",
      "Attend subsequent hearings as scheduled — keep all appointment slips",
      "If approved: receive Section 24 Refugee Status; if rejected: appeal within 10 days",
      "Renew your Section 22 permit at every appointment date — never let it lapse",
    ],
    faqs: [
      {
        q: "What documents do I need for an asylum application?",
        a: "Your passport or any form of ID, proof of your journey to South Africa, and a written statement explaining why you left your home country and fear returning. GDSA can help you prepare your statement.",
      },
      {
        q: "My Section 22 permit has expired — what do I do?",
        a: "Return to the RRO immediately. If your permit has lapsed, you may face detention. GDSA can accompany you or provide a letter of support. Do not delay.",
      },
      {
        q: "Can I work with an asylum seeker permit?",
        a: "Yes. A valid Section 22 asylum seeker permit allows you to work and study in South Africa. Carry it at all times.",
      },
      {
        q: "How long does the asylum process take?",
        a: "The process can take months to years. GDSA helps you stay compliant during this period and advocates for faster resolution.",
      },
    ],
    documents: [
      "Passport / Any ID document",
      "DHA-1590 Application Form",
      "Written personal statement",
      "All previous permit documents",
      "Proof of residence (utility bill / affidavit)",
    ],
  },
  "visa-renewals": {
    image: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?w=1200&q=80",
    steps: [
      "Identify your current permit type (Tourist, Critical Skills, Intra-company, etc.)",
      "Check the expiry date — apply at least 30-60 days before expiry",
      "Gather all required supporting documents for your specific permit category",
      "Submit via VFS Global (the official DHA application partner)",
      "Pay the required processing fee",
      "Track your application status via VFS online portal",
    ],
    faqs: [
      {
        q: "What happens if my visa expires before I renew it?",
        a: "If you apply before expiry, you have a 'grace period'. If you do not apply in time, you may become undocumented. GDSA strongly advises applying well in advance.",
      },
      {
        q: "Can GDSA help me apply for a visa renewal?",
        a: "Yes. GDSA provides guidance, document checklists, and referrals to licensed migration practitioners. We do not charge for initial guidance.",
      },
    ],
    documents: [
      "Current valid permit",
      "Valid passport (min 30 days beyond intended stay)",
      "Proof of financial means",
      "Supporting docs specific to permit type",
      "VFS appointment confirmation",
    ],
  },
  "dha-processes": {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    steps: [
      "Identify the correct DHA office for your application type",
      "Book an appointment online (for applicable services) or arrive early",
      "Prepare ALL required documents before your visit",
      "Bring original documents AND certified copies",
      "Know exactly which counter/section handles your matter",
      "Keep all receipts, reference numbers, and DHA-issued documents",
    ],
    faqs: [
      {
        q: "Which DHA offices serve Gauteng migrants?",
        a: "Key offices include: Crown Mines (Johannesburg Refugee Reception Office), Marabastad (Pretoria), and various branch offices. GDSA will advise on the correct office for your specific matter.",
      },
      {
        q: "What should I do if DHA refuses to accept my application?",
        a: "Document the refusal. Note the officer's name, date, and reason. Contact GDSA or Lawyers for Human Rights (LHR) immediately. You have legal rights.",
      },
    ],
    documents: [
      "All original documents (passport, permits, IDs)",
      "Certified copies of all documents",
      "Relevant application forms (pre-completed)",
      "Proof of residence",
      "Payment for applicable fees",
    ],
  },
  "legal-referrals": {
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1200&q=80",
    steps: [
      "Contact GDSA to describe your legal situation",
      "We assess urgency and the type of legal assistance needed",
      "We refer you to our legal partners (pro bono or low-cost attorneys)",
      "Lawyers for Human Rights (LHR) — specialises in refugee and migrant law",
      "Legal Aid SA — free legal services for qualifying individuals",
      "GDSA Community Legal Clinic — monthly sessions at our Alberton office",
    ],
    faqs: [
      {
        q: "Is legal assistance from GDSA free?",
        a: "GDSA's initial guidance and referrals are always free. Pro bono legal services depend on the partner organisation and the nature of your case.",
      },
      {
        q: "What kinds of legal issues does GDSA assist with?",
        a: "Immigration status, detention, deportation, employment disputes, domestic violence, tenancy disputes, xenophobia incidents, and business legal matters.",
      },
    ],
    documents: [],
  },
  "labour-rights": {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    steps: [
      "Know your rights: The Labour Relations Act and Basic Conditions of Employment Act apply to ALL workers in SA regardless of immigration status",
      "You have the right to minimum wage, fair working hours, and a safe workplace",
      "If exploited: document everything (payslips, contracts, WhatsApp messages)",
      "Report to the CCMA (Commission for Conciliation, Mediation and Arbitration) — free",
      "Report to the Department of Employment and Labour",
      "Contact GDSA for support and advocacy",
    ],
    faqs: [
      {
        q: "Can my employer fire me because of my nationality?",
        a: "No. Discrimination based on nationality is illegal in South Africa under the Employment Equity Act. If this happens, contact GDSA and the CCMA immediately.",
      },
      {
        q: "I don't have a work permit but I'm being exploited — can I report my employer?",
        a: "Yes. You can report labour violations regardless of your immigration status. Your report is protected. GDSA can assist you to do this safely.",
      },
    ],
    documents: [],
  },
  "banking-access": {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    steps: [
      "Obtain a valid South African document (asylum permit, refugee status, or study permit)",
      "Apply for an account — most major banks accept asylum permits",
      "FNB, Standard Bank, Nedbank, and Capitec all have accounts for asylum holders",
      "Capitec's Global One account is recommended for most migrants",
      "Bring: original permit, proof of residence (utility bill or affidavit), and your passport/ID",
    ],
    faqs: [
      {
        q: "Can I open a bank account with an asylum permit?",
        a: "Yes. South African law requires banks to accept asylum permits as valid identity documents. If a bank refuses, contact GDSA — this may be unlawful discrimination.",
      },
      {
        q: "What if I don't have a permanent address?",
        a: "An affidavit confirming your residential address, signed at a police station, is accepted by most banks in lieu of a utility bill.",
      },
    ],
    documents: [],
  },
  healthcare: {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    steps: [
      "All migrants have the right to emergency healthcare in South Africa regardless of status",
      "Public clinics and hospitals are legally required to provide emergency treatment",
      "For non-emergency care, find your nearest public clinic (PHC facility)",
      "The Treatment Action Campaign (TAC) advocates for your healthcare rights",
      "GDSA can provide letters of support to healthcare facilities",
      "For maternal care: all pregnant women have the right to give birth in a South African hospital",
    ],
    faqs: [
      {
        q: "Can a hospital refuse to treat me because I'm undocumented?",
        a: "Not in an emergency. The National Health Act guarantees emergency care to everyone. If refused, call GDSA or the Health Ombud immediately.",
      },
      {
        q: "Is HIV/TB treatment available to migrants?",
        a: "Yes. South Africa's universal ARV and TB treatment programmes are open to all people in the country, regardless of documentation status.",
      },
    ],
    documents: [],
  },
  education: {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
    steps: [
      "Children: Schools MUST enroll children of asylum seekers — the South African Schools Act prohibits exclusion",
      "Contact GDSA if any school refuses to enroll your child",
      "University: DHET guidelines allow asylum holders to apply for higher education",
      "NSFAS funding: eligibility depends on permit status — GDSA can advise",
      "ABET and adult literacy programmes are available at community colleges",
    ],
    faqs: [
      {
        q: "A school refused to enroll my child. What should I do?",
        a: "Contact GDSA immediately. This is a violation of the South African Schools Act. We will intervene and escalate to the Gauteng Department of Education if necessary.",
      },
    ],
    documents: [],
  },
  housing: {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    steps: [
      "Know your rights as a tenant under the Rental Housing Act",
      "Insist on a written lease agreement — never pay rent without a receipt",
      "Excessive rent, illegal evictions, and inhumane conditions are illegal",
      "Report slumlords to the Rental Housing Tribunal (free process)",
      "GDSA maintains a list of community-vetted affordable housing options",
      "Emergency shelter referrals available for acute housing crises",
    ],
    faqs: [
      {
        q: "My landlord is threatening to evict me illegally. What should I do?",
        a: "Document everything. An eviction in South Africa must follow a legal court process — no matter your immigration status. Contact GDSA or Legal Aid immediately.",
      },
    ],
    documents: [],
  },
  "emergency-support": {
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80",
    steps: [
      "Call GDSA emergency line immediately",
      "If in physical danger: call SAPS 10111 or 112",
      "For xenophobic attacks: call GDSA + SAPS + LHR simultaneously",
      "For detention: contact LHR's Detention Monitoring Unit",
      "For food emergency: GDSA can connect you to community food banks",
      "For shelter emergency: GDSA maintains emergency accommodation contacts",
    ],
    faqs: [
      {
        q: "I'm being detained by immigration officers. What should I do?",
        a: "Immediately ask to contact a lawyer or GDSA. Do not sign anything you don't understand. You have the right to legal representation. Call LHR: 011 339 1960.",
      },
    ],
    documents: [],
  },
  "anti-xenophobia": {
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
    steps: [
      "If you experience or witness xenophobia: document it immediately (photos, video, witness names)",
      "Report to SAPS — get a case number",
      "Contact GDSA to escalate and support your case",
      "Contact the South African Human Rights Commission (SAHRC)",
      "GDSA coordinates with civil society for community protection during threats",
    ],
    faqs: [
      {
        q: "Is xenophobia a crime in South Africa?",
        a: "Xenophobic violence constitutes assault, hate crime, and possibly terrorism. South Africa has multiple legal instruments to prosecute perpetrators. GDSA supports victims through the legal process.",
      },
    ],
    documents: [],
  },
  entrepreneurship: {
    image: "https://images.unsplash.com/photo-1664575599736-c5197c684128?w=1200&q=80",
    steps: [
      "Determine your permit status — most permits allow self-employment or business ownership",
      "Register your business with CIPC (R175 for Pty Ltd) — GDSA can guide you",
      "Open a business bank account once registered",
      "Obtain any sector-specific permits (food, trading, etc.)",
      "Register for tax with SARS once your business exceeds R83,100/year",
      "Access GDSA business mentorship and networking programme",
    ],
    faqs: [
      {
        q: "Can a migrant own a business in South Africa?",
        a: "Yes. Most South African visa and permit categories allow business ownership. Asylum holders can also register businesses. GDSA can advise on your specific situation.",
      },
      {
        q: "Are there funding options for migrant entrepreneurs?",
        a: "Some NGOs and development finance institutions offer small business funding to migrants. GDSA maintains a list of accessible funding opportunities.",
      },
    ],
    documents: [],
  },
};

export async function generateStaticParams() {
  return SUPPORT_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SUPPORT_SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/support/${slug}`,
    keywords: [`${service.shortTitle} South Africa`, `migrant ${service.shortTitle}`, "GDSA support"],
  });
}

export default async function SupportDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SUPPORT_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const detail = SERVICE_DETAIL[slug];
  const faqSchema = detail?.faqs?.length ? buildFAQSchema(detail.faqs) : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <PageHero
        label="Migrant Support"
        title={service.title}
        subtitle={service.heroSubtitle}
        image={detail?.image}
        imageAlt={`${service.title} — GDSA support service`}
      />
      <div className="border-t-[3px] border-[#C8960C]" />

      <section className="py-20 bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <AnimateIn>
                <h2 className="font-display text-2xl font-bold text-[#1C1C1C] mb-4">
                  How GDSA Can Help
                </h2>
                <p className="text-[#3A3A3A] leading-relaxed">
                  {service.description} Our community team provides direct guidance, document
                  preparation support, and referrals to specialist partners. We walk with you through
                  each step of the process.
                </p>
              </AnimateIn>

              {detail?.steps && detail.steps.length > 0 && (
                <AnimateIn delay={80}>
                  <h3 className="font-display text-xl font-bold text-[#1C1C1C] mb-4">
                    Step-by-Step Process
                  </h3>
                  <ol className="space-y-3">
                    {detail.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#8B1A1A] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-[#3A3A3A] text-sm leading-relaxed">{step}</p>
                      </li>
                    ))}
                  </ol>
                </AnimateIn>
              )}

              {detail?.faqs && detail.faqs.length > 0 && (
                <AnimateIn delay={120}>
                  <h3 className="font-display text-xl font-bold text-[#1C1C1C] mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {detail.faqs.map((faq, i) => (
                      <div key={i} className="bg-white rounded-xl p-5 border border-[#EDE8E0]">
                        <h4 className="font-semibold text-[#1C1C1C] mb-2 text-sm">{faq.q}</h4>
                        <p className="text-[#3A3A3A] text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </AnimateIn>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Get help card */}
              <AnimateIn delay={60}>
                <div className="bg-[#8B1A1A] rounded-xl p-6 text-white">
                  <h3 className="font-display font-bold text-lg mb-2">Need Help Now?</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Our team is ready to assist. Reach out directly via phone or WhatsApp.
                  </p>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center gap-2 py-2.5 px-4 bg-white text-[#8B1A1A] rounded-lg font-semibold text-sm mb-2 hover:bg-[#F7F4EF] transition-colors"
                  >
                    <Phone className="w-4 h-4" /> {SITE.phone}
                  </a>
                  <a
                    href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Hello GDSA, I need help with: ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2.5 px-4 bg-[#25D366] text-white rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp GDSA
                  </a>
                </div>
              </AnimateIn>

              {/* Documents required */}
              {detail?.documents && detail.documents.length > 0 && (
                <AnimateIn delay={100}>
                  <div className="bg-white rounded-xl p-6 border border-[#EDE8E0]">
                    <h3 className="font-semibold text-[#1C1C1C] mb-3">Documents You'll Need</h3>
                    <ul className="space-y-2">
                      {detail.documents.map((doc) => (
                        <li key={doc} className="flex items-start gap-2 text-sm text-[#3A3A3A]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#C8960C] mt-0.5 shrink-0" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              )}

              {/* Other services */}
              <AnimateIn delay={120}>
                <div className="bg-[#F7F4EF] rounded-xl p-5 border border-[#EDE8E0]">
                  <h3 className="font-semibold text-[#1C1C1C] text-sm mb-3">Other Support Services</h3>
                  <div className="space-y-1.5">
                    {SUPPORT_SERVICES.filter((s) => s.slug !== slug)
                      .slice(0, 5)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          href={`/support/${s.slug}`}
                          className="block text-sm text-[#8B1A1A] hover:underline py-0.5"
                        >
                          → {s.shortTitle}
                        </Link>
                      ))}
                    <Link
                      href="/support"
                      className="block text-sm text-[#C8960C] font-semibold mt-2 hover:underline"
                    >
                      View all services →
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="bg-white border-t border-[#EDE8E0] py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/support"
            className="inline-flex items-center gap-1.5 text-sm text-[#8B1A1A] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all support services
          </Link>
        </div>
      </div>
    </>
  );
}
