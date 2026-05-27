import { getAllPosts } from "@/lib/mdx"
import BlogCard from "@/components/ui/BlogCard"
import { Metadata } from "next"
import { createMetadata } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Blog — Pelumi Ogunleye",
  description: "Thoughts on full-stack development, embedded systems, and building products in Nigeria.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 max-w-4xl mx-auto">

      <p className="text-sm font-medium tracking-widest uppercase text-(--color-brand-coral) mb-4">
        Blog
      </p>

      <h1 className="font-display font-extrabold text-5xl md:text-7xl text-(--color-brand-ink) leading-none mb-6">
        Writing.
      </h1>

      <p className="text-(--color-brand-ink)/50 text-lg mb-16 max-w-xl">
        Honest write-ups on building products, shipping embedded systems, and navigating tech from Nigeria.
      </p>

      {posts.length === 0 ? (
        <p className="text-(--color-brand-ink)/30 text-sm">No posts yet — check back soon.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      )}
    </main>
  )
}