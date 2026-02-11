"use client";

import { useEffect, useState } from "react";

type Tenant = { id: string; displayName: string; notes?: string };
type Factory = { id: string; tenantId: string; displayName: string; status: string; location?: any; profile?: any };

export default function AdminPage() {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [factories, setFactories] = useState<Factory[]>([]);
  const [tenantId, setTenantId] = useState<string>("riyadhstone");
  const [factoryId, setFactoryId] = useState<string>("");
  const [profile, setProfile] = useState<any>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setErr(null);
      const r = await fetch("/api/efactory/tenants", { cache: "no-store" });
      const j = await r.json();
      if (!j?.ok) throw new Error("Failed to load tenants");
      setTenants(j.data ?? []);
    })().catch(e => setErr(String(e?.message ?? e)));
  }, []);

  useEffect(() => {
    (async () => {
      setErr(null);
      const r = await fetch(`/api/efactory/factories?tenant=${encodeURIComponent(tenantId)}`, { cache: "no-store" });
      const j = await r.json();
      if (!j?.ok) throw new Error("Failed to load factories");
      const list = (j.data ?? []) as Factory[];
      setFactories(list);

      // auto-select first factory if not selected
      if (!factoryId && list.length) setFactoryId(list[0].id);
      if (factoryId && !list.some(f => f.id === factoryId) && list.length) setFactoryId(list[0].id);
      if (!list.length) setFactoryId("");
    })().catch(e => setErr(String(e?.message ?? e)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tenantId]);

  useEffect(() => {
    if (!tenantId) return;
    (async () => {
      setErr(null);
      const qs = new URLSearchParams({ tenant: tenantId });
      if (factoryId) qs.set("factory", factoryId);

      const r = await fetch(`/api/efactory/factory-profile?${qs.toString()}`, { cache: "no-store" });
      const j = await r.json();
      if (!j?.ok) throw new Error("Failed to load factory profile");
      setProfile(j.data);
    })().catch(e => setErr(String(e?.message ?? e)));
  }, [tenantId, factoryId]);

  return (
    <div className="p-6 space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">E-Factory Admin (MVP Preview)</h1>
        <p className="text-sm opacity-70">Tenant  Multiple Factories  Profile Preview</p>
      </div>

      {err ? (
        <div className="rounded-md border p-3 text-sm text-red-600">
          {err}
        </div>
      ) : null}

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border p-4 space-y-2">
          <div className="text-sm font-medium">Tenant</div>
          <select
            className="w-full rounded-md border px-3 py-2"
            value={tenantId}
            onChange={(e) => setTenantId(e.target.value)}
          >
            {tenants.map(t => (
              <option key={t.id} value={t.id}>{t.displayName} ({t.id})</option>
            ))}
          </select>
        </div>

        <div className="rounded-lg border p-4 space-y-2">
          <div className="text-sm font-medium">Factory</div>
          <select
            className="w-full rounded-md border px-3 py-2"
            value={factoryId}
            onChange={(e) => setFactoryId(e.target.value)}
          >
            {factories.map(f => (
              <option key={f.id} value={f.id}>{f.displayName}  {f.status}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="rounded-lg border p-4">
        <div className="text-sm font-medium mb-2">Selected Factory Profile (JSON)</div>
        <pre className="text-xs overflow-auto whitespace-pre-wrap">
{JSON.stringify(profile, null, 2)}
        </pre>
      </div>

      <div className="text-xs opacity-70">
        Endpoints: /api/efactory/tenants  /api/efactory/factories?tenant=...  /api/efactory/factory-profile?tenant=...&factory=...
      </div>
    </div>
  );
}
