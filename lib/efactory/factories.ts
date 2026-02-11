import type { Factory, FactoriesFile } from "@/types/efactory/factory";
import { readJson, writeJson } from "./storage";

const COLLECTION = "factories";
const NAME = "factories";

const DEFAULT: FactoriesFile = {
  schema: "efactory.factories.v1",
  notes: "",
  items: [],
};

export async function getFactoriesFile(): Promise<FactoriesFile> {
  const data = await readJson<FactoriesFile>(COLLECTION, NAME);
  return data ?? DEFAULT;
}

export async function listFactories(tenantId?: string): Promise<Factory[]> {
  const file = await getFactoriesFile();
  return tenantId ? file.items.filter(f => f.tenantId === tenantId) : file.items;
}

export async function getFactoryById(factoryId: string): Promise<Factory | null> {
  const file = await getFactoriesFile();
  return file.items.find(f => f.id === factoryId) ?? null;
}

export async function getPrimaryFactory(tenantId: string): Promise<Factory | null> {
  const file = await getFactoriesFile();
  return file.items.find(f => f.tenantId === tenantId && f.isPrimary) ?? null;
}

export async function upsertFactory(factory: Factory): Promise<Factory> {
  const file = await getFactoriesFile();
  const now = new Date().toISOString();

  const idx = file.items.findIndex(f => f.id === factory.id);
  const next: Factory = {
    ...factory,
    createdAt: idx >= 0 ? file.items[idx].createdAt : (factory.createdAt ?? now),
    updatedAt: now,
  };

  if (idx >= 0) file.items[idx] = next;
  else file.items.push(next);

  await writeJson<FactoriesFile>(COLLECTION, NAME, file);
  return next;
}
