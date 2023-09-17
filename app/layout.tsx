import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coronary Heart Disease Calculator - Framingham Risk Score",
  description: "Coronary Heart Disease Calculator - a tool to measure the risk of coronary heart disease using the Framinham Risk Score.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`w-screen ${inter.className}`}>{children}</body>
    </html>
  );
}
