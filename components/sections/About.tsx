"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const timeline = [
  {
    year: "2022",
    title: "Started EEE @ OAU",
    desc: "Enrolled in Electrical & Electronics Engineering at Obafemi Awolowo University, Ife. Fell in love with how hardware and software talk to each other.",
    color: "#FF4D3D",
  },
  {
    year: "2023",
    title: "Went deep on embedded systems",
    desc: "Built health monitoring systems with ESP32, MAX6675, MAX30102. Learned UART, SPI, Firebase real-time sync. First time I shipped something physical.",
    color: "#C8F135",
  },
  {
    year: "2024",
    title: "Crossed into full-stack",
    desc: "Shipped NaijaQuant, Moflix, Card Validator. Picked up React, Node.js, PostgreSQL, Railway, Vercel. Started building for real users.",
    color: "#60a5fa",
  },
  {
    year: "2025",
    title: "Building real products",
    desc: "Completed BookSeat — a full Nigerian event ticketing platform. Exploring fintech with Oga Finance. Assistant Technical Team Lead in a tech community.",
    color: "#f59e0b",
  },
]

const traits = [
  { label: "Obsessed with craft",     icon: "⚡" },
  { label: "Ships fast, ships clean", icon: "🚀" },
  { label: "Hardware to cloud",       icon: "🔧" },
  { label: "Built for Nigeria",       icon: "🇳🇬" },
  { label: "Open to collab",          icon: "🤝" },
  { label: "Always learning",         icon: "📚" },
]

function TimelineItem({
  item,
  index,
  total,
}: {
  item: typeof timeline[0]
  index: number
  total: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.4"],
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const x       = useTransform(scrollYProgress, [0, 1], [-40, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className="flex gap-6 pb-12 relative"
    >
      {/* Line */}
      {index < total - 1 && (
        <div
          className="absolute left-[1.85rem] top-12 w-px h-full"
          style={{ background: "var(--border)" }}
        />
      )}

      {/* Year bubble */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 z-10 text-xs font-bold"
        style={{
          background: item.color + "18",
          border: `1px solid ${item.color}40`,
          color: item.color,
        }}
      >
        {item.year}
      </div>

      {/* Content */}
      <div className="pt-3 flex-1">
        <h3
          className="font-display font-bold text-lg mb-2"
          style={{ color: "var(--ink)" }}
        >
          {item.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--ink-muted)" }}
        >
          {item.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 overflow-hidden"
    >
      {/* Parallax bg glow */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "var(--glow-lime)" }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
          style={{ color: "var(--coral)" }}
        >
          About
        </motion.p>

        {/* Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold leading-none tracking-tight"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
              color: "var(--ink)",
            }}
          >
            Engineer by{" "}
            <span style={{ color: "var(--coral)" }}>training.</span>
          </motion.h2>
        </div>

        <div className="overflow-hidden mb-20">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display font-bold leading-none tracking-tight"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
              color: "var(--ink-muted)",
            }}
          >
            Builder by choice.
          </motion.h2>
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left — bio + traits */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5 mb-12"
              style={{ color: "var(--ink-muted)" }}
            >
              <p className="text-lg leading-relaxed">
                I'm Pelumi — a full-stack developer and EEE student at
                OAU Ife, Nigeria. I work across the entire stack, from
                microcontroller firmware to React frontends and Node.js
                backends.
              </p>
              <p className="text-base leading-relaxed">
                I don't build to learn — I build to ship. Every project
                is production-grade: real users, real constraints, real
                edge cases solved. That's the only standard I hold myself to.
              </p>
              <p className="text-base leading-relaxed">
                Outside of code I'm into music and gaming. I've moderated
                career guidance sessions for secondary school students —
                giving back to a community that shaped me.
              </p>
            </motion.div>

            {/* Traits grid */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-3 mb-12"
            >
              {traits.map(({ label, icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span className="text-lg">{icon}</span>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-6 pt-8"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {[
                { num: "10+", label: "Projects shipped" },
                { num: "2+",  label: "Years building"   },
                { num: "2",   label: "Stacks mastered"  },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p
                    className="font-display font-bold text-3xl mb-1"
                    style={{ color: "var(--ink)" }}
                  >
                    {num}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--ink-faint)" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — timeline */}
          <div className="relative">
            {timeline.map((item, i) => (
              <TimelineItem
                key={item.year}
                item={item}
                index={i}
                total={timeline.length}
              />
            ))}
          </div>

        </div>

        {/* Marquee */}
        <div
          className="mt-24 -mx-6 overflow-hidden py-5"
          style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="flex gap-10 whitespace-nowrap w-max"
          >
            {[...Array(2)].map((_, ri) => (
              <div key={ri} className="flex gap-10 items-center">
                {[
                  "React", "Next.js", "TypeScript", "Node.js",
                  "Firebase", "ESP32", "Paystack", "Railway",
                  "Vercel", "PostgreSQL", "Framer Motion", "Tailwind CSS",
                ].map((item) => (
                  <span
                    key={item + ri}
                    className="text-sm font-semibold flex items-center gap-4"
                    style={{ color: "var(--ink-faint)" }}
                  >
                    {item}
                    <span
                      className="w-1 h-1 rounded-full inline-block"
                      style={{ background: "var(--coral)" }}
                    />
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}