import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, TrendingUp, CheckCircle, Phone, Calendar } from "lucide-react"

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-white mb-4">Real Estate Tax Law</Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Real Estate Transactions & Tax Disputes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert guidance on real estate tax matters, including principal residence exemptions, capital gains
              disputes, and property transaction structuring.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Home className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-primary">Real Estate Tax Services</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Real estate transactions involve complex tax implications. Our specialized team helps you navigate
                principal residence exemptions, capital gains treatment, and CRA disputes related to property
                transactions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Principal residence exemption disputes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Capital gains vs business income determination</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Property flipping tax issues</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Non-resident property tax compliance</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-semibold text-gray-900">Common Issues</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">Principal Residence Disputes</h4>
                  <p className="text-gray-600">CRA challenges to principal residence exemption claims</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-gray-900">Property Flipping</h4>
                  <p className="text-gray-600">Business income vs capital gains treatment</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">Foreign Buyer Tax</h4>
                  <p className="text-gray-600">Non-resident speculation tax compliance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Protect Your Real Estate Investments</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't let real estate tax disputes jeopardize your investments. Get expert legal guidance to ensure proper
              tax treatment and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                <Calendar className="h-5 w-5 mr-2" />
                Real Estate Tax Consultation
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
