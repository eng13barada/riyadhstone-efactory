# Media Naming & Versioning (Baseline)

## Goal

A strict, machine-friendly naming system that works for:

- RiyadhStone public website
- E-Factory internal modules
- Client dashboard “click-to-request-change” workflow

## Rule

Export TWO variants for every media:

- Desktop (D)
- Mobile (M)

## Naming Format (Mandatory)

[BRAND]\_[PAGE]**[SECTION]**[ROLE]**[VARIANT]**v[###].[ext]

### Examples

RSW_HOME**HERO**BG**D**v001.jpg
RSW_HOME**HERO**BG**M**v001.jpg
RSW_PRODUCTS**CARD**3D_ISO**D**v003.png

### Fields

- BRAND: RSW (RiyadhStone Website), EFX (E-Factory)
- PAGE: HOME, PRODUCTS, ENGINEERING, QUALITY, LIBRARY...
- SECTION: HERO, PIPELINE, FINISHES, TRACKER...
- ROLE: BG, THUMB, ICON, 3D_ISO, 3D_DIM, TEXTURE...
- VARIANT: D or M
- v###: sequential version

## Archiving

- Never overwrite without version increment.
- Keep deprecated versions, mark them in registry as "deprecated": true
