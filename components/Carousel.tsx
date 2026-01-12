"use client";

import { useState, useEffect } from "react";

const images = [
  "/images/guruji1.jpg",
  "/images/guruji2.jpg",
  "/images/guruji3.jpg",
  "/images/guruji4.jpg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-10 w-full flex justify-center">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-xl shadow-xl border border-gold-500">

        <div
          className="whitespace-nowrap transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              className="inline-block w-full h-64 sm:h-80 object-cover"
              alt="Maharaj Ji Event"
            />
          ))}
        </div>

        {/* Left */}
        <button
          onClick={() => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1))}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full hover:bg-black/60"
        >
          ‹
        </button>

        {/* Right */}
        <button
          onClick={() => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full hover:bg-black/60"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 w-full flex justify-center gap-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${
                current === idx ? "bg-gold-300" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
