import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-orange-600 tracking-wide"
        >
          Shri PraveenNath Maharaj
        </Link>

        <div className="flex gap-6 text-sm font-medium text-slate-700">
          <Link className="hover:text-orange-600 transition" href="/">Home</Link>
          <Link className="hover:text-orange-600 transition" href="/events">Events</Link>
          <Link className="hover:text-orange-600 transition" href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
