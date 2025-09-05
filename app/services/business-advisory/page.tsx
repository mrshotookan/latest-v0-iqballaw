import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Briefcase, TrendingUp, Clock, Users, Building } from "lucide-react"
import Link from "next/link"

export default function BusinessAdvisoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Business Solutions
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Business Advisory Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive business advisory services combining legal expertise with strategic tax planning to help your
            business thrive while minimizing tax risks and maximizing opportunities.
          </p>
        </div>

        {/* Key Services */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Briefcase className="h-6 w-6 text-primary mr-3" />
              Core Advisory Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Structure Optimization</h3>
                    <p className="text-gray-600">
                      Choose the right corporate structure for tax efficiency and liability protection
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Tax Compliance Management</h3>
                    <p className="text-gray-600">
                      Ensure ongoing compliance with all tax obligations and filing requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Strategic Tax Planning</h3>
                    <p className="text-gray-600">Develop long-term tax strategies aligned with business objectives</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Merger & Acquisition Support</h3>
                    <p className="text-gray-600">Navigate complex M&A transactions with optimal tax structuring</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Risk Assessment & Mitigation</h3>
                    <p className="text-gray-600">
                      Identify and address potential tax risks before they become problems
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Succession Planning</h3>
                    <p className="text-gray-600">Plan for business continuity and intergenerational wealth transfer</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Industry Expertise */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Building className="h-6 w-6 text-primary mr-3" />
              Industry Expertise
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Professional Services</h3>
                <p className="text-gray-600">
                  Law firms, accounting practices, consulting firms, and medical practices
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Real Estate Development</h3>
                <p className="text-gray-600">
                  Property development, construction, and real estate investment companies
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Technology & Innovation</h3>
                <p className="text-gray-600">Software companies, startups, and technology-driven businesses</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Manufacturing & Distribution</h3>
                <p className="text-gray-600">Manufacturing operations, supply chain, and distribution networks</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Family Businesses</h3>
                <p className="text-gray-600">Multi-generational family enterprises and closely-held corporations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advisory Process */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Clock className="h-6 w-6 text-primary mr-3" />
              Our Advisory Process
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Business Assessment</h3>
                  <p className="text-gray-600">
                    Comprehensive review of business structure, operations, and tax position
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Strategic Planning</h3>
                  <p className="text-gray-600">
                    Develop customized strategies aligned with business goals and growth plans
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Implementation Support</h3>
                  <p className="text-gray-600">Guide implementation of recommended strategies and structural changes</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold">Ongoing Partnership</h3>
                  <p className="text-gray-600">Continuous monitoring and adjustment as business needs evolve</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Value Proposition */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 text-primary mr-3" />
              Value We Deliver
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Tax Savings</h3>
                  <p className="text-gray-600">
                    Identify opportunities to reduce tax burden through strategic planning
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Risk Mitigation</h3>
                  <p className="text-gray-600">Proactively address compliance issues and potential audit risks</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Operational Efficiency</h3>
                  <p className="text-gray-600">Streamline tax processes and improve business operations</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Strategic Growth</h3>
                  <p className="text-gray-600">Support business expansion with tax-efficient structures</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Peace of Mind</h3>
                  <p className="text-gray-600">Confidence in compliance and strategic decision-making</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Competitive Advantage</h3>
                  <p className="text-gray-600">Leverage tax strategies for competitive positioning</p>
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
              Why Choose Iqbal Law for Business Advisory
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Integrated Expertise</h3>
                    <p className="text-gray-600">
                      Combined legal and tax expertise for comprehensive business solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Business-Focused Approach</h3>
                    <p className="text-gray-600">Strategies aligned with your business objectives and growth plans</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Proactive Partnership</h3>
                    <p className="text-gray-600">Ongoing relationship focused on long-term business success</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Practical Solutions</h3>
                    <p className="text-gray-600">Real-world solutions that work in today's business environment</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-primary text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Transform Your Business Strategy</h2>
            <p className="text-lg mb-6 opacity-90">
              Partner with us to optimize your business structure, minimize tax risks, and maximize growth
              opportunities. Let's build a strategy that drives your success.
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
