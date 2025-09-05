import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, DollarSign, CheckCircle, Phone, Calendar } from "lucide-react"

export default function GstHstRebatePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-white mb-4">GST/HST Rebates</Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">GST/HST New Housing Rebate</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Maximize your GST/HST new housing rebate claims and resolve disputes with the CRA. Expert guidance on
              eligibility requirements and application processes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Home className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-primary">Housing Rebate Services</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The GST/HST new housing rebate can provide significant savings on your home purchase. Our experienced
                team ensures you claim all eligible rebates and resolves any disputes with the CRA.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">New housing rebate applications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Rental property rebate claims</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Rebate dispute resolution</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Eligibility assessments</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-400">
              <div className="flex items-center space-x-3 mb-6">
                <DollarSign className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-semibold text-green-800">Potential Savings</h3>
              </div>
              <p className="text-green-700 mb-4">
                GST/HST new housing rebates can provide substantial savings on your home purchase:
              </p>
              <div className="space-y-2">
                <div className="text-sm text-green-700">• Up to $6,300 federal GST rebate</div>
                <div className="text-sm text-green-700">• Up to $24,000 Ontario HST rebate</div>
                <div className="text-sm text-green-700">• Additional rebates for rental properties</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Claim Your Housing Rebates</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't miss out on thousands in potential rebates. Contact us to ensure you claim all eligible GST/HST new
              housing rebates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                <Calendar className="h-5 w-5 mr-2" />
                Rebate Consultation
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
