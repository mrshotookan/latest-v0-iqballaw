import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Search, CheckCircle, Phone, Calendar } from "lucide-react"

export default function NetWorthAuditsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-white mb-4">CRA Audits</Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">Net Worth Audits</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert defense against CRA net worth audits and lifestyle assessments. Protect yourself from arbitrary
              income determinations based on asset accumulation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Calculator className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-primary">Net Worth Defense</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Net worth audits examine your lifestyle and asset accumulation to determine if your reported income is
                sufficient to support your standard of living. These invasive audits require expert defense.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Net worth audit representation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Asset source documentation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Lifestyle audit defense</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Income reconstruction challenges</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-400">
              <div className="flex items-center space-x-3 mb-6">
                <Search className="h-8 w-8 text-yellow-600" />
                <h3 className="text-2xl font-semibold text-yellow-800">Audit Triggers</h3>
              </div>
              <p className="text-yellow-700 mb-4">Net worth audits are often triggered by:</p>
              <div className="space-y-2">
                <div className="text-sm text-yellow-700">• Large asset purchases relative to reported income</div>
                <div className="text-sm text-yellow-700">• Significant lifestyle changes</div>
                <div className="text-sm text-yellow-700">• Cash-intensive businesses</div>
                <div className="text-sm text-yellow-700">• Third-party information discrepancies</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Defend Against Lifestyle Audits</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Net worth audits can result in significant reassessments. Get expert representation to challenge the CRA's
              assumptions and protect your interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                <Calendar className="h-5 w-5 mr-2" />
                Net Worth Audit Defense
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
