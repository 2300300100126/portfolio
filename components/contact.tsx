import { Mail, Phone, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const contactInfo = {
    email: "prithvis3804@gmail.com",
    phone: "+91 9315786260",
    phoneLink: "+919315786260",
    linkedin: "https://linkedin.com/in/prithvi-singh-533a2129",
    github: "https://github.com/Keys-3",
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance animate-fade-in-up">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto animate-stagger">
          <a
            href={`mailto:${contactInfo.email}`}
            className="bg-background rounded-lg p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all group cursor-pointer"
          >
            <Mail className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">{contactInfo.email}</p>
          </a>

          <a
            href={`tel:${contactInfo.phoneLink}`}
            className="bg-background rounded-lg p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all group cursor-pointer"
          >
            <Phone className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">{contactInfo.phone}</p>
          </a>

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background rounded-lg p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all group cursor-pointer"
          >
            <Linkedin className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-muted-foreground">linkedin.com/in/prithvi-singh-533a2129</p>
          </a>

          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background rounded-lg p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all group cursor-pointer"
          >
            <Github className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-muted-foreground">github.com/Keys-3</p>
          </a>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground">© 2025 Prithvi Singh Tanwar. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
