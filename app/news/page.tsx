import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import AnimateIn from "@/components/shared/AnimateIn";
import { buildMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/blog";
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

export default function NewsPage() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  if (!featured) return null;

  return (
    <>
      <PageHero
        label="News & Advocacy"
        title="Stay Informed. Stay Empowered."
        subtitle="The latest immigration news, policy updates, migrant rights information, and community stories from GDSA."
        image="/images/hero-news.jpg"
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
              <div className="relative h-56 md:h-full min-h-[220px]">
                {featured.featuredImage ? (
                  <Image
                    src={featured.featuredImage}
                    alt={featured.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B1A1A] to-[#3D0000]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block px-3 py-1 bg-[#C8960C] text-white text-xs font-bold rounded-full">
                    Featured
                  </span>
                </div>
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
                    {new Date(featured.publishedAt).toLocaleDateString("en-ZA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
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
                  <div className="relative h-40">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#5C0000] to-[#8B1A1A]" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="text-[#E8B84B] text-xs font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-[#3A3A3A]/50 text-xs mb-2">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString("en-ZA", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                      <span>·</span>
                      {post.readTime}
                    </div>
                    <h3 className="font-display font-bold text-[#1C1C1C] text-sm leading-snug mb-2 group-hover:text-[#8B1A1A] transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-[#3A3A3A] text-xs leading-relaxed line-clamp-2 mb-3">
                      {post.description}
                    </p>
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
