import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-[var(--primary-brown)] text-[var(--creamy-white)] sticky top-0 z-[100] border-b border-white/5">
        <div className="max-w-[1800px] mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 relative overflow-hidden">
              <img alt="R Logo" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuNOT1EOmsLNQNOms0ldDMYzroP9o-KNd7G2B5XdOK6UAl38RBrfOVq5O_Xo0fwCisFct_HNkrLeMWwv3r7NV0y2XKlWHza2jFb8dpnRxAgu8jNremYWfIwN5a74mEy1qIj--b9hagZvx9020r7nG5aewDUMmfmHR5prr4l40Qe7OU4Be4tdLP5YTNOL4TydzFgJQGTPjKnFyx_5ij4oiOm391guoh9MQzVFOARfhDg6cZC773Xr0lOEQW3q_LGD67Cgcga3cdIIWt"/>
            </div>
            <div>
              <span className="text-xl tracking-widest uppercase flex items-baseline">
                <span className="font-thin">Riyadh</span>
                <span className="font-bold">Stone</span>
                <span className="text-[10px] self-start leading-none ml-0.5">®</span>
              </span>
              <p className="text-[8px] tracking-[0.4em] uppercase opacity-40 -mt-1">Client Dashboard</p>
            </div>
          </div>
          
          <nav className="hidden 2xl:flex items-center">
            <div className="relative group">
              <a className="px-5 py-8 text-[10px] font-bold uppercase tracking-widest text-[var(--gold)]" href="#">Active Projects</a>
            </div>
            <div className="relative group">
              <a className="px-5 py-8 text-[10px] font-bold uppercase tracking-widest hover:text-[var(--gold)] transition-colors" href="#">Technical Vault</a>
            </div>
            <div className="relative group">
              <a className="px-5 py-8 text-[10px] font-bold uppercase tracking-widest hover:text-[var(--gold)] transition-colors" href="#">Support</a>
            </div>
          </nav>
          
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black uppercase tracking-widest leading-none">Al-Majd Tower</p>
              <p className="text-[8px] opacity-40 uppercase tracking-widest">Project ID: RS-2024-089</p>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
              <span className="material-symbols-outlined text-sm">person</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow p-8 lg:p-12 max-w-[1800px] mx-auto w-full min-h-screen flex flex-col bg-warm-charcoal bg-noise text-[var(--creamy-white)]">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-metallic-gold"></span>
              <span className="text-metallic-gold text-[10px] font-black uppercase tracking-[0.4em]">Live Status Update</span>
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tight text-[var(--creamy-white)]">Project Progress Tracker</h1>
          </div>
          <div className="flex gap-4">
            <button className="bg-[var(--primary-brown)] text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[var(--deep-brown)] transition-all border border-[var(--gold)]/20">
              <span className="material-symbols-outlined text-sm text-metallic-gold">download</span> Engineering Pack
            </button>
            <button className="border border-[var(--primary-brown)]/20 px-6 py-3 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white/5 transition-all">
              <span className="material-symbols-outlined text-sm text-metallic-gold">mail</span> Contact PM
            </button>
          </div>
        </div>
        
        <div className="glass-panel p-12 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
          <div className="flex justify-between items-center mb-16 relative z-10">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Engineering Pipeline</h3>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-metallic-gold text-[var(--deep-brown)] shadow-lg shadow-[#D4B56C]/20">Current Phase: Fabrication</span>
          </div>
          
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-4 z-10">
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center md:w-1/4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center pipeline-node completed mb-4 shadow-xl shadow-[#D4B56C]/10 bg-metallic-gold text-[var(--deep-brown)]">
                <span className="material-symbols-outlined">task_alt</span>
              </div>
              <h4 className="text-[10px] font-black uppercase tracking-widest mb-2 text-[var(--gold)]">Technical Submittal Approved</h4>
              <p className="text-[9px] opacity-40 uppercase tracking-tighter">Completed: Aug 15</p>
            </div>
            
            {/* Connector */}
            <div className="hidden md:block absolute top-[28px] left-[12.5%] w-[25%] h-[2px] pipeline-line completed z-0 bg-metallic-gold"></div>
            
             {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center md:w-1/4">
               <div className="w-14 h-14 rounded-full flex items-center justify-center pipeline-node completed mb-4 shadow-xl shadow-[#D4B56C]/10 bg-metallic-gold text-[var(--deep-brown)]">
                 <span className="material-symbols-outlined">view_in_ar</span>
               </div>
               <h4 className="text-[10px] font-black uppercase tracking-widest mb-2 text-[var(--gold)]">3D BIM Coordination</h4>
               <p className="text-[9px] opacity-40 uppercase tracking-tighter">Completed: Sept 01</p>
            </div>

            {/* Connector */}
            <div className="hidden md:block absolute top-[28px] left-[37.5%] w-[25%] h-[2px] pipeline-line completed z-0 bg-metallic-gold"></div>

             {/* Step 3 (Active) */}
            <div className="relative z-10 flex flex-col items-center text-center md:w-1/4">
               <div className="w-14 h-14 rounded-full flex items-center justify-center pipeline-node active bg-[var(--deep-brown)] border border-[var(--gold)] mb-4 shadow-xl shadow-[#D4B56C]/30 animate-pulse">
                 <span className="material-symbols-outlined text-metallic-gold">precision_manufacturing</span>
               </div>
               <h4 className="text-[10px] font-black uppercase tracking-widest mb-2 text-metallic-gold">CNC Fabrication</h4>
               <p className="text-[9px] opacity-60 uppercase tracking-tighter text-[var(--gold)]">In Progress: 78%</p>
            </div>
            
            {/* Connector (Pending) */}
            <div className="hidden md:block absolute top-[28px] left-[62.5%] w-[25%] h-[2px] bg-white/10 z-0"></div>

             {/* Step 4 (Pending) */}
            <div className="relative z-10 flex flex-col items-center text-center md:w-1/4">
               <div className="w-14 h-14 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-white/20 mb-4">
                 <span className="material-symbols-outlined">local_shipping</span>
               </div>
               <h4 className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-40">Site Delivery</h4>
               <p className="text-[9px] opacity-20 uppercase tracking-tighter">Expected: Oct 10</p>
            </div>
            
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-panel p-8 relative overflow-hidden">
               <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
               <span className="material-symbols-outlined text-4xl text-metallic-gold mb-6 relative z-10">description</span>
               <h3 className="text-xl font-black uppercase mb-2 relative z-10">Document Control</h3>
               <p className="text-xs opacity-60 mb-6 relative z-10">Latest approved shop drawings and material submittals.</p>
               <ul className="space-y-3 relative z-10">
                  <li className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest border-b border-white/10 pb-2">
                     <span>Facade_Elevations_Rev03.pdf</span>
                     <span className="text-metallic-gold hover:text-[var(--creamy-white)] transition-colors cursor-pointer">Download</span>
                  </li>
                  <li className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest border-b border-white/10 pb-2">
                     <span>Method_Statement_Install.pdf</span>
                     <span className="text-metallic-gold hover:text-[var(--creamy-white)] transition-colors cursor-pointer">Download</span>
                  </li>
               </ul>
            </div>
            
            <div className="glass-panel p-8 relative overflow-hidden">
               <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
               <span className="material-symbols-outlined text-4xl text-metallic-gold mb-6 relative z-10">image</span>
               <h3 className="text-xl font-black uppercase mb-2 relative z-10">Factory Snaps</h3>
               <p className="text-xs opacity-60 mb-6 relative z-10">Daily photos from the production line for quality assurance.</p>
               <div className="grid grid-cols-2 gap-2 relative z-10">
                  <div className="h-24 bg-white/5 rounded overflow-hidden">
                     <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuU-LV5jtW7I-2KukZT4EkvlGrf7WWswDbvykyQa5cEr1ldR66X1i7WFhg35cDyQNMpUN8PQvFiTEhXicOpJ5vwXksCBB41K0qy7kIGNTYpfotr1g8ScBUSzZyV1eiz7KiEZKuX5q9FbzTshjtJVMpycRQSYW3Ynrn3cnDEqQ9MyNZwygmcec0fl5EeaQnCx0oaNVOxJtAxpzKJ4y2FH3zcTiGYxCJqiU5ZWboIy6Lz21rYnj327dyHFnBEDss5vnDq4uKhc0lIV1p" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Factory Snap 1"/>
                  </div>
                  <div className="h-24 bg-white/5 rounded overflow-hidden">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJraqMlpkj2zxJHt01hS9_nJZ-M_2AK99yE-3dNIVmXHjyz87IVEAcUz-H_-v7PWtdA7Xl7qRNLavU2BpgDHiQm8SHgYL_Qf9uzwzt4QCfpgriZ507eVHYYZDHczJHH35kIGcAEjJz-KdAJIamopbuKo9cU5k_Zo7BvXtIAnROqbxKFVyZPSDYsQi9qQbekxIT6vADd5q1-Ba9iXVgz37wYDks2OolQ4R8LPiJ51o50YgFDjnLKqYsKIHe551AiK1OWNnbXokpG_ig" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Factory Snap 2"/>
                  </div>
               </div>
            </div>
            
            <div className="glass-panel p-8 bg-[var(--primary-brown)] text-white relative overflow-hidden">
               <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
               <span className="material-symbols-outlined text-4xl text-metallic-gold mb-6 relative z-10">support_agent</span>
               <h3 className="text-xl font-black uppercase mb-2 relative z-10">Project Manager</h3>
               <p className="text-xs opacity-60 mb-8 relative z-10">Direct line to your dedicated engineering lead.</p>
               
               <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/10"></div>
                  <div>
                     <p className="font-bold text-sm">Eng. Sarah Al-Faisal</p>
                     <p className="text-[10px] opacity-60 uppercase tracking-widest">Senior Stone Specialist</p>
                  </div>
               </div>
               
               <button className="w-full bg-metallic-gold text-[var(--deep-brown)] py-3 text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all relative z-10 shadow-lg shadow-[#D4B56C]/20">
                  Start Live Chat
               </button>
            </div>
        </div>
      </main>
    </>
  );
}