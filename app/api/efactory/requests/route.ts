import { NextResponse } from "next/server";
import { addRequest, listRequests } from "@/lib/efactory/requests";
import { makeRequestId } from "@/lib/efactory/ids";
import type { EFactoryRequest } from "@/types/efactory/request";

export async function GET() {
  const data = await listRequests();
  return NextResponse.json({ ok: true, data });
}

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<EFactoryRequest>;

  const now = new Date();
  const existing = await listRequests();
  const nextSeq = existing.length + 1;

  const newReq: EFactoryRequest = {
    id: body.id ?? makeRequestId("RSQ", now, nextSeq),
    createdAt: body.createdAt ?? now.toISOString(),
    createdBy: body.createdBy ?? { actorType: "client", actorId: "riyadhstone" },
    target: body.target ?? { site: "RiyadhStone", page: "Unknown", section: "Unknown", editableId: "UNKNOWN" },
    requestType: body.requestType ?? "copy",
    payload: body.payload ?? {},
    status: body.status ?? "new",
    priority: body.priority ?? "normal",
    notes: body.notes ?? ""
  };

  await addRequest(newReq);
  return NextResponse.json({ ok: true, data: newReq });
}
