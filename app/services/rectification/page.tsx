import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileEdit, AlertCircle, Clock, Users, Scale } from "lucide-react"
import Link from "next/link"

export default function RectificationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Document Correction
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Rectification of Tax Errors</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Correct legal documents and tax structures through court-ordered rectification when mistakes defeat the
            intended tax consequences or legal arrangements.
          </p>
        </div>

        {/* Key Benefits */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <FileEdit className="h-6 w-6 text-primary mr-3" />
              When Rectification is Available
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Drafting Errors</h3>
                    <p className="text-gray-600">Legal documents don't reflect the parties' true intentions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Tax Planning Mistakes</h3>
                    <p className="text-gray-600">Structures fail to achieve intended tax consequences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Corporate Reorganizations</h3>
                    <p className="text-gray-600">Incorrect implementation of business restructuring</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Trust Documentation</h3>
                    <p className="text-gray-600">Trust deeds contain errors affecting tax treatment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Estate Planning Errors</h3>
                    <p className="text-gray-600">Wills or estate documents don't achieve intended results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Partnership Agreements</h3>
                    <p className="text-gray-600">Partnership structures create unintended tax consequences</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal Test */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Scale className="h-6 w-6 text-primary mr-3" />
              Legal Test for Rectification
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">1. Common Continuing Intention</h3>
                <p className="text-gray-600">
                  All parties must have had a common continuing intention regarding the particular provision or aspect
                  of the agreement in question
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">2. Outward Expression Error</h3>
                <p className="text-gray-600">The outward expression of this intention in the document was erroneous</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">3. Convincing Proof</h3>
                <p className="text-gray-600">
                  There must be convincing proof of the mistake and the intended correction
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">4. No Prejudice to Third Parties</h3>
                <p className="text-gray-600">The rectification must not prejudice the rights of third parties</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Applications */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <AlertCircle className="h-6 w-6 text-primary mr-3" />
              Common Rectification Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Corporate Structures</h3>
                  <p className="text-gray-600">
                    Correcting share structures, dividend entitlements, or corporate reorganizations
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Trust Arrangements</h3>
                  <p className="text-gray-600">
                    Fixing trust terms to achieve intended tax treatment and beneficiary rights
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Real Estate Transactions</h3>
                  <p className="text-gray-600">Correcting property transfers and ownership structures</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Income Splitting</h3>
                  <p className="text-gray-600">Rectifying structures to comply with attribution rules and TOSI</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Succession Planning</h3>
                  <p className="text-gray-600">Correcting estate freeze and succession planning documents</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Cross-Border Structures</h3>
                  <p className="text-gray-600">Fixing international tax planning arrangements</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process Timeline */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Clock className="h-6 w-6 text-primary mr-3" />
              Rectification Process
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Document Review & Analysis</h3>
                  <p className="text-gray-600">Comprehensive review of documents and evidence of original intention</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Evidence Gathering</h3>
                  <p className="text-gray-600">Collect contemporaneous evidence of parties' true intentions</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Court Application</h3>
                  <p className="text-gray-600">File application for rectification with supporting affidavit evidence</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold">Court Order & Implementation</h3>
                  <p className="text-gray-600">Obtain court order and implement corrected documentation</p>
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
              Why Choose Iqbal Law for Rectification
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Court Application Experience</h3>
                    <p className="text-gray-600">
                      Extensive experience with rectification applications in various courts
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Tax Law Expertise</h3>
                    <p className="text-gray-600">Deep understanding of tax consequences and planning structures</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Evidence Development</h3>
                    <p className="text-gray-600">Skilled at gathering and presenting convincing proof of intention</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Strategic Assessment</h3>
                    <p className="text-gray-600">Thorough evaluation of prospects for successful rectification</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-primary text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Correct Legal Documents & Tax Structures</h2>
            <p className="text-lg mb-6 opacity-90">
              Don't let drafting errors defeat your intended tax planning. Our rectification expertise can help restore
              your original intentions through court-ordered corrections.
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
