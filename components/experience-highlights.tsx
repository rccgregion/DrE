import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin, Trophy } from "lucide-react"

export function ExperienceHighlights() {
  const experiences = [
    {
      title: "Director, Healthcare Strategy & Transformation",
      company: "Blue Cross Blue Shield",
      period: "2020 - Present",
      location: "Remote",
      description:
        "Spearhead value transformation initiatives to optimize Medicare population management. Enhanced clinical documentation integrity (CDI) for 100,000+ patients, boosting code capture accuracy by 40%. Designed a physician fee schedule saving $2.3M annually.",
      achievements: [
        "100,000+ patients impacted through CDI programs",
        "$2.3M annual savings through fee schedule optimization",
        "40% improvement in code capture accuracy",
      ],
    },
    {
      title: "Senior Healthcare Consultant",
      company: "Optum",
      period: "2018 - 2020",
      location: "Remote",
      description:
        "Crafted value-based care strategies and deployed risk adjustment tools for Medicare Advantage plans. Led physician engagement programs enhancing clinical documentation and coding accuracy.",
      achievements: [
        "Developed value-based care strategies",
        "Implemented risk adjustment tools",
        "Enhanced physician engagement programs",
      ],
    },
    {
      title: "Healthcare Operations Manager",
      company: "UnitedHealth Group",
      period: "2015 - 2018",
      location: "Remote",
      description:
        "Oversaw healthcare operations and project management across departments. Implemented clinical documentation integrity programs and developed training for healthcare professionals.",
      achievements: [
        "Cross-departmental operations management",
        "CDI program implementation",
        "Healthcare professional training development",
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-background relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">Healthcare Leadership</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            10+ years of experience in healthcare operations, project management, and value-based care initiatives.
          </p>
        </div>

        <div className="space-y-8 relative">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent hidden lg:block" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-0 lg:pl-20 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute left-[27px] top-8 w-4 h-4 rounded-full border-4 border-background bg-primary hidden lg:block group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-primary/30" />

              <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm group-hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm font-medium">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
                          <Building2 className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-lg leading-relaxed mt-4">{exp.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 pt-2">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-accent" />
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <Badge
                          key={achievementIndex}
                          variant="secondary"
                          className="text-xs sm:text-sm py-2 px-2 sm:px-3 bg-primary/5 text-primary hover:bg-primary/10 transition-colors border-primary/10 whitespace-normal"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
