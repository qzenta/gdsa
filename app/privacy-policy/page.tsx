import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Ghana Diaspora SA's privacy policy — how we collect, use, and protect your personal information in compliance with POPIA.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-2">
          Privacy Policy
        </h1>
        <p className="text-[#3A3A3A] text-sm mb-12">Last updated: 18 June 2026</p>

        <div className="prose prose-sm max-w-none text-[#3A3A3A] space-y-8">

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">Who We Are</h2>
            <p className="leading-relaxed">
              Ghana Diaspora SA (GDSA) is a Non Profit Company registered in South Africa (Reg: 2020/003516/08).
              Our registered address is 42 Hennie Alberts Street, Brackenhurst, Alberton, Gauteng, 1448.
              You can contact us at{" "}
              <a href="mailto:info@ghanadiasporasa.org" className="text-[#8B1A1A] hover:underline">
                info@ghanadiasporasa.org
              </a>{" "}
              or via WhatsApp on +27 11 867 2550.
            </p>
            <p className="leading-relaxed mt-3">
              As a responsible party under the Protection of Personal Information Act, 2013 (POPIA), we are
              committed to protecting the personal information of everyone who interacts with us.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">
              What Information We Collect and Why
            </h2>
            <p className="leading-relaxed mb-4">
              We only collect information that is necessary to provide our services or process your request.
            </p>

            <h3 className="font-semibold text-[#1C1C1C] mb-2">Contact form (/contact)</h3>
            <p className="leading-relaxed mb-4">
              We collect your name, email address, phone or WhatsApp number, and your message. We use this
              to respond to your enquiry. We do not use contact form submissions for marketing without your
              separate consent.
            </p>

            <h3 className="font-semibold text-[#1C1C1C] mb-2">Membership registration (/membership)</h3>
            <p className="leading-relaxed mb-4">
              We collect your full name, email address, phone or WhatsApp number, nationality, residential
              area (Gauteng), and membership tier selection. We use this to process your membership
              application, contact you with payment instructions, and keep a record of GDSA members. We may
              use your email to send you the monthly GDSA newsletter and event invitations as part of your
              membership.
            </p>

            <h3 className="font-semibold text-[#1C1C1C] mb-2">Donation form (/donate)</h3>
            <p className="leading-relaxed mb-4">
              We collect your first name, last name, and email address before redirecting you to PayFast for
              payment processing. GDSA does not store or process your card, bank, or payment details.
              Payment is handled entirely by PayFast, subject to their own privacy policy.
            </p>

            <h3 className="font-semibold text-[#1C1C1C] mb-2">WhatsApp</h3>
            <p className="leading-relaxed mb-4">
              When you contact us via WhatsApp (+27 11 867 2550), we may retain your name and message for
              community support and follow-up purposes. We do not add you to broadcast lists without your
              consent.
            </p>

            <h3 className="font-semibold text-[#1C1C1C] mb-2">Email</h3>
            <p className="leading-relaxed mb-4">
              When you email us at info@ghanadiasporasa.org, we retain correspondence for organisational and
              support records.
            </p>

            <h3 className="font-semibold text-[#1C1C1C] mb-2">Website</h3>
            <p className="leading-relaxed">
              Our website is hosted on Vercel and managed through Cloudflare. Standard server logs
              (including IP address, browser type, and pages visited) may be collected automatically by
              these platforms. We also use Microsoft Clarity to understand how visitors interact with our
              site. Clarity does not collect personally identifiable information in a form we can link back
              to individual visitors.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">
              How We Use Your Information
            </h2>
            <p className="leading-relaxed mb-3">We use your personal information to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Respond to your support requests and enquiries</li>
              <li>Process membership applications and renewals</li>
              <li>Facilitate donations and issue acknowledgements</li>
              <li>Send you the GDSA newsletter and event invitations (members only)</li>
              <li>Comply with our legal obligations as a registered NPC</li>
            </ul>
            <p className="leading-relaxed mt-4">
              We do not sell, rent, or trade your personal information to any third party. We do not use
              your information for automated decision-making or profiling.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">
              Who We Share Your Information With
            </h2>
            <p className="leading-relaxed mb-4">
              We share personal information only where necessary:
            </p>

            <p className="leading-relaxed mb-3">
              <strong>PayFast (payment processing for donations):</strong> PayFast is an authorised South
              African payment service provider. They receive your name and email when you are redirected to
              their platform.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Google Workspace (email and file storage):</strong> Our organisational email and
              documents are hosted on Google Workspace. Emails you send to info@ghanadiasporasa.org are
              stored there.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>Vercel and Cloudflare (website hosting and delivery):</strong> These platforms may log
              standard technical data as part of normal website operation.
            </p>
            <p className="leading-relaxed">
              We do not share your information with government authorities unless we are legally required to
              do so.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">
              How Long We Keep Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Contact form messages: retained for up to 24 months, then deleted.</li>
              <li>
                Membership records: retained for the duration of your membership and up to 3 years after it
                ends.
              </li>
              <li>
                Donation records: retained for 5 years to comply with financial reporting requirements.
              </li>
              <li>Email correspondence: retained for up to 3 years.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">
              Your Rights Under POPIA
            </h2>
            <p className="leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Ask us what personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>
                Request deletion of your information (where we are not legally required to retain it)
              </li>
              <li>Object to us processing your information</li>
              <li>
                Lodge a complaint with the Information Regulator of South Africa (
                <a
                  href="https://inforeg.org.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B1A1A] hover:underline"
                >
                  inforeg.org.za
                </a>
                )
              </li>
            </ul>
            <p className="leading-relaxed mt-4">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:info@ghanadiasporasa.org" className="text-[#8B1A1A] hover:underline">
                info@ghanadiasporasa.org
              </a>
              . We will respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">Security</h2>
            <p className="leading-relaxed">
              We take reasonable steps to protect your personal information from unauthorised access, loss,
              or misuse. Our email is hosted on Google Workspace with two-factor authentication enabled.
              Our website uses HTTPS enforced by Cloudflare. No system is completely secure. If you believe
              your information has been compromised, please contact us immediately.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">
              Changes to This Policy
            </h2>
            <p className="leading-relaxed">
              We may update this policy from time to time. The &ldquo;last updated&rdquo; date at the top
              of this page will reflect any changes. Continued use of our website or services after a change
              constitutes acceptance of the updated policy.
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
