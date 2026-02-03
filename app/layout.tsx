import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RiyadhStone® | Engineered Stone",
  description: "Advanced Engineered Stone & Factory GenAI Core",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-[#F9F9F7] font-sans antialiased text-[var(--color-brand-dark)]"
      >
        {children}
      </body>
    </html>
  );
}
