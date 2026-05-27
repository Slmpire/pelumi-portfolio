import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google"
import "@/styles/globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: {
    default: "Pelumi Ogunleye — Full-Stack Developer",
    template: "%s — Pelumi Ogunleye",
  },
  description: "Full-stack developer and EEE student at OAU building products end-to-end — from embedded systems to production web apps.",
  metadataBase: new URL("https://pelumi.dev"),
  openGraph: {
    siteName: "Pelumi Ogunleye",
    locale: "en_NG",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${instrument.variable}`}>
      <body className="bg-(--color-brand-mist) text-(--color-brand-ink) antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pelumi Ogunleye",
              url: "https://pelumi.dev",
              jobTitle: "Full-Stack Developer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Obafemi Awolowo University",
              },
              sameAs: ["https://github.com/Slmpire"],
            }),
          }}
        />
      </body>
    </html>
  )
}