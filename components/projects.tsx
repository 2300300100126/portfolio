import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Aztec",
      description:
        "A modern web application built with cutting-edge technologies. Showcasing full-stack development capabilities with responsive design and smooth user experience.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      link: "https://aztec-six.vercel.app",
      github: "https://github.com/Keys-3/Aztec",
      image: "/aztec.png",
    },
    {
      title: "SmartMines",
      description:
        "An innovative mining technology solution developed collaboratively. Features real-time data visualization and intelligent analytics for mining operations.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB"],
      link: "https://smartmine.vercel.app/",
      github: "https://github.com/Keys-3/smartmine",
      image: "/smartmine.png",
    },
    {
      title: "ModernBank",
      description:
        "An innovative banking frontend solution developed collaboratively. Features frontend design and looks for banking operations.",
      technologies: ["React", "Node.js"],
      link: "https://modernbank-smoky.vercel.app/",
      github: "https://github.com/Keys-3/Modern_bank",
      image: "/modernbank.png",
    },
    {
      title: "ModernBank",
      description:
        "A frontend design developed by self. Features new react and node features that explores the frameworks in detail .",
      technologies: ["React", "Node.js"],
      link: "https://dummy-website.vercel.app/",
      github: "https://github.com/Keys-3/Dummy-website",
      image: "/dummy.png",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance animate-fade-in-up">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 animate-stagger">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-border hover:border-primary/50"
            >
              <div className="aspect-video bg-muted-foreground/10 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    View Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
