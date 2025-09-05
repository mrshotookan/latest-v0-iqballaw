import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle, ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export function FaqSection() {
  const faqs = [
    "What should I do if I've received a CRA audit letter?",
    "Can I dispute a CRA reassessment?",
    "What is the Voluntary Disclosures Program?",
    "When should I contact a tax lawyer instead of an accountant?",
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-gold mr-3" />
            <h2 className="text-3xl font-serif font-bold text-navy">Have Questions About Your Tax Issue?</h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid gap-4 mb-8">
                {faqs.map((question, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100">
                    <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">{question}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-navy hover:bg-navy/90 text-white px-6 py-3">
                  <Link href="/faq" className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    View All FAQs
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-white px-6 py-3 bg-transparent"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Contact Me With Your Question
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
