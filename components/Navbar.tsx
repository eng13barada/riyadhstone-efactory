"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const sections = ["ABOUT", "ENGINEERING", "PRODUCTS", "TECHNOLOGY", "QUALITY", "HSE", "SUSTAINABILITY", "LIBRARY", "CONTACT"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-dark text-brand-cream border-b border-white/10 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl tracking-tighter cursor-pointer">
          <span className="font-extralight">Riyadh</span><span className="font-bold">Stone</span>
          <sup className="text-[10px] ml-0.5 font-light">®</sup>
        </div>
        <div className="hidden xl:flex gap-6">
          {sections.map((item) => (
            <button
              key={item}
              onMouseEnter={() => setActiveMenu(item)}
              className="text-[10px] font-bold tracking-[0.15em] hover:text-brand-gold transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
        <button className="bg-brand-gold text-brand-dark px-5 py-2 text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-colors">
          Technical Hub
        </button>
      </div>
      {/* Mega Menu Placeholder */}
      {activeMenu && (
        <div onMouseLeave={() => setActiveMenu(null)} className="absolute left-0 w-full bg-brand-cream text-brand-dark shadow-2xl p-12 min-h-[300px] border-t border-brand-charcoal/10 animate-in fade-in slide-in-from-top-2 duration-200">
           <div className="container mx-auto">
             <h4 className="text-4xl font-light text-brand-gold mb-4">{activeMenu}</h4>
             <p className="text-brand-charcoal/60">Exploring {activeMenu} capabilities...</p>
           </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
