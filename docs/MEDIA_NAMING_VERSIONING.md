# MEDIA NAMING & VERSIONING

## Naming Convention
All media assets must follow this strict naming format to ensure discoverability and version control.

**Format:**
`[Brand]-[Page]-[Section]-[Role]-[Variant]-v###.[ext]`

### Segments
1.  **Brand**: `RS` (RiyadhStone)
2.  **Page**: `HOME`, `PRODUCTS`, `SYSTEMS`, `FACTORY`, `LIB`, `CONTACT`, `SHARED`
3.  **Section**: `HERO`, `TRUST`, `PIPELINE`, `GRID`, `FINISHES`, `TRACKER`, `FOOTER`, `NAV`
4.  **Role**: `BG` (Background), `IMG` (Image), `ICON`, `TEXTURE`, `DIAGRAM`, `VID`
5.  **Variant**: `D` (Desktop), `M` (Mobile), `T` (Tablet), `TH` (Thumbnail)
6.  **Version**: `v001`, `v002`, `v010` (Incrementing)

### Examples
- **Home Hero Background (Desktop)**: `RS-HOME-HERO-BG-D-v001.jpg`
- **Product Family Card Image (Mobile)**: `RS-PRODUCTS-FAMILY-CARDIMG-M-v001.png`
- **Cream Honed Texture**: `RS-SHARED-FINISHES-TEXTURE-CREAM-D-v001.jpg`

## Versioning Rules
- **Baseline**: `v000` or `v001` - The initial asset utilized in the design.
- **Working**: `v00x` - Internal iterations or placeholder/FPO (For Position Only) assets.
- **Approved**: `v100`+ - Assets formally approved for production deployment.

## Deprecation
- Do not delete old versions immediately. Move them to a `_archive` folder if they are no longer needed but history is preserved.
- Update the `asset-registry.json` to reflect the status of deprecated assets.
