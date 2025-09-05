import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, Globe, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function TaxResidencyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            International Tax Law
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tax Residency & Canadian Tax Obligations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert guidance on determining tax residency status and understanding your Canadian tax obligations in
            complex cross-border situations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#3E1F1A] hover:bg-[#3E1F1A]/90">
                <Phone className="mr-2 h-5 w-5" />
                Get Residency Advice
              </Button>
            </Link>
            <Link href="tel:647-526-1677">
              <Button variant="outline" size="lg">
                Call 647-526-1677
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-6 w-6 text-[#3E1F1A]" />
                  Tax Residency Determination
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Tax residency determination is one of the most complex areas of Canadian tax law, with significant
                  implications for your worldwide tax obligations. Our specialized team provides comprehensive analysis
                  and strategic advice for individuals and businesses navigating residency issues.
                </p>
                <p className="text-gray-700">
                  Whether you're moving to or from Canada, maintaining ties in multiple countries, or facing a CRA
                  residency challenge, we ensure you understand your obligations and optimize your tax position.
                </p>
              </CardContent>
            </Card>

            {/* Services Offered */}
            <Card>
              <CardHeader>
                <CardTitle>Our Tax Residency Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Residency Status Determination",
                    "Departure Tax Planning",
                    "Deemed Disposition Analysis",
                    "Treaty Tie-Breaker Rules",
                    "CRA Residency Challenges",
                    "Immigration Tax Planning",
                    "Factual Residency Analysis",
                    "Sojourner Rules Application",
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Residency Factors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-6 w-6 text-amber-600" />
                  Key Residency Factors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">Residential Ties</h4>
                    <p className="text-gray-600">
                      Primary ties include dwelling, spouse/partner, and dependents. Secondary ties include personal
                      property, social ties, and economic ties.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Time Spent in Canada</h4>
                    <p className="text-gray-600">
                      The 183-day sojourner rule and patterns of presence in Canada over multiple years.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Purpose of Stay</h4>
                    <p className="text-gray-600">
                      Whether your presence in Canada is temporary or indicates an intention to establish residence.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Treaty Considerations</h4>
                    <p className="text-gray-600">
                      Application of tax treaty tie-breaker rules when you're resident in multiple countries.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Scenarios */}
            <Card>
              <CardHeader>
                <CardTitle>Common Tax Residency Scenarios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Emigration from Canada</h4>
                    <p className="text-gray-600">
                      Planning your departure to minimize deemed disposition tax and establish non-resident status.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Immigration to Canada</h4>
                    <p className="text-gray-600">
                      Understanding when you become a Canadian tax resident and your worldwide income obligations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Temporary Residents</h4>
                    <p className="text-gray-600">
                      Work permit holders, students, and others with temporary status navigating residency rules.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Dual Residents</h4>
                    <p className="text-gray-600">
                      Individuals maintaining ties in multiple countries and treaty tie-breaker applications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="bg-[#3E1F1A] text-white">
              <CardHeader>
                <CardTitle className="text-white">Uncertain About Your Residency?</CardTitle>
                <CardDescription className="text-gray-200">
                  Get expert analysis of your tax residency status
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>647-526-1677</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>info@iqbalslaw.com</span>
                </div>
                <Link href="/contact" className="block">
                  <Button variant="secondary" className="w-full">
                    Schedule Consultation
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Related Services */}
            <Card>
              <CardHeader>
                <CardTitle>Related Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href="/services/cross-border-trusts" className="block text-[#3E1F1A] hover:underline">
                    Cross-Border Trust Planning
                  </Link>
                  <Link href="/services/tax-planning" className="block text-[#3E1F1A] hover:underline">
                    Tax Planning & Structuring
                  </Link>
                  <Link href="/services/voluntary-disclosures" className="block text-[#3E1F1A] hover:underline">
                    Voluntary Disclosure Program
                  </Link>
                  <Link href="/services/objection-appeals" className="block text-[#3E1F1A] hover:underline">
                    Objections & Appeals
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Residency Facts */}
            <Card>
              <CardHeader>
                <CardTitle>Tax Residency Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3E1F1A]">183 Days</div>
                  <div className="text-sm text-gray-600">Sojourner rule threshold for tax residency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3E1F1A]">NR73</div>
                  <div className="text-sm text-gray-600">CRA form to determine residency status</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3E1F1A]">Worldwide</div>
                  <div className="text-sm text-gray-600">Income reporting requirement for residents</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
