import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Search, FileText, AlertTriangle, CheckCircle, Phone, Calendar } from "lucide-react"

export default function AuditRepresentationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <div className="flex items-center space-x-2 mb-4">
              <Badge className="bg-primary text-white">Tax Law</Badge>
              <Badge variant="outline">CRA Audits</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              CRA Audit Representation: Expert Defense for Your Tax Matters
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Facing a CRA audit can be overwhelming and stressful. Our experienced tax lawyers provide strategic
              representation to protect your interests and ensure fair treatment throughout the entire audit process.
            </p>
            <div className="flex items-center space-x-4 mt-6 text-sm text-gray-500">
              <span>Published by Iqbal Law</span>
              <span>•</span>
              <span>CRA Audit Defense</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Received a CRA Audit Notice?</h3>
                  <p className="text-red-700">
                    Don't panic, but don't delay. The actions you take immediately after receiving an audit notice can
                    significantly impact the outcome. Professional representation from the start is crucial.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">Understanding CRA Audits</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              A Canada Revenue Agency audit is a comprehensive examination of your tax returns, financial records, and
              supporting documentation to verify the accuracy of your reported income, deductions, and credits. While
              the word "audit" can be intimidating, understanding the process and having proper representation can make
              all the difference in achieving a favorable outcome.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Types of CRA Audits</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h4 className="font-semibold text-blue-800">Correspondence Audit</h4>
                </div>
                <p className="text-blue-700">
                  Conducted by mail, requesting specific documents or information to verify particular items on your
                  return
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Search className="h-6 w-6 text-green-600" />
                  <h4 className="font-semibold text-green-800">Field Audit</h4>
                </div>
                <p className="text-green-700">
                  In-person examination at your business or home, typically for more complex cases or higher dollar
                  amounts
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common Audit Triggers</h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              While CRA audits can be random, certain factors increase the likelihood of selection:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Significant changes in income or deductions from previous years</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  High-risk industries or professions (cash-intensive businesses, contractors)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Unusual deduction patterns or amounts</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Discrepancies between reported income and lifestyle indicators</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Tips or information from third parties</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights During an Audit</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              As a Canadian taxpayer, you have important rights during the audit process that must be respected:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Right to Professional Representation:</strong>
                  <span className="text-gray-700 ml-2">
                    You can have a lawyer, accountant, or other authorized representative present during all
                    interactions
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Right to Understand the Process:</strong>
                  <span className="text-gray-700 ml-2">
                    CRA must explain the audit process, your rights, and what they're examining
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Right to Reasonable Requests:</strong>
                  <span className="text-gray-700 ml-2">
                    Information requests must be reasonable and relevant to your tax situation
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Right to Privacy:</strong>
                  <span className="text-gray-700 ml-2">
                    Your personal information must be handled confidentially and securely
                  </span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Audit Process: What to Expect</h3>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">1. Initial Contact</h4>
                <p className="text-gray-700">
                  CRA sends an audit notification letter outlining the scope, timeline, and information required
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">2. Information Gathering</h4>
                <p className="text-gray-700">
                  Auditor requests specific documents, records, and explanations related to your tax return
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">3. Examination Phase</h4>
                <p className="text-gray-700">
                  Detailed review of provided information, possible interviews, and additional document requests
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">4. Preliminary Findings</h4>
                <p className="text-gray-700">
                  Auditor shares initial conclusions and proposed adjustments for your response
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">5. Final Assessment</h4>
                <p className="text-gray-700">
                  CRA issues final assessment with any changes, additional taxes, penalties, or interest
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">Critical Mistake to Avoid</h4>
                  <p className="text-yellow-700">
                    Never ignore an audit notice or miss deadlines. Failure to respond can result in arbitrary
                    assessments, additional penalties, and loss of appeal rights. Professional representation ensures
                    all deadlines are met and your interests are protected.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How Professional Representation Helps</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Having experienced legal representation during a CRA audit provides numerous advantages:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Strategic communication with CRA auditors</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Protection of your legal rights throughout the process</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Proper document organization and presentation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Challenge of unreasonable information requests</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Negotiation of audit scope and timeline</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Minimization of additional taxes and penalties</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Preparation for potential appeals if necessary</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Stress reduction and peace of mind</span>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white rounded-lg p-8 my-12">
              <h3 className="text-2xl font-serif font-bold mb-4">Don't Face the CRA Alone</h3>
              <p className="text-blue-100 mb-6">
                CRA audits require immediate attention and strategic response. Our experienced tax lawyers have
                successfully represented hundreds of clients through the audit process, achieving favorable outcomes and
                protecting their interests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  Emergency Consultation
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

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Audit Defense Strategies</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Successful audit defense requires a comprehensive strategy tailored to your specific situation:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Immediate Response:</strong> Quick action to protect your rights and establish professional
                  representation
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Document Review:</strong> Comprehensive analysis of your records and the CRA's requests
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Strategic Communication:</strong> Professional interaction with auditors to present your case
                  effectively
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Evidence Preparation:</strong> Organized presentation of supporting documentation and
                  explanations
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Outcome Negotiation:</strong> Working to minimize additional assessments and penalties
                </span>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
