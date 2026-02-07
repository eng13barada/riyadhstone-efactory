import { WhyUsData } from "@/types/website";

export default function WhyUs({ data }: { data: WhyUsData }) {
  const { heading, cards } = data;
  
  return (
    <section className="py-24 bg-brand-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">{heading}</h2>
          <div className="w-24 h-1 bg-brand-bronze mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="group bg-white shadow-lg border-b-4 border-transparent hover:border-brand-bronze transition-all duration-300">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                 {/* Placeholder Image */}
                 <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-xs text-gray-500 text-center p-4">
                   [IMG: {card.imgAlt}]
                 </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-brand-dark mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
