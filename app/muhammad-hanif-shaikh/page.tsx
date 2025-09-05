import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, Award, CheckCircle, Phone, Mail, Calendar, GraduationCap, Globe, Building } from "lucide-react"

export default function MuhammadHanifShaikhPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent text-white px-4 py-2 text-sm font-medium">Tax Advisor / Consultant</Badge>
              <h1 className="text-4xl font-serif font-bold leading-tight">Muhammad Hanif Shaikh</h1>
              <p className="text-lg text-blue-100 font-medium">LL.M. (Taxation), MSc Finance and Financial Law</p>
              <p className="text-xl text-blue-100 leading-relaxed">
                With over 25 years of focused experience in Domestic and International Tax Law, Hanif is a trusted
                advisor on complex tax matters, offering clients deep insights and strategic solutions across a wide
                range of tax-related issues. His career spans senior roles in both international and Canadian public
                sectors, bringing a unique depth of insight into complex tax issues, compliance, and government
                regulation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Hanif
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/muhammad-hanif-shaikh-professional.jpg"
                alt="Muhammad Hanif Shaikh - Tax Advisor"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">25+ Years</h3>
              <p className="text-gray-600">Tax Law Experience</p>
            </div>
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">LL.M.</h3>
              <p className="text-gray-600">Taxation (Osgoode Hall)</p>
            </div>
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">International</h3>
              <p className="text-gray-600">Cross-Border Expert</p>
            </div>
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Public Sector</h3>
              <p className="text-gray-600">Senior Policy Advisor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Professional Background</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hanif's career spans senior roles in both international and Canadian public sectors, bringing a unique
                depth of insight into complex tax issues, compliance, and government regulation. He offers clients
                comprehensive insights into both domestic and cross-border tax matters.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hanif began his career as an Income Tax Officer with the Federal Board of Revenue (FBR) in Pakistan,
                where he spent 20 years leading high-level tax investigations, compliance audits, handling high-stakes
                Income Tax / GST / Federal Excise matters, compliance enforcements and representing the department in
                litigation and dispute resolution. During this time, he gained extensive experience in Corporate
                Taxation, Income Tax / GST Law, International Tax Treaties and Tax Dispute Resolution.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                He later served as a Senior Policy Advisor at the Treasury Board Secretariat of Ontario, where he
                advised on public finance, tax policy, revenue measures and regulatory compliance across government
                ministries.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hanif holds an LLM in Taxation from Osgoode Hall Law School, one of Canada's top programs for tax law,
                and an MSc in Finance and Financial Law from SOAS, University of London, UK, giving him a powerful blend
                of legal and financial acumen. This academic and professional background uniquely positions him to
                advise individuals, businesses, and public institutions on Domestic and Cross-Border Tax matters, CRA
                Audits, Tax Dispute Resolution, and Financial Regulatory Compliance.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Academic Excellence</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">LL.M. in Taxation</span>
                    <p className="text-gray-600">Osgoode Hall Law School - Canada's top tax law program</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">MSc Finance and Financial Law</span>
                    <p className="text-gray-600">SOAS, University of London, UK</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Unique Expertise</span>
                    <p className="text-gray-600">Powerful blend of legal and financial acumen</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Experience */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Career Experience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A distinguished career spanning international and Canadian public sectors with expertise in tax law,
              policy development, and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Federal Board of Revenue (FBR)</h3>
                  <p className="text-accent font-medium">Income Tax Officer - 20 Years</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Led high-level tax investigations and compliance audits</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Handled high-stakes Income Tax / GST / Federal Excise matters</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Represented department in litigation and dispute resolution</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Extensive experience in Corporate Taxation and International Tax Treaties
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Treasury Board Secretariat of Ontario</h3>
                  <p className="text-accent font-medium">Senior Policy Advisor</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Advised on public finance and tax policy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Developed revenue measures across government ministries</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Regulatory compliance oversight and strategy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Cross-ministry policy coordination and implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Advisory Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At our firm, Hanif focuses exclusively on Tax Law, assisting individuals, businesses, and organizations
              with comprehensive tax advisory services for complex domestic and international tax challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-gray-900">Canadian & International Tax Law</h3>
              </div>
              <p className="text-gray-600">Expert guidance on complex domestic and cross-border tax matters.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold text-gray-900">Corporate and Personal Planning</h3>
              </div>
              <p className="text-gray-600">Strategic tax planning for individuals and corporate entities.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
              <div className="flex items-center space-x-3 mb-4">
                <Building className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-gray-900">Cross-Border Tax Issues</h3>
              </div>
              <p className="text-gray-600">Specialized expertise in international tax treaties and compliance.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent">
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold text-gray-900">Tax Policy & Regulatory Compliance</h3>
              </div>
              <p className="text-gray-600">Risk management and regulatory strategy development.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-gray-900">CRA Audits & Regulatory Strategy</h3>
              </div>
              <p className="text-gray-600">Strategic representation and audit defense services.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold text-gray-900">Tax Dispute Resolution & Appeals</h3>
              </div>
              <p className="text-gray-600">Litigation support and comprehensive dispute resolution.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-gray-900">Legal Research & Drafting</h3>
              </div>
              <p className="text-gray-600">Comprehensive legal research and document preparation services.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent">
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold text-gray-900">Financial & Legal Risk Analysis</h3>
              </div>
              <p className="text-gray-600">Advanced risk assessment and mitigation strategies.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
              <div className="flex items-center space-x-3 mb-4">
                <Building className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-gray-900">Policy Development & Legislative Analysis</h3>
              </div>
              <p className="text-gray-600">Strategic policy development and regulatory analysis.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold text-gray-900">Financial Regulations & Compliance</h3>
              </div>
              <p className="text-gray-600">Comprehensive compliance strategies and regulatory guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold mb-4">Unique Positioning</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Academic excellence combined with extensive public sector experience provides unparalleled insights into
                tax law and policy
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
                <p className="text-blue-100">
                  Advanced degrees from top institutions providing deep theoretical knowledge.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Government Experience</h3>
                <p className="text-blue-100">
                  Senior roles in tax administration and policy development across jurisdictions.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">International Perspective</h3>
                <p className="text-blue-100">Cross-border expertise with deep understanding of global tax systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">
            Navigate Complex Tax Challenges with Confidence
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you are facing a tax audit, planning for growth, or dealing with cross-border complexities, Hanif
            brings clarity, experience, and strong advocacy to every tax matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 bg-transparent"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (647) 526-1677
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
