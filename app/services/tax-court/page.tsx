import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gavel, Scale, CheckCircle, ArrowRight, BookOpen, Phone, Calendar } from "lucide-react"
import Link from "next/link"

export default function TaxCourtServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Header */}
          <div className="text-center mb-16">
            <Badge className="bg-primary text-white mb-4">Tax Litigation Service</Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Tax Court of Canada Representation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experienced litigation representation in Tax Court proceedings. We advocate for you in formal court
              hearings and complex tax disputes.
            </p>
          </div>

          {/* Service Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Gavel className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-primary">Expert Litigation</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                When tax disputes escalate to the Tax Court of Canada, you need experienced litigation counsel with deep
                knowledge of tax law and court procedures. We provide strategic representation to achieve favorable
                outcomes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">20+ years of courtroom experience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive case preparation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Strategic legal arguments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Settlement negotiation expertise</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Scale className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-semibold text-gray-900">Court Procedures</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">Informal Procedure</h4>
                  <p className="text-gray-600">For disputes up to $25,000 federal tax or $50,000 GST/HST</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-gray-900">General Procedure</h4>
                  <p className="text-gray-600">For larger disputes and complex legal issues</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">Appeals Process</h4>
                  <p className="text-gray-600">Federal Court of Appeal and Supreme Court representation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Article Link */}
          <div className="bg-primary text-white rounded-2xl p-12 mb-16">
            <div className="text-center">
              <BookOpen className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="text-3xl font-serif font-bold mb-4">Complete Tax Court Guide</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Understand the Tax Court process, from filing appeals to trial preparation. Learn about procedures,
                timelines, and what to expect during litigation.
              </p>
              <Link href="/blog/tax-court-representation">
                <Button className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-3">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Read Complete Guide
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Experienced Tax Court Advocates</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              With over 20 years of courtroom experience, we have successfully represented clients in hundreds of Tax
              Court cases. Contact us for a case evaluation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                <Calendar className="h-5 w-5 mr-2" />
                Case Evaluation
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 bg-transparent"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (647) 526-1677
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
