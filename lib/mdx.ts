import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"
import type { Post, PostWithContent } from "@/types"

const POSTS_DIR = path.join(process.cwd(), "content/posts")

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return []

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"))

  return files
    .map((filename) => {
      const slug = filename.replace(".mdx", "")
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8")
      const { data, content } = matter(raw)

      return {
        slug,
        title:       data.title ?? "Untitled",
        date:        data.date ?? "",
        summary:     data.summary ?? "",
        tags:        data.tags ?? [],
        readingTime: readingTime(content).text,
        featured:    data.featured ?? false,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<PostWithContent | null> {
  const filepath = path.join(POSTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filepath)) return null

  const raw = fs.readFileSync(filepath, "utf-8")
  const { data, content } = matter(raw)

  return {
    slug,
    title:       data.title ?? "Untitled",
    date:        data.date ?? "",
    summary:     data.summary ?? "",
    tags:        data.tags ?? [],
    readingTime: readingTime(content).text,
    featured:    data.featured ?? false,
    content,
  }
}