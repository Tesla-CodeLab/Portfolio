import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ElectricParticles } from "@/components/ElectricParticles";
import { RandomLightningStreaks } from "@/components/RandomLightningStreaks";
import { LightningMediaOverlay } from "@/components/LightningMediaOverlay";

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const fontHeading = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Tesla Codelab | Growth Engineering Lab",
    template: "%s | Tesla Codelab",
  },
  description:
    "Tesla Codelab engineers scalable Instagram growth systems, Meta Ads engines, and conversion-driven funnels with analytics precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontBody.variable} ${fontHeading.variable} min-h-dvh bg-[var(--background)] text-[var(--foreground)] antialiased`}
      >
        <ElectricParticles />
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_12%_8%,rgba(0,245,255,0.16),transparent_58%),radial-gradient(900px_circle_at_85%_18%,rgba(0,163,255,0.10),transparent_58%)]" />
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(0,245,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,245,255,0.10)_1px,transparent_1px)] [background-size:72px_72px]" />
          <LightningMediaOverlay />
          <RandomLightningStreaks />
          <div className="electric-streaks" />
          <div className="noise-grain" />
        </div>

        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-5">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
