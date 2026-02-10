# PROJECT GUARDRAILS

## 1. Home Page Freeze Rule
- **STRICTLY FORBIDDEN**: Modifying `app/page.tsx` (Home Page) or `app/layout.tsx` if it affects Home rendering.
- The Home Page is currently in a "Production Freeze" state. No experimental changes or refactors are allowed on this file until explicitly authorized.

## 2. Work Methodology
- **Page-by-Page, Section-by-Section**: We work on one isolated scope at a time.
- **No Hidden Refactors**: Do not "clean up" code outside the immediate scope of the active task.
- **Explicit Reviews**: Every major visual change requires user review before merging/committing.

## 3. Asset Replacement Principle
- **Placeholders First**: Use defined placeholders for missing assets.
- **Registry-Based**: All assets must be tracked in the Asset Registry.
- **No Hotlinking**: Do not use external URLs for critical assets; they must be local.

## 4. Governance
- **Naming Conventions**: Follow `docs/MEDIA_NAMING_VERSIONING.md` strictly.
- **Version Control**: Changes to core brand assets (logos, fonts) require version bumping in the registry.
