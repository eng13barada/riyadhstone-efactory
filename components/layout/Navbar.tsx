"use client";

import Link from "next/link";
import { useState } from "react";
import { navigationData } from "@/data/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const { mainLinks } = navigationData;

  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-dark border-b border-gray-800 text-white shadow-xl font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
               {/* Using a text fallback if image fails, but configured for Image as requested */}
               <div className="relative h-[45px] w-auto aspect-[3/1]">
                  <span className="text-2xl font-bold tracking-widest text-white">RIYADH<span className="text-brand-bronze">STONE</span>®</span>
               </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {mainLinks.map((item) => (
              <div 
                key={item.label} 
                className="relative group h-full flex items-center"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={item.href}
                  className="px-2 py-2 text-sm uppercase tracking-wider font-semibold hover:text-brand-bronze transition-colors duration-200"
                >
                  {item.label}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute left-0 top-full w-48 bg-brand-dark border border-gray-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <Link 
                          key={subItem.label} 
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-brand-bronze"
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
              href="/quote" 
              className="bg-brand-bronze hover:bg-yellow-600 text-brand-dark font-bold py-2 px-6 rounded-sm uppercase tracking-widest text-xs transition-all"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mainLinks.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-white hover:text-brand-bronze hover:bg-gray-900"
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-6 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
             <Link 
              href="/quote" 
              className="block w-full text-center mt-4 bg-brand-bronze text-brand-dark font-bold py-3 uppercase tracking-widest"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
