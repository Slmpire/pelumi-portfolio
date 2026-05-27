import type { Metadata } from "next"

const BASE_URL = "https://pelumi.dev"

interface PageMeta {
  title: string
  description: string
  path?: string
  image?: string
}

export function createMetadata({ title, description, path = "", image }: PageMeta): Metadata {
  const url = `${BASE_URL}${path}`

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Pelumi Ogunleye",
      locale: "en_NG",
      type: "website",
      images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  }
}