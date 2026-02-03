import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Play, Clock, Users, Award, BookOpen, Video } from "lucide-react"

export default function OnlineTrainingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Online Training Programs</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Master trauma-informed communication from anywhere with our comprehensive online courses
            </p>
            <Link href="#courses">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-secondary bg-transparent"
              >
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Online Training?</h2>
              <p className="text-lg text-gray-600">Flexible, comprehensive, and designed for real-world application</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Video className="w-8 h-8" />,
                  title: "Interactive Video Lessons",
                  description: "High-quality video content with real-world scenarios and practical demonstrations",
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Self-Paced Learning",
                  description: "Learn at your own speed with lifetime access to all course materials",
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Community Support",
                  description: "Connect with fellow learners and get support from our expert instructors",
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Certification",
                  description: "Earn recognized certificates upon completion of each course",
                },
                {
                  icon: <BookOpen className="w-8 h-8" />,
                  title: "Comprehensive Resources",
                  description: "Downloadable guides, worksheets, and reference materials",
                },
                {
                  icon: <Play className="w-8 h-8" />,
                  title: "Practical Exercises",
                  description: "Hands-on activities and role-playing scenarios for skill development",
                },
              ].map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Courses</h2>
              <p className="text-lg text-gray-600">Choose the program that best fits your learning goals</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-primary text-white">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">R.E.M.A.P Fundamentals</CardTitle>
                      <CardDescription className="text-white/90">
                        Master the core principles of trauma-informed communication
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">$297</p>
                      <p className="text-sm text-white/80">One-time payment</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />8 hours
                      </span>
                      <span className="flex items-center gap-1">
                        <Video className="w-4 h-4" />
                        12 modules
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        Certificate
                      </span>
                    </div>
                  </div>

                  <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    <li>• Understanding trauma and its impact on communication</li>
                    <li>• The complete R.E.M.A.P framework</li>
                    <li>• Recognizing trauma responses in yourself and others</li>
                    <li>• Building empathy and emotional intelligence</li>
                    <li>• Practical communication techniques</li>
                    <li>• Creating psychologically safe environments</li>
                  </ul>

                  <Link href="/contact">
                    <Button className="w-full">Enroll Now</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-secondary text-white">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">Advanced Practitioner</CardTitle>
                      <CardDescription className="text-white/90">
                        Deep-dive into complex scenarios and advanced techniques
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">$497</p>
                      <p className="text-sm text-white/80">One-time payment</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        12 hours
                      </span>
                      <span className="flex items-center gap-1">
                        <Video className="w-4 h-4" />
                        18 modules
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        Advanced Certificate
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 italic">*Requires completion of R.E.M.A.P Fundamentals</p>
                  </div>

                  <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    <li>• Advanced trauma-informed interventions</li>
                    <li>• Complex conflict resolution strategies</li>
                    <li>• Group facilitation and team dynamics</li>
                    <li>• Crisis communication techniques</li>
                    <li>• Organizational culture transformation</li>
                    <li>• Training and coaching others</li>
                  </ul>

                  <Link href="/contact">
                    <Button variant="secondary" className="w-full">
                      Enroll Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg lg:col-span-2">
                <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">Complete Certification Program</CardTitle>
                      <CardDescription className="text-white/90">
                        Comprehensive training to become a certified R.E.M.A.P practitioner
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">$697</p>
                      <p className="text-sm text-white/80">Save $97 with bundle</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="mb-6">
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            20+ hours
                          </span>
                          <span className="flex items-center gap-1">
                            <Video className="w-4 h-4" />
                            30 modules
                          </span>
                          <span className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            Professional Certificate
                          </span>
                        </div>
                      </div>

                      <h4 className="font-semibold mb-3">Complete Program Includes:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• R.E.M.A.P Fundamentals course</li>
                        <li>• Advanced Practitioner course</li>
                        <li>• Live monthly Q&A sessions</li>
                        <li>• Private community access</li>
                        <li>• 1-on-1 mentorship session</li>
                        <li>• Continuing education credits</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Bonus Materials:</h4>
                      <ul className="space-y-2 text-gray-700 mb-6">
                        <li>• Comprehensive practitioner toolkit</li>
                        <li>• Assessment and evaluation forms</li>
                        <li>• Workshop facilitation guides</li>
                        <li>• Marketing materials for practitioners</li>
                        <li>• Lifetime updates to course content</li>
                        <li>• Professional referral network access</li>
                      </ul>

                      <Link href="/contact">
                        <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary">
                          Get Complete Program
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Learning Journey</h2>
              <p className="text-lg text-gray-600">Follow our structured path to mastery</p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Foundation Assessment",
                  description:
                    "Take our free assessment to understand your current communication style and identify areas for growth.",
                },
                {
                  step: "2",
                  title: "R.E.M.A.P Fundamentals",
                  description:
                    "Master the core principles and techniques of trauma-informed communication through interactive lessons.",
                },
                {
                  step: "3",
                  title: "Practice & Application",
                  description:
                    "Apply your learning through practical exercises, role-playing scenarios, and real-world challenges.",
                },
                {
                  step: "4",
                  title: "Advanced Training",
                  description:
                    "Deepen your expertise with advanced techniques for complex situations and organizational applications.",
                },
                {
                  step: "5",
                  title: "Certification",
                  description: "Complete your certification and join our network of qualified R.E.M.A.P practitioners.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Learning Journey Today</h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their communication skills with our online training
            programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-secondary bg-transparent"
              >
                Take Free Assessment
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-secondary hover:bg-gray-100">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
