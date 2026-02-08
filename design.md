# RiyadhStone Design System (The Salmani Engineering Standard)

## 1. Color Palette (Strict Hex Codes)

### Backgrounds & Surfaces

- **Deep Charcoal (Hero/Dark Sections):** `#2B2825` (Must have 5% noise overlay).
- **Najdi Mud (Footer/Accents):** `#3E342B`
- **Limestone Beige (Pipeline/Light Sections):** `#F3EAD3` (Warm, sunny beige).
- **Engineering Cream (Cards/Input Fields):** `#FFFDF5`

### Functional Colors

- **Riyadh Gold (Primary Actions/Highlights):** `#C5A065`
- **Status Green (Completed):** `#6F8672` (Desaturated Palm Green).
- **Status Pending (In-Progress):** `#D4B56C`

## 2. Typography & Hierarchy

- **Font Family:** `Inter` or `Manrope`.
- **Hero Headings:**
  - Size: `text-6xl` to `text-8xl`.
  - Style: Mix of `font-light` (300) and `font-bold` (700).
  - Example: "ENGINEERING" (Light) + "STONE" (Bold).
- **Section Headers:** Uppercase, `tracking-[0.25em]`, Small size (`text-xs` or `text-sm`), Color: Gold.
- **Body Text:** Clean, legible, high contrast (`text-white/80` on dark, `text-charcoal` on light).

## 3. UI Components (The "Bento" Style)

- **Cards:** Sharp corners (`rounded-none`). Thin borders (`border-white/10` on dark).
- **Buttons:**
  - Primary: Solid Gold background, Dark text, Uppercase, Tracking-wide.
  - Secondary: Transparent background, Gold border.
- **Grids:** Use CSS Grid for the "Product Ecosystem" layout (as seen in Screen 5).

## 4. Visual Effects (Texture)

- **Noise Overlay:** All dark backgrounds MUST have a CSS noise filter to simulate stone texture.
- **Shadows:** Deep, diffuse shadows for floating elements.
