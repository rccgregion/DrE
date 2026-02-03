"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

const assessmentQuestions = [
  {
    id: 1,
    question: "When conflict arises in your workplace, how do you typically respond?",
    options: [
      { value: "avoid", label: "I tend to avoid the situation until it resolves itself", score: 1 },
      { value: "direct", label: "I address it directly but sometimes feel overwhelmed", score: 2 },
      { value: "calm", label: "I approach it calmly and seek to understand all perspectives", score: 3 },
      { value: "facilitate", label: "I facilitate open dialogue and create safe spaces for resolution", score: 4 },
    ],
  },
  {
    id: 2,
    question: "How do you handle stress and pressure in your communication?",
    options: [
      { value: "reactive", label: "I often react quickly without thinking", score: 1 },
      { value: "struggle", label: "I struggle to maintain composure", score: 2 },
      { value: "manage", label: "I can usually manage my emotions well", score: 3 },
      { value: "regulate", label: "I consistently self-regulate and help others do the same", score: 4 },
    ],
  },
  {
    id: 3,
    question: "When someone shares a difficult experience with you, how do you respond?",
    options: [
      { value: "uncomfortable", label: "I feel uncomfortable and try to change the subject", score: 1 },
      { value: "listen", label: "I listen but sometimes don't know what to say", score: 2 },
      { value: "empathetic", label: "I respond with empathy and offer support", score: 3 },
      { value: "trauma-informed", label: "I use trauma-informed approaches to create safety", score: 4 },
    ],
  },
  {
    id: 4,
    question: "How do you build trust within your team or relationships?",
    options: [
      { value: "assume", label: "I assume trust will develop naturally over time", score: 1 },
      { value: "inconsistent", label: "I try to be trustworthy but am sometimes inconsistent", score: 2 },
      { value: "reliable", label: "I focus on being reliable and keeping my commitments", score: 3 },
      { value: "intentional", label: "I intentionally create psychological safety and model vulnerability", score: 4 },
    ],
  },
  {
    id: 5,
    question: "How do you handle feedback, both giving and receiving?",
    options: [
      { value: "defensive", label: "I often feel defensive or avoid giving difficult feedback", score: 1 },
      { value: "struggle", label: "I struggle with timing and delivery", score: 2 },
      { value: "constructive", label: "I give and receive feedback constructively", score: 3 },
      { value: "growth", label: "I create growth-oriented feedback cultures", score: 4 },
    ],
  },
]

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    organization: "",
  })
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const calculateScore = () => {
    let totalScore = 0
    assessmentQuestions.forEach((question) => {
      const answer = answers[question.id]
      if (answer) {
        const option = question.options.find((opt) => opt.value === answer)
        if (option) {
          totalScore += option.score
        }
      }
    })
    return totalScore
  }

  const handleSubmit = () => {
    const finalScore = calculateScore()
    setScore(finalScore)
    setShowResults(true)
  }

  const getScoreInterpretation = (score: number) => {
    if (score <= 8) {
      return {
        level: "Trauma-Activating Communication",
        color: "text-red-600",
        description:
          "Your communication patterns may inadvertently activate trauma responses in others. This is an opportunity for significant growth in trauma-informed practices.",
      }
    } else if (score <= 12) {
      return {
        level: "Developing Trauma-Informed Awareness",
        color: "text-yellow-600",
        description:
          "You're beginning to develop trauma-informed communication skills but there's room for improvement in consistency and application.",
      }
    } else if (score <= 16) {
      return {
        level: "Trauma-Informed Communication",
        color: "text-green-600",
        description:
          "You demonstrate good trauma-informed communication practices and create generally safe spaces for others.",
      }
    } else {
      return {
        level: "Trauma-Mitigating Leadership",
        color: "text-blue-600",
        description:
          "You excel at trauma-informed communication and actively help others heal and grow through your interactions.",
      }
    }
  }

  if (showResults) {
    const interpretation = getScoreInterpretation(score)
    return (
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-r from-secondary to-primary text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <div className="text-center">
              <CheckCircle className="mx-auto h-16 w-16 mb-6" />
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Your Assessment Results</h1>
              <p className="text-xl text-white/90">
                Thank you for completing the trauma-informed communication assessment
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center bg-primary/5">
                <CardTitle className="text-3xl font-bold mb-4">Your Score: {score}/20</CardTitle>
                <h2 className={`text-2xl font-semibold ${interpretation.color}`}>{interpretation.level}</h2>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-8 text-center">{interpretation.description}</p>

                <div className="bg-muted/30 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4">Next Steps for Your Journey:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Schedule a consultation to discuss your specific needs and goals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Explore our R.E.M.A.P.™ methodology training programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Consider individual coaching or organizational workshops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Join our community of trauma-informed leaders</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center space-y-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                  >
                    Schedule Your Free Consultation
                  </Button>
                  <div>
                    <Link href="/framework" className="text-secondary hover:underline font-medium">
                      Learn More About R.E.M.A.P.™ Framework
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-secondary to-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Trauma-Informed Communication Assessment</h1>
            <p className="text-xl text-white/90">
              Discover whether your communication is trauma-activating or trauma-mitigating
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentQuestion < assessmentQuestions.length ? (
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} of {assessmentQuestions.length}
                  </span>
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / assessmentQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold leading-relaxed">
                  {assessmentQuestions[currentQuestion].question}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <RadioGroup
                  value={answers[assessmentQuestions[currentQuestion].id] || ""}
                  onValueChange={(value) => handleAnswer(assessmentQuestions[currentQuestion].id, value)}
                  className="space-y-4"
                >
                  {assessmentQuestions[currentQuestion].options.map((option) => (
                    <div
                      key={option.value}
                      className="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted/30 transition-colors"
                    >
                      <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                      <Label htmlFor={option.value} className="text-base leading-relaxed cursor-pointer flex-1">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                    disabled={currentQuestion === 0}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => setCurrentQuestion((prev) => prev + 1)}
                    disabled={!answers[assessmentQuestions[currentQuestion].id]}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Next Question
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center">
                  Almost Done! Please Provide Your Contact Information
                </CardTitle>
                <p className="text-center text-muted-foreground">
                  We'll send your detailed results and personalized recommendations to your email.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo((prev) => ({ ...prev, name: e.target.value }))}
                      className="mt-2"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo((prev) => ({ ...prev, email: e.target.value }))}
                      className="mt-2"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <Label htmlFor="organization" className="text-base font-medium">
                      Organization (Optional)
                    </Label>
                    <Input
                      id="organization"
                      value={contactInfo.organization}
                      onChange={(e) => setContactInfo((prev) => ({ ...prev, organization: e.target.value }))}
                      className="mt-2"
                      placeholder="Enter your organization name"
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={() => setCurrentQuestion((prev) => prev - 1)}>
                    Previous
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!contactInfo.name || !contactInfo.email}
                    className="bg-primary hover:bg-primary/90 px-8"
                  >
                    Get My Results
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </main>
  )
}
