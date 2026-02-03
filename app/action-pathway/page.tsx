import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Award, Users, ArrowRight, Star, Sparkles, Target, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ActionPathwayPage() {
  const courseFeatures = [
    {
      icon: Clock,
      title: "10-Week Program",
      description: "Self-paced learning with pre-recorded training modules",
    },
    {
      icon: Award,
      title: "CDI Certification Prep",
      description: "Accelerated Clinical Documentation Integrity Practitioner test preparation",
    },
    {
      icon: Users,
      title: "Group Coaching",
      description: "Monthly group coaching calls for ongoing support",
    },
    {
      icon: Target,
      title: "Career Positioning",
      description: "Learn to position yourself for high-level healthcare roles",
    },
  ]

  const outcomes = [
    "Gain subject matter expertise in high-demand healthcare niches",
    "Master AI in healthcare, value-based care, and alternative payment models",
    "Position yourself as a tech-savvy healthcare leader",
    "Develop skills for non-clinical healthcare roles",
    "Learn interview strategies and personal branding",
    "Access to C-suite level networking opportunities",
  ]

  const testimonials = [
    {
      name: "Dr. Winnie U.",
      location: "Chicago",
      quote:
        "Training with RiteBridge was one of the best decisions of my life. I got my first interview in the first four weeks and landed a job as a Clinical Reviewer, earning double what I made before.",
      role: "Clinical Reviewer",
    },
    {
      name: "Dr. Samuel O.",
      location: "Atlanta",
      quote:
        "I got two offers and accepted the one with a more comprehensive package that landed me at over $150,000 annually, plus benefits. All this without completing residency training.",
      role: "CDI Specialist",
    },
    {
      name: "Dr. Thandra",
      location: "Ohio",
      quote:
        "Their training helped me pass my certification exams and I landed multiple offers. I now have skill sets in medical coding, risk adjustment, and compliance.",
      role: "Risk Adjustment Specialist",
    },
  ]

  const actionPathway = [
    { letter: "A", title: "Assessment", description: "Evaluate your current skills and career goals" },
    { letter: "C", title: "Certification", description: "Master in-demand healthcare certifications" },
    { letter: "T", title: "Training", description: "Learn cutting-edge healthcare technologies and trends" },
    { letter: "I", title: "Interview Prep", description: "Develop winning interview strategies" },
    { letter: "O", title: "Optimization", description: "Optimize your resume and personal brand" },
    { letter: "N", title: "Networking", description: "Connect with industry leaders and decision-makers" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Courses
            </Link>
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">RiteBridge Academy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">The A.C.T.I.O.N Pathway</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-4">
              For Healthcare Professionals Ready to Level Up
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Reskill. Cross-skill. Upskill. Transform your healthcare career in just 10 weeks without spending years
              getting another degree.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
                asChild
              >
                <a href="https://ritebridgeacademy.com/" target="_blank" rel="noopener noreferrer">
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 bg-transparent"
                asChild
              >
                <a href="https://ritebridgeacademy.com/" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Learning Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">When the System Stops Working for You</h2>
              <p className="text-lg text-muted-foreground">Build a new path forward</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  You're a doctor, nurse, or dedicated healthcare professional. You've got the degrees, the experience,
                  and the grit. But right now, you're overworked, overlooked, and undervalued.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  You're craving expansion - ready to grow, to be seen, and to finally get recognized for the value you
                  bring in a space where your job security is guaranteed.
                </p>
                <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                  <p className="font-medium text-foreground">
                    "This is not another career program. It's a career upgrade."
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition duration-500" />
                <Image
                  src="/images/dr-ekaette-blue-suit.jpg"
                  alt="Dr. Ekaette Joseph-Isang"
                  width={500}
                  height={600}
                  className="relative rounded-2xl shadow-2xl w-full group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                  <p className="font-bold">Dr. Ekaette Joseph-Isang</p>
                  <p className="text-sm text-primary-foreground/80">MD, MBA, MPH, CPHQ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A.C.T.I.O.N Pathway Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The A.C.T.I.O.N Pathway</h2>
              <p className="text-lg text-muted-foreground">Your step-by-step roadmap to a career upgrade</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {actionPathway.map((step, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-primary-foreground group-hover:scale-110 transition-transform">
                        {step.letter}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Get</h2>
              <p className="text-lg text-muted-foreground">Everything you need to transform your career</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courseFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">After This Program, You Will:</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg text-muted-foreground">Real career transformations from real students</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <CardDescription className="text-base italic leading-relaxed">
                      "{testimonial.quote}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border-t pt-4">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} - {testimonial.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Path</h2>
              <p className="text-lg text-muted-foreground">Two options to fit your goals and investment level</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Standard */}
              <Card className="border-2 border-muted shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl">The A.C.T.I.O.N Pathway</CardTitle>
                  <CardDescription>Self-paced learning</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-primary">$10,000</span>
                    <span className="text-muted-foreground ml-2">USD</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      "10-week self-paced program",
                      "CDI Certification prep included",
                      "Access to Q&A portal",
                      "Monthly group coaching (6 months)",
                      "1-year discount on all courses",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 rounded-full" asChild>
                    <a href="https://ritebridgeacademy.com/" target="_blank" rel="noopener noreferrer">
                      Enroll Now
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Elite */}
              <Card className="border-2 border-accent shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl">The A.C.T.I.O.N Pathway ELITE</CardTitle>
                  <CardDescription>Personalized coaching included</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-accent">$20,000</span>
                    <span className="text-muted-foreground ml-2">USD</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Everything in Standard, plus:",
                      "5x 1:1 personalized coaching calls",
                      "Monthly group coaching (1 year)",
                      "Lifetime discount on VIP tickets",
                      "Free copy of 'The A.C.T.I.O.N Pathway' book",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full" asChild>
                    <a href="https://ritebridgeacademy.com/" target="_blank" rel="noopener noreferrer">
                      Apply Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-muted-foreground mt-6 text-sm">
              Payment plans available. Visit RiteBridge Academy for details.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join hundreds of healthcare professionals who have successfully pivoted to high-level, purpose-driven
              roles.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-6 text-lg rounded-full"
              asChild
            >
              <a href="https://ritebridgeacademy.com/" target="_blank" rel="noopener noreferrer">
                Start Your Journey Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <p className="mt-6 text-sm text-primary-foreground/70">
              Questions? Contact us at ejosephisang@ritebridge.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
