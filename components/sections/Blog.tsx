import { getAllPosts } from "@/lib/mdx"
import BlogCard from "@/components/ui/BlogCard"
import Link from "next/link"

export default function BlogSection() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <section id="blog" className="py-32 px-6 max-w-6xl mx-auto">

      <p className="text-sm font-medium tracking-widest uppercase text-(--color-brand-coral) mb-4">
        Writing
      </p>

      <div className="flex items-end justify-between mb-16">
        <h2 className="font-display font-extrabold text-5xl md:text-7xl text-(--color-brand-ink) leading-none">
          Latest{" "}
          <span className="text-(--color-brand-coral)">posts.</span>
        </h2>
        <Link
          href="/blog"
          className="text-sm font-medium text-(--color-brand-ink)/50 hover:text-(--color-brand-ink) transition-colors hidden sm:block"
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
        className="mt-8 inline-block text-sm font-medium text-(--color-brand-coral) hover:underline sm:hidden"
      >
        All posts →
      </Link>
    </section>
  )
}