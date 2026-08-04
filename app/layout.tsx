import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import DonorPopup from "@/components/shared/DonorPopup";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";
import MicrosoftClarity from "@/components/shared/MicrosoftClarity";
import { SITE } from "@/lib/site";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/metadata";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE.name}`,
    default: `${SITE.name} — ${SITE.tagline}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    siteName: SITE.name,
    locale: "en_ZA",
    type: "website",
    images: [{ url: SITE.ogImage, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = buildOrganizationSchema();
  const webSchema = buildWebSiteSchema();

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-white text-[#1C1C1C]">
        <GoogleAnalytics />
        <MicrosoftClarity />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <DonorPopup />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
