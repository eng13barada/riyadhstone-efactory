# DESIGN TOKENS (Extracted)

## 1. Colors
### Brand Primary
- **Charcoal (Dark)**: `#1a1918` / `#2B2825` (Used for BG and heavy text)
- **Cream/Beige (Light)**: `#F3EAD3` / `#f3ead3` (Used for Trust section BG, text contrast)
- **Gold (Accent)**: `#C5A572` (Approximate based on "brand-gold" usage - *Verify in tailwind config*)

### Neutrals
- **White**: `#FFFFFF` (Text, Borders)
- **Black**: `#000000` (Overlays)

## 2. Typography
### Font Family
- **Sans**: `Inter`, `system-ui`, `sans-serif` (Clean, modern, "Edge-like")
- **Technical/Mono**: `JetBrains Mono`, `monospace` (For data, tracker details)

### Scale
- **Display**: `text-6xl`, `text-8xl`, `text-9xl` (Hero headers)
- **H1**: `text-4xl`, `text-5xl`
- **H2/H3**: `text-2xl`, `text-3xl` (Section headers)
- **Body**: `text-base`, `text-lg` (Readable paragraphs)
- **Label**: `text-xs`, `text-sm`, `uppercase`, `tracking-widest` (Nav, buttons, tags)

## 3. Layout & Spacing
- **Container**: `max-w-7xl mx-auto`
- **Section Padding**: `py-24` (Standard vertical rhythm)
- **Grid Gap**: `gap-6`, `gap-12`

## 4. Effects
- **Shadows**: Soft, diffuse shadows for floating cards (`shadow-2xl`)
- **Borders**: Thin, often translucent (`border-white/10`, `border-brand-gold`)
- **Overlays**: Gradient overlays for text readability on images (`bg-black/40`)
- **Glassmorphism**: `backdrop-blur-md` used in Navbar and Tracker cards.

## 5. Animation (Motion)
- **Transitions**: `duration-300`, `duration-500`, `ease-out`
- **Interactions**: Hover scales (`scale-105`), Opacity fades (`opacity-0` -> `opacity-100`)
