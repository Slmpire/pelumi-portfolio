"use client"

import { useTheme } from "@/app/theme-provider"
import { motion, AnimatePresence } from "framer-motion"

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200"
      style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
    >
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0,   scale: 1 }}
            exit={{    opacity: 0, rotate:  30,  scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="text-sm select-none"
          >
            🌙
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: 30,  scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0,   scale: 1 }}
            exit={{    opacity: 0, rotate: -30,  scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="text-sm select-none"
          >
            ☀️
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}