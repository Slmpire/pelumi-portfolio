"use client"

export default function Grain() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[999] pointer-events-none select-none opacity-[0.012]"
    >
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>
    </div>
  )
}