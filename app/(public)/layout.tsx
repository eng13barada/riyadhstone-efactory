import { Navbar } from "@/components/layout/Navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}
