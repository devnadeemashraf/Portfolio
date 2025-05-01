import "./globals.css";

import meta from "./metadata";
import type { Metadata } from "next";

import { IChildrenProps } from "@/types";

export const metadata: Metadata = meta;

export default function RootLayout({ children }: Readonly<IChildrenProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-syne antialiased p-[8px]`}>{children}</body>
    </html>
  );
}
