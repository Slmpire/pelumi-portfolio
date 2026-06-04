"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function EntryGate({ onEnter }: { onEnter: () => void }) {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleEnter = () => {
    setClicked(true)
    setTimeout(onEnter, 1000)
  }

  return (
    <AnimatePresence>
      {!clicked ? (
        <motion.div
          key="gate"
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#0A0A0A" }}
        >
          {/* Rotating orbit rings */}
          {[140, 200, 260].map((size, i) => (
            <motion.div
              key={size}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 12 + i * 4, repeat: Infinity, ease: "linear" }}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                border: `1px solid rgba(255,77,61,${0.15 - i * 0.04})`,
              }}
            >
              {/* Dot on ring */}
              <div
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: "var(--coral, #FF4D3D)",
                  top: -3,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </motion.div>
          ))}

          {/* Center initials */}
          <motion.div
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ border: "1.5px solid rgba(255,77,61,0.4)", background: "rgba(255,77,61,0.06)" }}
            >
              <span
                className="font-display font-bold text-2xl"
                style={{ color: "#FF4D3D" }}
              >
                PO
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <p className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                Pelumi Ogunleye
              </p>
              <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.15)" }}>
                Full-Stack Developer
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              onClick={handleEnter}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative px-10 py-3 rounded-full text-sm font-semibold tracking-widest uppercase overflow-hidden"
              style={{
                border: "1px solid rgba(255,77,61,0.5)",
                color: hovered ? "#0A0A0A" : "#FF4D3D",
                transition: "color 0.3s",
              }}
            >
              <motion.span
                animate={{ scaleX: hovered ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 origin-left"
                style={{ background: "#FF4D3D" }}
              />
              <span className="relative z-10">Enter Portfolio</span>
            </motion.button>
          </motion.div>

          {/* Corner coords */}
          <div className="absolute bottom-8 left-8 text-xs font-mono" style={{ color: "rgba(255,255,255,0.15)" }}>
            6.5244° N, 3.3792° E
          </div>
          <div className="absolute bottom-8 right-8 text-xs font-mono" style={{ color: "rgba(255,255,255,0.15)" }}>
            Lagos, Nigeria
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="exit"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999]"
          style={{ background: "#0A0A0A" }}
        />
      )}
    </AnimatePresence>
  )
}