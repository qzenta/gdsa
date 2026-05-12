import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You for Your Donation | Ghana Diaspora SA",
  description: "Your donation to Ghana Diaspora SA has been received. Thank you for supporting African migrants in South Africa.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center px-4 pt-24 pb-16">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 rounded-full bg-[#1E5631]/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[#1E5631]" />
        </div>
        <h1 className="font-display text-3xl font-bold text-[#1C1C1C] mb-4">
          Thank You — You Made a Difference.
        </h1>
        <p className="text-[#3A3A3A] leading-relaxed mb-6">
          Your donation to Ghana Diaspora SA has been received. Every rand you give goes directly to
          supporting African migrants in South Africa through our legal clinics, documentation
          assistance, and community programmes.
        </p>
        <div className="bg-white rounded-xl p-6 border border-[#EDE8E0] mb-8 text-left">
          <p className="text-sm text-[#3A3A3A] leading-relaxed">
            You will receive a confirmation email shortly. For donations of R500 or more, we will
            send you an annual impact report showing exactly how your contribution was used.
          </p>
          <p className="text-sm text-[#3A3A3A] leading-relaxed mt-3">
            For any queries about your donation, contact us at{" "}
            <a href="mailto:info@ghanadiasporasa.org" className="text-[#8B1A1A] font-medium hover:underline">
              info@ghanadiasporasa.org
            </a>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-[#8B1A1A] text-white font-semibold rounded-lg hover:bg-[#5C0000] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/donate"
            className="px-6 py-3 border-2 border-[#C8960C] text-[#8B1A1A] font-semibold rounded-lg hover:bg-[#C8960C] hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <Heart className="w-4 h-4" /> Donate Again
          </Link>
        </div>
      </div>
    </div>
  );
}
