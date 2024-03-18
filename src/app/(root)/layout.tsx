import React from "react";

import { TChildrenProps } from "@/types";
import Section from "./_components/section";
import Header from "./_components/header";
import Footer from "./_components/footer";

const RootLayout = ({ children }: TChildrenProps) => {
  return (
    <main className="w-full h-full max-w-7xl flex items-center justify-center p-10 overflow-hidden">
      <Section>
        <Header />
        {children}
        <Footer />
      </Section>
    </main>
  );
};

export default RootLayout;
