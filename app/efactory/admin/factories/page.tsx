import { listFactories } from "@/lib/efactory/factories";

export const dynamic = "force-dynamic";

export default async function FactoriesPage({
  searchParams,
}: {
  searchParams: { tenant?: string };
}) {
  const tenant = searchParams?.tenant ?? "riyadhstone";
  const factories = await listFactories(tenant);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>E-Factory  Factories</h1>
      <div style={{ opacity: 0.8, marginBottom: 16 }}>
        Tenant: <b>{tenant}</b> • Factories: <b>{factories.length}</b>
      </div>

      <div style={{ display: "grid", gap: 12 }}>
        {factories.map((f) => (
          <div key={f.id} style={{ border: "1px solid #2a2a2a", borderRadius: 12, padding: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <div>
                <div style={{ fontWeight: 700 }}>{f.displayName}</div>
                <div style={{ opacity: 0.75, fontSize: 13 }}>
                  id: {f.id}  status: {f.status} {f.isPrimary ? " primary" : ""}
                </div>
                <div style={{ opacity: 0.75, fontSize: 13 }}>
                  {f.legalEntity ?? ""} {f.location?.city ? ` ${f.location.city}` : ""} {f.location?.country ? `(${f.location.country})` : ""}
                </div>
              </div>
              <div style={{ opacity: 0.7, fontSize: 12, textAlign: "right" }}>
                updated<br />{new Date(f.updatedAt).toLocaleString()}
              </div>
            </div>
          </div>
        ))}

        {factories.length === 0 && (
          <div style={{ opacity: 0.75 }}>No factories found for this tenant.</div>
        )}
      </div>
    </main>
  );
}
