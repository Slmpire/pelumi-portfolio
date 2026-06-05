"use client"

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import TechCanvas from "@/components/ui/TechCanvas"

const roles = [
  "Full-Stack Developer",
  "Embedded Systems Engineer",
  "Product Builder",
  "EEE @ OAU Ife",
]

const codeLines = [
  { text: "const pelumi = {",            color: "#F0F0EC" },
  { text: '  stack: ["Next.js","Node"],', color: "#60a5fa" },
  { text: '  builds: "real products",',  color: "#34d399" },
  { text: '  location: "Nigeria 🇳🇬",',  color: "#f59e0b" },
  { text: "  available: true,",           color: "#f472b6" },
  { text: "}",                            color: "#F0F0EC" },
]

const floatingProjects = [
  { title: "BookSeat",       type: "Web",     emoji: "🎟", color: "#3b82f6" },
  { title: "Oga Finance",    type: "Fintech", emoji: "💰", color: "#10b981" },
  { title: "Health Monitor", type: "ESP32",   emoji: "⚡", color: "#f59e0b" },
]

const socials = [
  { label: "GitHub",   href: "https://github.com/Slmpire" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter",  href: "#" },
]

const stats = [
  { num: "10+", label: "Projects" },
  { num: "2+",  label: "Years"    },
  { num: "5",   label: "Stacks"   },
]

// ── Magnetic button ──────────────────────────────────────────────
function MagneticButton({
  children,
  href,
  primary,
}: {
  children: React.ReactNode
  href: string
  primary?: boolean
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x  = useMotionValue(0)
  const y  = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 })
  const sy = useSpring(y, { stiffness: 200, damping: 15 })

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left - rect.width  / 2) * 0.35)
    y.set((e.clientY - rect.top  - rect.height / 2) * 0.35)
  }

  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{
        x: sx,
        y: sy,
        ...(primary
          ? { background: "#FF4D3D", color: "#fff" }
          : {
              background: "rgba(255,255,255,0.06)",
              color: "#F0F0EC",
              border: "1.5px solid rgba(255,255,255,0.12)",
            }),
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.96 }}
      className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold cursor-pointer"
    >
      {children}
    </motion.a>
  )
}

// ── Role ticker ──────────────────────────────────────────────────
function RoleTicker() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="h-7 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 28,  opacity: 0 }}
          animate={{ y: 0,   opacity: 1 }}
          exit={{   y: -28,  opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute text-sm font-semibold tracking-wide"
          style={{ color: "#FF4D3D" }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

// ── Live code block ──────────────────────────────────────────────
function CodeBlock() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible >= codeLines.length) return
    const t = setTimeout(() => setVisible((v) => v + 1), 340)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="rounded-2xl p-5 font-mono text-xs leading-relaxed"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Window dots */}
      <div className="flex gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-80"   />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-80"  />
      </div>

      {codeLines.slice(0, visible).map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: line.color }}
        >
          {line.text}
          {i === visible - 1 && visible < codeLines.length && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.7, repeat: Infinity }}
              className="inline-block w-1.5 h-3.5 ml-0.5 align-middle rounded-sm"
              style={{ background: "#FF4D3D" }}
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}

// ── Main Hero ────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Particle canvas */}
      <TechCanvas />

      {/* Gradient fade to page bg at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg))" }}
      />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: "rgba(255,77,61,0.12)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "rgba(200,241,53,0.08)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center">

          {/* ── LEFT ── */}
          <div>

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(240,240,236,0.6)",
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-400 inline-block"
              />
              Available for new projects
            </motion.div>

            {/* Name */}
            <div className="mb-4">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="font-display font-bold leading-[0.9] tracking-tighter"
                  style={{ fontSize: "clamp(4rem, 10vw, 8.5rem)", color: "#F0F0EC" }}
                >
                  Pelumi
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
                  className="font-display font-bold leading-[0.9] tracking-tighter"
                  style={{ fontSize: "clamp(4rem, 10vw, 8.5rem)", color: "#FF4D3D" }}
                >
                  Ogunleye.
                </motion.h1>
              </div>
            </div>

            {/* Role ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mb-8"
            >
              <RoleTicker />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: "rgba(240,240,236,0.55)" }}
            >
              I build products end-to-end — from ESP32 firmware to
              production Next.js apps. Based in Nigeria, building for the world.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.88 }}
              className="flex items-center gap-4 flex-wrap mb-14"
            >
              <MagneticButton href="/#projects" primary>
                View my work ↗
              </MagneticButton>
              <MagneticButton href="/#contact">
                Let's talk
              </MagneticButton>
            </motion.div>

            {/* Stats + socials */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex items-center justify-between pt-8 flex-wrap gap-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-10">
                {stats.map(({ num, label }) => (
                  <div key={label}>
                    <p
                      className="font-display font-bold text-2xl"
                      style={{ color: "#F0F0EC" }}
                    >
                      {num}
                    </p>
                    <p
                      className="text-xs font-medium"
                      style={{ color: "rgba(240,240,236,0.25)" }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-5">
                {socials.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium hover:underline transition-opacity hover:opacity-100"
                    style={{ color: "rgba(240,240,236,0.25)" }}
                  >
                    {label} ↗
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT ── */}
          <div className="hidden lg:flex flex-col gap-4">

            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative"
            >
              {/* Glow behind photo */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl scale-95"
                style={{ background: "rgba(255,77,61,0.15)" }}
              />

              {/* Offset lime shape */}
              <div
                className="absolute inset-0 rounded-3xl translate-x-3 translate-y-3"
                style={{ background: "#C8F135", opacity: 0.25 }}
              />

              <div
                className="relative w-full aspect-[4/4.5] rounded-3xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div
  className="relative w-full aspect-[4/4.5] rounded-3xl overflow-hidden"
  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
>
  {/* Fallback monogram — always visible behind image */}
  <div
    className="absolute inset-0 flex items-center justify-center"
    style={{ background: "#111111" }}
  >
    <span
      className="font-display font-bold select-none"
      style={{ fontSize: "6rem", color: "rgba(255,255,255,0.06)" }}
    >
      PO
    </span>
  </div>

  {/* Image loads on top — only shows if file exists */}
  <Image
    src="/images/profile.jpg"
    alt="Pelumi Ogunleye"
    fill
    className="object-cover relative z-10"
    priority
    onError={(e) => {
      (e.target as HTMLImageElement).style.display = "none"
    }}
  />
</div>
                {/* Fallback monogram */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "#111111" }}
                >
                  <span
                    className="font-display font-bold select-none"
                    style={{ fontSize: "6rem", color: "rgba(255,255,255,0.06)" }}
                  >
                    PO
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating project cards */}
            {floatingProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0  }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: -4, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: project.color + "25" }}
                >
                  {project.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-semibold truncate"
                    style={{ color: "#F0F0EC" }}
                  >
                    {project.title}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(240,240,236,0.3)" }}
                  >
                    {project.type}
                  </p>
                </div>
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: project.color }}
                />
              </motion.div>
            ))}

            {/* Live code block */}
            <CodeBlock />

          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{ color: "rgba(240,240,236,0.2)" }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="w-px h-8"
          style={{ background: "rgba(240,240,236,0.15)" }}
        />
      </motion.div>
    </section>
  )
}