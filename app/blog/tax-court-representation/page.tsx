import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gavel, Scale, FileText, CheckCircle, AlertTriangle, Phone, Calendar } from "lucide-react"

export default function TaxCourtRepresentationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <div className="flex items-center space-x-2 mb-4">
              <Badge className="bg-primary text-white">Tax Litigation</Badge>
              <Badge variant="outline">Court Representation</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Tax Court of Canada Representation: Expert Litigation for Complex Tax Disputes
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              When tax disputes escalate to the Tax Court of Canada, you need experienced litigation counsel. Our tax
              lawyers provide strategic representation in formal court proceedings to protect your interests and achieve
              favorable outcomes.
            </p>
            <div className="flex items-center space-x-4 mt-6 text-sm text-gray-500">
              <span>Published by Iqbal Law</span>
              <span>•</span>
              <span>Tax Court Litigation</span>
              <span>•</span>
              <span>18 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8">
              <div className="flex items-start space-x-3">
                <Gavel className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Understanding Tax Court Proceedings</h3>
                  <p className="text-gray-700">
                    The Tax Court of Canada is a specialized federal court that hears disputes between taxpayers and the
                    Canada Revenue Agency. It's often the final avenue for resolving complex tax disagreements.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">When Tax Disputes Go to Court</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Tax Court proceedings represent the formal legal process for resolving disputes with the Canada Revenue
              Agency when other resolution methods have been exhausted. These cases involve complex legal and factual
              issues that require specialized knowledge of tax law, court procedures, and litigation strategy.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Path to Tax Court</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Before a case reaches Tax Court, taxpayers typically go through several stages:
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">1. Initial Assessment</h4>
                <p className="text-gray-700">
                  CRA issues an assessment or reassessment that the taxpayer disagrees with
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">2. Notice of Objection</h4>
                <p className="text-gray-700">
                  Taxpayer files a formal objection within 90 days (or one year for individuals)
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">3. Appeals Review</h4>
                <p className="text-gray-700">CRA Appeals Division reviews the objection and issues a decision</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">4. Tax Court Appeal</h4>
                <p className="text-gray-700">
                  If unsatisfied with the Appeals decision, taxpayer can appeal to Tax Court within 90 days
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Types of Tax Court Procedures</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <FileText className="h-6 w-6 text-green-600" />
                  <h4 className="font-semibold text-green-800">Informal Procedure</h4>
                </div>
                <p className="text-green-700 mb-3">For disputes involving:</p>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Federal tax up to $25,000 per year</li>
                  <li>• GST/HST up to $50,000</li>
                  <li>• Employment Insurance and CPP appeals</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Scale className="h-6 w-6 text-blue-600" />
                  <h4 className="font-semibold text-blue-800">General Procedure</h4>
                </div>
                <p className="text-blue-700 mb-3">For larger disputes involving:</p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Federal tax over $25,000 per year</li>
                  <li>• GST/HST over $50,000</li>
                  <li>• Complex legal or factual issues</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">Critical Timing Requirements</h4>
                  <p className="text-yellow-700">
                    You have only 90 days from the date of the Notice of Confirmation or Reassessment to file an appeal
                    with Tax Court. Missing this deadline means losing your right to challenge the CRA's decision in
                    court.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common Tax Court Cases</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Tax Court handles a wide variety of disputes between taxpayers and the CRA:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Income inclusion disputes (unreported income, benefit assessments)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Deduction and expense disallowances</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Gross negligence penalty assessments</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">GST/HST registration and input tax credit disputes</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Director liability assessments</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Tax residency determinations</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Transfer pricing and international tax issues</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Litigation Process</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Tax Court litigation follows a structured process that requires careful preparation and strategic
              execution:
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Notice of Appeal</h4>
                <p className="text-gray-700">
                  Filing the formal document that initiates the court proceeding and outlines your grounds for appeal
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Reply and Pleadings</h4>
                <p className="text-gray-700">
                  Exchange of legal documents between parties outlining their respective positions and legal arguments
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Discovery Process</h4>
                <p className="text-gray-700">
                  Examination of witnesses, document production, and gathering of evidence to support your case
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Pre-Trial Preparation</h4>
                <p className="text-gray-700">
                  Comprehensive case preparation including witness preparation, expert reports, and legal research
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Trial or Hearing</h4>
                <p className="text-gray-700">
                  Presentation of evidence, examination of witnesses, and legal arguments before a Tax Court judge
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Judgment and Appeals</h4>
                <p className="text-gray-700">Court decision and potential appeals to higher courts if necessary</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Expert Representation is Essential</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Tax Court litigation is complex and technical, requiring specialized expertise in both tax law and court
              procedures:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Deep understanding of tax legislation and case law</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Experience with Tax Court procedures and rules</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Strategic case development and presentation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Skilled examination and cross-examination of witnesses</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive legal research and analysis</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Effective written and oral advocacy skills</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Settlement negotiation and alternative dispute resolution</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Cost-benefit analysis and litigation strategy</span>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white rounded-lg p-8 my-12">
              <h3 className="text-2xl font-serif font-bold mb-4">Experienced Tax Court Advocates</h3>
              <p className="text-blue-100 mb-6">
                With over 20 years of courtroom experience, our tax lawyers have successfully represented clients in
                hundreds of Tax Court cases. We understand what it takes to build winning cases and achieve favorable
                outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  Case Evaluation
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

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Building a Strong Case</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Success in Tax Court requires meticulous preparation and strategic presentation of your case:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Factual Foundation:</strong> Comprehensive gathering and organization of all relevant
                  documents and evidence
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Legal Analysis:</strong> Thorough research of applicable tax law, regulations, and precedent
                  cases
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Expert Testimony:</strong> Engagement of qualified experts when technical or specialized
                  knowledge is required
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Strategic Presentation:</strong> Clear, compelling presentation of facts and legal arguments
                  to the court
                </span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Settlement Opportunities</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              While preparing for trial, experienced counsel also explores settlement opportunities that may resolve the
              dispute more efficiently:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Pre-trial settlement conferences with CRA counsel</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Mediation and alternative dispute resolution</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Partial settlement of agreed issues</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Cost-effective resolution strategies</span>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
