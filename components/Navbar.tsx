import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur border-b z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-center items-center gap-6 text-sm font-medium text-orange-700">
        <Link href="/" className="hover:text-orange-900 transition">
          Home
        </Link>
        <Link href="/events" className="hover:text-orange-900 transition">
          Events
        </Link>
        <Link href="/contact" className="hover:text-orange-900 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}
