import { getAllPosts } from "@/lib/mdx"
import Link from "next/link"
import { Post } from "@/types"

function BlogCard({ post, index }: { post: Post; index: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      <div className="flex-1 space-y-2">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider"
              style={{
                background: "rgba(255,77,61,0.08)",
                color: "var(--coral)",
                border: "1px solid rgba(255,77,61,0.15)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h2
          className="font-display font-bold text-lg leading-snug group-hover:text-[var(--coral)] transition-colors"
          style={{ color: "var(--ink)" }}
        >
          {post.title}
        </h2>

        <p
          className="text-sm leading-relaxed line-clamp-2"
          style={{ color: "var(--ink-muted)" }}
        >
          {post.summary}
        </p>
      </div>

      <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 flex-shrink-0">
        <span
          className="text-xs"
          style={{ color: "var(--ink-faint)" }}
        >
          {new Date(post.date).toLocaleDateString("en-NG", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
        <span
          className="text-xs"
          style={{ color: "var(--ink-faint)" }}
        >
          {post.readingTime}
        </span>
        <span
          className="text-sm opacity-0 group-hover:opacity-100 transition-opacity font-medium"
          style={{ color: "var(--coral)" }}
        >
          Read →
        </span>
      </div>
    </Link>
  )
}

export default async function BlogSection() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <section id="blog" className="relative py-32 overflow-hidden">

      {/* Bg glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] pointer-events-none -z-10"
        style={{ background: "var(--glow-lime)" }}
      />

      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <p
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
          style={{ color: "var(--coral)" }}
        >
          Writing
        </p>

        {/* Headline + CTA */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="overflow-hidden">
              <h2
                className="font-display font-bold leading-none tracking-tight"
                style={{
                  fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
                  color: "var(--ink)",
                }}
              >
                Latest
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2
                className="font-display font-bold leading-none tracking-tight"
                style={{
                  fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
                  color: "var(--coral)",
                }}
              >
                posts.
              </h2>
            </div>
          </div>

          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--ink-muted)",
            }}
          >
            All posts ↗
          </Link>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <div
            className="text-center py-20 rounded-2xl"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <p
              className="text-4xl mb-4"
            >
              ✍️
            </p>
            <p
              className="font-display font-bold text-xl mb-2"
              style={{ color: "var(--ink)" }}
            >
              Posts coming soon
            </p>
            <p
              className="text-sm"
              style={{ color: "var(--ink-faint)" }}
            >
              Writing about tech, products, and building from Nigeria.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}

        {/* Mobile all posts link */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--coral)" }}
          >
            All posts →
          </Link>
        </div>

        {/* Bottom divider strip */}
        <div
          className="mt-24 pt-8 flex items-center gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "var(--coral)" }}
          />
          <p
            className="text-xs"
            style={{ color: "var(--ink-faint)" }}
          >
            I write about full-stack development, embedded systems, and
            building products in Nigeria.
          </p>
        </div>

      </div>
    </section>
  )
}