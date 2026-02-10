# Implementation Plan: E-Factory MVP (Investor Demo)

## Goal Description

Build a minimal investor-demo MVP for E-Factory as a multi-tenant platform, with RiyadhStone® as Tenant #1 and "Dhurma Factory Example" as the seed factory instance. This strictly adheres to the "Foundation Plan" and does NOT touch the Home Page.

## Proposed Changes

### Data Layer

#### [NEW] [data/tenants/riyadhstone.json](file:///d:/RiyadhStone®/E-Factory/RiyadhStone_Startup/data/tenants/riyadhstone.json)

- Seed data for RiyadhStone tenant (Legal Name, CR, Contact).

#### [NEW] [data/factories/dhurma.example.json](file:///d:/RiyadhStone®/E-Factory/RiyadhStone_Startup/data/factories/dhurma.example.json)

- Seed data for Dhurma Factory (Licenses, Equipment, Location).

### Infrastructure (Lib)

#### [NEW] [lib/efactory/storage.ts](file:///d:/RiyadhStone®/E-Factory/RiyadhStone_Startup/lib/efactory/storage.ts)

- Helper utility for reading/writing JSON files in `data/` directory.

### API Layer

#### [NEW] [app/api/efactory/tenants/route.ts](file:///d:/RiyadhStone®/E-Factory/RiyadhStone_Startup/app/api/efactory/tenants/route.ts)

- GET: List tenants.
- POST: Upsert tenant.

#### [NEW] [app/api/efactory/factory-profile/route.ts](file:///d:/RiyadhStone®/E-Factory/RiyadhStone_Startup/app/api/efactory/factory-profile/route.ts)

- GET: Retrieve factory profile.
- POST: Update factory profile.

### UI Layer (Admin)

#### [MODIFY] [app/efactory/admin/page.tsx](file:///d:/RiyadhStone®/E-Factory/RiyadhStone_Startup/app/efactory/admin/page.tsx)

- Display Tenant Card and Factory Compliance Summary.

#### [NEW] [app/efactory/admin/factory/page.tsx](file:///d:/RiyadhStone®/E-Factory/RiyadhStone_Startup/app/efactory/admin/factory/page.tsx)

- Editable Factory Profile form.

#### [NEW] [app/efactory/admin/maintenance/page.tsx](file:///d:/RiyadhStone®/E-Factory/RiyadhStone_Startup/app/efactory/admin/maintenance/page.tsx)

- Equipment list and maintenance logbook.

## Verification Plan

### Automated Tests

- N/A for this phase (manual verification preferred).

### Manual Verification

- Run `npm run dev`.
- Navigate to `/efactory/admin`.
- Verify Tenant and Factory data is loaded from JSON.
- Verify Compliance badges (Expiry dates).
- Check `/efactory/admin/factory` and `/efactory/admin/maintenance` render correctly.
- **CRITICAL**: Confirm `app/page.tsx` (Home Page) is unchanged and renders correctly.
