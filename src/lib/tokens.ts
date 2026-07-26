/**
 * Design Tokens — TypeScript mirror of globals.css custom properties.
 * Use this file when you need token values in JavaScript (e.g., inline styles,
 * Chart.js config, canvas drawing). CSS variables remain the source of truth.
 */

// ---------------------------------------------------------------------
// COLOR TOKENS
// ---------------------------------------------------------------------
export const colors = {
  bg: {
    base:     "#07070a",
    surface:  "#0d0d12",
    elevated: "#141419",
    overlay:  "#1a1a22",
    hover:    "#1f1f28",
  },
  border: {
    subtle:  "rgba(255, 255, 255, 0.06)",
    default: "rgba(255, 255, 255, 0.10)",
    strong:  "rgba(255, 255, 255, 0.18)",
  },
  text: {
    primary:   "#f2f2f5",
    secondary: "#9898a8",
    tertiary:  "#5a5a6e",
    inverse:   "#07070a",
  },
  accent: {
    300: "#bba8fe",
    400: "#9d82fd",
    500: "#7c5cfc",
    glow: "rgba(124, 92, 252, 0.25)",
  },
  utility: {
    white:   "#ffffff",
    success: "#34d399",
    warning: "#fbbf24",
    error:   "#f87171",
  },
} as const;

// ---------------------------------------------------------------------
// SPACING TOKENS (px values)
// ---------------------------------------------------------------------
export const spacing = {
  1:  4,
  2:  8,
  3:  12,
  4:  16,
  5:  20,
  6:  24,
  8:  32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
} as const;

// ---------------------------------------------------------------------
// RADIUS TOKENS
// ---------------------------------------------------------------------
export const radius = {
  xs:   4,
  sm:   6,
  md:   10,
  lg:   14,
  xl:   20,
  "2xl": 28,
  full: 9999,
} as const;

// ---------------------------------------------------------------------
// TYPOGRAPHY TOKENS  (strict 4px grid — every value = 4 × n)
// ---------------------------------------------------------------------
export const fontSize = {
  xs:   "0.75rem",    /* 12px  = 4×3  */
  sm:   "0.875rem",   /* 14px  (body kecil / label) */
  base: "1rem",       /* 16px  = 4×4  */
  lg:   "1.25rem",    /* 20px  = 4×5  */
  xl:   "1.5rem",     /* 24px  = 4×6  */
  "2xl":"1.75rem",    /* 28px  = 4×7  */
  "3xl":"2rem",       /* 32px  = 4×8  */
  "4xl":"2.5rem",     /* 40px  = 4×10 */
  "5xl":"3.5rem",     /* 56px  = 4×14 */
  "6xl":"4.5rem",     /* 72px  = 4×18 */
} as const;

export const fontWeight = {
  normal:   400,
  medium:   500,
  semibold: 600,
  bold:     700,
} as const;

export const letterSpacing = {
  tighter: "-0.04em",
  tight:   "-0.02em",
  normal:  "0em",
  wide:    "0.06em",
  wider:   "0.10em",
  widest:  "0.15em",
} as const;

// ---------------------------------------------------------------------
// SHADOW TOKENS
// ---------------------------------------------------------------------
export const shadows = {
  sm:   "0 1px 3px rgba(0,0,0,0.4)",
  md:   "0 4px 16px rgba(0,0,0,0.5)",
  lg:   "0 12px 40px rgba(0,0,0,0.6)",
  xl:   "0 24px 64px rgba(0,0,0,0.7)",
  glow: "0 0 32px rgba(124,92,252,0.20)",
  glowStrong: "0 0 48px rgba(124,92,252,0.40)",
} as const;

// ---------------------------------------------------------------------
// ANIMATION TOKENS
// ---------------------------------------------------------------------
export const duration = {
  fast:   "120ms",
  base:   "200ms",
  slow:   "350ms",
  slower: "600ms",
} as const;

export const easing = {
  default: "cubic-bezier(0.4, 0, 0.2, 1)",
  spring:  "cubic-bezier(0.34, 1.56, 0.64, 1)",
  in:      "cubic-bezier(0.4, 0, 1, 1)",
  out:     "cubic-bezier(0, 0, 0.2, 1)",
} as const;

// ---------------------------------------------------------------------
// BREAKPOINTS
// ---------------------------------------------------------------------
export const breakpoints = {
  sm:  480,
  md:  768,
  lg:  1024,
  xl:  1280,
  "2xl": 1440,
} as const;

// ---------------------------------------------------------------------
// LAYOUT TOKENS
// ---------------------------------------------------------------------
export const layout = {
  containerMax:  1200,
  containerWide: 1440,
  navbarHeight:  64,
} as const;

// ---------------------------------------------------------------------
// TYPE HELPERS
// ---------------------------------------------------------------------
export type ColorToken = typeof colors;
export type SpacingToken = keyof typeof spacing;
export type RadiusToken = keyof typeof radius;
