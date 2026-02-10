"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminConsole() {
  const [tenants, setTenants] = useState<any[]>([]);
  const [factory, setFactory] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [tenantsRes, factoryRes] = await Promise.all([
            fetch('/api/efactory/tenants'),
            fetch('/api/efactory/factory-profile?id=dhurma.example')
        ]);
        
        if (tenantsRes.ok) setTenants(await tenantsRes.json());
        if (factoryRes.ok) setFactory(await factoryRes.json());
      } catch (error) {
        console.error("Failed to load dashboard data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div className="p-8 text-white">Loading E-Factory Core...</div>;

  return (
    <div className="min-h-screen bg-[#1a1918] text-white p-8 font-sans">
      <header className="mb-12 border-b border-white/10 pb-6 flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold text-[#C5A572]">E-Factory Admin</h1>
            <p className="text-white/40 text-sm mt-1">Version 0.1.0 (MVP)</p>
        </div>
        <div className="flex gap-4">
             <Link href="/efactory/admin/factory" className="px-4 py-2 border border-white/20 rounded hover:bg-white/5 text-sm">Factory Profile</Link>
             <Link href="/efactory/admin/maintenance" className="px-4 py-2 border border-white/20 rounded hover:bg-white/5 text-sm">Maintenance</Link>
        </div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tenant Card */}
        <div className="bg-white/5 p-6 rounded border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-[#F3EAD3]">Tenant Profile</h2>
          {tenants.map(t => (
            <div key={t.id} className="space-y-2">
                <div className="text-2xl font-bold">{t.legalName}</div>
                <div className="text-sm text-white/60">CR: {t.crNumber}</div>
                <div className="text-sm text-white/60">Plan: <span className="text-green-400">{t.subscription.plan}</span></div>
            </div>
          ))}
        </div>

        {/* Factory Status */}
        <div className="bg-white/5 p-6 rounded border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-[#F3EAD3]">Seed Factory Status</h2>
          {factory && (
             <div className="space-y-4">
                 <div>
                     <div className="text-lg font-bold">{factory.name}</div>
                     <div className="text-xs text-white/40">{factory.location.industrialCity}</div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-2 text-xs">
                     <div className={`p-2 rounded border ${new Date(factory.licenses.operating.expiry) > new Date() ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'}`}>
                         <div className="opacity-60">Operating Lic</div>
                         <div className="font-mono">{factory.licenses.operating.expiry}</div>
                     </div>
                     <div className={`p-2 rounded border ${new Date(factory.licenses.civilDefense.expiry) > new Date() ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'}`}>
                         <div className="opacity-60">Civil Defense</div>
                         <div className="font-mono">{factory.licenses.civilDefense.expiry}</div>
                     </div>
                 </div>
             </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-white/5 p-6 rounded border border-white/10 flex flex-col gap-3">
          <h2 className="text-xl font-bold mb-4 text-[#F3EAD3]">Quick Actions</h2>
          <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-brand-gold/20 hover:text-brand-gold transition-colors rounded text-sm">
             + New Quote Request (RFQ)
          </button>
          <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-brand-gold/20 hover:text-brand-gold transition-colors rounded text-sm">
             + Add Machinery Ticket
          </button>
          <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-brand-gold/20 hover:text-brand-gold transition-colors rounded text-sm">
             Configure Shift Schedule
          </button>
        </div>
      </div>
    </div>
  );
}
