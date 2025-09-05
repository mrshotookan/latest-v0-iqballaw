import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TeamProfiles } from "@/components/team-profiles"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CtaStrip } from "@/components/cta-strip"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">About Iqbal Law</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Meet the experienced legal professionals dedicated to protecting your rights and resolving your tax
              challenges
            </p>
          </div>
        </section>

        <TeamProfiles />
        <WhyChooseUs />
        <CtaStrip />
      </main>
      <Footer />
    </div>
  )
}
