import Image from "next/image"

export function TedxSection() {
  return (
    <section className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Image src="/tedx-logo-red-letters.jpg" alt="TEDx" width={200} height={80} className="h-16 w-auto" />
              <span className="text-4xl font-bold text-primary">Achieving</span>
            </div>

            <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed">
              "We believe communication is more than words – it's about presence, trust, safety, and the courage to
              repair." <span className="text-primary">-Dr. Maychelle</span>
            </blockquote>

            <div className="space-y-4 text-lg">
              <p>
                Through our <strong>R.E.M.A.P.™</strong> Methodology and <strong>E.L.M.A.P.™</strong> Framework, we
                guide leaders, teams, and organizations to:
              </p>

              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Communicate with honesty, emotional awareness, and courage
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Build and sustain a culture of trust & psychological safety across all levels
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Navigate conflict with repair and accountability
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Reward accountability, adaptability, and acknowledgement
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Create a culture of ongoing personal and professional development as a norm, not an exception
                </li>
              </ul>
            </div>

            <blockquote className="text-lg italic border-l-4 border-primary pl-4">
              "Dr. Charbonnet's process doesn't just inspire leaders – it transforms how they lead every day."
              <br />
              <span className="text-primary font-semibold">-VP, Human Resources</span>
            </blockquote>
          </div>

          {/* Right content - Speaker image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/professional-woman-speaking-confidently-at-podium-.jpg"
                alt="Dr. Maychelle speaking at event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
