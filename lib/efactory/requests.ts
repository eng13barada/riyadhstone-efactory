import { readJson, writeJson } from "./storage";
import type { EFactoryRequest } from "@/types/efactory/request";

const INBOX_PATH = "data/requests/inbox.json";

export async function listRequests(): Promise<EFactoryRequest[]> {
  return readJson<EFactoryRequest[]>(INBOX_PATH, []);
}

export async function addRequest(req: EFactoryRequest): Promise<void> {
  const all = await listRequests();
  all.unshift(req); // newest first
  await writeJson(INBOX_PATH, all);
}
