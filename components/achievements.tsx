import { Award } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      title: "SmartMines Development",
      organization: "Team Project",
      description:
        "Collaborated with a team of five in the development of SmartMines, contributing to innovative mining technology solutions",
    },
    {
      title: "Aztec Project",
      organization: "Team Project",
      description:
        "Collaborated with a team of four in the development of Aztec, building scalable web applications with modern technologies",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance animate-fade-in-up">Achievements</h2>

        <div className="grid md:grid-cols-2 gap-8 animate-stagger">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-muted rounded-lg p-8 hover:bg-muted/80 transition-colors">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{achievement.organization}</p>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
