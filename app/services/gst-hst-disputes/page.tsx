import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Scale, AlertTriangle, CheckCircle, Phone, Calendar } from "lucide-react"

export default function GstHstDisputesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-white mb-4">GST/HST Disputes</Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">GST/HST Dispute Resolution</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert representation for GST/HST disputes, assessments, and appeals. We help resolve complex sales tax
              issues and protect your business interests.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-primary">GST/HST Defense</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                GST/HST disputes can significantly impact your business operations and cash flow. Our experienced team
                provides strategic representation to resolve assessments and protect your interests.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">GST/HST assessment disputes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Input tax credit denials</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Supply classification issues</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Registration requirement disputes</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-400">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-red-600" />
                <h3 className="text-2xl font-semibold text-red-800">Common Disputes</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-red-300 pl-4">
                  <h4 className="font-semibold text-red-800">Input Tax Credits</h4>
                  <p className="text-red-700">CRA denial of claimed ITCs</p>
                </div>
                <div className="border-l-4 border-red-300 pl-4">
                  <h4 className="font-semibold text-red-800">Supply Classification</h4>
                  <p className="text-red-700">Taxable vs exempt supply disputes</p>
                </div>
                <div className="border-l-4 border-red-300 pl-4">
                  <h4 className="font-semibold text-red-800">Registration Issues</h4>
                  <p className="text-red-700">Mandatory registration disputes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Resolve GST/HST Disputes</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't let GST/HST disputes disrupt your business. Get expert legal representation to resolve assessments
              and protect your cash flow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                <Calendar className="h-5 w-5 mr-2" />
                GST/HST Dispute Consultation
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
