const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-cream pt-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 pb-20 border-b border-white/10">
        {/* QUICK CONTACT */}
        <div>
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest">Direct Inquiry</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-brand-gold placeholder:text-white/30" />
            <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-brand-gold placeholder:text-white/30" />
            <textarea placeholder="Technical Requirements" rows={4} className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-brand-gold placeholder:text-white/30" />
            <button className="bg-brand-gold text-brand-dark w-full py-4 font-bold uppercase mt-4 hover:bg-white transition-colors">Transmit Request</button>
          </form>
        </div>
        {/* MAP PLACEHOLDER */}
        <div className="h-[400px] w-full bg-[#3a3530] flex items-center justify-center border border-white/5">
          <span className="text-white/20 tracking-widest">INTERACTIVE MAP MODULE</span>
        </div>
      </div>
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.3em] uppercase opacity-40">
        <p>© 2024 RiyadhStone® Engineered Materiality</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <span>Privacy Protocol</span>
          <span>Terms of Service</span>
          <span>Technical Archive</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;