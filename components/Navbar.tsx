import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-brand-charcoal border-b border-brand-gold/10 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-gold rounded-sm flex items-center justify-center text-brand-charcoal font-bold text-xl group-hover:bg-white transition-colors">
            R
          </div>
          <div className="flex flex-col">
            <span className="text-brand-cream font-bold text-lg leading-tight tracking-wide group-hover:text-brand-gold transition-colors">RIYADH STONE®</span>
            <span className="text-[10px] text-brand-gold uppercase tracking-[0.2em]">Engineering</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Systems", href: "/systems" },
            { name: "Process", href: "/process" },
            { name: "Projects", href: "/projects" },
            { name: "About", href: "/about" },
          ].map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-brand-beige hover:text-brand-gold tracking-widest uppercase transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="hidden md:block px-6 py-2 bg-brand-gold text-brand-charcoal text-xs font-bold uppercase tracking-widest hover:bg-white transition-all rounded-sm"
          >
            Start Project
          </Link>
          {/* Mobile Menu Icon Placeholder */}
          <button className="md:hidden text-brand-gold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
