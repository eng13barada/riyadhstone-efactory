import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "RiyadhStone® | Engineered Stone Solutions",
  description: "An engineering-led stone solutions brand delivering trusted results for strategic projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-sans antialiased bg-brand-base text-brand-cream min-h-screen flex flex-col"
      >
        <Navbar />
        {/* Main content wrapper */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
