import { ApproachData } from "@/types/website";

export default function Approach({ data }: { data: ApproachData }) {
  const { heading, subheading, steps } = data;

  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Decorative Grid Line Background */}
      <div className="absolute inset-0 opacity-10 bg-grid-pattern bg-[length:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">{heading}</h2>
          <p className="text-gray-400 mt-2">{subheading}</p>
        </div>

        <div className="relative">
           {/* Horizontal Line for Desktop */}
           <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2"></div>
           
           <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
             {steps.map((item, i) => (
               <div key={i} className="relative z-10 bg-brand-dark p-4 border border-gray-700 hover:border-brand-bronze transition-colors flex flex-col items-center text-center group">
                 <div className="text-brand-bronze text-sm font-bold mb-2 group-hover:scale-110 transition-transform">{item.step}</div>
                 <div className="w-3 h-3 bg-gray-500 rounded-full mb-4 group-hover:bg-brand-bronze transition-colors"></div>
                 <h4 className="font-bold text-sm uppercase tracking-wide">{item.label}</h4>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
