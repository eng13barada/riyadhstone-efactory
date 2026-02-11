import { NextResponse } from "next/server";
import { readJson } from "@/lib/efactory/storage";
import type { Tenant } from "@/types/efactory/tenant";

export const runtime = "nodejs";

type TenantsFile = { schema: string; items: Tenant[] };

export async function GET() {
  const file = await readJson<TenantsFile>("tenants", "tenants");
  return NextResponse.json({ ok: true, data: file?.items ?? [] });
}
