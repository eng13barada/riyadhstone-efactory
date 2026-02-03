"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

// Navigation Data
const navItems = [
  {
    label: "Main Page",
    href: "/",
  },
  {
    label: "ABOUT",
    href: "/about",
    submenu: [
      { label: "Who is RiyadhStone", href: "/about/who-we-are" },
      { label: "Vision & Mission", href: "/about/vision" },
      { label: "Factory Capabilities", href: "/about/factory" },
    ],
  },
  {
    label: "ENGINEERING PRODUCTS",
    href: "/products",
    submenu: [
      { label: "RiyadEx™ (Exterior Cladding)", href: "/products/riyadex" },
      { label: "RiyadFloor™ (Flooring Systems)", href: "/products/riyadfloor" },
      { label: "RiyadCiv™ (Civil Works)", href: "/products/riyadciv" },
      { label: "RiyadWet™ (Pools & Water Features)", href: "/products/riyadwet" },
      { label: "RiyadUrb™ (Urban Furniture)", href: "/products/riyadurb" },
      { label: "RiyadStep™ (Staircases)", href: "/products/riyadstep" },
      { label: "RiyadRaw™ (Slabs & Blocks)", href: "/products/riyadraw" },
    ],
  },
  {
    label: "ART & TECHNOLOGY",
    href: "/technology",
    submenu: [
      { label: "Fly with RiyadhStone (Drone)", href: "/technology/drone" },
      { label: "Reality Capture (3D/Scanning)", href: "/technology/reality-capture" },
      { label: "Urban Design Study", href: "/technology/urban-design" },
    ],
  },
  {
    label: "QUALITY",
    href: "/quality",
    submenu: [
      { label: "QMS & Standards", href: "/quality/qms" },
      { label: "Testing & Inspection", href: "/quality/testing" },
      { label: "Traceability", href: "/quality/traceability" },
    ],
  },
  {
    label: "HSE & SUSTAINABILITY",
    href: "/hse",
  },
  {
    label: "LIBRARY",
    href: "/library",
    submenu: [
      { label: "Downloads", href: "/library/downloads" },
      { label: "Technical Data Sheets", href: "/library/data-sheets" },
    ],
  },
  {
    label: "CONTACT US",
    href: "/contact",
  },
];

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F7]/90 text-[var(--color-brand-dark)] backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter uppercase relative z-50 text-[var(--color-brand-dark)]"
        >
          Riyadh<span className="text-[var(--color-brand-gold)]">Stone</span>®
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex h-full items-center gap-6 xl:gap-8">
          {navItems.map((item, index) => (
            <div
              key={item.label}
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                href={item.href}
                className="text-xs xl:text-sm font-bold tracking-wide hover:text-[var(--color-brand-gold)] transition-colors flex items-center gap-1 group uppercase"
              >
                {item.label}
                {item.submenu && (
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-300 ${hoveredIndex === index ? "rotate-180" : ""}`}
                  />
                )}
              </Link>

              {/* Mega Menu / Dropdown */}
              <AnimatePresence>
                {item.submenu && hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-0 min-w-[200px]"
                  >
                    <div className="bg-white border border-black/5 p-4 shadow-xl rounded-sm">
                      <div className="flex flex-col gap-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="text-sm font-medium text-zinc-500 hover:text-[var(--color-brand-dark)] hover:bg-zinc-50 p-2 rounded block transition-all"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-[var(--color-brand-dark)] relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed inset-0 bg-[#F9F9F7] z-40 flex flex-col pt-24 px-8 overflow-y-auto lg:hidden"
            >
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-black/10 pb-4"
                  >
                    <Link
                      href={item.href}
                      className="text-lg font-bold tracking-wide text-[var(--color-brand-dark)] hover:text-[var(--color-brand-gold)] block mb-4 uppercase"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <div className="flex flex-col gap-3 pl-4 border-l border-black/10">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="text-sm text-zinc-500 hover:text-[var(--color-brand-dark)] transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
