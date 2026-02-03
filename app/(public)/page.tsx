'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Ruler, Zap, PenTool } from 'lucide-react';

export default function HomePage() {
  const [hoveredSketch, setHoveredSketch] = useState<number | null>(null);

  // Simulated Stone Textures for Product Cards
  const stoneTextures = [
    "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?q=80&w=600&auto=format&fit=crop", // Limestone
    "https://images.unsplash.com/photo-1593642634369-387a27fc3ae7?q=80&w=600&auto=format&fit=crop", // White Marble
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop", // Granite
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop", // Darker stone accent
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F7] font-sans selection:bg-[var(--color-brand-gold)] selection:text-black text-[var(--color-brand-dark)]">
      
      {/* ---------------------------------------------------------------------------
          HERO SECTION: "Stone Clarity"
          Architectural white stone background.
      --------------------------------------------------------------------------- */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          {/* Main Architectural Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop")',
            }}
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
          
          {/* Subtle Geometric Texture Overlay */}
          <div 
            className="absolute inset-0 opacity-20 mix-blend-multiply" 
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
                backgroundSize: '100px 100px'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-block mb-6 px-4 py-1.5 border border-black/10 rounded-full bg-white/40 backdrop-blur-sm">
                <span className="text-[var(--color-brand-gold)] text-xs font-mono tracking-widest uppercase font-bold">
                    E-Factory GenAI Core v3.0
                </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-[var(--color-brand-dark)]">
              Engineered Stone.<br />
              <span className="text-[var(--color-brand-gold)]">
                Trusted Results.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 mb-10 leading-relaxed font-medium">
              From architectural vision to certified reality. Serving strategic projects with precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-[var(--color-brand-gold)] text-white font-bold text-sm tracking-wide uppercase hover:bg-black transition-colors duration-300 shadow-lg">
                  Explore Engineering Systems
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Element - Subtle on Light Theme */}
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -right-1/4 w-[50vw] h-[50vw] border border-black/5 rounded-full opacity-30 pointer-events-none" 
        />
      </section>


      {/* ---------------------------------------------------------------------------
          ENGINEERING SECTION: "Sketch-to-Reality" Interaction
      --------------------------------------------------------------------------- */}
      <section className="py-32 px-6 bg-white border-t border-black/5 relative">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Text Content */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[var(--color-brand-dark)]">
                        From Concept to <span className="text-[var(--color-brand-gold)]">Reality</span>
                    </h2>
                    <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                        Our engineering process bridges the gap between artistic vision and structural integrity. 
                        Interact with our systems below to see how we translate technical sketches into tangible luxury.
                    </p>
                    
                    <div className="space-y-8">
                        {[
                            { title: "Precision Milling", desc: "5-Axis CNC machining for complex geometries.", icon: Ruler },
                            { title: "Structural Analysis", desc: "FEM load testing for guaranteed safety.", icon: Layers },
                            { title: "Rapid Prototyping", desc: "3D printed conceptual models before production.", icon: Zap },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-4 border border-black/5 rounded-lg hover:border-[var(--color-brand-gold)]/50 transition-colors bg-[#F9F9F7]">
                                <div className="p-3 bg-white h-fit rounded text-[var(--color-brand-gold)] shadow-sm">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--color-brand-dark)] mb-1">{item.title}</h3>
                                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Interactive Sketch-to-Reality Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((id, index) => (
                        <div 
                            key={id}
                            className="relative aspect-square group overflow-hidden border border-black/10 rounded-sm cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                            onMouseEnter={() => setHoveredSketch(id)}
                            onMouseLeave={() => setHoveredSketch(null)}
                        >
                            {/* Layer 1: Simulated Real Stone (High Quality Texture) */}
                            <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${stoneTextures[index % stoneTextures.length]}')` }}
                                ></div>
                                <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
                            </div>

                            {/* Layer 2: Sketch/Technical Drawing Overlay */}
                            <motion.div 
                                className="absolute inset-0 bg-white/90 flex items-center justify-center border-2 border-dashed border-black/10 p-4"
                                animate={{ opacity: hoveredSketch === id ? 0 : 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="text-center">
                                    <PenTool className="w-8 h-8 text-black/20 mx-auto mb-2" />
                                    <span className="text-black/40 font-mono text-xs uppercase font-bold">
                                        Sketch {id} <br/> D-2026-X
                                    </span>
                                </div>
                                {/* Grid lines for sketch effect */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:20px_20px]" />
                            </motion.div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
      </section>

    </div>
  );
}
