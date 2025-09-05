import { Card, CardContent } from "@/components/ui/card"
import { Award, DollarSign, Shield, TrendingUp } from "lucide-react"

const trustPoints = [
  {
    icon: Award,
    title: "Decades of Combined Experience",
    description:
      "Over 35 years of combined expertise in Canadian tax law, with hundreds of successful cases and satisfied clients across Ontario.",
  },
  {
    icon: DollarSign,
    title: "Transparent Fees",
    description:
      "Clear, upfront pricing with no hidden costs. We provide detailed fee structures and work within your budget to deliver exceptional value.",
  },
  {
    icon: Shield,
    title: "Confidential Service",
    description:
      "Your privacy is paramount. We maintain strict confidentiality protocols and ensure all client information remains secure and protected.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description:
      "Consistent success in CRA disputes, tax court proceedings, and complex tax matters. Our results speak for themselves.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Why Choose Iqbal Law</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When facing tax challenges, you need a legal team you can trust. Here's what sets us apart from other tax
            law firms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trustPoints.map((point, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
                      <point.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-gray-600">Cases Successfully Resolved</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">20+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
