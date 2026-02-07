import Link from "next/link";
import { TrustTrioData } from "@/types/website";

export default function TrustTrio({ data }: { data: TrustTrioData }) {
  const { cards } = data;

  return (
    <section className="py-20 bg-brand-paper">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {cards.map((card, i) => (
               <div key={i} className="bg-white p-8 border-l-4 border-brand-bronze shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-brand-dark">{card.title}</h3>
                  <ul className="space-y-3">
                    {card.items.map((li, k) => (
                      <li key={k} className="flex items-center text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-brand-dark mr-2 rounded-full"></span>
                        {li}
                      </li>
                    ))}
                  </ul>
                  <Link href="/quality" className="inline-block mt-8 text-brand-bronze font-bold text-sm uppercase hover:text-brand-dark">View Policies &rarr;</Link>
               </div>
             ))}
          </div>
       </div>
    </section>
  );
}
