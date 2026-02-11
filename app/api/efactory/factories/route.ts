import { NextResponse } from "next/server";
import { readJson } from "@/lib/efactory/storage";
import type { Factory } from "@/types/efactory/factory";

export const runtime = "nodejs";

type FactoriesFile = { schema: string; items: Factory[] };

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const tenant = (searchParams.get("tenant") ?? "").trim();

  const file = await readJson<FactoriesFile>("factories", "factories");
  const items = file?.items ?? [];

  const filtered = tenant ? items.filter(f => f.tenantId === tenant) : items;

  return NextResponse.json({ ok: true, data: filtered });
}
