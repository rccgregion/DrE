import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Users, TrendingUp, Shield, Target, Zap } from "lucide-react"

export default function OrganizationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Healthcare Strategy & Transformation</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Drive meaningful change in your healthcare organization through strategic transformation and operational
              excellence
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Healthcare Organizations Choose Dr. Ekaette
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Proven expertise in healthcare transformation creates lasting positive change in organizational
                performance, patient outcomes, and operational efficiency
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Value-Based Care Excellence",
                  description:
                    "Transform your organization with proven value-based care strategies that improve patient outcomes while reducing costs.",
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Operational Efficiency",
                  description:
                    "Streamline healthcare operations and project management to maximize productivity and resource utilization.",
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Clinical Documentation Integrity",
                  description:
                    "Implement comprehensive CDI programs that improve accuracy, compliance, and revenue optimization.",
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Risk Adjustment Optimization",
                  description:
                    "Enhance Medicare risk adjustment coding and documentation to maximize appropriate reimbursement.",
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Strategic Leadership",
                  description:
                    "Develop healthcare leaders who can navigate complex transformations and drive sustainable change.",
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Measurable Results",
                  description:
                    "Track improvements in quality metrics, cost savings, and operational performance with proven methodologies.",
                },
              ].map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Healthcare Transformation Services</h2>
              <p className="text-lg text-gray-600">
                Comprehensive solutions tailored to your healthcare organization's unique needs
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-primary text-white">
                  <CardTitle className="text-2xl">Strategic Transformation</CardTitle>
                  <CardDescription className="text-white/90">
                    Comprehensive healthcare strategy and transformation initiatives
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span>Value-based care implementation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span>Medicare population management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span>Healthcare operations optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span>Strategic planning and change management</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    <strong>Outcome:</strong> Sustainable cost reductions and improved patient outcomes
                  </p>
                  <Link href="/contact">
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-secondary text-white">
                  <CardTitle className="text-2xl">Clinical Documentation Integrity</CardTitle>
                  <CardDescription className="text-white/90">Advanced CDI programs and implementation</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                      <span>Centralized CDI program development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                      <span>Coding accuracy improvement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                      <span>Physician engagement strategies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                      <span>Compliance and quality assurance</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    <strong>Proven Results:</strong> 40% improvement in coding accuracy
                  </p>
                  <Link href="/contact">
                    <Button variant="secondary" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="text-2xl">Healthcare Consulting</CardTitle>
                  <CardDescription className="text-white/90">
                    Expert guidance for healthcare management challenges
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span>Healthcare management consulting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span>Risk adjustment optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span>Health information systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span>Performance improvement initiatives</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    <strong>Experience:</strong> 10+ years in healthcare operations
                  </p>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-green-600 text-white">
                  <CardTitle className="text-2xl">Executive Development</CardTitle>
                  <CardDescription className="text-white/90">
                    Leadership coaching and professional development
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span>Executive and career development coaching</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span>Public speaking and corporate training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span>Healthcare leadership development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span>Strategic planning facilitation</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    <strong>Focus:</strong> Healthcare executive excellence
                  </p>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">What Healthcare Organizations Say</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 mb-6 italic">
                    "Dr. Ekaette's strategic transformation initiatives saved our organization $2.3M annually while
                    improving our clinical documentation accuracy by 40%. Her expertise is unmatched."
                  </p>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Jennifer Martinez</p>
                    <p className="text-gray-600">Chief Medical Officer, Regional Health System</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 mb-6 italic">
                    "The CDI program implementation exceeded our expectations. We've seen significant improvements in
                    coding accuracy and physician engagement across all departments."
                  </p>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Robert Chen</p>
                    <p className="text-gray-600">VP of Operations, Medicare Advantage Plan</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Healthcare Organization?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Schedule a consultation to learn how Dr. Ekaette's proven strategies can drive meaningful change and improve
            patient outcomes in your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/coaching">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
