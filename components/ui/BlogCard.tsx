"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { Post } from "@/types"

export default function BlogCard({ post, index }: { post: Post; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border border-(--color-brand-ink)/10 rounded-2xl hover:border-(--color-brand-coral)/40 hover:shadow-md transition-all duration-300 bg-white/60"
      >
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-(--color-brand-ink)/5 text-(--color-brand-ink)/50">
                {tag}
              </span>
            ))}
          </div>

          <h2 className="font-display font-bold text-lg text-(--color-brand-ink) group-hover:text-(--color-brand-coral) transition-colors leading-snug">
            {post.title}
          </h2>

          <p className="text-sm text-(--color-brand-ink)/40 leading-relaxed line-clamp-2">
            {post.summary}
          </p>
        </div>

        <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 flex-shrink-0">
          <span className="text-xs text-(--color-brand-ink)/30">
            {new Date(post.date).toLocaleDateString("en-NG", { year: "numeric", month: "short", day: "numeric" })}
          </span>
          <span className="text-xs text-(--color-brand-ink)/30">{post.readingTime}</span>
          <span className="text-sm text-(--color-brand-coral) opacity-0 group-hover:opacity-100 transition-opacity">
            Read →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}