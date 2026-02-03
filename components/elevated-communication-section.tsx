import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ElevatedCommunicationSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Elevated Communication */}
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">ELEVATED COMMUNICATION</h2>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Master language, presence, and listening for influence and connection. You know words are only 7% of our
                communication, but you know words can only hurt you if you let them. When you understand how to use
                language, presence, and listening for influence and connection, you can manage any conversation,
                conflict, and even panic speaking engagement with ease and peace.
              </p>
              <div className="text-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                  ELEVATE YOUR COMMUNICATION
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Effective Leadership */}
          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-secondary mb-6 text-center">EFFECTIVE LEADERSHIP</h2>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Lead with courage, adaptability and a focus on progress over perfection. Experience elevated
                effectiveness in your leadership. Coaching others like you R.E.M.A.P. coaching others help you to not
                only find your authentic leadership style, but also help you to lead with courage, adaptability and a
                focus on progress over perfection. You will learn to lead with both your head and your heart, and talk
                that step from being your most powerful self.
              </p>
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8"
                >
                  UPGRADE YOUR LEADERSHIP
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
