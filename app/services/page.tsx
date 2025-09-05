import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesIntro } from "@/components/services-intro"
import { ServicesList } from "@/components/services-list"
import { CtaStrip } from "@/components/cta-strip"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">Our Tax Law Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive legal solutions for all your Canadian tax law needs, backed by decades of experience
            </p>
          </div>
        </section>

        <ServicesIntro />
        <ServicesList />
        <CtaStrip />
      </main>
      <Footer />
    </div>
  )
}
