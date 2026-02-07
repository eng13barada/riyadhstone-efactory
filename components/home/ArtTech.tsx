import { ArtTechData } from "@/types/website";

export default function ArtTech({ data }: { data: ArtTechData }) {
  const { heading, description, technologies, imagePlaceholder, badge } = data;

  return (
    <section className="py-24 bg-white border-y border-gray-200">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
             <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6">{heading}</h2>
             <p className="text-gray-600 mb-8 leading-relaxed">
               {description}
             </p>
             
             <div className="space-y-4">
               {technologies.map((tech) => (
                 <div key={tech} className="flex items-center p-4 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all cursor-pointer">
                    <div className="w-10 h-10 bg-brand-dark text-white flex items-center justify-center font-bold mr-4">&gt;</div>
                    <span className="font-bold text-brand-dark">{tech}</span>
                 </div>
               ))}
             </div>
          </div>
          
          <div className="w-full lg:w-1/2 h-[400px] bg-gray-100 relative">
             {/* Tech Image Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center text-center p-8 bg-gray-200 text-gray-500">
               {imagePlaceholder}
             </div>
             {/* Floating Badge */}
             <div className="absolute bottom-8 right-8 bg-brand-bronze text-white px-6 py-4 font-bold shadow-xl">
               {badge}
             </div>
          </div>
       </div>
    </section>
  );
}
