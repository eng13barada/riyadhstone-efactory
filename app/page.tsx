import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      
      {/* SECTION A: HERO (The Promise) */}
      <section className="relative w-full h-[90vh] flex flex-col lg:flex-row bg-brand-dark text-white overflow-hidden">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-20 z-10 relative">
          <div className="space-y-6 max-w-xl">
             <div className="inline-block px-3 py-1 border border-brand-bronze text-brand-bronze text-xs tracking-[0.2em] uppercase font-bold">
              Est. 1989
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              We don’t supply stone… <br />
              <span className="text-brand-bronze">we deliver engineered results.</span>
            </h1>
            <p className="text-xl text-gray-300 border-l-4 border-brand-bronze pl-4">
              "Engineered Stone = Trusted Results"
            </p>
            <p className="text-gray-400">
              An engineering-led stone solutions brand delivering trusted results for strategic projects.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/engineering" className="px-8 py-3 bg-brand-bronze text-brand-dark font-bold uppercase tracking-widest hover:bg-white transition-colors">
                Explore Engineering
              </Link>
              <Link href="/contact" className="px-8 py-3 border border-gray-500 text-white font-bold uppercase tracking-widest hover:border-white transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="pt-12 flex space-x-8 text-xs text-gray-500 uppercase tracking-wider">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-brand-bronze rounded-full"></div>
                 Start from Result
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-brand-bronze rounded-full"></div>
                 Repeatable Method
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-brand-bronze rounded-full"></div>
                 Risk Management
               </div>
            </div>
          </div>
        </div>

        {/* Right: Cinematic Image */}
        <div className="w-full lg:w-1/2 h-full relative">
          <div className="absolute inset-0 bg-brand-dark/20 z-10"></div> {/* Overlay */}
          <div className="w-full h-full relative bg-gray-800">
             {/* Placeholder for Hero Image */}
             {/* Replace this div with <Image /> when asset is ready. For now using a styled placeholder container */}
             <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-center p-8 bg-neutral-900">
                [HERO IMAGE: Photorealistic architectural workspace, limestone sample, drafting table, warm lighting]
             </div>
          </div>
        </div>
      </section>

      {/* SECTION B: WHY RIYADHSTONE? (The Value) */}
      <section className="py-24 bg-brand-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">Why RiyadhStone® Factory?</h2>
            <div className="w-24 h-1 bg-brand-bronze mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              { title: "Integrated Engineering", desc: "We bridge the gap between design intent and physical reality with technical precision.", imgAlt: "Blueprint and stone" },
              { title: "Design-to-Production", desc: "Seamless workflow from CAD/BIM directly to our CNC machinery.", imgAlt: "Factory floor" },
              { title: "Reliable Scheduling", desc: "Transparent timelines and warehoused inventory for guaranteed delivery.", imgAlt: "Warehoused slabs" }
            ].map((card, idx) => (
              <div key={idx} className="group bg-white shadow-lg border-b-4 border-transparent hover:border-brand-bronze transition-all duration-300">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                   {/* Placeholder Image */}
                   <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-xs text-gray-500 text-center p-4">
                     [IMG: {card.imgAlt}]
                   </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C: SYSTEM-BASED SOLUTIONS (Products) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark">System-Based Solutions</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl">
              We engineer precise product families designed for specific architectural applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "RiyadEx™", desc: "Facades", colSpan: "lg:col-span-2", bg: "bg-gray-800" },
              { name: "RiyadFloor™", desc: "Flooring", colSpan: "col-span-1", bg: "bg-gray-700" },
              { name: "RiyadCiv™", desc: "Infrastructure", colSpan: "col-span-1", bg: "bg-gray-600" },
              { name: "RiyadWet™", desc: "Water/Drainage", colSpan: "col-span-1", bg: "bg-gray-600" },
              { name: "RiyadUrb™", desc: "Urban Furniture", colSpan: "col-span-1", bg: "bg-gray-700" },
              { name: "RiyadStep™", desc: "Stairs", colSpan: "col-span-1", bg: "bg-gray-800" },
              { name: "RiyadRaw™", desc: "Slabs", colSpan: "col-span-1", bg: "bg-gray-900" },
            ].map((product, idx) => (
              <div key={idx} className={`relative group h-64 ${product.colSpan} overflow-hidden cursor-pointer`}>
                 {/* Background Placeholder */}
                 <div className={`absolute inset-0 ${product.bg} group-hover:scale-105 transition-transform duration-500`}></div>
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                 
                 <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                   <p className="text-xs uppercase tracking-widest text-brand-bronze mb-1">{product.desc}</p>
                   <h3 className="text-3xl font-bold">{product.name}</h3>
                   <div className="w-0 group-hover:w-full h-0.5 bg-brand-bronze mt-4 transition-all duration-300"></div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D: ENGINEERING APPROACH (The Method) */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Decorative Grid Line Background */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Engineering Approach</h2>
            <p className="text-gray-400 mt-2">From sketch to site.</p>
          </div>

          <div className="relative">
             {/* Horizontal Line for Desktop */}
             <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2"></div>
             
             <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
               {[
                 { step: "01", label: "Design Assist" },
                 { step: "02", label: "Submittals" },
                 { step: "03", label: "Validation" },
                 { step: "04", label: "BIM / Shop Drawings" },
                 { step: "05", label: "Production" },
                 { step: "06", label: "Warranty" },
               ].map((item, i) => (
                 <div key={i} className="relative z-10 bg-brand-dark p-4 border border-gray-700 hover:border-brand-bronze transition-colors flex flex-col items-center text-center group">
                   <div className="text-brand-bronze text-sm font-bold mb-2 group-hover:scale-110 transition-transform">{item.step}</div>
                   <div className="w-3 h-3 bg-gray-500 rounded-full mb-4 group-hover:bg-brand-bronze transition-colors"></div>
                   <h4 className="font-bold text-sm uppercase tracking-wide">{item.label}</h4>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* SECTION E: TRUST TRIO (Quality, HSE, Sustainability) */}
      <section className="py-20 bg-brand-paper">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Quality", items: ["QMS Level 4", "Full Traceability", "ISO 9001 Certified"] },
                 { title: "HSE", items: ["Zero-Harm Policy", "Factory Safety", "Site Delivery Standards"] },
                 { title: "Sustainability", items: ["Responsible Sourcing", "Waste Reduction", "Green Building Support"] },
               ].map((card, i) => (
                 <div key={i} className="bg-white p-8 border-l-4 border-brand-bronze shadow-sm">
                    <h3 className="text-2xl font-bold mb-6 text-brand-dark">{card.title}</h3>
                    <ul className="space-y-3">
                      {card.items.map((li, k) => (
                        <li key={k} className="flex items-center text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-brand-dark mr-2 rounded-full"></span>
                          {li}
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="inline-block mt-8 text-brand-bronze font-bold text-sm uppercase hover:text-brand-dark">View Policies &rarr;</a>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION F: ART & TECHNOLOGY */}
      <section className="py-24 bg-white border-y border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
               <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6">Art & Technology</h2>
               <p className="text-gray-600 mb-8 leading-relaxed">
                 We leverage cutting-edge reality capture, 3D scanning, and photogrammetry to ensure that what we design is what we deliver. Precision isn't an accident; it's a technology.
               </p>
               
               <div className="space-y-4">
                 {["Reality Capture", "3D Scanning", "Photogrammetry"].map((tech) => (
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
                 [IMG: Digital wireframe mesh overlaying natural limestone rock]
               </div>
               {/* Floating Badge */}
               <div className="absolute bottom-8 right-8 bg-brand-bronze text-white px-6 py-4 font-bold shadow-xl">
                 High-Res Output
               </div>
            </div>
         </div>
      </section>

      {/* SECTION G: LIBRARY & RESOURCES */}
      <section className="py-20 bg-brand-dark text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Technical Library</h2>
            <p className="text-gray-400 mb-10">Access our comprehensive database of stone types, finishes, technical data sheets, and CAD details.</p>
            
            <div className="relative max-w-lg mx-auto mb-12">
               <input type="text" placeholder="Search resources (e.g., 'Limestone', 'Cladding Detail')" className="w-full py-4 px-6 rounded-none text-brand-dark focus:outline-none focus:ring-4 focus:ring-brand-bronze" />
               <button className="absolute right-2 top-2 bottom-2 bg-brand-bronze text-brand-dark px-6 font-bold uppercase hover:bg-white transition-colors">Search</button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-gray-400">
               <a href="#" className="hover:text-white underline">Stone Types</a>
               <span>/</span>
               <a href="#" className="hover:text-white underline">Finishes</a>
               <span>/</span>
               <a href="#" className="hover:text-white underline">Tech Data</a>
               <span>/</span>
               <a href="#" className="hover:text-white underline">CAD Details</a>
            </div>
         </div>
      </section>

      {/* SECTION H: CONTACT */}
      <section className="relative flex flex-col lg:flex-row min-h-[600px]">
        {/* Left: Form */}
        <div className="w-full lg:w-1/2 bg-brand-paper p-12 lg:p-24 flex flex-col justify-center">
           <h2 className="text-3xl font-bold text-brand-dark mb-2">Get in Touch</h2>
           <p className="text-gray-600 mb-8">Discuss your project with our engineering team.</p>
           
           <form className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="p-4 bg-white border border-gray-300 focus:border-brand-bronze outline-none" />
                <input type="text" placeholder="Phone" className="p-4 bg-white border border-gray-300 focus:border-brand-bronze outline-none" />
             </div>
             <input type="email" placeholder="Email Address" className="w-full p-4 bg-white border border-gray-300 focus:border-brand-bronze outline-none" />
             <select className="w-full p-4 bg-white border border-gray-300 focus:border-brand-bronze outline-none text-gray-500">
                <option>I am a...</option>
                <option>Government Representative</option>
                <option>Developer</option>
                <option>Consultant</option>
                <option>Contractor</option>
             </select>
             <textarea placeholder="Message" rows={4} className="w-full p-4 bg-white border border-gray-300 focus:border-brand-bronze outline-none"></textarea>
             
             <button className="w-full py-4 bg-brand-dark text-white font-bold uppercase tracking-widest hover:bg-brand-bronze hover:text-brand-dark transition-colors">
               Send Message
             </button>
           </form>
        </div>

        {/* Right: Map Texture */}
        <div className="w-full lg:w-1/2 bg-gray-300 relative min-h-[400px] lg:min-h-full">
           <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
              {/* Map Placeholder */}
              <div className="text-center">
                 <p className="text-gray-500 mb-4">[Topographical Map Background]</p>
                 <div className="bg-brand-dark p-6 text-white inline-block text-left shadow-2xl border-l-4 border-brand-bronze">
                    <h4 className="font-bold text-lg mb-2">RiyadhStone Factory</h4>
                    <p className="text-sm text-gray-400">2nd Industrial City<br/>Riyadh, Saudi Arabia</p>
                    <p className="text-brand-bronze mt-4 font-bold">info@riyadhstone.sa</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
