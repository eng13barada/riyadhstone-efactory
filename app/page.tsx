import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Download, 
  ExternalLink, 
  Menu, 
  Phone, 
  ShieldCheck, 
  Zap, 
  Box, 
  Layers, 
  Cpu, 
  Factory, 
  HardHat, 
  FileText, 
  Activity, 
  Users,
  MapPin,
  Globe
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-brand-charcoal min-h-screen text-brand-cream selection:bg-brand-gold selection:text-brand-charcoal overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero_tower.jpg"
            alt="Riyadh Skyscraper Facade"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-brand-charcoal"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-1 border border-brand-gold/30 rounded-full bg-black/40 backdrop-blur-sm">
            <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">Est. 2004 • Riyadh, KSA</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-8 text-white">
            Engineering<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-beige to-brand-gold bg-[length:200%_auto] animate-gradient">Legacy</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-white/80 font-light mb-12 leading-relaxed tracking-wide">
            Transforming raw geology into architectural precision for the Kingdom's most strategic projects.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="#contact" className="bg-brand-gold text-brand-charcoal px-10 py-4 font-black uppercase tracking-widest hover:bg-white transition-all flex items-center gap-3 group">
              Start Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 w-full flex justify-center animate-bounce">
          <ChevronDown className="w-6 h-6 text-brand-gold/50" />
        </div>
      </section>

      {/* 2. TRUST EQUATION (Beige Background) */}
      <section className="py-24 bg-[#F3EAD3] text-brand-charcoal relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
            <div className="text-center group">
              <span className="block text-7xl font-black text-brand-gold mb-2 group-hover:scale-110 transition-transform duration-300">15+</span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-charcoal/40">Years Experience</span>
            </div>
            <div className="h-16 w-[1px] bg-brand-charcoal/10 hidden md:block"></div>
            <div className="text-center group">
              <span className="block text-7xl font-black text-brand-gold mb-2 group-hover:scale-110 transition-transform duration-300">2M+</span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-charcoal/40">SQM Installed</span>
            </div>
            <div className="h-16 w-[1px] bg-brand-charcoal/10 hidden md:block"></div>
            <div className="text-center group">
              <span className="block text-7xl font-black text-brand-gold mb-2 group-hover:scale-110 transition-transform duration-300">100%</span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-charcoal/40">Delivery Rate</span>
            </div>
          </div>
          
          <div className="mt-20 text-center max-w-5xl mx-auto p-10 border border-brand-charcoal/5 bg-white/50 backdrop-blur-sm rounded-sm">
             <h3 className="text-3xl font-light italic text-brand-mud">
               "We don't just supply stone. We engineer confidence."
             </h3>
          </div>
        </div>
      </section>

      {/* 3. PIPELINE (Horizontal Scroll) */}
      <section className="py-24 bg-brand-charcoal border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase block mb-3">The E-Factory Process</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-white">From Chat to Build</h2>
            </div>
            <div className="text-right hidden md:block">
               <span className="text-xs text-white/40 uppercase tracking-widest">Scroll to Explore →</span>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            {[
              { icon: FileText, title: "01. Input", desc: "Upload PDFs & CADs directly to the AI core.", color: "text-blue-400" },
              { icon: Cpu, title: "02. AI Analysis", desc: "Automated quantity takeoff & block optimization.", color: "text-purple-400" },
              { icon: Layers, title: "03. Engineering", desc: "Generation of shop drawings & cut lists.", color: "text-brand-gold" },
              { icon: Factory, title: "04. Fabrication", desc: "Direct-to-CNC execution code.", color: "text-orange-400" },
              { icon: CheckCircle2, title: "05. QC & Tagging", desc: "Digital inspection & QR coding per slab.", color: "text-green-400" },
              { icon: HardHat, title: "06. Installation", desc: "Site coordination & mechanical fixing.", color: "text-yellow-400" }
            ].map((step, idx) => (
              <div key={idx} className="min-w-[300px] md:min-w-[400px] snap-center bg-white/5 p-10 border border-white/10 hover:border-brand-gold/30 transition-colors rounded-sm group">
                <div className="flex justify-between items-start mb-8">
                   <span className={`font-mono text-sm opacity-50 ${step.color}`}>{step.title.split('.')[0]}</span>
                   <step.icon className={`w-8 h-8 ${step.color} group-hover:scale-110 transition-transform`} />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4 text-white">{step.title.split('. ')[1]}</h3>
                <p className="text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENTO GRID (Facade, Factory Cards) */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto md:h-[600px]">
             
             {/* Card 1: Facade (RiyadEx) */}
             <div className="md:col-span-2 group relative overflow-hidden rounded-sm bg-brand-charcoal">
                <Image 
                   src="/assets/images/retail_facade_night.jpg" 
                   alt="Riyadh Stone Facade" 
                   fill 
                   className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                   <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase block mb-2">RiyadEx™</span>
                      <h3 className="text-3xl font-black uppercase mb-4">Exterior Solutions</h3>
                      <p className="text-white/70 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                         Complex geometries, ventilated facades, and heavy-duty mechanical fixation systems engineered for extreme desert climates.
                      </p>
                   </div>
                </div>
             </div>

             {/* Card 2: Factory (RiyadFloor) */}
             <div className="group relative overflow-hidden rounded-sm bg-brand-charcoal">
                <Image 
                   src="/assets/images/factory_slab.jpg" 
                   alt="Factory Capabilities" 
                   fill 
                   className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                   <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase block mb-2">RiyadFloor™</span>
                      <h3 className="text-2xl font-black uppercase mb-4">Precision Cut</h3>
                      <button className="text-xs font-bold uppercase tracking-widest border-b border-brand-gold pb-1 text-brand-gold hover:text-white hover:border-white transition-colors">
                         View Capabilities
                      </button>
                   </div>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* 5. FINISHES (3 Vertical Columns) */}
      <section className="py-24 bg-brand-charcoal">
         <div className="container mx-auto px-6 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">Material Finishes</h2>
            <p className="text-white/60">Curated textures for discerning architects.</p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 h-[600px] md:h-[800px] w-full">
            {/* Column 1 */}
            <div className="relative group overflow-hidden border-r border-white/5">
               <Image 
                  src="/assets/images/texture_creamy_honed.jpg" 
                  alt="Cream Honed" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-500"></div>
               <div className="absolute bottom-10 left-10 z-10">
                  <span className="text-xs font-mono text-white/60 block mb-2">01</span>
                  <h3 className="text-2xl font-black uppercase text-white">Cream Honed</h3>
               </div>
            </div>

            {/* Column 2 */}
            <div className="relative group overflow-hidden border-r border-white/5">
               <Image 
                  src="/assets/images/texture_golden_hammered.jpg" 
                  alt="Golden Hammered" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-500"></div>
               <div className="absolute bottom-10 left-10 z-10">
                  <span className="text-xs font-mono text-white/60 block mb-2">02</span>
                  <h3 className="text-2xl font-black uppercase text-white">Bush Hammered</h3>
               </div>
            </div>

            {/* Column 3 (Using one again or placeholder for 3rd variant) */}
            <div className="relative group overflow-hidden bg-brand-mud">
               <div className="absolute inset-0 opacity-20 bg-[url('/assets/images/texture_creamy_honed.jpg')] bg-cover mix-blend-overlay"></div>
               <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/40 group-hover:bg-black/20 transition-colors">
                  <h3 className="text-2xl font-black uppercase text-white mb-4">Custom Cut</h3>
                  <p className="text-sm text-white/70 max-w-xs mb-8">
                     Sandblasted, flamed, or waterjet patterns tailored to your specification.
                  </p>
                  <button className="px-6 py-3 border border-white/20 hover:bg-white hover:text-brand-charcoal transition-colors uppercase text-xs font-bold tracking-widest">
                     Request Sample
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* 6. PROJECT TRACKER (Map + Status) */}
      <section className="py-24 bg-brand-charcoal relative overflow-hidden">
         {/* Map Background Simulation */}
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
               {/* Abstract geometric map pattern */}
               <path d="M0 0 H100 V100 H0 Z" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
               <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" />
               <circle cx="70" cy="30" r="10" stroke="currentColor" strokeWidth="0.5" fill="none" />
               <circle cx="20" cy="80" r="15" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </svg>
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="md:w-1/2">
                  <span className="flex items-center gap-2 text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
                     <Activity className="w-4 h-4 animate-pulse" /> Live Fabrication Status
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">
                     Track Your <br/> Stone Journey
                  </h2>
                  <p className="text-white/60 text-lg mb-8 max-w-lg">
                     Real-time updates from quarry to site. Monitor CNC precision, QC approval, and logistics via our client portal.
                  </p>
                  <button className="bg-brand-gold text-brand-charcoal px-8 py-4 font-black uppercase tracking-widest hover:bg-white transition-colors shadow-lg shadow-brand-gold/10">
                     Access Dashboard
                  </button>
               </div>

               {/* Status Card */}
               <div className="md:w-1/3 w-full bg-black/60 backdrop-blur-md border border-white/10 p-8 rounded-sm shadow-2xl relative">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full animate-ping"></div>
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full border-2 border-brand-charcoal"></div>
                  
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                     <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold">
                        <MapPin className="w-6 h-6" />
                     </div>
                     <div>
                        <h4 className="text-sm font-bold uppercase text-white">Al-Majd Tower</h4>
                        <p className="text-xs text-white/40 uppercase tracking-wider">Project ID: RS-8842</p>
                     </div>
                  </div>

                  <div className="space-y-6">
                     <div className="flex justify-between items-center text-xs uppercase tracking-wider">
                        <span className="text-white/60">Status</span>
                        <span className="text-brand-gold font-bold">In Production</span>
                     </div>
                     <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                        <div className="bg-brand-gold h-full w-[75%] rounded-full"></div>
                     </div>
                     <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-white/5 p-3 rounded">
                           <span className="block text-2xl font-bold text-white">842</span>
                           <span className="text-[10px] text-white/40 uppercase">Units Cut</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded">
                           <span className="block text-2xl font-bold text-white">98%</span>
                           <span className="text-[10px] text-white/40 uppercase">QC Pass</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#1a1a1a] text-white pt-24 pb-12 border-t border-white/5">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
               <div className="col-span-1 md:col-span-2">
                  <h3 className="text-3xl font-black uppercase mb-6 tracking-tight">RiyadhStone®</h3>
                  <p className="text-white/40 max-w-sm mb-8">
                     Engineered stone solutions for the visionaries building tomorrow's Riyadh.
                  </p>
                  <div className="flex gap-4">
                     {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-colors cursor-pointer">
                           <Globe className="w-4 h-4" />
                        </div>
                     ))}
                  </div>
               </div>
               
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-8">Quick Links</h4>
                  <ul className="space-y-4 text-sm text-white/60">
                     <li className="hover:text-white transition-colors cursor-pointer">Projects</li>
                     <li className="hover:text-white transition-colors cursor-pointer">Technical Library</li>
                     <li className="hover:text-white transition-colors cursor-pointer">E-Factory</li>
                     <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-8">Contact</h4>
                  <ul className="space-y-4 text-sm text-white/60">
                     <li>Riyadh Industrial City 2</li>
                     <li>Kingdom of Saudi Arabia</li>
                     <li className="pt-4 text-white font-bold">+966 11 000 0000</li>
                     <li>info@riyadhstone.com</li>
                  </ul>
               </div>
            </div>
            
            <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
               <p className="text-xs text-white/20 uppercase tracking-widest">© 2026 RiyadhStone Engineering. All rights reserved.</p>
               <div className="flex gap-8 text-xs text-white/20 uppercase tracking-widest">
                  <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
               </div>
            </div>
         </div>
      </footer>

    </div>
  );
}