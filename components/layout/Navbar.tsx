"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/cn"
import ThemeToggle from "@/components/ui/ThemeToggle"

const navLinks: { label: string; href: string }[] = [
  { label: "About",    href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog",     href: "/blog" },
  { label: "Contact",  href: "/#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-6"
        )}
        style={scrolled ? {
          background: "color-mix(in srgb, var(--bg) 85%, transparent)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        } : {}}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="font-display italic text-xl tracking-tight transition-colors duration-200"
            style={{ color: "var(--ink)" }}
          >
            PO.
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm font-medium transition-colors duration-200 relative group"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {label}
                  <span
                    className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ background: "var(--coral)" }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right — toggle + hamburger */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-5 h-px"
                style={{ background: "var(--ink)" }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="block w-5 h-px"
                style={{ background: "var(--ink)" }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-5 h-px"
                style={{ background: "var(--ink)" }}
              />
            </button>
          </div>

        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center px-8 md:hidden"
            style={{ background: "var(--bg)" }}
          >
            <ul className="space-y-8">
              {navLinks.map(({ label, href }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                >
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display italic text-5xl transition-colors duration-200"
                    style={{ color: "var(--ink)" }}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 left-8 text-sm"
              style={{ color: "var(--ink-faint)" }}
            >
              pelumi.dev
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}