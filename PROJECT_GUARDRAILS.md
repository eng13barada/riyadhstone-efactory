# PROJECT_GUARDRAILS — RiyadhStone® + E-Factory (Antigravity)

## 0) Non-Negotiable Rule

- **خطة التأسيس**: ممنوع منعًا باتًا تعديل/إضافة/حذف أي شيء في:
  - `app/page.tsx`
  - أي مكوّنات تؤثر بصريًا على الـ Home Page
- أي عمل جديد يتم فقط داخل:
  - `app/efactory/**`
  - `app/api/efactory/**`
  - `lib/efactory/**`
  - `types/efactory/**`
  - `data/**`
  - `docs/**`

## 1) Product Model (Canonical)

- **E-Factory** = المنصة (SaaS لاحقًا) لإدارة وتشغيل المصانع
- **RiyadhStone®** = Tenant / Client #1 داخل E-Factory (Demo Tenant)
- “مثال مصنع ضرما” = Seed / Benchmark Factory Instance للـ MVP

## 2) Governance & Archiving

### 2.1 Naming & Versioning

- كل أصل/ملف/وسيط يجب أن يُسجل في Registry قبل استخدامه.
- لا تُستخدم أسماء عامة مثل: final, new, copy, last.
- الصيغة القياسية (مثال):
  - `RS_MEDIA_FACILITY_Exterior_01_v01_20260210.jpg`
  - `EF_REQ_Onboarding_v01_20260210.json`

### 2.2 Registries (Source of Truth)

- `data/registry/media.registry.json` : كل الوسائط + المالك + الاستخدام + النسخ
- `data/registry/editables.registry.json` : كل الملفات القابلة للتعديل + IDs ثابتة
- `data/assets/asset-registry.json` : الأصول الرقمية (شعارات/صور/نماذج…)
- أي ملف خارج هذه السجلات يعتبر “غير موثوق” حتى يُسجل.

## 3) Security & Roles (RBAC)

- صلاحيات وصول حسب الدور (Role-Based).
- منع ربط النظام بفرد واحد.
- نسخ احتياطية منتظمة (على مستوى البيانات والملفات الحيوية).
- حماية ملفات المشاريع/العقود/البيانات التجارية.

## 4) E-Factory MVP (Investor Demo Scope)

المطلوب كحد أدنى:

1. Tenant Dashboard
2. Factory Profile + Compliance Vault (licenses/permits/expiry)
3. Registries UI (media/editables/assets)
4. Requests Pipeline (inbox + schema + API)
5. Maintenance Lite (equipment + logbook + KPIs)
6. Production/QC Lite (daily log + inspection + photos)

## 5) Change Management

- كل مرحلة من خطة التأسيس تُقفل بـ Commit واضح:
  - `Foundation Checkpoint NN: <scope> (Home locked)`
- أي تغييرات خارج النطاق المسموح تعتبر خطأ ويجب الرجوع عنها فورًا.

## 6) Technical Constraints

- التخزين في مرحلة التأسيس: ملفات JSON داخل `data/**` (offline-friendly).
- API routes تحت `app/api/efactory/**` فقط.
- لا تعديل على Home routing أو UI خلال خطة التأسيس.
