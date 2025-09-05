import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, Calendar } from "lucide-react"

export function FinalCta() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Let's Resolve Your Tax Problem—Starting Today
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            If you're facing a tax dispute, reassessment, or legal uncertainty around your tax obligations, don't go
            through it alone. I'm here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Options */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-center lg:text-left">Get In Touch</h3>
            <div className="grid gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Phone className="h-6 w-6 text-accent" />
                <div>
                  <div className="font-semibold">Call Today</div>
                  <div className="text-accent">647-526-1677</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Mail className="h-6 w-6 text-accent" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-accent">info@iqbalslaw.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Calendar className="h-6 w-6 text-accent" />
                <div>
                  <div className="font-semibold">Book Online</div>
                  <div className="text-accent">Schedule Now</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-center lg:text-left">Send a Message</h3>
            <form className="space-y-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-white">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  placeholder="Describe your tax issue or question..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold"
              >
                Send Message & Schedule Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
