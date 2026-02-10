"use client";

import { useEffect, useState } from 'react';

export default function FactoryProfilePage() {
  const [factory, setFactory] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch('/api/efactory/factory-profile?id=dhurma.example')
      .then(res => res.json())
      .then(data => setFactory(data));
  }, []);

  const handleSave = async () => {
      await fetch('/api/efactory/factory-profile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(factory)
      });
      setIsEditing(false);
  };

  if (!factory) return <div className="p-8 text-white">Loading Profile...</div>;

  return (
    <div className="min-h-screen bg-[#1a1918] text-white p-8 font-sans">
      <header className="mb-8 border-b border-white/10 pb-6 flex justify-between">
         <h1 className="text-2xl font-bold text-[#C5A572]">Factory Profile</h1>
         <button 
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className={`px-6 py-2 rounded font-bold text-sm ${isEditing ? 'bg-green-600 hover:bg-green-500' : 'bg-[#C5A572] text-black hover:bg-white'}`}
         >
             {isEditing ? 'Save Changes' : 'Edit Profile'}
         </button>
      </header>
      
      <div className="max-w-4xl space-y-8">
          
          {/* General Info */}
          <section className="bg-white/5 p-6 rounded border border-white/10">
              <h2 className="text-lg font-bold mb-4 border-b border-white/5 pb-2">General Information</h2>
              <div className="grid grid-cols-2 gap-6">
                  <div>
                      <label className="block text-xs uppercase text-white/40 mb-1">Factory Name</label>
                      <input 
                        disabled={!isEditing}
                        value={factory.name} 
                        onChange={(e) => setFactory({...factory, name: e.target.value})}
                        className="w-full bg-black/20 border border-white/10 p-2 rounded text-white"
                      />
                  </div>
                   <div>
                      <label className="block text-xs uppercase text-white/40 mb-1">Location</label>
                      <input 
                        disabled={!isEditing}
                        value={factory.location.industrialCity} 
                        onChange={(e) => setFactory({...factory, location: { ...factory.location, industrialCity: e.target.value }})}
                        className="w-full bg-black/20 border border-white/10 p-2 rounded text-white"
                      />
                  </div>
              </div>
          </section>

          {/* Licenses */}
          <section className="bg-white/5 p-6 rounded border border-white/10">
              <h2 className="text-lg font-bold mb-4 border-b border-white/5 pb-2">Compliance Vault</h2>
              <div className="space-y-4">
                  {Object.entries(factory.licenses).map(([key, license]: [string, any]) => (
                      <div key={key} className="grid grid-cols-3 gap-4 items-center p-3 bg-black/20 rounded">
                          <div className="capitalize text-sm font-bold text-white/80">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          <input 
                            disabled={!isEditing}
                            value={license.number}
                            onChange={(e) => {
                                const newLicenses = {...factory.licenses};
                                newLicenses[key].number = e.target.value;
                                setFactory({...factory, licenses: newLicenses});
                            }}
                            className="bg-transparent border-b border-white/10 p-1 text-sm font-mono"
                          />
                           <input 
                            type="date"
                            disabled={!isEditing}
                            value={license.expiry}
                            onChange={(e) => {
                                const newLicenses = {...factory.licenses};
                                newLicenses[key].expiry = e.target.value;
                                setFactory({...factory, licenses: newLicenses});
                            }}
                            className="bg-transparent border-b border-white/10 p-1 text-sm font-mono text-right"
                          />
                      </div>
                  ))}
              </div>
          </section>
          
           <div className="text-xs text-white/20">
              * AI Helper: This data is stored in `data/factories/dhurma.example.json`
           </div>
      </div>
    </div>
  );
}
