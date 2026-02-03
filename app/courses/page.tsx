import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Sparkles, BookOpen, FileText, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CoursesPage() {
  const courses = [
    {
      id: "medical-coding",
      title: "Medical Coding",
      icon: FileText,
      description:
        "Master the fundamentals of medical coding with comprehensive training in ICD-10-CM, CPT, and HCPCS Level II coding systems. Learn to accurately assign codes for diagnoses, procedures, and services.",
      price: "$2,500",
      duration: "8 weeks",
      features: [
        "ICD-10-CM diagnosis coding fundamentals",
        "CPT procedural coding mastery",
        "HCPCS Level II coding for supplies and services",
        "Hands-on coding exercises with real case studies",
        "CPC exam preparation materials",
        "Access to coding software and tools",
        "Weekly live Q&A sessions",
        "Certificate of completion",
      ],
      cta: "Enroll Now",
      link: "https://ritebridgeacademy.com/",
      popular: false,
    },
    {
      id: "cdi",
      title: "Clinical Documentation Improvement (CDI)",
      icon: BookOpen,
      description:
        "Become a CDI specialist and learn to bridge the gap between clinical care and accurate documentation. Master the skills needed to improve documentation quality, ensure coding accuracy, and optimize reimbursement.",
      price: "$3,500",
      duration: "10 weeks",
      features: [
        "CDI fundamentals and best practices",
        "Query writing and physician communication",
        "Clinical validation and documentation review",
        "Risk adjustment and HCC coding",
        "DRG optimization strategies",
        "CDIP certification exam preparation",
        "Real-world case study analysis",
        "Monthly group coaching calls",
      ],
      cta: "Enroll Now",
      link: "https://ritebridgeacademy.com/",
      popular: true,
    },
    {
      id: "healthcare-leadership",
      title: "Healthcare Leadership",
      icon: Users,
      description:
        "The A.C.T.I.O.N Pathway program is designed for healthcare professionals ready to level up their careers. Transform your expertise into leadership positions with our comprehensive 10-week program.",
      price: "$10,000",
      duration: "10 weeks",
      features: [
        "Career assessment and goal setting",
        "In-demand healthcare certifications",
        "AI in healthcare and value-based care",
        "Interview strategies and personal branding",
        "Resume optimization",
        "C-suite networking opportunities",
        "Monthly group coaching",
        "1:1 personalized coaching available",
      ],
      cta: "Learn More",
      link: "/action-pathway",
      popular: false,
      isInternal: true,
    },
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
              href="/"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors mr-1.5"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 ml-2.5">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">RiteBridge Academy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Professional Courses</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-4">
              Advance Your Healthcare Career
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Expert-led training programs designed to help healthcare professionals gain in-demand skills and
              certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <Card
                  key={course.id}
                  className={`border-2 ${course.popular ? "border-accent shadow-xl" : "border-muted shadow-lg"} hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col`}
                >
                  {course.popular && (
                    <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center pb-2">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <course.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{course.title}</CardTitle>
                    <CardDescription className="text-base mt-2">{course.description}</CardDescription>
                    <div className="pt-4">
                      <span className={`text-4xl font-bold ${course.popular ? "text-accent" : "text-primary"}`}>
                        {course.price}
                      </span>
                      <span className="text-muted-foreground ml-2">/ {course.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <ul className="space-y-3 flex-1">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle
                            className={`w-5 h-5 ${course.popular ? "text-accent" : "text-primary"} flex-shrink-0 mt-0.5`}
                          />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {course.isInternal ? (
                      <Link href={course.link} className="w-full">
                        <Button
                          className={`w-full ${course.popular ? "bg-accent hover:bg-accent/90 text-accent-foreground" : "bg-primary hover:bg-primary/90"} rounded-full`}
                        >
                          {course.cta}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        className={`w-full ${course.popular ? "bg-accent hover:bg-accent/90 text-accent-foreground" : "bg-primary hover:bg-primary/90"} rounded-full`}
                        asChild
                      >
                        <a href={course.link} target="_blank" rel="noopener noreferrer">
                          {course.cta}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose RiteBridge Academy?</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our programs are designed by healthcare industry experts with decades of experience.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Instructors",
                  description:
                    "Learn from healthcare professionals with real-world experience and proven track records.",
                },
                {
                  title: "Flexible Learning",
                  description: "Self-paced online modules that fit your schedule, with live support when you need it.",
                },
                {
                  title: "Career Support",
                  description: "Resume optimization, interview prep, and networking opportunities included.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-background p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Visit RiteBridge Academy to explore all courses and enrollment options.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-6 text-lg rounded-full"
              asChild
            >
              <a href="https://ritebridgeacademy.com/" target="_blank" rel="noopener noreferrer">
                Visit RiteBridge Academy
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
