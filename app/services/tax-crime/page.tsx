import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, CheckCircle, Phone, Calendar } from "lucide-react"

export default function TaxCrimePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-red-600 text-white mb-4">Criminal Defense</Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">Tax Crime Representation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experienced criminal defense for tax evasion charges and CRA criminal investigations. We protect your
              rights and provide aggressive defense against tax crime allegations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-primary">Criminal Defense</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Tax crime charges are serious matters that require immediate expert legal representation. Our
                experienced criminal defense team protects your rights and fights for the best possible outcome.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Tax evasion defense</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Criminal investigation representation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Charter rights protection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Plea negotiation and trial defense</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-400">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-red-600" />
                <h3 className="text-2xl font-semibold text-red-800">Urgent Legal Help</h3>
              </div>
              <p className="text-red-700 mb-4">
                If you're under criminal investigation or have been charged with tax crimes, time is critical. Contact
                us immediately for emergency legal representation.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                <Phone className="h-5 w-5 mr-2" />
                Emergency Legal Help
              </Button>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Protect Your Freedom</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Tax crime charges can result in imprisonment and significant penalties. Don't face these serious charges
              alone - get experienced criminal defense representation.
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
