---
name: Modern Paper
colors:
  surface: "#fbf9f4"
  surface-dim: "#dcdad5"
  surface-bright: "#fbf9f4"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f6f3ee"
  surface-container: "#f0eee9"
  surface-container-high: "#eae8e3"
  surface-container-highest: "#e4e2dd"
  on-surface: "#1b1c19"
  on-surface-variant: "#414844"
  inverse-surface: "#30312d"
  inverse-on-surface: "#f3f0eb"
  outline: "#717973"
  outline-variant: "#c1c8c2"
  surface-tint: "#3f6653"
  primary: "#012d1d"
  on-primary: "#ffffff"
  primary-container: "#1b4332"
  on-primary-container: "#86af99"
  inverse-primary: "#a5d0b9"
  secondary: "#5e5e5b"
  on-secondary: "#ffffff"
  secondary-container: "#e1dfdb"
  on-secondary-container: "#63635f"
  tertiary: "#252626"
  on-tertiary: "#ffffff"
  tertiary-container: "#3b3c3c"
  on-tertiary-container: "#a6a6a6"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#c1ecd4"
  primary-fixed-dim: "#a5d0b9"
  on-primary-fixed: "#002114"
  on-primary-fixed-variant: "#274e3d"
  secondary-fixed: "#e4e2dd"
  secondary-fixed-dim: "#c8c6c2"
  on-secondary-fixed: "#1b1c19"
  on-secondary-fixed-variant: "#474744"
  tertiary-fixed: "#e3e2e1"
  tertiary-fixed-dim: "#c7c6c5"
  on-tertiary-fixed: "#1a1c1c"
  on-tertiary-fixed-variant: "#464746"
  background: "#fbf9f4"
  on-background: "#1b1c19"
  surface-variant: "#e4e2dd"
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: "800"
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: "800"
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: "700"
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
    letterSpacing: 0em
  label-sm:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: "600"
    lineHeight: 18px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1120px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is built upon a "Modern Paper" aesthetic—a tactile, premium, and serene approach to digital interfaces. It targets an audience that values mindfulness, high-quality editorial content, and a quiet, focused user experience.

The style bridges the gap between **Minimalism** and **Tactile/Skeuomorphism**. By simulating the physical properties of high-quality paper stock, the UI evokes a sense of permanence and craftsmanship. The primary emotional response is one of calm sophistication, where the interface recedes to let the content breathe, much like a well-designed printed journal.

## Colors

The palette is rooted in organic, warm neutrals to simulate different weights and finishes of paper.

- **Background (Base):** #FDFCFB (Off-white) serves as the primary canvas.
- **Surface (Layered):** #F9F7F2 (Cream) is used for cards and elevated sections to create a subtle shift in plane.
- **Accents:** #1B4332 (Organic Green) acts as the "Ink," used for primary actions, critical typography, and branding elements.
- **Dividers/Subtle Details:** #E5E3DE (Light Grey) provides a soft contrast for structural lines without breaking the organic flow.

To enhance the tactile feel, a subtle grain or noise texture (opacity 2-3%) should be overlaid on the `#FDFCFB` and `#F9F7F2` surfaces to simulate paper fiber.

## Typography

The typography uses **Manrope** to achieve a modern, geometric look that remains highly legible. To achieve an "editorial" feel, the system relies on high contrast between weights.

- **Headlines:** Use Bold (700) or ExtraBold (800) with tighter letter-spacing to mimic traditional mastheads and titles.
- **Body:** Use Regular (400) weight with generous line height (1.5x - 1.6x) to ensure a comfortable reading experience, similar to a physical book.
- **Labels:** Use SemiBold (600) with slight tracking (0.05em) and uppercase styling for a precise, "stamped" appearance on the paper surface.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model on desktop to maintain the proportions of a printed page, transitioning to a fluid model on mobile devices.

- **Grid:** A 12-column grid is used for desktop (max-width 1120px) with 24px gutters.
- **Rhythm:** An 8px linear scale governs all padding and margins.
- **White Space:** Implementation should favor "over-spacing"—using larger margins (40px+) between major sections to emphasize the premium, unhurried nature of the design system.
- **Mobile:** Margins reduce to 16px, and multi-column layouts reflow into a single vertical column, maintaining vertical rhythm.

## Elevation & Depth

Depth is communicated through **Tonal Layers** and **Soft Shadows**, rather than heavy borders or bright highlights.

- **Layering:** Elements should appear as if they are sheets of paper stacked on top of one another. The "base" is the lightest (#FDFCFB), while "cards" sit slightly above using the cream tone (#F9F7F2).
- **Shadows:** Use extremely diffused, low-opacity shadows (Color: #1B4332 at 4% opacity) with a large blur radius (20px-40px) to simulate ambient light on a flat surface.
- **Pressed Effects:** For interactive elements like input fields or toggle states, use a subtle "inset" shadow (1px or 2px blur) to create a debossed, letterpress effect, making the element look physically stamped into the paper.

## Shapes

The shape language follows the **ROUND_EIGHT** principle, using an 8px base radius (0.5rem) for standard components.

- **Standard Cards/Buttons:** 8px (0.5rem) radius creates an organic, friendly feel that avoids the clinical sharpness of 0px corners.
- **Large Containers:** Use 16px (1rem) for larger sheets of content to emphasize the "heavy stock" paper aesthetic.
- **Interactive Small Elements:** Chips and tags may use a pill-shape (full rounding) to differentiate them from structural paper blocks.

## Components

- **Buttons:** Primary buttons use the Organic Green (#1B4332) with white text. They should have a subtle 8px corner radius. No heavy borders; use a very soft shadow to lift them off the paper.
- **Input Fields:** These should look "pressed" into the paper using a subtle inner shadow and a background color slightly darker than the base (#F9F7F2).
- **Cards:** Use the cream background (#F9F7F2) with a diffused shadow. Avoid borders entirely.
- **Chips/Tags:** Use a thin 1px stroke of the primary color at 20% opacity, or a solid cream background for a "label" look.
- **Lists:** Separate items with a very faint divider (#E5E3DE) that doesn't reach the edges of the container, mimicking a clean, printed list.
- **Selection Controls:** Checkboxes and radio buttons should feel like ink marks. When "on," they fill with #1B4332; when "off," they maintain a subtle, debossed inset appearance.
