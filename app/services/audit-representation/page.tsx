import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Search, CheckCircle, ArrowRight, BookOpen, Phone, Calendar } from "lucide-react"
import Link from "next/link"

export default function AuditRepresentationServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Header */}
          <div className="text-center mb-16">
            <Badge className="bg-primary text-white mb-4">CRA Defense Service</Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">CRA Audit Representation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert defense against CRA audits with strategic representation to protect your interests and ensure fair
              treatment throughout the audit process.
            </p>
          </div>

          {/* Service Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-primary">Expert Defense</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Facing a CRA audit can be overwhelming and stressful. Our experienced tax lawyers provide strategic
                representation from the moment you receive an audit notice through to final resolution.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Immediate response to audit notices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Protection of your legal rights</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Strategic document preparation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Professional auditor communication</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Search className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-semibold text-gray-900">Audit Types We Handle</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">Correspondence Audits</h4>
                  <p className="text-gray-600">Mail-based audits requesting specific documentation</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-gray-900">Field Audits</h4>
                  <p className="text-gray-600">In-person examinations at your business or home</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">Net Worth Audits</h4>
                  <p className="text-gray-600">Lifestyle audits examining income vs. expenditures</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Article Link */}
          <div className="bg-primary text-white rounded-2xl p-12 mb-16">
            <div className="text-center">
              <BookOpen className="h-16 w-16 text-accent mx-auto mb-6" />
              <h3 className="text-3xl font-serif font-bold mb-4">Complete Audit Defense Guide</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Learn everything you need to know about CRA audits, your rights during the process, common triggers, and
                how professional representation can protect your interests.
              </p>
              <Link href="/blog/audit-representation">
                <Button className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-3">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Read Complete Guide
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Don't Face the CRA Alone</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              CRA audits require immediate attention and strategic response. Contact our experienced team for emergency
              consultation and representation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                <Calendar className="h-5 w-5 mr-2" />
                Emergency Consultation
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
        </div>
      </div>

      <Footer />
    </div>
  )
}
