"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, Send, Sparkles, ArrowLeft } from "lucide-react"

export default function BlogPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "How to Implement Value-Based Care: A Strategic Roadmap for Healthcare Organizations",
      excerpt:
        "Value-based care (VBC) is upon us and by 2030, it is projected that every Medicare beneficiary will be in a Value-based Care arrangement. Learn the essential steps to align governance, data, clinical workflows and physician incentives.",
      author: "Dr. Ekaette Joseph-Isang",
      date: "December 1, 2024",
      readTime: "15 min read",
      category: "Value-Based Care",
      image: "/healthcare-strategy-meeting-with-charts-and-data-a.jpg",
    },
    {
      id: 2,
      title: "Outpatient Clinical Documentation Integrity Programs: Ensuring Standards and Quality",
      excerpt:
        "Documentation accuracy is a foundational requirement in value-based care, risk adjustment, quality scoring, and Medicare Advantage operations. Learn best practices for building effective CDI programs.",
      author: "Dr. Ekaette Joseph-Isang",
      date: "November 25, 2024",
      readTime: "12 min read",
      category: "Clinical Documentation",
      image: "/medical-professional-reviewing-clinical-documentat.jpg",
    },
    {
      id: 3,
      title: "Digital Transformation: Leveraging Technology for Better Health Outcomes",
      excerpt:
        "Digital Innovation represents one of the most profound evolutions in modern industry. Healthcare is rapidly being redefined by data-driven solutions, real-time analytics, virtual engagement and intelligent automation.",
      author: "Dr. Ekaette Joseph-Isang",
      date: "November 18, 2024",
      readTime: "14 min read",
      category: "Healthcare Technology",
      image: "/digital-healthcare-technology-ai-medical-innovatio.jpg",
    },
  ]

  const categories = ["All Posts", "Value-Based Care", "Clinical Documentation", "Healthcare Technology"]

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubscribed(true)
        setEmail("")
      }
    } catch (error) {
      console.error("Subscription error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground py-24 overflow-hidden min-h-[50vh] flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-pulse-slow">
              <Sparkles className="h-4 w-4 text-accent animate-spin-slow" />
              <span className="text-sm font-medium">Healthcare Insights</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">Healthcare Strategy Insights</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 animate-fade-in-up animate-delay-200">
              Expert insights on healthcare transformation, quality improvement, and strategic leadership
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full ${index === 0 ? "bg-primary hover:bg-primary/90" : "hover:bg-primary/10 bg-transparent"}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Featured Article</h2>
              <p className="text-muted-foreground">Latest insights on healthcare transformation</p>
            </div>

            <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {blogPosts[0].author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <Link href={`/blog/${blogPosts[0].id}`}>
                    <Button className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
              <p className="text-lg text-muted-foreground">
                Explore our collection of insights on healthcare strategy and transformation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card
                  key={post.id}
                  className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="inline-flex items-center gap-2 bg-transparent hover:bg-primary hover:text-primary-foreground rounded-full"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get the latest insights on healthcare strategy and transformation delivered to your inbox
            </p>

            <div className="max-w-md mx-auto">
              {subscribed ? (
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <p className="text-lg font-medium">Thank you for subscribing!</p>
                  <p className="text-sm text-primary-foreground/80 mt-2">You'll receive our latest insights soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-full text-foreground placeholder-muted-foreground bg-white"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6"
                  >
                    {isSubmitting ? "..." : <Send className="w-5 h-5" />}
                  </Button>
                </form>
              )}
              <p className="text-sm text-primary-foreground/80 mt-3">No spam, unsubscribe at any time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
              <p className="text-lg text-muted-foreground">
                Explore more ways to transform your healthcare organization
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl">Free Consultation</CardTitle>
                  <CardDescription>
                    Discover opportunities for healthcare transformation in your organization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="https://calendar.app.google/VWSK6szrzCfvSMn1A" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                      Schedule Consultation
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl">Healthcare Services</CardTitle>
                  <CardDescription>Comprehensive consulting services for healthcare organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/services">
                    <Button variant="outline" className="rounded-full bg-transparent">
                      View Services
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl">Career Training</CardTitle>
                  <CardDescription>The A.C.T.I.O.N Pathway for healthcare professionals</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/courses">
                    <Button variant="outline" className="rounded-full bg-transparent">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
