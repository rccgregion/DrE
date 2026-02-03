import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Award, CheckCircle, Users, BookOpen, Clock, Star } from "lucide-react"

export default function CertificationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">NLP Coach Certification</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Become a certified Neuro-Linguistic Programming coach with trauma-informed specialization
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Apply for Certification
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Professional NLP Certification</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our comprehensive NLP Coach Certification program combines traditional Neuro-Linguistic Programming
                  techniques with our revolutionary R.E.M.A.P framework, creating a unique trauma-informed approach to
                  coaching and personal development.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  This intensive program is designed for coaches, therapists, HR professionals, and leaders who want to
                  integrate powerful NLP techniques with trauma-informed practices to create lasting transformation in
                  their clients and organizations.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">ICF Accredited</h4>
                      <p className="text-gray-600">International Coach Federation approved program</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Trauma-Informed</h4>
                      <p className="text-gray-600">Specialized focus on trauma-aware coaching</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Practical Training</h4>
                      <p className="text-gray-600">Hands-on experience with real clients</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                      <p className="text-gray-600">Mentorship and continuing education</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">120 hours of comprehensive training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Small cohorts (max 12 participants)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Comprehensive study materials included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Professional certification upon completion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Lifetime access to alumni network</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold mb-2">Next Cohort Starts:</p>
                  <p className="text-blue-700">March 15, 2024</p>
                  <p className="text-sm text-blue-600 mt-2">Early bird pricing available until February 1st</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Curriculum</h2>
              <p className="text-lg text-gray-600">
                Six intensive modules covering all aspects of trauma-informed NLP coaching
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  module: "Module 1",
                  title: "Foundations of NLP & Trauma-Informed Practice",
                  duration: "20 hours",
                  topics: [
                    "History and principles of NLP",
                    "Understanding trauma and its neurological impact",
                    "Integration of R.E.M.A.P framework with NLP",
                    "Ethical considerations in trauma-informed coaching",
                    "Building rapport and psychological safety",
                  ],
                },
                {
                  module: "Module 2",
                  title: "Advanced Communication Patterns",
                  duration: "20 hours",
                  topics: [
                    "Meta-model questioning techniques",
                    "Milton model language patterns",
                    "Trauma-sensitive language modifications",
                    "Anchoring and state management",
                    "Reframing techniques for trauma survivors",
                  ],
                },
                {
                  module: "Module 3",
                  title: "Submodalities & Timeline Work",
                  duration: "20 hours",
                  topics: [
                    "Submodality interventions",
                    "Timeline therapy adaptations",
                    "Trauma-informed timeline work",
                    "Phobia and trauma resolution techniques",
                    "Future pacing and resource installation",
                  ],
                },
                {
                  module: "Module 4",
                  title: "Values, Beliefs & Identity Work",
                  duration: "20 hours",
                  topics: [
                    "Values elicitation and alignment",
                    "Belief change processes",
                    "Identity-level transformations",
                    "Core wound healing approaches",
                    "Spiritual and existential considerations",
                  ],
                },
                {
                  module: "Module 5",
                  title: "Advanced Coaching Techniques",
                  duration: "20 hours",
                  topics: [
                    "Six-step reframing process",
                    "Parts integration work",
                    "Conflict resolution strategies",
                    "Group and team coaching applications",
                    "Crisis intervention protocols",
                  ],
                },
                {
                  module: "Module 6",
                  title: "Professional Practice & Business Development",
                  duration: "20 hours",
                  topics: [
                    "Setting up your coaching practice",
                    "Marketing trauma-informed services",
                    "Legal and ethical frameworks",
                    "Continuing education requirements",
                    "Building referral networks",
                  ],
                },
              ].map((module, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader className="bg-blue-600 text-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{module.module}</CardTitle>
                        <CardDescription className="text-white/90 text-lg font-medium">{module.title}</CardDescription>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-white/80">{module.duration}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Topics:</h4>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{topic}</span>
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

      {/* Investment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment & Payment Options</h2>
              <p className="text-lg text-gray-600">Flexible payment plans to make certification accessible</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-200 shadow-lg">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-2xl text-blue-800">Full Payment</CardTitle>
                  <CardDescription className="text-blue-600">Save with upfront payment</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-4xl font-bold text-blue-800 mb-2">$4,997</p>
                    <p className="text-gray-600">Save $500 with full payment</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span>Complete 120-hour certification program</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span>All course materials and resources</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span>Professional certification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span>Lifetime alumni network access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span>6 months of mentorship support</span>
                    </li>
                  </ul>

                  <Link href="/contact">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now - Full Payment</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 shadow-lg">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="text-2xl text-gray-800">Payment Plan</CardTitle>
                  <CardDescription className="text-gray-600">Spread payments over 6 months</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-4xl font-bold text-gray-800 mb-2">$916</p>
                    <p className="text-gray-600">per month for 6 months</p>
                    <p className="text-sm text-gray-500 mt-1">Total: $5,497</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gray-600" />
                      <span>Complete 120-hour certification program</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gray-600" />
                      <span>All course materials and resources</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gray-600" />
                      <span>Professional certification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gray-600" />
                      <span>Lifetime alumni network access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gray-600" />
                      <span>6 months of mentorship support</span>
                    </li>
                  </ul>

                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full border-gray-400 text-gray-700 hover:bg-gray-50 bg-transparent"
                    >
                      Apply Now - Payment Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                <strong>Early Bird Special:</strong> Save an additional $300 when you apply before February 1st, 2024
              </p>
              <p className="text-sm text-gray-500">
                All payments are secured and processed through our encrypted payment system. Full refund available
                within 30 days of program start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prerequisites & Requirements</h2>
              <p className="text-lg text-gray-600">Ensure you're ready for this intensive certification program</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Recommended Background</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Completion of R.E.M.A.P Fundamentals course</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>2+ years experience in coaching, therapy, or related field</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Bachelor's degree (preferred but not required)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Commitment to trauma-informed practices</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">Program Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Attend all 120 hours of training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Complete 10 supervised coaching sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Pass written and practical examinations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Submit case study portfolio</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Become a Certified NLP Coach?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Join our next cohort and transform your ability to help others through trauma-informed NLP coaching
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Apply for Certification
              </Button>
            </Link>
            <Link href="/assessment">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Take Assessment First
              </Button>
            </Link>
          </div>
          <p className="text-sm text-white/80 mt-6">Limited spaces available - Next cohort starts March 15, 2024</p>
        </div>
      </section>
    </div>
  )
}
