import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FinalAssessmentBanner() {
  return (
    <section className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h2 className="text-2xl lg:text-3xl font-bold">
            IS YOUR COMMUNICATION TRAUMA ACTIVATING OR TRAUMA MITIGATING?
          </h2>
          <p className="text-lg lg:text-xl">TAKE OUR TRAUMA-INFORMED COMMUNICATION ASSESSMENT. HOW & GET YOUR SCORE!</p>
          <Link href="/assessment">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-4 text-lg"
            >
              CLICK HERE TO GET YOUR SCORE
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
