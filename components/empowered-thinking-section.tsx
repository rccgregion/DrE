import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function EmpoweredThinkingSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Empowered Thinking */}
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-accent mb-6 text-center">EMPOWERED THINKING</h2>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Identify and shift limiting beliefs to heal with clarity and confidence. Learn how you think at the
                deepest level to learn what's truly holding you back. Often we are our own worst enemy, and we don't
                even know it. When you understand why you do what you do, you can be in the driver's seat, manage any
                conversation, conflict, and even panic speaking engagement with ease and peace.
              </p>
              <div className="text-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                  ELEVATE OLD THOUGHTS & LIMITATIONS
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Enriched Relationships */}
          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-secondary mb-6 text-center">ENRICHED RELATIONSHIPS</h2>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Build deep trust and repair relationships when ruptures occur. Our relationships are the foundation of
                our well-being, and when communication breaks down, systems break down. When you know how to create
                trust and repair relationships when ruptures occur, you can connection with the people you care most
                about. Create more connection with your partner, your employees, boundaries, be a better parent, and
                resolve conflicts with ease.
              </p>
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8"
                >
                  EMPOWER YOUR RELATIONSHIPS
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
