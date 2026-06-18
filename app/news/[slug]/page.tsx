import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import AnimateIn from "@/components/shared/AnimateIn";
import PageHero from "@/components/shared/PageHero";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/news/${post.slug}`,
  });
}

function renderBlock(block: string, index: number) {
  const lines = block.split("\n").filter(Boolean);
  if (!lines.length) return null;

  const first = lines[0];

  // H2
  if (first.startsWith("## ")) {
    return (
      <h2 key={index} className="font-display text-2xl font-bold text-[#1C1C1C] mt-10 mb-4">
        {first.replace(/^## /, "")}
      </h2>
    );
  }

  // H3
  if (first.startsWith("### ")) {
    return (
      <h3 key={index} className="font-display text-lg font-bold text-[#1C1C1C] mt-6 mb-3">
        {first.replace(/^### /, "")}
      </h3>
    );
  }

  // Horizontal rule
  if (first === "---") {
    return <hr key={index} className="border-[#EDE8E0] my-8" />;
  }

  // Bullet list
  if (lines.every((l) => l.startsWith("- "))) {
    return (
      <ul key={index} className="list-disc pl-6 space-y-2 my-4">
        {lines.map((l, i) => (
          <li key={i} className="text-[#3A3A3A] leading-relaxed" dangerouslySetInnerHTML={{ __html: inlineFormat(l.replace(/^- /, "")) }} />
        ))}
      </ul>
    );
  }

  // Numbered list
  if (lines.every((l) => /^\d+\./.test(l))) {
    return (
      <ol key={index} className="list-decimal pl-6 space-y-2 my-4">
        {lines.map((l, i) => (
          <li key={i} className="text-[#3A3A3A] leading-relaxed" dangerouslySetInnerHTML={{ __html: inlineFormat(l.replace(/^\d+\.\s*/, "")) }} />
        ))}
      </ol>
    );
  }

  // Blockquote
  if (first.startsWith("> ")) {
    return (
      <blockquote key={index} className="border-l-4 border-[#C8960C] pl-4 my-4 italic text-[#3A3A3A]">
        {lines.map((l) => l.replace(/^> /, "")).join(" ")}
      </blockquote>
    );
  }

  // Paragraph (join multi-line blocks into one paragraph)
  return (
    <p
      key={index}
      className="text-[#3A3A3A] leading-relaxed my-4"
      dangerouslySetInnerHTML={{ __html: inlineFormat(lines.join(" ")) }}
    />
  );
}

function inlineFormat(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code class=\"bg-[#F7F4EF] px-1 rounded text-sm font-mono\">$1</code>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-[#8B1A1A] underline hover:text-[#C8960C] transition-colors">$1</a>');
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const blocks = post.content.split(/\n\n+/);

  return (
    <div className="min-h-screen">
      <PageHero
        label={post.category}
        title={post.title}
        subtitle={`${new Date(post.publishedAt).toLocaleDateString("en-ZA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })} · ${post.readTime} · Ghana Diaspora SA`}
        image={post.featuredImage || "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&q=80"}
        imageAlt={post.title}
      />
      <div className="border-t-[3px] border-[#C8960C]" />

      <div className="bg-[#F7F4EF] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tags */}
          {post.tags?.length > 0 && (
            <AnimateIn className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold bg-white border border-[#EDE8E0] text-[#3A3A3A] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </AnimateIn>
          )}

          {/* Article body */}
          <AnimateIn>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#EDE8E0]">
              {blocks.map((block, i) => renderBlock(block.trim(), i))}
            </div>
          </AnimateIn>

          {/* Footer nav */}
          <div className="mt-8 pt-6 border-t border-[#EDE8E0] flex items-center justify-between">
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-sm text-[#8B1A1A] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to all news
            </Link>
            <span className="text-xs text-[#3A3A3A]/50">{post.author}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
