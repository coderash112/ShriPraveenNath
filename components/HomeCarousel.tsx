import HomeCarousel from "@/components/HomeCarousel";

export default function HomePage() {
  return (
    <div className="space-y-10">
      
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight
                       bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500
                       bg-clip-text text-transparent">
          PraveenNath Maharaj
        </h1>

        <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
          A revered spiritual guide from Indore, spreading wisdom, devotion,
          and righteous living through satsangs, social service, and
          soul-awakening teachings.
        </p>

        <div className="flex justify-center gap-3">
          <span className="px-4 py-1 rounded-full text-xs
                           bg-orange-100 text-orange-700">
            Spiritual Guidance
          </span>
          <span className="px-4 py-1 rounded-full text-xs
                           bg-yellow-100 text-yellow-700">
            Satsang & Seva
          </span>
          <span className="px-4 py-1 rounded-full text-xs
                           bg-red-100 text-red-700">
            Indore
          </span>
        </div>
      </section>

      {/* Photo Carousel */}
      <section>
        <HomeCarousel />
      </section>

      {/* Description Section */}
      <section className="bg-white rounded-2xl shadow-sm border p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-orange-600 mb-3">
          About This Website
        </h2>

        <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>
            This platform is a humble effort to bring devotees and seekers
            closer to the teachings and presence of <strong>PraveenNath Maharaj</strong>.
            Here, you can stay informed about upcoming spiritual events,
            satsangs, and gatherings.
          </p>

          <p>
            The website also serves as a bridge between Maharaj Ji’s mission
            and the people who wish to seek guidance, participate in seva,
            or connect for spiritual growth.
          </p>

          <p>
            Rooted in values of <strong>truth, devotion, and service</strong>,
            this space reflects a journey towards inner peace and purposeful living.
          </p>
        </div>
      </section>

      {/* Call to action */}
      <section className="text-center">
        <p className="text-sm text-slate-600">
          Explore upcoming events or reach out through the contact page to connect.
        </p>
      </section>

    </div>
  );
}
