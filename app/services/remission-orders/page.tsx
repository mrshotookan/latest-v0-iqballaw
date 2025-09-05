import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Heart, Clock, Users, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function RemissionOrdersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Extraordinary Relief
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Remission Orders Under the Financial Administration Act
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Seek extraordinary relief from tax debts through Governor in Council remission orders when exceptional
            circumstances make payment unreasonable or unjust.
          </p>
        </div>

        {/* Key Benefits */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Heart className="h-6 w-6 text-primary mr-3" />
              When Remission Orders Apply
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Extreme Hardship</h3>
                    <p className="text-gray-600">Payment would cause undue hardship or financial ruin</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Unfair or Unjust</h3>
                    <p className="text-gray-600">Collection would be unfair or unjust in the circumstances</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Public Interest</h3>
                    <p className="text-gray-600">Remission serves the public interest or policy objectives</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Exceptional Circumstances</h3>
                    <p className="text-gray-600">Unique or extraordinary circumstances warrant relief</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Administrative Error</h3>
                    <p className="text-gray-600">Government error contributed to the tax liability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Compassionate Grounds</h3>
                    <p className="text-gray-600">Medical, family, or other compassionate circumstances</p>
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
              Common Remission Order Scenarios
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Catastrophic Medical Expenses</h3>
                <p className="text-gray-600">
                  Overwhelming medical costs that make tax payment impossible without severe hardship
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Natural Disasters</h3>
                <p className="text-gray-600">
                  Tax liabilities arising from insurance proceeds or disaster-related circumstances
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Government Policy Changes</h3>
                <p className="text-gray-600">Retroactive tax changes that create unfair or unexpected liabilities</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Elderly or Disabled Taxpayers</h3>
                <p className="text-gray-600">Fixed income seniors or disabled individuals facing collection action</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Business Closure Due to Circumstances</h3>
                <p className="text-gray-600">Business failures due to economic conditions beyond taxpayer control</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Application Requirements */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <AlertTriangle className="h-6 w-6 text-primary mr-3" />
              Application Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Detailed Financial Information</h3>
                  <p className="text-gray-600">Complete financial statements, income, assets, and liabilities</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Supporting Documentation</h3>
                  <p className="text-gray-600">Medical records, insurance claims, or other relevant evidence</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Hardship Evidence</h3>
                  <p className="text-gray-600">Proof of exceptional circumstances and inability to pay</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Tax History</h3>
                  <p className="text-gray-600">Complete tax compliance history and payment efforts</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Legal Arguments</h3>
                  <p className="text-gray-600">Compelling legal and policy arguments for remission</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Public Interest Rationale</h3>
                  <p className="text-gray-600">Explanation of how remission serves broader public interest</p>
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
              Remission Order Process
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Case Assessment & Preparation</h3>
                  <p className="text-gray-600">Thorough evaluation of circumstances and evidence gathering</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Application Submission</h3>
                  <p className="text-gray-600">Submit comprehensive application to Department of Finance</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Government Review Process</h3>
                  <p className="text-gray-600">Department review, CRA consultation, and policy analysis</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold">Governor in Council Decision</h3>
                  <p className="text-gray-600">Final decision by Governor in Council (Cabinet)</p>
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
              Why Choose Iqbal Law for Remission Orders
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Specialized Experience</h3>
                    <p className="text-gray-600">
                      Extensive experience with remission order applications and procedures
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Government Relations</h3>
                    <p className="text-gray-600">Understanding of government decision-making processes and criteria</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Compelling Advocacy</h3>
                    <p className="text-gray-600">Skilled at presenting compelling cases for extraordinary relief</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Compassionate Approach</h3>
                    <p className="text-gray-600">
                      Sensitive handling of difficult personal and financial circumstances
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-primary text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Seek Extraordinary Relief from Tax Debts</h2>
            <p className="text-lg mb-6 opacity-90">
              When exceptional circumstances make tax payment unreasonable or unjust, remission orders may provide the
              relief you need. Let us help you navigate this complex process.
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
