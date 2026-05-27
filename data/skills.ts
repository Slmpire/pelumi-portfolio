export interface Skill {
  name: string
  category: "Frontend" | "Backend" | "Embedded" | "Tooling"
}

export const skills: Skill[] = [
  // Frontend
  { name: "React",         category: "Frontend" },
  { name: "Next.js",       category: "Frontend" },
  { name: "TypeScript",    category: "Frontend" },
  { name: "Tailwind CSS",  category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },

  // Backend
  { name: "Node.js",    category: "Backend" },
  { name: "Express",    category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Firebase",   category: "Backend" },
  { name: "REST APIs",  category: "Backend" },

  // Embedded
  { name: "ESP32",             category: "Embedded" },
  { name: "C/C++",             category: "Embedded" },
  { name: "UART / SPI",        category: "Embedded" },
  { name: "Sensor Integration",category: "Embedded" },

  // Tooling
  { name: "Git",            category: "Tooling" },
  { name: "GitHub Actions", category: "Tooling" },
  { name: "Railway",        category: "Tooling" },
  { name: "Vercel",         category: "Tooling" },
  { name: "Paystack",       category: "Tooling" },
]