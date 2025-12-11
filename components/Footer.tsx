export default function Footer() {
  return (
    <footer className="mt-20 w-full bg-orange-100 border-t">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center">
        <div className="text-3xl text-orange-600 mb-2">ॐ</div>
        <p className="text-sm sm:text-base text-slate-700">
          Shri PraveenNath Maharaj
        </p>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          © {new Date().getFullYear()} · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
