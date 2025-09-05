import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, Shield, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function TaxDebtPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            CRA Collections Defense
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tax Debt & CRA Collections</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Protect your assets and resolve tax debt issues with experienced legal representation against CRA collection
            actions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#3E1F1A] hover:bg-[#3E1F1A]/90">
                <Phone className="mr-2 h-5 w-5" />
                Get Immediate Help
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
                  <Shield className="mr-2 h-6 w-6 text-[#3E1F1A]" />
                  Tax Debt Resolution Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Facing CRA collection actions can be overwhelming and financially devastating. Our experienced tax
                  lawyers provide aggressive defense against collection efforts while working to resolve your tax debt
                  through negotiation, payment arrangements, or legal challenges.
                </p>
                <p className="text-gray-700">
                  We understand the urgency of collection matters and provide immediate protection for your assets while
                  developing a comprehensive strategy to resolve your tax obligations.
                </p>
              </CardContent>
            </Card>

            {/* Services Offered */}
            <Card>
              <CardHeader>
                <CardTitle>Our Tax Debt Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Asset Protection Strategies",
                    "Payment Plan Negotiations",
                    "Garnishment Defense",
                    "Bank Account Releases",
                    "Property Lien Challenges",
                    "Third Party Demands",
                    "Taxpayer Relief Applications",
                    "Insolvency Planning",
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Collection Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-6 w-6 text-amber-600" />
                  CRA Collection Actions We Defend Against
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">Wage Garnishments</h4>
                    <p className="text-gray-600">
                      CRA can garnish up to 50% of your wages without court approval. We can negotiate reductions or
                      releases.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Bank Account Freezes</h4>
                    <p className="text-gray-600">
                      Immediate action required when CRA freezes your bank accounts to protect essential funds.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Asset Seizure</h4>
                    <p className="text-gray-600">
                      Protection of real estate, vehicles, and other valuable assets from CRA seizure actions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Third Party Demands</h4>
                    <p className="text-gray-600">
                      When CRA demands payment from your clients, customers, or other third parties.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resolution Options */}
            <Card>
              <CardHeader>
                <CardTitle>Tax Debt Resolution Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Payment Arrangements</h4>
                    <p className="text-gray-600">
                      Negotiate affordable monthly payment plans that fit your financial situation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Taxpayer Relief</h4>
                    <p className="text-gray-600">
                      Apply for penalty and interest relief under the Taxpayer Relief Provisions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Offers in Compromise</h4>
                    <p className="text-gray-600">
                      Settle your tax debt for less than the full amount owed in qualifying circumstances.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Legal Challenges</h4>
                    <p className="text-gray-600">
                      Challenge the underlying tax assessment or collection actions through formal legal proceedings.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Contact */}
            <Card className="bg-red-600 text-white">
              <CardHeader>
                <CardTitle className="text-white">Urgent Collection Action?</CardTitle>
                <CardDescription className="text-red-100">Get immediate legal protection</CardDescription>
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
                    Emergency Consultation
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
                  <Link href="/services/taxpayer-relief" className="block text-[#3E1F1A] hover:underline">
                    Taxpayer Relief Applications
                  </Link>
                  <Link href="/services/audit-representation" className="block text-[#3E1F1A] hover:underline">
                    CRA Audit Representation
                  </Link>
                  <Link href="/services/objection-appeals" className="block text-[#3E1F1A] hover:underline">
                    Objections & Appeals
                  </Link>
                  <Link href="/services/director-liability" className="block text-[#3E1F1A] hover:underline">
                    Director's Liability Defense
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Collection Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>CRA Collection Timeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3E1F1A]">90 Days</div>
                  <div className="text-sm text-gray-600">Normal collection period after assessment</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3E1F1A]">30 Days</div>
                  <div className="text-sm text-gray-600">Notice before garnishment action</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3E1F1A]">Immediate</div>
                  <div className="text-sm text-gray-600">Bank account freeze can happen without notice</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
