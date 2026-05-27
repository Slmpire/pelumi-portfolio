"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/cn"

const links = [
  { label: "About",    href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog",     href: "/blog" },
  { label: "Contact",  href: "/#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled
        ? "bg-(--color-brand-mist)/90 backdrop-blur-md border-b border-(--color-brand-ink)/10 py-3"
        : "bg-transparent py-6"
    )}>
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-bold text-xl tracking-tight text-(--color-brand-ink) hover:text-(--color-brand-coral) transition-colors"
        >
          PO.
        </Link>

        <ul className="flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm font-medium text-(--color-brand-ink)/70 hover:text-(--color-brand-ink) transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-(--color-brand-coral) group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}