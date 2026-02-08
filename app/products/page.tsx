import React from 'react';
import { ArrowRight, Box, Layers, Hammer, Droplets, Armchair, TrendingUp } from 'lucide-react';

export default function ProductEcosystem() {
  const products = [
    {
      id: 'riyadex',
      title: 'RiyadEx™',
      subtitle: 'FACADE SYSTEMS',
      description: 'Advanced stone cladding and exterior solutions.',
      icon: Box,
      colSpan: 'md:col-span-1',
      rowSpan: 'md:row-span-2',
      bg: 'bg-brand-cream',
    },
    {
      id: 'riyadfloor',
      title: 'RiyadFloor™',
      subtitle: 'PAVING SYSTEMS',
      description: 'Durable stone flooring for high-traffic zones.',
      icon: Layers,
      colSpan: 'md:col-span-1',
      bg: 'bg-brand-cream',
    },
    {
      id: 'riyadciv',
      title: 'RiyadCiv™',
      subtitle: 'INFRASTRUCTURE',
      description: 'Heavy-duty stone for civil engineering projects.',
      icon: Hammer,
      colSpan: 'md:col-span-1',
      bg: 'bg-brand-mud text-brand-beige', 
    },
    {
      id: 'riyadwet',
      title: 'RiyadWet™',
      subtitle: 'WATER SYSTEMS',
      description: 'Specialized stone for pools and fountains.',
      icon: Droplets,
      colSpan: 'md:col-span-1',
      bg: 'bg-brand-cream',
    },
    {
      id: 'riyadurb',
      title: 'RiyadUrb™',
      subtitle: 'URBAN FURNITURE',
      description: 'Functional stone art for public spaces.',
      icon: Armchair,
      colSpan: 'md:col-span-1',
      bg: 'bg-brand-charcoal text-brand-beige',
    },
    {
      id: 'riyadstep',
      title: 'RiyadStep™',
      subtitle: 'STAIR SYSTEMS',
      description: 'Precision-cut stone staircases.',
      icon: TrendingUp,
      colSpan: 'md:col-span-2 lg:col-span-1', // Fill remaining space in 3-col grid logic
      bg: 'bg-brand-cream',
    },
  ];

  return (
    <div className="min-h-screen bg-brand-beige text-brand-charcoal font-sans p-6 md:p-12">
      <header className="mb-12 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight">
          Integrated <span className="font-bold">Stone</span>
          <br /> Engineering Systems
        </h1>
        <div className="mt-4 h-1 w-24 bg-brand-gold"></div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
        {products.map((product) => (
          <div
            key={product.id}
            className={`
              ${product.colSpan} ${product.rowSpan || ''}
              ${product.bg}
              p-8 flex flex-col justify-between
              rounded-none border border-black/5 shadow-sm
              hover:shadow-lg transition-shadow duration-300
              group relative overflow-hidden
            `}
          >
            {/* Hover Noise Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-brand-gold pointer-events-none mix-blend-multiply"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                 <product.icon className={`w-8 h-8 opacity-80 ${product.bg.includes('text-brand-beige') ? 'text-brand-gold' : 'text-brand-charcoal'}`} strokeWidth={1.5} />
                 <span className="text-xs font-bold tracking-[0.2em] opacity-60 uppercase">{product.id}</span>
              </div>
              
              <h3 className="text-2xl font-bold uppercase mb-2 tracking-wide">{product.title}</h3>
              <p className="text-xs font-medium tracking-[0.15em] opacity-70 mb-4">{product.subtitle}</p>
              <p className={`text-sm opacity-80 leading-relaxed max-w-[80%] ${product.bg.includes('text-brand-beige') ? 'text-white/80' : 'text-brand-charcoal/80'}`}>
                {product.description}
              </p>
            </div>

            <div className="relative z-10 mt-8 flex justify-end">
               <ArrowRight className={`w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300 ${product.bg.includes('text-brand-beige') ? 'text-brand-gold' : 'text-brand-charcoal'}`} />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
