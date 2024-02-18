"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rss } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const { toast } = useToast();

  return (
    <header className="navbar">
      <Link href="/">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-muted-foreground">
          nadeemashraf.dev
        </h4>
      </Link>

      {/* Link Items */}
      <Button
        onClick={() =>
          toast({
            title: "Work In Progress",
            description:
              "Thank You for showing interest but this is section of page is still being worked upon.",
          })
        }
        variant="link"
        size="default"
      >
        <Rss size={18} className="mr-2" />
        <span>Blog</span>
      </Button>
    </header>
  );
};

export default Navbar;
