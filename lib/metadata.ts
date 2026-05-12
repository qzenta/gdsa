import type { Metadata } from "next";
import { SITE } from "./site";

interface PageMeta {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
}

export function buildMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
  keywords = [],
}: PageMeta): Metadata {
  const url = `${SITE.url}${path}`;
  const ogImage = image ?? SITE.ogImage;

  const baseKeywords = [
    "Ghana Diaspora SA",
    "GDSA",
    "African migrants South Africa",
    "migrant support Gauteng",
    "diaspora community",
    "immigration help South Africa",
    "asylum seeker support",
    "Ghanaians in South Africa",
  ];

  return {
    title: `${title} | ${SITE.name}`,
    description,
    keywords: [...baseKeywords, ...keywords],
    authors: [{ name: SITE.name }],
    creator: SITE.name,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_ZA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "NGO"],
    name: SITE.name,
    alternateName: "GDSA",
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    description: SITE.description,
    foundingDate: "2020-01-08",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.province,
      postalCode: SITE.address.postalCode,
      addressCountry: "ZA",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "customer support",
        availableLanguage: ["English", "Twi", "Ga", "Zulu", "Sotho"],
      },
    ],
    sameAs: Object.values(SITE.social),
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
    nonprofitStatus: "Nonprofit501c3",
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE.url}/news?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function buildEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      "@type": "Place",
      name: event.location,
      address: SITE.address.full,
    },
    organizer: { "@type": "Organization", name: SITE.name, url: SITE.url },
    url: event.url,
    image: event.image ?? SITE.ogImage,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode:
      "https://schema.org/OfflineEventAttendanceMode",
  };
}

export function buildArticleSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.description,
    url: `${SITE.url}/news/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author ?? SITE.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` },
    },
    image: post.image ?? SITE.ogImage,
  };
}
