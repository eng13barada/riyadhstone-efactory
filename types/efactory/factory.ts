export type Factory = {
  id: string;            // e.g. "dharma-demo"
  tenantId: string;      // e.g. "riyadhstone"
  displayName: string;   // visible name
  status: "demo" | "planned" | "active" | "paused";
  location?: {
    country?: string;
    city?: string;
    area?: string;
  };
  profile?: Record<string, unknown>; // MVP: flexible object
  createdAt?: string;
};
