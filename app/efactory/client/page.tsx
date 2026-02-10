export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-[#1a1918] text-white p-8">
      <header className="mb-12 border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold text-[#F3EAD3]">Client Dashboard (Draft)</h1>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Panel 1 */}
        <div className="bg-white/5 p-6 rounded border border-white/10">
          <h2 className="text-xl font-bold mb-4">Project Status</h2>
          <div className="h-32 flex items-center justify-center bg-black/20 text-white/40">
            [Timeline & Progress]
          </div>
        </div>

        {/* Panel 2 */}
        <div className="bg-white/5 p-6 rounded border border-white/10">
          <h2 className="text-xl font-bold mb-4">Samples</h2>
          <div className="h-32 flex items-center justify-center bg-black/20 text-white/40">
            [Approved/Pending Samples]
          </div>
        </div>

        {/* Panel 3 */}
        <div className="bg-white/5 p-6 rounded border border-white/10">
          <h2 className="text-xl font-bold mb-4">Documents</h2>
          <div className="h-32 flex items-center justify-center bg-black/20 text-white/40">
            [Invoices & Submittals]
          </div>
        </div>
      </div>
    </div>
  );
}
