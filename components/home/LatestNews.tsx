import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";

const PLACEHOLDER_POSTS = [
  {
    slug: "south-africa-asylum-process-2025-guide",
    title: "Your Complete Guide to the South African Asylum Process in 2025",
    description:
      "Step-by-step walkthrough of the asylum seeker permit application process at DHA offices across Gauteng.",
    category: "Immigration Updates",
    publishedAt: "2025-05-01",
    readTime: "8 min read",
  },
  {
    slug: "zep-holders-rights-south-africa",
    title: "What ZEP Holders Need to Know About Their Rights in South Africa",
    description:
      "Understanding your legal status, rights, and options as a Zimbabwe Exemption Permit holder.",
    category: "Migrant Rights",
    publishedAt: "2025-04-18",
    readTime: "6 min read",
  },
  {
    slug: "starting-a-business-in-south-africa-as-a-migrant",
    title: "How African Migrants Can Register and Grow a Business in South Africa",
    description:
      "CIPC registration, business permits, banking, and funding options for migrant entrepreneurs.",
    category: "Entrepreneurship",
    publishedAt: "2025-04-05",
    readTime: "10 min read",
  },
];

export default function LatestNews() {
  return (
    <section className="py-20 bg-[#F7F4EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#C8960C]">
              News & Advocacy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mt-2">
              Latest from GDSA
            </h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-[#8B1A1A] font-semibold text-sm hover:underline"
          >
            All articles <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLACEHOLDER_POSTS.map((post, i) => (
            <AnimateIn key={post.slug} delay={i * 80}>
              <Link
                href={`/news/${post.slug}`}
                className="group flex flex-col h-full bg-white rounded-xl overflow-hidden border border-[#EDE8E0] shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="h-44 bg-gradient-to-br from-[#8B1A1A] to-[#5C0000] flex items-center justify-center">
                  <span className="text-[#E8B84B] text-xs font-bold tracking-widest uppercase">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[#3A3A3A]/60 text-xs mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{new Date(post.publishedAt).toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-[#1C1C1C] text-base leading-snug mb-3 group-hover:text-[#8B1A1A] transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-[#3A3A3A] text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-1 text-[#C8960C] text-sm font-semibold mt-auto">
                    Read more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
