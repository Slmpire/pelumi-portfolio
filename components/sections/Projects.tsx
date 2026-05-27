"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "@/components/ui/ProjectCard"
import { projects, type ProjectType } from "@/data/projects"
import { cn } from "@/lib/cn"

const filters: (ProjectType | "All")[] = ["All", "Web", "Embedded", "Fintech", "AI"]

export default function Projects() {
  const [active, setActive] = useState<ProjectType | "All">("All")

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.type === active)

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">

      <motion.p
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-sm font-medium tracking-widest uppercase text-(--color-brand-coral) mb-4"
      >
        Projects
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-extrabold text-5xl md:text-7xl text-(--color-brand-ink) leading-none mb-12"
      >
        Things I've{" "}
        <span className="text-(--color-brand-coral)">shipped.</span>
      </motion.h2>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-2 mb-12"
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200",
              active === f
                ? "bg-(--color-brand-ink) text-(--color-brand-mist) border-(--color-brand-ink)"
                : "bg-transparent text-(--color-brand-ink)/50 border-(--color-brand-ink)/20 hover:border-(--color-brand-ink)/50"
            )}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

    </section>
  )
}