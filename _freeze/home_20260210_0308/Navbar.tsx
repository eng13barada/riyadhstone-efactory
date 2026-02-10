"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navigationData } from "@/data/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const { mainLinks } = navigationData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 font-sans ${scrolled ? "bg-brand-charcoal/95 backdrop-blur-md shadow-2xl py-2 border-b border-white/5" : "bg-transparent py-6 border-b border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="group">
               <div className={`relative flex items-center transition-all duration-300 ${scrolled ? "scale-90 origin-left" : "scale-100"}`}>
                  <span className="text-2xl tracking-widest text-white">
                    <span className="font-light">RIYADH</span>
                    <span className="font-extrabold">STONE</span>
                    <span className="font-light text-sm align-top ml-1">®</span>
                  </span>
               </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainLinks.map((item) => (
              <div 
                key={item.label} 
                className="relative group h-full flex items-center py-4"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={item.href}
                  className="text-sm uppercase tracking-wider font-medium text-white/80 hover:text-brand-gold transition-colors duration-200"
                >
                  {item.label}
                </Link>
                
                {item.dropdown && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="w-56 bg-brand-charcoal border border-white/10 shadow-2xl p-1 rounded-sm">
                      {item.dropdown.map((subItem) => (
                        <Link 
                          key={subItem.label} 
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-brand-gold transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="/contact" 
              className={`bg-brand-gold hover:bg-white hover:text-brand-charcoal text-brand-charcoal font-black rounded-sm uppercase tracking-widest text-xs transition-all ${scrolled ? "py-3 px-6" : "py-4 px-8"}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-gold hover:text-white transition-colors p-2"
            >
              {mobileMenuOpen ? (
                 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-charcoal/95 backdrop-blur-xl border-t border-white/10 absolute w-full h-screen left-0 top-full overflow-y-auto pb-20">
          <div className="px-6 py-8 space-y-6">
            {mainLinks.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block text-3xl font-light text-white hover:text-brand-gold mb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                    <div className="pl-4 mt-2 border-l border-white/10 space-y-3 mb-6">
                        {item.dropdown.map(subItem => (
                            <Link key={subItem.label} href={subItem.href} className="block text-sm text-white/50 hover:text-brand-gold uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                                {subItem.label}
                            </Link>
                        ))}
                    </div>
                )}
              </div>
            ))}
             <Link 
              href="/contact" 
              className="block w-full text-center bg-brand-gold text-brand-charcoal font-black py-4 mt-8 uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
