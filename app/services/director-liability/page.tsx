import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, AlertTriangle, CheckCircle, Phone, Calendar } from "lucide-react"

export default function DirectorLiabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-white mb-4">Corporate Law</Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Director's Liability for Tax Debts
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Protect yourself from personal liability for corporate tax debts. Expert defense against CRA director
              liability assessments and due diligence strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-primary">Director Protection</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Corporate directors can be held personally liable for certain corporate tax debts. Our experienced team
                helps you understand your obligations and provides strong defense against liability assessments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Director liability assessment defense</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Due diligence defense strategies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Corporate compliance guidance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Preventive legal strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-400">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
                <h3 className="text-2xl font-semibold text-yellow-800">Personal Liability Risk</h3>
              </div>
              <p className="text-yellow-700 mb-4">
                Directors can be personally liable for unremitted source deductions, GST/HST, and other corporate tax
                debts. Understanding your exposure is critical.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-yellow-700">• Source deductions (income tax, CPP, EI)</div>
                <div className="text-sm text-yellow-700">• Unremitted GST/HST</div>
                <div className="text-sm text-yellow-700">• Penalties and interest</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Protect Your Personal Assets</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't let corporate tax debts become your personal liability. Get expert legal protection and due
              diligence strategies to safeguard your assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                <Calendar className="h-5 w-5 mr-2" />
                Director Protection Consultation
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
