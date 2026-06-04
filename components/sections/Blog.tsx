import { getAllPosts } from "@/lib/mdx"
import BlogCard from "@/components/ui/BlogCard"
import Link from "next/link"

export default async function BlogSection() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <section id="blog" className="py-32 px-6 max-w-6xl mx-auto">

      <p
        className="text-sm font-medium tracking-widest uppercase mb-4"
        style={{ color: "var(--coral)" }}
      >
        Writing
      </p>

      <div className="flex items-end justify-between mb-16">
        <h2
          className="font-display font-bold leading-none"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--ink)" }}
        >
          Latest{" "}
          <span style={{ color: "var(--coral)" }}>posts.</span>
        </h2>
        <Link
          href="/blog"
          className="text-sm font-medium hidden sm:block hover:underline"
          style={{ color: "var(--ink-muted)" }}
        >
          All posts →
        </Link>
      </div>

      <div className="space-y-4">
        {posts.map((post, i) => (
          <BlogCard key={post.slug} post={post} index={i} />
        ))}
      </div>

      <Link
        href="/blog"
        className="mt-8 inline-block text-sm font-medium hover:underline sm:hidden"
        style={{ color: "var(--coral)" }}
      >
        All posts →
      </Link>
    </section>
  )
}