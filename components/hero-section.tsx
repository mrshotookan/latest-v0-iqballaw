import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/90 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-2xl lg:text-3xl font-serif font-bold leading-tight">
              IQBAL LAW tax lawyer brings deep expertise and years of experience in handling complex litigation matters.
              We help clients resolve disputes with the CRA and navigate a wide range of tax challenges with confidence
              and clarity.
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
              Facing a tax dispute, audit, or CRA reassessment? We help individuals and businesses resolve complex tax
              issues with clarity, confidence, and proven legal expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#3E1F1A] hover:bg-[#3E1F1A]/90 text-white font-semibold px-8 py-4 text-lg w-full sm:w-auto"
                >
                  Book a Consultation
                </Button>
              </Link>
              <Link href="tel:647-526-1677">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg bg-transparent w-full sm:w-auto"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: 647-526-1677
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/nasar-iqbal-professional.png"
              alt="Nasar Iqbal - Professional Tax Lawyer"
              width={500}
              height={600}
              className="rounded-lg shadow-2xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
