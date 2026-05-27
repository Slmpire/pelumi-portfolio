"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/cn"
import type { Project, ProjectType } from "@/data/projects"

const typeConfig: Record<ProjectType, { color: string; banner: string; emoji: string }> = {
  Web:      { color: "bg-blue-50 text-blue-600",    banner: "from-blue-400 to-indigo-500",    emoji: "🌐" },
  Embedded: { color: "bg-orange-50 text-orange-600", banner: "from-orange-400 to-amber-500",   emoji: "⚡" },
  Fintech:  { color: "bg-green-50 text-green-700",   banner: "from-green-400 to-emerald-500",  emoji: "💰" },
  AI:       { color: "bg-purple-50 text-purple-600", banner: "from-purple-400 to-violet-500",  emoji: "🤖" },
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [preview, setPreview] = useState(false)
  const config = typeConfig[project.type]

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group border border-(--color-brand-ink)/10 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
      >
        {/* Gradient banner */}
        <div className={`h-32 bg-gradient-to-br ${config.banner} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-20">{config.emoji}</span>
          </div>
          <div className="absolute inset-0 bg-black/10" />
          {/* Stack pills on banner */}
          <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((tech) => (
              <span key={tech} className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
                +{project.stack.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Card body */}
        <div className="p-5 flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <span className={cn("px-2.5 py-0.5 text-xs font-medium rounded-full", config.color)}>
              {project.type}
            </span>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {project.github && (
                <Link href={project.github} target="_blank" className="text-xs text-(--color-brand-ink)/40 hover:text-(--color-brand-ink) transition-colors">
                  GitHub ↗
                </Link>
              )}
            </div>
          </div>

          <h3 className="font-bold text-lg text-(--color-brand-ink) group-hover:text-(--color-brand-coral) transition-colors leading-tight">
            {project.title}
          </h3>

          <p className="text-sm text-(--color-brand-ink)/50 leading-relaxed line-clamp-3">
            {project.longDesc}
          </p>

          <div className="flex gap-2 pt-1 mt-auto">
            {project.live && (
              <button
                onClick={() => setPreview(true)}
                className="flex-1 py-2 bg-(--color-brand-ink) text-(--color-brand-mist) text-xs font-semibold rounded-xl hover:bg-(--color-brand-coral) transition-colors duration-300"
              >
                View demo
              </button>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className={cn(
                  "py-2 text-xs font-semibold rounded-xl border border-(--color-brand-ink)/10 hover:border-(--color-brand-ink)/30 transition-colors text-center text-(--color-brand-ink)/60",
                  project.live ? "px-4" : "flex-1"
                )}
              >
                Source
              </Link>
            )}
            {!project.live && !project.github && (
              <span className="text-xs text-(--color-brand-ink)/30 italic py-2">Coming soon</span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Demo modal */}
      <AnimatePresence>
        {preview && project.live && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-(--color-brand-ink)/60 backdrop-blur-sm"
            onClick={() => setPreview(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-(--color-brand-ink)/10">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-(--color-brand-ink)">{project.title}</span>
                  <span className={cn("px-2 py-0.5 text-xs font-medium rounded-full", config.color)}>
                    {project.type}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Link href={project.live} target="_blank" className="text-xs text-(--color-brand-coral) font-medium hover:underline">
                    Open in new tab ↗
                  </Link>
                  <button
                    onClick={() => setPreview(false)}
                    className="w-7 h-7 rounded-full bg-(--color-brand-ink)/5 hover:bg-(--color-brand-ink)/10 transition-colors flex items-center justify-center text-(--color-brand-ink)/60 text-sm"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <iframe
                src={project.live}
                className="w-full border-0"
                style={{ height: "75vh" }}
                title={`${project.title} demo`}
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}