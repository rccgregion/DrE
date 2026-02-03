import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ExperienceHighlights } from "@/components/experience-highlights"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceHighlights />
      <EducationSection />
      <ContactSection />
    </main>
  )
}
