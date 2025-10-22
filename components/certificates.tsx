import { CheckCircle, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Certificates() {
  const certificates = [
    {
      name: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      date: "07/18/2025",
      duration: "20 hours",
      credentialId: "GBXPGFRc",
      credentialUrl: "https://www.credly.com/go/GBXPGFRc",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Microsoft%20workshop%20-0V3jRUv2QiU3O5rUHXEg6h9HccrUoy.jpg",
    },
    {
      name: "Deep Dive into Java with Oracle Academy",
      issuer: "Oracle Academy",
      date: "08/13/2025",
      duration: "Certificate of Attendance",
      credentialId: "ORACLE-JAVA-2025",
      credentialUrl: "#",
      image: "/oracle-java-certificate.jpg",
    },
    {
      name: "Generative AI Literacy",
      issuer: "Nasscom - IT-ITeS SSC",
      date: "02/10/2025",
      duration: "Professional Development",
      credentialId: "25021074003",
      credentialUrl: "#",
      image: "/nasscom-ai-certificate.jpg",
    },
    {
      name: "MongoDB's Document Model",
      issuer: "MongoDB",
      date: "08/03/2025",
      duration: "36 hours",
      credentialId: "E8iRZSi6",
      credentialUrl: "https://www.credly.com/go/E8iRZSi6",
      image: "/mongodb-certificate.jpg",
    },
    {
      name: "Microsoft Hands-on Workshop on AI Agents",
      issuer: "Microsoft & TECHNEST",
      date: "08/28/2025",
      duration: "Workshop Participation",
      credentialId: "MICROSOFT-AI-AGENTS",
      credentialUrl: "#",
      image:
        "https://drive.google.com/file/d/1X28lkZhUF1qTNC9W58f4bpeMIW0hReGS/view?usp=drive_link",
    },
    {
      name: "BuildwithDelhi 2.0 - Top 40 Achievement",
      issuer: "HackWithIndia",
      date: "08/06/2025",
      duration: "Hackathon Achievement",
      credentialId: "HACKWITHINDIA-TOP40",
      credentialUrl: "#",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Microsoft%20Hackathon%20-gPFTLJKQwo2f7FyQBjmBsi9ESCkWhx.jpg",
    },
    {
      name: "MongoDB Specialized Courses Bundle",
      issuer: "MongoDB University",
      date: "08/03/2025",
      duration: "12 Courses Completed",
      credentialId: "MONGODB-BUNDLE",
      credentialUrl: "#",
      image: "/mongodb-courses.jpg",
      courses: [
        "Introduction to MongoDB",
        "Getting Started with MongoDB Atlas",
        "MongoDB CRUD Operations: Insert and Find",
        "MongoDB CRUD Operations: Replace and Delete",
        "MongoDB CRUD Operations: Modifying Query Results",
        "MongoDB Indexes",
        "MongoDB Aggregation",
        "MongoDB Data Modeling Intro",
        "MongoDB Transactions",
        "Connecting to a MongoDB Database",
        "MongoDB Atlas Search",
      ],
    },
  ]

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance animate-fade-in-up">Certificates & Achievements</h2>

        <div className="grid md:grid-cols-2 gap-6 animate-stagger">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-background rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{cert.name}</h3>
                    <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Date: {cert.date}</p>
                  <p>Duration: {cert.duration}</p>
                  {cert.credentialUrl !== "#" && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline mt-2"
                    >
                      Verify Credential <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                {cert.courses && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Courses Completed:</p>
                    <ul className="text-xs space-y-1">
                      {cert.courses.map((course, i) => (
                        <li key={i} className="text-muted-foreground">
                          • {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
