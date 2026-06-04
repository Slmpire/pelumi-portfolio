"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import EntryGate from "@/components/ui/EntryGate"

export default function PageShell({ children }: { children: React.ReactNode }) {
  const [entered, setEntered] = useState(false)
  const [showGate, setShowGate] = useState(true)

  useEffect(() => {
    const visited = sessionStorage.getItem("visited")
    if (visited) { setShowGate(false); setEntered(true) }
    else setEntered(false)
  }, [])

  const handleEnter = () => {
    sessionStorage.setItem("visited", "true")
    setEntered(true)
    setTimeout(() => setShowGate(false), 1000)
  }

  return (
    <>
      <AnimatePresence>
        {showGate && <EntryGate onEnter={handleEnter} />}
      </AnimatePresence>
      {entered && children}
    </>
  )
}