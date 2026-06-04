import type { Metadata } from "next"

import "@/styles/globals.css"
import { ThemeProvider } from "@/app/theme-provider"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Grain from "@/components/ui/Grain"
import Cursor from "@/components/ui/Cursor"
import SmoothScroll from "@/components/ui/SmoothScroll"
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "Pelumi Ogunleye — Full-Stack Developer",
    template: "%s — Pelumi Ogunleye",
  },
  description: "Full-stack developer and EEE student at OAU building products end-to-end.",
  metadataBase: new URL("https://pelumi.dev"),
  openGraph: { siteName: "Pelumi Ogunleye", locale: "en_NG", type: "website" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SmoothScroll>
            <Grain />
            <Cursor />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('theme') ||
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', t);
              } catch(e) {}
            `,
          }}
        />
      </body>
    </html>
  )
}