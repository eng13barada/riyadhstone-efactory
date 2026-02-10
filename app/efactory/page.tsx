import Link from "next/link";

export default function EFactoryLanding() {
  return (
    <div className="min-h-screen bg-[#1a1918] text-[#F3EAD3] p-12 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">E-Factory</h1>
      <p className="text-xl mb-12 text-white/60">Digital Fabrication & Project Management Core</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
        <Link 
          href="/efactory/admin" 
          className="flex flex-col items-center justify-center p-10 border border-[#C5A572] rounded hover:bg-[#C5A572] hover:text-[#1a1918] transition-colors group"
        >
          <span className="text-2xl font-bold uppercase tracking-widest mb-4">Admin</span>
          <span className="text-sm opacity-60 group-hover:opacity-100">Internal Operations Console</span>
        </Link>
        
        <Link 
          href="/efactory/client" 
          className="flex flex-col items-center justify-center p-10 border border-white/20 rounded hover:bg-white/10 transition-colors"
        >
          <span className="text-2xl font-bold uppercase tracking-widest mb-4">Client</span>
          <span className="text-sm opacity-60">Project Status & Documents</span>
        </Link>
      </div>

      <div className="mt-16 text-xs text-white/20 uppercase tracking-widest">
        Note: UI will be designed later.
      </div>
    </div>
  );
}
