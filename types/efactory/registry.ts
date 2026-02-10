export type MediaVariant = "desktop" | "mobile";
export type MediaStatus = "active" | "deprecated" | "draft";

export interface MediaRegistryItem {
  mediaKey: string;
  site: string;
  page: string;
  section: string;
  role: string; // image | icon | video | texture ...
  variant: MediaVariant;
  version: string; // v01, v02...
  status: MediaStatus;
  path: string; // public URL path
  alt?: string;
}

export interface MediaRegistry {
  schema: "efactory.media.registry.v1";
  notes?: string;
  items: MediaRegistryItem[];
}

export type EditableKind = "copy" | "media" | "layout" | "token";

export interface EditableRegistryItem {
  editableId: string;
  site: string;
  page: string;
  section: string;
  kind: EditableKind;
  label: string;
  defaultValue?: string;
  defaultMediaKey?: string;
}

export interface EditablesRegistry {
  schema: "efactory.editables.registry.v1";
  notes?: string;
  items: EditableRegistryItem[];
}
