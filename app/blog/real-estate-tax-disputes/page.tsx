import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, CheckCircle, Phone, Calendar } from "lucide-react"

export default function RealEstateTaxDisputesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <div className="flex items-center space-x-2 mb-4">
              <Badge className="bg-primary text-white">Real Estate Tax</Badge>
              <Badge variant="outline">Property Law</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Real Estate Tax Disputes: Expert Legal Representation for Property Transactions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Navigate complex real estate tax issues with expert legal guidance. From capital gains disputes to
              principal residence exemptions, protect your property investments with professional representation.
            </p>
            <div className="flex items-center space-x-4 mt-6 text-sm text-gray-500">
              <span>Published by Iqbal Law</span>
              <span>•</span>
              <span>Real Estate Tax Law</span>
              <span>•</span>
              <span>14 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8">
              <div className="flex items-start space-x-3">
                <Home className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Real Estate Tax Complexity</h3>
                  <p className="text-gray-700">
                    Real estate transactions involve complex tax implications that can significantly impact your
                    financial position. Professional guidance ensures compliance and optimization of your tax
                    obligations.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-6">
              Understanding Real Estate Tax Issues
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Real estate taxation in Canada involves multiple layers of complexity, from capital gains calculations to
              principal residence exemptions. Whether you're buying, selling, or holding investment properties,
              understanding your tax obligations is crucial for making informed decisions and avoiding costly disputes
              with the CRA.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common Real Estate Tax Disputes</h3>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Principal residence exemption eligibility and calculations</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Capital gains vs. business income characterization</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">GST/HST obligations on real estate transactions</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Rental property income and expense deductions</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Foreign buyer tax and non-resident obligations</span>
              </li>
            </ul>

            <div className="bg-primary text-white rounded-lg p-8 my-12">
              <h3 className="text-2xl font-serif font-bold mb-4">Protect Your Real Estate Investments</h3>
              <p className="text-blue-100 mb-6">
                Don't let tax disputes jeopardize your property investments. Our experienced real estate tax lawyers
                provide strategic guidance to resolve disputes and optimize your tax position.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  Property Tax Consultation
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
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
