"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTeamOpen, setIsTeamOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false)

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const teamTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blogs" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ]

  const teamMembers = [
    { href: "/nasar-iqbal", label: "Nasar Iqbal" },
    { href: "/muhammad-hanif-shaikh", label: "Muhammad Hanif Shaikh" },
  ]

  const services = [
    { href: "/services/voluntary-disclosures", label: "Voluntary Disclosures Program (VDP)" },
    { href: "/services/audit-representation", label: "Audit Representation" },
    { href: "/services/objection-appeals", label: "Objection and Appeals" },
    { href: "/services/tax-court", label: "Tax Court of Canada Representation" },
    { href: "/services/tax-crime", label: "Tax Crime Representation" },
    { href: "/services/cryptocurrency", label: "Cryptocurrency & Tax Law" },
    { href: "/services/real-estate", label: "Real Estate Transactions & Tax Disputes" },
    { href: "/services/gst-hst-rebate", label: "GST/HST New Housing Rebate" },
    { href: "/services/gst-hst-disputes", label: "GST/HST Dispute Resolution" },
    { href: "/services/director-liability", label: "Director's Liability for Tax Debts" },
    { href: "/services/estate-planning", label: "Estate Planning & Tax Strategy" },
    { href: "/services/net-worth-audits", label: "Net Worth Audits" },
    { href: "/services/cross-border-trusts", label: "Cross-Border Trust Planning & Compliance" },
    { href: "/services/unfiled-returns", label: "Unfiled Tax Returns" },
    { href: "/services/tax-debt", label: "Tax Debt & CRA Collections" },
    { href: "/services/taxpayer-relief", label: "Taxpayer Relief Applications" },
    { href: "/services/tax-residency", label: "Tax Residency & Canadian Tax Obligations" },
    { href: "/services/disability-tax-credit", label: "Disability Tax Credit (DTC) Claims & Appeals" },
    { href: "/services/judicial-review", label: "Judicial Review of CRA Decisions" },
    { href: "/services/rectification", label: "Rectification of Tax Errors" },
    { href: "/services/remission-orders", label: "Remission Orders Under the Financial Administration Act" },
    { href: "/services/tax-planning", label: "Tax Planning & Structuring" },
    { href: "/services/business-advisory", label: "Business Advisory Services" },
  ]

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current)
    }
    setIsServicesOpen(true)
  }

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 150) // 150ms delay before closing
  }

  const handleTeamMouseEnter = () => {
    if (teamTimeoutRef.current) {
      clearTimeout(teamTimeoutRef.current)
    }
    setIsTeamOpen(true)
  }

  const handleTeamMouseLeave = () => {
    teamTimeoutRef.current = setTimeout(() => {
      setIsTeamOpen(false)
    }, 150) // 150ms delay before closing
  }

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current)
      }
      if (teamTimeoutRef.current) {
        clearTimeout(teamTimeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-transform hover:scale-105 duration-200">
            <Image
              src="/iqbal-law-logo-clean.jpeg"
              alt="Iqbal Law - Ontario's Trusted Tax Lawyer"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/blog"
              className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Blogs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <div
              className="relative group"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button className="flex items-center text-gray-700 hover:text-primary transition-all duration-300 font-medium relative">
                Our Services
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-200">
                  <div className="py-3">
                    <Link
                      href="/services"
                      className="block px-6 py-3 text-primary font-semibold hover:bg-gray-50 border-b border-gray-100 transition-colors duration-200"
                    >
                      View All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-all duration-200 hover:pl-8"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative group" onMouseEnter={handleTeamMouseEnter} onMouseLeave={handleTeamMouseLeave}>
              <button className="flex items-center text-gray-700 hover:text-primary transition-all duration-300 font-medium relative">
                Our Team
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform duration-300 ${isTeamOpen ? "rotate-180" : ""}`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>

              {isTeamOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                  <ul className="py-3">
                    {teamMembers.map((member) => (
                      <li key={member.href}>
                        <Link
                          href={member.href}
                          className="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-all duration-200 hover:pl-8"
                        >
                          {member.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <div className="flex items-center space-x-6 ml-8 pl-8 border-l border-gray-200">
              <a
                href="tel:647-526-1677"
                className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-200"
              >
                <Phone className="h-4 w-4 mr-2" />
                647-526-1677
              </a>
              <Link href="/contact">
                <Button className="bg-[#3E1F1A] hover:bg-[#3E1F1A]/90 text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen)
                if (isOpen) {
                  setMobileServicesOpen(false)
                  setMobileTeamOpen(false)
                }
              }}
              className="text-gray-700 hover:text-primary transition-colors duration-200 p-2 rounded-md hover:bg-gray-50"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-in slide-in-from-top-2 duration-200" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t shadow-lg">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>

              <div className="px-3 py-2">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 font-medium hover:text-primary transition-colors"
                >
                  Our Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="mt-2 animate-in slide-in-from-top-1 duration-200">
                    <Link
                      href="/services"
                      className="block ml-4 py-1 text-primary font-semibold hover:text-primary/80 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      View All Services
                    </Link>
                    <div className="ml-4 space-y-1 max-h-48 overflow-y-auto">
                      {services.slice(0, 10).map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block py-1 text-sm text-gray-600 hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                      {services.length > 10 && (
                        <Link
                          href="/services"
                          className="block py-1 text-sm text-primary hover:text-primary/80 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          + {services.length - 10} more services
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="px-3 py-2">
                <button
                  onClick={() => setMobileTeamOpen(!mobileTeamOpen)}
                  className="flex items-center justify-between w-full text-gray-700 font-medium hover:text-primary transition-colors"
                >
                  Our Team
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${mobileTeamOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileTeamOpen && (
                  <ul className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top-1 duration-200">
                    {teamMembers.map((member) => (
                      <li key={member.href}>
                        <Link
                          href={member.href}
                          className="block py-1 text-gray-600 hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {member.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>

              <div className="px-3 py-2 space-y-2">
                <a
                  href="tel:647-526-1677"
                  className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-200"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  647-526-1677
                </a>
                <Link href="/contact">
                  <Button className="w-full bg-[#3E1F1A] hover:bg-[#3E1F1A]/90 text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
