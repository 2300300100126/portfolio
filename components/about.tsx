export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance animate-fade-in-up">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              To obtain a challenging position where I can utilize my skills in the given department and contribute to
              the growth of the organization while gaining professional experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I possess versatile skills in project management, problem-solving, and collaboration. I bring a fresh
              perspective and strong commitment to quality and success, recognized for my adaptability and proactive
              approach in delivering effective solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Delhi, India, I'm passionate about building innovative web applications and collaborating with
              talented teams to create impactful digital solutions.
            </p>
          </div>

          <div className="bg-muted rounded-lg p-8 space-y-4 animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
            <div className="space-y-3">
              {[
                "Problem-solving",
                "Teamwork and collaboration",
                "Critical thinking",
                "Problem resolution",
                "Flexible and adaptable",
                "Calm under pressure",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
