export interface Post {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  readingTime: string
  featured?: boolean
}

export interface PostWithContent extends Post {
  content: string
}