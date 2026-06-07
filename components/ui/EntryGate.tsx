"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export default function EntryGate({ onEnter }: { onEnter: () => void }) {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleEnter = () => {
    setClicked(true)
    setTimeout(onEnter, 1000)
  }

  return (
    <AnimatePresence>
      {!clicked && (
        <motion.div
          key="gate"
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#0A0A0A" }}
        >
          {/* Rotating rings — behind everything */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[120, 180, 240].map((size, i) => (
              <motion.div
                key={size}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 12 + i * 4, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full"
                style={{
                  width: size,
                  height: size,
                  border: `1px solid rgba(255,77,61,${0.2 - i * 0.05})`,
                }}
              >
                <div
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#FF4D3D",
                    top: -3,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Center content — sits above rings */}
          <div className="relative z-10 flex flex-col items-center gap-6 px-8">

            {/* Photo / monogram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0"
              style={{ border: "1.5px solid rgba(255,77,61,0.5)" }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Pelumi Ogunleye"
                width={80}
                height={80}
                className="object-cover w-full h-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none"
                }}
              />
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "rgba(255,77,61,0.1)", marginTop: -80 }}
              >
                <span
                  className="font-display font-bold text-xl"
                  style={{ color: "#FF4D3D" }}
                >
                  PO
                </span>
              </div>
            </motion.div>

            {/* Name + role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <p
                className="text-sm font-semibold tracking-[0.2em] uppercase mb-1"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Pelumi Ogunleye
              </p>
              <p
                className="text-xs tracking-[0.15em] uppercase"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Full-Stack Developer
              </p>
            </motion.div>

            {/* Enter button */}
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              onClick={handleEnter}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative px-10 py-3 rounded-full text-sm font-bold tracking-widest uppercase overflow-hidden cursor-pointer"
              style={{
                border: "1px solid rgba(255,77,61,0.5)",
                color: hovered ? "#0A0A0A" : "#FF4D3D",
                transition: "color 0.3s",
                minWidth: 180,
              }}
            >
              <motion.span
                animate={{ scaleX: hovered ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 origin-left"
                style={{ background: "#FF4D3D" }}
              />
              <span className="relative z-10">Enter Portfolio</span>
            </motion.button>

          </div>

          {/* Corner coords */}
          <div
            className="absolute bottom-8 left-6 text-xs font-mono"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            6.5244° N, 3.3792° E
          </div>
          <div
            className="absolute bottom-8 right-6 text-xs font-mono"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            Lagos, Nigeria
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}