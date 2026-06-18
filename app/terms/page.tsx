import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing use of the Ghana Diaspora SA website, including donations, membership, and general information use.",
};

export default function TermsPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-2">
          Terms of Use
        </h1>
        <p className="text-[#3A3A3A] text-sm mb-12">Last updated: 18 June 2026</p>

        <div className="prose prose-sm max-w-none text-[#3A3A3A] space-y-8">

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">About This Document</h2>
            <p className="leading-relaxed">
              These Terms of Use govern your use of the Ghana Diaspora SA website at www.ghanadiasporasa.org.
              By accessing or using this website, you agree to these terms. If you do not agree, please do
              not use the site.
            </p>
            <p className="leading-relaxed mt-3">
              Ghana Diaspora SA (GDSA) is a Non Profit Company registered in South Africa
              (Reg: 2020/003516/08), operating at 42 Hennie Alberts Street, Brackenhurst, Alberton,
              Gauteng, 1448.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">
              What This Website Is For
            </h2>
            <p className="leading-relaxed">
              This website provides information about GDSA&apos;s community support programmes, migrant
              rights resources, events, news, and membership and donation opportunities. It is not a legal
              advice platform. Content on this site is general in nature and does not constitute legal,
              immigration, medical, financial, or professional advice. For your specific situation, always
              consult a qualified professional.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">
              Accuracy of Information
            </h2>
            <p className="leading-relaxed">
              GDSA makes every reasonable effort to ensure that information on this website is accurate and
              up to date. However, immigration laws, DHA processes, and government regulations change
              frequently. We cannot guarantee that every piece of content reflects the current legal
              position at the time you read it. Always verify critical information with the relevant
              authority (DHA, LHR, UNHCR, etc.) before acting on it.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">Donations</h2>
            <p className="leading-relaxed mb-3">
              Donations made through this website are processed by PayFast, an authorised South African
              payment service provider. Donations are not refundable except in cases of proven technical
              error resulting in a duplicate or incorrect charge. To query a donation, contact us at{" "}
              <a href="mailto:info@ghanadiasporasa.org" className="text-[#8B1A1A] hover:underline">
                info@ghanadiasporasa.org
              </a>{" "}
              with your reference number within 7 days of the transaction.
            </p>
            <p className="leading-relaxed mb-3">
              GDSA is a registered NPC. Donations are not tax-deductible at this time. Our Section 18A
              status is pending approval. We will update this statement once approval is granted.
            </p>
            <p className="leading-relaxed mb-3">
              EFT donations: Our banking details are as follows. GDSA will never ask you to change these
              details by phone or email. If you receive such a request, contact us directly before making
              any payment.
            </p>
            <div className="bg-[#F7F4EF] rounded-lg p-5 space-y-2 text-sm">
              {[
                { label: "Account Name", val: "Ghana Diaspora SA NPC" },
                { label: "Bank", val: "First National Bank (FNB)" },
                { label: "Account Number", val: "62839430080" },
                { label: "Branch", val: "Bracken City" },
                { label: "Branch Code", val: "250655" },
                { label: "Account Type", val: "Cheque" },
                { label: "Reference", val: "GDSA-DONATION-[Your Name]" },
              ].map((r) => (
                <div key={r.label} className="flex gap-3">
                  <span className="text-[#3A3A3A]/60 w-36 shrink-0">{r.label}</span>
                  <span className="text-[#1C1C1C] font-medium">{r.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">Membership</h2>
            <p className="leading-relaxed">
              Membership applications submitted through this website are subject to confirmation by the
              GDSA team. Submission of a membership form does not guarantee membership. Payment instructions
              will be provided within 48 hours of application. Membership fees are non-refundable once
              payment has been received and membership confirmed.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">
              Intellectual Property
            </h2>
            <p className="leading-relaxed">
              All content on this website, including text, images, logos, and documents, is the property of
              Ghana Diaspora SA or used with permission. You may share or reproduce content for
              non-commercial community purposes provided you credit Ghana Diaspora SA and do not alter the
              content. For any other use, contact{" "}
              <a href="mailto:info@ghanadiasporasa.org" className="text-[#8B1A1A] hover:underline">
                info@ghanadiasporasa.org
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">External Links</h2>
            <p className="leading-relaxed">
              This website links to external organisations including LHR, Legal Aid SA, UNHCR, DHA, VFS
              Global, and others. GDSA is not responsible for the content, accuracy, or practices of
              external websites. A link does not constitute an endorsement.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">
              Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by South African law, GDSA is not liable for any loss or
              damage arising from your use of this website or reliance on its content. This includes
              decisions made based on general information published here.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">Governing Law</h2>
            <p className="leading-relaxed">
              These terms are governed by the laws of the Republic of South Africa. Any disputes will be
              subject to the jurisdiction of the South African courts.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">
              Changes to These Terms
            </h2>
            <p className="leading-relaxed">
              We may update these terms from time to time. The &ldquo;last updated&rdquo; date at the top
              of this page will reflect any changes. Continued use of the website after a change constitutes
              acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">Contact Us</h2>
            <address className="not-italic leading-relaxed text-[#3A3A3A]">
              <strong>Ghana Diaspora SA NPC</strong>
              <br />
              42 Hennie Alberts Street, Brackenhurst, Alberton, Gauteng, 1448
              <br />
              <a href="mailto:info@ghanadiasporasa.org" className="text-[#8B1A1A] hover:underline">
                info@ghanadiasporasa.org
              </a>
              <br />
              WhatsApp: +27 11 867 2550
            </address>
          </div>

        </div>
      </div>
    </section>
  );
}
