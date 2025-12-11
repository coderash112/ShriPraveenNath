export default function HomePage() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="py-12">
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center">
            <div className="

              w-24 h-24
              sm:w-28 sm:h-28
              md:w-32 md:h-32
              rounded-full
              overflow-hidden
              border-4 border-orange-300
              shadow-md
            ">
              <img
                src="/images/guruji.jpg"
                alt="Shri PraveenNath Maharaj"
                className="w-full h-full object-cover object-[50%_35%]"

              />
            </div>
          </div>

          <div className="bg-red-600 h-10">TEST</div>

          <h1 className="text-3xl sm:text-4xl font-bold text-orange-700">
            Shri PraveenNath Maharaj
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-xl">
            A revered spiritual guide from Indore, sharing wisdom through satsang,
            seva, and teachings rooted in devotion, compassion, and dharma.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold text-orange-700 mb-6">
          About Maharaj Ji
        </h2>

        <div className="space-y-4 text-base sm:text-lg text-slate-700 max-w-3xl mx-auto">
          <p>
            Shri PraveenNath Maharaj is respected for his simple yet powerful spiritual guidance,
            inspiring seekers toward inner peace, devotion, and righteous living.
          </p>

          <p>
            Through satsangs, spiritual discourses, and seva, Maharaj Ji has guided many individuals
            on the path of self-realization and dharma.
          </p>

          <p>
            This website serves as the official platform to stay updated with upcoming spiritual
            gatherings and events.
          </p>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-8 bg-orange-600 rounded-xl text-white mx-4">
        <p className="text-lg italic">
          “A life devoted to truth, service, and spiritual awakening.”
        </p>
      </section>

    </div>
  );
}
