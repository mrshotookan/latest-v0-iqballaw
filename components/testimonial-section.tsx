import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Gurmeet Kaur",
    role: "Client",
    content:
      "I had very positive experience and helpful guidance. Mr. Iqbal understood every aspect generously and gave advice considering everything.",
    rating: 5,
  },
  {
    name: "Yehia ElKhouly",
    role: "Client",
    content:
      "Very satisfied with my experience working with Mr. Iqbal so far. He is knowledgeable, diligent, responsive and keeps my best interest at heart. I feel protected and well represented. Very grateful",
    rating: 5,
  },
  {
    name: "Ahmed ElAlfy",
    role: "Client",
    content:
      "Nasar is very approachable and keen on providing the best legal advice. He is thorough, meticulous and detail oriented. He has the legal prowess that can successfully meet any challenges in the field. I highly recommend Iqbal Law to anyone seeking honesty and integrity as well as reasonable fees.",
    rating: 5,
  },
  {
    name: "Miranda Denham",
    role: "Client",
    content:
      "Nasar has always treated me with respect, understanding and kindness. He clearly communicates your options based on the law. However, he also shows that he cares about you as a person and mother. Nasar wants the best for his clients and their families, which is observed easily during appointments with him.",
    rating: 5,
  },
  {
    name: "Chalynn Wellington",
    role: "Client",
    content:
      "Mr.Iqbal was very helpful explaining all options and was professional in regards to protecting your children's wellbeing and assets.",
    rating: 5,
  },
  {
    name: "Faisal Rehman",
    role: "Client",
    content:
      "I wanted to thank Nasar for his continues support, professionalism, and guidance. a man of wisdom and knowledge in his field. Wishing him success",
    rating: 5,
  },
]

export function TestimonialSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by hundreds of satisfied clients across Ontario</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
