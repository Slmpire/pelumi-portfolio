"use client"

import { motion } from "framer-motion"
import { useState } from "react"

type Status = "idle" | "loading" | "success" | "error"

const contactLinks = [
  {
    label: "Email",
    value: "ogunleyepelumi@gmail.com",
    href: "mailto:ogunleyepelumi@gmail.com",
    icon: "✉️",
    color: "#FF4D3D",
  },
  {
    label: "GitHub",
    value: "github.com/Slmpire",
    href: "https://github.com/Slmpire",
    icon: "⚡",
    color: "#a78bfa",
  },
  {
    label: "Location",
    value: "Nigeria — Remote friendly",
    href: null,
    icon: "📍",
    color: "#10b981",
  },
]

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<Status>("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">

      {/* Bg glow */}
      <div
        className="absolute top-0 left-[-10%] w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none -z-10"
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
          Contact
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
            Let's build
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display font-bold leading-none tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)", color: "var(--coral)" }}
          >
            something great.
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <p
              className="text-lg leading-relaxed max-w-md"
              style={{ color: "var(--ink-muted)" }}
            >
              Open to freelance projects, collaborations, and full-time
              opportunities. If you're building something worth shipping —
              let's talk.
            </p>

            {/* Contact links */}
            <div className="space-y-3">
              {contactLinks.map(({ label, value, href, icon, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl group transition-all duration-200"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                    style={{ background: color + "18" }}
                  >
                    {icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--ink-faint)" }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold hover:underline transition-colors truncate block"
                        style={{ color: "var(--ink)" }}
                      >
                        {value} ↗
                      </a>
                    ) : (
                      <p
                        className="text-sm font-semibold truncate"
                        style={{ color: "var(--ink)" }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full w-fit"
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.2)",
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-400 inline-block"
              />
              <span
                className="text-sm font-semibold"
                style={{ color: "#10b981" }}
              >
                Available for new projects
              </span>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl p-8"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <h3
              className="font-display font-bold text-xl mb-6"
              style={{ color: "var(--ink)" }}
            >
              Send a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "name",  label: "Your name",  type: "text",  placeholder: "Tunde Bakare"          },
                { name: "email", label: "Your email", type: "email", placeholder: "tunde@example.com" },
              ].map((field) => (
                <div key={field.name} className="space-y-1.5">
                  <label
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--ink-faint)" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border)",
                      color: "var(--ink)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--coral)"
                      e.target.style.boxShadow   = "0 0 0 3px rgba(255,77,61,0.08)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--border)"
                      e.target.style.boxShadow   = "none"
                    }}
                  />
                </div>
              ))}

              <div className="space-y-1.5">
                <label
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--ink-faint)" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    background: "var(--bg-subtle)",
                    border: "1px solid var(--border)",
                    color: "var(--ink)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--coral)"
                    e.target.style.boxShadow   = "0 0 0 3px rgba(255,77,61,0.08)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--border)"
                    e.target.style.boxShadow   = "none"
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-xl text-sm font-bold transition-all duration-300 hover:opacity-90 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: "var(--coral)", color: "#fff" }}
              >
                {status === "loading" ? "Sending..." : "Send message →"}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-semibold text-center"
                  style={{ color: "#10b981" }}
                >
                  Message sent ✓ I'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-semibold text-center"
                  style={{ color: "var(--coral)" }}
                >
                  Something went wrong. Email me directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Bottom — final CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 pt-16 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div>
            <p
              className="font-display font-bold text-2xl mb-1"
              style={{ color: "var(--ink)" }}
            >
              Pelumi Ogunleye
            </p>
            <p
              className="text-sm"
              style={{ color: "var(--ink-faint)" }}
            >
              Full-Stack Developer · EEE @ OAU · Nigeria
            </p>
          </div>

          <div className="flex items-center gap-2">
            {["GitHub", "LinkedIn", "Twitter"].map((s) => (
              <a
                key={s}
                href="#"
                className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--ink-muted)",
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}