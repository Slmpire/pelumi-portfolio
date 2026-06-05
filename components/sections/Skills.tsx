"use client"

import { motion } from "framer-motion"
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiFirebase,
  SiGit, SiVercel, SiGithub, SiDocker,
} from "react-icons/si"
import { TbBrandFramerMotion, TbCpu, TbApi, TbCloud } from "react-icons/tb"

const groups = [
  {
    label: "Frontend",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.08)",
    desc: "Building interfaces people actually enjoy using.",
    skills: [
      { name: "React",         icon: SiReact,              color: "#61DAFB" },
      { name: "Next.js",       icon: SiNextdotjs,          color: "#ffffff" },
      { name: "TypeScript",    icon: SiTypescript,         color: "#3178C6" },
      { name: "Tailwind CSS",  icon: SiTailwindcss,        color: "#38BDF8" },
      { name: "Framer Motion", icon: TbBrandFramerMotion,  color: "#FF4D3D" },
    ],
  },
  {
    label: "Backend",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    desc: "APIs, databases, and server logic that scales.",
    skills: [
      { name: "Node.js",    icon: SiNodedotjs,   color: "#68A063" },
      { name: "Express",    icon: SiExpress,     color: "#ffffff" },
      { name: "PostgreSQL", icon: SiPostgresql,  color: "#336791" },
      { name: "Firebase",   icon: SiFirebase,    color: "#FFCA28" },
      { name: "REST APIs",  icon: TbApi,         color: "#10b981" },
    ],
  },
  {
    label: "Embedded",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    desc: "Hardware-software integration from chip to cloud.",
    skills: [
      { name: "ESP32",              icon: TbCpu, color: "#f59e0b" },
      { name: "C / C++",            icon: TbCpu, color: "#00599C" },
      { name: "UART / SPI / I2C",   icon: TbCpu, color: "#f59e0b" },
      { name: "Sensor Integration", icon: TbCpu, color: "#f59e0b" },
    ],
  },
  {
    label: "Tooling",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    desc: "The infrastructure behind every ship.",
    skills: [
      { name: "Git",     icon: SiGit,    color: "#F05032" },
      { name: "GitHub",  icon: SiGithub, color: "#ffffff" },
      { name: "Vercel",  icon: SiVercel, color: "#ffffff" },
      { name: "Railway", icon: TbCloud,  color: "#a78bfa" },
      { name: "Docker",  icon: SiDocker, color: "#2496ED" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">

      {/* Bg glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none -z-10"
        style={{ background: "var(--glow-lime)" }}
      />

      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
          style={{ color: "var(--coral)" }}
        >
          Stack
        </motion.p>

        {/* Headline */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold leading-none tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)", color: "var(--ink)" }}
          >
            Tools I{" "}
            <span style={{ color: "var(--coral)" }}>trust.</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg mb-20 max-w-xl"
          style={{ color: "var(--ink-muted)" }}
        >
          From browser to microcontroller — the full spectrum.
        </motion.p>

        {/* Groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl p-6 flex flex-col gap-5 overflow-hidden"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Colored top line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: group.color }}
              />

              {/* Header */}
              <div>
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3"
                  style={{ background: group.bg }}
                >
                  <span
                    className="text-xs font-bold tracking-wider"
                    style={{ color: group.color }}
                  >
                    {group.label.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <h3
                  className="font-display font-bold text-base mb-1"
                  style={{ color: "var(--ink)" }}
                >
                  {group.label}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--ink-faint)" }}
                >
                  {group.desc}
                </p>
              </div>

              {/* Skills list */}
              <div className="space-y-2.5">
                {group.skills.map(({ name, icon: Icon, color }, si) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + si * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: color + "18" }}
                    >
                      <Icon style={{ color, fontSize: 14 }} />
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--ink-muted)" }}
                    >
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently learning bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 p-5 rounded-2xl flex items-center gap-4 flex-wrap"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <div
            className="w-2 h-2 rounded-full animate-pulse flex-shrink-0"
            style={{ background: "var(--coral)" }}
          />
          <span
            className="text-sm font-semibold"
            style={{ color: "var(--ink)" }}
          >
            Currently levelling up:
          </span>
          <div className="flex flex-wrap gap-2">
            {["System Design", "DSA / Neetcode", "CS50x", "You Don't Know JS"].map((item) => (
              <span
                key={item}
                className="text-xs font-medium px-3 py-1 rounded-full"
                style={{
                  background: "rgba(255,77,61,0.08)",
                  color: "var(--coral)",
                  border: "1px solid rgba(255,77,61,0.2)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}