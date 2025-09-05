import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AboutPreview } from "@/components/about-preview"
import { ServicesOverview } from "@/components/services-overview"
import { TestimonialSection } from "@/components/testimonial-section"
import { CtaStrip } from "@/components/cta-strip"
import { FaqSection } from "@/components/faq-section"
import { FinalCta } from "@/components/final-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutPreview />
        <ServicesOverview />
        <TestimonialSection />
        <FaqSection />
        <FinalCta />
        <CtaStrip />
      </main>
      <Footer />
    </div>
  )
}
