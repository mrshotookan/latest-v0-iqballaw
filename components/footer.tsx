import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">IQBAL LAW</h3>
            <p className="text-gray-200 mb-4">Tax Lawyer in Ontario</p>
            <p className="text-gray-200">Serving clients across the Greater Toronto Area and other parts of Ontario.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-accent" />
                <span className="text-gray-200">Office Address</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <a href="tel:647-526-1677" className="text-gray-200 hover:text-white transition-colors">
                  647-526-1677
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <a href="mailto:info@iqbalslaw.com" className="text-gray-200 hover:text-white transition-colors">
                  info@iqbalslaw.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center mb-4">
            <p className="text-gray-300 text-sm">
              <strong>Disclaimer:</strong> This website is for informational purposes only and does not constitute legal
              advice. Please contact us directly for advice tailored to your situation.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-200">© 2024 IQBAL LAW. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
