import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-muted/50 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-blob" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group animate-fade-in-up">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition duration-500" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <Image
                src="/images/whatsapp-20image-202025-12-05-20at-2012-imgupscaler.jpg"
                alt="Dr. Ekaette Joseph-Isang in her office"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl backdrop-blur-md border border-white/20 shadow-lg animate-fade-in-up animate-delay-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-full">
                    <Sparkles className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/90">Transforming Healthcare</p>
                    <p className="text-xs text-white/70">One Organization at a Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="space-y-8 animate-fade-in-up animate-delay-200">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                About Me
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Dr. Ekaette <span className="gradient-text text-chart-3">Joseph-Isang</span>
              </h2>
              <p className="text-xl font-medium text-primary/90">
                Healthcare Executive
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                Healthcare strategy and transformation executive with{" "}
                <span className="font-semibold text-foreground">20+ years</span> of experience in healthcare operations,
                project management, and value-based care initiatives. Proven track record of leading transformation
                programs that improve clinical outcomes, reduce costs, and enhance operational efficiency across
                healthcare organizations.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                Achievement Highlights
                <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              </h3>
              <div className="grid gap-4">
                {[
                  "Led value transformation initiatives for cost-efficient management of Medicare populations",
                  "Advanced centralized clinical documentation integrity (CDI) for over 100,000 patients",
                  "Drove successful transformation of coding programs to CDI, doubling code capture and improving accuracy by 40%",
                  "Designed a new physician fee schedule saving a Blue Cross Blue Shield company $2.3M annually",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300"
                  >
                    <div className="mt-1 p-1 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <Link href="/experience">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1"
                >
                  Learn More About My Experience
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
