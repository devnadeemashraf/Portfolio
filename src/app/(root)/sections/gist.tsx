"use client";

import React from "react";

import { socialHandles } from "@/constants/socials";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import SocialIconsContainer from "@/app/(root)/components/social-icons-container";
import Contact from "@/components/shared/contact";

const GistSection = () => {
  return (
    <section
      id="gist"
      className="w-full h-screen flex-1 flex flex-col items-center justify-center gap-10 p-4"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tight md:text-5xl lg:text-7xl text-primary/60">
          TypeScript Developer
        </h1>
        <h1 className="scroll-m-20 max-w-[800px] text-center font-medium tracking-tight text-2xl text-muted-foreground">
          and a design enthusiast capable of working on the entire stack and
          delivering exceptional customer facing products!
        </h1>
      </div>

      {/* Social Handles */}
      <SocialIconsContainer handles={socialHandles} />

      {/* Get In Touch */}
      {/* <Dialog>
        <DialogTrigger>
          <Button asChild variant="outline" size="lg">
            <span>Get In Touch</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>You&apos;re Sending me an Email</DialogTitle>
            <DialogDescription>
              I would try my best to get back to you as soon as possible. Thanks
              a lot!
            </DialogDescription>
          </DialogHeader>
          <Contact />
        </DialogContent>
      </Dialog> */}
    </section>
  );
};

export default GistSection;
