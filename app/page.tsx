export default function HomePage() {
  return (
    <div>

      {/* HERO */}
      <section className="w-full bg-gradient-to-b from-orange-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-orange-300">
            <img
              src="/images/guruji.jpg"
              alt="Shri PraveenNath Maharaj"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-orange-700">
            Shri PraveenNath Maharaj
          </h1>

          <p className="mt-4 text-slate-700 text-lg max-w-2xl mx-auto leading-relaxed">
            A revered spiritual guide from Indore, sharing wisdom through satsang, seva,
            and teachings rooted in devotion, compassion, and dharma.
          </p>

        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-orange-700 mb-8">
          About Maharaj Ji
        </h2>

        <p className="text-lg text-slate-700 leading-relaxed mb-5">
          Shri PraveenNath Maharaj is respected for his simple yet powerful spiritual
          guidance, inspiring seekers to lead a life of devotion, righteousness, and compassion.
        </p>

        <p className="text-lg text-slate-700 leading-relaxed mb-5">
          Through satsangs, discourses, and seva, Maharaj Ji guides individuals toward
          inner peace, clarity, and spiritual awakening.
        </p>

        <p className="text-lg text-slate-700 leading-relaxed">
          This website serves as an official platform to stay connected with upcoming
          events, activities, and teachings.
        </p>
      </section>

      {/* QUOTE */}
      <section className="bg-orange-600 text-white py-10 text-center text-xl italic shadow-inner">
        “A life devoted to truth, service, and spiritual awakening.”
      </section>

    </div>
  );
}
