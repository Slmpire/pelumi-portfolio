"use client"

import { motion } from "framer-motion"

const timeline = [
  {
    year: "2022",
    title: "Started EEE @ OAU",
    desc: "Began Electrical & Electronics Engineering at Obafemi Awolowo University, Ife.",
  },
  {
    year: "2023",
    title: "Went deep on embedded systems",
    desc: "Built health monitoring systems with ESP32, MAX6675, MAX30102. Learned UART, SPI, Firebase real-time sync.",
  },
  {
    year: "2024",
    title: "Crossed into full-stack",
    desc: "Shipped NaijaQuant, Moflix, Card Validator. Picked up React, Node.js, PostgreSQL, Railway, Vercel.",
  },
  {
    year: "2025",
    title: "Building real products",
    desc: "Completed BookSeat — a full Nigerian event ticketing platform. Exploring fintech with Oga Finance.",
  },
]

const fadeUp: any = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as any },
  }),
}

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto">

      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-sm font-medium tracking-widest uppercase text-(--color-brand-coral) mb-4"
      >
        About
      </motion.p>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-extrabold text-5xl md:text-7xl text-(--color-brand-ink) leading-none mb-16 max-w-2xl"
      >
        Engineer by
        training,{" "}
        <span className="text-(--color-brand-coral)">builder</span>{" "}
        by choice.
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5 text-(--color-brand-ink)/70 leading-relaxed"
        >
          <p>
            I'm Pelumi — a full-stack developer and EEE student at OAU Ife, Nigeria.
            I work across the full stack, from microcontrollers and sensor firmware
            to React frontends and Node.js backends deployed on Railway and Vercel.
          </p>
          <p>
            I don't just build to learn — I build to ship. Every project I work on
            is production-grade: real users, real constraints, real edge cases solved.
          </p>
          <p>
            Outside of code I'm into music and gaming, and I've done community work
            moderating career guidance sessions for secondary school students.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-(--color-brand-ink)/10">
            {[
              { num: "10+", label: "Projects shipped" },
              { num: "2+",  label: "Years building" },
              { num: "2",   label: "Stacks mastered" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="font-display font-extrabold text-3xl text-(--color-brand-ink)">{num}</p>
                <p className="text-xs text-(--color-brand-ink)/40 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex gap-6 pb-10 relative"
            >
              {/* Line */}
              {i < timeline.length - 1 && (
                <div className="absolute left-[2.15rem] top-8 w-px h-full bg-(--color-brand-ink)/10" />
              )}

              {/* Year bubble */}
              <div className="w-16 h-16 rounded-full bg-(--color-brand-lime) flex items-center justify-center flex-shrink-0 z-10">
                <span className="font-display font-bold text-xs text-(--color-brand-ink)">{item.year}</span>
              </div>

              <div className="pt-3">
                <p className="font-display font-bold text-(--color-brand-ink) mb-1">{item.title}</p>
                <p className="text-sm text-(--color-brand-ink)/50 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      {/* Marquee */}
<div className="mt-24 -mx-6 overflow-hidden border-y border-(--color-brand-ink)/10 py-4 bg-white/40">
  <motion.div
    animate={{ x: ["0%", "-50%"] }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="flex gap-8 whitespace-nowrap w-max"
  >
    {[...Array(2)].map((_, i) => (
      <div key={i} className="flex gap-8 items-center">
        {["React", "Next.js", "TypeScript", "Node.js", "Firebase", "ESP32", "Paystack", "Railway", "Vercel", "PostgreSQL", "Framer Motion", "Tailwind CSS"].map((item) => (
          <span key={item} className="text-sm font-medium text-(--color-brand-ink)/30 flex items-center gap-3">
            {item}
            <span className="w-1 h-1 rounded-full bg-(--color-brand-coral) inline-block" />
          </span>
        ))}
      </div>
    ))}
  </motion.div>
</div>
    </section>
  )
}