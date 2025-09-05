import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, TrendingUp, Shield, Clock, Users, Target } from "lucide-react"
import Link from "next/link"

export default function TaxPlanningPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Strategic Planning
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Tax Planning & Structuring</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Develop sophisticated tax strategies and structures to minimize tax liabilities while ensuring full
            compliance with Canadian tax laws and regulations.
          </p>
        </div>

        {/* Key Benefits */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Target className="h-6 w-6 text-primary mr-3" />
              Strategic Tax Planning Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Income Tax Optimization</h3>
                    <p className="text-gray-600">
                      Minimize personal and corporate income tax through strategic planning
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Corporate Restructuring</h3>
                    <p className="text-gray-600">Design tax-efficient corporate structures and reorganizations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Estate & Succession Planning</h3>
                    <p className="text-gray-600">Minimize estate taxes and facilitate smooth business succession</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cross-Border Planning</h3>
                    <p className="text-gray-600">Navigate international tax treaties and cross-border structures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Investment Structuring</h3>
                    <p className="text-gray-600">Optimize investment holdings and capital gains strategies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Compliance Assurance</h3>
                    <p className="text-gray-600">Ensure all strategies comply with current tax laws and regulations</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Planning Areas */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 text-primary mr-3" />
              Key Planning Areas
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Personal Tax Planning</h3>
                <p className="text-gray-600">
                  Income splitting, RRSP/TFSA optimization, capital gains planning, and retirement strategies
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Corporate Tax Strategies</h3>
                <p className="text-gray-600">
                  Small business deduction optimization, dividend vs. salary planning, and corporate restructuring
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Business Succession Planning</h3>
                <p className="text-gray-600">
                  Estate freezes, family trusts, and intergenerational wealth transfer strategies
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Real Estate Planning</h3>
                <p className="text-gray-600">
                  Principal residence exemption, rental property structures, and real estate investment trusts
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">International Tax Planning</h3>
                <p className="text-gray-600">
                  Non-resident planning, foreign reporting compliance, and treaty optimization
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Planning Process */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Clock className="h-6 w-6 text-primary mr-3" />
              Our Tax Planning Process
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Comprehensive Assessment</h3>
                  <p className="text-gray-600">
                    Analyze current financial situation, tax position, and planning objectives
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Strategy Development</h3>
                  <p className="text-gray-600">
                    Design customized tax strategies aligned with your goals and risk tolerance
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Implementation Planning</h3>
                  <p className="text-gray-600">Create detailed implementation timeline with specific action steps</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold">Ongoing Monitoring</h3>
                  <p className="text-gray-600">
                    Regular review and adjustment of strategies as laws and circumstances change
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Management */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Shield className="h-6 w-6 text-primary mr-3" />
              Risk Management & Compliance
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">GAAR Compliance</h3>
                  <p className="text-gray-600">
                    Ensure strategies don't trigger General Anti-Avoidance Rule provisions
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Attribution Rule Navigation</h3>
                  <p className="text-gray-600">Structure income splitting to comply with attribution and TOSI rules</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Substance Over Form</h3>
                  <p className="text-gray-600">
                    Ensure all structures have genuine business purpose and economic substance
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Documentation Standards</h3>
                  <p className="text-gray-600">Maintain proper documentation to support tax positions and strategies</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Legislative Monitoring</h3>
                  <p className="text-gray-600">
                    Stay current with tax law changes and their impact on existing strategies
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">CRA Relations</h3>
                  <p className="text-gray-600">
                    Maintain positive relationships and proactive communication with tax authorities
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Users className="h-6 w-6 text-primary mr-3" />
              Why Choose Iqbal Law for Tax Planning
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Advanced Tax Expertise</h3>
                    <p className="text-gray-600">Deep knowledge of complex tax laws and planning opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Customized Solutions</h3>
                    <p className="text-gray-600">
                      Tailored strategies that fit your unique circumstances and objectives
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Proactive Approach</h3>
                    <p className="text-gray-600">Anticipate changes and adjust strategies before they impact you</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Long-term Partnership</h3>
                    <p className="text-gray-600">Ongoing relationship to adapt strategies as your situation evolves</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-primary text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Optimize Your Tax Strategy Today</h2>
            <p className="text-lg mb-6 opacity-90">
              Don't leave tax savings to chance. Our sophisticated planning strategies can help you minimize taxes while
              ensuring full compliance with Canadian tax laws.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="tel:647-526-1677">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  Call 647-526-1677
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
