export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-400 py-12 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-white text-lg font-bold mb-4">RIYADH<span className="text-brand-bronze">STONE</span>®</h3>
          <p className="mb-4 max-w-sm">
            An engineering-led stone solutions brand delivering trusted results for strategic projects.
            We don't just supply stone; we engineer confidence.
          </p>
          <p>© {new Date().getFullYear()} RiyadhStone Factory. All rights reserved.</p>
        </div>
        
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-brand-bronze transition-colors">About Us</a></li>
            <li><a href="/engineering" className="hover:text-brand-bronze transition-colors">Engineering</a></li>
            <li><a href="/products" className="hover:text-brand-bronze transition-colors">Products</a></li>
            <li><a href="/contact" className="hover:text-brand-bronze transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>Riyadh, Saudi Arabia</li>
            <li><a href="mailto:info@riyadhstone.sa" className="hover:text-brand-bronze transition-colors">info@riyadhstone.sa</a></li>
            <li>+966 11 000 0000</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
