import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

import Providers from "@/components/providers";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Nadeem Ashraf",
  description: "Personal Portfolio and Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "w-full h-full flex items-center justify-center",
          montserrat.className
        )}
      >
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
