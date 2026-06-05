"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/cn"
import type { Project, ProjectType } from "@/data/projects"

const typeConfig: Record<ProjectType, { color: string; bg: string; emoji: string }> = {
  Web:      { color: "#3b82f6", bg: "rgba(59,130,246,0.12)",  emoji: "🌐" },
  Embedded: { color: "#f59e0b", bg: "rgba(245,158,11,0.12)",  emoji: "⚡" },
  Fintech:  { color: "#10b981", bg: "rgba(16,185,129,0.12)",  emoji: "💰" },
  AI:       { color: "#a78bfa", bg: "rgba(167,139,250,0.12)", emoji: "🤖" },
}

export default function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const [preview, setPreview] = useState(false)
  const cfg = typeConfig[project.type]

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group relative flex flex-col rounded-2xl overflow-hidden h-full"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        {/* Colored top bar */}
        <div
          className="h-1 w-full"
          style={{ background: cfg.color }}
        />

        {/* Banner */}
        <div
          className="h-28 flex items-center justify-center relative overflow-hidden"
          style={{ background: cfg.bg }}
        >
          <span className="text-5xl opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500">
            {cfg.emoji}
          </span>

          {/* Stack pills */}
          <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(0,0,0,0.25)",
                  color: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(4px)",
                }}
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span
                className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(0,0,0,0.25)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                +{project.stack.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-3 p-5 flex-1">
          <div className="flex items-center justify-between">
            <span
              className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
              style={{ background: cfg.bg, color: cfg.color }}
            >
              {project.type}
            </span>
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: cfg.color }}
            />
          </div>

          <h3
            className="font-display font-bold text-lg leading-tight group-hover:transition-colors duration-200"
            style={{ color: "var(--ink)" }}
          >
            {project.title}
          </h3>

          <p
            className="text-sm leading-relaxed flex-1 line-clamp-3"
            style={{ color: "var(--ink-muted)" }}
          >
            {project.longDesc}
          </p>

          {/* CTA row */}
          <div className="flex gap-2 pt-2 mt-auto">
            {project.live && (
              <button
                onClick={() => setPreview(true)}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 hover:opacity-90"
                style={{ background: cfg.color, color: "#fff" }}
              >
                Live demo
              </button>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className={cn(
                  "py-2.5 rounded-xl text-xs font-bold text-center transition-all duration-200",
                  project.live ? "px-4" : "flex-1"
                )}
                style={{
                  background: "var(--bg-subtle)",
                  color: "var(--ink-muted)",
                  border: "1px solid var(--border)",
                }}
              >
                Source
              </Link>
            )}
            {!project.live && !project.github && (
              <span
                className="text-xs py-2"
                style={{ color: "var(--ink-faint)" }}
              >
                Coming soon
              </span>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
            onClick={() => setPreview(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              exit={{   opacity: 0, scale: 0.95,   y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="font-bold text-sm"
                    style={{ color: "var(--ink)" }}
                  >
                    {project.title}
                  </span>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: cfg.bg, color: cfg.color }}
                  >
                    {project.type}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href={project.live}
                    target="_blank"
                    className="text-xs font-medium hover:underline"
                    style={{ color: "var(--coral)" }}
                  >
                    Open in new tab ↗
                  </Link>
                  <button
                    onClick={() => setPreview(false)}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-sm transition-colors"
                    style={{
                      background: "var(--bg-subtle)",
                      color: "var(--ink-muted)",
                    }}
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