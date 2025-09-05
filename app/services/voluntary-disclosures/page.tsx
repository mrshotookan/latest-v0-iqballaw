import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Shield, CheckCircle, ArrowRight, BookOpen, Phone, Calendar } from "lucide-react"
import Link from "next/link"

export default function VoluntaryDisclosuresServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Header */}
          <div className="text-center mb-16">
            <Badge className="bg-primary text-white mb-4">Tax Compliance Service</Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Voluntary Disclosures Program (VDP)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Navigate the CRA's Voluntary Disclosures Program to resolve past tax issues while minimizing penalties and
              interest. We help you come forward voluntarily to correct previous tax filings.
            </p>
          </div>

          {/* Service Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-primary">Service Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The Voluntary Disclosures Program is a valuable opportunity for taxpayers to resolve past compliance
                issues while avoiding prosecution and minimizing financial consequences. Our experienced team guides you
                through every step of the process.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Protection from criminal prosecution</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Waiver of gross negligence penalties</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Strategic application preparation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Professional CRA negotiation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-semibold text-gray-900">Key Benefits</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">No Criminal Prosecution</h4>
                  <p className="text-gray-600">Protection from tax evasion charges when disclosure is accepted</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-gray-900">Penalty Relief</h4>
                  <p className="text-gray-600">Waiver of gross negligence and other penalties</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">Interest Savings</h4>
                  <p className="text-gray-600">Potential reduction in interest charges</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Article Link */}
          <div className="bg-primary text-white rounded-2xl p-12 mb-16">
            <div className="text-center">
              <BookOpen className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="text-3xl font-serif font-bold mb-4">Complete VDP Guide</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Read our comprehensive guide covering eligibility requirements, application process, common scenarios,
                and strategic considerations for the Voluntary Disclosures Program.
              </p>
              <Link href="/blog/voluntary-disclosures">
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
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Ready to Resolve Your Tax Issues?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't let tax compliance issues escalate. Contact our experienced team for a confidential consultation
              about your VDP options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Consultation
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
