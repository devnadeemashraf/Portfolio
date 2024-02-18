"use client";

import React from "react";

import { socialHandles } from "@/constants";

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

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 mt-10 py-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Full Stack TypeScript Developer
        </h1>
        <p className="text-xl text-muted-foreground">
          an aspiring Rustacean and a design enthusiast.
        </p>
      </div>

      {/* Social Handles */}
      <SocialIconsContainer handles={socialHandles} />

      {/* Get In Touch */}
      <Dialog>
        <DialogTrigger>
          <Button asChild variant="outline" size="lg">
            <span>Get In Touch</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>You're Sending me an Email</DialogTitle>
            <DialogDescription>
              I would try my best to get back to you as soon as possible. Thanks
              a lot!
            </DialogDescription>
          </DialogHeader>
          <Contact />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
