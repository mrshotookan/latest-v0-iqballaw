import { Card, CardContent } from "@/components/ui/card"
import { FileText, Shield, Scale, Gavel, Bitcoin, Calculator } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "CRA Audit Representation",
    description: "Expert defense against CRA audits with strategic representation to protect your interests.",
  },
  {
    icon: FileText,
    title: "Voluntary Disclosures Program",
    description: "Navigate the VDP process to resolve past tax issues while minimizing penalties and interest.",
  },
  {
    icon: Scale,
    title: "Objections & Appeals",
    description: "Challenge CRA assessments through formal objections and appeals processes.",
  },
  {
    icon: Gavel,
    title: "Tax Court Representation",
    description: "Experienced litigation representation in Tax Court of Canada proceedings.",
  },
  {
    icon: Bitcoin,
    title: "Cryptocurrency & Tax",
    description: "Specialized guidance on cryptocurrency taxation and compliance requirements.",
  },
  {
    icon: Calculator,
    title: "Tax Planning & Structuring",
    description: "Strategic tax planning to optimize your financial structure and minimize tax liability.",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Tax Law Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal solutions for all your Canadian tax law needs, backed by decades of experience and a
            proven track record of success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
