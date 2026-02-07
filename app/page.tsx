import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-brand-cream text-brand-charcoal overflow-x-hidden font-sans">
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="h-screen w-full relative flex items-center justify-center bg-brand-dark overflow-hidden">
        {/* Image Fallback Layer */}
        <div className="absolute inset-0 bg-[#2B2825]" />
        <div className="absolute inset-0 opacity-40 bg-gradient-to-b from-black/50 to-transparent" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-brand-cream text-5xl md:text-7xl font-light tracking-tight mb-6">
            Engineering <span className="font-bold text-brand-gold italic">Stone</span> Solutions
          </h1>
          <p className="text-brand-cream/80 text-xl mb-10 max-w-2xl mx-auto font-light">
            "We don’t supply stone... we deliver engineered results."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-gold text-brand-dark px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all">
              Explore Systems
            </button>
            <button className="border border-brand-cream text-brand-cream px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand-cream hover:text-brand-dark transition-all">
              Technical Library
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: BRAND ESSENCE */}
      <section className="py-24 flex items-center justify-center bg-brand-cream border-b border-brand-dark/10">
        <div className="max-w-4xl text-center px-6">
          <h2 className="text-sm font-bold text-brand-gold mb-6 tracking-[0.3em] uppercase">Who is RiyadhStone®</h2>
          <p className="text-2xl md:text-3xl leading-relaxed text-brand-charcoal font-light">
            "We are an industrial engineering system, not just a stone supplier. We bridge the gap between architectural vision and structural reality."
          </p>
        </div>
      </section>

      {/* SECTION 3: PHILOSOPHY */}
      <section className="py-24 bg-brand-beige">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            { title: "Design Assist", desc: "Starting from intent, not quarry availability." },
            { title: "Precision CNC", desc: "Zero tolerance manufacturing." },
            { title: "Site Support", desc: "Integrated installation supervision." }
          ].map((item, i) => (
            <div key={i} className="text-center group cursor-pointer p-8 hover:bg-brand-cream/50 transition-colors border border-transparent hover:border-brand-gold/20">
              <div className="w-16 h-16 bg-brand-dark text-brand-gold flex items-center justify-center mx-auto mb-6 rounded-none text-xl font-bold">
                {i + 1}
              </div>
              <h3 className="font-bold uppercase tracking-wider mb-3 text-brand-dark">{item.title}</h3>
              <p className="text-sm opacity-70 text-brand-charcoal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: ENGINEERING METHODOLOGY */}
      <section className="min-h-screen py-24 bg-brand-dark text-brand-cream relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-dark via-brand-gold to-brand-dark opacity-30" />
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-light mb-16 text-center tracking-tighter">
            TECHNICAL <span className="text-brand-gold font-bold">PIPELINE</span>
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {["Design Assist", "Submittals", "Reality Capture", "Production", "Installation"].map((step, i) => (
              <div key={i} className="relative p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
                <span className="text-6xl font-black text-white/5 absolute bottom-4 right-4 group-hover:text-brand-gold/10 transition-colors">0{i+1}</span>
                <h4 className="text-brand-gold font-bold mb-4 uppercase tracking-widest text-xs">{step}</h4>
                <p className="text-xs opacity-60 leading-relaxed">High-fidelity data integration for seamless project execution.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}