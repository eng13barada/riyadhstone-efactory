export type EFactoryRequestType = "copy" | "media" | "layout" | "token";
export type EFactoryRequestStatus =
  | "new"
  | "triage"
  | "in_progress"
  | "review"
  | "approved"
  | "done"
  | "rejected";

export type EFactoryPriority = "low" | "normal" | "high" | "urgent";

export interface EFactoryActor {
  actorType: "client" | "internal";
  actorId: string; // e.g., "riyadhstone" or internal user id
}

export interface EFactoryTarget {
  site: "RiyadhStone" | string;
  page: string;     // e.g., "Home"
  section: string;  // e.g., "Hero"
  editableId: string; // e.g., "RS_WEB_HOME_HERO_TITLE"
}

export interface EFactoryRequestPayload {
  newText?: string;
  mediaKey?: string;
  tokenPatch?: Record<string, unknown>;
  layoutPatch?: Record<string, unknown>;
}

export interface EFactoryRequest {
  id: string;
  createdAt: string; // ISO
  createdBy: EFactoryActor;
  target: EFactoryTarget;
  requestType: EFactoryRequestType;
  payload: EFactoryRequestPayload;
  status: EFactoryRequestStatus;
  priority: EFactoryPriority;
  notes?: string;
}
