"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Achievements from "@/components/achievements"
import Certificates from "@/components/certificates"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header scrollToSection={scrollToSection} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Education />
        <Achievements />
        <Certificates />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
