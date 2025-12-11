export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-[#4a0707] to-[#7a1111] shadow-lg border-b border-gold-500">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-center gap-10 text-lg font-semibold text-gold-300">
        <a href="/" className="hover:text-gold-100 transition">Home</a>
        <a href="/events" className="hover:text-gold-100 transition">Events</a>
        <a href="/contact" className="hover:text-gold-100 transition">Contact</a>
      </div>
    </nav>
  );
}
