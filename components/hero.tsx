"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react"

interface HeroProps {
  scrollToSection: (id: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Prithvi Singh Tanwar
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            A passionate developer crafting beautiful, functional digital experiences with modern web technologies
          </p>

          <button
            onClick={() => scrollToSection("about")}
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Learn More
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-16 animate-stagger">
          <a
            href="tel:+919315786260"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          >
            <Phone size={20} />
            <span className="text-sm font-medium">+91 9315786260</span>
          </a>
          <a
            href="mailto:prithvis3804@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          >
            <Mail size={20} />
            <span className="text-sm font-medium">Email</span>
          </a>
          <a
            href="https://linkedin.com/in/prithvi-singh-533a2129"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          >
            <Linkedin size={20} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Keys-3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          >
            <Github size={20} />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
