import { SolutionsData } from "@/types/website";

export default function Solutions({ data }: { data: SolutionsData }) {
  const { heading, subheading, products } = data;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark">{heading}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div key={idx} className={`relative group h-64 ${product.colSpan} overflow-hidden cursor-pointer`}>
               {/* Background Placeholder */}
               <div className={`absolute inset-0 ${product.bg} group-hover:scale-105 transition-transform duration-500`}></div>
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
               
               <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                 <p className="text-xs uppercase tracking-widest text-brand-bronze mb-1">{product.desc}</p>
                 <h3 className="text-3xl font-bold">{product.name}</h3>
                 <div className="w-0 group-hover:w-full h-0.5 bg-brand-bronze mt-4 transition-all duration-300"></div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
