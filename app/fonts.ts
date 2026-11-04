import { Cormorant_Garamond, Manrope } from "next/font/google";

/**
 * Google fonts are fetched at build time by next/font and self-hosted in the
 * generated app output. Visitors do not make runtime requests to Google.
 */
export const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
