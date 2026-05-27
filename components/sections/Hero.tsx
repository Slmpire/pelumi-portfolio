"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/cn"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 max-w-6xl mx-auto overflow-hidden">

      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, #FF4D3D18 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, #C8F13520 0%, transparent 70%)" }}
        />
        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#0D0D0D" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Left — text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 w-fit px-4 py-1.5 rounded-full border border-(--color-brand-ink)/10 bg-white/60 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-(--color-brand-ink)/60 font-medium">Available for projects</span>
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display italic leading-none tracking-tight text-(--color-brand-ink)"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              Pelumi
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display italic leading-none tracking-tight text-(--color-brand-coral)"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              Ogunleye.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            {["Full-Stack Developer", "EEE @ OAU", "Builder"].map((tag, i) => (
              <span
                key={i}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium border",
                  i === 0
                    ? "bg-(--color-brand-lime) text-(--color-brand-ink) border-(--color-brand-lime)"
                    : "bg-transparent text-(--color-brand-ink)/60 border-(--color-brand-ink)/20"
                )}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-lg text-(--color-brand-ink)/60 max-w-lg leading-relaxed mb-10"
          >
            I build products end-to-end — from embedded systems to production web apps.
            Clean code, sharp interfaces, real impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center gap-4"
          >
            <Link
              href="/#projects"
              className="px-6 py-3 bg-(--color-brand-ink) text-(--color-brand-mist) font-medium rounded-full hover:bg-(--color-brand-coral) transition-colors duration-300 text-sm"
            >
              View my work
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-3 border border-(--color-brand-ink)/20 text-(--color-brand-ink) font-medium rounded-full hover:border-(--color-brand-ink) transition-colors duration-300 text-sm"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          {/* Decorative frame */}
          <div className="relative w-full aspect-[4/5] max-w-sm mx-auto">

            {/* Background shape */}
            <div className="absolute inset-0 rounded-3xl bg-(--color-brand-lime) translate-x-4 translate-y-4" />

            {/* Photo container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-(--color-brand-ink)/10 bg-(--color-brand-ink)/5">
              {/* Replace src with your actual photo */}
              <Image
                src="/images/profile.jpg"
                alt="Pelumi Ogunleye"
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  // fallback if no photo yet
                  (e.target as HTMLImageElement).style.display = "none"
                }}
              />

              {/* Fallback placeholder when no photo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-(--color-brand-slate) to-(--color-brand-ink)">
                <span className="font-display italic text-7xl text-white/20">PO</span>
                <span className="text-xs text-white/30 mt-2 font-medium">Add your photo to public/images/profile.jpg</span>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-(--color-brand-ink)/5"
            >
              <p className="text-xs text-(--color-brand-ink)/40 font-medium">Currently building</p>
              <p className="text-sm font-bold text-(--color-brand-ink)">BookSeat 🎟</p>
            </motion.div>

            {/* Floating stat */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-(--color-brand-ink)/5"
            >
              <p className="text-xs text-(--color-brand-ink)/40 font-medium">Projects shipped</p>
              <p className="text-2xl font-display font-bold text-(--color-brand-ink)">10+</p>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-(--color-brand-ink)/30 tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-(--color-brand-ink)/20"
        />
      </motion.div>

    </section>
  )
}