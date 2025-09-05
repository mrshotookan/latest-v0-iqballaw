export function MapSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Service Area</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We proudly serve clients throughout the Greater Toronto Area and across Ontario, providing expert tax law
            representation wherever you need us.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57909730427!2d-79.54286805!3d43.718371149999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sGreater%20Toronto%20Area%2C%20ON!5e0!3m2!1sen!2sca!4v1647890123456!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Greater Toronto Area - Iqbal Law Service Area"
            ></iframe>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            <strong>Serving:</strong> Toronto, Mississauga, Brampton, Markham, Vaughan, Richmond Hill, Oakville,
            Burlington, Hamilton, and surrounding areas
          </p>
        </div>
      </div>
    </section>
  )
}
