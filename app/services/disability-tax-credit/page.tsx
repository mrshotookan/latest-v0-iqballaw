import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, Heart, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function DisabilityTaxCreditPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Disability Tax Benefits
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Disability Tax Credit (DTC) Claims & Appeals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert assistance with Disability Tax Credit applications, appeals, and maximizing available tax benefits
            for individuals with disabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#3E1F1A] hover:bg-[#3E1F1A]/90">
                <Phone className="mr-2 h-5 w-5" />
                Get DTC Help
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
                  <Heart className="mr-2 h-6 w-6 text-[#3E1F1A]" />
                  Disability Tax Credit Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  The Disability Tax Credit provides significant tax relief for individuals with severe and prolonged
                  impairments. Our experienced team helps navigate the complex application process and appeals denied
                  claims to ensure you receive all benefits you're entitled to.
                </p>
                <p className="text-gray-700">
                  We understand the challenges faced by individuals with disabilities and their families, and we're
                  committed to securing the maximum tax benefits available while handling all administrative burdens.
                </p>
              </CardContent>
            </Card>

            {/* Services Offered */}
            <Card>
              <CardHeader>
                <CardTitle>Our DTC Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "DTC Application Assistance",
                    "Medical Form Preparation",
                    "Appeal Representation",
                    "Retroactive Claims",
                    "RDSP Eligibility",
                    "Child Disability Benefit",
                    "Medical Expense Claims",
                    "Caregiver Tax Credits",
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Qualifying Conditions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-6 w-6 text-amber-600" />
                  Qualifying Impairments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">Physical Impairments</h4>
                    <p className="text-gray-600">
                      Walking, feeding, dressing, elimination functions, vision, hearing, and speaking impairments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mental Functions</h4>
                    <p className="text-gray-600">
                      Memory, problem-solving, goal-setting, judgment, and adaptive functioning impairments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Life-Sustaining Therapy</h4>
                    <p className="text-gray-600">
                      Therapy essential to sustain vital functions, requiring significant time commitment (14+ hours per
                      week).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cumulative Effects</h4>
                    <p className="text-gray-600">
                      Multiple impairments that together significantly restrict daily living activities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits Available */}
            <Card>
              <CardHeader>
                <CardTitle>Available Tax Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Disability Tax Credit</h4>
                    <p className="text-gray-600">
                      Non-refundable tax credit worth over $8,000 annually, transferable to supporting family members.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Child Disability Benefit</h4>
                    <p className="text-gray-600">
                      Additional Canada Child Benefit supplement for families with children eligible for DTC.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">RDSP Eligibility</h4>
                    <p className="text-gray-600">
                      Access to Registered Disability Savings Plan with government grants and bonds.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Medical Expenses</h4>
                    <p className="text-gray-600">
                      Enhanced medical expense deductions and access to additional disability-related expenses.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Appeal Process */}
            <Card>
              <CardHeader>
                <CardTitle>DTC Appeal Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#3E1F1A] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Notice of Determination Review</h4>
                      <p className="text-gray-600">
                        Request reconsideration within 90 days of denial with additional medical evidence.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#3E1F1A] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Tax Court Appeal</h4>
                      <p className="text-gray-600">Appeal to Tax Court of Canada if reconsideration is unsuccessful.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#3E1F1A] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Legal Representation</h4>
                      <p className="text-gray-600">
                        Professional representation throughout the appeal process with medical expert support.
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
                <CardTitle className="text-white">Need DTC Assistance?</CardTitle>
                <CardDescription className="text-gray-200">
                  Get expert help with your disability tax credit claim
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

            {/* DTC Facts */}
            <Card>
              <CardHeader>
                <CardTitle>DTC Facts & Figures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3E1F1A]">$8,870</div>
                  <div className="text-sm text-gray-600">Maximum DTC amount for 2024</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3E1F1A]">10 Years</div>
                  <div className="text-sm text-gray-600">Retroactive claim period available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3E1F1A]">T2201</div>
                  <div className="text-sm text-gray-600">Disability tax credit certificate form</div>
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
                  <Link href="/services/taxpayer-relief" className="block text-[#3E1F1A] hover:underline">
                    Taxpayer Relief Applications
                  </Link>
                  <Link href="/services/objection-appeals" className="block text-[#3E1F1A] hover:underline">
                    Objections & Appeals
                  </Link>
                  <Link href="/services/tax-court" className="block text-[#3E1F1A] hover:underline">
                    Tax Court Representation
                  </Link>
                  <Link href="/services/tax-planning" className="block text-[#3E1F1A] hover:underline">
                    Tax Planning & Structuring
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
