import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Scale, FileText, Clock, Users, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function JudicialReviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Federal Court Litigation
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Judicial Review of CRA Decisions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Challenge unlawful CRA administrative decisions through Federal Court judicial review proceedings when
            traditional appeal routes are unavailable or inadequate.
          </p>
        </div>

        {/* Key Benefits */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Scale className="h-6 w-6 text-primary mr-3" />
              When Judicial Review is Available
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Procedural Fairness Violations</h3>
                    <p className="text-gray-600">CRA failed to follow proper administrative procedures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Jurisdictional Issues</h3>
                    <p className="text-gray-600">CRA exceeded its statutory authority or jurisdiction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Unreasonable Decisions</h3>
                    <p className="text-gray-600">Decision lacks transparency, justification, or intelligibility</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Charter Violations</h3>
                    <p className="text-gray-600">Constitutional rights breached during CRA proceedings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">No Appeal Right</h3>
                    <p className="text-gray-600">Administrative decision with no statutory appeal mechanism</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Bias or Conflict</h3>
                    <p className="text-gray-600">Reasonable apprehension of bias in decision-making</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Scenarios */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <FileText className="h-6 w-6 text-primary mr-3" />
              Common Judicial Review Applications
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Third Party Penalty Assessments</h3>
                <p className="text-gray-600">
                  Challenge unreasonable third party penalty assessments under section 163.2
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Requirement to Pay Decisions</h3>
                <p className="text-gray-600">
                  Review CRA requirements to pay issued to third parties under section 224
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Clearance Certificate Refusals</h3>
                <p className="text-gray-600">Challenge unreasonable refusal to issue clearance certificates</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Collection Actions</h3>
                <p className="text-gray-600">Review unlawful or premature collection enforcement measures</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process Timeline */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Clock className="h-6 w-6 text-primary mr-3" />
              Judicial Review Process & Timeline
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Application Filing (30 days)</h3>
                  <p className="text-gray-600">File application within 30 days of decision or knowledge of grounds</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Service & Response (30 days)</h3>
                  <p className="text-gray-600">Serve application on CRA; CRA files response within 30 days</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Certified Tribunal Record</h3>
                  <p className="text-gray-600">CRA provides complete administrative record for court review</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold">Written Arguments & Hearing</h3>
                  <p className="text-gray-600">Exchange memoranda of fact and law; attend court hearing if required</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Warning Box */}
        <Card className="mb-8 border-amber-200 bg-amber-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Critical Time Limits</h3>
                <p className="text-amber-700">
                  Judicial review applications must be filed within 30 days of the impugned decision or when you became
                  aware of the grounds for review. Missing this deadline can result in your application being dismissed
                  regardless of merit.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Users className="h-6 w-6 text-primary mr-3" />
              Why Choose Iqbal Law for Judicial Review
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Federal Court Experience</h3>
                    <p className="text-gray-600">Extensive experience in Federal Court judicial review proceedings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Administrative Law Expertise</h3>
                    <p className="text-gray-600">
                      Deep understanding of administrative law principles and standards of review
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Strategic Case Assessment</h3>
                    <p className="text-gray-600">Thorough evaluation of prospects for success before proceeding</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Comprehensive Record Review</h3>
                    <p className="text-gray-600">Detailed analysis of administrative record to identify legal errors</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-primary text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Challenge Unlawful CRA Decisions</h2>
            <p className="text-lg mb-6 opacity-90">
              Don't let procedural unfairness or unreasonable CRA decisions go unchallenged. Our Federal Court
              litigation experience can help protect your rights.
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
