"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "@/components/ui/ProjectCard"
import { projects, type ProjectType } from "@/data/projects"

const filters: (ProjectType | "All")[] = ["All", "Web", "Fintech", "Embedded", "AI"]

export default function Projects() {
  const [active, setActive] = useState<ProjectType | "All">("All")

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.type === active)

  return (
    <section id="projects" className="relative py-32 overflow-hidden">

      {/* Bg glow */}
      <div
        className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none -z-10"
        style={{ background: "var(--glow-coral)" }}
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
          Projects
        </motion.p>

        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold leading-none tracking-tight"
                style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)", color: "var(--ink)" }}
              >
                Things I've
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display font-bold leading-none tracking-tight"
                style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)", color: "var(--coral)" }}
              >
                shipped.
              </motion.h2>
            </div>
          </div>

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                style={
                  active === f
                    ? { background: "var(--coral)", color: "#fff" }
                    : {
                        background: "var(--surface)",
                        color: "var(--ink-muted)",
                        border: "1px solid var(--border)",
                      }
                }
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{   opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mt-16 pt-16"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <a
            href="https://github.com/Slmpire"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--ink)",
            }}
          >
            <span>View all on GitHub</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↗
            </motion.span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}