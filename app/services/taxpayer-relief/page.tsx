import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, FileText, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function TaxpayerReliefPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Penalty & Interest Relief
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Taxpayer Relief Applications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Reduce or eliminate penalties and interest charges through strategic taxpayer relief applications under the
            Income Tax Act.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#3E1F1A] hover:bg-[#3E1F1A]/90">
                <Phone className="mr-2 h-5 w-5" />
                Apply for Relief
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
                  <FileText className="mr-2 h-6 w-6 text-[#3E1F1A]" />
                  Taxpayer Relief Provisions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  The CRA has discretionary authority to provide relief from penalties and interest in certain
                  circumstances. Our experienced team knows how to present compelling taxpayer relief applications that
                  maximize your chances of success.
                </p>
                <p className="text-gray-700">
                  We handle all aspects of the relief process, from initial assessment through to appeals of denied
                  applications, ensuring your case is presented in the strongest possible light.
                </p>
              </CardContent>
            </Card>

            {/* Types of Relief */}
            <Card>
              <CardHeader>
                <CardTitle>Types of Taxpayer Relief Available</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Penalty Relief",
                    "Interest Relief",
                    "Late Filing Penalty Cancellation",
                    "Gross Negligence Penalty Relief",
                    "Instalment Penalty Relief",
                    "Failure to File Penalty Relief",
                    "Third Party Penalty Relief",
                    "Extraordinary Circumstances Relief",
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Qualifying Circumstances */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-6 w-6 text-amber-600" />
                  Qualifying Circumstances for Relief
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">Extraordinary Circumstances</h4>
                    <p className="text-gray-600">
                      Natural disasters, serious illness, emotional or mental distress, or other circumstances beyond
                      your control.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">CRA Actions</h4>
                    <p className="text-gray-600">
                      Errors in CRA processing, incorrect information provided by CRA, or unreasonable delays in
                      processing.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Inability to Pay</h4>
                    <p className="text-gray-600">
                      Financial hardship that would make payment of penalties and interest cause undue hardship.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Other Circumstances</h4>
                    <p className="text-gray-600">
                      Any other circumstances that would make it unfair or unreasonable to collect penalties and
                      interest.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Application Process */}
            <Card>
              <CardHeader>
                <CardTitle>Our Taxpayer Relief Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#3E1F1A] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Case Assessment</h4>
                      <p className="text-gray-600">
                        Comprehensive review of your circumstances and potential grounds for relief.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#3E1F1A] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Documentation Gathering</h4>
                      <p className="text-gray-600">
                        Collection and organization of supporting evidence and documentation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#3E1F1A] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Application Preparation</h4>
                      <p className="text-gray-600">
                        Strategic preparation and submission of your taxpayer relief application.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#3E1F1A] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Follow-up & Appeals</h4>
                      <p className="text-gray-600">
                        Ongoing communication with CRA and appeals of denied applications if necessary.
                      </p>
                    </div>
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
                <CardTitle className="text-white">Ready to Apply for Relief?</CardTitle>
                <CardDescription className="text-gray-200">
                  Get expert help with your taxpayer relief application
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

            {/* Success Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Relief Application Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3E1F1A]">10 Years</div>
                  <div className="text-sm text-gray-600">Time limit for most relief applications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3E1F1A]">RC4288</div>
                  <div className="text-sm text-gray-600">CRA form for taxpayer relief requests</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3E1F1A]">90+ Days</div>
                  <div className="text-sm text-gray-600">Typical CRA processing time</div>
                </div>
              </CardContent>
            </Card>

            {/* Related Services */}
            <Card>
              <CardHeader>
                <CardTitle>Related Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href="/services/tax-debt" className="block text-[#3E1F1A] hover:underline">
                    Tax Debt & Collections
                  </Link>
                  <Link href="/services/objection-appeals" className="block text-[#3E1F1A] hover:underline">
                    Objections & Appeals
                  </Link>
                  <Link href="/services/voluntary-disclosures" className="block text-[#3E1F1A] hover:underline">
                    Voluntary Disclosure Program
                  </Link>
                  <Link href="/services/audit-representation" className="block text-[#3E1F1A] hover:underline">
                    CRA Audit Representation
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
