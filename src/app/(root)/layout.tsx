"use client";

import React from "react";

import { TChildrenProps } from "@/types";
import NavigationSidebar from "@/components/shared/navigation/sidebar";
import NavigationHeader from "@/components/shared/navigation/header";

const RootLayout = ({ children }: TChildrenProps) => {
  return (
    <main className="w-full h-screen flex items-center justify-center overflow-hidden">
      <NavigationSidebar />
      <NavigationHeader />
      {children}
    </main>
  );
};

export default RootLayout;
