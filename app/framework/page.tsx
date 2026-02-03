import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FrameworkPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">R.E.M.A.P.™ Framework</h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto">
              A comprehensive methodology for trauma-informed communication and leadership transformation
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Framework */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Release */}
            <Card className="border-2 border-primary/20">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-3xl font-bold text-primary flex items-center">
                  <span className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl">
                    R
                  </span>
                  Release the Why
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  Connect the urgency for change to your purpose and outcomes. This foundational step helps individuals
                  and organizations understand the deep-rooted reasons behind their communication patterns and the
                  necessity for transformation.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>Identify limiting beliefs and trauma responses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>Connect personal purpose to organizational mission</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>Establish clear outcomes and success metrics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Elevate */}
            <Card className="border-2 border-secondary/20">
              <CardHeader className="bg-secondary/5">
                <CardTitle className="text-3xl font-bold text-secondary flex items-center">
                  <span className="bg-secondary text-secondary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl">
                    E
                  </span>
                  Elevate Understanding
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  Scale awareness and comprehension of trauma-informed principles. This phase focuses on education and
                  building foundational knowledge about neuroscience, emotional intelligence, and psychological safety.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>Neuroscience-based communication training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>Emotional intelligence development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>Psychological safety framework implementation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mobilize */}
            <Card className="border-2 border-accent/20">
              <CardHeader className="bg-accent/5">
                <CardTitle className="text-3xl font-bold text-accent flex items-center">
                  <span className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl">
                    M
                  </span>
                  Mobilize Action
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  Deliver training, coaching, and facilitative team-based conversations. This is where theory meets
                  practice through structured interventions and skill-building exercises.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>Interactive workshops and training sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>One-on-one and group coaching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>Facilitated team dialogues and conflict resolution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Anchor */}
            <Card className="border-2 border-primary/20">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-3xl font-bold text-primary flex items-center">
                  <span className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl">
                    A
                  </span>
                  Anchor Trust
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  Embed accountability, adaptability, and acknowledgement into organizational culture. This phase
                  focuses on creating sustainable systems that support ongoing trust-building.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>Accountability frameworks and feedback systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>Adaptability training for changing environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>Recognition and acknowledgement programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Pivot */}
            <Card className="border-2 border-secondary/20">
              <CardHeader className="bg-secondary/5">
                <CardTitle className="text-3xl font-bold text-secondary flex items-center">
                  <span className="bg-secondary text-secondary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl">
                    P
                  </span>
                  Pivot Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  Sustain change through intentional and continued support. This final phase ensures long-term success
                  through ongoing evaluation, adjustment, and reinforcement of new practices.
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>Continuous improvement processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>Ongoing coaching and support systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>Progress measurement and adjustment strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-4"
            >
              Get Started with R.E.M.A.P.™
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
