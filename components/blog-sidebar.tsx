import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, TrendingUp } from "lucide-react"

const categories = [
  { name: "Tax Compliance", count: 15 },
  { name: "CRA Audits", count: 12 },
  { name: "Tax Litigation", count: 10 },
  { name: "Tax Court", count: 8 },
  { name: "Corporate Tax", count: 7 },
  { name: "GST/HST", count: 6 },
  { name: "Cryptocurrency", count: 5 },
  { name: "VDP", count: 4 },
  { name: "Estate Planning", count: 4 },
  { name: "Tax Residency", count: 3 },
  { name: "CRA Updates", count: 12 },
]

const popularPosts = [
  {
    title: "Voluntary Disclosures Program (VDP): Your Path to Tax Compliance",
    date: "March 20, 2024",
  },
  {
    title: "CRA Audit Representation: Expert Defense for Your Tax Matters",
    date: "March 18, 2024",
  },
  {
    title: "Tax Court of Canada Representation: Expert Litigation",
    date: "March 16, 2024",
  },
  {
    title: "Understanding CRA Audit Triggers: What to Watch For",
    date: "March 10, 2024",
  },
  {
    title: "Principal Residence Exemption: Common Mistakes",
    date: "March 5, 2024",
  },
]

const recentUpdates = [
  {
    title: "New Service Articles: Complete Tax Law Guide Published",
    date: "March 20, 2024",
  },
  {
    title: "CRA Announces New Penalty Relief Measures",
    date: "March 18, 2024",
  },
  {
    title: "Budget 2024: Key Tax Changes for Individuals",
    date: "March 16, 2024",
  },
  {
    title: "Updated Guidelines for Home Office Deductions",
    date: "March 12, 2024",
  },
]

export function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-serif">Search Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input placeholder="Search tax law topics..." className="flex-1" />
            <Button size="icon" className="bg-primary hover:bg-primary/90">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-serif">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 hover:bg-gray-50 px-2 rounded cursor-pointer"
              >
                <span className="text-gray-700 hover:text-primary transition-colors">{category.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-serif flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-accent" />
            Popular Articles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularPosts.map((post, index) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0">
                <h4 className="text-sm font-medium text-gray-900 hover:text-primary cursor-pointer transition-colors leading-tight mb-1">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Updates */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-serif">Recent Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentUpdates.map((update, index) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0">
                <h4 className="text-sm font-medium text-gray-900 hover:text-primary cursor-pointer transition-colors leading-tight mb-1">
                  {update.title}
                </h4>
                <p className="text-xs text-gray-500">{update.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg font-serif text-primary">Stay Updated</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-700 mb-4">
            Subscribe to our newsletter for the latest tax law updates and insights delivered to your inbox.
          </p>
          <div className="space-y-3">
            <Input placeholder="Enter your email" type="email" />
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">Subscribe</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
