import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    content: "647-526-1677",
    link: "tel:647-526-1677",
    description: "Call us directly for immediate assistance",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@iqbalslaw.com",
    link: "mailto:info@iqbalslaw.com",
    description: "Send us an email and we'll respond promptly",
  },
  {
    icon: MapPin,
    title: "Service Area",
    content: "Greater Toronto Area, Ontario",
    description: "Serving clients throughout the GTA and Ontario",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday: 9:00 AM - 6:00 PM",
    description: "Emergency consultations available by appointment",
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif font-bold text-primary mb-4">Get in Touch</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We understand that tax issues can be urgent and stressful. Our team is committed to providing prompt,
          professional responses to all inquiries. Whether you're facing a CRA audit, need tax planning advice, or
          require court representation, we're here to help.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
                    <detail.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{detail.title}</h3>
                  {detail.link ? (
                    <a
                      href={detail.link}
                      className="text-primary hover:text-primary/80 font-medium text-lg transition-colors"
                    >
                      {detail.content}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-medium text-lg">{detail.content}</p>
                  )}
                  <p className="text-gray-600 text-sm mt-1">{detail.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Confidentiality Guaranteed</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                All communications with our office are protected by solicitor-client privilege. Your information is kept
                strictly confidential and secure.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
