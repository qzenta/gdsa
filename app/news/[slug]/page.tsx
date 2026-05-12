import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";

interface Props {
  params: Promise<{ slug: string }>;
}

// Placeholder until real CMS/markdown is wired up
const POSTS: Record<string, { title: string; description: string; category: string; publishedAt: string; readTime: string; content: string }> = {
  "south-africa-asylum-process-2025-guide": {
    title: "Your Complete Guide to the South African Asylum Process in 2025",
    description: "Step-by-step walkthrough of the asylum seeker permit application process at DHA offices across Gauteng.",
    category: "Immigration Updates",
    publishedAt: "2025-05-01",
    readTime: "8 min read",
    content: `
## What is the Asylum Seeker Process?

South Africa is a signatory to the 1951 Refugee Convention. Any person who arrives in the country and has a well-founded fear of persecution can apply for asylum. This guide walks you through exactly how to do that in 2025.

## Step 1: Go to a Refugee Reception Office (RRO)

There are several RROs across South Africa:
- **Johannesburg** — Crown Mines
- **Pretoria** — Marabastad
- **Cape Town** — Khayelitsha
- **Durban** — Durban Central

You must present yourself in person on your first visit.

## Step 2: Complete Form DHA-1590

This is the official application for asylum. Bring:
- Your passport or any travel document
- A written personal statement explaining your fear of persecution
- Any supporting evidence you have

## Step 3: Receive Your Section 22 Permit

If your application is accepted for processing, you will receive a Section 22 asylum seeker permit. This is a **temporary permit** that must be renewed at every scheduled appointment.

**Important:** A valid Section 22 permit allows you to work and study in South Africa.

## Step 4: Attend All Hearings

The Refugee Status Determination Officer (RSDO) will schedule hearings to assess your case. You must attend every hearing. Missing appointments can result in rejection.

## Step 5: Decision

- **Approved:** You receive Section 24 Refugee Status — a more secure form of protection
- **Rejected:** You have 10 days to appeal to the Refugee Appeal Board
- **Manifestly Unfounded:** You may face deportation — contact GDSA or LHR immediately

## How GDSA Can Help

GDSA provides:
- Help preparing your personal statement
- Document checklists
- Accompaniment to DHA offices
- Legal referrals if your case is complex
- Emergency support if your permit lapses

Contact us via WhatsApp or call us at the number on our Contact page.
    `,
  },
};

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-[#5C0000] pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#E8B84B] mb-4">
              {post.category}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.publishedAt).toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </div>
              <span className="text-white/40">|</span>
              <span className="text-white/60 text-xs">Ghana Diaspora SA</span>
            </div>
          </AnimateIn>
        </div>
      </div>
      <div className="border-t-[3px] border-[#C8960C]" />

      {/* Content */}
      <div className="bg-[#F7F4EF] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-display prose-headings:text-[#1C1C1C]
                prose-p:text-[#3A3A3A] prose-p:leading-relaxed
                prose-a:text-[#8B1A1A] prose-a:no-underline hover:prose-a:underline
                prose-li:text-[#3A3A3A] prose-strong:text-[#1C1C1C]
                prose-ul:list-disc prose-ul:pl-5 prose-ol:list-decimal prose-ol:pl-5
                bg-white rounded-2xl p-8 shadow-sm border border-[#EDE8E0]"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n## /g, '<h2>').replace(/\n/g, '<br />') }}
            />
          </AnimateIn>

          <div className="mt-8 pt-6 border-t border-[#EDE8E0]">
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-sm text-[#8B1A1A] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to all news
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
