import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog-hero"
import { BlogPosts } from "@/components/blog-posts"
import { BlogSidebar } from "@/components/blog-sidebar"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <BlogHero />
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <BlogPosts />
              </div>
              <div className="lg:col-span-1">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
