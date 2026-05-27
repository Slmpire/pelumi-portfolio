export type ProjectType = "Web" | "Embedded" | "Fintech" | "AI"

export interface Project {
  slug: string
  title: string
  description: string
  longDesc: string
  stack: string[]
  type: ProjectType
  live?: string
  github?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "bookseat",
    title: "BookSeat",
    description: "Nigerian event ticketing and management platform.",
    longDesc: "Full-stack event platform with auth, organiser dashboards, admin panels, QR e-tickets, and Paystack payments.",
    stack: ["React 18", "Firebase", "Paystack", "QR Code"],
    type: "Web",
    live: "https://your-bookseat-url.vercel.app",
    github: "https://github.com/Slmpire/bookseat",
    featured: true,
  },
  {
    slug: "oga-finance",
    title: "Oga Finance",
    description: "Integrated fintech platform for Nigerian SME owners.",
    longDesc: "AI bookkeeping, tax compliance, and inflation protection via WhatsApp. Built on Node.js, Firebase, Claude API, and Twilio.",
    stack: ["Node.js", "Firebase", "Claude API", "Twilio", "Railway"],
    type: "Fintech",
    github: "https://github.com/Slmpire/oga-finance",
    featured: true,
  },
  {
    slug: "health-monitor",
    title: "Health Monitor",
    description: "Live health dashboard for ESP32 sensor system.",
    longDesc: "Real-time dashboard reading from MAX6675 and MAX30102 sensors via Firebase. Stale detection, mobile responsive, LCD mirror panel.",
    stack: ["ESP32", "Firebase", "HTML/CSS/JS", "MAX30102"],
    type: "Embedded",
    github: "https://github.com/Slmpire/health-monitor",
    featured: true,
  },
  {
    slug: "exam-platform",
    title: "Exam Platform",
    description: "Timed, payment-gated exam platform with offline support.",
    longDesc: "Offline-first exam system with Dexie.js, Service Worker, Background Sync, anti-cheat, and Paystack virtual accounts.",
    stack: ["React", "Node.js", "PostgreSQL", "Paystack", "Dexie.js"],
    type: "Web",
    github: "https://github.com/Slmpire/exam-platform",
    featured: false,
  },
  {
    slug: "naijaquant",
    title: "NaijaQuant",
    description: "Nigerian stock market data and analysis tool.",
    longDesc: "Quantitative analysis platform for Nigerian equities. Data visualisation, screening, and portfolio tracking.",
    stack: ["React", "Node.js", "PostgreSQL"],
    type: "Web",
    github: "https://github.com/Slmpire/naijaquant",
    featured: false,
  },
  {
    slug: "moflix",
    title: "Moflix",
    description: "Movie discovery and tracking web app.",
    longDesc: "TMDB-powered movie browsing app with search, filtering, watchlist, and responsive UI.",
    stack: ["React", "TMDB API", "Tailwind"],
    type: "Web",
    github: "https://github.com/Slmpire/moflix",
    featured: false,
  },
]