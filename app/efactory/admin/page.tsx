export default function AdminConsole() {
  return (
    <div className="min-h-screen bg-[#1a1918] text-white p-8">
      <header className="mb-12 border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold text-[#C5A572]">Admin Console (Draft)</h1>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Panel 1 */}
        <div className="bg-white/5 p-6 rounded border border-white/10">
          <h2 className="text-xl font-bold mb-4">Requests Queue</h2>
          <div className="h-32 flex items-center justify-center bg-black/20 text-white/40">
            [List of Incoming RFQs]
          </div>
        </div>

        {/* Panel 2 */}
        <div className="bg-white/5 p-6 rounded border border-white/10">
          <h2 className="text-xl font-bold mb-4">Assets Registry</h2>
          <div className="h-32 flex items-center justify-center bg-black/20 text-white/40">
            [Asset Management Table]
          </div>
        </div>

        {/* Panel 3 */}
        <div className="bg-white/5 p-6 rounded border border-white/10">
          <h2 className="text-xl font-bold mb-4">Content Updates</h2>
          <div className="h-32 flex items-center justify-center bg-black/20 text-white/40">
            [CMS / Text Updates]
          </div>
        </div>
      </div>
    </div>
  );
}
