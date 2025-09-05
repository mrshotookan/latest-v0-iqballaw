import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "Nasar Iqbal",
    title: "Tax Lawyer",
    image: "/nasar-iqbal-ceremonial.jpg",
    credentials: ["LL.B", "Tax Law Specialist", "20+ Years Experience"],
    bio: "Nasar Iqbal is a seasoned tax lawyer with over two decades of experience in Canadian tax law. He has successfully represented hundreds of clients in complex CRA disputes, audits, and Tax Court proceedings. Nasar's expertise spans all areas of tax law, including voluntary disclosures, objections and appeals, tax planning, and cryptocurrency taxation. His strategic approach and deep understanding of tax legislation have consistently delivered favorable outcomes for individuals, businesses, and corporations across Ontario. Nasar is known for his meticulous attention to detail, transparent communication, and unwavering commitment to client confidentiality.",
    specializations: [
      "CRA Audit Defense",
      "Tax Court Litigation",
      "Voluntary Disclosures",
      "Tax Planning & Strategy",
      "Cryptocurrency Taxation",
    ],
  },
  {
    name: "Muhammad Hanif Shaikh",
    title: "Tax Advisor",
    image: "/muhammad-hanif-shaikh-professional.jpg",
    credentials: ["CPA", "Tax Advisory Specialist", "15+ Years Experience"],
    bio: "Muhammad Hanif Shaikh brings over 15 years of specialized experience in tax advisory services and compliance. As a Certified Professional Accountant, he provides comprehensive tax planning solutions and ensures clients remain compliant with all Canadian tax obligations. Hanif's expertise includes complex tax structuring, cross-border tax issues, GST/HST matters, and estate planning. He works closely with clients to develop strategic tax solutions that minimize liability while maintaining full compliance. His analytical approach and thorough understanding of tax regulations make him an invaluable asset to the Iqbal Law team.",
    specializations: [
      "Tax Compliance & Planning",
      "GST/HST Advisory",
      "Cross-Border Taxation",
      "Estate Tax Planning",
      "Corporate Tax Strategy",
    ],
  },
]

export function TeamProfiles() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Legal Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals who will fight for your rights and guide you through complex tax matters
          </p>
        </div>

        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.title}`}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-serif font-bold text-primary mb-2">{member.name}</h3>
                        <p className="text-xl text-accent font-semibold mb-4">{member.title}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {member.credentials.map((credential, credIndex) => (
                            <Badge key={credIndex} variant="secondary" className="bg-gray-100 text-gray-700">
                              {credential}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed">{member.bio}</p>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specializations.map((spec, specIndex) => (
                            <Badge key={specIndex} className="bg-primary/10 text-primary hover:bg-primary/20">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
