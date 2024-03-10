"use client";

import { useContext } from "react";
import Link from "next/link";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NavigationContext } from "@/context/navigation-context";

const NavigationHeader = () => {
  const { toggleSidebarVisiblity } = useContext(NavigationContext);

  return (
    <Button
      className="absolute top-4 left-4 text-foreground hover:text-primary"
      variant="outline"
      size="icon"
      onClick={() => toggleSidebarVisiblity()}
    >
      <Menu size={24} />
    </Button>
  );
};

export default NavigationHeader;
