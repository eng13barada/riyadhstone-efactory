import Link from "next/link";
import { HeroData } from "@/types/website";

export default function Hero({ data }: { data: HeroData }) {
  const { est, title, subtitle, quote, description, cta, trustStrip, imagePlaceholder } = data;

  return (
    <section className="relative w-full h-[90vh] flex flex-col lg:flex-row bg-brand-dark text-white overflow-hidden">
      {/* Left: Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-20 z-10 relative">
        <div className="space-y-6 max-w-xl">
           <div className="inline-block px-3 py-1 border border-brand-bronze text-brand-bronze text-xs tracking-[0.2em] uppercase font-bold">
            {est}
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            {title} <br />
            <span className="text-brand-bronze">{subtitle}</span>
          </h1>
          <p className="text-xl text-gray-300 border-l-4 border-brand-bronze pl-4">
            {quote}
          </p>
          <p className="text-gray-400">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href={cta.primary.href} className="px-8 py-3 bg-brand-bronze text-brand-dark font-bold uppercase tracking-widest hover:bg-white transition-colors">
              {cta.primary.label}
            </Link>
            <Link href={cta.secondary.href} className="px-8 py-3 border border-gray-500 text-white font-bold uppercase tracking-widest hover:border-white transition-colors">
              {cta.secondary.label}
            </Link>
          </div>

          {/* Trust Strip */}
          <div className="pt-12 flex space-x-8 text-xs text-gray-500 uppercase tracking-wider">
             {trustStrip.map((item, index) => (
               <div key={index} className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-brand-bronze rounded-full"></div>
                 {item}
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Right: Cinematic Image */}
      <div className="w-full lg:w-1/2 h-full relative">
        <div className="absolute inset-0 bg-brand-dark/20 z-10"></div> {/* Overlay */}
        <div className="w-full h-full relative bg-gray-800">
           {/* Placeholder for Hero Image */}
           <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-center p-8 bg-neutral-900">
              {imagePlaceholder}
           </div>
        </div>
      </div>
    </section>
  );
}
