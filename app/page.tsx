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
  Users 
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-brand-charcoal min-h-screen text-brand-cream selection:bg-brand-gold selection:text-brand-charcoal overflow-x-hidden">
      
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
          <div className="inline-block mb-4 px-3 py-1 border border-brand-gold/30 rounded-full bg-black/40 backdrop-blur-sm">
            <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">Est. 2004 • Riyadh, KSA</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none mb-6">
            Engineered Stone <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-beige">Trusted Results</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-light mb-10 leading-relaxed">
            The Digital Flagship for advanced stone engineering. We transform raw geology into architectural precision for the Kingdom's most strategic projects.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href="#contact" className="group bg-brand-gold text-brand-charcoal px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2">
              Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#portfolio" className="group border border-white/20 hover:bg-white/5 px-8 py-4 font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
              View Portfolio
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce">
          <ChevronDown className="w-8 h-8 text-brand-gold/50" />
        </div>
      </section>

      {/* 2. TRUST EQUATION */}
      <section className="py-24 bg-brand-charcoal relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 opacity-80">
            <div className="text-center">
              <span className="block text-6xl font-black text-brand-gold mb-2">15+</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/60">Years Experience</span>
            </div>
            <div className="h-12 w-[1px] bg-white/10 hidden md:block"></div>
            <div className="text-center">
              <span className="block text-6xl font-black text-brand-gold mb-2">2M+</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/60">SQM Installed</span>
            </div>
            <div className="h-12 w-[1px] bg-white/10 hidden md:block"></div>
            <div className="text-center">
              <span className="block text-6xl font-black text-brand-gold mb-2">100%</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/60">Delivery Rate</span>
            </div>
          </div>
          
          <div className="mt-16 text-center max-w-4xl mx-auto border sm:border-t-0 p-8 border-white/5 bg-white/[0.02]">
             <h3 className="text-2xl font-light italic text-white/90">
               "We don't just supply stone. We engineer confidence."
             </h3>
          </div>
        </div>
      </section>

      {/* 3. PIPELINE (Chat-to-Build) */}
      <section className="py-24 bg-black/20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase block mb-2">The E-Factory Process</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase">From Concept to Reality</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent z-0"></div>

            {[
              { icon: FileText, title: "Input", desc: "Upload PDFs & CADs" },
              { icon: Cpu, title: "AI Analysis", desc: "Digital Quantity Takeoff" },
              { icon: Layers, title: "Engineering", desc: "Shop Drawings & BIM" },
              { icon: Factory, title: "Fabrication", desc: "CNC Precision Cutting" }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-brand-charcoal border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-brand-gold/50 transition-colors shadow-xl">
                  <step.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-lg font-bold uppercase mb-2">{step.title}</h3>
                <p className="text-sm text-white/50">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENTO GRID (Visual Texture Showcase) */}
      <section className="py-24 bg-brand-charcoal">
        <div className="container mx-auto px-6">
           <div className="mb-12 flex justify-between items-end">
            <div>
              <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase block mb-2">Material Library</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase">The Stone Collection</h2>
            </div>
            <Link href="/library" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-brand-gold transition-colors">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
            {/* Large Feature */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-sm">
               <Image 
                 src="/assets/images/texture_creamy_honed.jpg" 
                 alt="Cream Riyadh Limestone" 
                 fill 
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                 <h3 className="text-2xl font-bold uppercase text-white mb-1">Riyadh Cream</h3>
                 <p className="text-brand-gold text-sm uppercase tracking-widest">Honed Finish • Indoor/Outdoor</p>
               </div>
            </div>

            {/* Side Item 1 */}
            <div className="relative group overflow-hidden rounded-sm">
               <Image 
                 src="/assets/images/texture_golden_hammered.jpg" 
                 alt="Golden Hammered Stone" 
                 fill 
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
               <div className="absolute bottom-0 left-0 p-6">
                 <h3 className="text-lg font-bold uppercase text-white mb-1">Desert Gold</h3>
                 <p className="text-brand-gold text-xs uppercase tracking-widest">Bush Hammered</p>
               </div>
            </div>

            {/* Side Item 2 - Text Only */}
            <div className="bg-brand-mud/30 border border-white/5 p-8 flex flex-col justify-center rounded-sm">
               <h3 className="text-xl font-bold uppercase mb-4 text-white">Custom Formats</h3>
               <p className="text-sm text-white/60 mb-6 leading-relaxed">
                 From massive unprocessed blocks to intricate waterjet mosaics. We source directly from the quarry to your site.
               </p>
               <div className="flex gap-2">
                 <span className="bg-white/5 text-[10px] px-2 py-1 uppercase tracking-wider rounded">Slabs</span>
                 <span className="bg-white/5 text-[10px] px-2 py-1 uppercase tracking-wider rounded">Tiles</span>
                 <span className="bg-white/5 text-[10px] px-2 py-1 uppercase tracking-wider rounded">Cut-to-Size</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT FAMILIES */}
      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">Engineering Families</h2>
             <p className="text-white/60 max-w-2xl mx-auto">Seven specialized divisions to cover every architectural need.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
             {["RiyadEx™", "RiyadFloor™", "RiyadWall™", "RiyadScape™", "RiyadMosque™", "RiyadVillas™", "RiyadTech™"].map((name, i) => (
                <div key={i} className="bg-white/5 p-6 text-center border border-transparent hover:border-brand-gold/30 hover:bg-white/10 transition-all cursor-pointer group rounded-sm">
                   <div className="w-10 h-10 mx-auto bg-brand-gold/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-gold text-brand-gold group-hover:text-brand-charcoal transition-colors">
                      <span className="font-bold text-xs">{i + 1}</span>
                   </div>
                   <h4 className="text-xs font-bold uppercase tracking-wider">{name}</h4>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. ART & TECHNOLOGY */}
      <section className="py-24 bg-brand-charcoal overflow-hidden">
         <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase block mb-2">Technology</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
                Precision Beyond <br/> Human Limits
              </h2>
              <p className="text-white/70 mb-8 text-lg font-light leading-relaxed">
                Utilizing drone photogrammetry and LiDAR scanning to ensure 0mm tolerance in installation. We simulate the reality before we cut the stone.
              </p>
              <ul className="space-y-4 mb-8">
                {["Drone Site Surveys", "3D Point Cloud Processing", "Digital Dry-Lay"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                    <span className="text-sm font-bold uppercase tracking-wider">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="text-brand-gold border-b border-brand-gold pb-1 text-xs font-bold uppercase tracking-widest hover:text-white hover:border-white transition-colors">
                 Explore Tech Stack
              </button>
            </div>
            
            <div className="md:w-1/2 relative h-[400px] w-full border border-white/10 bg-black/50 overflow-hidden group">
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-[80%] h-[80%] border border-brand-gold/30 rounded-full animate-[spin_10s_linear_infinite] opacity-50"></div>
                 <div className="w-[60%] h-[60%] border border-dashed border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
               </div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-brand-gold opacity-80" />
               </div>
               <div className="absolute bottom-4 right-4 font-mono text-xs text-brand-gold">
                  SYSTEM_STATUS: ONLINE<br/>
                  LIDAR_SCAN: ACTIVE
               </div>
            </div>
         </div>
      </section>

      {/* 7. FACTORY CAPABILITIES */}
      <section className="py-24 bg-brand-mud/20">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-lg shadow-2xl">
               <div className="relative h-[400px]">
                  <Image 
                    src="/assets/images/factory_slab.jpg" 
                    alt="Riyadh Stone Factory" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay"></div>
               </div>
               <div className="bg-brand-charcoal p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-black uppercase mb-4 text-brand-gold">The E-Factory</h3>
                  <p className="text-white/70 mb-8 leading-relaxed">
                     Located in the heart of Riyadh's industrial city, our facility is equipped with 5-axis CNC machines and automated waterjets capable of processing 10,000 SQM monthly.
                  </p>
                  <div className="grid grid-cols-3 gap-6">
                     <div>
                        <span className="block text-3xl font-bold text-white mb-1">10k</span>
                        <span className="text-[10px] uppercase tracking-wider text-white/50">SQM/Month</span>
                     </div>
                     <div>
                        <span className="block text-3xl font-bold text-white mb-1">5</span>
                        <span className="text-[10px] uppercase tracking-wider text-white/50">Axis CNC</span>
                     </div>
                     <div>
                        <span className="block text-3xl font-bold text-white mb-1">24/7</span>
                        <span className="text-[10px] uppercase tracking-wider text-white/50">Operation</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 8. PROJECT SHOWCASE */}
      <section id="portfolio" className="py-24 bg-brand-charcoal">
         <div className="container mx-auto px-6">
            <div className="mb-16">
               <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase block mb-2">Selected Works</span>
               <h2 className="text-3xl md:text-4xl font-black uppercase">Defining The Skyline</h2>
            </div>
            
            <div className="space-y-24">
               {/* Project 1 */}
               <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-3/5 h-[400px] relative w-full rounded-sm overflow-hidden shadow-2xl">
                     <Image 
                        src="/assets/images/retail_facade_night.jpg" 
                        alt="Retail Project Facade" 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-1000"
                     />
                  </div>
                  <div className="md:w-2/5 md:pl-8">
                     <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">Retail Excellence</span>
                     <h3 className="text-2xl font-bold uppercase my-3">Luxury Plaza 2024</h3>
                     <p className="text-white/60 mb-6 leading-relaxed">
                        A landmark retail destination featuring complex curved facades and backlit Onyx installations. Delivered on a 6-month fast-track schedule.
                     </p>
                     <div className="flex gap-4 mb-6">
                        <div className="bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider">Honed Limestone</div>
                        <div className="bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider">Steel Fixation</div>
                     </div>
                     <Link href="#" className="inline-flex items-center text-xs font-bold uppercase tracking-widest hover:text-brand-gold transition-colors">
                        View Case Study <ArrowRight className="w-3 h-3 ml-2" />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 9. QUALITY ASSURANCE */}
      <section className="py-24 bg-white/[0.02]">
         <div className="container mx-auto px-6 text-center">
            <ShieldCheck className="w-12 h-12 text-brand-gold mx-auto mb-6" />
            <h2 className="text-3xl font-black uppercase mb-6">ISO 9001 Certified</h2>
            <p className="max-w-3xl mx-auto text-white/60 mb-12">
               Our Quality Management System ensures strict adherence to ASTM and SASO standards. Every slab is inspected, tagged, and tracked.
            </p>
         </div>
      </section>

      {/* 10. HSE */}
      <section className="py-12 bg-brand-green/20 border-y border-white/5">
         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="flex items-center gap-4">
                <HardHat className="w-10 h-10 text-brand-gold" />
                <div>
                   <h3 className="font-bold uppercase text-lg">Safety First</h3>
                   <p className="text-xs text-white/60">Zero Lost Time Injuries (LTI) in 2025</p>
                </div>
             </div>
             <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>
             <div>
                <p className="text-sm font-mono text-center md:text-left text-brand-gold/80">
                   SUSTAINABILITY COMMITMENT: <span className="text-white">100% Water Recycling in Factory</span>
                </p>
             </div>
         </div>
      </section>

       {/* 11. TECHNICAL LIBRARY */}
      <section className="py-24 bg-brand-charcoal">
         <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-brand-mud to-brand-charcoal border border-white/10 p-12 rounded-lg relative overflow-hidden">
               <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div>
                     <h3 className="text-2xl font-black uppercase mb-2">Technical Vault</h3>
                     <p className="text-white/70">Access data sheets, installation guides, and CAD details.</p>
                  </div>
                  <div className="flex gap-4">
                     <button className="bg-white/10 hover:bg-white/20 px-6 py-3 flex items-center gap-3 rounded transition-colors">
                        <FileText className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-wider">Method Statements</span>
                     </button>
                     <button className="bg-white/10 hover:bg-white/20 px-6 py-3 flex items-center gap-3 rounded transition-colors">
                        <Download className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-wider">Catalog 2026</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 12. DASHBOARD TEASER */}
      <section className="py-24">
         <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center border border-dashed border-white/20 p-12 rounded-lg bg-black/40">
               <Activity className="w-12 h-12 text-brand-gold mx-auto mb-6 animate-pulse" />
               <h2 className="text-2xl font-bold uppercase mb-4">Client Portal Access</h2>
               <p className="text-white/60 mb-8">
                  Existing client? Log in to track your fabrication status, view live drone feeds, and download transmittals.
               </p>
               <button className="bg-brand-gold text-brand-charcoal px-8 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors">
                  Login to Dashboard
               </button>
            </div>
         </div>
      </section>

      {/* 13. PARTNERS */}
      <section className="py-16 bg-white/[0.02]">
         <div className="container mx-auto px-6 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-white/30 mb-8 block">Trusted By Industry Leaders</span>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos */}
               <div className="h-8 w-32 bg-white/20 rounded"></div>
               <div className="h-8 w-32 bg-white/20 rounded"></div>
               <div className="h-8 w-32 bg-white/20 rounded"></div>
               <div className="h-8 w-32 bg-white/20 rounded"></div>
               <div className="h-8 w-32 bg-white/20 rounded"></div>
            </div>
         </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-24 bg-brand-charcoal">
         <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-2xl font-black uppercase mb-12 text-center">Frequently Asked</h2>
            <div className="space-y-4">
               {[
                  "What is the typical lead time for custom fabrication?",
                  "Do you provide installation services?",
                  "What is the maximum slab size for Riyadh Limestone?"
               ].map((q, i) => (
                  <div key={i} className="border-b border-white/10 pb-4">
                     <div className="flex justify-between items-center cursor-pointer hover:text-brand-gold transition-colors">
                        <span className="font-bold text-sm uppercase tracking-wide">{q}</span>
                        <ChevronDown className="w-4 h-4" />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 15. CONTACT/CTA */}
      <section id="contact" className="py-24 bg-brand-gold text-brand-charcoal">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16">
               <div className="md:w-1/2">
                  <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">Ready to Build?</h2>
                  <p className="text-xl font-medium mb-8">
                     Consult with our engineering team today. Get a technical proposal within 48 hours.
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                     <div className="bg-brand-charcoal/10 p-3 rounded-full">
                        <Phone className="w-6 h-6" />
                     </div>
                     <div>
                        <span className="block text-xs font-bold uppercase tracking-widest opacity-60">Call Us</span>
                        <span className="text-xl font-bold">+966 11 000 0000</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="bg-brand-charcoal/10 p-3 rounded-full">
                        <Users className="w-6 h-6" />
                     </div>
                     <div>
                        <span className="block text-xs font-bold uppercase tracking-widest opacity-60">Visit Us</span>
                        <span className="text-xl font-bold">Riyadh Industrial City 2</span>
                     </div>
                  </div>
               </div>
               
               <div className="md:w-1/2 bg-white p-8 md:p-12 rounded-sm shadow-2xl">
                  <form className="space-y-6">
                     <div className="grid grid-cols-2 gap-6">
                        <div>
                           <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-brand-charcoal/60">Name</label>
                           <input type="text" className="w-full bg-gray-100 border-none p-4 rounded-sm focus:ring-2 focus:ring-brand-gold" />
                        </div>
                        <div>
                           <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-brand-charcoal/60">Phone</label>
                           <input type="text" className="w-full bg-gray-100 border-none p-4 rounded-sm focus:ring-2 focus:ring-brand-gold" />
                        </div>
                     </div>
                     <div>
                        <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-brand-charcoal/60">Project Details</label>
                        <textarea className="w-full bg-gray-100 border-none p-4 rounded-sm h-32 focus:ring-2 focus:ring-brand-gold"></textarea>
                     </div>
                     <button className="w-full bg-brand-charcoal text-white py-4 font-black uppercase tracking-widest hover:bg-brand-gold hover:text-brand-charcoal transition-colors">
                        Submit RFQ
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}