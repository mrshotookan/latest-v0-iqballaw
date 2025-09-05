import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { MapSection } from "@/components/map-section"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">Contact Iqbal Law</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to resolve your tax issues? Get in touch with our experienced legal team for a consultation.
            </p>
          </div>
        </section>

        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>

        <MapSection />
      </main>
      <Footer />
    </div>
  )
}
