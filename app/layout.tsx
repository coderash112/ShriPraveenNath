import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Shri PraveenNath Maharaj",
  description:
    "Official website of Shri PraveenNath Maharaj – spiritual guide from Indore",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center bg-orange-50 text-center">

        <Navbar />
        <main className="w-full px-4 pt-20 flex justify-center">
          <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6 text-center">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
