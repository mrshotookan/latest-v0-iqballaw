import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Shield, CheckCircle, AlertTriangle, Phone, Calendar } from "lucide-react"

export default function VoluntaryDisclosuresPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center space-x-2 mb-4">
              <Badge className="bg-primary text-white">Tax Law</Badge>
              <Badge variant="outline">CRA Compliance</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Voluntary Disclosures Program (VDP): Your Path to Tax Compliance
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Navigate the CRA's Voluntary Disclosures Program to resolve past tax issues while minimizing penalties and
              interest. Learn how coming forward voluntarily can protect you from prosecution and reduce financial
              consequences.
            </p>
            <div className="flex items-center space-x-4 mt-6 text-sm text-gray-500">
              <span>Published by Iqbal Law</span>
              <span>•</span>
              <span>Tax Compliance Guide</span>
              <span>•</span>
              <span>15 min read</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8">
              <div className="flex items-start space-x-3">
                <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    What is the Voluntary Disclosures Program?
                  </h3>
                  <p className="text-gray-700">
                    The Voluntary Disclosures Program (VDP) is a CRA initiative that allows taxpayers to come forward
                    voluntarily to correct previous tax filings or disclose unreported income without facing prosecution
                    or certain penalties.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">Understanding the VDP Process</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Canada Revenue Agency's Voluntary Disclosures Program represents one of the most valuable
              opportunities for taxpayers to resolve past compliance issues while minimizing the financial and legal
              consequences. This program is designed to encourage voluntary compliance by offering significant benefits
              to those who come forward proactively.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Benefits of VDP</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  <h4 className="font-semibold text-green-800">Protection from Prosecution</h4>
                </div>
                <p className="text-green-700">No criminal prosecution for tax evasion when disclosure is accepted</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <h4 className="font-semibold text-blue-800">Penalty Relief</h4>
                </div>
                <p className="text-blue-700">Waiver of gross negligence penalties and certain other penalties</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">VDP Eligibility Requirements</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              To qualify for the Voluntary Disclosures Program, your disclosure must meet four essential criteria:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Voluntary:</strong>
                  <span className="text-gray-700 ml-2">
                    The disclosure must be made before the CRA initiates any action to obtain the information
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Complete:</strong>
                  <span className="text-gray-700 ml-2">
                    All relevant information and documentation must be provided
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Involves a Penalty:</strong>
                  <span className="text-gray-700 ml-2">
                    The matter must involve potential penalties under tax legislation
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">More than One Year Old:</strong>
                  <span className="text-gray-700 ml-2">
                    The information must relate to a tax year ending more than one year before the disclosure
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">Important Timing Considerations</h4>
                  <p className="text-yellow-700">
                    The voluntary nature of your disclosure is critical. Once the CRA has initiated contact regarding
                    specific tax matters, it may be too late to qualify for VDP benefits. Acting quickly is essential.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common VDP Scenarios</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Voluntary Disclosures Program can address various tax compliance issues, including:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Unreported income from employment, business, or investments</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Unfiled tax returns for multiple years</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Incorrect claims for deductions or credits</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Foreign income and asset reporting failures</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">GST/HST registration and remittance issues</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The VDP Application Process</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Successfully navigating the VDP requires careful preparation and strategic presentation of your case. The
              process typically involves:
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">1. Initial Assessment</h4>
                <p className="text-gray-700">
                  Comprehensive review of your tax situation to determine VDP eligibility and potential benefits
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">2. Documentation Gathering</h4>
                <p className="text-gray-700">
                  Collection and organization of all relevant financial records and supporting documentation
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">3. Disclosure Preparation</h4>
                <p className="text-gray-700">
                  Careful preparation of the VDP application with detailed explanations and calculations
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">4. CRA Negotiation</h4>
                <p className="text-gray-700">Professional representation during CRA review and negotiation of terms</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Professional Representation Matters</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              While taxpayers can submit VDP applications independently, professional legal representation significantly
              improves the likelihood of acceptance and optimal outcomes. Experienced tax lawyers understand:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">How to present your case in the most favorable light</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">CRA policies and procedures for VDP processing</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Strategies to minimize tax liability and interest charges</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">How to handle complex situations involving multiple tax years</span>
              </li>
            </ul>

            <div className="bg-primary text-white rounded-lg p-8 my-12">
              <h3 className="text-2xl font-serif font-bold mb-4">Take Action Today</h3>
              <p className="text-blue-100 mb-6">
                Don't let tax compliance issues escalate. The Voluntary Disclosures Program offers a valuable
                opportunity to resolve past problems while minimizing consequences. Contact our experienced tax law team
                for a confidential consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call (647) 526-1677
                </Button>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h3>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How long does the VDP process take?</h4>
                <p className="text-gray-700">
                  The timeline varies depending on complexity, but most applications are processed within 6-12 months.
                  Simple cases may be resolved more quickly, while complex matters involving multiple years or
                  significant amounts may take longer.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Can I still qualify if the CRA has already contacted me?
                </h4>
                <p className="text-gray-700">
                  It depends on the nature of the CRA contact. If they've initiated an audit or investigation related to
                  the specific matters you want to disclose, you may not qualify. However, contact about unrelated
                  matters doesn't necessarily disqualify you.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What happens if my VDP application is rejected?</h4>
                <p className="text-gray-700">
                  If rejected, you'll still owe the taxes, interest, and penalties, and may face prosecution. This is
                  why proper preparation and professional representation are crucial to maximize your chances of
                  acceptance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
