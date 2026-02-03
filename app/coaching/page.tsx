import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Heart, Users, Target, Zap, Clock, CheckCircle } from "lucide-react"

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Individual Coaching</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Transform your communication and relationships through personalized trauma-informed coaching
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Book Discovery Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Individual Coaching?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Work one-on-one with certified R.E.M.A.P practitioners to address your unique communication challenges
                and goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Personalized Approach",
                  description:
                    "Tailored coaching sessions designed specifically for your unique situation, triggers, and communication patterns.",
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Focused Results",
                  description:
                    "Work on specific relationship challenges, workplace conflicts, or personal communication goals with targeted strategies.",
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Safe Environment",
                  description:
                    "Experience a judgment-free, trauma-informed space where you can explore and heal communication wounds.",
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Rapid Transformation",
                  description:
                    "See meaningful changes in your communication patterns and relationships within weeks, not months.",
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Flexible Scheduling",
                  description:
                    "Sessions available at times that work for your schedule, including evenings and weekends.",
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Proven Methods",
                  description:
                    "Benefit from the evidence-based R.E.M.A.P framework combined with personalized coaching techniques.",
                },
              ].map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Areas We Address</h2>
              <p className="text-lg text-gray-600">Common challenges our individual coaching clients work through</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  category: "Relationship Communication",
                  areas: [
                    "Improving intimate partner communication",
                    "Navigating difficult family dynamics",
                    "Building deeper emotional connections",
                    "Resolving recurring conflicts",
                    "Healing from relationship trauma",
                  ],
                },
                {
                  category: "Workplace Dynamics",
                  areas: [
                    "Managing difficult colleagues or supervisors",
                    "Assertive communication without aggression",
                    "Handling workplace conflicts",
                    "Building professional relationships",
                    "Leadership communication skills",
                  ],
                },
                {
                  category: "Personal Growth",
                  areas: [
                    "Overcoming communication anxiety",
                    "Building self-confidence in conversations",
                    "Setting healthy boundaries",
                    "Expressing needs and emotions clearly",
                    "Developing emotional intelligence",
                  ],
                },
                {
                  category: "Trauma Recovery",
                  areas: [
                    "Healing communication wounds from past trauma",
                    "Managing triggers in conversations",
                    "Rebuilding trust in relationships",
                    "Developing healthy attachment patterns",
                    "Processing and expressing difficult emotions",
                  ],
                },
              ].map((area, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-xl text-green-800">{area.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {area.areas.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Coaching Process</h2>
              <p className="text-lg text-gray-600">A structured approach to lasting transformation</p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Discovery Call",
                  description:
                    "Free 30-minute consultation to understand your goals, challenges, and determine if we're a good fit for working together.",
                },
                {
                  step: "2",
                  title: "Assessment & Goal Setting",
                  description:
                    "Comprehensive evaluation of your communication patterns, triggers, and relationship dynamics to create a personalized coaching plan.",
                },
                {
                  step: "3",
                  title: "R.E.M.A.P Integration",
                  description:
                    "Learn and practice the R.E.M.A.P framework tailored to your specific situations and communication challenges.",
                },
                {
                  step: "4",
                  title: "Skill Development",
                  description:
                    "Build new communication skills through guided practice, role-playing, and real-world application with ongoing support.",
                },
                {
                  step: "5",
                  title: "Integration & Mastery",
                  description:
                    "Solidify your new communication patterns and develop strategies for maintaining progress long-term.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
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

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Coaching Packages</h2>
              <p className="text-lg text-gray-600">Choose the level of support that's right for you</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-green-100">
                  <CardTitle className="text-2xl text-green-800">Starter Package</CardTitle>
                  <CardDescription className="text-green-600">Perfect for focused, short-term goals</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-3xl font-bold text-green-800 mb-2">$497</p>
                    <p className="text-gray-600">3 sessions over 6 weeks</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>3 x 60-minute coaching sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Personalized R.E.M.A.P assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Custom action plan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Email support between sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Resource library access</span>
                    </li>
                  </ul>

                  <Link href="/contact">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Get Started</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-500 shadow-lg relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <CardHeader className="bg-green-600 text-white">
                  <CardTitle className="text-2xl">Transformation Package</CardTitle>
                  <CardDescription className="text-white/90">Comprehensive support for lasting change</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-3xl font-bold text-green-800 mb-2">$1,297</p>
                    <p className="text-gray-600">6 sessions over 3 months</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>6 x 60-minute coaching sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Comprehensive R.E.M.A.P assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Personalized transformation roadmap</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Unlimited email & text support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Weekly check-in calls</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Custom worksheets & exercises</span>
                    </li>
                  </ul>

                  <Link href="/contact">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Transform Now</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-green-800 text-white">
                  <CardTitle className="text-2xl">Mastery Package</CardTitle>
                  <CardDescription className="text-white/90">Deep, intensive work for profound change</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-3xl font-bold text-green-800 mb-2">$2,497</p>
                    <p className="text-gray-600">12 sessions over 6 months</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>12 x 60-minute coaching sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Deep trauma-informed assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Comprehensive mastery program</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>24/7 support access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Monthly progress reviews</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Bonus: Group coaching access</span>
                    </li>
                  </ul>

                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full border-green-800 text-green-800 hover:bg-green-800 hover:text-white bg-transparent"
                    >
                      Master Communication
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">All packages include a 30-day satisfaction guarantee</p>
              <p className="text-sm text-gray-500">Payment plans available for Transformation and Mastery packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Client Success Stories</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 mb-6 italic">
                    "Working with my R.E.M.A.P coach completely transformed my marriage. We went from constant arguments
                    to deep, meaningful conversations. I finally feel heard and understood."
                  </p>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Jennifer M.</p>
                    <p className="text-gray-600">Marketing Executive</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 mb-6 italic">
                    "I used to shut down during conflicts at work. Now I can navigate difficult conversations with
                    confidence and actually resolve issues instead of avoiding them."
                  </p>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">David R.</p>
                    <p className="text-gray-600">Project Manager</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Communication?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Book a free discovery call to explore how individual coaching can help you build stronger, more meaningful
            relationships
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Book Discovery Call
              </Button>
            </Link>
            <Link href="/assessment">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Take Assessment First
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
