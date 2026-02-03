"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, TrendingUp, Sparkles } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="main" className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-background via-background to-muted/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/3 to-accent/5" />

      <div className="absolute top-0 -left-12 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-50" />
      <div className="absolute top-0 -right-12 w-72 h-72 bg-accent/8 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 opacity-50" />
      <div className="absolute -bottom-16 left-20 w-80 h-80 bg-secondary/8 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 opacity-50" />

      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div
            className={`space-y-8 text-white transition-all duration-1000 relative z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Dark overlay scrim for text readability */}
            <div className="absolute -inset-8 bg-gradient-to-r from-black/40 via-black/30 to-transparent rounded-2xl -z-10 pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass animate-pulse-slow">
              <Sparkles className="h-4 w-4 text-accent animate-spin-slow" />
              <span className="text-sm font-medium">Healthcare Innovation Leader</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-bold leading-tight text-balance animate-fade-in-up text-[var(--fs-4xl)] sm:text-[var(--fs-3xl)] lg:text-[var(--fs-4xl)]">
                Dr. Ekaette Joseph-Isang
              </h1>
              <div className="space-y-2">
                <h2 className="font-semibold leading-tight text-accent animate-fade-in-up animate-delay-100 text-[var(--fs-2xl)] sm:text-[var(--fs-xl)] lg:text-[var(--fs-2xl)]">
                  MD, MBA, MPH, CPHQ, CDIP, CCS, CRC, PAHM
                </h2>
                <h3 className="font-medium leading-tight text-white/90 animate-fade-in-up animate-delay-200 text-[var(--fs-xl)] sm:text-[var(--fs-lg)] lg:text-[var(--fs-2xl)]">
                  Healthcare Executive
                </h3>
              </div>
            </div>

            <p className="leading-relaxed text-white/90 max-w-2xl animate-fade-in-up animate-delay-300 text-[var(--fs-lg)] lg:text-[var(--fs-xl)]">
              Healthcare strategy and transformation executive with{" "}
              <span className="font-semibold text-accent">20+ years</span> in operations and project management. Expert
              in value-based care, clinical documentation integrity (CDI), risk adjustment, and physician engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up animate-delay-400">
              <a href="https://calendar.app.google/VWSK6szrzCfvSMn1A" target="_blank" rel="noopener noreferrer">
                <Button
                  size="pill"
                  className="bg-accent text-white hover:bg-accent/90 font-semibold text-lg shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="/services">
                <Button
                  size="pill"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold text-lg bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 animate-fade-in-up animate-delay-500">
              <div className="glass rounded-2xl p-4 text-center elevated-card hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-accent animate-bounce-slow" />
                </div>
                <div className="text-3xl font-bold text-white">20+</div>
                <div className="text-sm text-white/80 mt-1">Years Experience</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center elevated-card hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-accent animate-bounce-slow animation-delay-200" />
                </div>
                <div className="text-3xl font-bold text-white">100K+</div>
                <div className="text-sm text-white/80 mt-1">Patients Impacted</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center elevated-card hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-accent animate-bounce-slow animation-delay-400" />
                </div>
                <div className="text-3xl font-bold text-white">$2.3M</div>
                <div className="text-sm text-white/80 mt-1">Annual Savings</div>
              </div>
            </div>
          </div>

          <div
            className={`relative lg:order-last mt-8 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-accent rounded-3xl blur-2xl opacity-40 animate-float" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20 hover:ring-accent/50 transition-all duration-500 h-full">
                <Image
                  src="/images/dr-ekaette-blue-suit.jpg"
                  alt="Dr. Ekaette Joseph-Isang - Healthcare Strategy Executive"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse animation-delay-2000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
