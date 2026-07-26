import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

import SmoothScroller from "@/components/SmoothScroller";

// Geist Variable — main sans-serif font
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  // Variable font: no need to specify weight
});

// Geist Mono Variable — for code/monospace elements
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Browser.supply | Premium Framer Website Templates for Business",
  description:
    "No back-and-forth with AI. Pick, edit, publish. Premium Framer website templates built to drive results. Go live within 1 hour.",
  keywords: [
    "Framer templates",
    "website templates",
    "business templates",
    "premium templates",
    "web design",
  ],
  authors: [{ name: "Ramish" }],
  openGraph: {
    type: "website",
    title: "Browser.supply | Premium Framer Website Templates",
    description:
      "No back-and-forth with AI. Pick, edit, publish. Premium Framer website templates built to drive results.",
    siteName: "Browser.supply",
  },
  twitter: {
    card: "summary_large_image",
    title: "Browser.supply | Premium Framer Website Templates",
    description: "Pick, edit, publish. Go live within 1 hour.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh flex flex-col antialiased">
        <SmoothScroller>
          <Navbar />
          <div style={{ paddingTop: "var(--navbar-h)" }}>
            {children}
          </div>
        </SmoothScroller>
      </body>
    </html>
  );
}
