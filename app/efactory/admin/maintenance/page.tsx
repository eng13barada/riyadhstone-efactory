"use client";

import { useEffect, useState } from 'react';

export default function MaintenancePage() {
  const [factory, setFactory] = useState<any>(null);

  useEffect(() => {
    fetch('/api/efactory/factory-profile?id=dhurma.example')
      .then(res => res.json())
      .then(data => setFactory(data));
  }, []);

  if (!factory) return <div className="p-8 text-white">Loading Assets...</div>;

  return (
    <div className="min-h-screen bg-[#1a1918] text-white p-8 font-sans">
      <header className="mb-8 border-b border-white/10 pb-6">
         <h1 className="text-2xl font-bold text-[#C5A572]">Maintenance Logbook</h1>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Equipment List */}
          <div className="lg:col-span-2 space-y-6">
              <h2 className="text-lg font-bold text-white/60 uppercase tracking-widest">Fleet Status</h2>
              <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                      <thead className="bg-white/5 text-white/40 uppercase font-mono text-xs">
                          <tr>
                              <th className="p-4">Asset</th>
                              <th className="p-4">Model</th>
                              <th className="p-4">Status</th>
                              <th className="p-4">Next Service</th>
                              <th className="p-4">Action</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                          {factory.equipment.map((eq: any) => (
                              <tr key={eq.id} className="hover:bg-white/5 transition-colors">
                                  <td className="p-4 font-bold">{eq.name}</td>
                                  <td className="p-4 font-mono text-xs text-white/60">{eq.brand} {eq.model}</td>
                                  <td className="p-4">
                                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                                          eq.status === 'Operational' ? 'bg-green-500/20 text-green-400' :
                                          eq.status === 'Standby' ? 'bg-blue-500/20 text-blue-400' : 
                                          'bg-red-500/20 text-red-400'
                                      }`}>
                                        {eq.status}
                                      </span>
                                  </td>
                                  <td className="p-4 font-mono text-xs">{eq.nextService}</td>
                                  <td className="p-4">
                                      <button className="text-[#C5A572] hover:underline text-xs">Log Ticket</button>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>

          {/* KPI / Logbook Placeholder */}
          <div className="space-y-6">
               <div className="bg-white/5 p-6 rounded border border-white/10">
                   <h3 className="text-sm font-bold uppercase text-white/40 mb-4">Availability KPI</h3>
                   <div className="text-4xl font-bold text-white mb-2">94.2%</div>
                   <div className="text-xs text-green-400">↑ 2.1% from last month</div>
               </div>

               <div className="bg-white/5 p-6 rounded border border-white/10">
                   <h3 className="text-sm font-bold uppercase text-white/40 mb-4">Recent Logs</h3>
                   <div className="space-y-4">
                       <div className="text-xs border-l-2 border-[#C5A572] pl-3 py-1">
                           <div className="font-bold">Filter Press 800</div>
                           <div className="text-white/60">Routine filter cloth change completed.</div>
                           <div className="text-white/20 mt-1">2 hours ago • Tech #4</div>
                       </div>
                       <div className="text-xs border-l-2 border-red-500 pl-3 py-1">
                           <div className="font-bold">Forklift 5T</div>
                           <div className="text-white/60">Hydraulic leak detected. Taken offline.</div>
                           <div className="text-white/20 mt-1">Yesterday • Tech #2</div>
                       </div>
                   </div>
               </div>
          </div>

      </div>
    </div>
  );
}
