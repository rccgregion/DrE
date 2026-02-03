import { Button } from "@/components/ui/button"
import Image from "next/image"

export function TransformationProcess() {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-secondary to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-lg overflow-hidden">
              <Image
                src="/professional-woman-speaking-confidently-at-podium-.jpg"
                alt="Dr. Maychelle presenting the R.E.M.A.P methodology"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">
                OUR TRANSFORMATION PROCESS: HOW WE WORK
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 lg:mb-6 text-accent">
                The R.E.M.A.P.™ Methodology
              </h3>
            </div>

            <div className="space-y-4 lg:space-y-6 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-start space-x-3 lg:space-x-4 text-left">
                <div className="bg-accent text-accent-foreground rounded-full w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  R
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2">Release the Why</h4>
                  <p className="text-white/90 text-sm lg:text-base">
                    Connect the urgency for change to your purpose and outcomes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 lg:space-x-4 text-left">
                <div className="bg-accent text-accent-foreground rounded-full w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  E
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2">Elevate Understanding</h4>
                  <p className="text-white/90 text-sm lg:text-base">
                    Scale awareness and comprehension of trauma-informed principles.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 lg:space-x-4 text-left">
                <div className="bg-accent text-accent-foreground rounded-full w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  M
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2">Mobilize Action</h4>
                  <p className="text-white/90 text-sm lg:text-base">
                    Deliver training, coaching, and facilitative team-based conversations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 lg:space-x-4 text-left">
                <div className="bg-accent text-accent-foreground rounded-full w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  A
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2">Anchor Trust</h4>
                  <p className="text-white/90 text-sm lg:text-base">
                    Embed accountability, adaptability, and acknowledgement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 lg:space-x-4 text-left">
                <div className="bg-accent text-accent-foreground rounded-full w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  P
                </div>
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2">Pivot Next Steps</h4>
                  <p className="text-white/90 text-sm lg:text-base">
                    Sustain change through intentional and continued support.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 lg:pt-6">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base"
              >
                TELL ME MORE ABOUT THE R.E.M.A.P. FRAMEWORK
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
