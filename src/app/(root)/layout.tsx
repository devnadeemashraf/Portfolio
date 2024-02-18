import React from "react";

import { TChildrenProps } from "@/types";

import Navbar from "@/components/shared/navbar";

const RootLayout = ({ children }: TChildrenProps) => {
  return (
    <main className="wrapper flex flex-col items-center pb-10">
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
