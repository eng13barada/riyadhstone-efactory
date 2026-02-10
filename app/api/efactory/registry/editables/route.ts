import { NextResponse } from "next/server";
import { getEditablesRegistry } from "@/lib/efactory/registry";

export async function GET() {
  const data = await getEditablesRegistry();
  return NextResponse.json({ ok: true, data });
}
