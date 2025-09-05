import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Shield,
  Scale,
  Gavel,
  AlertTriangle,
  Bitcoin,
  Home,
  Receipt,
  Building,
  Users,
  Calculator,
  Search,
  Globe,
  FileX,
  CreditCard,
  Heart,
  MapPin,
  Accessibility,
  Eye,
  Edit,
  FileCheck,
} from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Voluntary Disclosures Program",
    description:
      "Navigate the VDP process to resolve past tax issues while minimizing penalties and interest. We help you come forward voluntarily to correct previous tax filings.",
  },
  {
    icon: Shield,
    title: "CRA Audit Representation",
    description:
      "Expert defense against CRA audits with strategic representation to protect your interests and ensure fair treatment throughout the audit process.",
  },
  {
    icon: Scale,
    title: "Objections and Appeals",
    description:
      "Challenge CRA assessments through formal objections and appeals processes. We fight for your rights when you disagree with CRA decisions.",
  },
  {
    icon: Gavel,
    title: "Tax Court of Canada Representation",
    description:
      "Experienced litigation representation in Tax Court proceedings. We advocate for you in formal court hearings and complex tax disputes.",
  },
  {
    icon: AlertTriangle,
    title: "Tax Crime Representation",
    description:
      "Specialized defense for serious tax offenses including tax evasion charges. We provide strategic criminal defense representation.",
  },
  {
    icon: Bitcoin,
    title: "Cryptocurrency and Tax Law",
    description:
      "Expert guidance on cryptocurrency taxation, compliance requirements, and reporting obligations for digital asset transactions.",
  },
  {
    icon: Home,
    title: "Real Estate Transactions & Tax Disputes",
    description:
      "Comprehensive tax advice for real estate transactions, including principal residence exemptions and capital gains disputes.",
  },
  {
    icon: Receipt,
    title: "GST/HST New Housing Rebate",
    description:
      "Assistance with GST/HST new housing rebate applications and disputes to ensure you receive all eligible rebates.",
  },
  {
    icon: Building,
    title: "GST/HST Dispute Resolution",
    description:
      "Expert representation in GST/HST disputes, audits, and compliance matters for businesses of all sizes.",
  },
  {
    icon: Users,
    title: "Director's Liability for Tax Debts",
    description:
      "Defense against director liability assessments and strategies to protect corporate directors from personal tax liability.",
  },
  {
    icon: Calculator,
    title: "Estate Planning & Tax Strategy",
    description:
      "Strategic estate planning to minimize tax liability and ensure smooth wealth transfer to beneficiaries.",
  },
  {
    icon: Search,
    title: "Net Worth Audits",
    description:
      "Representation during CRA net worth audits and lifestyle audits, protecting your privacy and challenging unreasonable assessments.",
  },
  {
    icon: Globe,
    title: "Cross-Border Trust Planning & Compliance",
    description:
      "Complex cross-border tax planning and compliance for trusts, including foreign reporting requirements and tax optimization.",
  },
  {
    icon: FileX,
    title: "Unfiled Tax Returns",
    description:
      "Assistance with filing overdue tax returns and resolving compliance issues with the CRA for individuals and businesses.",
  },
  {
    icon: CreditCard,
    title: "Tax Debt & CRA Collections",
    description:
      "Strategic solutions for tax debt resolution, payment arrangements, and protection against CRA collection actions.",
  },
  {
    icon: Heart,
    title: "Taxpayer Relief Applications",
    description:
      "Applications for taxpayer relief to cancel or waive penalties and interest in cases of financial hardship or extraordinary circumstances.",
  },
  {
    icon: MapPin,
    title: "Tax Residency & Canadian Tax Obligations",
    description:
      "Determination of tax residency status and guidance on Canadian tax obligations for residents and non-residents.",
  },
  {
    icon: Accessibility,
    title: "Disability Tax Credit (DTC) Claims & Appeals",
    description:
      "Assistance with DTC applications and appeals to ensure eligible individuals receive this important tax credit.",
  },
  {
    icon: Eye,
    title: "Judicial Review of CRA Decisions",
    description:
      "Federal Court applications for judicial review when CRA decisions exceed their authority or violate procedural fairness.",
  },
  {
    icon: Edit,
    title: "Rectification of Tax Errors",
    description: "Court applications to rectify documentation errors that result in unintended tax consequences.",
  },
  {
    icon: FileCheck,
    title: "Remission Orders Under the Financial Administration Act",
    description:
      "Applications to the Governor in Council for remission of taxes in cases of extreme hardship or unfairness.",
  },
]

export function ServicesList() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Complete Tax Law Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine compliance matters to complex litigation, we provide expert legal representation across all
            areas of Canadian tax law.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mr-4 flex-shrink-0">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed flex-grow">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-8">
            Don't see your specific tax issue listed? We handle a wide range of tax matters beyond those listed above.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Contact Us for a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
