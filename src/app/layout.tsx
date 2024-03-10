import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
          "flex items-center justify-center overflow-hidden",
          inter.className
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
