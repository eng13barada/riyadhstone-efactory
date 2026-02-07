import { footerData } from "@/data/footer";

export default function Footer() {
  const { copyright, links, socials, contact } = footerData;

  return (
    <footer className="bg-brand-dark text-gray-400 py-12 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-white text-lg font-bold mb-4">RIYADH<span className="text-brand-bronze">STONE</span>®</h3>
          <p className="mb-4 max-w-sm">
            An engineering-led stone solutions brand delivering trusted results for strategic projects.
            We don't just supply stone; we engineer confidence.
          </p>
          <p>{copyright}</p>
        </div>
        
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-brand-bronze transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>{contact.address}</li>
            <li><a href={`mailto:${contact.email}`} className="hover:text-brand-bronze transition-colors">{contact.email}</a></li>
            <li>{contact.phone}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
