"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggle: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("theme") as Theme | null
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    setTheme(stored ?? preferred)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    root.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme, mounted])

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"))

  if (!mounted) return <>{children}</>

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)