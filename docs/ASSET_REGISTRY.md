# ASSET REGISTRY

## Purpose
The Asset Registry (`data/assets/asset-registry.json`) is the single source of truth for all media assets used in the application. It maps logical asset IDs to physical file paths and tracks their status and version.

## How to Update
1.  **Add File**: Place the file in the appropriate `public/assets/...` directory following the naming convention.
2.  **Update Registry**: Add functionality to the JSON file under the correct Page/Section.
3.  **Fields**:
    - `id`: Unique identifier (e.g., `home_hero_bg`).
    - `role`: Functional role (e.g., `background`).
    - `variant`: `desktop` or `mobile`.
    - `version`: The version string (e.g., `v001`).
    - `path`: Relative path from public root (e.g., `/assets/images/RS-HOME-HERO-BG-D-v001.jpg`).
    - `status`: `placeholder`, `review`, `approved`, `deprecated`.
    - `notes`: Any specific context or credit information.

## Usage
- Components should ideally consume assets via a helper that reads this registry, or at least reference the paths defined here to ensure consistency.
