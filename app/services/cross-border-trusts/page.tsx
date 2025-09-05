import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, Scale, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function CrossBorderTrustsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Cross-Border Tax Planning
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cross-Border Trust Planning & Compliance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert guidance on international trust structures, compliance obligations, and tax optimization strategies
            for cross-border wealth management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#3E1F1A] hover:bg-[#3E1F1A]/90">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
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
                  <Scale className="mr-2 h-6 w-6 text-[#3E1F1A]" />
                  Cross-Border Trust Expertise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Cross-border trust planning involves complex international tax laws and reporting requirements. Our
                  specialized team provides comprehensive guidance on establishing, managing, and maintaining compliance
                  for trusts with international elements.
                </p>
                <p className="text-gray-700">
                  Whether you're dealing with foreign trusts, beneficiaries in multiple jurisdictions, or cross-border
                  estate planning, we ensure full compliance while optimizing your tax position.
                </p>
              </CardContent>
            </Card>

            {/* Services Offered */}
            <Card>
              <CardHeader>
                <CardTitle>Our Cross-Border Trust Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Foreign Trust Reporting (T1141, T1142)",
                    "Trust Structure Planning",
                    "Beneficiary Tax Obligations",
                    "Distribution Planning",
                    "Treaty Benefits Analysis",
                    "Compliance Reviews",
                    "CRA Audit Defense",
                    "Voluntary Disclosure Programs",
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Common Issues */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-6 w-6 text-amber-600" />
                  Common Cross-Border Trust Issues
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">Unreported Foreign Trusts</h4>
                    <p className="text-gray-600">
                      Failure to report foreign trust interests can result in significant penalties and ongoing
                      compliance issues.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Deemed Disposition Rules</h4>
                    <p className="text-gray-600">
                      Understanding when trust assets are subject to deemed disposition and capital gains taxation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Attribution Rules</h4>
                    <p className="text-gray-600">
                      Navigating complex attribution rules that may apply to trust income and distributions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Treaty Interpretation</h4>
                    <p className="text-gray-600">
                      Properly applying tax treaty provisions to minimize double taxation and optimize tax outcomes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card>
              <CardHeader>
                <CardTitle>Why Choose Iqbal Law for Cross-Border Trust Matters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">International Expertise</h4>
                    <p className="text-gray-600">
                      Deep understanding of international tax treaties and cross-border compliance requirements.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Planning</h4>
                    <p className="text-gray-600">
                      Holistic approach considering all jurisdictions and stakeholders involved in your trust structure.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Proactive Compliance</h4>
                    <p className="text-gray-600">
                      Ongoing monitoring and advice to ensure continued compliance with evolving regulations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Strategic Optimization</h4>
                    <p className="text-gray-600">
                      Tax-efficient structuring that maximizes benefits while maintaining full compliance.
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
                <CardTitle className="text-white">Need Cross-Border Trust Advice?</CardTitle>
                <CardDescription className="text-gray-200">
                  Get expert guidance on your international trust matters
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
                  <Link href="/services/estate-planning" className="block text-[#3E1F1A] hover:underline">
                    Estate Planning & Tax Strategy
                  </Link>
                  <Link href="/services/tax-residency" className="block text-[#3E1F1A] hover:underline">
                    Tax Residency Determination
                  </Link>
                  <Link href="/services/voluntary-disclosures" className="block text-[#3E1F1A] hover:underline">
                    Voluntary Disclosure Program
                  </Link>
                  <Link href="/services/tax-planning" className="block text-[#3E1F1A] hover:underline">
                    Tax Planning & Structuring
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Key Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Cross-Border Trust Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3E1F1A]">$15,000+</div>
                  <div className="text-sm text-gray-600">Potential penalties for unreported foreign trusts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3E1F1A]">T1141/T1142</div>
                  <div className="text-sm text-gray-600">Required reporting forms for foreign trusts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3E1F1A]">21-Year Rule</div>
                  <div className="text-sm text-gray-600">Deemed disposition timeline for trusts</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
