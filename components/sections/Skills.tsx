"use client"

import { motion } from "framer-motion"
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiFirebase,
  SiGit, SiVercel, SiRailway
} from "react-icons/si"
import { TbBrandFramerMotion, TbCpu } from "react-icons/tb"

const groups = [
  {
    label: "Frontend",
    color: "from-blue-50 to-indigo-50",
    accent: "text-blue-500",
    skills: [
      { name: "React",         icon: SiReact },
      { name: "Next.js",       icon: SiNextdotjs },
      { name: "TypeScript",    icon: SiTypescript },
      { name: "Tailwind CSS",  icon: SiTailwindcss },
      { name: "Framer Motion", icon: TbBrandFramerMotion },
    ],
  },
  {
    label: "Backend",
    color: "from-green-50 to-emerald-50",
    accent: "text-green-600",
    skills: [
      { name: "Node.js",    icon: SiNodedotjs },
      { name: "Express",    icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase",   icon: SiFirebase },
    ],
  },
  {
    label: "Embedded",
    color: "from-orange-50 to-amber-50",
    accent: "text-orange-500",
    skills: [
      { name: "ESP32",   icon: TbCpu },
      { name: "C/C++",   icon: TbCpu },
      { name: "UART",    icon: TbCpu },
      { name: "SPI",     icon: TbCpu },
    ],
  },
  {
    label: "Tooling",
    color: "from-purple-50 to-violet-50",
    accent: "text-purple-500",
    skills: [
      { name: "Git",    icon: SiGit },
      { name: "Vercel", icon: SiVercel },
      { name: "Railway",icon: SiRailway },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto">

      <motion.p
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-sm font-medium tracking-widest uppercase text-(--color-brand-coral) mb-4"
      >
        Stack
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-display italic text-5xl md:text-7xl text-(--color-brand-ink) leading-none mb-16"
      >
        Tools I{" "}
        <span className="text-(--color-brand-coral)">trust.</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className={`p-6 rounded-2xl bg-gradient-to-br ${group.color} border border-(--color-brand-ink)/5 hover:shadow-md transition-all duration-300`}
          >
            <p className={`font-bold text-(--color-brand-ink) mb-5 text-sm uppercase tracking-wider`}>
              {group.label}
            </p>
            <div className="space-y-3">
              {group.skills.map(({ name, icon: Icon }) => (
                <div key={name} className="flex items-center gap-3">
                  <Icon className={`text-lg ${group.accent} flex-shrink-0`} />
                  <span className="text-sm font-medium text-(--color-brand-ink)/70">{name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}