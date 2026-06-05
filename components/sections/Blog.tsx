import { getAllPosts } from "@/lib/mdx"
import BlogCard from "@/components/ui/BlogCard"
import Link from "next/link"

export default async function BlogSection() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <section
      id="blog"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-20 right-[-10%] w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none -z-10"
        style={{ background: "var(--glow-coral)" }}
      />

      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <p
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
          style={{ color: "var(--coral)" }}
        >
          Writing
        </p>

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">

          <div>
            <h2
              className="font-display font-bold leading-none tracking-tight"
              style={{
                fontSize: "clamp(3rem, 7vw, 6rem)",
                color: "var(--ink)",
              }}
            >
              Latest
            </h2>

            <h2
              className="font-display font-bold leading-none tracking-tight"
              style={{
                fontSize: "clamp(3rem, 7vw, 6rem)",
                color: "var(--coral)",
              }}
            >
              posts.
            </h2>
          </div>

          <Link
            href="/blog"
            className="hidden sm:block text-sm font-semibold hover:underline"
            style={{ color: "var(--ink-muted)" }}
          >
            View all posts →
          </Link>
        </div>

        {/* Intro */}
        <p
          className="max-w-2xl text-lg leading-relaxed mb-14"
          style={{ color: "var(--ink-muted)" }}
        >
          Thoughts on software engineering, startups,
          product design, systems thinking, and lessons
          learned while building things on the internet.
        </p>

        {/* Posts */}
        <div className="space-y-4">
          {posts.map((post, index) => (
            <BlogCard
              key={post.slug}
              post={post}
              index={index}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--coral)" }}
          >
            View all posts →
          </Link>
        </div>

        {/* Bottom Divider */}
        <div
          className="mt-24 pt-10"
          style={{
            borderTop: "1px solid var(--border)",
          }}
        >
          <p
            className="text-sm"
            style={{ color: "var(--ink-faint)" }}
          >
            New articles, case studies, engineering notes,
            and project breakdowns published regularly.
          </p>
        </div>

      </div>
    </section>
  )
}