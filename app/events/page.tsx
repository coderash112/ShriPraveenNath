export default function EventsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold text-orange-600 mb-6">
        Upcoming Events
      </h1>

      <div className="space-y-4">
        <div className="bg-white border rounded-xl p-4">
          <p className="font-medium">14 January 2026</p>
          <p className="text-sm text-slate-600">
            श्री श्री रेणुकामाता स्थान,इंदौर द्वारा मुक्ताईनगर,खामगांव, शेगांव और अकोला,की धार्मिक सद्गुरु श्री सत्यनाथ महाराज चरण पादुका यात्रा दिनाँक 12/01/2026 से 14/01/2026 तक निर्धारित है
          </p>
        </div>
        {/* LOCATION SECTION */}
        <section className="mt-12 w-full flex justify-center px-4">
          <div className="w-full max-w-3xl bg-white/80 rounded-xl overflow-hidden border border-gold-500 shadow-[0_0_25px_rgba(255,200,0,0.4)] backdrop-blur">

            {/* Heading */}
            <h3 className="text-2xl font-semibold text-gold-300 text-center py-4 bg-[#4a0707]/70">
              📍 Event Location
            </h3>
            {/* Clickable Map */}
            <a
              href="https://www.google.com/maps/place/Akola,+Maharashtra/@20.7020941,77.0255243,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.0378961581486!2d77.0081678!3d20.7002159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd73192c32a5df1%3A0xcfa72a91e826b253!2sAkola%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="260"
                style={{ border: 0, pointerEvents: "none" }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </a>

            {/* Footer Button */}
            <div className="p-4 text-center bg-white">
              <a
                href="https://www.google.com/maps/place/Akola,+Maharashtra/@20.7020941,77.0255243,15z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold-400 text-[#4a0707] font-semibold px-5 py-2 rounded-lg shadow hover:bg-gold-500 transition"
              >
                👉 View Full Map
              </a>
            </div>
          </div>
        </section>

        <div className="bg-white border rounded-xl p-4">
          <p className="font-medium">11 December 2025</p>
          <p className="text-sm text-slate-600">
             सभी माता भक्तों को सूचित किया जाता है की,
              दिनांक 11 दिसंबर 2025 गुरुवार को मां रेणुका का कुमकुम अर्चन पूजा सह गुरुवार उपासना
              श्री अनंतजी नेवासकर के निवास पर रखी गई है।
              जिनका निवास का पत्ता नीचे दिया गया है।
              <br/>
              समय शाम 5 बजे से।
              <br/>

              स्थान: मकान नंबर 1592 D सेक्टर
              सुदामा नगर नेमा कुल्फी के सामने वाली गली
              <br/>

              मोबाइल: 9826150729
          </p>
        </div>
        {/* LOCATION SECTION */}
        <section className="mt-12 w-full flex justify-center px-4">
          <div className="w-full max-w-3xl bg-white/80 rounded-xl overflow-hidden border border-gold-500 shadow-[0_0_25px_rgba(255,200,0,0.4)] backdrop-blur">

            {/* Heading */}
            <h3 className="text-2xl font-semibold text-gold-300 text-center py-4 bg-[#4a0707]/70">
              📍 Event Location
            </h3>

            {/* Clickable Map */}
            <a
              href="https://www.google.com/maps?q=22.6875612,75.8326807&z=17&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14766.05902115093!2d75.8326807!3d22.6875612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1736600000000"
                width="100%"
                height="260"
                style={{ border: 0, pointerEvents: "none" }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </a>

            {/* Footer Button */}
            <div className="p-4 text-center bg-white">
              <a
                href="https://www.google.com/maps?q=22.6875612,75.8326807&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold-400 text-[#4a0707] font-semibold px-5 py-2 rounded-lg shadow hover:bg-gold-500 transition"
              >
                👉 View Full Map
              </a>
            </div>

          </div>
        </section>


        <div className="bg-white border rounded-xl p-4">
          <p className="font-medium">10 January 2026</p>
          <p className="text-sm text-slate-600">
            Spiritual gathering and bhajan evening – Ujjain
          </p>
        </div>
      </div>
    </div>
  );
}
