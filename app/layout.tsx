import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-inter">
        <Navbar />
        {/* Padding top = navbar height */}
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
