import { readJson } from "./storage";
import type { MediaRegistry, EditablesRegistry } from "@/types/efactory/registry";

const MEDIA_PATH = "data/registry/media.registry.json";
const EDITABLES_PATH = "data/registry/editables.registry.json";

export async function getMediaRegistry(): Promise<MediaRegistry> {
  return readJson<MediaRegistry>(MEDIA_PATH, {
    schema: "efactory.media.registry.v1",
    notes: "",
    items: []
  });
}

export async function getEditablesRegistry(): Promise<EditablesRegistry> {
  return readJson<EditablesRegistry>(EDITABLES_PATH, {
    schema: "efactory.editables.registry.v1",
    notes: "",
    items: []
  });
}
