import { getPostBySlug, getAllPosts } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Pelumi Ogunleye`,
    description: post.summary,
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 max-w-3xl mx-auto">

      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-(--color-brand-ink)/40 hover:text-(--color-brand-ink) transition-colors mb-12"
      >
        ← Back to blog
      </Link>

      <div className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-(--color-brand-ink)/5 text-(--color-brand-ink)/50">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="font-display font-extrabold text-4xl md:text-5xl text-(--color-brand-ink) leading-tight mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-(--color-brand-ink)/30">
          <span>{new Date(post.date).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
      </div>

      <article className="prose prose-lg prose-neutral max-w-none
        prose-headings:font-display prose-headings:font-bold prose-headings:text-(--color-brand-ink)
        prose-p:text-(--color-brand-ink)/70 prose-p:leading-relaxed
        prose-a:text-(--color-brand-coral) prose-a:no-underline hover:prose-a:underline
        prose-code:text-(--color-brand-coral) prose-code:bg-(--color-brand-ink)/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-(--color-brand-slate) prose-pre:text-white
        prose-strong:text-(--color-brand-ink)
      ">
        <MDXRemote source={post.content} />
      </article>

    </main>
  )
}