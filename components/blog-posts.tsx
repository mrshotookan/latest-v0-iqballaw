import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    title: "Real Estate Tax Disputes: Expert Legal Representation for Property Transactions",
    excerpt:
      "Navigate complex real estate tax issues with expert legal guidance. From capital gains disputes to principal residence exemptions, protect your property investments with professional representation.",
    author: "Nasar Iqbal",
    date: "March 25, 2024",
    category: "Real Estate Tax",
    readTime: "14 min read",
    image: "/real-estate-tax-disputes.png",
    slug: "/blog/real-estate-tax-disputes",
  },
  {
    title: "GST/HST New Housing Rebate: Maximize Your Tax Savings on New Home Purchases",
    excerpt:
      "Learn how to claim GST/HST new housing rebates and navigate complex eligibility requirements. Expert guidance on maximizing tax savings for new home buyers and builders.",
    author: "Muhammad Hanif Shaikh",
    date: "March 24, 2024",
    category: "GST/HST",
    readTime: "12 min read",
    image: "/gst-hst-new-housing-rebate.png",
    slug: "/blog/gst-hst-new-housing-rebate",
  },
  {
    title: "Cross-Border Trust Planning: Navigate International Tax Compliance",
    excerpt:
      "Expert guidance on cross-border trust structures, reporting requirements, and tax optimization strategies. Ensure compliance while maximizing tax efficiency for international families.",
    author: "Nasar Iqbal",
    date: "March 23, 2024",
    category: "International Tax",
    readTime: "16 min read",
    image: "/cross-border-trust-planning.png",
    slug: "/blog/cross-border-trust-planning",
  },
  {
    title: "Tax Debt Relief: Strategic Solutions for CRA Collections",
    excerpt:
      "Facing CRA collection action? Learn about payment arrangements, taxpayer relief provisions, and legal strategies to resolve tax debt while protecting your assets.",
    author: "Nasar Iqbal",
    date: "March 22, 2024",
    category: "Tax Debt",
    readTime: "13 min read",
    image: "/tax-debt-cra-collections.png",
    slug: "/blog/tax-debt-relief",
  },
  {
    title: "Disability Tax Credit Appeals: Securing Benefits for Eligible Taxpayers",
    excerpt:
      "Navigate the DTC application and appeals process with expert guidance. Learn how to present medical evidence effectively and secure tax benefits for qualifying disabilities.",
    author: "Muhammad Hanif Shaikh",
    date: "March 21, 2024",
    category: "Tax Credits",
    readTime: "11 min read",
    image: "/disability-tax-credit-appeals.png",
    slug: "/blog/disability-tax-credit-appeals",
  },
  {
    title: "Voluntary Disclosures Program (VDP): Your Path to Tax Compliance",
    excerpt:
      "Navigate the CRA's Voluntary Disclosures Program to resolve past tax issues while minimizing penalties and interest. Learn how coming forward voluntarily can protect you from prosecution.",
    author: "Nasar Iqbal",
    date: "March 20, 2024",
    category: "Tax Compliance",
    readTime: "15 min read",
    image: "/voluntary-disclosure-tax-documents.png",
    slug: "/blog/voluntary-disclosures",
  },
  {
    title: "CRA Audit Representation: Expert Defense for Your Tax Matters",
    excerpt:
      "Facing a CRA audit can be overwhelming. Our experienced tax lawyers provide strategic representation to protect your interests and ensure fair treatment throughout the audit process.",
    author: "Nasar Iqbal",
    date: "March 18, 2024",
    category: "CRA Audits",
    readTime: "12 min read",
    image: "/cra-audit-legal-defense.png",
    slug: "/blog/audit-representation",
  },
  {
    title: "Tax Court of Canada Representation: Expert Litigation for Complex Disputes",
    excerpt:
      "When tax disputes escalate to the Tax Court of Canada, you need experienced litigation counsel. Learn about the court process and why professional representation is essential.",
    author: "Nasar Iqbal",
    date: "March 16, 2024",
    category: "Tax Litigation",
    readTime: "18 min read",
    image: "/tax-court-canada-litigation.png",
    slug: "/blog/tax-court-representation",
  },
  {
    title: "Net Worth Audits: Defending Against CRA Lifestyle Assessments",
    excerpt:
      "Understand how CRA net worth audits work and learn defensive strategies. Expert guidance on challenging lifestyle assessments and protecting your financial privacy.",
    author: "Nasar Iqbal",
    date: "March 15, 2024",
    category: "CRA Audits",
    readTime: "14 min read",
    image: "/net-worth-audit-defense.png",
    slug: "/blog/net-worth-audit-defense",
  },
  {
    title: "Tax Residency Determination: Protecting Your Status and Obligations",
    excerpt:
      "Navigate complex tax residency rules and protect your Canadian tax status. Expert guidance on residency determination factors and strategic planning for international taxpayers.",
    author: "Muhammad Hanif Shaikh",
    date: "March 14, 2024",
    category: "Tax Residency",
    readTime: "13 min read",
    image: "/tax-residency-determination-guide.png",
    slug: "/blog/tax-residency-determination-guide",
  },
  {
    title: "GST/HST May Apply When Selling Short-Term Rentals",
    excerpt:
      "Recent CRA guidance clarifies when GST/HST obligations apply to short-term rental properties. Understanding these rules is crucial for property owners using platforms like Airbnb and VRBO.",
    author: "Nasar Iqbal",
    date: "March 13, 2024",
    category: "GST/HST",
    readTime: "5 min read",
    image: "/short-term-rental-gst-hst.png",
    slug: "/blog/gst-hst-short-term-rentals",
  },
  {
    title: "Judicial Review of CRA Decisions: Federal Court Challenges",
    excerpt:
      "When administrative remedies are exhausted, Federal Court judicial review may be your final option. Learn about challenging CRA decisions through judicial review proceedings.",
    author: "Nasar Iqbal",
    date: "March 12, 2024",
    category: "Federal Court",
    readTime: "15 min read",
    image: "/judicial-review-cra-decisions.png",
    slug: "/blog/judicial-review-cra-decisions",
  },
  {
    title: "TFSA Overcontributions: Federal Court Critiques CRA",
    excerpt:
      "A recent Federal Court decision has criticized the CRA's approach to TFSA overcontribution penalties, providing important guidance for taxpayers facing similar assessments.",
    author: "Muhammad Hanif Shaikh",
    date: "March 8, 2024",
    category: "Tax Court",
    readTime: "7 min read",
    image: "/tfsa-overcontribution-federal-court.png",
    slug: "/blog/tfsa-overcontributions",
  },
  {
    title: "Cryptocurrency Tax Reporting: 2024 Updates",
    excerpt:
      "New CRA guidance on cryptocurrency taxation brings clarity to digital asset reporting requirements. Learn what crypto investors and traders need to know for the 2024 tax year.",
    author: "Nasar Iqbal",
    date: "February 28, 2024",
    category: "Cryptocurrency",
    readTime: "6 min read",
    image: "/cryptocurrency-tax-reporting-2024.png",
    slug: "/blog/cryptocurrency-tax-2024",
  },
  {
    title: "Estate Planning Tax Strategies: Minimize Tax on Wealth Transfer",
    excerpt:
      "Comprehensive guide to estate planning tax strategies. Learn how to structure your estate to minimize tax liability and maximize wealth transfer to beneficiaries.",
    author: "Muhammad Hanif Shaikh",
    date: "February 25, 2024",
    category: "Estate Planning",
    readTime: "17 min read",
    image: "/estate-planning-tax-strategies.png",
    slug: "/blog/estate-planning-tax-strategies",
  },
  {
    title: "Taxpayer Relief Provisions: When the CRA Can Waive Penalties and Interest",
    excerpt:
      "Understand when and how to apply for taxpayer relief. Learn about circumstances that qualify for penalty and interest relief under CRA's taxpayer relief provisions.",
    author: "Nasar Iqbal",
    date: "February 20, 2024",
    category: "Taxpayer Relief",
    readTime: "10 min read",
    image: "/taxpayer-relief-provisions.png",
    slug: "/blog/taxpayer-relief-provisions",
  },
  {
    title: "Director Liability for Corporate Tax Debts: Key Defenses",
    excerpt:
      "Corporate directors can face personal liability for unpaid corporate taxes. Learn about the key defenses available and how to protect yourself from CRA collection actions.",
    author: "Muhammad Hanif Shaikh",
    date: "February 12, 2024",
    category: "Corporate Tax",
    readTime: "6 min read",
    image: "/director-liability-corporate-tax.png",
    slug: "/blog/director-liability",
  },
]

export function BlogPosts() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif font-bold text-primary">Latest Articles</h2>
        <p className="text-gray-700">{blogPosts.length} articles</p>
      </div>

      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="md:col-span-1">
                  <img
                    src={post.image || "/placeholder.svg?height=200&width=300"}
                    alt={post.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <Badge className="bg-accent/10 text-accent hover:bg-accent/20">{post.category}</Badge>
                    <span className="text-sm text-gray-600">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <Link href={post.slug || "#"}>
                      <Button variant="ghost" className="text-primary hover:text-primary/80">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center pt-8">
        <Button
          size="lg"
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
        >
          Load More Articles
        </Button>
      </div>
    </div>
  )
}
