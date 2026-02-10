import { NextResponse } from "next/server";
import { getMediaRegistry } from "@/lib/efactory/registry";

export async function GET() {
  const data = await getMediaRegistry();
  return NextResponse.json({ ok: true, data });
}
