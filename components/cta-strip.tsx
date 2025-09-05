import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaStrip() {
  return (
    <section className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Let's Resolve Your Tax Problem Today</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Don't let tax issues overwhelm you. Get expert legal representation and peace of mind with our proven track
          record of success.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-[#3E1F1A] hover:bg-[#3E1F1A]/90 text-white font-semibold px-12 py-4 text-lg">
            Request Consultation
          </Button>
        </Link>
      </div>
    </section>
  )
}
