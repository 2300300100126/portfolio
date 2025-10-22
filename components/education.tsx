export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Inderprastha Engineering College",
      year: "2023 - 2027",
      details: "Pursuing BTech in Computer Science with focus on web development and software engineering",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance animate-fade-in-up">Education</h2>

        <div className="space-y-8 animate-stagger">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-lg text-primary font-medium">{edu.institution}</p>
                </div>
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{edu.year}</span>
              </div>
              <p className="text-muted-foreground">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
