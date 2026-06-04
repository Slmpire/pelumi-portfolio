import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import BlogSection from "@/components/sections/Blog"
import Contact from "@/components/sections/Contact"
import PageShell from "@/components/ui/PageShell"

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <BlogSection />
      <Contact />
    </PageShell>
  )
}