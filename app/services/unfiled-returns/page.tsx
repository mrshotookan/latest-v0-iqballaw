import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileX, Clock, CheckCircle, Phone, Calendar } from "lucide-react"

export default function UnfiledReturnsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-white mb-4">Tax Compliance</Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">Unfiled Tax Returns</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get back on track with unfiled tax returns. We help you catch up on overdue filings while minimizing
              penalties and protecting you from CRA enforcement action.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <FileX className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-primary">Catch Up Service</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Unfiled tax returns create serious compliance issues and expose you to penalties and CRA enforcement.
                Our experienced team helps you get current while minimizing the financial impact.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Multiple year return preparation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Penalty minimization strategies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">CRA enforcement protection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Voluntary disclosure options</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-400">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="h-8 w-8 text-red-600" />
                <h3 className="text-2xl font-semibold text-red-800">Time is Critical</h3>
              </div>
              <p className="text-red-700 mb-4">
                The longer you wait to file overdue returns, the more penalties and interest accumulate. CRA enforcement
                action can include:
              </p>
              <div className="space-y-2">
                <div className="text-sm text-red-700">• Bank account freezing</div>
                <div className="text-sm text-red-700">• Wage garnishment</div>
                <div className="text-sm text-red-700">• Asset seizure</div>
                <div className="text-sm text-red-700">• Criminal prosecution</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Get Current with Your Tax Filings</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't let unfiled returns escalate into serious legal problems. Contact us today to develop a strategy for
              getting current with minimal penalties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                <Calendar className="h-5 w-5 mr-2" />
                Urgent Filing Consultation
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
