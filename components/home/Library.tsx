import Link from "next/link";
import { LibraryData } from "@/types/website";

export default function Library({ data }: { data: LibraryData }) {
  const { heading, description, searchPlaceholder, links } = data;

  return (
    <section className="py-20 bg-brand-dark text-white text-center">
       <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{heading}</h2>
          <p className="text-gray-400 mb-10">{description}</p>
          
          <div className="relative max-w-lg mx-auto mb-12">
             <input type="text" placeholder={searchPlaceholder} className="w-full py-4 px-6 rounded-none text-brand-dark focus:outline-none focus:ring-4 focus:ring-brand-bronze" />
             <button className="absolute right-2 top-2 bottom-2 bg-brand-bronze text-brand-dark px-6 font-bold uppercase hover:bg-white transition-colors">Search</button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-gray-400">
             {links.map((link, i) => (
                <div key={link} className="flex items-center gap-4">
                  <Link href="/library" className="hover:text-white underline">{link}</Link>
                  {i < links.length - 1 && <span>/</span>}
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}
