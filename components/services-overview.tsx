import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, User, Mic } from "lucide-react"

export function ServicesOverview() {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Organizational Solutions */}
          <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
            <CardHeader className="text-center pb-4 lg:pb-6">
              <div className="mx-auto w-12 h-12 lg:w-16 lg:h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-3 lg:mb-4">
                <Users className="h-6 w-6 lg:h-8 lg:w-8 text-secondary" />
              </div>
              <CardTitle className="text-xl lg:text-2xl font-bold text-secondary mb-3 lg:mb-4">
                ORGANIZATIONAL SOLUTIONS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 lg:space-y-4 px-4 lg:px-6">
              <ul className="space-y-2 lg:space-y-3 text-foreground text-sm lg:text-base">
                <li className="flex items-start">
                  <span className="text-primary mr-2 lg:mr-3 mt-1 text-xs lg:text-base">•</span>
                  <span>Leadership Sessions & Facilitated Dialogues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 lg:mr-3 mt-1 text-xs lg:text-base">•</span>
                  <span>Trauma-Informed Communication Workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 lg:mr-3 mt-1 text-xs lg:text-base">•</span>
                  <span>Conflict Resolution & De-escalation Training (CME Available)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 lg:mr-3 mt-1 text-xs lg:text-base">•</span>
                  <span>Executive and Group Communications Leadership Coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 lg:mr-3 mt-1 text-xs lg:text-base">•</span>
                  <span>Leadership Development & Burnout Coaching</span>
                </li>
              </ul>
              <div className="pt-4 lg:pt-6">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm lg:text-base">
                  LEARN MORE
                  <ArrowRight className="ml-2 h-3 w-3 lg:h-4 lg:w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Individual Offerings */}
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader className="text-center pb-4 lg:pb-6">
              <div className="mx-auto w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 lg:mb-4">
                <User className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
              </div>
              <CardTitle className="text-xl lg:text-2xl font-bold text-primary mb-3 lg:mb-4">
                INDIVIDUAL OFFERINGS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 lg:space-y-4 px-4 lg:px-6">
              <ul className="space-y-2 lg:space-y-3 text-foreground text-sm lg:text-base">
                <li className="flex items-start">
                  <span className="text-primary mr-2 lg:mr-3 mt-1 text-xs lg:text-base">•</span>
                  <span>Personal Breakthrough Sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 lg:mr-3 mt-1 text-xs lg:text-base">•</span>
                  <span>Executive Leadership & Burnout Recovery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 lg:mr-3 mt-1 text-xs lg:text-base">•</span>
                  <span>Self Paid Online Therapy & Coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 lg:mr-3 mt-1 text-xs lg:text-base">•</span>
                  <span>Time Line Therapy® Trauma & Emotional Release</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 lg:mr-3 mt-1 text-xs lg:text-base">•</span>
                  <span>Hypnotherapy & NLP Personal Coaching</span>
                </li>
              </ul>
              <div className="pt-4 lg:pt-6">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm lg:text-base">
                  LEARN MORE
                  <ArrowRight className="ml-2 h-3 w-3 lg:h-4 lg:w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Speaking & Training */}
          <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors lg:col-span-1 md:col-span-2 lg:col-span-1">
            <CardHeader className="text-center pb-4 lg:pb-6">
              <div className="mx-auto w-12 h-12 lg:w-16 lg:h-16 bg-accent/10 rounded-full flex items-center justify-center mb-3 lg:mb-4">
                <Mic className="h-6 w-6 lg:h-8 lg:w-8 text-accent" />
              </div>
              <CardTitle className="text-xl lg:text-2xl font-bold text-accent mb-3 lg:mb-4">
                SPEAKING & TRAINING
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 lg:space-y-4 px-4 lg:px-6">
              <ul className="space-y-2 lg:space-y-3 text-foreground text-sm lg:text-base">
                <li className="flex items-start">
                  <span className="text-primary mr-2 lg:mr-3 mt-1 text-xs lg:text-base">•</span>
                  <span>Psychological Safety in Healthcare & Leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 lg:mr-3 mt-1 text-xs lg:text-base">•</span>
                  <span>Cultivating Trust in Medicine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 lg:mr-3 mt-1 text-xs lg:text-base">•</span>
                  <span>Secondary Trauma and Compassion Fatigue (Danger to Successful Therapy and Coaching)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 lg:mr-3 mt-1 text-xs lg:text-base">•</span>
                  <span>R.E.M.A.P.™ for Integrating Relational Communication That Cultivates Trust</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 lg:mr-3 mt-1 text-xs lg:text-base">•</span>
                  <span>Emotional Intelligence in Healthcare & Leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 lg:mr-3 mt-1 text-xs lg:text-base">•</span>
                  <span>Mindfulness-Based Stress Reduction</span>
                </li>
              </ul>
              <div className="pt-4 lg:pt-6">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-sm lg:text-base">
                  LEARN MORE
                  <ArrowRight className="ml-2 h-3 w-3 lg:h-4 lg:w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
