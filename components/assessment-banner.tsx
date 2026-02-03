import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AssessmentBanner() {
  return (
    <section className="bg-foreground text-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl lg:text-2xl font-bold mb-2">
              IS YOUR COMMUNICATION TRAUMA ACTIVATING OR TRAUMA MITIGATING?
            </h3>
            <p className="text-lg">TAKE OUR TRAUMA-INFORMED COMMUNICATION ASSESSMENT. HOW & GET YOUR SCORE!</p>
          </div>
          <Link href="/assessment">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 whitespace-nowrap"
            >
              CLICK HERE TO GET YOUR SCORE
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
