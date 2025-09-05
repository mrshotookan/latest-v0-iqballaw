import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, Award, CheckCircle, Phone, Mail, Calendar } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function NasarIqbalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent text-white px-4 py-2 text-sm font-medium">Tax Lawyer | Ontario</Badge>
              <h1 className="text-5xl font-serif font-bold leading-tight">Nasar Iqbal</h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                With over 20 years of courtroom experience, delivering strategic, results-driven tax solutions for
                individuals and businesses across Ontario.
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
                  Contact Nasar
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/nasar-iqbal-ceremonial.jpg"
                alt="Nasar Iqbal - Tax Lawyer in Legal Robes"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">20+ Years</h3>
              <p className="text-gray-600">Courtroom Experience</p>
            </div>
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">All Levels</h3>
              <p className="text-gray-600">Ontario Courts</p>
            </div>
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Strategic</h3>
              <p className="text-gray-600">Results-Driven Solutions</p>
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
                With over 20 years of courtroom experience, Nasar Iqbal is a dedicated tax lawyer in Ontario focused on
                delivering strategic, results-driven tax solutions. Building on a strong foundation in Canadian law, his
                practice now centers on helping individuals and businesses navigate complex tax challenges — from CRA
                audits and objections to tax planning and dispute resolution.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nasar represents a broad range of clients, including individual taxpayers, professionals, and small to
                mid-sized corporations. He has appeared before all levels of court in Ontario and brings deep litigation
                experience to every case.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nasar understands how stressful tax issues can be — especially when dealing with the vast powers of the
                Canada Revenue Agency (CRA). He takes a hands-on, responsive approach, providing clear communication,
                timely updates, and practical advice tailored to each client's needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With the support of his experienced and accomplished legal team, Nasar is committed to defending
                clients' rights and promoting fairness in Canada's tax system. Whether you need proactive planning or
                strong representation in a dispute, he works to ensure you're on solid legal and financial ground.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Client Focus</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Individual taxpayers facing CRA challenges</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Professionals requiring tax planning strategies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Small to mid-sized corporations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Businesses needing dispute resolution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Legal Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive tax law services designed to protect your interests and ensure compliance with Canadian tax
              regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold text-gray-900">CRA Audits & Tax Disputes</h3>
              </div>
              <p className="text-gray-600">
                Expert representation during CRA audits and comprehensive tax dispute resolution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold text-gray-900">Objections & Appeals</h3>
              </div>
              <p className="text-gray-600">Strategic representation before the CRA and all levels of Ontario courts.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold text-gray-900">Tax Planning</h3>
              </div>
              <p className="text-gray-600">Comprehensive corporate and personal tax planning strategies.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold text-gray-900">Taxpayer Relief Applications</h3>
              </div>
              <p className="text-gray-600">Penalty and interest reduction applications to minimize tax burdens.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold text-gray-900">Unfiled Tax Returns</h3>
              </div>
              <p className="text-gray-600">Assistance with unfiled or overdue tax returns and compliance issues.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold text-gray-900">GST/HST Compliance</h3>
              </div>
              <p className="text-gray-600">GST/HST compliance strategies and planning for businesses.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold text-gray-900">Corporate Reorganizations</h3>
              </div>
              <p className="text-gray-600">Strategic corporate reorganizations and succession planning.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold text-gray-900">Cross-Border Tax Matters</h3>
              </div>
              <p className="text-gray-600">Expert guidance on international and cross-border tax issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold mb-4">Our Approach</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Committed to defending clients' rights and promoting fairness in Canada's tax system
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Hands-On Approach</h3>
                <p className="text-blue-100">Personal attention and responsive communication throughout your case.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Solutions</h3>
                <p className="text-blue-100">
                  Tailored legal strategies designed to achieve the best possible outcomes.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-blue-100">Two decades of successful representation and client satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">Ready to Resolve Your Tax Issues?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need proactive planning or strong representation in a dispute, Nasar works to ensure you're on
            solid legal and financial ground.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Free Consultation
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
