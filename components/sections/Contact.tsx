"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/cn"

type Status = "idle" | "loading" | "success" | "error"

const contactItems = [
  {
    label: "Email",
    value: "ogunleyepelumi123@gmail.com",
    href: "mailto:ogunleyepelumi123@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Slmpire",
    href: "https://github.com/Slmpire",
  },
  {
    label: "Location",
    value: "Nigeria (Remote-friendly)",
    href: null,
  },
]

const fields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Tunde Bakare",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "tunde@example.com",
  },
] as const

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState<Status>("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (status === "loading") return

    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.message || "Failed to send message")
      }

      setStatus("success")

      setForm({
        name: "",
        email: "",
        message: "",
      })

      setTimeout(() => {
        setStatus("idle")
      }, 4000)
    } catch {
      setStatus("error")

      setTimeout(() => {
        setStatus("idle")
      }, 4000)
    }
  }

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <motion.p
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-[var(--color-brand-coral)]"
      >
        Contact
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="max-w-2xl mb-16 font-display text-5xl font-extrabold leading-none text-[var(--color-brand-ink)] md:text-7xl"
      >
        Let&apos;s build something{" "}
        <span className="text-[var(--color-brand-coral)]">
          great.
        </span>
      </motion.h2>

      <div className="grid gap-16 md:grid-cols-2">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <p className="text-lg leading-relaxed text-[color:var(--color-brand-ink)]/60">
            I&apos;m open to freelance projects,
            collaborations, and full-time opportunities.
            If you have something worth building,
            let&apos;s talk.
          </p>

          <div className="space-y-4">
            {contactItems.map(({ label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4"
              >
                <span className="w-16 text-xs font-medium tracking-[0.16em] uppercase text-[color:var(--color-brand-ink)]/30">
                  {label}
                </span>

                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-colors text-[var(--color-brand-ink)] hover:text-[var(--color-brand-coral)]"
                  >
                    {value} ↗
                  </a>
                ) : (
                  <span className="text-sm font-medium text-[color:var(--color-brand-ink)]/60">
                    {value}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

            <span className="text-sm font-medium text-green-700">
              Available for new projects
            </span>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {fields.map((field) => (
            <div
              key={field.name}
              className="space-y-1.5"
            >
              <label
                htmlFor={field.name}
                className="text-xs font-medium tracking-[0.16em] uppercase text-[color:var(--color-brand-ink)]/40"
              >
                {field.label}
              </label>

              <input
                id={field.name}
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required
                autoComplete={
                  field.name === "name"
                    ? "name"
                    : "email"
                }
                className="w-full rounded-xl border border-[color:var(--color-brand-ink)]/10 bg-white/60 px-4 py-3 text-sm text-[var(--color-brand-ink)] placeholder:text-[color:var(--color-brand-ink)]/25 transition-all focus:border-[color:var(--color-brand-coral)]/50 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand-coral)]/10"
              />
            </div>
          ))}

          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="text-xs font-medium tracking-[0.16em] uppercase text-[color:var(--color-brand-ink)]/40"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              rows={5}
              className="w-full resize-none rounded-xl border border-[color:var(--color-brand-ink)]/10 bg-white/60 px-4 py-3 text-sm text-[var(--color-brand-ink)] placeholder:text-[color:var(--color-brand-ink)]/25 transition-all focus:border-[color:var(--color-brand-coral)]/50 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-brand-coral)]/10"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={cn(
              "w-full rounded-xl py-3.5 text-sm font-medium transition-all duration-300",
              status === "loading"
                ? "cursor-not-allowed bg-[color:var(--color-brand-ink)]/40 text-white"
                : "bg-[var(--color-brand-ink)] text-[var(--color-brand-mist)] hover:bg-[var(--color-brand-coral)]"
            )}
          >
            {status === "loading"
              ? "Sending..."
              : "Send message →"}
          </button>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm font-medium text-green-600"
            >
              Message sent! I&apos;ll get back to you soon.
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm font-medium text-red-500"
            >
              Something went wrong. Try emailing me directly.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}