import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal border-t border-brand-gold/10 pt-16 pb-8 text-brand-beige">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-gold rounded-sm flex items-center justify-center text-brand-charcoal font-bold">R</div>
                <span className="text-xl font-bold text-brand-cream tracking-wide">RIYADH STONE®</span>
             </div>
             <p className="text-sm opacity-60 leading-relaxed mb-6">
               Integrating cinematic precision with structural durability for global architectural benchmarks.
             </p>
             <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal transition-all cursor-pointer">In</div>
               <div className="w-8 h-8 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal transition-all cursor-pointer">X</div>
             </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">Systems</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link href="/systems/facades" className="hover:text-brand-gold transition-colors">RiyadEx™ Facades</Link></li>
              <li><Link href="/systems/paving" className="hover:text-brand-gold transition-colors">RiyadFloor™ Paving</Link></li>
              <li><Link href="/systems/civil" className="hover:text-brand-gold transition-colors">RiyadCiv™ Civil</Link></li>
              <li><Link href="/systems/aquatics" className="hover:text-brand-gold transition-colors">RiyadWet™ Aquatics</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">Company</h4>
             <ul className="space-y-3 text-sm opacity-80">
               <li><Link href="/about" className="hover:text-brand-gold transition-colors">Who is RiyadhStone</Link></li>
               <li><Link href="/process" className="hover:text-brand-gold transition-colors">Technical Pipeline</Link></li>
               <li><Link href="/careers" className="hover:text-brand-gold transition-colors">Careers</Link></li>
               <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">Legal</h4>
             <ul className="space-y-3 text-sm opacity-80">
               <li><Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
               <li><Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link></li>
               <li><Link href="/compliance" className="hover:text-brand-gold transition-colors">Compliance Matrix</Link></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-brand-gold/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-40">
           <p>© {new Date().getFullYear()} RiyadhStone Engineering. All rights reserved.</p>
           <p className="mt-2 md:mt-0">Designed with Salmani Identity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
