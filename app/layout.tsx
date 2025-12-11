import "./globals.css";
import Navbar from "./components/Navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shri PraveenNath Maharaj",
  description: "Official website of Shri PraveenNath Maharaj",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;700&family=Spectral:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="min-h-screen bg-gradient-to-b from-[#5a0a0a] via-[#7a1111] to-[#a4161a]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
