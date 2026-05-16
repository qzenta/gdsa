import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import AnimateIn from "@/components/shared/AnimateIn";
import { buildMetadata } from "@/lib/metadata";
import { getLatestPosts, getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { BLOG_CATEGORIES } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "News & Advocacy",
  description:
    "Stay informed on immigration updates, migrant rights, South African policy, diaspora success stories, and GDSA community announcements.",
  path: "/news",
  keywords: ["migrant news South Africa", "immigration updates Gauteng", "African diaspora news", "GDSA blog"],
});

const PLACEHOLDER_POSTS = [
  {
    slug: "south-africa-asylum-process-2025-guide",
    title: "Your Complete Guide to the South African Asylum Process in 2025",
    description: "Step-by-step walkthrough of the asylum seeker permit application process at DHA offices across Gauteng.",
    category: "Immigration Updates",
    publishedAt: "2025-05-01",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "zep-holders-rights-south-africa",
    title: "What ZEP Holders Need to Know About Their Rights in South Africa",
    description: "Understanding your legal status, rights, and options as a Zimbabwe Exemption Permit holder.",
    category: "Migrant Rights",
    publishedAt: "2025-04-18",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "starting-a-business-south-africa-migrant",
    title: "How African Migrants Can Register and Grow a Business in South Africa",
    description: "CIPC registration, business permits, banking, and funding options for migrant entrepreneurs.",
    category: "Entrepreneurship",
    publishedAt: "2025-04-05",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "xenophobia-legal-recourse-south-africa",
    title: "Xenophobia in South Africa: Your Legal Rights and How to Respond",
    description: "Know your rights if you face xenophobic violence, threats, or property damage in South Africa.",
    category: "Migrant Rights",
    publishedAt: "2025-03-22",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "banking-for-migrants-south-africa-2025",
    title: "How to Open a Bank Account as a Migrant in South Africa",
    description: "Which banks accept asylum permits, what documents you need, and which account is right for you.",
    category: "Immigration Updates",
    publishedAt: "2025-03-10",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "gdsa-community-success-story-patience-m",
    title: "From Migrant to Business Owner: Patience's Story",
    description: "How GDSA's entrepreneurship programme helped Patience M. build a thriving catering business in Sandton.",
    category: "Success Stories",
    publishedAt: "2025-02-28",
    readTime: "4 min read",
    featured: false,
  },
];

export default function NewsPage() {
  const [featured, ...rest] = PLACEHOLDER_POSTS;

  return (
    <>
      <PageHero
        label="News & Advocacy"
        title="Stay Informed. Stay Empowered."
        subtitle="The latest immigration news, policy updates, migrant rights information, and community stories from GDSA."
        image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1600&q=80"
        imageAlt="African community advocacy and rights awareness"
      />
      <div className="border-t-[3px] border-[#C8960C]" />

      <section className="py-20 bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filters */}
          <AnimateIn className="flex flex-wrap gap-2 mb-12">
            <button className="px-4 py-1.5 text-xs font-bold bg-[#8B1A1A] text-white rounded-full">All</button>
            {BLOG_CATEGORIES.map((c) => (
              <button
                key={c.slug}
                className="px-4 py-1.5 text-xs font-bold border border-[#EDE8E0] text-[#3A3A3A] rounded-full bg-white hover:border-[#8B1A1A] hover:text-[#8B1A1A] transition-colors"
              >
                {c.label}
              </button>
            ))}
          </AnimateIn>

          {/* Featured */}
          <AnimateIn className="mb-10">
            <Link
              href={`/news/${featured.slug}`}
              className="group grid md:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden border border-[#EDE8E0] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-56 md:h-auto bg-gradient-to-br from-[#8B1A1A] to-[#3D0000] flex items-end p-6">
                <span className="inline-block px-3 py-1 bg-[#C8960C] text-white text-xs font-bold rounded-full">
                  Featured
                </span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-xs font-bold text-[#C8960C] uppercase tracking-wider mb-2">
                  {featured.category}
                </span>
                <h2 className="font-display text-2xl font-bold text-[#1C1C1C] mb-3 group-hover:text-[#8B1A1A] transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-[#3A3A3A] text-sm leading-relaxed mb-5">{featured.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#3A3A3A]/60">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(featured.publishedAt).toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
                    <span>·</span>
                    {featured.readTime}
                  </div>
                  <div className="flex items-center gap-1 text-[#C8960C] text-sm font-semibold group-hover:gap-2 transition-all">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          </AnimateIn>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post, i) => (
              <AnimateIn key={post.slug} delay={i * 70}>
                <Link
                  href={`/news/${post.slug}`}
                  className="group flex flex-col h-full bg-white rounded-xl overflow-hidden border border-[#EDE8E0] shadow-sm hover:shadow-md transition-all"
                >
                  <div className="h-36 bg-gradient-to-br from-[#5C0000] to-[#8B1A1A] flex items-end p-4">
                    <span className="text-[#E8B84B] text-xs font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-[#3A3A3A]/50 text-xs mb-2">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString("en-ZA", { month: "short", day: "numeric", year: "numeric" })}
                      <span>·</span>{post.readTime}
                    </div>
                    <h3 className="font-display font-bold text-[#1C1C1C] text-sm leading-snug mb-2 group-hover:text-[#8B1A1A] transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-[#3A3A3A] text-xs leading-relaxed line-clamp-2 mb-3">{post.description}</p>
                    <div className="flex items-center gap-1 text-[#C8960C] text-xs font-semibold mt-auto">
                      Read more <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
