import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = buildMetadata({
  title: "Resource Centre — Guides, Forms & Downloads",
  description:
    "Free downloadable resources for African migrants in South Africa — permit checklists, legal guides, emergency contacts, DHA forms, and migrant starter packs.",
  path: "/resources",
  keywords: [
    "migrant resources South Africa",
    "asylum permit checklist",
    "DHA forms download",
    "migrant guide Gauteng",
  ],
});

export default function ResourcesPage() {
  return <ResourcesClient />;
}
