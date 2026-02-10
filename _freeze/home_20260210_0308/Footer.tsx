import Link from "next/link";
import { MapPin, Phone, Mail, Upload, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1918] text-white pt-24 pb-12 border-t border-white/5 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo & Social */}
          <div className="col-span-1">
            <h3 className="text-3xl tracking-tight mb-6 text-white">
               <span className="font-light">RIYADH</span>
               <span className="font-extrabold">STONE</span>
               <span className="font-light text-sm align-top ml-1">®</span>
            </h3>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              Engineered stone solutions for the visionaries building tomorrow's Riyadh. 
              Precision. Legacy. Innovation.
            </p>
            <div className="flex gap-4">
              {['Ln', 'Ig', 'X'].map((social) => (
                <div key={social} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-brand-gold hover:text-brand-charcoal hover:border-brand-gold transition-colors cursor-pointer font-mono text-xs">
                  {social}
                </div>
              ))}
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/systems" className="hover:text-white transition-colors">Systems</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/technical" className="hover:text-white transition-colors">Technical Library</Link></li>
              <li><Link href="/efactory" className="hover:text-white transition-colors">E-Factory</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Form */}
          <div className="col-span-1 lg:col-span-1 bg-white/5 p-6 rounded-sm border border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-6">Start a Project</h4>
            <form className="space-y-4">
               <div>
                  <input type="text" placeholder="Name" className="w-full bg-black/20 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-brand-gold outline-none transition-colors" />
               </div>
               <div>
                  <input type="text" placeholder="+966..." className="w-full bg-black/20 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-brand-gold outline-none transition-colors" />
               </div>
               <div>
                  <input type="email" placeholder="Email" className="w-full bg-black/20 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-brand-gold outline-none transition-colors" />
               </div>
               <div className="relative">
                  <select className="w-full bg-black/20 border border-white/10 px-4 py-3 text-sm text-white/60 focus:border-brand-gold outline-none appearance-none cursor-pointer">
                     <option value="" disabled selected>Client Type</option>
                     <option value="govt">Governmental</option>
                     <option value="dev">Real Estate Dev</option>
                     <option value="cons">Consultant</option>
                     <option value="cont">Contractor</option>
                     <option value="design">Designer</option>
                     <option value="ind">Individual</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                     <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
               </div>
               
               <div className="flex items-center justify-between gap-4">
                  <button type="button" className="flex items-center gap-2 text-xs text-white/40 hover:text-brand-gold transition-colors">
                     <Upload className="w-4 h-4" /> 
                     <span>Upload Attachment</span>
                  </button>
                  <button type="submit" className="bg-brand-gold text-brand-charcoal px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
                     Send
                  </button>
               </div>
            </form>
          </div>

          {/* Column 4: Map */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-8">Location</h4>
            <div className="w-full h-[200px] bg-white/5 border border-white/10 flex items-center justify-center relative group overflow-hidden">
               {/* Map Placeholder Graphic */}
               <div className="absolute inset-0 opacity-20 bg-[url('/assets/images/map_placeholder.png')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"></div>
               <div className="absolute inset-0 bg-brand-charcoal/50"></div>
               <div className="text-center relative z-10">
                  <MapPin className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                  <p className="text-xs text-white/80 uppercase tracking-widest">Riyadh Industrial City 2</p>
               </div>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/60">
               <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-gold" />
                  <span>+966 11 000 0000</span>
               </li>
               <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-gold" />
                  <span>info@riyadhstone.com</span>
               </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-xs text-white/20 uppercase tracking-widest">© {new Date().getFullYear()} RiyadhStone Engineering. All rights reserved.</p>
           <div className="flex gap-8 text-xs text-white/20 uppercase tracking-widest">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
              <span className="hover:text-white transition-colors cursor-pointer">Sitemap</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
