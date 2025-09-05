import { Button } from "@/components/ui/button"
import { ArrowRight, Scale, Users, Award, GraduationCap, Globe, Check, Shield } from "lucide-react"
import Image from "next/image"

export function AboutPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            Your Trusted Legal Partner for Tax Matters
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As a dedicated Tax Lawyer based in Ontario, we provide legal advice and representation in a wide range of
            tax matters whether you're dealing with a CRA audit, facing a tax debt, or need strategic tax planning. We
            combine technical tax knowledge with a practical, results-driven approach to resolve your issues efficiently
            and discreetly.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            We have worked with individuals, professionals, small business owners, and corporations across Ontario,
            delivering personalized legal strategies that protect their rights and achieve favorable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <Image
              src="/nasar-iqbal-ceremonial.jpg"
              alt="Nasar Iqbal - Tax Lawyer in Legal Robes"
              width={400}
              height={500}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Nasar Iqbal – Tax Lawyer | Ontario</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              With over 20 years of courtroom experience, Nasar Iqbal is a dedicated tax lawyer focused on delivering
              strategic, results-driven tax solutions. He helps individuals and businesses navigate complex tax
              challenges — from CRA audits and objections to tax planning and dispute resolution.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nasar represents a broad range of clients and has appeared before all levels of court in Ontario, bringing
              deep litigation experience to every case with a hands-on, responsive approach.
            </p>

            <div className="pt-4">
              <Button className="bg-[#3E1F1A] hover:bg-[#3E1F1A]/90 text-white" asChild>
                <a href="/nasar-iqbal">
                  Read Full Profile
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-900">His services include:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "CRA audits and tax dispute resolution",
                  "Objections and appeals before the CRA and courts",
                  "Corporate and personal tax planning",
                  "Taxpayer relief applications (penalty and interest reduction)",
                  "Unfiled or overdue tax returns",
                  "GST/HST compliance and planning",
                  "Corporate reorganizations and succession strategies",
                  "Cross-border tax matters",
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Check className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center space-x-2">
                <Scale className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-gray-700">20+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-gray-700">All Court Levels</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-gray-700">Strategic Solutions</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 lg:order-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Muhammad Hanif Shaikh, LL.M. (Taxation), MSc Finance and Financial Law
              </h3>
              <p className="text-lg font-medium text-gray-800">Tax Advisor / Consultant</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 25 years of focused experience in Domestic and International Tax Law, Hanif is a trusted
                advisor on complex tax matters. His career spans senior roles in both international and Canadian public
                sectors, including 20 years with Pakistan's Federal Board of Revenue and as Senior Policy Advisor at
                Ontario's Treasury Board Secretariat.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hanif holds an LLM in Taxation from Osgoode Hall Law School and an MSc in Finance and Financial Law from
                SOAS, University of London, uniquely positioning him to advise on domestic and cross-border tax matters,
                CRA audits, and financial regulatory compliance.
              </p>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900">Key specializations include:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Canadian & International Tax Law",
                    "Corporate and Personal Planning",
                    "Cross-border tax issues",
                    "CRA Audits & Regulatory Strategy",
                    "Tax Dispute Resolution & Appeals",
                    "Financial Regulations & Compliance",
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button className="bg-[#3E1F1A] hover:bg-[#3E1F1A]/90 text-white" asChild>
                  <a href="/muhammad-hanif-shaikh">
                    Read Full Profile
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center space-x-2">
                  <Scale className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-gray-700">25+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-gray-700">LL.M. Taxation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-gray-700">International Expert</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:order-1">
            <Image
              src="/muhammad-hanif-shaikh-professional.jpg"
              alt="Muhammad Hanif Shaikh - Tax Advisor"
              width={400}
              height={500}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-20 border border-gray-200">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-accent" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">How We Can Help You</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Whether you're facing a time-sensitive tax issue or planning ahead, we offer legal services tailored to
              your unique needs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "CRA Audits & Reassessments",
                description: "Respond to CRA inquiries, defend your position, and reduce reassessed amounts.",
              },
              {
                title: "Tax Disputes & Appeals",
                description: "Representing you in disputes with the CRA at objection or Tax Court levels.",
              },
              {
                title: "Voluntary Disclosures",
                description: "Come clean with the CRA before they come to you—safely and legally.",
              },
              {
                title: "Tax Planning & Compliance",
                description: "Structure your affairs to minimize risk and maximize tax efficiency.",
              },
              {
                title: "HST/GST & Payroll Tax Issues",
                description: "Resolve indirect tax issues and stay compliant with your filing obligations.",
              },
              {
                title: "Corporate & Personal Tax Matters",
                description: "Strategic solutions for individuals, professionals, and business owners.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-gray-700 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-[#3E1F1A] hover:bg-[#3E1F1A]/90 text-white">
              Schedule Your Consultation
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="bg-primary rounded-lg shadow-lg p-8 mt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Why Choose Us?</h2>
            <p className="text-xl text-accent font-semibold mb-8">Trusted. Strategic. Focused on Results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Over two decades of Experience in Law",
              "Deep Knowledge of CRA Procedures & Tax Dispute Resolution",
              "Transparent Fees – No Surprises",
              "helped over 1000 clients tackle their legal issues",
              "Confidential, Personalized Legal Support",
              "Serving Individuals & Businesses Across Ontario",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Learn More About Our Team
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
