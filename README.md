# Pelumi Ogunleye — Portfolio

Personal portfolio and blog. Built from scratch with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. Features a cinematic entry gate, animated hero, MDX blog pipeline, and a full contact form backed by Resend.

Live at: **[pelumi.dev](https://pelumi.dev)**

---

## Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | Next.js 16 (App Router)             |
| Language    | TypeScript                          |
| Styling     | Tailwind CSS v4                     |
| Animation   | Framer Motion                       |
| Fonts       | Plus Jakarta Sans + Space Grotesk   |
| Content     | MDX (next-mdx-remote + gray-matter) |
| Email       | Resend                              |
| Deployment  | Vercel                              |

---

## Features

- **Entry gate** — animated splash screen with rotating orbit rings
- **Cinematic hero** — particle canvas, magnetic CTAs, role ticker, live code block
- **About** — scroll-driven timeline, traits grid, stats, marquee ticker
- **Projects** — filterable grid with live demo modal and GitHub links
- **Skills** — grouped by Frontend / Backend / Embedded / Tooling with icons
- **Blog** — MDX pipeline with reading time, syntax highlighting, and OG images
- **Contact** — working contact form via Resend API
- **Theme switcher** — light / dark mode with zero flash on load
- **Smooth scroll** — Lenis momentum-based scrolling
- **Custom cursor** — dot + trailing ring
- **SEO** — generateMetadata, sitemap.xml, robots.txt, schema.org JSON-LD
- **Performance** — SSG by default, ISR for blog, Core Web Vitals optimised

---

## Project Structure
pelumi-portfolio/
├── app/                    # Next.js App Router
│   ├── api/contact/        # Contact form API route (Resend)
│   ├── blog/[slug]/        # Dynamic blog post pages
│   ├── blog/               # Blog listing page
│   ├── layout.tsx          # Root layout — fonts, metadata, providers
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # robots.txt
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, Projects, Skills, Blog, Contact
│   └── ui/                 # Button, ProjectCard, BlogCard, Cursor, Grain, ThemeToggle, EntryGate, TechCanvas
├── content/
│   └── posts/              # MDX blog posts
├── data/                   # projects.ts, skills.ts, nav.ts
├── lib/                    # mdx.ts, metadata.ts, cn.ts
├── styles/                 # globals.css (Tailwind v4 + CSS tokens)
├── types/                  # Shared TypeScript interfaces
└── public/
└── images/             # profile.jpg and project assets

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
git clone https://github.com/Slmpire/pelumi-portfolio.git
cd pelumi-portfolio
npm install
```

### Environment variables

Create `.env.local` at the root:

```bash
RESEND_API_KEY=re_your_key_here
```

Get a free key at [resend.com](https://resend.com).

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To test on mobile on the same network:

```bash
npm run dev -- --hostname 0.0.0.0
```

Then open `http://<your-local-ip>:3000` on your phone.

---

## Adding a blog post

Create a new `.mdx` file in `content/posts/`:

```mdx
---
title: "Your post title"
date: "2025-06-01"
summary: "A short summary shown in the listing."
tags: ["React", "Node.js"]
featured: true
---

## Your heading

Your content here. You can use **markdown** and embed React components.
```

The filename becomes the URL slug. `/content/posts/my-post.mdx` → `/blog/my-post`.

---

## Adding a project

Open `data/projects.ts` and add an entry to the `projects` array:

```ts
{
  slug: "my-project",
  title: "My Project",
  description: "Short description.",
  longDesc: "Longer description shown on the card.",
  stack: ["React", "Node.js", "Firebase"],
  type: "Web",                          // Web | Embedded | Fintech | AI
  live: "https://my-project.vercel.app",
  github: "https://github.com/Slmpire/my-project",
  featured: true,
}
```

---

## Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repo at [vercel.com](https://vercel.com) and it deploys automatically on every push to `main`.

Add `RESEND_API_KEY` in Vercel → Project Settings → Environment Variables.

### Build locally

```bash
npm run build
npm run start
```

---

## Build phases

| Phase | Status | Description                              |
|-------|--------|------------------------------------------|
| 1     | ✅     | Repo + Git strategy                      |
| 2     | ✅     | Project structure                        |
| 3     | ✅     | Tech stack + scaffold                    |
| 4     | ✅     | UI — all sections built                  |
| 5     | ✅     | Blog — MDX pipeline                      |
| 6     | ✅     | SEO + performance                        |
| 7     | 🔄     | Deployment + CI/CD                       |
| 8     | 🔄     | AI / research project showcase layer     |

---

## License

MIT — use freely, credit appreciated.

---

Built by [Pelumi Ogunleye](https://github.com/Slmpire) · OAU Ife, Nigeria
