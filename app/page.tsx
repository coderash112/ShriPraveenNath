export default function HomePage() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="flex flex-col items-center text-center mt-10">
        <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full border-4 border-gold-400 shadow-[0_0_40px_rgba(255,204,0,0.4)] overflow-hidden">
          <img
            src="/images/guruji.jpg"
            alt="Shri PraveenNath Maharaj"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gold-200 mt-6 drop-shadow-lg">
          Shri PraveenNath Maharaj
        </h1>

        <p className="text-lg sm:text-xl text-gold-100 mt-4 max-w-2xl">
          A revered spiritual master whose teachings illuminate the path of
          devotion, dharma, and inner transformation.
        </p>
      </section>
  
      {/* ABOUT SECTION */}
      <section className="mt-14 bg-[#4a0707]/40 rounded-xl p-8 mx-4 max-w-3xl mx-auto border border-gold-500 shadow-xl">
        <h2 className="text-3xl font-semibold text-gold-300 mb-5">About Maharaj Ji</h2>

        <p className="text-gold-100 leading-relaxed">
          Shri PraveenNath Maharaj is known for his deep spiritual wisdom and
          compassionate guidance. Through satsang, seva, and divine teachings,
          he inspires countless devotees to live a righteous, peaceful, and
          spiritually awakened life.
        </p>
      </section>


      {/* QUOTE */}
      <section className="mt-14 mx-4">
        <div className="bg-gold-400 text-[#4a0707] rounded-xl py-6 px-4 shadow-xl text-xl italic">
          “A soul that walks the path of truth shines brighter than gold.”
        </div>
      </section>
    </div>
  );
}
