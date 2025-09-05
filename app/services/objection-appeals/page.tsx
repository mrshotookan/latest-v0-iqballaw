import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Scale, CheckCircle, Phone, Calendar } from "lucide-react"

export default function ObjectionAppealsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-white mb-4">CRA Appeals Service</Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">Objection and Appeals</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert representation for CRA objections and appeals. We help you challenge incorrect assessments and
              protect your rights throughout the appeals process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-primary">Appeals Process</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                When you disagree with a CRA assessment, you have the right to object and appeal. Our experienced team
                guides you through the formal objection process and represents you at all levels of appeal.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Notice of Objection preparation and filing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Appeals Division representation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Tax Court appeal preparation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Strategic case development</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Scale className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-semibold text-gray-900">Appeal Levels</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">CRA Appeals Division</h4>
                  <p className="text-gray-600">First level review of objections</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-gray-900">Tax Court of Canada</h4>
                  <p className="text-gray-600">Formal court proceedings</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">Federal Court of Appeal</h4>
                  <p className="text-gray-600">Higher court appeals</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Challenge Incorrect Assessments</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't accept incorrect CRA assessments. Our experienced team will fight for your rights and work to
              achieve the best possible outcome.
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
        </div>
      </div>

      <Footer />
    </div>
  )
}
