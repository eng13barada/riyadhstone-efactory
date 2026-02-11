import type { MediaRegistry, EditablesRegistry } from "@/types/efactory/registry";
import { readJson } from "./storage";

const REGISTRY_COLLECTION = "registry";
const MEDIA_NAME = "media.registry";
const EDITABLES_NAME = "editables.registry";

const DEFAULT_MEDIA: MediaRegistry = {
  schema: "efactory.media.registry.v1",
  notes: "",
  items: [],
};

const DEFAULT_EDITABLES: EditablesRegistry = {
  schema: "efactory.editables.registry.v1",
  notes: "",
  items: [],
};

export async function getMediaRegistry(): Promise<MediaRegistry> {
  const data = await readJson<MediaRegistry>(REGISTRY_COLLECTION, MEDIA_NAME);
  return data ?? DEFAULT_MEDIA;
}

export async function getEditablesRegistry(): Promise<EditablesRegistry> {
  const data = await readJson<EditablesRegistry>(REGISTRY_COLLECTION, EDITABLES_NAME);
  return data ?? DEFAULT_EDITABLES;
}
