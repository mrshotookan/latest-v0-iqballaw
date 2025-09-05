import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, CheckCircle, Phone, Calendar } from "lucide-react"

export default function EstatePlanningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-white mb-4">Estate Planning</Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Estate Planning & Tax Strategy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive estate planning with tax optimization strategies. Protect your family's wealth and minimize
              tax burdens through strategic planning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold text-primary">Estate Tax Planning</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Effective estate planning requires careful consideration of tax implications. Our experienced team helps
                you structure your estate to minimize taxes while achieving your family's objectives.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Tax-efficient estate structuring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Trust planning and administration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Succession planning for businesses</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Estate freeze strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-400">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-semibold text-blue-800">Planning Strategies</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h4 className="font-semibold text-blue-800">Family Trusts</h4>
                  <p className="text-blue-700">Income splitting and tax deferral opportunities</p>
                </div>
                <div className="border-l-4 border-blue-300 pl-4">
                  <h4 className="font-semibold text-blue-800">Estate Freezes</h4>
                  <p className="text-blue-700">Lock in current values and transfer growth</p>
                </div>
                <div className="border-l-4 border-blue-300 pl-4">
                  <h4 className="font-semibold text-blue-800">Charitable Giving</h4>
                  <p className="text-blue-700">Tax-efficient philanthropic strategies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Protect Your Family's Future</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Proper estate planning can save your family significant taxes and ensure your wealth is preserved for
              future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                <Calendar className="h-5 w-5 mr-2" />
                Estate Planning Consultation
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
